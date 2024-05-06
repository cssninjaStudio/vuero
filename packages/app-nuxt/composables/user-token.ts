const tokenKey = 'token'

export function useUserToken() {
  return useCookie(tokenKey)
}
