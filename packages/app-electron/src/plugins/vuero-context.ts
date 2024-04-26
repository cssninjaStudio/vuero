import { definePlugin } from '/@src/utils/plugins'

interface VueroContext {
  pageTitle: Ref<string>
}
export const injectionKey = Symbol('vuero-context') as InjectionKey<VueroContext>

export default definePlugin(({ app }) => {
  const pageTitle = ref('')

  app.provide(injectionKey, {
    pageTitle,
  })
})
