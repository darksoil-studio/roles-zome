import { ActionCommittedSignal } from '@darksoil-studio/holochain-utils';
import {
	ActionHash,
	AgentPubKey,
	Create,
	CreateLink,
	Delete,
	DeleteLink,
	DnaHash,
	EntryHash,
	Record,
	SignedActionHashed,
	Update,
} from '@holochain/client';

export type RolesSignal = ActionCommittedSignal<EntryTypes, LinkTypes>;

export type EntryTypes = { type: 'RoleClaim' } & RoleClaim;

export type LinkTypes = string;

export interface RoleClaim {
	role: string;

	assign_role_create_link_hash: ActionHash;
}

export interface PendingUnassignmentLinkTag {
	role: string;

	all_agents_for_assignee: Array<[AgentPubKey, ActionHash]>;
}

export interface AssigneeRoleClaimLinkTag {
	role: string;
	// mode: AssigneeRoleClaimLinkMode,
}
