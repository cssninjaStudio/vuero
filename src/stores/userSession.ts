import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useStorage } from '@vueuse/core'

export type UserData = Record<string, any> | null

export const useUserSession = defineStore('userSession', () => {
  const token = useStorage('token', '')
  const user = ref<Partial<UserData>>()
  const loading = ref(true)

  const isLoggedIn = computed(
    () => token.value !== undefined && token.value !== ''
  )

  function setUser(newUser: Partial<UserData>) {
    user.value = newUser
  }

  function setToken(newToken: string) {
    token.value = newToken
  }

  function setLoading(newLoading: boolean) {
    loading.value = newLoading
  }

  async function logoutUser() {
    token.value = undefined
    user.value = undefined
  }

  return {
    user,
    token,
    isLoggedIn,
    loading,
    logoutUser,
    setUser,
    setToken,
    setLoading,
  } as const
})
