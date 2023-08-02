import { ofetch } from 'ofetch'

import { useUserSession } from '/@src/stores/userSession'

export function useFetch() {
  return ofetch.create({
    baseURL: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080',
    // We set an interceptor for each request to
    // include Bearer token to the request if user is logged in
    onRequest: ({ options }) => {
      const userSession = useUserSession()

      if (userSession.isLoggedIn) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${userSession.token}`,
        }
      }
    },
  })
}
