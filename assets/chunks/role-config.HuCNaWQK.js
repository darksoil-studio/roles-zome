import{s as He,n as f,t as Ie}from"./property.D124yKuw.js";import{i as tt,j as Ne,f as je,r as ve,x as R,T as Ve,E as We,k as Qt,u as Ue}from"./roles-client.DcXMkolf.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class te{constructor(e,i,o,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(s,n)=>{this.unsubscribe&&(this.unsubscribe!==n&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=s,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(s,n)),this.unsubscribe=n},this.host=e,i.context!==void 0){const s=i;this.context=s.context,this.callback=s.callback,this.subscribe=s.subscribe??!1}else this.context=i,this.callback=o,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new He(this.context,this.t,this.subscribe))}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _o({context:t,subscribe:e}){return(i,o)=>{typeof o=="object"?o.addInitializer(function(){new te(this,{context:t,callback:r=>{i.set.call(this,r)},subscribe:e})}):i.constructor.addInitializer(r=>{new te(r,{context:t,callback:s=>{r[o]=s},subscribe:e})})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function be(t){return f({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qe=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ht(t,e){return(i,o,r)=>{const s=n=>{var a;return((a=n.renderRoot)==null?void 0:a.querySelector(t))??null};return qe(i,o,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ye=(t,...e)=>({strTag:!0,strings:t,values:e}),Eo=Ye,Xe=t=>typeof t!="string"&&"strTag"in t,Ze=(t,e,i)=>{let o=t[0];for(let r=1;r<t.length;r++)o+=e[r-1],o+=t[r];return o};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ke=t=>Xe(t)?Ze(t.strings,t.values):t;let Ot=Ke;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ge{constructor(){this.settled=!1,this.promise=new Promise((e,i)=>{this._resolve=e,this._reject=i})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let t=0;t<256;t++)(t>>4&15).toString(16)+(t&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Je=new Ge;Je.resolve();const Qe=[tt`
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
 */const ti={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ei=t=>(...e)=>({_$litDirective$:t,values:e});class ii{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,o){this._$Ct=e,this._$AM=i,this._$Ci=o}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}}function $o(t){return{attribute:t,type:Object,hasChanged:(e,i)=>(e==null?void 0:e.toString())!==(i==null?void 0:i.toString()),converter:{fromAttribute:e=>e&&e.length>0&&Ne(e),toAttribute:e=>e&&je(e)},reflect:!0}}function oi(t){return`data:image/svg+xml;utf8,${ri(t)}`}function ri(t){return`<svg style='fill: currentColor' viewBox='0 0 24 24'><path d='${t}'></path></svg>`}var So="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z",si="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",zo="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",Po="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ni=class ye extends Event{constructor(e){super(ye.eventName,{bubbles:!0,composed:!0,cancelable:!1}),this.routes=e}};ni.eventName="lit-routes-connected";var Ft="";function ee(t){Ft=t}function ai(t=""){if(!Ft){const e=[...document.getElementsByTagName("script")],i=e.find(o=>o.hasAttribute("data-shoelace"));if(i)ee(i.getAttribute("data-shoelace"));else{const o=e.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src));let r="";o&&(r=o.getAttribute("src")),ee(r.split("/").slice(0,-1).join("/"))}}return Ft.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var li={name:"default",resolver:t=>ai(`assets/icons/${t}.svg`)},ci=li,ie={caret:`
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
  `},hi={name:"system",resolver:t=>t in ie?`data:image/svg+xml,${encodeURIComponent(ie[t])}`:""},di=hi,ui=[ci,di],Ht=[];function pi(t){Ht.push(t)}function fi(t){Ht=Ht.filter(e=>e!==t)}function oe(t){return ui.find(e=>e.name===t)}var gi=tt`
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
`,we=Object.defineProperty,mi=Object.defineProperties,vi=Object.getOwnPropertyDescriptor,bi=Object.getOwnPropertyDescriptors,re=Object.getOwnPropertySymbols,yi=Object.prototype.hasOwnProperty,wi=Object.prototype.propertyIsEnumerable,Rt=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),se=(t,e,i)=>e in t?we(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,zt=(t,e)=>{for(var i in e||(e={}))yi.call(e,i)&&se(t,i,e[i]);if(re)for(var i of re(e))wi.call(e,i)&&se(t,i,e[i]);return t},xe=(t,e)=>mi(t,bi(e)),p=(t,e,i,o)=>{for(var r=o>1?void 0:o?vi(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&we(e,i,r),r},Ce=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},xi=(t,e,i)=>(Ce(t,e,"read from private field"),e.get(t)),Ci=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ai=(t,e,i,o)=>(Ce(t,e,"write to private field"),e.set(t,i),i),_i=function(t,e){this[0]=t,this[1]=e},ko=t=>{var e=t[Rt("asyncIterator")],i=!1,o,r={};return e==null?(e=t[Rt("iterator")](),o=s=>r[s]=n=>e[s](n)):(e=e.call(t),o=s=>r[s]=n=>{if(i){if(i=!1,s==="throw")throw n;return n}return i=!0,{done:!1,value:new _i(new Promise(a=>{var l=e[s](n);if(!(l instanceof Object))throw TypeError("Object expected");a(l)}),1)}}),r[Rt("iterator")]=()=>r,o("next"),"throw"in e?o("throw"):r.throw=s=>{throw s},"return"in e&&o("return"),r};function vt(t,e){const i=zt({waitUntilFirstUpdate:!1},e);return(o,r)=>{const{update:s}=o,n=Array.isArray(t)?t:[t];o.update=function(a){n.forEach(l=>{const c=l;if(a.has(c)){const h=a.get(c),u=this[c];h!==u&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[r](h,u)}}),s.call(this,a)}}}var bt=tt`
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
`,At,U=class extends ve{constructor(){super(),Ci(this,At,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const i=new CustomEvent(t,zt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}static define(t,e=this,i={}){const o=customElements.get(t);if(!o){try{customElements.define(t,e,i)}catch{customElements.define(t,class extends e{},i)}return}let r=" (unknown version)",s=r;"version"in e&&e.version&&(r=" v"+e.version),"version"in o&&o.version&&(s=" v"+o.version),!(r&&s&&r===s)&&console.warn(`Attempted to register <${t}>${r}, but <${t}>${s} has already been registered.`)}attributeChangedCallback(t,e,i){xi(this,At)||(this.constructor.elementProperties.forEach((o,r)=>{o.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),Ai(this,At,!0)),super.attributeChangedCallback(t,e,i)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,i)=>{t.has(i)&&this[i]==null&&(this[i]=e)})}};At=new WeakMap;U.version="2.17.1";U.dependencies={};p([f()],U.prototype,"dir",2);p([f()],U.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ei=(t,e)=>(t==null?void 0:t._$litType$)!==void 0,Lo=t=>t.strings===void 0,$i={},Oo=(t,e=$i)=>t._$AH=e;var ft=Symbol(),xt=Symbol(),Tt,Mt=new Map,N=class extends U{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var i;let o;if(e!=null&&e.spriteSheet)return this.svg=R`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(o=await fetch(t,{mode:"cors"}),!o.ok)return o.status===410?ft:xt}catch{return xt}try{const r=document.createElement("div");r.innerHTML=await o.text();const s=r.firstElementChild;if(((i=s==null?void 0:s.tagName)==null?void 0:i.toLowerCase())!=="svg")return ft;Tt||(Tt=new DOMParser);const a=Tt.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):ft}catch{return ft}}connectedCallback(){super.connectedCallback(),pi(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),fi(this)}getIconSource(){const t=oe(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:i}=this.getIconSource(),o=i?oe(this.library):void 0;if(!e){this.svg=null;return}let r=Mt.get(e);if(r||(r=this.resolveIcon(e,o),Mt.set(e,r)),!this.initialRender)return;const s=await r;if(s===xt&&Mt.delete(e),e===this.getIconSource().url){if(Ei(s)){if(this.svg=s,o){await this.updateComplete;const n=this.shadowRoot.querySelector("[part='svg']");typeof o.mutator=="function"&&n&&o.mutator(n)}return}switch(s){case xt:case ft:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),(t=o==null?void 0:o.mutator)==null||t.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};N.styles=[bt,gi];p([be()],N.prototype,"svg",2);p([f({reflect:!0})],N.prototype,"name",2);p([f()],N.prototype,"src",2);p([f()],N.prototype,"label",2);p([f({reflect:!0})],N.prototype,"library",2);p([vt("label")],N.prototype,"handleLabelChange",1);p([vt(["name","src","library"])],N.prototype,"setIcon",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt=ei(class extends ii{constructor(t){var e;if(super(t),t.type!==ti.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var o,r;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!((o=this.nt)!=null&&o.has(s))&&this.st.add(s);return this.render(e)}const i=t.element.classList;for(const s of this.st)s in e||(i.remove(s),this.st.delete(s));for(const s in e){const n=!!e[s];n===this.st.has(s)||(r=this.nt)!=null&&r.has(s)||(n?(i.add(s),this.st.add(s)):(i.remove(s),this.st.delete(s)))}return Ve}});N.define("sl-icon");var Si=tt`
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
`,zi=tt`
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
`;const K=Math.min,S=Math.max,Et=Math.round,Ct=Math.floor,G=t=>({x:t,y:t}),Pi={left:"right",right:"left",bottom:"top",top:"bottom"},ki={start:"end",end:"start"};function It(t,e,i){return S(t,K(e,i))}function dt(t,e){return typeof t=="function"?t(e):t}function J(t){return t.split("-")[0]}function ut(t){return t.split("-")[1]}function Ae(t){return t==="x"?"y":"x"}function Ut(t){return t==="y"?"height":"width"}function it(t){return["top","bottom"].includes(J(t))?"y":"x"}function qt(t){return Ae(it(t))}function Li(t,e,i){i===void 0&&(i=!1);const o=ut(t),r=qt(t),s=Ut(r);let n=r==="x"?o===(i?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(n=$t(n)),[n,$t(n)]}function Oi(t){const e=$t(t);return[Nt(t),e,Nt(e)]}function Nt(t){return t.replace(/start|end/g,e=>ki[e])}function Ri(t,e,i){const o=["left","right"],r=["right","left"],s=["top","bottom"],n=["bottom","top"];switch(t){case"top":case"bottom":return i?e?r:o:e?o:r;case"left":case"right":return e?s:n;default:return[]}}function Ti(t,e,i,o){const r=ut(t);let s=Ri(J(t),i==="start",o);return r&&(s=s.map(n=>n+"-"+r),e&&(s=s.concat(s.map(Nt)))),s}function $t(t){return t.replace(/left|right|bottom|top/g,e=>Pi[e])}function Mi(t){return{top:0,right:0,bottom:0,left:0,...t}}function _e(t){return typeof t!="number"?Mi(t):{top:t,right:t,bottom:t,left:t}}function St(t){const{x:e,y:i,width:o,height:r}=t;return{width:o,height:r,top:i,left:e,right:e+o,bottom:i+r,x:e,y:i}}function ne(t,e,i){let{reference:o,floating:r}=t;const s=it(e),n=qt(e),a=Ut(n),l=J(e),c=s==="y",h=o.x+o.width/2-r.width/2,u=o.y+o.height/2-r.height/2,m=o[a]/2-r[a]/2;let d;switch(l){case"top":d={x:h,y:o.y-r.height};break;case"bottom":d={x:h,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:u};break;case"left":d={x:o.x-r.width,y:u};break;default:d={x:o.x,y:o.y}}switch(ut(e)){case"start":d[n]-=m*(i&&c?-1:1);break;case"end":d[n]+=m*(i&&c?-1:1);break}return d}const Bi=async(t,e,i)=>{const{placement:o="bottom",strategy:r="absolute",middleware:s=[],platform:n}=i,a=s.filter(Boolean),l=await(n.isRTL==null?void 0:n.isRTL(e));let c=await n.getElementRects({reference:t,floating:e,strategy:r}),{x:h,y:u}=ne(c,o,l),m=o,d={},g=0;for(let v=0;v<a.length;v++){const{name:y,fn:b}=a[v],{x:w,y:x,data:_,reset:A}=await b({x:h,y:u,initialPlacement:o,placement:m,strategy:r,middlewareData:d,rects:c,platform:n,elements:{reference:t,floating:e}});h=w??h,u=x??u,d={...d,[y]:{...d[y],..._}},A&&g<=50&&(g++,typeof A=="object"&&(A.placement&&(m=A.placement),A.rects&&(c=A.rects===!0?await n.getElementRects({reference:t,floating:e,strategy:r}):A.rects),{x:h,y:u}=ne(c,m,l)),v=-1)}return{x:h,y:u,placement:m,strategy:r,middlewareData:d}};async function Yt(t,e){var i;e===void 0&&(e={});const{x:o,y:r,platform:s,rects:n,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:m=!1,padding:d=0}=dt(e,t),g=_e(d),y=a[m?u==="floating"?"reference":"floating":u],b=St(await s.getClippingRect({element:(i=await(s.isElement==null?void 0:s.isElement(y)))==null||i?y:y.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:c,rootBoundary:h,strategy:l})),w=u==="floating"?{x:o,y:r,width:n.floating.width,height:n.floating.height}:n.reference,x=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),_=await(s.isElement==null?void 0:s.isElement(x))?await(s.getScale==null?void 0:s.getScale(x))||{x:1,y:1}:{x:1,y:1},A=St(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:w,offsetParent:x,strategy:l}):w);return{top:(b.top-A.top+g.top)/_.y,bottom:(A.bottom-b.bottom+g.bottom)/_.y,left:(b.left-A.left+g.left)/_.x,right:(A.right-b.right+g.right)/_.x}}const Di=t=>({name:"arrow",options:t,async fn(e){const{x:i,y:o,placement:r,rects:s,platform:n,elements:a,middlewareData:l}=e,{element:c,padding:h=0}=dt(t,e)||{};if(c==null)return{};const u=_e(h),m={x:i,y:o},d=qt(r),g=Ut(d),v=await n.getDimensions(c),y=d==="y",b=y?"top":"left",w=y?"bottom":"right",x=y?"clientHeight":"clientWidth",_=s.reference[g]+s.reference[d]-m[d]-s.floating[g],A=m[d]-s.reference[d],k=await(n.getOffsetParent==null?void 0:n.getOffsetParent(c));let L=k?k[x]:0;(!L||!await(n.isElement==null?void 0:n.isElement(k)))&&(L=a.floating[x]||s.floating[g]);const V=_/2-A/2,B=L/2-v[g]/2-1,O=K(u[b],B),q=K(u[w],B),D=O,Y=L-v[g]-q,$=L/2-v[g]/2+V,nt=It(D,$,Y),W=!l.arrow&&ut(r)!=null&&$!==nt&&s.reference[g]/2-($<D?O:q)-v[g]/2<0,F=W?$<D?$-D:$-Y:0;return{[d]:m[d]+F,data:{[d]:nt,centerOffset:$-nt-F,...W&&{alignmentOffset:F}},reset:W}}}),Fi=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var i,o;const{placement:r,middlewareData:s,rects:n,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:h=!0,crossAxis:u=!0,fallbackPlacements:m,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:v=!0,...y}=dt(t,e);if((i=s.arrow)!=null&&i.alignmentOffset)return{};const b=J(r),w=it(a),x=J(a)===a,_=await(l.isRTL==null?void 0:l.isRTL(c.floating)),A=m||(x||!v?[$t(a)]:Oi(a)),k=g!=="none";!m&&k&&A.push(...Ti(a,v,g,_));const L=[a,...A],V=await Yt(e,y),B=[];let O=((o=s.flip)==null?void 0:o.overflows)||[];if(h&&B.push(V[b]),u){const $=Li(r,n,_);B.push(V[$[0]],V[$[1]])}if(O=[...O,{placement:r,overflows:B}],!B.every($=>$<=0)){var q,D;const $=(((q=s.flip)==null?void 0:q.index)||0)+1,nt=L[$];if(nt)return{data:{index:$,overflows:O},reset:{placement:nt}};let W=(D=O.filter(F=>F.overflows[0]<=0).sort((F,X)=>F.overflows[1]-X.overflows[1])[0])==null?void 0:D.placement;if(!W)switch(d){case"bestFit":{var Y;const F=(Y=O.filter(X=>{if(k){const Z=it(X.placement);return Z===w||Z==="y"}return!0}).map(X=>[X.placement,X.overflows.filter(Z=>Z>0).reduce((Z,Fe)=>Z+Fe,0)]).sort((X,Z)=>X[1]-Z[1])[0])==null?void 0:Y[0];F&&(W=F);break}case"initialPlacement":W=a;break}if(r!==W)return{reset:{placement:W}}}return{}}}};async function Hi(t,e){const{placement:i,platform:o,elements:r}=t,s=await(o.isRTL==null?void 0:o.isRTL(r.floating)),n=J(i),a=ut(i),l=it(i)==="y",c=["left","top"].includes(n)?-1:1,h=s&&l?-1:1,u=dt(e,t);let{mainAxis:m,crossAxis:d,alignmentAxis:g}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return a&&typeof g=="number"&&(d=a==="end"?g*-1:g),l?{x:d*h,y:m*c}:{x:m*c,y:d*h}}const Ii=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var i,o;const{x:r,y:s,placement:n,middlewareData:a}=e,l=await Hi(e,t);return n===((i=a.offset)==null?void 0:i.placement)&&(o=a.arrow)!=null&&o.alignmentOffset?{}:{x:r+l.x,y:s+l.y,data:{...l,placement:n}}}}},Ni=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:o,placement:r}=e,{mainAxis:s=!0,crossAxis:n=!1,limiter:a={fn:y=>{let{x:b,y:w}=y;return{x:b,y:w}}},...l}=dt(t,e),c={x:i,y:o},h=await Yt(e,l),u=it(J(r)),m=Ae(u);let d=c[m],g=c[u];if(s){const y=m==="y"?"top":"left",b=m==="y"?"bottom":"right",w=d+h[y],x=d-h[b];d=It(w,d,x)}if(n){const y=u==="y"?"top":"left",b=u==="y"?"bottom":"right",w=g+h[y],x=g-h[b];g=It(w,g,x)}const v=a.fn({...e,[m]:d,[u]:g});return{...v,data:{x:v.x-i,y:v.y-o,enabled:{[m]:s,[u]:n}}}}}},ji=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var i,o;const{placement:r,rects:s,platform:n,elements:a}=e,{apply:l=()=>{},...c}=dt(t,e),h=await Yt(e,c),u=J(r),m=ut(r),d=it(r)==="y",{width:g,height:v}=s.floating;let y,b;u==="top"||u==="bottom"?(y=u,b=m===(await(n.isRTL==null?void 0:n.isRTL(a.floating))?"start":"end")?"left":"right"):(b=u,y=m==="end"?"top":"bottom");const w=v-h.top-h.bottom,x=g-h.left-h.right,_=K(v-h[y],w),A=K(g-h[b],x),k=!e.middlewareData.shift;let L=_,V=A;if((i=e.middlewareData.shift)!=null&&i.enabled.x&&(V=x),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(L=w),k&&!m){const O=S(h.left,0),q=S(h.right,0),D=S(h.top,0),Y=S(h.bottom,0);d?V=g-2*(O!==0||q!==0?O+q:S(h.left,h.right)):L=v-2*(D!==0||Y!==0?D+Y:S(h.top,h.bottom))}await l({...e,availableWidth:V,availableHeight:L});const B=await n.getDimensions(a.floating);return g!==B.width||v!==B.height?{reset:{rects:!0}}:{}}}};function Pt(){return typeof window<"u"}function pt(t){return Ee(t)?(t.nodeName||"").toLowerCase():"#document"}function z(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function j(t){var e;return(e=(Ee(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ee(t){return Pt()?t instanceof Node||t instanceof z(t).Node:!1}function T(t){return Pt()?t instanceof Element||t instanceof z(t).Element:!1}function I(t){return Pt()?t instanceof HTMLElement||t instanceof z(t).HTMLElement:!1}function ae(t){return!Pt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof z(t).ShadowRoot}function yt(t){const{overflow:e,overflowX:i,overflowY:o,display:r}=M(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+i)&&!["inline","contents"].includes(r)}function Vi(t){return["table","td","th"].includes(pt(t))}function kt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Xt(t){const e=Zt(),i=T(t)?M(t):t;return i.transform!=="none"||i.perspective!=="none"||(i.containerType?i.containerType!=="normal":!1)||!e&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!e&&(i.filter?i.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(i.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(i.contain||"").includes(o))}function Wi(t){let e=Q(t);for(;I(e)&&!ct(e);){if(Xt(e))return e;if(kt(e))return null;e=Q(e)}return null}function Zt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ct(t){return["html","body","#document"].includes(pt(t))}function M(t){return z(t).getComputedStyle(t)}function Lt(t){return T(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Q(t){if(pt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||ae(t)&&t.host||j(t);return ae(e)?e.host:e}function $e(t){const e=Q(t);return ct(e)?t.ownerDocument?t.ownerDocument.body:t.body:I(e)&&yt(e)?e:$e(e)}function mt(t,e,i){var o;e===void 0&&(e=[]),i===void 0&&(i=!0);const r=$e(t),s=r===((o=t.ownerDocument)==null?void 0:o.body),n=z(r);if(s){const a=jt(n);return e.concat(n,n.visualViewport||[],yt(r)?r:[],a&&i?mt(a):[])}return e.concat(r,mt(r,[],i))}function jt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Se(t){const e=M(t);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=I(t),s=r?t.offsetWidth:i,n=r?t.offsetHeight:o,a=Et(i)!==s||Et(o)!==n;return a&&(i=s,o=n),{width:i,height:o,$:a}}function Kt(t){return T(t)?t:t.contextElement}function lt(t){const e=Kt(t);if(!I(e))return G(1);const i=e.getBoundingClientRect(),{width:o,height:r,$:s}=Se(e);let n=(s?Et(i.width):i.width)/o,a=(s?Et(i.height):i.height)/r;return(!n||!Number.isFinite(n))&&(n=1),(!a||!Number.isFinite(a))&&(a=1),{x:n,y:a}}const Ui=G(0);function ze(t){const e=z(t);return!Zt()||!e.visualViewport?Ui:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function qi(t,e,i){return e===void 0&&(e=!1),!i||e&&i!==z(t)?!1:e}function ot(t,e,i,o){e===void 0&&(e=!1),i===void 0&&(i=!1);const r=t.getBoundingClientRect(),s=Kt(t);let n=G(1);e&&(o?T(o)&&(n=lt(o)):n=lt(t));const a=qi(s,i,o)?ze(s):G(0);let l=(r.left+a.x)/n.x,c=(r.top+a.y)/n.y,h=r.width/n.x,u=r.height/n.y;if(s){const m=z(s),d=o&&T(o)?z(o):o;let g=m,v=jt(g);for(;v&&o&&d!==g;){const y=lt(v),b=v.getBoundingClientRect(),w=M(v),x=b.left+(v.clientLeft+parseFloat(w.paddingLeft))*y.x,_=b.top+(v.clientTop+parseFloat(w.paddingTop))*y.y;l*=y.x,c*=y.y,h*=y.x,u*=y.y,l+=x,c+=_,g=z(v),v=jt(g)}}return St({width:h,height:u,x:l,y:c})}function Yi(t){let{elements:e,rect:i,offsetParent:o,strategy:r}=t;const s=r==="fixed",n=j(o),a=e?kt(e.floating):!1;if(o===n||a&&s)return i;let l={scrollLeft:0,scrollTop:0},c=G(1);const h=G(0),u=I(o);if((u||!u&&!s)&&((pt(o)!=="body"||yt(n))&&(l=Lt(o)),I(o))){const m=ot(o);c=lt(o),h.x=m.x+o.clientLeft,h.y=m.y+o.clientTop}return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-l.scrollLeft*c.x+h.x,y:i.y*c.y-l.scrollTop*c.y+h.y}}function Xi(t){return Array.from(t.getClientRects())}function Vt(t,e){const i=Lt(t).scrollLeft;return e?e.left+i:ot(j(t)).left+i}function Zi(t){const e=j(t),i=Lt(t),o=t.ownerDocument.body,r=S(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=S(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let n=-i.scrollLeft+Vt(t);const a=-i.scrollTop;return M(o).direction==="rtl"&&(n+=S(e.clientWidth,o.clientWidth)-r),{width:r,height:s,x:n,y:a}}function Ki(t,e){const i=z(t),o=j(t),r=i.visualViewport;let s=o.clientWidth,n=o.clientHeight,a=0,l=0;if(r){s=r.width,n=r.height;const c=Zt();(!c||c&&e==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:s,height:n,x:a,y:l}}function Gi(t,e){const i=ot(t,!0,e==="fixed"),o=i.top+t.clientTop,r=i.left+t.clientLeft,s=I(t)?lt(t):G(1),n=t.clientWidth*s.x,a=t.clientHeight*s.y,l=r*s.x,c=o*s.y;return{width:n,height:a,x:l,y:c}}function le(t,e,i){let o;if(e==="viewport")o=Ki(t,i);else if(e==="document")o=Zi(j(t));else if(T(e))o=Gi(e,i);else{const r=ze(t);o={...e,x:e.x-r.x,y:e.y-r.y}}return St(o)}function Pe(t,e){const i=Q(t);return i===e||!T(i)||ct(i)?!1:M(i).position==="fixed"||Pe(i,e)}function Ji(t,e){const i=e.get(t);if(i)return i;let o=mt(t,[],!1).filter(a=>T(a)&&pt(a)!=="body"),r=null;const s=M(t).position==="fixed";let n=s?Q(t):t;for(;T(n)&&!ct(n);){const a=M(n),l=Xt(n);!l&&a.position==="fixed"&&(r=null),(s?!l&&!r:!l&&a.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||yt(n)&&!l&&Pe(t,n))?o=o.filter(h=>h!==n):r=a,n=Q(n)}return e.set(t,o),o}function Qi(t){let{element:e,boundary:i,rootBoundary:o,strategy:r}=t;const n=[...i==="clippingAncestors"?kt(e)?[]:Ji(e,this._c):[].concat(i),o],a=n[0],l=n.reduce((c,h)=>{const u=le(e,h,r);return c.top=S(u.top,c.top),c.right=K(u.right,c.right),c.bottom=K(u.bottom,c.bottom),c.left=S(u.left,c.left),c},le(e,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function to(t){const{width:e,height:i}=Se(t);return{width:e,height:i}}function eo(t,e,i){const o=I(e),r=j(e),s=i==="fixed",n=ot(t,!0,s,e);let a={scrollLeft:0,scrollTop:0};const l=G(0);if(o||!o&&!s)if((pt(e)!=="body"||yt(r))&&(a=Lt(e)),o){const d=ot(e,!0,s,e);l.x=d.x+e.clientLeft,l.y=d.y+e.clientTop}else r&&(l.x=Vt(r));let c=0,h=0;if(r&&!o&&!s){const d=r.getBoundingClientRect();h=d.top+a.scrollTop,c=d.left+a.scrollLeft-Vt(r,d)}const u=n.left+a.scrollLeft-l.x-c,m=n.top+a.scrollTop-l.y-h;return{x:u,y:m,width:n.width,height:n.height}}function Bt(t){return M(t).position==="static"}function ce(t,e){if(!I(t)||M(t).position==="fixed")return null;if(e)return e(t);let i=t.offsetParent;return j(t)===i&&(i=i.ownerDocument.body),i}function ke(t,e){const i=z(t);if(kt(t))return i;if(!I(t)){let r=Q(t);for(;r&&!ct(r);){if(T(r)&&!Bt(r))return r;r=Q(r)}return i}let o=ce(t,e);for(;o&&Vi(o)&&Bt(o);)o=ce(o,e);return o&&ct(o)&&Bt(o)&&!Xt(o)?i:o||Wi(t)||i}const io=async function(t){const e=this.getOffsetParent||ke,i=this.getDimensions,o=await i(t.floating);return{reference:eo(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function oo(t){return M(t).direction==="rtl"}const _t={convertOffsetParentRelativeRectToViewportRelativeRect:Yi,getDocumentElement:j,getClippingRect:Qi,getOffsetParent:ke,getElementRects:io,getClientRects:Xi,getDimensions:to,getScale:lt,isElement:T,isRTL:oo};function ro(t,e){let i=null,o;const r=j(t);function s(){var a;clearTimeout(o),(a=i)==null||a.disconnect(),i=null}function n(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),s();const{left:c,top:h,width:u,height:m}=t.getBoundingClientRect();if(a||e(),!u||!m)return;const d=Ct(h),g=Ct(r.clientWidth-(c+u)),v=Ct(r.clientHeight-(h+m)),y=Ct(c),w={rootMargin:-d+"px "+-g+"px "+-v+"px "+-y+"px",threshold:S(0,K(1,l))||1};let x=!0;function _(A){const k=A[0].intersectionRatio;if(k!==l){if(!x)return n();k?n(!1,k):o=setTimeout(()=>{n(!1,1e-7)},1e3)}x=!1}try{i=new IntersectionObserver(_,{...w,root:r.ownerDocument})}catch{i=new IntersectionObserver(_,w)}i.observe(t)}return n(!0),s}function so(t,e,i,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,c=Kt(t),h=r||s?[...c?mt(c):[],...mt(e)]:[];h.forEach(b=>{r&&b.addEventListener("scroll",i,{passive:!0}),s&&b.addEventListener("resize",i)});const u=c&&a?ro(c,i):null;let m=-1,d=null;n&&(d=new ResizeObserver(b=>{let[w]=b;w&&w.target===c&&d&&(d.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var x;(x=d)==null||x.observe(e)})),i()}),c&&!l&&d.observe(c),d.observe(e));let g,v=l?ot(t):null;l&&y();function y(){const b=ot(t);v&&(b.x!==v.x||b.y!==v.y||b.width!==v.width||b.height!==v.height)&&i(),v=b,g=requestAnimationFrame(y)}return i(),()=>{var b;h.forEach(w=>{r&&w.removeEventListener("scroll",i),s&&w.removeEventListener("resize",i)}),u==null||u(),(b=d)==null||b.disconnect(),d=null,l&&cancelAnimationFrame(g)}}const no=Ii,ao=Ni,lo=Fi,he=ji,co=Di,ho=(t,e,i)=>{const o=new Map,r={platform:_t,...i},s={...r.platform,_c:o};return Bi(t,e,{...r,platform:s})};function uo(t){return po(t)}function Dt(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function po(t){for(let e=t;e;e=Dt(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=Dt(t);e;e=Dt(e)){if(!(e instanceof Element))continue;const i=getComputedStyle(e);if(i.display!=="contents"&&(i.position!=="static"||i.filter!=="none"||e.tagName==="BODY"))return e}return null}function fo(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var C=class extends U{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom");let o=0,r=0,s=0,n=0,a=0,l=0,c=0,h=0;i?t.top<e.top?(o=t.left,r=t.bottom,s=t.right,n=t.bottom,a=e.left,l=e.top,c=e.right,h=e.top):(o=e.left,r=e.bottom,s=e.right,n=e.bottom,a=t.left,l=t.top,c=t.right,h=t.top):t.left<e.left?(o=t.right,r=t.top,s=e.left,n=e.top,a=t.right,l=t.bottom,c=e.left,h=e.bottom):(o=e.right,r=e.top,s=t.left,n=t.top,a=e.right,l=e.bottom,c=t.left,h=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||fo(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&(this.cleanup=so(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[no({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(he({apply:({rects:i})=>{const o=this.sync==="width"||this.sync==="both",r=this.sync==="height"||this.sync==="both";this.popup.style.width=o?`${i.reference.width}px`:"",this.popup.style.height=r?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(lo({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(ao({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(he({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:o})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${o}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(co({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?i=>_t.getOffsetParent(i,uo):_t.getOffsetParent;ho(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:xe(zt({},_t),{getOffsetParent:e})}).then(({x:i,y:o,middlewareData:r,placement:s})=>{const n=this.matches(":dir(rtl)"),a={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${i}px`,top:`${o}px`}),this.arrow){const l=r.arrow.x,c=r.arrow.y;let h="",u="",m="",d="";if(this.arrowPlacement==="start"){const g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=n?g:"",d=n?"":g}else if(this.arrowPlacement==="end"){const g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=n?"":g,d=n?g:"",m=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(d=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(d=typeof l=="number"?`${l}px`:"",h=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:h,right:u,bottom:m,left:d,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return R`
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
    `}};C.styles=[bt,zi];p([ht(".popup")],C.prototype,"popup",2);p([ht(".popup__arrow")],C.prototype,"arrowEl",2);p([f()],C.prototype,"anchor",2);p([f({type:Boolean,reflect:!0})],C.prototype,"active",2);p([f({reflect:!0})],C.prototype,"placement",2);p([f({reflect:!0})],C.prototype,"strategy",2);p([f({type:Number})],C.prototype,"distance",2);p([f({type:Number})],C.prototype,"skidding",2);p([f({type:Boolean})],C.prototype,"arrow",2);p([f({attribute:"arrow-placement"})],C.prototype,"arrowPlacement",2);p([f({attribute:"arrow-padding",type:Number})],C.prototype,"arrowPadding",2);p([f({type:Boolean})],C.prototype,"flip",2);p([f({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],C.prototype,"flipFallbackPlacements",2);p([f({attribute:"flip-fallback-strategy"})],C.prototype,"flipFallbackStrategy",2);p([f({type:Object})],C.prototype,"flipBoundary",2);p([f({attribute:"flip-padding",type:Number})],C.prototype,"flipPadding",2);p([f({type:Boolean})],C.prototype,"shift",2);p([f({type:Object})],C.prototype,"shiftBoundary",2);p([f({attribute:"shift-padding",type:Number})],C.prototype,"shiftPadding",2);p([f({attribute:"auto-size"})],C.prototype,"autoSize",2);p([f()],C.prototype,"sync",2);p([f({type:Object})],C.prototype,"autoSizeBoundary",2);p([f({attribute:"auto-size-padding",type:Number})],C.prototype,"autoSizePadding",2);p([f({attribute:"hover-bridge",type:Boolean})],C.prototype,"hoverBridge",2);var Le=new Map,go=new WeakMap;function mo(t){return t??{keyframes:[],options:{duration:0}}}function de(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function Oe(t,e){Le.set(t,mo(e))}function ue(t,e,i){const o=go.get(t);if(o!=null&&o[e])return de(o[e],i.dir);const r=Le.get(e);return r?de(r,i.dir):{keyframes:[],options:{duration:0}}}function pe(t,e){return new Promise(i=>{function o(r){r.target===t&&(t.removeEventListener(e,o),i())}t.addEventListener(e,o)})}function fe(t,e,i){return new Promise(o=>{if((i==null?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,xe(zt({},i),{duration:vo()?0:i.duration}));r.addEventListener("cancel",o,{once:!0}),r.addEventListener("finish",o,{once:!0})})}function ge(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function vo(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function me(t){return Promise.all(t.getAnimations().map(e=>new Promise(i=>{e.cancel(),requestAnimationFrame(i)})))}const Wt=new Set,at=new Map;let et,Gt="ltr",Jt="en";const Re=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Re){const t=new MutationObserver(Me);Gt=document.documentElement.dir||"ltr",Jt=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Te(...t){t.map(e=>{const i=e.$code.toLowerCase();at.has(i)?at.set(i,Object.assign(Object.assign({},at.get(i)),e)):at.set(i,e),et||(et=e)}),Me()}function Me(){Re&&(Gt=document.documentElement.dir||"ltr",Jt=document.documentElement.lang||navigator.language),[...Wt.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let bo=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Wt.add(this.host)}hostDisconnected(){Wt.delete(this.host)}dir(){return`${this.host.dir||Gt}`.toLowerCase()}lang(){return`${this.host.lang||Jt}`.toLowerCase()}getTranslationData(e){var i,o;const r=new Intl.Locale(e.replace(/_/g,"-")),s=r==null?void 0:r.language.toLowerCase(),n=(o=(i=r==null?void 0:r.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"",a=at.get(`${s}-${n}`),l=at.get(s);return{locale:r,language:s,region:n,primary:a,secondary:l}}exists(e,i){var o;const{primary:r,secondary:s}=this.getTranslationData((o=i.lang)!==null&&o!==void 0?o:this.lang());return i=Object.assign({includeFallback:!1},i),!!(r&&r[e]||s&&s[e]||i.includeFallback&&et&&et[e])}term(e,...i){const{primary:o,secondary:r}=this.getTranslationData(this.lang());let s;if(o&&o[e])s=o[e];else if(r&&r[e])s=r[e];else if(et&&et[e])s=et[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof s=="function"?s(...i):s}date(e,i){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),i).format(e)}number(e,i){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),i).format(e)}relativeTime(e,i,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,i)}};var Be={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};Te(Be);var yo=Be,De=class extends bo{};Te(yo);var E=class extends U{constructor(){super(),this.localize=new De(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=ge(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=ge(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await me(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:i,options:o}=ue(this,"tooltip.show",{dir:this.localize.dir()});await fe(this.popup.popup,i,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await me(this.body);const{keyframes:i,options:o}=ue(this,"tooltip.hide",{dir:this.localize.dir()});await fe(this.popup.popup,i,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,pe(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,pe(this,"sl-after-hide")}render(){return R`
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
    `}};E.styles=[bt,Si];E.dependencies={"sl-popup":C};p([ht("slot:not([name])")],E.prototype,"defaultSlot",2);p([ht(".tooltip__body")],E.prototype,"body",2);p([ht("sl-popup")],E.prototype,"popup",2);p([f()],E.prototype,"content",2);p([f()],E.prototype,"placement",2);p([f({type:Boolean,reflect:!0})],E.prototype,"disabled",2);p([f({type:Number})],E.prototype,"distance",2);p([f({type:Boolean,reflect:!0})],E.prototype,"open",2);p([f({type:Number})],E.prototype,"skidding",2);p([f()],E.prototype,"trigger",2);p([f({type:Boolean})],E.prototype,"hoist",2);p([vt("open",{waitUntilFirstUpdate:!0})],E.prototype,"handleOpenChange",1);p([vt(["content","distance","hoist","placement","skidding"])],E.prototype,"handleOptionsChange",1);p([vt("disabled")],E.prototype,"handleDisabledChange",1);Oe("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});Oe("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});E.define("sl-tooltip");var wt=function(t,e,i,o){var r=arguments.length,s=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let rt=class extends ve{constructor(){super(...arguments),this.tooltip=!1}get _iconSize(){return this.iconSize?this.iconSize:this.tooltip!==!1?"32px":"64px"}renderIcon(){return R`
      <sl-icon
        style="color: red; height: ${this._iconSize}; width: ${this._iconSize}; margin-bottom: 8px;"
        src="${oi(si)}"
      ></sl-icon>
    `}renderFull(){return R` <div class="column center-content" style="flex: 1">
      ${this.renderIcon()}
      <div style="width: 500px; text-align: center" class="column">
        ${this.headline?R` <span style="margin-bottom: 8px">${this.headline} </span>`:R``}
        <span class="placeholder"
          >${typeof this.error=="object"&&"message"in this.error?this.error.message:this.error}
        </span>
      </div>
    </div>`}renderTooltip(){return R`
      <sl-tooltip hoist .content=${this.headline?this.headline:this.error}>
        ${this.renderIcon()}</sl-tooltip
      >
    `}render(){return this.tooltip!==!1?this.renderTooltip():this.renderFull()}};rt.styles=[Qe,tt`
      :host {
        display: flex;
        flex: 1;
      }
    `];wt([f({attribute:"tooltip"})],rt.prototype,"tooltip",void 0);wt([f()],rt.prototype,"headline",void 0);wt([f()],rt.prototype,"error",void 0);wt([f({attribute:"icon-size"})],rt.prototype,"iconSize",void 0);rt=wt([Ie("display-error")],rt);var wo=tt`
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
 */const H=t=>t??We;var P=class extends U{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?Qt`a`:Qt`button`;return Ue`
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
    `}};P.styles=[bt,wo];P.dependencies={"sl-icon":N};p([ht(".icon-button")],P.prototype,"button",2);p([be()],P.prototype,"hasFocus",2);p([f()],P.prototype,"name",2);p([f()],P.prototype,"library",2);p([f()],P.prototype,"src",2);p([f()],P.prototype,"href",2);p([f()],P.prototype,"target",2);p([f()],P.prototype,"download",2);p([f()],P.prototype,"label",2);p([f({type:Boolean,reflect:!0})],P.prototype,"disabled",2);var xo=tt`
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
`,st=class extends U{constructor(){super(...arguments),this.localize=new De(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return R`
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
    `}};st.styles=[bt,xo];st.dependencies={"sl-icon-button":P};p([f({reflect:!0})],st.prototype,"variant",2);p([f({reflect:!0})],st.prototype,"size",2);p([f({type:Boolean,reflect:!0})],st.prototype,"pill",2);p([f({type:Boolean})],st.prototype,"removable",2);st.define("sl-tag");const Mo={role:"admin",singular_name:Ot("Administrator"),plural_name:Ot("Administrators"),description:Ot("Administrators can add and remove assignees for any other role.")};export{Lo as A,xe as B,zt as C,Oo as D,zo as E,ko as F,Eo as G,De as L,N as S,p as _,Mo as a,Po as b,_o as c,si as d,bt as e,vt as f,U as g,$o as h,gt as i,ht as j,ei as k,ii as l,Ot as m,So as n,P as o,C as p,Oe as q,be as r,Qe as s,ti as t,pe as u,me as v,oi as w,ue as x,fe as y,H as z};
