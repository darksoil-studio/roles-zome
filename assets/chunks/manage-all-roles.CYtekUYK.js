import{s as n,c as f}from"./role-config.HuCNaWQK.js";import{l as c}from"./manage-role-assignees.xhRUtK-N.js";import{x as p,r as g}from"./roles-client.DcXMkolf.js";import{S as v}from"./signal-watcher.DfgS61mm.js";import{t as x}from"./property.D124yKuw.js";import{r as u}from"./context.DEBmPvHP.js";import"./context.o83FBgiQ.js";import"./tslib.es6.kHcLnhpD.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";var _=Object.defineProperty,b=Object.getOwnPropertyDescriptor,i=(e,o,l,s)=>{for(var r=s>1?void 0:s?b(o,l):o,a=e.length-1,m;a>=0;a--)(m=e[a])&&(r=(s?m(o,l,r):m(r))||r);return s&&r&&_(o,l,r),r};let t=class extends v(g){render(){return p`
			<div class="column" style="gap: 32px; flex: 1">
				${this.store.allRoles.map(e=>p`
						<manage-role-assignees .role=${e}></manage-role-assignees>
					`)}
			</div>
		`}};t.styles=[n];i([f({context:u,subscribe:!0})],t.prototype,"store",2);t=i([c(),x("manage-all-roles")],t);export{t as ManageAllRoles};
