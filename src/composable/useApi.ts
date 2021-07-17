import { InjectionKey, inject } from 'vue'
import axios, { AxiosInstance } from 'axios'

import { UserSessionData } from './useUserSession'

export const apiSymbol: InjectionKey<AxiosInstance> = Symbol()

export function initApi(session: UserSessionData) {
  // Here we set the base URL for all requests made to the api
  const api = axios.create({
    baseURL: 'http://localhost:1337',
  })

  // We set an interceptor for each request to
  // include Bearer token to the request if user is logged in
  api.interceptors.request.use((config) => {
    if (session.token) {
      config.headers.Authorization = `Bearer ${session.token}`
    }

    return config
  })

  return api
}

export default function useApi() {
  const api = inject(apiSymbol)
  if (!api) {
    throw new Error('Api not properly injected in app')
  }
  return api
}
