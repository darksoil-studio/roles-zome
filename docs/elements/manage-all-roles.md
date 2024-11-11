# `<manage-all-roles>`

Manage the assignees for all the roles in this hApp.

## Usage

0. If you haven't already, [go through the setup for the module](/setup).

1. Import the `<manage-all-roles>` element somewhere in the javascript side of your web-app like this:

```js
import '@darksoil-studio/roles-zome/dist/elements/manage-all-roles.js'
```

2. Use it in the html side of your web-app like this:

```html
<manage-all-roles>
</manage-all-roles>
```

> [!WARNING]
> Like all the elements in this module, `<manage-all-roles>` needs to be placed inside an initialized `<roles-context>`.

## Demo

Here is an interactive demo of the element (hint: the two available members are `Alice` and `Bob`):

<element-demo>
</element-demo>

<script setup>
import { onMounted } from "vue";
import { ProfilesClient, ProfilesStore } from '@darksoil-studio/profiles-zome';
import { demoProfiles, ProfilesZomeMock } from '@darksoil-studio/profiles-zome/dist/mocks.js';
import { decodeHashFromBase64, encodeHashToBase64 } from '@holochain/client';
import { render } from "lit";
import { html, unsafeStatic } from "lit/static-html.js";

import { RolesZomeMock } from "../../ui/src/mocks.ts";
import { RolesStore } from "../../ui/src/roles-store.ts";
import { RolesClient } from "../../ui/src/roles-client.ts";

onMounted(async () => {
  // Elements need to be imported on the client side, not the SSR side
  // Reference: https://vitepress.dev/guide/ssr-compat#importing-in-mounted-hook
  await import('@api-viewer/docs/lib/api-docs.js');
  await import('@api-viewer/demo/lib/api-demo.js');
  await import('@darksoil-studio/profiles-zome/dist/elements/profiles-context.js');
  if (!customElements.get('roles-context')) await import('../../ui/src/elements/roles-context.ts');
  if (!customElements.get('manage-all-roles')) await import('../../ui/src/elements/manage-all-roles.ts');

  const profiles = await demoProfiles();

  const profilesMock = new ProfilesZomeMock(
    profiles,
    Array.from(profiles.keys())[0]
  );
  const profilesStore = new ProfilesStore(new ProfilesClient(profilesMock, "roles_test"));

  const mock = new RolesZomeMock(Array.from(profiles.keys())[0]);
  const client = new RolesClient(mock, "roles_test");

  await mock.assign_role({
    role: 'admin',
    assignees: [Array.from(profiles.keys()).find(k => k.toString() === mock.myPubKey.toString())]
  });


  await mock.assign_role({
    role: 'editor',
    assignees: [Array.from(profiles.keys()).find(k => k.toString() !== mock.myPubKey.toString())]
  });

  const store = new RolesStore(client, {
    roles_config: [{
      role: 'editor',
      singular_name: 'Editor',
      plural_name: 'Editors',
      description: 'Editors is a usual role that you may need in your hApp.',
    }]
  });
  
  render(html`
    <profiles-context .store=${profilesStore}>
      <roles-context .store=${store}>
        <api-demo src="custom-elements.json" only="manage-all-roles" exclude-knobs="store">
          <template data-element="manage-all-roles" data-target="host">
            <manage-all-roles></manage-all-roles>
          </template>
        </api-demo>
      </roles-context>
    </profiles-context>
  `, document.querySelector('element-demo'))
  })


</script>

## API Reference

`<manage-all-roles>` is a [custom element](https://web.dev/articles/custom-elements-v1), which means that it can be used in any web app or website. Here is the reference for its API:

<api-docs src="custom-elements.json" only="manage-all-roles">
</api-docs>
