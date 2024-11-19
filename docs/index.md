---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Roles Zome"
  text: ""
  tagline: Plug-and-play roles management for your hApps
  actions:
    - theme: brand
      text: Setup
      link: /setup.md
    - theme: alt
      text: Overview
      link: /overview.md
    - theme: alt
      text: Integrity Zome API
      link: "/backend/doc/roles_integrity/index.html"
      target: "_blank"
    - theme: alt
      text: Coordinator Zome API
      link: "/backend/doc/roles/index.html"
      target: "_blank"
    - theme: alt
      text: Frontend API
      link: "/roles-store.md"

features:
  - title: UI + Backend Zome
    details: Following the TNESH stack guidelines.
    link: https://darksoil.studio/tnesh-stack
  - title: Declare which roles exist in your hApp
    details: Configure validation of your hApp's entries based on whether the author holds a certain role. 
  - title: Declare progenitors in the DNA properties
    details: Give the admin role to trusted members from the get go to create a permissioned holochain network.
  - title: Assign roles to members
    details: Only admins are able to search for members and assign roles to them.
  - title: Request unassignment of roles
    details: Automatic self-unassignment of roles when the assignee's devices are online.
---

