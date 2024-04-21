export function useImageError() {
  return {
    onceImageErrored,
  }
}

function onceImageErrored(width?: string): (event: Event) => void
function onceImageErrored(width?: number, height?: number): (event: Event) => void
function onceImageErrored(width?: number | string, height?: number): (event: Event) => void {
  return (event: Event): void => {
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
}
