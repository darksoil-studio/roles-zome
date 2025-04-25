import{n as m,a as c,c as x,t as u}from"./property.D7sMmF5L.js";import{r as v,e as a,c as h,x as d,i as g}from"./roles-client.BoEB0TfU.js";import{e as w,a as b}from"./context.BUKtNEF6.js";import{r as y}from"./context.BP_UAPDX.js";import"./range.CeOrHCaV.js";import"./isIterateeCall.CSfPBF3e.js";import"./toFinite.CWHk3G1P.js";import"./isSymbol.XF-DE6V6.js";const f=m("linked_devices/store");var C=Object.defineProperty,_=Object.getOwnPropertyDescriptor,r=(s,t,i,n)=>{for(var o=n>1?void 0:n?_(t,i):t,l=s.length-1,p;l>=0;l--)(p=s[l])&&(o=(n?p(t,i,o):p(o))||o);return n&&o&&C(t,i,o),o};let e=class extends v{constructor(){super(...arguments),this.zome="roles"}connectedCallback(){var s;if(super.connectedCallback(),!this.store){if(!this.role)throw new Error('<roles-context> must have a role="YOUR_DNA_ROLE" property, eg: <roles-context role="role1">');if(!this.client)throw new Error(`<roles-context> must either:
				a) be placed inside <app-client-context>
					or 
				b) receive an AppClient property (eg. <roles-context .client=\${client}>) 
					or 
				c) receive a store property (eg. <roles-context .store=\${store}>)`);if(!this.config)throw new Error('<roles-context> must be initialized with a "RolesStoreConfig" (eg. <roles-context .config=${{roles_config: [...]}}>)');this.addEventListener("context-provider",t=>{if(t.context===f){const i=t.target;setTimeout(()=>{this.store=new a(new h(this.client,this.role,this.zome),this.config,i.store.client)})}}),this.store=new a(new h(this.client,this.role,this.zome),this.config,(s=this.linkedDevicesStore)==null?void 0:s.client)}}render(){return d`<slot></slot>`}};e.styles=g`
		:host {
			display: contents;
		}
	`;r([w({context:y}),c({type:Object})],e.prototype,"store",2);r([x({context:b,subscribe:!0})],e.prototype,"client",2);r([x({context:f,subscribe:!0})],e.prototype,"linkedDevicesStore",2);r([c()],e.prototype,"config",2);r([c()],e.prototype,"role",2);r([c()],e.prototype,"zome",2);e=r([u("roles-context")],e);export{e as RolesContext};
