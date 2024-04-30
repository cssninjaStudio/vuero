import { definePlugin } from '/@src/utils/plugins'

export default definePlugin(async ({ event, router }) => {
  if (!event) return

  const [getRequestURL, setResponseHeader] = await import('h3').then(m => [
    m.getRequestURL,
    m.setResponseHeader,
  ] as const)

  const url = getRequestURL(event)
  if (!url?.pathname) return

  const route = router.resolve(url.pathname)
  if (!route) return

  if (route.meta.requiresAuth) {
    setResponseHeader(event, 'Cache-Control', 'private, max-age=3600, stale-while-revalidate=3600')
  }
  else {
    setResponseHeader(event, 'Cache-Control', 'public, max-age=86400, stale-while-revalidate=604800')
  }
})
