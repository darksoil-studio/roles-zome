import { sharedStyles } from '@darksoil-studio/holochain-elements';
import { SignalWatcher } from '@darksoil-studio/holochain-signals';
import { consume } from '@lit/context';
import { localized, msg, str } from '@lit/localize';
import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { rolesStoreContext } from '../context.js';
import { adminRoleConfig } from '../role-config.js';
import { RolesStore } from '../roles-store.js';
import './manage-role-assignees.js';

/**
 * @element manage-all-roles
 */
@localized()
@customElement('manage-all-roles')
export class ManageAllRoles extends SignalWatcher(LitElement) {
	/**
	 * @internal
	 */
	@consume({ context: rolesStoreContext, subscribe: true })
	store!: RolesStore;

	render() {
		return html`
			<div class="column" style="gap: 32px; flex: 1">
				${this.store.allRoles.map(
					role => html`
						<manage-role-assignees .role=${role}></manage-role-assignees>
					`,
				)}
			</div>
		`;
	}

	static styles = [sharedStyles];
}
