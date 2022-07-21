import { createApp as createClientApp } from 'vue'

import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import { createRouter } from './router'
import VueroApp from './VueroApp.vue'
import './styles'

import { createApi } from '/@src/composable/useApi'

export type VueroAppContext = Awaited<ReturnType<typeof createApp>>
export type VueroPlugin = (vuero: VueroAppContext) => void | Promise<void>

const plugins = import.meta.glob<{ default: VueroPlugin }>('./plugins/*.ts', {
  eager: true,
})

// this is a helper function to define plugins with autocompletion
export function definePlugin(plugin: VueroPlugin) {
  return plugin
}

export async function createApp() {
  const app = createClientApp(VueroApp)
  const router = createRouter()
  const api = createApi()

  const head = createHead()
  app.use(head)

  const pinia = createPinia()
  app.use(pinia)

  const vuero = {
    app,
    api,
    router,
    head,
    pinia,
  }

  app.provide('vuero', vuero)

  for (const path in plugins) {
    try {
      const { default: plugin } = plugins[path]
      await plugin(vuero)
    } catch (error) {
      console.error(`Error while loading plugin "${path}".`)
      console.error(error)
    }
  }

  // use router after plugin registration, so we can register navigation guards
  app.use(vuero.router)

  return vuero
}
