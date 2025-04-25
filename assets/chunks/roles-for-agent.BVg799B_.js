import{s as g,a as c,c as f,t as h}from"./property.D7sMmF5L.js";import{a as m,m as u,h as d,l as v}from"./role-config.BBU_pl26.js";import{x as l,r as y}from"./roles-client.BoEB0TfU.js";import{S as _}from"./signal-watcher.DFfrqssu.js";import{r as b}from"./context.BP_UAPDX.js";import"./range.CeOrHCaV.js";import"./isIterateeCall.CSfPBF3e.js";import"./toFinite.CWHk3G1P.js";import"./isSymbol.XF-DE6V6.js";var x=Object.defineProperty,S=Object.getOwnPropertyDescriptor,p=(r,e,o,a)=>{for(var t=a>1?void 0:a?S(e,o):e,n=r.length-1,i;n>=0;n--)(i=r[n])&&(t=(a?i(e,o,t):i(t))||t);return a&&t&&x(e,o,t),t};let s=class extends _(y){roleSingularName(r){var e;return r===m.role?m.singular_name:(e=this.store.config.roles_config.find(o=>o.role===r))==null?void 0:e.singular_name}renderRoles(r){return l`<div class="row" part="body" style="gap: 4px;">
			${r.map(e=>l`<sl-tag>${this.roleSingularName(e)}</sl-tag>`)}
		</div>`}render(){const r=this.store.rolesForAgent.get(this.agent).get();switch(r.status){case"pending":return l``;case"error":return l`<display-error
					.error=${r.error}
					.headline=${u("Error fetching the roles for this member.")}
					tooltip
				></display-error>`;case"completed":return this.renderRoles(r.value)}}};s.styles=g;p([c(d("agent"))],s.prototype,"agent",2);p([f({context:b,subscribe:!0})],s.prototype,"store",2);s=p([v(),h("roles-for-agent")],s);export{s as RolesForAgent};
