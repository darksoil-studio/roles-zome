import{s as n,c as f,t as c}from"./property.C1Naf-Be.js";import{l as g}from"./role-config.BOjP21iV.js";import{x as m,r as v}from"./roles-client.CBeT15cz.js";import{S as x}from"./signal-watcher.B0ntE_5Q.js";import{r as u}from"./context.BCA26kd7.js";import"./manage-role-assignees.vP7m3BIY.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";import"./tslib.es6.kHcLnhpD.js";var _=Object.defineProperty,b=Object.getOwnPropertyDescriptor,i=(r,o,l,s)=>{for(var e=s>1?void 0:s?b(o,l):o,a=r.length-1,p;a>=0;a--)(p=r[a])&&(e=(s?p(o,l,e):p(e))||e);return s&&e&&_(o,l,e),e};let t=class extends x(v){render(){return m`
			<div class="column" style="gap: 32px; flex: 1">
				${this.store.allRoles.map(r=>m`
						<manage-role-assignees .role=${r}></manage-role-assignees>
					`)}
			</div>
		`}};t.styles=[n];i([f({context:u,subscribe:!0})],t.prototype,"store",2);t=i([g(),c("manage-all-roles")],t);export{t as ManageAllRoles};
