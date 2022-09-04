/**
 * useDropdown Composition API
 */

import type { Ref } from 'vue'
import { reactive, ref, watchEffect } from 'vue'
import { onClickOutside } from '@vueuse/core'

export interface DropdownOptions {
  clickOutside?: boolean
}

/**
 * Generate refs to handle a dropdown state
 */
export function useDropdown(
  container: Ref<HTMLElement | undefined>,
  options: DropdownOptions = { clickOutside: true }
) {
  const isOpen = ref(false)

  if (options.clickOutside) {
    onClickOutside(container, () => {
      isOpen.value = false
    })
  }

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
