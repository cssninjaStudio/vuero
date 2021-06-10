/**
 * useDropdown Composition API
 */

import type { Ref } from 'vue'
import { reactive, ref, watchEffect } from 'vue'
import { onClickOutside } from '@vueuse/core'

/**
 * Generate refs to handle a dropdown state
 */
export default function useDropdown(container: Ref<HTMLElement | null>) {
  const isOpen = ref(false)

  onClickOutside(container, () => {
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

  watchEffect(() => {
    if (!container.value) {
      return
    }

    if (isOpen.value) {
      container.value.classList.add('is-active')
    } else {
      container.value.classList.remove('is-active')
    }
  })

  return reactive({
    isOpen,
    open,
    close,
    toggle,
  })
}
