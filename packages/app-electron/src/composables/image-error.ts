import type { Ref } from 'vue'

type UseImageErrorOptions = {
  fallback?: string
} | {
  width?: number
  height?: number
}

export function useImageError(target?: Ref<HTMLImageElement | null>, options: UseImageErrorOptions = {}) {
  const handler = (event: Event) => {
    if ('fallback' in options) {
      onceError(event, options.fallback)
    }
    else if ('width' in options) {
      onceError(event, options.width, options.height)
    }
  }
  const cleanup = () => {
    if (!target?.value) return
    target.value?.removeEventListener('error', handler)
  }

  const stopWatch = watchEffect(() => {
    if (!target?.value) return
    cleanup()

    target.value?.addEventListener('error', handler, {
      once: true,
      passive: true,
    })
  })

  onUnmounted(() => {
    stopWatch()
    cleanup()
  })

  return {
    onceError,
  }
}

function onceError(event: Event, fallback?: string): void
function onceError(event: Event, width?: number, height?: number): void
function onceError(event: Event, width?: number | string, height?: number): void {
  const target = event.target as HTMLImageElement
  if (!target || !width) return

  let src: string
  if (typeof width === 'string') {
    src = width
  }
  else {
    src = `https://via.placeholder.com/${width}x${height ?? width}`
  }

  target.src = src
}
