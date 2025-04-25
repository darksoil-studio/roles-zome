import{j as He,f as Ie,i as rt,r as be,x as R,T as Ne,E as je,k as te,u as Ve}from"./roles-client.BoEB0TfU.js";import{a as f,s as We,t as Ue}from"./property.D7sMmF5L.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qe={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ye=t=>(...e)=>({_$litDirective$:t,values:e});class Xe{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,i){this._$Ct=e,this._$AM=o,this._$Ci=i}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}}function Ei(t){return{attribute:t,type:Object,hasChanged:(e,o)=>(e==null?void 0:e.toString())!==(o==null?void 0:o.toString()),converter:{fromAttribute:e=>e&&e.length>0&&He(e),toAttribute:e=>e&&Ie(e)},reflect:!0}}function Ze(t){return`data:image/svg+xml;utf8,${Ke(t)}`}function Ke(t){return encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' style='fill: currentColor' viewBox='0 0 24 24'><path d='${t}'></path></svg>`)}var $i="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z",Ge="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",zi="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",Si="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ye(t){return f({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Je=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,o),o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ht(t,e){return(o,i,r)=>{const n=s=>{var a;return((a=s.renderRoot)==null?void 0:a.querySelector(t))??null};return Je(o,i,{get(){return n(this)}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ee="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qe=(t,...e)=>({strTag:!0,strings:t,values:e}),Li=Qe,to=t=>typeof t!="string"&&"strTag"in t,eo=(t,e,o)=>{let i=t[0];for(let r=1;r<t.length;r++)i+=e[r-1],i+=t[r];return i};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oo=t=>to(t)?eo(t.strings,t.values):t;let kt=oo;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let io=class{constructor(e){this.__litLocalizeEventHandler=o=>{o.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(ee,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(ee,this.__litLocalizeEventHandler)}};const ro=t=>t.addController(new io(t)),no=ro;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oi=()=>(t,e)=>(t.addInitializer(no),t);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class so{constructor(){this.settled=!1,this.promise=new Promise((e,o)=>{this._resolve=e,this._reject=o})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let t=0;t<256;t++)(t>>4&15).toString(16)+(t&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ao=new so;ao.resolve();var Ft="";function oe(t){Ft=t}function lo(t=""){if(!Ft){const e=[...document.getElementsByTagName("script")],o=e.find(i=>i.hasAttribute("data-shoelace"));if(o)oe(o.getAttribute("data-shoelace"));else{const i=e.find(n=>/shoelace(\.min)?\.js($|\?)/.test(n.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(n.src));let r="";i&&(r=i.getAttribute("src")),oe(r.split("/").slice(0,-1).join("/"))}}return Ft.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var co={name:"default",resolver:t=>lo(`assets/icons/${t}.svg`)},ho=co,ie={caret:`
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
  `},uo={name:"system",resolver:t=>t in ie?`data:image/svg+xml,${encodeURIComponent(ie[t])}`:""},po=uo,fo=[ho,po],Ht=[];function go(t){Ht.push(t)}function mo(t){Ht=Ht.filter(e=>e!==t)}function re(t){return fo.find(e=>e.name===t)}var vo=rt`
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
`,we=Object.defineProperty,bo=Object.defineProperties,yo=Object.getOwnPropertyDescriptor,wo=Object.getOwnPropertyDescriptors,ne=Object.getOwnPropertySymbols,xo=Object.prototype.hasOwnProperty,Co=Object.prototype.propertyIsEnumerable,Rt=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),se=(t,e,o)=>e in t?we(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,St=(t,e)=>{for(var o in e||(e={}))xo.call(e,o)&&se(t,o,e[o]);if(ne)for(var o of ne(e))Co.call(e,o)&&se(t,o,e[o]);return t},xe=(t,e)=>bo(t,wo(e)),p=(t,e,o,i)=>{for(var r=i>1?void 0:i?yo(e,o):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(r=(i?s(e,o,r):s(r))||r);return i&&r&&we(e,o,r),r},Ce=(t,e,o)=>{if(!e.has(t))throw TypeError("Cannot "+o)},Ao=(t,e,o)=>(Ce(t,e,"read from private field"),e.get(t)),_o=(t,e,o)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,o)},Eo=(t,e,o,i)=>(Ce(t,e,"write to private field"),e.set(t,o),o),$o=function(t,e){this[0]=t,this[1]=e},ki=t=>{var e=t[Rt("asyncIterator")],o=!1,i,r={};return e==null?(e=t[Rt("iterator")](),i=n=>r[n]=s=>e[n](s)):(e=e.call(t),i=n=>r[n]=s=>{if(o){if(o=!1,n==="throw")throw s;return s}return o=!0,{done:!1,value:new $o(new Promise(a=>{var l=e[n](s);if(!(l instanceof Object))throw TypeError("Object expected");a(l)}),1)}}),r[Rt("iterator")]=()=>r,i("next"),"throw"in e?i("throw"):r.throw=n=>{throw n},"return"in e&&i("return"),r};function vt(t,e){const o=St({waitUntilFirstUpdate:!1},e);return(i,r)=>{const{update:n}=i,s=Array.isArray(t)?t:[t];i.update=function(a){s.forEach(l=>{const c=l;if(a.has(c)){const h=a.get(c),d=this[c];h!==d&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[r](h,d)}}),n.call(this,a)}}}var bt=rt`
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
`,At,q=class extends be{constructor(){super(),_o(this,At,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const o=new CustomEvent(t,St({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}static define(t,e=this,o={}){const i=customElements.get(t);if(!i){try{customElements.define(t,e,o)}catch{customElements.define(t,class extends e{},o)}return}let r=" (unknown version)",n=r;"version"in e&&e.version&&(r=" v"+e.version),"version"in i&&i.version&&(n=" v"+i.version),!(r&&n&&r===n)&&console.warn(`Attempted to register <${t}>${r}, but <${t}>${n} has already been registered.`)}attributeChangedCallback(t,e,o){Ao(this,At)||(this.constructor.elementProperties.forEach((i,r)=>{i.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),Eo(this,At,!0)),super.attributeChangedCallback(t,e,o)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,o)=>{t.has(o)&&this[o]==null&&(this[o]=e)})}};At=new WeakMap;q.version="2.18.0";q.dependencies={};p([f()],q.prototype,"dir",2);p([f()],q.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zo=(t,e)=>(t==null?void 0:t._$litType$)!==void 0,Ri=t=>t.strings===void 0,So={},Ti=(t,e=So)=>t._$AH=e;var ft=Symbol(),xt=Symbol(),Tt,Mt=new Map,j=class extends q{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var o;let i;if(e!=null&&e.spriteSheet)return this.svg=R`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?ft:xt}catch{return xt}try{const r=document.createElement("div");r.innerHTML=await i.text();const n=r.firstElementChild;if(((o=n==null?void 0:n.tagName)==null?void 0:o.toLowerCase())!=="svg")return ft;Tt||(Tt=new DOMParser);const a=Tt.parseFromString(n.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):ft}catch{return ft}}connectedCallback(){super.connectedCallback(),go(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),mo(this)}getIconSource(){const t=re(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:o}=this.getIconSource(),i=o?re(this.library):void 0;if(!e){this.svg=null;return}let r=Mt.get(e);if(r||(r=this.resolveIcon(e,i),Mt.set(e,r)),!this.initialRender)return;const n=await r;if(n===xt&&Mt.delete(e),e===this.getIconSource().url){if(zo(n)){if(this.svg=n,i){await this.updateComplete;const s=this.shadowRoot.querySelector("[part='svg']");typeof i.mutator=="function"&&s&&i.mutator(s)}return}switch(n){case xt:case ft:this.svg=null,this.emit("sl-error");break;default:this.svg=n.cloneNode(!0),(t=i==null?void 0:i.mutator)==null||t.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};j.styles=[bt,vo];p([ye()],j.prototype,"svg",2);p([f({reflect:!0})],j.prototype,"name",2);p([f()],j.prototype,"src",2);p([f()],j.prototype,"label",2);p([f({reflect:!0})],j.prototype,"library",2);p([vt("label")],j.prototype,"handleLabelChange",1);p([vt(["name","src","library"])],j.prototype,"setIcon",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt=Ye(class extends Xe{constructor(t){var e;if(super(t),t.type!==qe.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,r;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((i=this.nt)!=null&&i.has(n))&&this.st.add(n);return this.render(e)}const o=t.element.classList;for(const n of this.st)n in e||(o.remove(n),this.st.delete(n));for(const n in e){const s=!!e[n];s===this.st.has(n)||(r=this.nt)!=null&&r.has(n)||(s?(o.add(n),this.st.add(n)):(o.remove(n),this.st.delete(n)))}return Ne}});j.define("sl-icon");var Lo=rt`
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
`,Po=rt`
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
`;const It=new Set,at=new Map;let tt,Wt="ltr",Ut="en";const Ae=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Ae){const t=new MutationObserver(Ee);Wt=document.documentElement.dir||"ltr",Ut=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function _e(...t){t.map(e=>{const o=e.$code.toLowerCase();at.has(o)?at.set(o,Object.assign(Object.assign({},at.get(o)),e)):at.set(o,e),tt||(tt=e)}),Ee()}function Ee(){Ae&&(Wt=document.documentElement.dir||"ltr",Ut=document.documentElement.lang||navigator.language),[...It.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let Oo=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){It.add(this.host)}hostDisconnected(){It.delete(this.host)}dir(){return`${this.host.dir||Wt}`.toLowerCase()}lang(){return`${this.host.lang||Ut}`.toLowerCase()}getTranslationData(e){var o,i;const r=new Intl.Locale(e.replace(/_/g,"-")),n=r==null?void 0:r.language.toLowerCase(),s=(i=(o=r==null?void 0:r.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&i!==void 0?i:"",a=at.get(`${n}-${s}`),l=at.get(n);return{locale:r,language:n,region:s,primary:a,secondary:l}}exists(e,o){var i;const{primary:r,secondary:n}=this.getTranslationData((i=o.lang)!==null&&i!==void 0?i:this.lang());return o=Object.assign({includeFallback:!1},o),!!(r&&r[e]||n&&n[e]||o.includeFallback&&tt&&tt[e])}term(e,...o){const{primary:i,secondary:r}=this.getTranslationData(this.lang());let n;if(i&&i[e])n=i[e];else if(r&&r[e])n=r[e];else if(tt&&tt[e])n=tt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof n=="function"?n(...o):n}date(e,o){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),o).format(e)}number(e,o){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),o).format(e)}relativeTime(e,o,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,o)}};var $e={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};_e($e);var ko=$e,qt=class extends Oo{};_e(ko);const G=Math.min,z=Math.max,Et=Math.round,Ct=Math.floor,I=t=>({x:t,y:t}),Ro={left:"right",right:"left",bottom:"top",top:"bottom"},To={start:"end",end:"start"};function Nt(t,e,o){return z(t,G(e,o))}function dt(t,e){return typeof t=="function"?t(e):t}function J(t){return t.split("-")[0]}function ut(t){return t.split("-")[1]}function ze(t){return t==="x"?"y":"x"}function Yt(t){return t==="y"?"height":"width"}function et(t){return["top","bottom"].includes(J(t))?"y":"x"}function Xt(t){return ze(et(t))}function Mo(t,e,o){o===void 0&&(o=!1);const i=ut(t),r=Xt(t),n=Yt(r);let s=r==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(s=$t(s)),[s,$t(s)]}function Bo(t){const e=$t(t);return[jt(t),e,jt(e)]}function jt(t){return t.replace(/start|end/g,e=>To[e])}function Do(t,e,o){const i=["left","right"],r=["right","left"],n=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return o?e?r:i:e?i:r;case"left":case"right":return e?n:s;default:return[]}}function Fo(t,e,o,i){const r=ut(t);let n=Do(J(t),o==="start",i);return r&&(n=n.map(s=>s+"-"+r),e&&(n=n.concat(n.map(jt)))),n}function $t(t){return t.replace(/left|right|bottom|top/g,e=>Ro[e])}function Ho(t){return{top:0,right:0,bottom:0,left:0,...t}}function Se(t){return typeof t!="number"?Ho(t):{top:t,right:t,bottom:t,left:t}}function zt(t){const{x:e,y:o,width:i,height:r}=t;return{width:i,height:r,top:o,left:e,right:e+i,bottom:o+r,x:e,y:o}}function ae(t,e,o){let{reference:i,floating:r}=t;const n=et(e),s=Xt(e),a=Yt(s),l=J(e),c=n==="y",h=i.x+i.width/2-r.width/2,d=i.y+i.height/2-r.height/2,m=i[a]/2-r[a]/2;let u;switch(l){case"top":u={x:h,y:i.y-r.height};break;case"bottom":u={x:h,y:i.y+i.height};break;case"right":u={x:i.x+i.width,y:d};break;case"left":u={x:i.x-r.width,y:d};break;default:u={x:i.x,y:i.y}}switch(ut(e)){case"start":u[s]-=m*(o&&c?-1:1);break;case"end":u[s]+=m*(o&&c?-1:1);break}return u}const Io=async(t,e,o)=>{const{placement:i="bottom",strategy:r="absolute",middleware:n=[],platform:s}=o,a=n.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:h,y:d}=ae(c,i,l),m=i,u={},g=0;for(let v=0;v<a.length;v++){const{name:y,fn:b}=a[v],{x:w,y:x,data:_,reset:A}=await b({x:h,y:d,initialPlacement:i,placement:m,strategy:r,middlewareData:u,rects:c,platform:s,elements:{reference:t,floating:e}});h=w??h,d=x??d,u={...u,[y]:{...u[y],..._}},A&&g<=50&&(g++,typeof A=="object"&&(A.placement&&(m=A.placement),A.rects&&(c=A.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:r}):A.rects),{x:h,y:d}=ae(c,m,l)),v=-1)}return{x:h,y:d,placement:m,strategy:r,middlewareData:u}};async function Zt(t,e){var o;e===void 0&&(e={});const{x:i,y:r,platform:n,rects:s,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:m=!1,padding:u=0}=dt(e,t),g=Se(u),y=a[m?d==="floating"?"reference":"floating":d],b=zt(await n.getClippingRect({element:(o=await(n.isElement==null?void 0:n.isElement(y)))==null||o?y:y.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(a.floating)),boundary:c,rootBoundary:h,strategy:l})),w=d==="floating"?{x:i,y:r,width:s.floating.width,height:s.floating.height}:s.reference,x=await(n.getOffsetParent==null?void 0:n.getOffsetParent(a.floating)),_=await(n.isElement==null?void 0:n.isElement(x))?await(n.getScale==null?void 0:n.getScale(x))||{x:1,y:1}:{x:1,y:1},A=zt(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:w,offsetParent:x,strategy:l}):w);return{top:(b.top-A.top+g.top)/_.y,bottom:(A.bottom-b.bottom+g.bottom)/_.y,left:(b.left-A.left+g.left)/_.x,right:(A.right-b.right+g.right)/_.x}}const No=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:i,placement:r,rects:n,platform:s,elements:a,middlewareData:l}=e,{element:c,padding:h=0}=dt(t,e)||{};if(c==null)return{};const d=Se(h),m={x:o,y:i},u=Xt(r),g=Yt(u),v=await s.getDimensions(c),y=u==="y",b=y?"top":"left",w=y?"bottom":"right",x=y?"clientHeight":"clientWidth",_=n.reference[g]+n.reference[u]-m[u]-n.floating[g],A=m[u]-n.reference[u],P=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let O=P?P[x]:0;(!O||!await(s.isElement==null?void 0:s.isElement(P)))&&(O=a.floating[x]||n.floating[g]);const W=_/2-A/2,B=O/2-v[g]/2-1,k=G(d[b],B),Y=G(d[w],B),D=k,X=O-v[g]-Y,$=O/2-v[g]/2+W,st=Nt(D,$,X),U=!l.arrow&&ut(r)!=null&&$!==st&&n.reference[g]/2-($<D?k:Y)-v[g]/2<0,F=U?$<D?$-D:$-X:0;return{[u]:m[u]+F,data:{[u]:st,centerOffset:$-st-F,...U&&{alignmentOffset:F}},reset:U}}}),jo=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,i;const{placement:r,middlewareData:n,rects:s,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:m,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:v=!0,...y}=dt(t,e);if((o=n.arrow)!=null&&o.alignmentOffset)return{};const b=J(r),w=et(a),x=J(a)===a,_=await(l.isRTL==null?void 0:l.isRTL(c.floating)),A=m||(x||!v?[$t(a)]:Bo(a)),P=g!=="none";!m&&P&&A.push(...Fo(a,v,g,_));const O=[a,...A],W=await Zt(e,y),B=[];let k=((i=n.flip)==null?void 0:i.overflows)||[];if(h&&B.push(W[b]),d){const $=Mo(r,s,_);B.push(W[$[0]],W[$[1]])}if(k=[...k,{placement:r,overflows:B}],!B.every($=>$<=0)){var Y,D;const $=(((Y=n.flip)==null?void 0:Y.index)||0)+1,st=O[$];if(st)return{data:{index:$,overflows:k},reset:{placement:st}};let U=(D=k.filter(F=>F.overflows[0]<=0).sort((F,Z)=>F.overflows[1]-Z.overflows[1])[0])==null?void 0:D.placement;if(!U)switch(u){case"bestFit":{var X;const F=(X=k.filter(Z=>{if(P){const K=et(Z.placement);return K===w||K==="y"}return!0}).map(Z=>[Z.placement,Z.overflows.filter(K=>K>0).reduce((K,Fe)=>K+Fe,0)]).sort((Z,K)=>Z[1]-K[1])[0])==null?void 0:X[0];F&&(U=F);break}case"initialPlacement":U=a;break}if(r!==U)return{reset:{placement:U}}}return{}}}};async function Vo(t,e){const{placement:o,platform:i,elements:r}=t,n=await(i.isRTL==null?void 0:i.isRTL(r.floating)),s=J(o),a=ut(o),l=et(o)==="y",c=["left","top"].includes(s)?-1:1,h=n&&l?-1:1,d=dt(e,t);let{mainAxis:m,crossAxis:u,alignmentAxis:g}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof g=="number"&&(u=a==="end"?g*-1:g),l?{x:u*h,y:m*c}:{x:m*c,y:u*h}}const Wo=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,i;const{x:r,y:n,placement:s,middlewareData:a}=e,l=await Vo(e,t);return s===((o=a.offset)==null?void 0:o.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:r+l.x,y:n+l.y,data:{...l,placement:s}}}}},Uo=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:r}=e,{mainAxis:n=!0,crossAxis:s=!1,limiter:a={fn:y=>{let{x:b,y:w}=y;return{x:b,y:w}}},...l}=dt(t,e),c={x:o,y:i},h=await Zt(e,l),d=et(J(r)),m=ze(d);let u=c[m],g=c[d];if(n){const y=m==="y"?"top":"left",b=m==="y"?"bottom":"right",w=u+h[y],x=u-h[b];u=Nt(w,u,x)}if(s){const y=d==="y"?"top":"left",b=d==="y"?"bottom":"right",w=g+h[y],x=g-h[b];g=Nt(w,g,x)}const v=a.fn({...e,[m]:u,[d]:g});return{...v,data:{x:v.x-o,y:v.y-i,enabled:{[m]:n,[d]:s}}}}}},qo=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var o,i;const{placement:r,rects:n,platform:s,elements:a}=e,{apply:l=()=>{},...c}=dt(t,e),h=await Zt(e,c),d=J(r),m=ut(r),u=et(r)==="y",{width:g,height:v}=n.floating;let y,b;d==="top"||d==="bottom"?(y=d,b=m===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(b=d,y=m==="end"?"top":"bottom");const w=v-h.top-h.bottom,x=g-h.left-h.right,_=G(v-h[y],w),A=G(g-h[b],x),P=!e.middlewareData.shift;let O=_,W=A;if((o=e.middlewareData.shift)!=null&&o.enabled.x&&(W=x),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(O=w),P&&!m){const k=z(h.left,0),Y=z(h.right,0),D=z(h.top,0),X=z(h.bottom,0);u?W=g-2*(k!==0||Y!==0?k+Y:z(h.left,h.right)):O=v-2*(D!==0||X!==0?D+X:z(h.top,h.bottom))}await l({...e,availableWidth:W,availableHeight:O});const B=await s.getDimensions(a.floating);return g!==B.width||v!==B.height?{reset:{rects:!0}}:{}}}};function Lt(){return typeof window<"u"}function pt(t){return Le(t)?(t.nodeName||"").toLowerCase():"#document"}function S(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function V(t){var e;return(e=(Le(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Le(t){return Lt()?t instanceof Node||t instanceof S(t).Node:!1}function T(t){return Lt()?t instanceof Element||t instanceof S(t).Element:!1}function N(t){return Lt()?t instanceof HTMLElement||t instanceof S(t).HTMLElement:!1}function le(t){return!Lt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof S(t).ShadowRoot}function yt(t){const{overflow:e,overflowX:o,overflowY:i,display:r}=M(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+o)&&!["inline","contents"].includes(r)}function Yo(t){return["table","td","th"].includes(pt(t))}function Pt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Kt(t){const e=Gt(),o=T(t)?M(t):t;return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(o.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(o.contain||"").includes(i))}function Xo(t){let e=Q(t);for(;N(e)&&!ct(e);){if(Kt(e))return e;if(Pt(e))return null;e=Q(e)}return null}function Gt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ct(t){return["html","body","#document"].includes(pt(t))}function M(t){return S(t).getComputedStyle(t)}function Ot(t){return T(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Q(t){if(pt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||le(t)&&t.host||V(t);return le(e)?e.host:e}function Pe(t){const e=Q(t);return ct(e)?t.ownerDocument?t.ownerDocument.body:t.body:N(e)&&yt(e)?e:Pe(e)}function mt(t,e,o){var i;e===void 0&&(e=[]),o===void 0&&(o=!0);const r=Pe(t),n=r===((i=t.ownerDocument)==null?void 0:i.body),s=S(r);if(n){const a=Vt(s);return e.concat(s,s.visualViewport||[],yt(r)?r:[],a&&o?mt(a):[])}return e.concat(r,mt(r,[],o))}function Vt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Oe(t){const e=M(t);let o=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=N(t),n=r?t.offsetWidth:o,s=r?t.offsetHeight:i,a=Et(o)!==n||Et(i)!==s;return a&&(o=n,i=s),{width:o,height:i,$:a}}function Jt(t){return T(t)?t:t.contextElement}function lt(t){const e=Jt(t);if(!N(e))return I(1);const o=e.getBoundingClientRect(),{width:i,height:r,$:n}=Oe(e);let s=(n?Et(o.width):o.width)/i,a=(n?Et(o.height):o.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const Zo=I(0);function ke(t){const e=S(t);return!Gt()||!e.visualViewport?Zo:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ko(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==S(t)?!1:e}function ot(t,e,o,i){e===void 0&&(e=!1),o===void 0&&(o=!1);const r=t.getBoundingClientRect(),n=Jt(t);let s=I(1);e&&(i?T(i)&&(s=lt(i)):s=lt(t));const a=Ko(n,o,i)?ke(n):I(0);let l=(r.left+a.x)/s.x,c=(r.top+a.y)/s.y,h=r.width/s.x,d=r.height/s.y;if(n){const m=S(n),u=i&&T(i)?S(i):i;let g=m,v=Vt(g);for(;v&&i&&u!==g;){const y=lt(v),b=v.getBoundingClientRect(),w=M(v),x=b.left+(v.clientLeft+parseFloat(w.paddingLeft))*y.x,_=b.top+(v.clientTop+parseFloat(w.paddingTop))*y.y;l*=y.x,c*=y.y,h*=y.x,d*=y.y,l+=x,c+=_,g=S(v),v=Vt(g)}}return zt({width:h,height:d,x:l,y:c})}function Qt(t,e){const o=Ot(t).scrollLeft;return e?e.left+o:ot(V(t)).left+o}function Re(t,e,o){o===void 0&&(o=!1);const i=t.getBoundingClientRect(),r=i.left+e.scrollLeft-(o?0:Qt(t,i)),n=i.top+e.scrollTop;return{x:r,y:n}}function Go(t){let{elements:e,rect:o,offsetParent:i,strategy:r}=t;const n=r==="fixed",s=V(i),a=e?Pt(e.floating):!1;if(i===s||a&&n)return o;let l={scrollLeft:0,scrollTop:0},c=I(1);const h=I(0),d=N(i);if((d||!d&&!n)&&((pt(i)!=="body"||yt(s))&&(l=Ot(i)),N(i))){const u=ot(i);c=lt(i),h.x=u.x+i.clientLeft,h.y=u.y+i.clientTop}const m=s&&!d&&!n?Re(s,l,!0):I(0);return{width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-l.scrollLeft*c.x+h.x+m.x,y:o.y*c.y-l.scrollTop*c.y+h.y+m.y}}function Jo(t){return Array.from(t.getClientRects())}function Qo(t){const e=V(t),o=Ot(t),i=t.ownerDocument.body,r=z(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=z(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let s=-o.scrollLeft+Qt(t);const a=-o.scrollTop;return M(i).direction==="rtl"&&(s+=z(e.clientWidth,i.clientWidth)-r),{width:r,height:n,x:s,y:a}}function ti(t,e){const o=S(t),i=V(t),r=o.visualViewport;let n=i.clientWidth,s=i.clientHeight,a=0,l=0;if(r){n=r.width,s=r.height;const c=Gt();(!c||c&&e==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:n,height:s,x:a,y:l}}function ei(t,e){const o=ot(t,!0,e==="fixed"),i=o.top+t.clientTop,r=o.left+t.clientLeft,n=N(t)?lt(t):I(1),s=t.clientWidth*n.x,a=t.clientHeight*n.y,l=r*n.x,c=i*n.y;return{width:s,height:a,x:l,y:c}}function ce(t,e,o){let i;if(e==="viewport")i=ti(t,o);else if(e==="document")i=Qo(V(t));else if(T(e))i=ei(e,o);else{const r=ke(t);i={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return zt(i)}function Te(t,e){const o=Q(t);return o===e||!T(o)||ct(o)?!1:M(o).position==="fixed"||Te(o,e)}function oi(t,e){const o=e.get(t);if(o)return o;let i=mt(t,[],!1).filter(a=>T(a)&&pt(a)!=="body"),r=null;const n=M(t).position==="fixed";let s=n?Q(t):t;for(;T(s)&&!ct(s);){const a=M(s),l=Kt(s);!l&&a.position==="fixed"&&(r=null),(n?!l&&!r:!l&&a.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||yt(s)&&!l&&Te(t,s))?i=i.filter(h=>h!==s):r=a,s=Q(s)}return e.set(t,i),i}function ii(t){let{element:e,boundary:o,rootBoundary:i,strategy:r}=t;const s=[...o==="clippingAncestors"?Pt(e)?[]:oi(e,this._c):[].concat(o),i],a=s[0],l=s.reduce((c,h)=>{const d=ce(e,h,r);return c.top=z(d.top,c.top),c.right=G(d.right,c.right),c.bottom=G(d.bottom,c.bottom),c.left=z(d.left,c.left),c},ce(e,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function ri(t){const{width:e,height:o}=Oe(t);return{width:e,height:o}}function ni(t,e,o){const i=N(e),r=V(e),n=o==="fixed",s=ot(t,!0,n,e);let a={scrollLeft:0,scrollTop:0};const l=I(0);if(i||!i&&!n)if((pt(e)!=="body"||yt(r))&&(a=Ot(e)),i){const m=ot(e,!0,n,e);l.x=m.x+e.clientLeft,l.y=m.y+e.clientTop}else r&&(l.x=Qt(r));const c=r&&!i&&!n?Re(r,a):I(0),h=s.left+a.scrollLeft-l.x-c.x,d=s.top+a.scrollTop-l.y-c.y;return{x:h,y:d,width:s.width,height:s.height}}function Bt(t){return M(t).position==="static"}function he(t,e){if(!N(t)||M(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return V(t)===o&&(o=o.ownerDocument.body),o}function Me(t,e){const o=S(t);if(Pt(t))return o;if(!N(t)){let r=Q(t);for(;r&&!ct(r);){if(T(r)&&!Bt(r))return r;r=Q(r)}return o}let i=he(t,e);for(;i&&Yo(i)&&Bt(i);)i=he(i,e);return i&&ct(i)&&Bt(i)&&!Kt(i)?o:i||Xo(t)||o}const si=async function(t){const e=this.getOffsetParent||Me,o=this.getDimensions,i=await o(t.floating);return{reference:ni(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function ai(t){return M(t).direction==="rtl"}const _t={convertOffsetParentRelativeRectToViewportRelativeRect:Go,getDocumentElement:V,getClippingRect:ii,getOffsetParent:Me,getElementRects:si,getClientRects:Jo,getDimensions:ri,getScale:lt,isElement:T,isRTL:ai};function li(t,e){let o=null,i;const r=V(t);function n(){var a;clearTimeout(i),(a=o)==null||a.disconnect(),o=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),n();const{left:c,top:h,width:d,height:m}=t.getBoundingClientRect();if(a||e(),!d||!m)return;const u=Ct(h),g=Ct(r.clientWidth-(c+d)),v=Ct(r.clientHeight-(h+m)),y=Ct(c),w={rootMargin:-u+"px "+-g+"px "+-v+"px "+-y+"px",threshold:z(0,G(1,l))||1};let x=!0;function _(A){const P=A[0].intersectionRatio;if(P!==l){if(!x)return s();P?s(!1,P):i=setTimeout(()=>{s(!1,1e-7)},1e3)}x=!1}try{o=new IntersectionObserver(_,{...w,root:r.ownerDocument})}catch{o=new IntersectionObserver(_,w)}o.observe(t)}return s(!0),n}function ci(t,e,o,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=Jt(t),h=r||n?[...c?mt(c):[],...mt(e)]:[];h.forEach(b=>{r&&b.addEventListener("scroll",o,{passive:!0}),n&&b.addEventListener("resize",o)});const d=c&&a?li(c,o):null;let m=-1,u=null;s&&(u=new ResizeObserver(b=>{let[w]=b;w&&w.target===c&&u&&(u.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var x;(x=u)==null||x.observe(e)})),o()}),c&&!l&&u.observe(c),u.observe(e));let g,v=l?ot(t):null;l&&y();function y(){const b=ot(t);v&&(b.x!==v.x||b.y!==v.y||b.width!==v.width||b.height!==v.height)&&o(),v=b,g=requestAnimationFrame(y)}return o(),()=>{var b;h.forEach(w=>{r&&w.removeEventListener("scroll",o),n&&w.removeEventListener("resize",o)}),d==null||d(),(b=u)==null||b.disconnect(),u=null,l&&cancelAnimationFrame(g)}}const hi=Wo,di=Uo,ui=jo,de=qo,pi=No,fi=(t,e,o)=>{const i=new Map,r={platform:_t,...o},n={...r.platform,_c:i};return Io(t,e,{...r,platform:n})};function gi(t){return mi(t)}function Dt(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function mi(t){for(let e=t;e;e=Dt(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=Dt(t);e;e=Dt(e)){if(!(e instanceof Element))continue;const o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||o.filter!=="none"||e.tagName==="BODY"))return e}return null}function vi(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var C=class extends q{constructor(){super(...arguments),this.localize=new qt(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom");let i=0,r=0,n=0,s=0,a=0,l=0,c=0,h=0;o?t.top<e.top?(i=t.left,r=t.bottom,n=t.right,s=t.bottom,a=e.left,l=e.top,c=e.right,h=e.top):(i=e.left,r=e.bottom,n=e.right,s=e.bottom,a=t.left,l=t.top,c=t.right,h=t.top):t.left<e.left?(i=t.right,r=t.top,n=e.left,s=e.top,a=t.right,l=t.bottom,c=e.left,h=e.bottom):(i=e.right,r=e.top,n=t.left,s=t.top,a=e.right,l=e.bottom,c=t.left,h=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||vi(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&(this.cleanup=ci(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[hi({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(de({apply:({rects:o})=>{const i=this.sync==="width"||this.sync==="both",r=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${o.reference.width}px`:"",this.popup.style.height=r?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(ui({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(di({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(de({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(pi({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?o=>_t.getOffsetParent(o,gi):_t.getOffsetParent;fi(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:xe(St({},_t),{getOffsetParent:e})}).then(({x:o,y:i,middlewareData:r,placement:n})=>{const s=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${o}px`,top:`${i}px`}),this.arrow){const l=r.arrow.x,c=r.arrow.y;let h="",d="",m="",u="";if(this.arrowPlacement==="start"){const g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=s?g:"",u=s?"":g}else if(this.arrowPlacement==="end"){const g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=s?"":g,u=s?g:"",m=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(u=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(u=typeof l=="number"?`${l}px`:"",h=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:h,right:d,bottom:m,left:u,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return R`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${gt({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${gt({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?R`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};C.styles=[bt,Po];p([ht(".popup")],C.prototype,"popup",2);p([ht(".popup__arrow")],C.prototype,"arrowEl",2);p([f()],C.prototype,"anchor",2);p([f({type:Boolean,reflect:!0})],C.prototype,"active",2);p([f({reflect:!0})],C.prototype,"placement",2);p([f({reflect:!0})],C.prototype,"strategy",2);p([f({type:Number})],C.prototype,"distance",2);p([f({type:Number})],C.prototype,"skidding",2);p([f({type:Boolean})],C.prototype,"arrow",2);p([f({attribute:"arrow-placement"})],C.prototype,"arrowPlacement",2);p([f({attribute:"arrow-padding",type:Number})],C.prototype,"arrowPadding",2);p([f({type:Boolean})],C.prototype,"flip",2);p([f({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],C.prototype,"flipFallbackPlacements",2);p([f({attribute:"flip-fallback-strategy"})],C.prototype,"flipFallbackStrategy",2);p([f({type:Object})],C.prototype,"flipBoundary",2);p([f({attribute:"flip-padding",type:Number})],C.prototype,"flipPadding",2);p([f({type:Boolean})],C.prototype,"shift",2);p([f({type:Object})],C.prototype,"shiftBoundary",2);p([f({attribute:"shift-padding",type:Number})],C.prototype,"shiftPadding",2);p([f({attribute:"auto-size"})],C.prototype,"autoSize",2);p([f()],C.prototype,"sync",2);p([f({type:Object})],C.prototype,"autoSizeBoundary",2);p([f({attribute:"auto-size-padding",type:Number})],C.prototype,"autoSizePadding",2);p([f({attribute:"hover-bridge",type:Boolean})],C.prototype,"hoverBridge",2);var Be=new Map,bi=new WeakMap;function yi(t){return t??{keyframes:[],options:{duration:0}}}function ue(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function De(t,e){Be.set(t,yi(e))}function pe(t,e,o){const i=bi.get(t);if(i!=null&&i[e])return ue(i[e],o.dir);const r=Be.get(e);return r?ue(r,o.dir):{keyframes:[],options:{duration:0}}}function fe(t,e){return new Promise(o=>{function i(r){r.target===t&&(t.removeEventListener(e,i),o())}t.addEventListener(e,i)})}function ge(t,e,o){return new Promise(i=>{if((o==null?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,xe(St({},o),{duration:wi()?0:o.duration}));r.addEventListener("cancel",i,{once:!0}),r.addEventListener("finish",i,{once:!0})})}function me(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function wi(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ve(t){return Promise.all(t.getAnimations().map(e=>new Promise(o=>{e.cancel(),requestAnimationFrame(o)})))}var E=class extends q{constructor(){super(),this.localize=new qt(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=me(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=me(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await ve(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:o,options:i}=pe(this,"tooltip.show",{dir:this.localize.dir()});await ge(this.popup.popup,o,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await ve(this.body);const{keyframes:o,options:i}=pe(this,"tooltip.hide",{dir:this.localize.dir()});await ge(this.popup.popup,o,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,fe(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,fe(this,"sl-after-hide")}render(){return R`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${gt({tooltip:!0,"tooltip--open":this.open})}
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
    `}};E.styles=[bt,Lo];E.dependencies={"sl-popup":C};p([ht("slot:not([name])")],E.prototype,"defaultSlot",2);p([ht(".tooltip__body")],E.prototype,"body",2);p([ht("sl-popup")],E.prototype,"popup",2);p([f()],E.prototype,"content",2);p([f()],E.prototype,"placement",2);p([f({type:Boolean,reflect:!0})],E.prototype,"disabled",2);p([f({type:Number})],E.prototype,"distance",2);p([f({type:Boolean,reflect:!0})],E.prototype,"open",2);p([f({type:Number})],E.prototype,"skidding",2);p([f()],E.prototype,"trigger",2);p([f({type:Boolean})],E.prototype,"hoist",2);p([vt("open",{waitUntilFirstUpdate:!0})],E.prototype,"handleOpenChange",1);p([vt(["content","distance","hoist","placement","skidding"])],E.prototype,"handleOptionsChange",1);p([vt("disabled")],E.prototype,"handleDisabledChange",1);De("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});De("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});E.define("sl-tooltip");var wt=function(t,e,o,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,o,n):s(e,o))||n);return r>3&&n&&Object.defineProperty(e,o,n),n};let it=class extends be{constructor(){super(...arguments),this.tooltip=!1}get _iconSize(){return this.iconSize?this.iconSize:this.tooltip!==!1?"32px":"64px"}renderIcon(){return R`
			<sl-icon
				style="color: red; height: ${this._iconSize}; width: ${this._iconSize};"
				src="${Ze(Ge)}"
			></sl-icon>
		`}renderFull(){return R` <div class="column center-content" style="flex: 1; gap: 8px">
			${this.renderIcon()}
			<div style="max-width: 500px; text-align: center" class="column">
				${this.headline?R` <span style="margin-bottom: 8px">${this.headline} </span>`:R``}
				<span class="placeholder"
					>${typeof this.error=="object"&&"message"in this.error?this.error.message:this.error}
				</span>
			</div>
		</div>`}renderTooltip(){return R`
			<sl-tooltip hoist .content=${this.headline?this.headline:this.error}>
				${this.renderIcon()}</sl-tooltip
			>
		`}render(){return this.tooltip!==!1?this.renderTooltip():this.renderFull()}};it.styles=[We,rt`
			:host {
				display: flex;
			}
		`];wt([f({attribute:"tooltip"})],it.prototype,"tooltip",void 0);wt([f()],it.prototype,"headline",void 0);wt([f()],it.prototype,"error",void 0);wt([f({attribute:"icon-size"})],it.prototype,"iconSize",void 0);it=wt([Ue("display-error")],it);var xi=rt`
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
 */const H=t=>t??je;var L=class extends q{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?te`a`:te`button`;return Ve`
      <${e}
        part="base"
        class=${gt({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${H(t?void 0:this.disabled)}
        type=${H(t?void 0:"button")}
        href=${H(t?this.href:void 0)}
        target=${H(t?this.target:void 0)}
        download=${H(t?this.download:void 0)}
        rel=${H(t&&this.target?"noreferrer noopener":void 0)}
        role=${H(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${H(this.name)}
          library=${H(this.library)}
          src=${H(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};L.styles=[bt,xi];L.dependencies={"sl-icon":j};p([ht(".icon-button")],L.prototype,"button",2);p([ye()],L.prototype,"hasFocus",2);p([f()],L.prototype,"name",2);p([f()],L.prototype,"library",2);p([f()],L.prototype,"src",2);p([f()],L.prototype,"href",2);p([f()],L.prototype,"target",2);p([f()],L.prototype,"download",2);p([f()],L.prototype,"label",2);p([f({type:Boolean,reflect:!0})],L.prototype,"disabled",2);var Ci=rt`
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
`,nt=class extends q{constructor(){super(...arguments),this.localize=new qt(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return R`
      <span
        part="base"
        class=${gt({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?R`
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
    `}};nt.styles=[bt,Ci];nt.dependencies={"sl-icon-button":L};p([f({reflect:!0})],nt.prototype,"variant",2);p([f({reflect:!0})],nt.prototype,"size",2);p([f({type:Boolean,reflect:!0})],nt.prototype,"pill",2);p([f({type:Boolean})],nt.prototype,"removable",2);nt.define("sl-tag");const Di={role:"admin",singular_name:kt("Administrator"),plural_name:kt("Administrators"),description:kt("Administrators can add and remove assignees for any other role.")};export{xe as A,St as B,Ti as C,zi as D,ki as E,Li as F,qt as L,j as S,p as _,Di as a,Si as b,Ge as c,bt as d,vt as e,q as f,gt as g,Ei as h,ht as i,Ye as j,Xe as k,Oi as l,kt as m,$i as n,L as o,C as p,fe as q,ye as r,De as s,qe as t,ve as u,pe as v,Ze as w,ge as x,H as y,Ri as z};
