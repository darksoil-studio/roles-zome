import {
	LinkedDevicesClient,
	LinkedDevicesStore,
} from '@darksoil-studio/linked-devices-zome';
import { AppBundle, AppWebsocket, encodeHashToBase64 } from '@holochain/client';
import {
	AgentApp,
	Scenario,
	enableAndGetAgentApp,
	pause,
} from '@holochain/tryorama';
import { decode } from '@msgpack/msgpack';
import { decompressSync } from 'fflate';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { RolesClient } from '../../ui/src/roles-client.js';
import { RolesStore, RolesStoreConfig } from '../../ui/src/roles-store.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function rolesTestHapp(): AppBundle {
	const rolesTestHapp = path.join(__dirname, '../../workdir/roles_test.happ');

	const appBundleBytes = fs.readFileSync(rolesTestHapp);

	return decode(decompressSync(new Uint8Array(appBundleBytes))) as any;
}

export function patchCallZome(appWs: AppWebsocket) {
	const callZome = appWs.callZome;

	appWs.callZome = async req => {
		try {
			const result = await callZome(req);
			return result;
		} catch (e) {
			if (
				!e.toString().includes('Socket is not open') &&
				!e.toString().includes('ClientClosedWithPendingRequests')
			) {
				throw e;
			}
		}
	};
}

export async function setup(scenario: Scenario) {
	const aliceConductor = await scenario.addConductor();
	const alicePubKey = await aliceConductor.adminWs().generateAgentPubKey();

	const appBundle = rolesTestHapp();

	const role = appBundle.manifest.roles.find(r => r.name === 'roles_test')!;
	role.dna.modifiers = {
		...role.dna.modifiers,
		properties: {
			progenitors: [encodeHashToBase64(alicePubKey)],
		} as any,
	};
	const appBundleSource = { bundle: appBundle };

	const appInfo = await aliceConductor.installApp(appBundleSource, {
		agentPubKey: alicePubKey,
		networkSeed: scenario.networkSeed,
	});

	const port = await aliceConductor.attachAppInterface();

	const issued = await aliceConductor.adminWs().issueAppAuthenticationToken({
		installed_app_id: appInfo.installed_app_id,
	});
	const appWs = await aliceConductor.connectAppWs(issued.token, port);

	patchCallZome(appWs);

	const alice: AgentApp = await enableAndGetAgentApp(
		aliceConductor.adminWs(),
		appWs,
		appInfo,
	);
	// Add 2 players with the test hApp to the Scenario. The returned players
	// can be destructured.
	const [bob, carol] = await scenario.addPlayersWithApps([
		{ appBundleSource },
		{ appBundleSource },
	]);

	await aliceConductor
		.adminWs()
		.authorizeSigningCredentials(
			(Object.values(appInfo.cell_info)[0][0] as any).provisioned.cell_id,
		);

	await bob.conductor
		.adminWs()
		.authorizeSigningCredentials(bob.cells[0].cell_id);

	await carol.conductor
		.adminWs()
		.authorizeSigningCredentials(carol.cells[0].cell_id);

	const config: RolesStoreConfig = {
		roles_config: [
			{
				role: 'editor',
				description: 'An editor role can create special entries',
				plural_name: 'editors',
				singular_name: 'editor',
			},
		],
	};

	const aliceLinkedDevicesClient = new LinkedDevicesClient(
		appWs as any,
		'roles_test',
	);
	const aliceStore = new RolesStore(
		new RolesClient(appWs as any, 'roles_test'),
		config,
		aliceLinkedDevicesClient,
	);
	const aliceLinkedDevicesStore = new LinkedDevicesStore(
		aliceLinkedDevicesClient,
	);

	patchCallZome(bob.appWs as AppWebsocket);
	patchCallZome(carol.appWs as AppWebsocket);

	const bobLinkedDevicesClient = new LinkedDevicesClient(
		bob.appWs as any,
		'roles_test',
	);
	const bobStore = new RolesStore(
		new RolesClient(bob.appWs as any, 'roles_test'),
		config,
		bobLinkedDevicesClient,
	);
	const bobLinkedDevicesStore = new LinkedDevicesStore(bobLinkedDevicesClient);

	const carolLinkedDevicesClient = new LinkedDevicesClient(
		carol.appWs as any,
		'roles_test',
	);
	const carolStore = new RolesStore(
		new RolesClient(carol.appWs as any, 'roles_test'),
		config,
		carolLinkedDevicesClient,
	);
	const carolLinkedDevicesStore = new LinkedDevicesStore(
		carolLinkedDevicesClient,
	);

	// Shortcut peer discovery through gossip and register all agents in every
	// conductor of the scenario.
	await scenario.shareAllAgents();

	await aliceStore.client.getAssigneesForRole('');
	await bobStore.client.getAssigneesForRole('');
	await carolStore.client.getAssigneesForRole('');

	return {
		alice: {
			player: { conductor: aliceConductor, appWs, ...alice },
			store: aliceStore,
			linkedDevicesStore: aliceLinkedDevicesStore,
		},
		bob: {
			player: bob,
			store: bobStore,
			linkedDevicesStore: bobLinkedDevicesStore,
		},
		carol: {
			player: carol,
			store: carolStore,
			linkedDevicesStore: carolLinkedDevicesStore,
		},
	};
}
