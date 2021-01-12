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

  // const onClickListener = (event: MouseEvent) => {
  //   if (!dropdownElement.value) {
  //     return
  //   }

  //   // check if document click targets our dropdown
  //   const isClickInside = dropdownElement.value.contains(event.target as Node)

  //   // close dropdown if click is outside our container
  //   if (!isClickInside) {
  //     isOpen.value = false
  //   }
  // }

  // // register outside click listeners only if dropdown is open
  // watch(isOpen, () => {
  //   if (!isOpen.value) {
  //     // clear outside click listeners if dropdown is closed
  //     document.removeEventListener('click', onClickListener)
  //   }

  //   // register document click listener
  //   document.addEventListener('click', onClickListener)
  // })

  return {
    dropdownElement,
    isOpen,
    open,
    close,
    toggle,
  }
}
