import type { MaybeRefOrGetter } from 'vue'
import { injectionKey } from '../plugins/vuero-context'

export const useVueroContext = ({
  pageTitle,
}: {
  pageTitle?: MaybeRefOrGetter<string>
} = {}) => {
  const context = inject(injectionKey)!

  const initialValue = context.pageTitle.value

  if (pageTitle && context) {
    watchEffect((cleanup) => {
      context.pageTitle.value = toValue(pageTitle)

      cleanup(() => {
        context.pageTitle.value = initialValue
      })
    })
  }

  return context
}
