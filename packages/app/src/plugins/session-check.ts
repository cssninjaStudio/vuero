import { definePlugin } from '/@src/utils/plugins'

export default definePlugin(async ({ router, pinia }) => {
  const userSession = useUserSession(pinia)
  const token = useUserToken()

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
    const token = useUserToken()
    if (to.meta.requiresAuth && !token.value) {
      return {
        name: '/auth',
        query: { redirect: to.fullPath },
      }
    }
  })
})
