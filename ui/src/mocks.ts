import { createLinkToLink } from '@darksoil-studio/holochain-signals';
import {
	AgentPubKeyMap,
	HashType,
	HoloHashMap,
	RecordBag,
	ZomeMock,
	decodeEntry,
	entryState,
	fakeCreateAction,
	fakeCreateLinkAction,
	fakeDeleteEntry,
	fakeEntry,
	fakeRecord,
	fakeUpdateEntry,
	hash,
	pickBy,
	retype,
} from '@darksoil-studio/holochain-utils';
import {
	ActionHash,
	AgentPubKey,
	AppClient,
	CreateLink,
	Delete,
	EntryHash,
	Link,
	NewEntryAction,
	Record,
	SignedActionHashed,
	decodeHashFromBase64,
	encodeHashToBase64,
	fakeActionHash,
	fakeAgentPubKey,
	fakeDnaHash,
	fakeEntryHash,
} from '@holochain/client';
import { encode } from '@msgpack/msgpack';

import { RolesClient } from './roles-client.js';
import { RoleClaim } from './types.js';

export class RolesZomeMock extends ZomeMock implements AppClient {
	constructor(myPubKey?: AgentPubKey) {
		super('roles_test', 'roles', 'rolestest', myPubKey);
	}
	/** Role Claim */
	roleToAssignee: Map<string, Link[]> = new Map();
	assigneeToRole: HoloHashMap<AgentPubKey, Link[]> = new HoloHashMap();
	assigneeRoleClaims: HoloHashMap<AgentPubKey, Link[]> = new HoloHashMap();
	pendingUnassignments: Link[] = [];

	get_assignees_for_role(role: string) {
		return this.roleToAssignee.get(role) || [];
	}

	get_roles_for_assignee(assignee: AgentPubKey) {
		return this.assigneeRoleClaims.get(assignee) || [];
	}

	async role_base_address(role: string) {
		return hash(role, HashType.ENTRY);
	}

	query_undeleted_role_claims_for_role(role: string) {
		const myRoleClaims = this.assigneeRoleClaims.get(this.myPubKey) || [];

		return myRoleClaims.filter(claim => (claim.tag as any) === role);
	}

	async assign_role({
		role,
		assignees,
	}: {
		role: string;
		assignees: AgentPubKey[];
	}): Promise<Array<ActionHash>> {
		const roleHash = await this.role_base_address(role);
		return Promise.all(
			assignees.map(async assignee => {
				const lastLinks = this.roleToAssignee.get(role) || [];
				const createLink = await fakeCreateLinkAction(
					retype(roleHash, HashType.ENTRY),
					assignee,
					0,
					encode({
						role,
					}),
				);
				const linkRecord = await fakeRecord(createLink);
				this.roleToAssignee.set(role, [
					...lastLinks,
					createLinkToLink(
						linkRecord.signed_action as SignedActionHashed<CreateLink>,
					),
				]);
				setTimeout(() => {
					this.emitSignal({
						type: 'LinkCreated',
						link_type: 'RoleToAssignee',
						action: linkRecord.signed_action,
					});
				});

				const lastLinks2 = this.assigneeToRole.get(assignee) || [];
				const createLink2 = await fakeCreateLinkAction(
					retype(assignee, HashType.ENTRY),
					roleHash,
				);
				const linkRecord2 = await fakeRecord(createLink2);
				this.assigneeToRole.set(assignee, [
					...lastLinks2,
					createLinkToLink(
						linkRecord2.signed_action as SignedActionHashed<CreateLink>,
					),
				]);
				setTimeout(() => {
					this.emitSignal({
						type: 'LinkCreated',
						link_type: 'AssigneeToRole',
						action: linkRecord2.signed_action,
					});
				});

				if (
					encodeHashToBase64(assignee) === encodeHashToBase64(this.myPubKey)
				) {
					const lastLinks3 = this.assigneeRoleClaims.get(assignee) || [];
					const createLink3 = await fakeCreateLinkAction(
						retype(assignee, HashType.ENTRY),
						roleHash,
						0,
						encode({ role }),
					);
					const linkRecord3 = await fakeRecord(createLink3);
					this.assigneeRoleClaims.set(assignee, [
						...lastLinks3,
						createLinkToLink(
							linkRecord3.signed_action as SignedActionHashed<CreateLink>,
						),
					]);
					setTimeout(() => {
						this.emitSignal({
							type: 'LinkCreated',
							link_type: 'AssigneeRoleClaim',
							action: linkRecord3.signed_action,
						});
					});
				}

				return linkRecord.signed_action.hashed.hash;
			}),
		);
	}

	async request_unassign_role({
		role,
		role_to_assignee_create_link_hash,
	}: {
		role: string;
		role_to_assignee_create_link_hash: ActionHash;
	}) {
		const roleToAssigneeLinks = this.roleToAssignee.get(role)!;
		const roleToAssigneeLink = roleToAssigneeLinks.find(
			link =>
				encodeHashToBase64(link.create_link_hash) ===
				encodeHashToBase64(role_to_assignee_create_link_hash),
		);
		const lastLinks = this.pendingUnassignments;
		const createLink2 = await fakeCreateLinkAction(
			await this.role_base_address('pendingunassignments'),
			role_to_assignee_create_link_hash,
			2,
			encode({
				role,
				all_agents_for_assignee: [
					[roleToAssigneeLink!.target, roleToAssigneeLink!.target],
				],
			}),
		);
		const linkRecord2 = await fakeRecord(createLink2);
		this.pendingUnassignments = [
			...lastLinks,
			createLinkToLink(
				linkRecord2.signed_action as SignedActionHashed<CreateLink>,
			),
		];
		setTimeout(() => {
			this.emitSignal({
				type: 'LinkCreated',
				link_type: 'PendingUnassignments',
				action: linkRecord2.signed_action,
			});
		});
	}

	async get_pending_unassignments() {
		return this.pendingUnassignments;
	}
}
