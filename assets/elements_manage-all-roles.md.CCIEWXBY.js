const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/api-docs.CFj9ogh6.js","assets/chunks/api-viewer-tabs.bc9mZ4w5.js","assets/chunks/tslib.es6.kHcLnhpD.js","assets/chunks/api-demo.Bsqmng5d.js","assets/chunks/profiles-context.C_l92A4B.js","assets/chunks/roles-client.DcXMkolf.js","assets/chunks/range.CRHiLbae.js","assets/chunks/commonjsHelpers.D6yTTuv9.js","assets/chunks/toFinite.CFYyTVp8.js","assets/chunks/isSymbol.DnU6SLKZ.js","assets/chunks/provide.B2ji-OLF.js","assets/chunks/property.D124yKuw.js","assets/chunks/signal-watcher.DfgS61mm.js","assets/chunks/context.o83FBgiQ.js","assets/chunks/roles-context.DuDHFQYM.js","assets/chunks/context.DEBmPvHP.js","assets/chunks/manage-all-roles.CYtekUYK.js","assets/chunks/role-config.HuCNaWQK.js","assets/chunks/manage-role-assignees.xhRUtK-N.js"])))=>i.map(i=>d[i]);
import{v as n,V as t,c as m,a2 as d,j as c,o as p}from"./chunks/framework.DWRaFRaO.js";import{d as h,P as g,a as u,b as k,R as _,c as f,e as b,B as y,u as E}from"./chunks/roles-client.DcXMkolf.js";import"./chunks/range.CRHiLbae.js";import"./chunks/commonjsHelpers.D6yTTuv9.js";import"./chunks/toFinite.CFYyTVp8.js";import"./chunks/isSymbol.DnU6SLKZ.js";const S=JSON.parse('{"title":"<manage-all-roles>","description":"","frontmatter":{},"headers":[],"relativePath":"elements/manage-all-roles.md","filePath":"elements/manage-all-roles.md"}'),v={name:"elements/manage-all-roles.md"},q=Object.assign(v,{setup(w){return n(async()=>{await t(()=>import("./chunks/api-docs.CFj9ogh6.js"),__vite__mapDeps([0,1,2])),await t(()=>import("./chunks/api-demo.Bsqmng5d.js"),__vite__mapDeps([3,1,2])),await t(()=>import("./chunks/profiles-context.C_l92A4B.js"),__vite__mapDeps([4,2,5,6,7,8,9,10,11,12,13])),customElements.get("roles-context")||await t(()=>import("./chunks/roles-context.DuDHFQYM.js"),__vite__mapDeps([14,10,11,5,6,7,8,9,15])),customElements.get("manage-all-roles")||await t(()=>import("./chunks/manage-all-roles.CYtekUYK.js"),__vite__mapDeps([16,17,11,5,6,7,8,9,18,13,12,2,15]));const e=await h(),s=new g(e,Array.from(e.keys())[0]),o=new u(new k(s,"roles_test")),a=new _(Array.from(e.keys())[0]),i=new f(a,"roles_test");await a.assign_role({role:"admin",assignees:[Array.from(e.keys()).find(l=>l.toString()===a.myPubKey.toString())]}),await a.assign_role({role:"editor",assignees:[Array.from(e.keys()).find(l=>l.toString()!==a.myPubKey.toString())]});const r=new b(i,{roles_config:[{role:"editor",singular_name:"Editor",plural_name:"Editors",description:"Editors is a usual role that you may need in your hApp."}]});y(E`
    <profiles-context .store=${o}>
      <roles-context .store=${r}>
        <api-demo src="custom-elements.json" only="manage-all-roles" exclude-knobs="store">
          <template data-element="manage-all-roles" data-target="host">
            <manage-all-roles></manage-all-roles>
          </template>
        </api-demo>
      </roles-context>
    </profiles-context>
  `,document.querySelector("element-demo"))}),(e,s)=>(p(),m("div",null,s[0]||(s[0]=[d('<h1 id="manage-all-roles" tabindex="-1"><code>&lt;manage-all-roles&gt;</code> <a class="header-anchor" href="#manage-all-roles" aria-label="Permalink to &quot;`&lt;manage-all-roles&gt;`&quot;">​</a></h1><p>Manage the assignees for all the roles in this hApp.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><ol start="0"><li><p>If you haven&#39;t already, <a href="/roles-zome/setup.html">go through the setup for the module</a>.</p></li><li><p>Import the <code>&lt;manage-all-roles&gt;</code> element somewhere in the javascript side of your web-app like this:</p></li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@darksoil-studio/roles-zome/dist/elements/manage-all-roles.js&#39;</span></span></code></pre></div><ol start="2"><li>Use it in the html side of your web-app like this:</li></ol><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">manage-all-roles</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">manage-all-roles</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>Like all the elements in this module, <code>&lt;manage-all-roles&gt;</code> needs to be placed inside an initialized <code>&lt;roles-context&gt;</code>.</p></div><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-label="Permalink to &quot;Demo&quot;">​</a></h2><p>Here is an interactive demo of the element (hint: the two available members are <code>Alice</code> and <code>Bob</code>):</p><element-demo></element-demo><h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><p><code>&lt;manage-all-roles&gt;</code> is a <a href="https://web.dev/articles/custom-elements-v1" target="_blank" rel="noreferrer">custom element</a>, which means that it can be used in any web app or website. Here is the reference for its API:</p>',13),c("api-docs",{src:"custom-elements.json",only:"manage-all-roles"},null,-1)])))}});export{S as __pageData,q as default};
