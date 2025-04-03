import type { ShallowRef } from 'vue'

export interface DropdownOptions {
  clickOutside?: boolean
}

/**
 * Generate refs to handle a dropdown state
 */
export function useDropdownContext(
  target: Readonly<ShallowRef<HTMLElement | null>>,
  options: DropdownOptions = { clickOutside: true },
) {
  const isOpen = ref(false)

  if (options.clickOutside) {
    onClickOutside(target, () => {
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

  return reactive({
    isOpen,
    open,
    close,
    toggle,
  })
}
