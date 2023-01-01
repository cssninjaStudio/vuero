export const onceImageErrored =
  (width: number = 150, height?: number) =>
  (event: Event): void => {
    const target = event.target as HTMLImageElement
    target.src = `https://via.placeholder.com/${width}x${height ?? width}`
  }
