const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/api-docs.CFj9ogh6.js","assets/chunks/api-viewer-tabs.bc9mZ4w5.js","assets/chunks/tslib.es6.kHcLnhpD.js","assets/chunks/api-demo.Bsqmng5d.js","assets/chunks/profiles-context.B9ZIwH3_.js","assets/chunks/roles-client.8HdKNuA9.js","assets/chunks/range.CRHiLbae.js","assets/chunks/commonjsHelpers.D6yTTuv9.js","assets/chunks/toFinite.CFYyTVp8.js","assets/chunks/isSymbol.DnU6SLKZ.js","assets/chunks/provide.cQ5kNoyq.js","assets/chunks/property.DCTlx6ty.js","assets/chunks/signal-watcher.WAzG81KR.js","assets/chunks/context.BfkjGVIG.js","assets/chunks/roles-context.Db1zJtjV.js","assets/chunks/context.DtTKLX0G.js","assets/chunks/roles-for-agent.DeI2_5v3.js","assets/chunks/role-config.CdjOk0wI.js"])))=>i.map(i=>d[i]);
import{v as n,V as e,c,a2 as d,j as p,o as m}from"./chunks/framework.CtD3w6uS.js";import{d as h,P as g,a as f,b as u,R as k,c as _,s as b,e as E,B as v,u as y}from"./chunks/roles-client.8HdKNuA9.js";import"./chunks/range.CRHiLbae.js";import"./chunks/commonjsHelpers.D6yTTuv9.js";import"./chunks/toFinite.CFYyTVp8.js";import"./chunks/isSymbol.DnU6SLKZ.js";const C=JSON.parse('{"title":"<roles-for-agent>","description":"","frontmatter":{},"headers":[],"relativePath":"elements/roles-for-agent.md","filePath":"elements/roles-for-agent.md"}'),w={name:"elements/roles-for-agent.md"},j=Object.assign(w,{setup(P){return n(async()=>{await e(()=>import("./chunks/api-docs.CFj9ogh6.js"),__vite__mapDeps([0,1,2])),await e(()=>import("./chunks/api-demo.Bsqmng5d.js"),__vite__mapDeps([3,1,2])),await e(()=>import("./chunks/profiles-context.B9ZIwH3_.js"),__vite__mapDeps([4,2,5,6,7,8,9,10,11,12,13])),customElements.get("roles-context")||await e(()=>import("./chunks/roles-context.Db1zJtjV.js"),__vite__mapDeps([14,10,11,5,6,7,8,9,15])),customElements.get("roles-for-agent")||await e(()=>import("./chunks/roles-for-agent.DeI2_5v3.js"),__vite__mapDeps([16,17,11,5,6,7,8,9,12,15]));const s=await h(),t=new g(s,Array.from(s.keys())[0]),o=new f(new u(t,"roles_test")),a=new k,i=new _(a,"roles_test"),r=await b();await a.create_role_claim(r);const l=new E(i,{roles_config:[{role:"editor",singular_name:"editor",plural_name:"editor",description:"editor"}]});v(y`
    <profiles-context .store=${o}>
      <roles-context .store=${l}>
        <api-demo src="custom-elements.json" only="roles-for-agent" exclude-knobs="store">
          <template data-element="roles-for-agent" data-target="host">
            <roles-for-agent ></roles-for-agent>
          </template>
        </api-demo>
      </roles-context>
    </profiles-context>
  `,document.querySelector("element-demo"))}),(s,t)=>(m(),c("div",null,t[0]||(t[0]=[d('<h1 id="roles-for-agent" tabindex="-1"><code>&lt;roles-for-agent&gt;</code> <a class="header-anchor" href="#roles-for-agent" aria-label="Permalink to &quot;`&lt;roles-for-agent&gt;`&quot;">​</a></h1><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><ol start="0"><li><p>If you haven&#39;t already, <a href="/roles/setup.html">go through the setup for the module</a>.</p></li><li><p>Import the <code>&lt;roles-for-agent&gt;</code> element somewhere in the javascript side of your web-app like this:</p></li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@darksoil-studio/roles-zome/dist/elements/roles-for-agent.js&#39;</span></span></code></pre></div><ol start="2"><li>Use it in the html side of your web-app like this:</li></ol><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">roles-for-agent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">roles-for-agent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>Like all the elements in this module, <code>&lt;roles-for-agent&gt;</code> needs to be placed inside an initialized <code>&lt;roles-context&gt;</code>.</p></div><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-label="Permalink to &quot;Demo&quot;">​</a></h2><p>Here is an interactive demo of the element:</p><element-demo></element-demo><h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><p><code>&lt;roles-for-agent&gt;</code> is a <a href="https://web.dev/articles/custom-elements-v1" target="_blank" rel="noreferrer">custom element</a>, which means that it can be used in any web app or website. Here is the reference for its API:</p>',12),p("api-docs",{src:"custom-elements.json",only:"roles-for-agent"},null,-1)])))}});export{C as __pageData,j as default};
