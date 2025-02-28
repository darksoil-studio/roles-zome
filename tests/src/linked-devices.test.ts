import { LinkedDevicesStore } from '@darksoil-studio/linked-devices-zome';
import { encodeHashToBase64 } from '@holochain/client';
import { dhtSync, pause, runScenario } from '@holochain/tryorama';
import { toPromise } from '@tnesh-stack/signals';
import { assert, expect, test } from 'vitest';

import { RolesStore } from '../../ui/src/roles-store.js';
import { setup, waitUntil } from './setup.js';

function createExampleEntryThatOnlyEditorsCanCreate(rolesStore: RolesStore) {
	return rolesStore.client.client.callZome({
		role_name: 'roles_test',
		zome_name: 'example',
		fn_name: 'create_example',
		payload: 'example',
	});
}

test('Roles assigned to an agent also extend to their linked devices', async () => {
	await runScenario(async scenario => {
		const { alice, bob, carol: bob2 } = await setup(scenario);

		let roles = alice.store.allRoles;
		assert.equal(roles.length, 2);
		assert.equal(roles[0], 'admin');
		assert.equal(roles[1], 'editor');

		await linkDevices(bob.linkedDevicesStore, bob2.linkedDevicesStore);

		// Wait for the created entry to be propagated to the other node.
		await dhtSync(
			[alice.player, bob.player, bob2.player],
			alice.player.cells[0].cell_id[0],
		);

		await expect(() =>
			createExampleEntryThatOnlyEditorsCanCreate(alice.store),
		).rejects.toThrowError();

		await waitUntil(
			async () =>
				(await toPromise(bob.store.assigneesForRole.get('admin'))).length === 1,
			10000,
		);

		let admins = await toPromise(bob.store.assigneesForRole.get('admin'));
		assert.equal(admins.length, 1);
		assert.equal(
			encodeHashToBase64(admins[0]),
			encodeHashToBase64(alice.player.agentPubKey),
		);

		// Bob can't assign a role to itself
		await expect(() =>
			bob.store.client.assignRole('editor', [bob.player.agentPubKey]),
		).rejects.toThrowError();
		await expect(() =>
			createExampleEntryThatOnlyEditorsCanCreate(bob.store),
		).rejects.toThrowError();
		const [assignRoleCreateLinkHash] = await alice.store.client.assignRole(
			'editor',
			[bob.player.agentPubKey],
		);

		// Wait for the created entry to be propagated to the other node.
		await dhtSync(
			[alice.player, bob.player, bob2.player],
			alice.player.cells[0].cell_id[0],
		);

		await waitUntil(
			async () =>
				(await toPromise(bob2.store.assigneesForRole.get('editor'))).length ===
				1,
			10_000,
		);

		let editors = await toPromise(bob2.store.assigneesForRole.get('editor'));
		assert.equal(editors.length, 1);
		assert.equal(
			encodeHashToBase64(editors[0]),
			encodeHashToBase64(bob.player.agentPubKey),
		);

		await waitUntil(
			async () =>
				(await bob2.store.client.queryUndeletedRoleClaimsForRole('editor'))
					.length === 1,
			40_000,
		);

		await createExampleEntryThatOnlyEditorsCanCreate(bob2.store);

		// Bob can't request unassigment of a role to itself
		await expect(() =>
			bob2.store.client.requestUnassignRole('editor', assignRoleCreateLinkHash),
		).rejects.toThrowError();

		let pendingUnassigments = await toPromise(bob2.store.pendingUnassignments);
		assert.equal(pendingUnassigments.length, 0);

		await alice.store.client.requestUnassignRole(
			'editor',
			assignRoleCreateLinkHash,
		);
		await pause(100);
		pendingUnassigments = await toPromise(alice.store.pendingUnassignments);
		assert.equal(pendingUnassigments.length, 1);

		await dhtSync(
			[alice.player, bob.player, bob2.player],
			alice.player.cells[0].cell_id[0],
		);

		pendingUnassigments = await toPromise(bob2.store.pendingUnassignments);
		assert.equal(pendingUnassigments.length, 1);

		await waitUntil(async () => {
			const roleClaims =
				await bob.store.client.queryUndeletedRoleClaimsForRole('editor');
			return roleClaims.length === 0;
		}, 20_000);

		await waitUntil(async () => {
			const roleClaims =
				await bob2.store.client.queryUndeletedRoleClaimsForRole('editor');
			return roleClaims.length === 0;
		}, 20_000);

		await dhtSync(
			[alice.player, bob.player, bob2.player],
			alice.player.cells[0].cell_id[0],
		);

		await waitUntil(
			async () =>
				(await toPromise(bob2.store.assigneesForRole.get('editor'))).length ===
				0,
			60_000,
		);

		await expect(() =>
			createExampleEntryThatOnlyEditorsCanCreate(bob.store),
		).rejects.toThrowError();
	});
});

async function linkDevices(
	store1: LinkedDevicesStore,
	store2: LinkedDevicesStore,
) {
	const store1Passcode = [1, 3, 7, 2];
	const store2Passcode = [9, 3, 8, 4];

	await store1.client.prepareLinkDevicesRequestor(
		store2.client.client.myPubKey,
		store1Passcode,
	);
	await store2.client.prepareLinkDevicesRecipient(
		store1.client.client.myPubKey,
		store2Passcode,
	);

	await store1.client.requestLinkDevices(
		store2.client.client.myPubKey,
		store2Passcode,
	);
	await store2.client.acceptLinkDevices(
		store1.client.client.myPubKey,
		store1Passcode,
	);
}
