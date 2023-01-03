import type { MaybeRef } from '@vueuse/core'
import { ref, unref, provide, inject, type InjectionKey } from 'vue'
import { useField, type FieldContext } from 'vee-validate'
import { defu } from 'defu'

export type VFieldContext = ReturnType<typeof createVFieldContext>
export const useVFieldSymbolContext = Symbol() as InjectionKey<VFieldContext>

let fieldId = 0

function createVFieldContext<TValue = unknown>(id?: MaybeRef<string | undefined>) {
  const _id = unref(id)
  const $id = ref(id ?? `v-field-${++fieldId}`)
  const field = ref<FieldContext<TValue>>()

  if (_id) {
    field.value = useField(_id)
  }

  const vFieldContext = {
    id: $id,
    field,
  }

  provide(useVFieldSymbolContext, vFieldContext)

  return vFieldContext
}

interface VFieldContextOption {
  id?: MaybeRef<string | undefined>
  create?: MaybeRef<boolean>
  inherit?: MaybeRef<boolean>
  help?: MaybeRef<string>
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
      `${_help}useVFieldContext (create = false) must be used inside a VField component`
    )
  }

  return createVFieldContext(_options.id)
}
