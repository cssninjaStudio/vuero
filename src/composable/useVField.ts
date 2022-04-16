import { ref, InjectionKey } from 'vue'

let fieldId = 0

export type UseVField = ReturnType<typeof useVField>

export const useVFieldSymbol: InjectionKey<UseVField> = Symbol()

export function useVField() {
  const id = ref(`field-${fieldId++}`)

  return {
    id,
  }
}
