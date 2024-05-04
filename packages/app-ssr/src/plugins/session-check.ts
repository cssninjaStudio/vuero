import { definePlugin } from '/@src/utils/plugins'

export default definePlugin(async ({ router, pinia, event }) => {
  const userSession = useUserSession(pinia)
  const token = useUserToken(event)

  if (token.value && !userSession.user) {
    try {
      userSession.setUser({
        id: 1,
        name: 'John Doe',
        email: '',
      })
    }
    catch (err) {
      token.value = undefined
    }
  }

  router.beforeEach((to) => {
    const token = useUserToken(event)
    if (to.meta.requiresAuth && !token.value) {
      return {
        name: '/auth',
        query: { redirect: to.fullPath },
      }
    }
  })
})
