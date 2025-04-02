import type { FieldContext } from 'vee-validate'
import type { InjectionKey, MaybeRefOrGetter } from 'vue'
import { defu } from 'defu'
import { useField } from 'vee-validate'

export interface VFieldContext<TValue = unknown> {
  id: Ref<string>
  field: Ref<FieldContext<TValue> | undefined>
}
export const useVFieldSymbolContext = Symbol('v-field') as InjectionKey<VFieldContext>

function createVFieldContext<TValue = unknown>(id?: MaybeRefOrGetter<string | undefined>) {
  const idVal = toValue(id)
  const internal = ref<string>(idVal || useId())
  const field = ref<FieldContext<TValue>>()

  watch(() => toValue(id), () => {
    internal.value = toValue(id) || useId()
  })

  if (idVal) {
    field.value = useField<TValue>(idVal)
  }

  const vFieldContext = {
    id: internal,
    field,
  }

  provide(useVFieldSymbolContext, vFieldContext)

  return vFieldContext
}

interface VFieldContextOption {
  id?: MaybeRefOrGetter<string | undefined>
  create?: MaybeRefOrGetter<boolean>
  inherit?: MaybeRefOrGetter<boolean>
  help?: MaybeRefOrGetter<string>
}

export function useVFieldContext<TValue = unknown>(options = {} as VFieldContextOption) {
  const _options = defu(options, {
    create: true,
    inherit: true,
  })

  if (toValue(_options.inherit)) {
    const vFieldContext = inject(useVFieldSymbolContext, undefined)
    if (vFieldContext) {
      return vFieldContext as VFieldContext<TValue>
    }
  }

  if (!toValue(_options.create)) {
    const _help = toValue(_options.help) ? `${toValue(_options.help)}: ` : ''
    throw new Error(
      `${_help}useVFieldContext (create = false) must be used inside a VField component`,
    )
  }

  return createVFieldContext<TValue>(_options.id)
}
