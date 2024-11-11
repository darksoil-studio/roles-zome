import{_ as h,c as m,a2 as r,b as s,w as t,a3 as l,j as a,a as i,B as c,o,G as d}from"./chunks/framework.DWRaFRaO.js";const k=JSON.parse('{"title":"@darksoil-studio/roles-zome","description":"","frontmatter":{},"headers":[],"relativePath":"overview.md","filePath":"overview.md"}'),p={name:"overview.md"};function u(g,e,A,b,f,y){const n=c("Mermaid");return o(),m("div",null,[e[2]||(e[2]=r('<h1 id="darksoil-studio-roles-zome" tabindex="-1">@darksoil-studio/roles-zome <a class="header-anchor" href="#darksoil-studio-roles-zome" aria-label="Permalink to &quot;@darksoil-studio/roles-zome&quot;">​</a></h1><h2 id="modularity" tabindex="-1">Modularity <a class="header-anchor" href="#modularity" aria-label="Permalink to &quot;Modularity&quot;">​</a></h2><p>This module follows the <a href="https://darksoil.studio/tnesh-stack" target="_blank" rel="noreferrer">TNESH stack</a> pattern of developing holochain modules. Read its documentation to understand more about its motivation and the big picture.</p><p>To integrate this module into your application, go to the <a href="/roles-zome/setup.html">setup page</a>.</p><h2 id="module-design" tabindex="-1">Module design <a class="header-anchor" href="#module-design" aria-label="Permalink to &quot;Module design&quot;">​</a></h2><p>Creating roles in fully peer-to-peer systems can be tricky. There is no node in the network that by default is able to administer the system. In order to introduce role based management on Holochain, someone needs to be written into the app as it is generated as the agent that has special rights, this will then be part of the rules of the app that everyone plays by (the DNA).</p><p>The pattern we are using in this module is the progenitor pattern. This means that the agent that instantiates the DNA writes themselves into the DNA as the original admin. Once an original admin is created, this administrator is able to generate further roles including additional administrators. Administrators are also able to remove all of the roles from Agents (including the Admin role of the progenitor). Below you will find graphical representations of how the module works.</p><p><strong>This pattern creates the requirement of a layer outside the app (like a lobby) where a user is able to create the instantiation of the app so that the public key (AgentPubKey) associated with the original user is encoded into the DNA as it is being created. Read more about this in the implementation considerations section below.</strong></p><h3 id="original-administrator-progenitor" tabindex="-1">Original administrator (progenitor) <a class="header-anchor" href="#original-administrator-progenitor" aria-label="Permalink to &quot;Original administrator (progenitor)&quot;">​</a></h3><p>In order to create an initial admin for the app, we are using the progenitor pattern. This means, the creator of the app (of the DNA actually) is the one who is the original admin. More admins can be added like adding any other roles by the progenitor.</p>',10)),(o(),s(l,null,{default:t(()=>[d(n,{id:"mermaid-30",class:"mermaid",graph:"sequenceDiagram%0AAlice%20-%3E%3E%20Alice%3A%20creates%20new%20DNA%20instance%20(inserting%20AgentPubKey%20in%20DNA%20details)%0Acreate%20participant%20happDNA%0AAlice%20-%3E%3E%20happDNA%3A%20joins%20app%0AAlice%20-%3E%3E%20Alice%3A%20claims%20ADMIN_ROLE%20at%20init%20(creates%20RoleClaim%20entry)%0AhappDNA%20-%3E%3E%20Alice%3A%20validates%20claim%20(compares%20Alice%20to%20progenitor)%0A"})]),fallback:t(()=>e[0]||(e[0]=[i(" Loading... ")])),_:1})),e[3]||(e[3]=a("h3",{id:"role-assignment",tabindex:"-1"},[i("Role assignment "),a("a",{class:"header-anchor",href:"#role-assignment","aria-label":'Permalink to "Role assignment"'},"​")],-1)),e[4]||(e[4]=a("p",null,"In the diagram below Alice is the progenitor and is therefore granted ADMIN_ROLE when entering the DNA.",-1)),(o(),s(l,null,{default:t(()=>[d(n,{id:"mermaid-37",class:"mermaid",graph:"sequenceDiagram%0AAlice%20-%3E%3E%20Alice%3A%20claim%20ADMIN_ROLE%20on%20init%3Cbr%2F%3E(create%20RoleClaim%20entry)%0Acreate%20participant%20Bob%0AAlice%20-%3E%3E%20Bob%3A%20assign%20ADMIN_ROLE%3Cbr%2F%3E(create%20roleToAsignee%20link)%0ABob%20-%3E%3EBob%3A%20claim%20ADMIN%3AROLE%3Cbr%2F%3E(create%20RoleClaim%20entry)%0Acreate%20participant%20Caroline%0ABob%20-%3E%3E%20Caroline%3A%20assign%20EDITOR_ROLE%3Cbr%2F%3E(create%20roleToAsignee%20link)%0ACaroline%20-%3E%3E%20Caroline%3A%20claim%20EDITOR_ROLE%3Cbr%2F%3E(create%20RoleClaim%20entry)%0A"})]),fallback:t(()=>e[1]||(e[1]=[i(" Loading... ")])),_:1})),e[5]||(e[5]=r('<h2 id="design-considerations" tabindex="-1">Design considerations <a class="header-anchor" href="#design-considerations" aria-label="Permalink to &quot;Design considerations&quot;">​</a></h2><p>The possibility of actually using the capacities that an app developer is connecting to a role is validated by checking if the Agent has commited a claim to a role in their own source chain. The validation for creating such a claim for yourself is based on finding an assignment from an admin that allows one to create the claim.</p><p>It is implemented in this way in order to be sure that when someone is evaluating if an action is allowed (through a role) from an Agent, that enabling role claim must be found earlier in the source chain of that Agent to become deterministic.</p><h2 id="implementation-considerations" tabindex="-1">Implementation considerations <a class="header-anchor" href="#implementation-considerations" aria-label="Permalink to &quot;Implementation considerations&quot;">​</a></h2><p>It is very important to understand that if you want to use this module, the instantiator&#39;s AgentPubKey needs to be inserted into the <a href="https://docs.rs/holochain_types/0.5.0-dev.0/holochain_types/prelude/struct.DnaModifiers.html#structfield.properties" target="_blank" rel="noreferrer">DNA properties</a>. This means that you need to have a running conductor that has access to an AgentPubKey that can be insterted into the app.</p>',5))])}const w=h(p,[["render",u]]);export{k as __pageData,w as default};
