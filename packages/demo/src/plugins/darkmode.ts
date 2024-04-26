import type { InjectionKey } from 'vue'
import { definePlugin } from '/@src/utils/plugins'

interface DarkmodeContext {
  isDark: Ref<boolean>
  onChange: (event: MouseEvent) => Promise<void>
}
export const injectionKey = Symbol('darkmode') as InjectionKey<DarkmodeContext>

const darkmodeClass = 'is-dark'
type DarkModeSchema = 'auto' | 'dark' | 'light'

/**
 * Enable Vue Data Loader plugin from unplugin-vue-router
 *
 * @see https://uvr.esm.is/rfcs/data-loaders/
 */
export default definePlugin(({ app }) => {
  const preferredDark = usePreferredDark()
  const colorSchema = useStorage<DarkModeSchema>('color-schema', 'auto')

  const enableTransitions = () =>
    !import.meta.env.SSR
    && 'startViewTransition' in document
    && window.matchMedia('(prefers-reduced-motion: no-preference)').matches

  const isDark = computed({
    get() {
      return colorSchema.value === 'auto'
        ? preferredDark.value
        : colorSchema.value === 'dark'
    },
    set(v: boolean) {
      // disable transitions
      if (!import.meta.env.SSR && document.documentElement) {
        document.documentElement.classList.add('no-transition')
      }

      if (v === preferredDark.value) colorSchema.value = 'auto'
      else colorSchema.value = v ? 'dark' : 'light'

      if (!import.meta.env.SSR && document.documentElement) {
        setTimeout(() => {
          document.documentElement.classList.remove('no-transition')
        }, 0)
      }
    },
  })

  const onChange = async (event: MouseEvent) => {
    const target = event.target as HTMLInputElement

    if (!enableTransitions()) {
      isDark.value = !isDark.value
      return
    }

    event.preventDefault()

    const clipPath = [
      `circle(0px at ${event.clientX}px ${event.clientY}px)`,
      `circle(${Math.hypot(
        Math.max(event.clientX, target.clientWidth - event.clientX),
        Math.max(event.clientY, target.clientHeight - event.clientY),
      )}px at ${event.clientX}px ${event.clientY}px)`,
    ]

    await (document as any).startViewTransition(async () => {
      isDark.value = !isDark.value
      await nextTick()
    }).ready

    document.documentElement.animate(
      { clipPath: isDark.value ? clipPath.reverse() : clipPath },
      {
        duration: 300,
        easing: 'ease-in',
        pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`,
      },
    )
  }

  if (!import.meta.env.SSR) {
    watch(isDark, (value) => {
      const body = document.documentElement

      if (value) {
        body.classList.add(darkmodeClass)
      }
      else {
        body.classList.remove(darkmodeClass)
      }
    }, { immediate: true })
  }

  app.provide(injectionKey, {
    isDark,
    onChange,
  })
})
