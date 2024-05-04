import { useStorage } from '@vueuse/core'

const tokenKey = 'token'

export function useUserToken() {
  return useStorage(tokenKey, '')
}
