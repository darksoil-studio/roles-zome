import { appClientContext } from '@darksoil-studio/holochain-elements';
import {
	LinkedDevices,
	LinkedDevicesStore,
	linkedDevicesStoreContext,
} from '@darksoil-studio/linked-devices-zome';
import { LinkedDevicesContext } from '@darksoil-studio/linked-devices-zome/dist/elements/linked-devices-context.js';
import { AppClient } from '@holochain/client';
import { consume, provide } from '@lit/context';
import { ContextProviderEvent } from '@lit/context/lib/controllers/context-provider.js';
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { rolesStoreContext } from '../context.js';
import { RolesClient } from '../roles-client.js';
import { RolesStore, RolesStoreConfig } from '../roles-store.js';

@customElement('roles-context')
export class RolesContext extends LitElement {
	@provide({ context: rolesStoreContext })
	@property({ type: Object })
	store!: RolesStore;

	@consume({ context: appClientContext, subscribe: true })
	client!: AppClient;

	@consume({ context: linkedDevicesStoreContext, subscribe: true })
	linkedDevicesStore!: LinkedDevicesStore;

	/// REQUIRED
	@property()
	config!: RolesStoreConfig;

	/// REQUIRED
	@property()
	role!: string;

	@property()
	zome = 'roles';

	connectedCallback() {
		super.connectedCallback();
		if (this.store) return;
		if (!this.role) {
			throw new Error(
				`<roles-context> must have a role="YOUR_DNA_ROLE" property, eg: <roles-context role="role1">`,
			);
		}
		if (!this.client) {
			throw new Error(
				`<roles-context> must either:
				a) be placed inside <app-client-context>
					or 
				b) receive an AppClient property (eg. <roles-context .client=\${client}>) 
					or 
				c) receive a store property (eg. <roles-context .store=\${store}>)`,
			);
		}
		if (!this.config) {
			throw new Error(
				`<roles-context> must be initialized with a "RolesStoreConfig" (eg. <roles-context .config=\${{roles_config: [...]}}>)`,
			);
		}

		this.addEventListener('context-provider', e => {
			if (e.context === linkedDevicesStoreContext) {
				const context = e.target as LinkedDevicesContext;
				setTimeout(() => {
					this.store = new RolesStore(
						new RolesClient(this.client, this.role, this.zome),
						this.config,
						context.store.client,
					);
				});
			}
		});
		this.store = new RolesStore(
			new RolesClient(this.client, this.role, this.zome),
			this.config,
			this.linkedDevicesStore?.client,
		);
	}

	render() {
		return html`<slot></slot>`;
	}

	static styles = css`
		:host {
			display: contents;
		}
	`;
}
