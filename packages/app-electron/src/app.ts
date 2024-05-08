import { createApp as createClientApp } from 'vue'

import { createHead } from '@unhead/vue'
import { InferSeoMetaPlugin } from '@unhead/addons'
import { createPinia } from 'pinia'

import type { VueroPlugin, VueroAppContext } from '/@src/utils/plugins'
import { createRouter } from '/@src/router'
import VueroApp from '/@src/VueroApp.vue'
import '/@src/styles'

const plugins = import.meta.glob<{ default?: VueroPlugin }>('./plugins/*.ts', {
  eager: true,
})

export async function createApp() {
  const app = createClientApp(VueroApp)

  const router = createRouter()

  const head = createHead({
    plugins: [InferSeoMetaPlugin()],
  })
  app.use(head)

  const pinia = createPinia()
  app.use(pinia)

  const vuero: VueroAppContext = {
    app,
    router,
    head,
    pinia,
  }

  for (const path in plugins) {
    try {
      const plugin = plugins[path]?.default
      if (!plugin) throw new Error(`Plugin does not have a default export.`)
      await plugin(vuero)
    }
    catch (error) {
      console.log(`Error while loading plugin "${path}"`)
      console.error(error)
    }
  }

  // use router after plugin registration, so we can register navigation guards in plugins
  app.use(vuero.router)

  return vuero
}
