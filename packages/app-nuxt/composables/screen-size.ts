/**
 * This is a store that hold responsive state
 *
 * Using useMediaQuery from @vueuse/core allow to bind
 * css media queries results to ref
 *
 * We can import and use isLargeScreen, isMediumScreen anywhere in our project
 * @see /src/components/navigation/LandingNavigation.vue
 * @see /src/state/activeNavbarState.ts
 */

import { useMediaQuery } from '@vueuse/core'

export function useScreenSize() {
  const isLargeScreen = useMediaQuery('(width >= 1024px)')
  const isMediumScreen = useMediaQuery('(width >= 768px)')
  const isMobileScreen = useMediaQuery('(width <= 767px)')

  return {
    isLargeScreen,
    isMediumScreen,
    isMobileScreen,
  }
}
