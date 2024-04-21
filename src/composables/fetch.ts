import { ofetch } from 'ofetch'

export function useApiFetch() {
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
