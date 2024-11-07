import {
	ActionHash,
	AgentPubKey,
	AppClient,
	Delete,
	EntryHash,
	Link,
	Record,
	SignedActionHashed,
} from '@holochain/client';
import { EntryRecord, ZomeClient } from '@tnesh-stack/utils';

import { RoleClaim, RolesSignal } from './types.js';

export class RolesClient extends ZomeClient<RolesSignal> {
	constructor(
		public client: AppClient,
		public roleName: string,
		public zomeName = 'roles',
	) {
		super(client, roleName, zomeName);
	}

	/** Role Claim */

	async queryUndeletedRoleClaimsForRole(role: string): Promise<Array<Link>> {
		return this.callZome('query_undeleted_role_claims_for_role', role);
	}

	// Return the EntryHash for the path `all_roles`
	async roleBaseAddress(role: string): Promise<EntryHash> {
		return this.callZome('role_base_address', role);
	}

	/** Assignees */

	async getAssigneesForRole(role: string): Promise<Array<Link>> {
		return this.callZome('get_assignees_for_role', role);
	}

	async getRolesForAssignee(assignee: AgentPubKey): Promise<Array<Link>> {
		return this.callZome('get_roles_for_assignee', assignee);
	}

	async assignRole(
		role: string,
		assignees: AgentPubKey[],
	): Promise<ActionHash[]> {
		return this.callZome('assign_role', {
			role,
			assignees,
		});
	}

	async reassignRolesToLinkedDevice(
		linkedDevice: AgentPubKey,
	): Promise<ActionHash[]> {
		return this.callZome('reassign_roles_to_linked_device', linkedDevice);
	}

	async requestUnassignRole(
		role: string,
		roleToAssigneeCreateLinkHash: ActionHash,
	): Promise<void> {
		await this.callZome('request_unassign_role', {
			role,
			role_to_assignee_create_link_hash: roleToAssigneeCreateLinkHash,
		});
	}

	/** Pending Unassigments */

	async getPendingUnassignments(): Promise<Array<Link>> {
		return this.callZome('get_pending_unassignments', undefined);
	}
}
