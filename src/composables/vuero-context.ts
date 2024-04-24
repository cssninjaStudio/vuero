import type { MaybeRefOrGetter } from 'vue'
import { injectionKey } from '../plugins/vuero-context'

export const useVueroContext = ({
  pageTitle,
}: {
  pageTitle?: MaybeRefOrGetter<string>
} = {}) => {
  const context = inject(injectionKey)

  if (!context) {
    throw new Error('useVueroContext() was called without having vuero-context plugin installed.')
  }

  if (pageTitle) {
    watchEffect(() => {
      context.pageTitle.value = toValue(pageTitle)
    })
  }

  return context
}
