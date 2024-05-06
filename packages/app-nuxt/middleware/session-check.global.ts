import { withQuery } from 'ufo'

export default defineNuxtRouteMiddleware((to) => {
  const token = useUserToken()
  if (to.meta.requiresAuth && !token.value) {
    return navigateTo(withQuery('/auth', {
      redirect: to.fullPath,
    }))
  }
})