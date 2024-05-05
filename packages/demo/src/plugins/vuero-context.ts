import { type VueroContext, createVueroContext } from '/@src/composables/vuero-context'
import { definePlugin } from '/@src/utils/plugins'

// augment the initial state type
declare module '/@server/types' {
  export interface VueroInitialState {
    ctx?: VueroContext
  }
}

export default definePlugin(({ app, event }) => {
  const context: VueroContext = {}

  // persist the context object on the server side
  if (import.meta.env.SSR && event) {
    event.context.initialState ??= {}
    event.context.initialState.ctx ??= context
  }

  // hydrate the context object on the client side
  if (!import.meta.env.SSR && window.__vuero__?.ctx) {
    for (const [key, value] of Object.entries(window.__vuero__.ctx)) {
      context[key] = value
    }
  }

  app.use(createVueroContext(context))
})
