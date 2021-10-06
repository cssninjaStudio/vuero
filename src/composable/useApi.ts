import { InjectionKey, inject, provide } from 'vue'
import axios, { AxiosInstance } from 'axios'

import { useUserSession } from '/@src/stores/userSession'

export const apiSymbol: InjectionKey<AxiosInstance> = Symbol()

export function provideApi() {
  // Here we set the base URL for all requests made to the api
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
  })

  // We set an interceptor for each request to
  // include Bearer token to the request if user is logged in
  api.interceptors.request.use((config) => {
    const userSession = useUserSession()

    if (userSession.isLoggedIn) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${userSession.token}`,
      }
    }

    return config
  })

  provide(apiSymbol, api)

  return api
}

export function useApi() {
  const api = inject(apiSymbol)
  if (!api) {
    throw new Error('Api not properly injected in app')
  }
  return api
}
