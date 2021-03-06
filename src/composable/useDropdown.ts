/**
 * useDropdown Composition API
 */

import { ref, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'

/**
 * Generate refs to handle a dropdown state
 */
export default function useDropdown() {
  const isOpen = ref(false)
  const dropdownElement = ref<HTMLElement | null>(null)

  onClickOutside(dropdownElement, () => {
    isOpen.value = false
  })

  const open = () => {
    isOpen.value = true
  }

  const close = () => {
    isOpen.value = false
  }

  const toggle = () => {
    isOpen.value = !isOpen.value
  }

  return {
    dropdownElement,
    isOpen,
    open,
    close,
    toggle,
  }
}
