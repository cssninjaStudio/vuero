import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useViewWrapper = defineStore('viewWrapper', () => {
  const isPushed = ref(false)

  function setPushed(value: boolean) {
    isPushed.value = value
  }

  function toggle() {
    isPushed.value = !isPushed.value
  }

  function close() {
    isPushed.value = false
  }

  return {
    isPushed,
    setPushed,
    toggle,
    close,
  } as const
})
