const tokenKey = 'token'

export function useUserToken() {
  return useSessionStorage(tokenKey, '')
}
