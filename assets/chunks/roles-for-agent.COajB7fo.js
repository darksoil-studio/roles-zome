import{a as m,m as g,s as f,c,h}from"./role-config.HuCNaWQK.js";import{x as n,r as u}from"./roles-client.DcXMkolf.js";import{S as d}from"./signal-watcher.DfgS61mm.js";import{n as v,t as y}from"./property.D124yKuw.js";import{r as _}from"./context.DEBmPvHP.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";var b=Object.defineProperty,x=Object.getOwnPropertyDescriptor,p=(r,e,o,a)=>{for(var t=a>1?void 0:a?x(e,o):e,i=r.length-1,l;i>=0;i--)(l=r[i])&&(t=(a?l(e,o,t):l(t))||t);return a&&t&&b(e,o,t),t};let s=class extends d(u){roleSingularName(r){var e;return r===m.role?m.singular_name:(e=this.store.config.roles_config.find(o=>o.role===r))==null?void 0:e.singular_name}renderRoles(r){return n`<div class="row" part="body" style="gap: 4px;">
			${r.map(e=>n`<sl-tag>${this.roleSingularName(e)}</sl-tag>`)}
		</div>`}render(){const r=this.store.rolesForAgent.get(this.agent).get();switch(r.status){case"pending":return n``;case"error":return n`<display-error
					.error=${r.error}
					.headline=${g("Error fetching the roles for this member.")}
					tooltip
				></display-error>`;case"completed":return this.renderRoles(r.value)}}};s.styles=f;p([v(h("agent"))],s.prototype,"agent",2);p([c({context:_,subscribe:!0})],s.prototype,"store",2);s=p([y("roles-for-agent")],s);export{s as RolesForAgent};
