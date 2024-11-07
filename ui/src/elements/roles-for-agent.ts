import { ActionHash, AgentPubKey } from '@holochain/client';
import { consume } from '@lit/context';
import { msg } from '@lit/localize';
import '@shoelace-style/shoelace/dist/components/tag/tag.js';
import { hashProperty, sharedStyles } from '@tnesh-stack/elements';
import '@tnesh-stack/elements/dist/elements/display-error.js';
import { AsyncResult, SignalWatcher, joinAsync } from '@tnesh-stack/signals';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { rolesStoreContext } from '../context.js';
import { adminRoleConfig } from '../role-config.js';
import { RolesStore } from '../roles-store.js';

function flatten<T>(strings: T[][]): T[] {
	return ([] as T[]).concat(...strings);
}

@customElement('roles-for-agent')
export class RolesForAgent extends SignalWatcher(LitElement) {
	@property(hashProperty('agent'))
	agent!: AgentPubKey;

	@consume({ context: rolesStoreContext, subscribe: true })
	rolesStore!: RolesStore;

	roleSingularName(role: string) {
		if (role === adminRoleConfig.role) return adminRoleConfig.singular_name;
		return this.rolesStore.config.roles_config.find(r => r.role === role)
			?.singular_name;
	}

	renderRoles(roles: string[]) {
		return html`<div class="row" part="body" style="gap: 4px;">
			${roles.map(
				role => html`<sl-tag>${this.roleSingularName(role)}</sl-tag>`,
			)}
		</div>`;
	}

	render() {
		const roles = this.rolesStore.rolesForAgent.get(this.agent).get();

		switch (roles.status) {
			case 'pending':
				return html``;
			case 'error':
				return html`<display-error
					.error=${roles.error}
					.headline=${msg('Error fetching the roles for this member.')}
					tooltip
				></display-error>`;
			case 'completed':
				return this.renderRoles(roles.value);
		}
	}

	static styles = sharedStyles;
}
