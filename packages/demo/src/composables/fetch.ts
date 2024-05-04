import type { H3Event } from 'h3'
import { ofetch } from 'ofetch'

export function useApiFetch(event?: H3Event) {
  const token = useUserToken(event)

  return ofetch.create({
    baseURL: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080',
    // We set an interceptor for each request to
    // include Bearer token to the request if user is logged in
    onRequest: ({ options }) => {
      if (token.value) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${token.value}`,
        }
      }
    },
  })
}
