import type { App } from 'vue'
import type { VueHeadClient, MergeHead } from '@unhead/vue'
import type { Router } from 'vue-router/auto'
import type { Pinia } from 'pinia'

export interface VueroAppContext {
  app: App
  router: Router
  head: VueHeadClient<MergeHead>
  pinia: Pinia
}
export type VueroPlugin = (vuero: VueroAppContext) => void | Promise<void>

// this is a helper function to define plugins with autocompletion
export function definePlugin(plugin: VueroPlugin) {
  return plugin
}
