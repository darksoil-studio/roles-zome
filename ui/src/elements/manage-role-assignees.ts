import {
	ProfilesProvider,
	profilesProviderContext,
} from '@darksoil-studio/profiles-provider';
import '@darksoil-studio/profiles-provider/dist/elements/profile-list-item.js';
import '@darksoil-studio/profiles-provider/dist/elements/search-users.js';
import { SearchUsers } from '@darksoil-studio/profiles-provider/dist/elements/search-users.js';
import {
	ActionHash,
	AgentPubKey,
	Link,
	encodeHashToBase64,
} from '@holochain/client';
import { consume } from '@lit/context';
import { localized, msg, str } from '@lit/localize';
import { mdiDelete, mdiInformationOutline } from '@mdi/js';
import { decode } from '@msgpack/msgpack';
import { SlDialog } from '@shoelace-style/shoelace';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import '@shoelace-style/shoelace/dist/components/tag/tag.js';
import { sharedStyles } from '@tnesh-stack/elements';
import { notifyError, wrapPathInSvg } from '@tnesh-stack/elements';
import { SignalWatcher, joinAsyncMap, toPromise } from '@tnesh-stack/signals';
import { HashType, mapValues, retype, slice } from '@tnesh-stack/utils';
import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { rolesStoreContext } from '../context.js';
import { RoleConfig, adminRoleConfig } from '../role-config.js';
import { RolesStore } from '../roles-store.js';
import { PendingUnassignmentLinkTag } from '../types.js';

@localized()
@customElement('manage-role-assignees')
export class ManageRoleAssignees extends SignalWatcher(LitElement) {
	@property()
	role!: string;

	@consume({ context: rolesStoreContext, subscribe: true })
	@property()
	store!: RolesStore;

	@state()
	committing = false;

	@state()
	removingRole = false;

	async addMembersToRole(role: string, users: AgentPubKey[][]) {
		try {
			this.committing = true;

			const firstAgents = users.map(agents => agents[0]);

			await this.store.client.assignRole(role, firstAgents);

			this.dispatchEvent(
				new CustomEvent('role-assigned-to-members', {
					composed: true,
					bubbles: true,
					detail: {
						role,
						assignees: firstAgents,
					},
				}),
			);

			(
				this.shadowRoot!.getElementById(`add-members-${role}`) as SlDialog
			).hide();
		} catch (e: unknown) {
			console.error(e);
			notifyError(msg('Error adding members to the role'));
		}
		this.committing = false;
	}

	async removeRole(
		role: string,
		assignee: AgentPubKey,
		assignRoleCreateLinkHash: ActionHash,
	) {
		try {
			this.removingRole = true;
			await this.store.client.requestUnassignRole(
				role,
				assignRoleCreateLinkHash,
			);

			this.dispatchEvent(
				new CustomEvent('unassig-role-requested', {
					composed: true,
					bubbles: true,
					detail: {
						role,
						assignee,
					},
				}),
			);

			(
				this.shadowRoot!.getElementById(
					`remove-role-${role}-for-${encodeHashToBase64(assignee)}`,
				) as SlDialog
			).hide();
		} catch (e: unknown) {
			console.error(e);
			notifyError(msg('Error removing the role'));
		}
		this.removingRole = false;
	}

	/**
	 * Profiles provider
	 */
	@consume({ context: profilesProviderContext, subscribe: true })
	@property()
	profilesProvider!: ProfilesProvider;

	name(agent: AgentPubKey): string | undefined {
		const profile = this.profilesProvider.currentProfileForAgent
			.get(agent)
			.get();
		if (profile.status !== 'completed') return undefined;
		return profile.value?.name;
	}

	renderRemoveRoleAction(
		roleConfig: RoleConfig,
		assigneeLink: Link,
		assigneesCount: number,
	) {
		const pendingUnassignments = this.store.pendingUnassignments.get();
		switch (pendingUnassignments.status) {
			case 'pending':
				return html`<sl-skeleton></sl-skeleton>`;
			case 'error':
				return html`<display-error
					.headline=${msg('Error fetching the pending unassignments')}
					tooltip
					.error=${pendingUnassignments.error}
				></display-error>`;
			case 'completed':
				const pendingUnassignment = !!pendingUnassignments.value.find(
					link =>
						encodeHashToBase64(link.target) ===
							encodeHashToBase64(assigneeLink.create_link_hash) &&
						(decode(link.tag) as PendingUnassignmentLinkTag).role ===
							roleConfig.role,
				);

				if (pendingUnassignment) {
					return html`<sl-tag>${msg('Remove Role Requested')}</sl-tag>`;
				}

				return html`
					<sl-dialog
						hoist
						.label=${msg(`Remove role`)}
						id="remove-role-${roleConfig.role}-for-${encodeHashToBase64(
							assigneeLink.target,
						)}"
					>
						<div class="column" style="gap: 12px">
							<span
								>${msg(
									str`Are you sure you want to request ${this.name(retype(assigneeLink.target, HashType.AGENT))} to remove its ${roleConfig.singular_name} role?`,
								)}</span
							>
							<span
								>${msg(
									'Their role will actually be removed the next time this member is online again.',
								)}</span
							>
						</div>
						<sl-button
							slot="footer"
							@click=${() =>
								(
									this.shadowRoot!.getElementById(
										`remove-role-${roleConfig.role}-for-${encodeHashToBase64(assigneeLink.target)}`,
									) as SlDialog
								).hide()}
							>${msg('Cancel')}</sl-button
						>
						<sl-button
							slot="footer"
							variant="primary"
							.loading=${this.committing}
							@click=${() => {
								this.removeRole(
									roleConfig.role,
									retype(assigneeLink.target, HashType.AGENT),
									assigneeLink.create_link_hash,
								);
							}}
							>${msg('Remove Role')}</sl-button
						>
					</sl-dialog>

					<sl-icon-button
						.src=${wrapPathInSvg(mdiDelete)}
						.disabled=${roleConfig.role === adminRoleConfig.role &&
						assigneesCount < 2}
						@click=${() => {
							(
								this.shadowRoot?.getElementById(
									`remove-role-${roleConfig.role}-for-${encodeHashToBase64(assigneeLink.target)}`,
								) as SlDialog
							).show();
						}}
					></sl-icon-button>
				`;
		}
	}

	renderRole(
		roleConfig: RoleConfig,
		assigneesLinks: Link[],
		iAmAdmin: boolean,
	) {
		return html` <sl-dialog
				id="add-members-${roleConfig.role}"
				.label=${msg(str`Add members as ${roleConfig.plural_name}`)}
			>
				<search-users
					.excludedUsers=${assigneesLinks.map(link =>
						retype(link.target, HashType.AGENT),
					)}
					id="search-users-${roleConfig.role}"
					.label=${msg('Search Member')}
					.emptyListPlaceholder=${msg('No members selected yet.')}
					@users-changed=${() => this.requestUpdate()}
				></search-users>
				<sl-button
					slot="footer"
					@click=${() =>
						(
							this.shadowRoot!.getElementById(
								`add-members-${roleConfig.role}`,
							) as SlDialog
						).hide()}
					>${msg('Cancel')}</sl-button
				>
				<sl-button
					slot="footer"
					variant="primary"
					.disabled=${!(
						(
							this.shadowRoot?.getElementById(
								`search-users-${roleConfig.role}`,
							) as SearchUsers
						)?.value.length > 0
					)}
					.loading=${this.committing}
					@click=${() => {
						const users = (
							this.shadowRoot?.getElementById(
								`search-users-${roleConfig.role}`,
							) as SearchUsers
						).value;
						this.addMembersToRole(roleConfig.role, users);
					}}
					>${msg('Add Members')}</sl-button
				>
			</sl-dialog>
			<div class="column" style="flex: 1">
				<div class="row" style="align-items: center">
					<span class="title" style="flex: 1">${roleConfig.plural_name}</span>
					${iAmAdmin
						? html`
								<sl-button
									@click=${() =>
										(
											this.shadowRoot!.getElementById(
												`add-members-${roleConfig.role}`,
											) as SlDialog
										).show()}
									>${msg('Add Members')}</sl-button
								>
							`
						: html``}
				</div>
				<sl-divider></sl-divider>
				<span class="placeholder">${roleConfig.description}</span>

				<div class="column" style="gap: 12px; margin-top: 24px;">
					${assigneesLinks.length === 0
						? html`
								<div
									class="row"
									style="gap: 12px; flex: 1; align-items: center; justify-content: center"
								>
									<sl-icon
										style="color: grey; height: 32px; width: 32px;"
										.src=${wrapPathInSvg(mdiInformationOutline)}
									></sl-icon>
									<span class="placeholder"
										>${msg('No members have this role assigned.')}</span
									>
								</div>
							`
						: assigneesLinks.map(
								link => html`
									<div class="row" style="align-items: center;">
										<profile-list-item
											.agentPubKey=${retype(link.target, HashType.AGENT)}
										></profile-list-item>
										<span style="flex: 1"></span>
										${iAmAdmin
											? this.renderRemoveRoleAction(
													roleConfig,
													link,
													assigneesLinks.length,
												)
											: html``}
									</div>
								`,
							)}
				</div>
			</div>`;
	}

	assigneesForRoleAndIAmAdmin() {
		const assignees = this.store.assigneesForRoleLinks.get(this.role).get();
		const myRoles = this.store.myRoles.get();
		if (assignees.status !== 'completed') return assignees;
		if (myRoles.status !== 'completed') return myRoles;

		const iAmAdmin = myRoles.value.includes(adminRoleConfig.role);
		return {
			status: 'completed' as const,
			value: {
				assignees: assignees.value,
				iAmAdmin,
			},
		};
	}

	render() {
		const assigneesAndIAmAdmin = this.assigneesForRoleAndIAmAdmin();

		switch (assigneesAndIAmAdmin.status) {
			case 'pending':
				return html`<div
					style="display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1;"
				>
					<sl-spinner style="font-size: 2rem;"></sl-spinner>
				</div>`;
			case 'error':
				return html`<display-error
					.headline=${msg('Error fetching the role details.')}
					.error=${assigneesAndIAmAdmin.error}
				></display-error>`;
			case 'completed':
				const config =
					this.role === adminRoleConfig.role
						? adminRoleConfig
						: this.store.config.roles_config.find(r => r.role === this.role)!;

				return this.renderRole(
					config,
					assigneesAndIAmAdmin.value.assignees,
					assigneesAndIAmAdmin.value.iAmAdmin,
				);
		}
	}

	static styles = [
		sharedStyles,
		css`
			sl-divider {
				--spacing: var(--sl-spacing-small);
			}
		`,
	];
}
