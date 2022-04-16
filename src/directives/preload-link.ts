import type { Directive } from 'vue'

const handlers = new WeakMap()
const preloaded = new Set<string>()

/**
 * This directive is used to prefetch a link when the user hovers over it.
 * This allow to reduce the time it takes to load the page, and thus improve the user experience.
 * @exemple <RouterLink to="/" v-preload-link>Home</RouterLink>
 */
export const vPreloadLink: Directive = {
  getSSRProps() {
    return {}
  },
  created: (el: HTMLAnchorElement) => {
    const handler = function () {
      const href = (el.href ?? '').split('#')[0]

      if (!href || preloaded.has(href)) {
        el.removeEventListener('mouseenter', handler)
        return
      }

      const newPreLoadLink = document.createElement('link')
      newPreLoadLink.rel = 'prefetch'
      newPreLoadLink.href = href

      document.head.appendChild(newPreLoadLink)
      preloaded.add(href)
      el.removeEventListener('mouseenter', handler)
    }

    handlers.set(el, handler)
  },
  beforeMount() {
    const currentHref = window.location.toString().split('#')[0]
    if (!currentHref || preloaded.has(currentHref)) {
      return
    }
    preloaded.add(currentHref)
  },
  mounted: (el: HTMLAnchorElement) => {
    el.addEventListener('mouseenter', handlers.get(el), { passive: true })
  },
  unmounted: (el: HTMLAnchorElement) => {
    el.removeEventListener('mouseenter', handlers.get(el))
  },
}
