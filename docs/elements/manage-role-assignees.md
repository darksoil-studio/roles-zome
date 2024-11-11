# `<manage-role-assignees>`

Manage the assignees for a certain role in this hApp.

## Usage

0. If you haven't already, [go through the setup for the module](/setup).

1. Import the `<manage-role-assignees>` element somewhere in the javascript side of your web-app like this:

```js
import '@darksoil-studio/roles-zome/dist/elements/manage-role-assignees.js'
```

2. Use it in the html side of your web-app like this:

```html
<manage-role-assignees role="editor">
</manage-role-assignees>
```

> [!WARNING]
> Like all the elements in this module, `<manage-role-assignees>` needs to be placed inside an initialized `<roles-context>`.

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
  if (!customElements.get('manage-role-assignees')) await import('../../ui/src/elements/manage-role-assignees.ts');

  const profiles = await demoProfiles();

  const profilesMock = new ProfilesZomeMock(
    profiles,
    Array.from(profiles.keys())[0]
  );
  const profilesStore = new ProfilesStore(new ProfilesClient(profilesMock, "roles_test"));

  const mock = new RolesZomeMock( 
    Array.from(profiles.keys())[0]
  );
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
        <api-demo src="custom-elements.json" only="manage-role-assignees" exclude-knobs="store">
          <template data-element="manage-role-assignees" data-target="host">
            <manage-role-assignees role="editor" style="height: 400px; width: 100%; display: flex"
            ></manage-role-assignees>
          </template>
        </api-demo>
      </roles-context>
    </profiles-context>
  `, document.querySelector('element-demo'))
  })


</script>

## API Reference

`<manage-role-assignees>` is a [custom element](https://web.dev/articles/custom-elements-v1), which means that it can be used in any web app or website. Here is the reference for its API:

<api-docs src="custom-elements.json" only="manage-role-assignees">
</api-docs>
