import { useStorage } from '@vueuse/core'

const tokenKey = 'token'

export function useUserToken(event?: H3Event) {
  return useStorage(tokenKey, '')
}
