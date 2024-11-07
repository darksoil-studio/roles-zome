import{s as De,n as g,t as Fe}from"./property.DCTlx6ty.js";import{i as rt,h as He,r as me,T as Ie,x as W,E as Ne,j as Jt,u as je}from"./roles-client.8HdKNuA9.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Qt{constructor(e,i,o,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,s)=>{this.unsubscribe&&(this.unsubscribe!==s&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,s)),this.unsubscribe=s},this.host=e,i.context!==void 0){const n=i;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=i,this.callback=o,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new De(this.context,this.t,this.subscribe))}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function xo({context:t,subscribe:e}){return(i,o)=>{typeof o=="object"?o.addInitializer(function(){new Qt(this,{context:t,callback:r=>{i.set.call(this,r)},subscribe:e})}):i.constructor.addInitializer(r=>{new Qt(r,{context:t,callback:n=>{r[o]=n},subscribe:e})})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ve(t){return g({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ct(t,e){return(i,o,r)=>{const n=s=>{var a;return((a=s.renderRoot)==null?void 0:a.querySelector(t))??null};return Ve(i,o,{get(){return n(this)}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const We=(t,...e)=>({strTag:!0,strings:t,values:e}),Co=We,Ue=t=>typeof t!="string"&&"strTag"in t,qe=(t,e,i)=>{let o=t[0];for(let r=1;r<t.length;r++)o+=e[r-1],o+=t[r];return o};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ye=t=>Ue(t)?qe(t.strings,t.values):t;let zt=Ye;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Xe{constructor(){this.settled=!1,this.promise=new Promise((e,i)=>{this._resolve=e,this._reject=i})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let t=0;t<256;t++)(t>>4&15).toString(16)+(t&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ze=new Xe;Ze.resolve();const Ke=[rt`
    .row {
      display: flex;
      flex-direction: row;
    }
    .column {
      display: flex;
      flex-direction: column;
    }
    .small-margin {
      margin-top: 6px;
    }
    .big-margin {
      margin-top: 23px;
    }

    .fill {
      flex: 1;
      height: 100%;
    }

    .title {
      font-size: 20px;
    }

    .center-content {
      align-items: center;
      justify-content: center;
    }

    .placeholder {
      color: var(--sl-color-gray-700);
    }

    .flex-scrollable-parent {
      position: relative;
      display: flex;
      flex: 1;
    }

    .flex-scrollable-container {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .flex-scrollable-x {
      max-width: 100%;
      overflow-x: auto;
    }
    .flex-scrollable-y {
      max-height: 100%;
      overflow-y: auto;
    }
    :host {
      color: var(--sl-color-neutral-1000);
    }

    sl-card {
      display: flex;
    }
    sl-card::part(base) {
      flex: 1;
    }
    sl-card::part(body) {
      display: flex;
      flex: 1;
    }
    sl-drawer::part(body) {
      display: flex;
    }
  `];/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Je=t=>(...e)=>({_$litDirective$:t,values:e});class Qe{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,o){this._$Ct=e,this._$AM=i,this._$Ci=o}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}}function Ao(t){return{attribute:t,type:Object,hasChanged:(e,i)=>(e==null?void 0:e.toString())!==(i==null?void 0:i.toString()),converter:e=>e&&e.length>0&&He(e)}}function ti(t){return`data:image/svg+xml;utf8,${ei(t)}`}function ei(t){return`<svg style='fill: currentColor' viewBox='0 0 24 24'><path d='${t}'></path></svg>`}var Eo="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z",ii="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",$o="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",_o="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let oi=class be extends Event{constructor(e){super(be.eventName,{bubbles:!0,composed:!0,cancelable:!1}),this.routes=e}};oi.eventName="lit-routes-connected";var ri=rt`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,ni=rt`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`,_t=rt`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,ye=Object.defineProperty,si=Object.defineProperties,ai=Object.getOwnPropertyDescriptor,li=Object.getOwnPropertyDescriptors,te=Object.getOwnPropertySymbols,ci=Object.prototype.hasOwnProperty,hi=Object.prototype.propertyIsEnumerable,Rt=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),ee=(t,e,i)=>e in t?ye(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,St=(t,e)=>{for(var i in e||(e={}))ci.call(e,i)&&ee(t,i,e[i]);if(te)for(var i of te(e))hi.call(e,i)&&ee(t,i,e[i]);return t},we=(t,e)=>si(t,li(e)),p=(t,e,i,o)=>{for(var r=o>1?void 0:o?ai(e,i):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(r=(o?s(e,i,r):s(r))||r);return o&&r&&ye(e,i,r),r},xe=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},di=(t,e,i)=>(xe(t,e,"read from private field"),e.get(t)),ui=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},pi=(t,e,i,o)=>(xe(t,e,"write to private field"),e.set(t,i),i),fi=function(t,e){this[0]=t,this[1]=e},So=t=>{var e=t[Rt("asyncIterator")],i=!1,o,r={};return e==null?(e=t[Rt("iterator")](),o=n=>r[n]=s=>e[n](s)):(e=e.call(t),o=n=>r[n]=s=>{if(i){if(i=!1,n==="throw")throw s;return s}return i=!0,{done:!1,value:new fi(new Promise(a=>{var l=e[n](s);if(!(l instanceof Object))throw TypeError("Object expected");a(l)}),1)}}),r[Rt("iterator")]=()=>r,o("next"),"throw"in e?o("throw"):r.throw=n=>{throw n},"return"in e&&o("return"),r},wt,Q=class extends me{constructor(){super(),ui(this,wt,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const i=new CustomEvent(t,St({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}static define(t,e=this,i={}){const o=customElements.get(t);if(!o){try{customElements.define(t,e,i)}catch{customElements.define(t,class extends e{},i)}return}let r=" (unknown version)",n=r;"version"in e&&e.version&&(r=" v"+e.version),"version"in o&&o.version&&(n=" v"+o.version),!(r&&n&&r===n)&&console.warn(`Attempted to register <${t}>${r}, but <${t}>${n} has already been registered.`)}attributeChangedCallback(t,e,i){di(this,wt)||(this.constructor.elementProperties.forEach((o,r)=>{o.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),pi(this,wt,!0)),super.attributeChangedCallback(t,e,i)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,i)=>{t.has(i)&&this[i]==null&&(this[i]=e)})}};wt=new WeakMap;Q.version="2.17.1";Q.dependencies={};p([g()],Q.prototype,"dir",2);p([g()],Q.prototype,"lang",2);const Z=Math.min,S=Math.max,Ct=Math.round,bt=Math.floor,K=t=>({x:t,y:t}),gi={left:"right",right:"left",bottom:"top",top:"bottom"},mi={start:"end",end:"start"};function Dt(t,e,i){return S(t,Z(e,i))}function ht(t,e){return typeof t=="function"?t(e):t}function G(t){return t.split("-")[0]}function dt(t){return t.split("-")[1]}function Ce(t){return t==="x"?"y":"x"}function Wt(t){return t==="y"?"height":"width"}function et(t){return["top","bottom"].includes(G(t))?"y":"x"}function Ut(t){return Ce(et(t))}function vi(t,e,i){i===void 0&&(i=!1);const o=dt(t),r=Ut(t),n=Wt(r);let s=r==="x"?o===(i?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(s=At(s)),[s,At(s)]}function bi(t){const e=At(t);return[Ft(t),e,Ft(e)]}function Ft(t){return t.replace(/start|end/g,e=>mi[e])}function yi(t,e,i){const o=["left","right"],r=["right","left"],n=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return i?e?r:o:e?o:r;case"left":case"right":return e?n:s;default:return[]}}function wi(t,e,i,o){const r=dt(t);let n=yi(G(t),i==="start",o);return r&&(n=n.map(s=>s+"-"+r),e&&(n=n.concat(n.map(Ft)))),n}function At(t){return t.replace(/left|right|bottom|top/g,e=>gi[e])}function xi(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ae(t){return typeof t!="number"?xi(t):{top:t,right:t,bottom:t,left:t}}function Et(t){const{x:e,y:i,width:o,height:r}=t;return{width:o,height:r,top:i,left:e,right:e+o,bottom:i+r,x:e,y:i}}function ie(t,e,i){let{reference:o,floating:r}=t;const n=et(e),s=Ut(e),a=Wt(s),l=G(e),c=n==="y",h=o.x+o.width/2-r.width/2,u=o.y+o.height/2-r.height/2,m=o[a]/2-r[a]/2;let d;switch(l){case"top":d={x:h,y:o.y-r.height};break;case"bottom":d={x:h,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:u};break;case"left":d={x:o.x-r.width,y:u};break;default:d={x:o.x,y:o.y}}switch(dt(e)){case"start":d[s]-=m*(i&&c?-1:1);break;case"end":d[s]+=m*(i&&c?-1:1);break}return d}const Ci=async(t,e,i)=>{const{placement:o="bottom",strategy:r="absolute",middleware:n=[],platform:s}=i,a=n.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:h,y:u}=ie(c,o,l),m=o,d={},f=0;for(let v=0;v<a.length;v++){const{name:y,fn:b}=a[v],{x:w,y:x,data:E,reset:A}=await b({x:h,y:u,initialPlacement:o,placement:m,strategy:r,middlewareData:d,rects:c,platform:s,elements:{reference:t,floating:e}});h=w??h,u=x??u,d={...d,[y]:{...d[y],...E}},A&&f<=50&&(f++,typeof A=="object"&&(A.placement&&(m=A.placement),A.rects&&(c=A.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:r}):A.rects),{x:h,y:u}=ie(c,m,l)),v=-1)}return{x:h,y:u,placement:m,strategy:r,middlewareData:d}};async function qt(t,e){var i;e===void 0&&(e={});const{x:o,y:r,platform:n,rects:s,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:m=!1,padding:d=0}=ht(e,t),f=Ae(d),y=a[m?u==="floating"?"reference":"floating":u],b=Et(await n.getClippingRect({element:(i=await(n.isElement==null?void 0:n.isElement(y)))==null||i?y:y.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(a.floating)),boundary:c,rootBoundary:h,strategy:l})),w=u==="floating"?{x:o,y:r,width:s.floating.width,height:s.floating.height}:s.reference,x=await(n.getOffsetParent==null?void 0:n.getOffsetParent(a.floating)),E=await(n.isElement==null?void 0:n.isElement(x))?await(n.getScale==null?void 0:n.getScale(x))||{x:1,y:1}:{x:1,y:1},A=Et(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:w,offsetParent:x,strategy:l}):w);return{top:(b.top-A.top+f.top)/E.y,bottom:(A.bottom-b.bottom+f.bottom)/E.y,left:(b.left-A.left+f.left)/E.x,right:(A.right-b.right+f.right)/E.x}}const Ai=t=>({name:"arrow",options:t,async fn(e){const{x:i,y:o,placement:r,rects:n,platform:s,elements:a,middlewareData:l}=e,{element:c,padding:h=0}=ht(t,e)||{};if(c==null)return{};const u=Ae(h),m={x:i,y:o},d=Ut(r),f=Wt(d),v=await s.getDimensions(c),y=d==="y",b=y?"top":"left",w=y?"bottom":"right",x=y?"clientHeight":"clientWidth",E=n.reference[f]+n.reference[d]-m[d]-n.floating[f],A=m[d]-n.reference[d],L=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let z=L?L[x]:0;(!z||!await(s.isElement==null?void 0:s.isElement(L)))&&(z=a.floating[x]||n.floating[f]);const j=E/2-A/2,M=z/2-v[f]/2-1,R=Z(u[b],M),U=Z(u[w],M),B=R,q=z-v[f]-U,_=z/2-v[f]/2+j,nt=Dt(B,_,q),V=!l.arrow&&dt(r)!=null&&_!==nt&&n.reference[f]/2-(_<B?R:U)-v[f]/2<0,D=V?_<B?_-B:_-q:0;return{[d]:m[d]+D,data:{[d]:nt,centerOffset:_-nt-D,...V&&{alignmentOffset:D}},reset:V}}}),Ei=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var i,o;const{placement:r,middlewareData:n,rects:s,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:h=!0,crossAxis:u=!0,fallbackPlacements:m,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:v=!0,...y}=ht(t,e);if((i=n.arrow)!=null&&i.alignmentOffset)return{};const b=G(r),w=et(a),x=G(a)===a,E=await(l.isRTL==null?void 0:l.isRTL(c.floating)),A=m||(x||!v?[At(a)]:bi(a)),L=f!=="none";!m&&L&&A.push(...wi(a,v,f,E));const z=[a,...A],j=await qt(e,y),M=[];let R=((o=n.flip)==null?void 0:o.overflows)||[];if(h&&M.push(j[b]),u){const _=vi(r,s,E);M.push(j[_[0]],j[_[1]])}if(R=[...R,{placement:r,overflows:M}],!M.every(_=>_<=0)){var U,B;const _=(((U=n.flip)==null?void 0:U.index)||0)+1,nt=z[_];if(nt)return{data:{index:_,overflows:R},reset:{placement:nt}};let V=(B=R.filter(D=>D.overflows[0]<=0).sort((D,Y)=>D.overflows[1]-Y.overflows[1])[0])==null?void 0:B.placement;if(!V)switch(d){case"bestFit":{var q;const D=(q=R.filter(Y=>{if(L){const X=et(Y.placement);return X===w||X==="y"}return!0}).map(Y=>[Y.placement,Y.overflows.filter(X=>X>0).reduce((X,Be)=>X+Be,0)]).sort((Y,X)=>Y[1]-X[1])[0])==null?void 0:q[0];D&&(V=D);break}case"initialPlacement":V=a;break}if(r!==V)return{reset:{placement:V}}}return{}}}};async function $i(t,e){const{placement:i,platform:o,elements:r}=t,n=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=G(i),a=dt(i),l=et(i)==="y",c=["left","top"].includes(s)?-1:1,h=n&&l?-1:1,u=ht(e,t);let{mainAxis:m,crossAxis:d,alignmentAxis:f}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return a&&typeof f=="number"&&(d=a==="end"?f*-1:f),l?{x:d*h,y:m*c}:{x:m*c,y:d*h}}const _i=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var i,o;const{x:r,y:n,placement:s,middlewareData:a}=e,l=await $i(e,t);return s===((i=a.offset)==null?void 0:i.placement)&&(o=a.arrow)!=null&&o.alignmentOffset?{}:{x:r+l.x,y:n+l.y,data:{...l,placement:s}}}}},Si=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:o,placement:r}=e,{mainAxis:n=!0,crossAxis:s=!1,limiter:a={fn:y=>{let{x:b,y:w}=y;return{x:b,y:w}}},...l}=ht(t,e),c={x:i,y:o},h=await qt(e,l),u=et(G(r)),m=Ce(u);let d=c[m],f=c[u];if(n){const y=m==="y"?"top":"left",b=m==="y"?"bottom":"right",w=d+h[y],x=d-h[b];d=Dt(w,d,x)}if(s){const y=u==="y"?"top":"left",b=u==="y"?"bottom":"right",w=f+h[y],x=f-h[b];f=Dt(w,f,x)}const v=a.fn({...e,[m]:d,[u]:f});return{...v,data:{x:v.x-i,y:v.y-o,enabled:{[m]:n,[u]:s}}}}}},Pi=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var i,o;const{placement:r,rects:n,platform:s,elements:a}=e,{apply:l=()=>{},...c}=ht(t,e),h=await qt(e,c),u=G(r),m=dt(r),d=et(r)==="y",{width:f,height:v}=n.floating;let y,b;u==="top"||u==="bottom"?(y=u,b=m===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(b=u,y=m==="end"?"top":"bottom");const w=v-h.top-h.bottom,x=f-h.left-h.right,E=Z(v-h[y],w),A=Z(f-h[b],x),L=!e.middlewareData.shift;let z=E,j=A;if((i=e.middlewareData.shift)!=null&&i.enabled.x&&(j=x),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(z=w),L&&!m){const R=S(h.left,0),U=S(h.right,0),B=S(h.top,0),q=S(h.bottom,0);d?j=f-2*(R!==0||U!==0?R+U:S(h.left,h.right)):z=v-2*(B!==0||q!==0?B+q:S(h.top,h.bottom))}await l({...e,availableWidth:j,availableHeight:z});const M=await s.getDimensions(a.floating);return f!==M.width||v!==M.height?{reset:{rects:!0}}:{}}}};function Pt(){return typeof window<"u"}function ut(t){return Ee(t)?(t.nodeName||"").toLowerCase():"#document"}function P(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function I(t){var e;return(e=(Ee(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ee(t){return Pt()?t instanceof Node||t instanceof P(t).Node:!1}function k(t){return Pt()?t instanceof Element||t instanceof P(t).Element:!1}function H(t){return Pt()?t instanceof HTMLElement||t instanceof P(t).HTMLElement:!1}function oe(t){return!Pt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof P(t).ShadowRoot}function gt(t){const{overflow:e,overflowX:i,overflowY:o,display:r}=T(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+i)&&!["inline","contents"].includes(r)}function Li(t){return["table","td","th"].includes(ut(t))}function Lt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Yt(t){const e=Xt(),i=k(t)?T(t):t;return i.transform!=="none"||i.perspective!=="none"||(i.containerType?i.containerType!=="normal":!1)||!e&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!e&&(i.filter?i.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(i.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(i.contain||"").includes(o))}function Oi(t){let e=J(t);for(;H(e)&&!lt(e);){if(Yt(e))return e;if(Lt(e))return null;e=J(e)}return null}function Xt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function lt(t){return["html","body","#document"].includes(ut(t))}function T(t){return P(t).getComputedStyle(t)}function Ot(t){return k(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function J(t){if(ut(t)==="html")return t;const e=t.assignedSlot||t.parentNode||oe(t)&&t.host||I(t);return oe(e)?e.host:e}function $e(t){const e=J(t);return lt(e)?t.ownerDocument?t.ownerDocument.body:t.body:H(e)&&gt(e)?e:$e(e)}function ft(t,e,i){var o;e===void 0&&(e=[]),i===void 0&&(i=!0);const r=$e(t),n=r===((o=t.ownerDocument)==null?void 0:o.body),s=P(r);if(n){const a=Ht(s);return e.concat(s,s.visualViewport||[],gt(r)?r:[],a&&i?ft(a):[])}return e.concat(r,ft(r,[],i))}function Ht(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function _e(t){const e=T(t);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=H(t),n=r?t.offsetWidth:i,s=r?t.offsetHeight:o,a=Ct(i)!==n||Ct(o)!==s;return a&&(i=n,o=s),{width:i,height:o,$:a}}function Zt(t){return k(t)?t:t.contextElement}function at(t){const e=Zt(t);if(!H(e))return K(1);const i=e.getBoundingClientRect(),{width:o,height:r,$:n}=_e(e);let s=(n?Ct(i.width):i.width)/o,a=(n?Ct(i.height):i.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const zi=K(0);function Se(t){const e=P(t);return!Xt()||!e.visualViewport?zi:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ri(t,e,i){return e===void 0&&(e=!1),!i||e&&i!==P(t)?!1:e}function it(t,e,i,o){e===void 0&&(e=!1),i===void 0&&(i=!1);const r=t.getBoundingClientRect(),n=Zt(t);let s=K(1);e&&(o?k(o)&&(s=at(o)):s=at(t));const a=Ri(n,i,o)?Se(n):K(0);let l=(r.left+a.x)/s.x,c=(r.top+a.y)/s.y,h=r.width/s.x,u=r.height/s.y;if(n){const m=P(n),d=o&&k(o)?P(o):o;let f=m,v=Ht(f);for(;v&&o&&d!==f;){const y=at(v),b=v.getBoundingClientRect(),w=T(v),x=b.left+(v.clientLeft+parseFloat(w.paddingLeft))*y.x,E=b.top+(v.clientTop+parseFloat(w.paddingTop))*y.y;l*=y.x,c*=y.y,h*=y.x,u*=y.y,l+=x,c+=E,f=P(v),v=Ht(f)}}return Et({width:h,height:u,x:l,y:c})}function ki(t){let{elements:e,rect:i,offsetParent:o,strategy:r}=t;const n=r==="fixed",s=I(o),a=e?Lt(e.floating):!1;if(o===s||a&&n)return i;let l={scrollLeft:0,scrollTop:0},c=K(1);const h=K(0),u=H(o);if((u||!u&&!n)&&((ut(o)!=="body"||gt(s))&&(l=Ot(o)),H(o))){const m=it(o);c=at(o),h.x=m.x+o.clientLeft,h.y=m.y+o.clientTop}return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-l.scrollLeft*c.x+h.x,y:i.y*c.y-l.scrollTop*c.y+h.y}}function Ti(t){return Array.from(t.getClientRects())}function It(t,e){const i=Ot(t).scrollLeft;return e?e.left+i:it(I(t)).left+i}function Mi(t){const e=I(t),i=Ot(t),o=t.ownerDocument.body,r=S(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),n=S(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-i.scrollLeft+It(t);const a=-i.scrollTop;return T(o).direction==="rtl"&&(s+=S(e.clientWidth,o.clientWidth)-r),{width:r,height:n,x:s,y:a}}function Bi(t,e){const i=P(t),o=I(t),r=i.visualViewport;let n=o.clientWidth,s=o.clientHeight,a=0,l=0;if(r){n=r.width,s=r.height;const c=Xt();(!c||c&&e==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:n,height:s,x:a,y:l}}function Di(t,e){const i=it(t,!0,e==="fixed"),o=i.top+t.clientTop,r=i.left+t.clientLeft,n=H(t)?at(t):K(1),s=t.clientWidth*n.x,a=t.clientHeight*n.y,l=r*n.x,c=o*n.y;return{width:s,height:a,x:l,y:c}}function re(t,e,i){let o;if(e==="viewport")o=Bi(t,i);else if(e==="document")o=Mi(I(t));else if(k(e))o=Di(e,i);else{const r=Se(t);o={...e,x:e.x-r.x,y:e.y-r.y}}return Et(o)}function Pe(t,e){const i=J(t);return i===e||!k(i)||lt(i)?!1:T(i).position==="fixed"||Pe(i,e)}function Fi(t,e){const i=e.get(t);if(i)return i;let o=ft(t,[],!1).filter(a=>k(a)&&ut(a)!=="body"),r=null;const n=T(t).position==="fixed";let s=n?J(t):t;for(;k(s)&&!lt(s);){const a=T(s),l=Yt(s);!l&&a.position==="fixed"&&(r=null),(n?!l&&!r:!l&&a.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||gt(s)&&!l&&Pe(t,s))?o=o.filter(h=>h!==s):r=a,s=J(s)}return e.set(t,o),o}function Hi(t){let{element:e,boundary:i,rootBoundary:o,strategy:r}=t;const s=[...i==="clippingAncestors"?Lt(e)?[]:Fi(e,this._c):[].concat(i),o],a=s[0],l=s.reduce((c,h)=>{const u=re(e,h,r);return c.top=S(u.top,c.top),c.right=Z(u.right,c.right),c.bottom=Z(u.bottom,c.bottom),c.left=S(u.left,c.left),c},re(e,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Ii(t){const{width:e,height:i}=_e(t);return{width:e,height:i}}function Ni(t,e,i){const o=H(e),r=I(e),n=i==="fixed",s=it(t,!0,n,e);let a={scrollLeft:0,scrollTop:0};const l=K(0);if(o||!o&&!n)if((ut(e)!=="body"||gt(r))&&(a=Ot(e)),o){const d=it(e,!0,n,e);l.x=d.x+e.clientLeft,l.y=d.y+e.clientTop}else r&&(l.x=It(r));let c=0,h=0;if(r&&!o&&!n){const d=r.getBoundingClientRect();h=d.top+a.scrollTop,c=d.left+a.scrollLeft-It(r,d)}const u=s.left+a.scrollLeft-l.x-c,m=s.top+a.scrollTop-l.y-h;return{x:u,y:m,width:s.width,height:s.height}}function kt(t){return T(t).position==="static"}function ne(t,e){if(!H(t)||T(t).position==="fixed")return null;if(e)return e(t);let i=t.offsetParent;return I(t)===i&&(i=i.ownerDocument.body),i}function Le(t,e){const i=P(t);if(Lt(t))return i;if(!H(t)){let r=J(t);for(;r&&!lt(r);){if(k(r)&&!kt(r))return r;r=J(r)}return i}let o=ne(t,e);for(;o&&Li(o)&&kt(o);)o=ne(o,e);return o&&lt(o)&&kt(o)&&!Yt(o)?i:o||Oi(t)||i}const ji=async function(t){const e=this.getOffsetParent||Le,i=this.getDimensions,o=await i(t.floating);return{reference:Ni(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Vi(t){return T(t).direction==="rtl"}const xt={convertOffsetParentRelativeRectToViewportRelativeRect:ki,getDocumentElement:I,getClippingRect:Hi,getOffsetParent:Le,getElementRects:ji,getClientRects:Ti,getDimensions:Ii,getScale:at,isElement:k,isRTL:Vi};function Wi(t,e){let i=null,o;const r=I(t);function n(){var a;clearTimeout(o),(a=i)==null||a.disconnect(),i=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),n();const{left:c,top:h,width:u,height:m}=t.getBoundingClientRect();if(a||e(),!u||!m)return;const d=bt(h),f=bt(r.clientWidth-(c+u)),v=bt(r.clientHeight-(h+m)),y=bt(c),w={rootMargin:-d+"px "+-f+"px "+-v+"px "+-y+"px",threshold:S(0,Z(1,l))||1};let x=!0;function E(A){const L=A[0].intersectionRatio;if(L!==l){if(!x)return s();L?s(!1,L):o=setTimeout(()=>{s(!1,1e-7)},1e3)}x=!1}try{i=new IntersectionObserver(E,{...w,root:r.ownerDocument})}catch{i=new IntersectionObserver(E,w)}i.observe(t)}return s(!0),n}function Ui(t,e,i,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,c=Zt(t),h=r||n?[...c?ft(c):[],...ft(e)]:[];h.forEach(b=>{r&&b.addEventListener("scroll",i,{passive:!0}),n&&b.addEventListener("resize",i)});const u=c&&a?Wi(c,i):null;let m=-1,d=null;s&&(d=new ResizeObserver(b=>{let[w]=b;w&&w.target===c&&d&&(d.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var x;(x=d)==null||x.observe(e)})),i()}),c&&!l&&d.observe(c),d.observe(e));let f,v=l?it(t):null;l&&y();function y(){const b=it(t);v&&(b.x!==v.x||b.y!==v.y||b.width!==v.width||b.height!==v.height)&&i(),v=b,f=requestAnimationFrame(y)}return i(),()=>{var b;h.forEach(w=>{r&&w.removeEventListener("scroll",i),n&&w.removeEventListener("resize",i)}),u==null||u(),(b=d)==null||b.disconnect(),d=null,l&&cancelAnimationFrame(f)}}const qi=_i,Yi=Si,Xi=Ei,se=Pi,Zi=Ai,Ki=(t,e,i)=>{const o=new Map,r={platform:xt,...i},n={...r.platform,_c:o};return Ci(t,e,{...r,platform:n})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t=Je(class extends Qe{constructor(t){var e;if(super(t),t.type!==Ge.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var o,r;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((o=this.nt)!=null&&o.has(n))&&this.st.add(n);return this.render(e)}const i=t.element.classList;for(const n of this.st)n in e||(i.remove(n),this.st.delete(n));for(const n in e){const s=!!e[n];s===this.st.has(n)||(r=this.nt)!=null&&r.has(n)||(s?(i.add(n),this.st.add(n)):(i.remove(n),this.st.delete(n)))}return Ie}});function Gi(t){return Ji(t)}function Tt(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function Ji(t){for(let e=t;e;e=Tt(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=Tt(t);e;e=Tt(e)){if(!(e instanceof Element))continue;const i=getComputedStyle(e);if(i.display!=="contents"&&(i.position!=="static"||i.filter!=="none"||e.tagName==="BODY"))return e}return null}function Qi(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var C=class extends Q{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom");let o=0,r=0,n=0,s=0,a=0,l=0,c=0,h=0;i?t.top<e.top?(o=t.left,r=t.bottom,n=t.right,s=t.bottom,a=e.left,l=e.top,c=e.right,h=e.top):(o=e.left,r=e.bottom,n=e.right,s=e.bottom,a=t.left,l=t.top,c=t.right,h=t.top):t.left<e.left?(o=t.right,r=t.top,n=e.left,s=e.top,a=t.right,l=t.bottom,c=e.left,h=e.bottom):(o=e.right,r=e.top,n=t.left,s=t.top,a=e.right,l=e.bottom,c=t.left,h=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||Qi(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&(this.cleanup=Ui(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[qi({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(se({apply:({rects:i})=>{const o=this.sync==="width"||this.sync==="both",r=this.sync==="height"||this.sync==="both";this.popup.style.width=o?`${i.reference.width}px`:"",this.popup.style.height=r?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(Xi({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Yi({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(se({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:o})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${o}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Zi({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?i=>xt.getOffsetParent(i,Gi):xt.getOffsetParent;Ki(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:we(St({},xt),{getOffsetParent:e})}).then(({x:i,y:o,middlewareData:r,placement:n})=>{const s=this.matches(":dir(rtl)"),a={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${i}px`,top:`${o}px`}),this.arrow){const l=r.arrow.x,c=r.arrow.y;let h="",u="",m="",d="";if(this.arrowPlacement==="start"){const f=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=s?f:"",d=s?"":f}else if(this.arrowPlacement==="end"){const f=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=s?"":f,d=s?f:"",m=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(d=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(d=typeof l=="number"?`${l}px`:"",h=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:h,right:u,bottom:m,left:d,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return W`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${$t({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${$t({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?W`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};C.styles=[_t,ni];p([ct(".popup")],C.prototype,"popup",2);p([ct(".popup__arrow")],C.prototype,"arrowEl",2);p([g()],C.prototype,"anchor",2);p([g({type:Boolean,reflect:!0})],C.prototype,"active",2);p([g({reflect:!0})],C.prototype,"placement",2);p([g({reflect:!0})],C.prototype,"strategy",2);p([g({type:Number})],C.prototype,"distance",2);p([g({type:Number})],C.prototype,"skidding",2);p([g({type:Boolean})],C.prototype,"arrow",2);p([g({attribute:"arrow-placement"})],C.prototype,"arrowPlacement",2);p([g({attribute:"arrow-padding",type:Number})],C.prototype,"arrowPadding",2);p([g({type:Boolean})],C.prototype,"flip",2);p([g({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],C.prototype,"flipFallbackPlacements",2);p([g({attribute:"flip-fallback-strategy"})],C.prototype,"flipFallbackStrategy",2);p([g({type:Object})],C.prototype,"flipBoundary",2);p([g({attribute:"flip-padding",type:Number})],C.prototype,"flipPadding",2);p([g({type:Boolean})],C.prototype,"shift",2);p([g({type:Object})],C.prototype,"shiftBoundary",2);p([g({attribute:"shift-padding",type:Number})],C.prototype,"shiftPadding",2);p([g({attribute:"auto-size"})],C.prototype,"autoSize",2);p([g()],C.prototype,"sync",2);p([g({type:Object})],C.prototype,"autoSizeBoundary",2);p([g({attribute:"auto-size-padding",type:Number})],C.prototype,"autoSizePadding",2);p([g({attribute:"hover-bridge",type:Boolean})],C.prototype,"hoverBridge",2);var Oe=new Map,to=new WeakMap;function eo(t){return t??{keyframes:[],options:{duration:0}}}function ae(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function ze(t,e){Oe.set(t,eo(e))}function le(t,e,i){const o=to.get(t);if(o!=null&&o[e])return ae(o[e],i.dir);const r=Oe.get(e);return r?ae(r,i.dir):{keyframes:[],options:{duration:0}}}function ce(t,e){return new Promise(i=>{function o(r){r.target===t&&(t.removeEventListener(e,o),i())}t.addEventListener(e,o)})}function he(t,e,i){return new Promise(o=>{if((i==null?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,we(St({},i),{duration:io()?0:i.duration}));r.addEventListener("cancel",o,{once:!0}),r.addEventListener("finish",o,{once:!0})})}function de(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function io(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ue(t){return Promise.all(t.getAnimations().map(e=>new Promise(i=>{e.cancel(),requestAnimationFrame(i)})))}const Nt=new Set,st=new Map;let tt,Kt="ltr",Gt="en";const Re=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Re){const t=new MutationObserver(Te);Kt=document.documentElement.dir||"ltr",Gt=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function ke(...t){t.map(e=>{const i=e.$code.toLowerCase();st.has(i)?st.set(i,Object.assign(Object.assign({},st.get(i)),e)):st.set(i,e),tt||(tt=e)}),Te()}function Te(){Re&&(Kt=document.documentElement.dir||"ltr",Gt=document.documentElement.lang||navigator.language),[...Nt.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let oo=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Nt.add(this.host)}hostDisconnected(){Nt.delete(this.host)}dir(){return`${this.host.dir||Kt}`.toLowerCase()}lang(){return`${this.host.lang||Gt}`.toLowerCase()}getTranslationData(e){var i,o;const r=new Intl.Locale(e.replace(/_/g,"-")),n=r==null?void 0:r.language.toLowerCase(),s=(o=(i=r==null?void 0:r.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"",a=st.get(`${n}-${s}`),l=st.get(n);return{locale:r,language:n,region:s,primary:a,secondary:l}}exists(e,i){var o;const{primary:r,secondary:n}=this.getTranslationData((o=i.lang)!==null&&o!==void 0?o:this.lang());return i=Object.assign({includeFallback:!1},i),!!(r&&r[e]||n&&n[e]||i.includeFallback&&tt&&tt[e])}term(e,...i){const{primary:o,secondary:r}=this.getTranslationData(this.lang());let n;if(o&&o[e])n=o[e];else if(r&&r[e])n=r[e];else if(tt&&tt[e])n=tt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof n=="function"?n(...i):n}date(e,i){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),i).format(e)}number(e,i){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),i).format(e)}relativeTime(e,i,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,i)}};var Me={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};ke(Me);var ro=Me,no=class extends oo{};ke(ro);function mt(t,e){const i=St({waitUntilFirstUpdate:!1},e);return(o,r)=>{const{update:n}=o,s=Array.isArray(t)?t:[t];o.update=function(a){s.forEach(l=>{const c=l;if(a.has(c)){const h=a.get(c),u=this[c];h!==u&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[r](h,u)}}),n.call(this,a)}}}var $=class extends Q{constructor(){super(),this.localize=new no(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=de(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=de(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await ue(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:i,options:o}=le(this,"tooltip.show",{dir:this.localize.dir()});await he(this.popup.popup,i,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await ue(this.body);const{keyframes:i,options:o}=le(this,"tooltip.hide",{dir:this.localize.dir()});await he(this.popup.popup,i,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,ce(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ce(this,"sl-after-hide")}render(){return W`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${$t({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};$.styles=[_t,ri];$.dependencies={"sl-popup":C};p([ct("slot:not([name])")],$.prototype,"defaultSlot",2);p([ct(".tooltip__body")],$.prototype,"body",2);p([ct("sl-popup")],$.prototype,"popup",2);p([g()],$.prototype,"content",2);p([g()],$.prototype,"placement",2);p([g({type:Boolean,reflect:!0})],$.prototype,"disabled",2);p([g({type:Number})],$.prototype,"distance",2);p([g({type:Boolean,reflect:!0})],$.prototype,"open",2);p([g({type:Number})],$.prototype,"skidding",2);p([g()],$.prototype,"trigger",2);p([g({type:Boolean})],$.prototype,"hoist",2);p([mt("open",{waitUntilFirstUpdate:!0})],$.prototype,"handleOpenChange",1);p([mt(["content","distance","hoist","placement","skidding"])],$.prototype,"handleOptionsChange",1);p([mt("disabled")],$.prototype,"handleDisabledChange",1);ze("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});ze("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});$.define("sl-tooltip");var jt="";function pe(t){jt=t}function so(t=""){if(!jt){const e=[...document.getElementsByTagName("script")],i=e.find(o=>o.hasAttribute("data-shoelace"));if(i)pe(i.getAttribute("data-shoelace"));else{const o=e.find(n=>/shoelace(\.min)?\.js($|\?)/.test(n.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(n.src));let r="";o&&(r=o.getAttribute("src")),pe(r.split("/").slice(0,-1).join("/"))}}return jt.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var ao={name:"default",resolver:t=>so(`assets/icons/${t}.svg`)},lo=ao,fe={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},co={name:"system",resolver:t=>t in fe?`data:image/svg+xml,${encodeURIComponent(fe[t])}`:""},ho=co,uo=[lo,ho],Vt=[];function po(t){Vt.push(t)}function fo(t){Vt=Vt.filter(e=>e!==t)}function ge(t){return uo.find(e=>e.name===t)}var go=rt`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mo=(t,e)=>(t==null?void 0:t._$litType$)!==void 0,Lo=t=>t.strings===void 0,vo={},Oo=(t,e=vo)=>t._$AH=e;var pt=Symbol(),yt=Symbol(),Mt,Bt=new Map,N=class extends Q{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var i;let o;if(e!=null&&e.spriteSheet)return this.svg=W`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(o=await fetch(t,{mode:"cors"}),!o.ok)return o.status===410?pt:yt}catch{return yt}try{const r=document.createElement("div");r.innerHTML=await o.text();const n=r.firstElementChild;if(((i=n==null?void 0:n.tagName)==null?void 0:i.toLowerCase())!=="svg")return pt;Mt||(Mt=new DOMParser);const a=Mt.parseFromString(n.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):pt}catch{return pt}}connectedCallback(){super.connectedCallback(),po(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),fo(this)}getIconSource(){const t=ge(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:i}=this.getIconSource(),o=i?ge(this.library):void 0;if(!e){this.svg=null;return}let r=Bt.get(e);if(r||(r=this.resolveIcon(e,o),Bt.set(e,r)),!this.initialRender)return;const n=await r;if(n===yt&&Bt.delete(e),e===this.getIconSource().url){if(mo(n)){if(this.svg=n,o){await this.updateComplete;const s=this.shadowRoot.querySelector("[part='svg']");typeof o.mutator=="function"&&s&&o.mutator(s)}return}switch(n){case yt:case pt:this.svg=null,this.emit("sl-error");break;default:this.svg=n.cloneNode(!0),(t=o==null?void 0:o.mutator)==null||t.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};N.styles=[_t,go];p([ve()],N.prototype,"svg",2);p([g({reflect:!0})],N.prototype,"name",2);p([g()],N.prototype,"src",2);p([g()],N.prototype,"label",2);p([g({reflect:!0})],N.prototype,"library",2);p([mt("label")],N.prototype,"handleLabelChange",1);p([mt(["name","src","library"])],N.prototype,"setIcon",1);N.define("sl-icon");var vt=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let ot=class extends me{constructor(){super(...arguments),this.tooltip=!1}get _iconSize(){return this.iconSize?this.iconSize:this.tooltip!==!1?"32px":"64px"}renderIcon(){return W`
      <sl-icon
        style="color: red; height: ${this._iconSize}; width: ${this._iconSize}; margin-bottom: 8px;"
        src="${ti(ii)}"
      ></sl-icon>
    `}renderFull(){return W` <div class="column center-content" style="flex: 1">
      ${this.renderIcon()}
      <div style="width: 500px; text-align: center" class="column">
        ${this.headline?W` <span style="margin-bottom: 8px">${this.headline} </span>`:W``}
        <span class="placeholder"
          >${typeof this.error=="object"&&"message"in this.error?this.error.message:this.error}
        </span>
      </div>
    </div>`}renderTooltip(){return W`
      <sl-tooltip hoist .content=${this.headline?this.headline:this.error}>
        ${this.renderIcon()}</sl-tooltip
      >
    `}render(){return this.tooltip!==!1?this.renderTooltip():this.renderFull()}};ot.styles=[Ke,rt`
      :host {
        display: flex;
        flex: 1;
      }
    `];vt([g({attribute:"tooltip"})],ot.prototype,"tooltip",void 0);vt([g()],ot.prototype,"headline",void 0);vt([g()],ot.prototype,"error",void 0);vt([g({attribute:"icon-size"})],ot.prototype,"iconSize",void 0);ot=vt([Fe("display-error")],ot);var bo=rt`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=t=>t??Ne;var O=class extends Q{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?Jt`a`:Jt`button`;return je`
      <${e}
        part="base"
        class=${$t({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${F(t?void 0:this.disabled)}
        type=${F(t?void 0:"button")}
        href=${F(t?this.href:void 0)}
        target=${F(t?this.target:void 0)}
        download=${F(t?this.download:void 0)}
        rel=${F(t&&this.target?"noreferrer noopener":void 0)}
        role=${F(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${F(this.name)}
          library=${F(this.library)}
          src=${F(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};O.styles=[_t,bo];O.dependencies={"sl-icon":N};p([ct(".icon-button")],O.prototype,"button",2);p([ve()],O.prototype,"hasFocus",2);p([g()],O.prototype,"name",2);p([g()],O.prototype,"library",2);p([g()],O.prototype,"src",2);p([g()],O.prototype,"href",2);p([g()],O.prototype,"target",2);p([g()],O.prototype,"download",2);p([g()],O.prototype,"label",2);p([g({type:Boolean,reflect:!0})],O.prototype,"disabled",2);const Ro={role:"admin",singular_name:zt("Administrator"),plural_name:zt("Administrators"),description:zt("Administrators can add and remove assignees for any other role.")};export{Lo as A,we as B,St as C,Oo as D,$o as E,So as F,Co as G,no as L,O as S,p as _,_t as a,Q as b,xo as c,Ro as d,$t as e,_o as f,ii as g,Ao as h,ct as i,N as j,mt as k,Je as l,zt as m,Qe as n,Eo as o,C as p,ze as q,ve as r,Ke as s,Ge as t,ce as u,ue as v,ti as w,le as x,he as y,F as z};
