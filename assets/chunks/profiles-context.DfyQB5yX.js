import{_ as t}from"./tslib.es6.kHcLnhpD.js";import{p as i}from"./context.CPR-9Z5w.js";import{e as r,a as s}from"./context.BUKtNEF6.js";import{n as p,a as o,c as n,t as l}from"./property.D7sMmF5L.js";import{a as c,b as a,x as f,i as m,r as x}from"./roles-client.BoEB0TfU.js";import{S as h}from"./signal-watcher.DFfrqssu.js";import"./range.CeOrHCaV.js";import"./isIterateeCall.CSfPBF3e.js";import"./toFinite.CWHk3G1P.js";import"./isSymbol.XF-DE6V6.js";const d=p("hc_zome_profiles/store");let e=class extends h(x){constructor(){super(...arguments),this.zome="profiles"}connectedCallback(){if(super.connectedCallback(),!this.store){if(!this.role)throw new Error('<profiles-context> must have a role="YOUR_DNA_ROLE" property, eg: <profiles-context role="role1">');if(!this.client)throw new Error(`<profiles-context> must either:
				a) be placed inside <app-client-context>
					or 
				b) receive an AppClient property (eg. <profiles-context .client=\${client}>) 
					or 
				c) receive a store property (eg. <profiles-context .store=\${store}>)`);this.store=new c(new a(this.client,this.role,this.zome))}}render(){return f`<slot></slot>`}};e.styles=m`
		:host {
			display: contents;
		}
	`;t([r({context:d}),r({context:i}),o({type:Object})],e.prototype,"store",void 0);t([n({context:s,subscribe:!0})],e.prototype,"client",void 0);t([o()],e.prototype,"role",void 0);t([o()],e.prototype,"zome",void 0);e=t([l("profiles-context")],e);export{e as ProfilesContext};
