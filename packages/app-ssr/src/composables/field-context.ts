import type { MaybeRefOrGetter, InjectionKey } from 'vue'
import { useField, type FieldContext } from 'vee-validate'
import { defu } from 'defu'

export type VFieldContext = ReturnType<typeof createVFieldContext>
export const useVFieldSymbolContext = Symbol() as InjectionKey<VFieldContext>

function createVFieldContext<TValue = unknown>(id?: MaybeRefOrGetter<string>) {
  const internal = ref(toValue(id))
  const field = ref<FieldContext<TValue>>()

  watch(
    () => toValue(id),
    (value) => {
      internal.value = value || `v-field-${crypto.randomUUID()}`
    },
  )

  if (id) {
    field.value = useField(id)
  }

  const vFieldContext = {
    id: internal,
    field,
  }

  provide(useVFieldSymbolContext, vFieldContext)

  return vFieldContext
}

interface VFieldContextOption {
  id?: MaybeRefOrGetter<string>
  create?: MaybeRefOrGetter<boolean>
  inherit?: MaybeRefOrGetter<boolean>
  help?: MaybeRefOrGetter<string>
}

export function useVFieldContext(options = {} as VFieldContextOption) {
  const _options = defu(options, {
    create: true,
    inherit: true,
  })

  if (unref(_options.inherit)) {
    const vFieldContext = inject(useVFieldSymbolContext, undefined)
    if (vFieldContext) {
      return vFieldContext
    }
  }

  const _help = unref(_options.help) ? unref(_options.help) + ': ' : ''

  if (!unref(_options.create)) {
    throw new Error(
      `${_help}useVFieldContext (create = false) must be used inside a VField component`,
    )
  }

  return createVFieldContext(_options.id)
}
