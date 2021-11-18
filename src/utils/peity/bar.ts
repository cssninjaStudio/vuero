// bar.ts
import { PeityOptions } from './types'
import { createSvgElement } from './createSvgElement'

export function drawBar(el: HTMLElement, data: number[], opts: PeityOptions) {
  const values = data
  const max = Math.max(...(opts.max === undefined ? values : values.concat(opts.max)))
  const min = Math.min(...(opts.min === undefined ? values : values.concat(opts.min)))

  const rect = el.getBoundingClientRect()

  const width = rect.width
  const height = rect.height
  const diff = max - min
  const padding = opts.padding ?? 2

  const xScale = (input: any) => {
    return (input * width) / values.length
  }

  const yScale = (input: any) => {
    return height - (diff ? ((input - min) / diff) * height : 1)
  }

  for (let i = 0; i < values.length; i++) {
    const x = xScale(i + padding)
    const w = xScale(i + 1 - padding) - x
    const value = values[i]
    const valueY = yScale(value)
    let y1 = valueY
    let y2 = valueY
    let h

    if (!diff) {
      h = 1
    } else if (value < 0) {
      y1 = yScale(Math.min(max, 0))
    } else {
      y2 = yScale(Math.max(min, 0))
    }

    h = y2 - y1

    if (h === 0) {
      h = 1
      if (max > 0 && diff) {
        y1--
      }
    }

    let fill
    if (typeof opts.fill === 'string') {
      fill = opts.fill
    } else if (Array.isArray(opts.fill)) {
      fill = opts.fill?.[i] ?? opts.fill[0]
    } else if (typeof opts.fill === 'function') {
      fill = opts.fill(i)
    }

    if (fill) {
      el.appendChild(
        createSvgElement('rect', {
          fill,
          x,
          y: y1,
          width: w,
          height: h,
        })
      )
    }
  }
}
