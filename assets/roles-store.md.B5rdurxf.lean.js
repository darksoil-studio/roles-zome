import{_ as e,c as t,a2 as a,o as i}from"./chunks/framework.CtD3w6uS.js";const c=JSON.parse('{"title":"RolesStore","description":"","frontmatter":{},"headers":[],"relativePath":"roles-store.md","filePath":"roles-store.md"}'),r={name:"roles-store.md"};function n(o,s,l,h,p,k){return i(),t("div",null,s[0]||(s[0]=[a(`<h1 id="rolesstore" tabindex="-1">RolesStore <a class="header-anchor" href="#rolesstore" aria-label="Permalink to &quot;RolesStore&quot;">​</a></h1><p>The <code>RolesStore</code> is a typescript class that contains <a href="https://www.npmjs.com/package/async-signals" target="_blank" rel="noreferrer">async signals</a>, which you can watch to get reactive updates in your elements.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { RolesStore, RolesClient } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@darksoil-studio/roles-zome&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> store</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RolesStore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RolesClient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(appClient, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;my-role-name&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span></code></pre></div><blockquote><p>Learn how to setup the <code>AppClient</code> object <a href="https://www.npmjs.com/package/@holochain/client" target="_blank" rel="noreferrer">here</a>.</p></blockquote><p>Learn more about the stores and how to integrate them in different frameworks <a href="https://holochain-open-dev.github.io/reusable-modules/frontend/using/#stores" target="_blank" rel="noreferrer">here</a>.</p>`,5)]))}const g=e(r,[["render",n]]);export{c as __pageData,g as default};
