import{s as n,c as f,t as c}from"./property.D7sMmF5L.js";import{x as m,r as g}from"./roles-client.BoEB0TfU.js";import{S as v}from"./signal-watcher.DFfrqssu.js";import{l as x}from"./role-config.BBU_pl26.js";import{r as u}from"./context.BP_UAPDX.js";import"./manage-role-assignees.DtghkTER.js";import"./range.CeOrHCaV.js";import"./isIterateeCall.CSfPBF3e.js";import"./toFinite.CWHk3G1P.js";import"./isSymbol.XF-DE6V6.js";import"./context.CPR-9Z5w.js";import"./tslib.es6.kHcLnhpD.js";var _=Object.defineProperty,b=Object.getOwnPropertyDescriptor,i=(e,o,l,s)=>{for(var r=s>1?void 0:s?b(o,l):o,a=e.length-1,p;a>=0;a--)(p=e[a])&&(r=(s?p(o,l,r):p(r))||r);return s&&r&&_(o,l,r),r};let t=class extends v(g){render(){return m`
			<div class="column" style="gap: 32px; flex: 1">
				${this.store.allRoles.map(e=>m`
						<manage-role-assignees .role=${e}></manage-role-assignees>
					`)}
			</div>
		`}};t.styles=[n];i([f({context:u,subscribe:!0})],t.prototype,"store",2);t=i([x(),c("manage-all-roles")],t);export{t as ManageAllRoles};
