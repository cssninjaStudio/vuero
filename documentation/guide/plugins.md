# Vuero Plugins

Vuero has a plugin system that allows you to extend Vue, Vue Router, etc. with additional features. They run before the app is created and can be used to add global components, directives, mixins, etc. 

In addition, when using SSR, you can act on the underlying request and response objects via [h3](https://h3.unjs.org) events.

```text
src/
├─ plugins/
│  └── *.ts
├── app.ts
├── entry-client.ts
├── entry-server.ts
├── router.ts
└─ VueroApp.vue
```

## Creating a plugin

To create a plugin, you need to ceate a file in the `src/plugins` directory. The file will be automatically imported and executed by the app. 

```ts
// src/plugins/my-plugin.ts
import { definePlugin } from '/@src/utils/plugins'

export default definePlugin(({ app, router, head, pinia, event }) => {
  // your plugin code here
})
```

```ts
import type { App } from 'vue'
import type { VueHeadClient } from '@unhead/vue'
import type { Router } from 'vue-router/auto'
import type { Pinia } from 'pinia'
import type { H3Event } from 'h3'

interface VueroPluginContext {
  app: App
  router: Router
  head: VueHeadClient
  pinia: Pinia
  event?: H3Event
}
```


## Available plugins

| Plugin   | Usage      |
| ---------- | -------------|
| `cache-headers.ts` | Add cache headers to the response via [h3](https://h3.unjs.org) events |
| `darkmode.ts` | Provide a reactive dark mode state to Vue |
| `data-loader.ts` | Register Unplugin Vue Router [data loaders](https://uvr.esm.is/rfcs/data-loaders/) to Vue |
| `directives.ts` | Register global Vue directives |
| `i18n.ts` | Register [`vue-i18n`](https://vue-i18n.intlify.dev/) plugin |
| `notyf.ts` | Register Client Only [`notyf`](https://carlosroso.com/notyf/) instance |
| `nprogress.ts` | Register client only [`nprogress`](https://ricostacruz.com/nprogress/) instance in Vue Router |
| `session-check.ts` | Example of a session check plugin using Vue Router Guard |
| `v-calendar.ts` | Register Lazyloader for [`v-calendar`](https://vcalendar.io/) components |
| `vue-tippy.ts` | Register [`vue-tippy`](https://vue-tippy.netlify.app/) plugin |
| `vue3-apexcharts.ts` | Register Client Only Lazyloader for [`vue3-apexcharts`](https://github.com/apexcharts/vue3-apexcharts) components |
| `vueform.ts` | Register Lazyloader for [`@vueform/multiselect`](https://github.com/vueform/multiselect) and [`@vueform/slider`](https://github.com/vueform/slider) components |
| `vuero-context.ts` | Provide a shared reactive state to Vue |