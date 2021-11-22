import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useViewWrapper = defineStore('viewWrapper', () => {
  const isPushed = ref(false)
  const pageTitle = ref('Welcome')

  function setPushed(value: boolean) {
    isPushed.value = value
  }
  function setPageTitle(value: string) {
    pageTitle.value = value
  }

  return {
    isPushed,
    pageTitle,
    setPushed,
    setPageTitle,
  } as const
})
