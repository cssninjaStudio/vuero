import { useMediaQuery } from '@vueuse/core'

export const isLargeScreen = useMediaQuery('(min-width: 1023px)')
export const isMediumScreen = useMediaQuery('(min-width: 767px)')
