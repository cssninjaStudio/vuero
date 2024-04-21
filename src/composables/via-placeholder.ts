export function useImageError() {
  return {
    onceError,
  }
}

function onceError(event: Event, width?: string): void
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
