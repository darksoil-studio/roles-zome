import {
	collectionSignal,
	fromPromise,
	liveLinksSignal,
	mapCompleted,
	pipe,
} from '@darksoil-studio/holochain-signals';
import {
	HashType,
	MemoHoloHashMap,
	MemoMap,
	retype,
} from '@darksoil-studio/holochain-utils';
import { LinkedDevicesClient } from '@darksoil-studio/linked-devices-zome';
import { AgentPubKey } from '@holochain/client';
import { decode } from '@msgpack/msgpack';

import { RoleConfig } from './role-config.js';
import { RolesClient } from './roles-client.js';
import { AssigneeRoleClaimLinkTag } from './types.js';

export interface RolesStoreConfig {
	roles_config: Array<RoleConfig>;
}

function uniquify(strings: string[]): string[] {
	return Array.from(new Set(strings));
}

export class RolesStore {
	constructor(
		public client: RolesClient,
		public config: RolesStoreConfig,
		public linkedDevicesClient?: LinkedDevicesClient,
	) {
		if (linkedDevicesClient) {
			linkedDevicesClient.onSignal(signal => {
				if (
					signal.type !== 'LinkCreated' ||
					signal.link_type !== 'AgentToLinkedDevices'
				)
					return;

				const linkedDevice = signal.action.hashed.content.target_address;

				this.client.reassignRolesToLinkedDevice(
					retype(linkedDevice, HashType.AGENT),
				);
			});
		}
	}

	/** All Roles */

	get allRoles(): string[] {
		return ['admin', ...this.config.roles_config.map(r => r.role)];
	}

	private roleBaseAddress = new MemoMap((role: string) =>
		fromPromise(() => this.client.roleBaseAddress(role)),
	);

	assigneesForRoleLinks = new MemoMap((role: string) =>
		pipe(
			this.roleBaseAddress.get(role),
			roleBaseAddress =>
				liveLinksSignal(
					this.client,
					roleBaseAddress,
					() => this.client.getAssigneesForRole(role),
					'RoleToAssignee',
				),
			links =>
				links.map(l => {
					l.target = retype(l.target, HashType.AGENT);
					return l;
				}),
		),
	);

	assigneesForRole = new MemoMap((role: string) =>
		mapCompleted(this.assigneesForRoleLinks.get(role), links =>
			links.map(l => l.target),
		),
	);

	rolesForAgent = new MemoHoloHashMap((agent: AgentPubKey) =>
		mapCompleted(
			liveLinksSignal(
				this.client,
				agent,
				() => this.client.getRolesForAssignee(agent),
				'AssigneeRoleClaim',
			),
			links =>
				uniquify(
					links.map(link => {
						const tag = decode(link.tag) as AssigneeRoleClaimLinkTag;
						return tag.role;
					}),
				),
		),
	);

	pendingUnassignments = collectionSignal(
		this.client,
		() => this.client.getPendingUnassignments(),
		'PendingUnassignments',
		4000,
	);

	myRoles = this.rolesForAgent.get(this.client.client.myPubKey);
}
