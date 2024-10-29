import type { VueroSSRContext } from '/@server/types'
import type { H3Event } from 'h3'
import { useCookies } from '@vueuse/integrations/useCookies'
import { deleteCookie, getCookie, setCookie } from 'h3'
import { useSSRContext } from 'vue'

interface CookieOption {
  path?: string
  expires?: Date
  maxAge?: number
  domain?: string
  secure?: boolean
  httpOnly?: boolean
  sameSite?: boolean | 'none' | 'lax' | 'strict'
  partitioned?: boolean
}

const tokenKey = 'token'
const options = {
  maxAge: 60 * 60 * 24 * 7,
  path: '/',
  sameSite: 'lax',
  secure: true,
} satisfies CookieOption

export function useUserToken(event?: H3Event) {
  let token: Ref<string | undefined>

  // when client only, use localStorage
  if (!__VUERO_SSR_BUILD__) {
    token = useSessionStorage(tokenKey, '')
  }

  // otherwise, we need to use cookies to share the token between client and server
  else {
    // server side: cookies are managed by http headers.
    // use h3 helpers and ssr context to get h3 event
    if (import.meta.env.SSR) {
      const _event = event || useSSRContext<VueroSSRContext>()?.event

      token = computed<string | undefined>({
        get() {
          if (_event) {
            return getCookie(_event, tokenKey)
          }
        },
        set(value?: string) {
          if (_event) {
            if (value) {
              setCookie(_event, tokenKey, value, options)
            }
            else {
              deleteCookie(_event, tokenKey, options)
            }
          }
        },
      })
    }

    // client side, use cookies via document.cookie
    else {
      const cookies = useCookies(['locale'])

      token = ref(cookies.get(tokenKey))

      // we need to listen to changes in cookies in case it's changed from another tab
      // or another part of the app
      const listener = (event: any) => {
        if (event.name === tokenKey) {
          token.value = event.value
        }
      }

      cookies.addChangeListener(listener)

      // in case this composable is used inside a component that is unmounted
      // we need to remove the listener to avoid memory leaks
      if (getCurrentScope()) {
        onScopeDispose(() => cookies?.removeChangeListener(listener))
      }

      // watch the token value and update the cookie if needed
      watch(token, (value) => {
        if (value && cookies.get(tokenKey) !== value) {
          cookies.set(tokenKey, value, options)
        }

        else if (!value && cookies.get(tokenKey)) {
          cookies.remove(tokenKey, options)
        }
      })
    }
  }

  return token
}
