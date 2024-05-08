import type { Plugin } from 'vue'

export interface VueroContext extends Record<string, any> {}

const injectionKey = Symbol('vuero-context') as InjectionKey<VueroContext>

export function useVueroContext<T>(
  key: string,
  defaultValue?: () => T,
): Ref<T | null> {
  const context = inject(injectionKey)

  if (!context) {
    throw new Error('useVueroContext() was called without having vuero-context plugin installed.')
  }

  const state = toRef(context, key)

  if (state.value === undefined) {
    const val = defaultValue?.()
    state.value = val
  }

  return state
}

export function createVueroContext(
  context = {} as VueroContext,
): Plugin {
  return {
    install(app) {
      app.provide(injectionKey, reactive(context))
    },
  }
}
