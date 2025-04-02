import type { VueHeadClient } from '@unhead/vue'
import type { H3Event } from 'h3'
import type { Pinia } from 'pinia'
import type { App } from 'vue'
import type { Router } from 'vue-router'

export interface VueroAppContext {
  app: App
  router: Router
  head: VueHeadClient
  pinia: Pinia
  event?: H3Event
}
export type VueroPlugin = (vuero: VueroAppContext) => void | Promise<void>

// this is a helper function to define plugins with autocompletion
export function definePlugin(plugin: VueroPlugin) {
  return plugin
}
