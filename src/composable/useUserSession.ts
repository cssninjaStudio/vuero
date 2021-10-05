import { InjectionKey, ref, computed, inject, reactive, provide } from 'vue'
import { useStorage } from '@vueuse/core'

export const userSessionSymbol: InjectionKey<UserSessionData> = Symbol()

export type UserData = Record<string, any> | null

export interface UserSessionData {
  token: string
  user: UserData
  isLoggedIn: boolean
}

export function provideUserSession(): UserSessionData {
  const token = useStorage('token', '')
  const user = ref<UserData>(null)
  const isLoggedIn = computed(() => token.value !== '')

  const userSession = reactive({
    token,
    user,
    isLoggedIn,
  }) as UserSessionData

  provide(userSessionSymbol, userSession)

  return userSession
}

export function useUserSession() {
  let userSession = inject(userSessionSymbol)
  if (!userSession) {
    userSession = provideUserSession()
  }
  return userSession
}
