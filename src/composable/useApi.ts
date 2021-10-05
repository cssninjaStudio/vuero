import { InjectionKey, inject, provide } from 'vue'
import axios, { AxiosInstance } from 'axios'

import { UserSessionData, useUserSession } from './useUserSession'

export const apiSymbol: InjectionKey<AxiosInstance> = Symbol()

export function provideApi(session: UserSessionData) {
  // Here we set the base URL for all requests made to the api
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
  })

  // We set an interceptor for each request to
  // include Bearer token to the request if user is logged in
  api.interceptors.request.use((config) => {
    if (session.token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${session.token}`,
      }
    }

    return config
  })

  provide(apiSymbol, api)

  return api
}

export function useApi() {
  let api = inject(apiSymbol)
  if (!api) {
    const userSession = useUserSession()
    api = provideApi(userSession)
  }
  return api
}
