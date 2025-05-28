import { toPromise } from '@darksoil-studio/holochain-signals';
import { encodeHashToBase64 } from '@holochain/client';
import { pause, runScenario } from '@holochain/tryorama';
import { assert, expect, test } from 'vitest';

import { RolesStore } from '../../ui/src/roles-store.js';
import { setup, waitUntil } from './setup.js';
import { dhtSync } from './sync.js';

function createExampleEntryThatOnlyEditorsCanCreate(rolesStore: RolesStore) {
	return rolesStore.client.client.callZome({
		role_name: 'roles_test',
		zome_name: 'example',
		fn_name: 'create_example',
		payload: 'example',
	});
}

test('Assign role lifecycle', async () => {
	await runScenario(async scenario => {
		const { alice, bob } = await setup(scenario);

		let roles = alice.store.allRoles;
		assert.equal(roles.length, 2);
		assert.equal(roles[0], 'admin');
		assert.equal(roles[1], 'editor');

		// Wait for the created entry to be propagated to the other node.
		await dhtSync([alice.player, bob.player], alice.player.cells[0].cell_id[0]);

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
		await dhtSync([alice.player, bob.player], alice.player.cells[0].cell_id[0]);

		await waitUntil(
			async () =>
				(await toPromise(bob.store.assigneesForRole.get('editor'))).length ===
				1,
			10_000,
		);

		let editors = await toPromise(bob.store.assigneesForRole.get('editor'));
		assert.equal(editors.length, 1);
		assert.equal(
			encodeHashToBase64(editors[0]),
			encodeHashToBase64(bob.player.agentPubKey),
		);

		await waitUntil(
			async () =>
				(await bob.store.client.queryUndeletedRoleClaimsForRole('editor'))
					.length === 1,
			60_000,
		);

		await createExampleEntryThatOnlyEditorsCanCreate(bob.store);

		// Bob can't request unassigment of a role to itself
		await expect(() =>
			bob.store.client.requestUnassignRole('editor', assignRoleCreateLinkHash),
		).rejects.toThrowError();

		let pendingUnassigments = await toPromise(bob.store.pendingUnassignments);
		assert.equal(pendingUnassigments.length, 0);

		await alice.store.client.requestUnassignRole(
			'editor',
			assignRoleCreateLinkHash,
		);
		await pause(1000);
		pendingUnassigments = await toPromise(alice.store.pendingUnassignments);
		assert.equal(pendingUnassigments.length, 1);

		await waitUntil(async () => {
			const pendingUnassignments =
				await bob.store.client.getPendingUnassignments();

			return pendingUnassignments.length === 1;
		}, 80_000);

		await waitUntil(async () => {
			const roleClaims =
				await bob.store.client.queryUndeletedRoleClaimsForRole('editor');
			return roleClaims.length === 0;
		}, 20_000);

		await dhtSync([alice.player, bob.player], alice.player.cells[0].cell_id[0]);

		await pause(1000);

		editors = await toPromise(bob.store.assigneesForRole.get('editor'));

		assert.equal(editors.length, 0);

		await expect(() =>
			createExampleEntryThatOnlyEditorsCanCreate(bob.store),
		).rejects.toThrowError();
	});
});

test('Admin can assign admin that assigns a role', async () => {
	await runScenario(async scenario => {
		const { alice, bob, carol } = await setup(scenario);

		let roles = alice.store.allRoles;
		assert.equal(roles.length, 2);
		assert.equal(roles[0], 'admin');
		assert.equal(roles[1], 'editor');

		// Wait for the created entry to be propagated to the other node.
		await dhtSync(
			[alice.player, bob.player, carol.player],
			alice.player.cells[0].cell_id[0],
		);

		await waitUntil(
			async () =>
				(await toPromise(bob.store.assigneesForRole.get('admin'))).length === 1,
			30_000,
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
		const [bobAssignRoleCreateLinkHash] = await alice.store.client.assignRole(
			'admin',
			[bob.player.agentPubKey],
		);

		// Wait for the created entry to be propagated to the other node.
		await dhtSync(
			[alice.player, bob.player, carol.player],
			alice.player.cells[0].cell_id[0],
		);

		await waitUntil(
			async () =>
				(await toPromise(bob.store.assigneesForRole.get('admin'))).length === 2,
			30_000,
		);

		let pendingUnassigments = await toPromise(bob.store.pendingUnassignments);
		assert.equal(pendingUnassigments.length, 0);

		await expect(() =>
			createExampleEntryThatOnlyEditorsCanCreate(carol.store),
		).rejects.toThrowError();

		// Avoid ChainHeadMove with the notification created at the post_commit
		await pause(5000);

		const [carolAssignRoleCreateLinkHash] = await bob.store.client.assignRole(
			'editor',
			[carol.player.agentPubKey],
		);

		// Wait for the created entry to be propagated to the other node.
		await dhtSync(
			[alice.player, bob.player, carol.player],
			alice.player.cells[0].cell_id[0],
		);

		pendingUnassigments = await toPromise(carol.store.pendingUnassignments);
		assert.equal(pendingUnassigments.length, 0);

		await waitUntil(
			async () =>
				(await carol.store.client.queryUndeletedRoleClaimsForRole('editor'))
					.length === 1,
			60_000,
		);

		let editors = await toPromise(carol.store.assigneesForRole.get('editor'));
		assert.equal(editors.length, 1);
		assert.equal(
			encodeHashToBase64(editors[0]),
			encodeHashToBase64(carol.player.agentPubKey),
		);
		await createExampleEntryThatOnlyEditorsCanCreate(carol.store);
		let roleClaims =
			await carol.store.client.queryUndeletedRoleClaimsForRole('editor');
		assert.equal(roleClaims.length, 1);

		await bob.store.client.requestUnassignRole(
			'editor',
			carolAssignRoleCreateLinkHash,
		);

		await waitUntil(async () => {
			const roleClaims =
				await carol.store.client.queryUndeletedRoleClaimsForRole('editor');
			return roleClaims.length === 0;
		}, 60_000);

		await waitUntil(async () => {
			const editors = await toPromise(
				carol.store.assigneesForRole.get('editor'),
			);
			return editors.length === 0;
		}, 60_000);

		await expect(() =>
			createExampleEntryThatOnlyEditorsCanCreate(carol.store),
		).rejects.toThrowError();
	});
});
