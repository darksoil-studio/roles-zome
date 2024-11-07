import{a as m,S as v,_ as c,b as h,L as b,e as f,d as p,m as y,s as _,c as w,h as x}from"./role-config.CdjOk0wI.js";import{i as z,x as o,r as S}from"./roles-client.8HdKNuA9.js";import{n as i,t as $}from"./property.DCTlx6ty.js";import{S as C}from"./signal-watcher.WAzG81KR.js";import{r as P}from"./context.DtTKLX0G.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";var R=z`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,t=class extends h{constructor(){super(...arguments),this.localize=new b(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return o`
      <span
        part="base"
        class=${f({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?o`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};t.styles=[m,R];t.dependencies={"sl-icon-button":v};c([i({reflect:!0})],t.prototype,"variant",2);c([i({reflect:!0})],t.prototype,"size",2);c([i({type:Boolean,reflect:!0})],t.prototype,"pill",2);c([i({type:Boolean})],t.prototype,"removable",2);t.define("sl-tag");var k=Object.defineProperty,O=Object.getOwnPropertyDescriptor,d=(r,e,l,n)=>{for(var a=n>1?void 0:n?O(e,l):e,g=r.length-1,u;g>=0;g--)(u=r[g])&&(a=(n?u(e,l,a):u(a))||a);return n&&a&&k(e,l,a),a};let s=class extends C(S){roleSingularName(r){var e;return r===p.role?p.singular_name:(e=this.rolesStore.config.roles_config.find(l=>l.role===r))==null?void 0:e.singular_name}renderRoles(r){return o`<div class="row" part="body" style="gap: 4px;">
			${r.map(e=>o`<sl-tag>${this.roleSingularName(e)}</sl-tag>`)}
		</div>`}render(){const r=this.rolesStore.rolesForAgent.get(this.agent).get();switch(r.status){case"pending":return o``;case"error":return o`<display-error
					.error=${r.error}
					.headline=${y("Error fetching the roles for this member.")}
					tooltip
				></display-error>`;case"completed":return this.renderRoles(r.value)}}};s.styles=_;d([i(x("agent"))],s.prototype,"agent",2);d([w({context:P,subscribe:!0})],s.prototype,"rolesStore",2);s=d([$("roles-for-agent")],s);export{s as RolesForAgent};
