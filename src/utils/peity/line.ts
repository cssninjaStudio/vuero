// line.ts
import { PeityOptions } from './types'
import { createSvgElement } from './createSvgElement'

export function drawLine(el: HTMLElement, data: number[], opts: PeityOptions) {
  const values = data
  if (values.length === 1) {
    values.push(values[0])
  }

  const max = Math.max(...(opts.max === undefined ? values : values.concat(opts.max)))
  const min = Math.min(...(opts.min === undefined ? values : values.concat(opts.min)))

  const rect = el.getBoundingClientRect()
  const strokeWidth = opts.strokeWidth ?? 1
  const width = rect.width
  const height = rect.height - strokeWidth
  const diff = max - min

  const xScale = (input: any) => {
    return input * (width / (values.length - 1))
  }

  const yScale = (input: any) => {
    let y = height

    if (diff) {
      y -= ((input - min) / diff) * height
    }

    return y + strokeWidth / 2
  }

  const zero = yScale(Math.max(min, 0))
  const coords = [0, zero]

  for (let i = 0; i < values.length; i++) {
    coords.push(xScale(i), yScale(values[i]))
  }

  coords.push(width, zero)

  let fill
  if (typeof opts.fill === 'string') {
    fill = opts.fill
  } else if (Array.isArray(opts.fill)) {
    fill = opts.fill?.[0]
  } else if (typeof opts.fill === 'function') {
    fill = opts.fill(0)
  }

  if (fill) {
    el.appendChild(
      createSvgElement('polygon', {
        fill,
        points: coords.join(' '),
      })
    )
  }

  if (strokeWidth) {
    el.appendChild(
      createSvgElement('polyline', {
        fill: 'none',
        points: coords.slice(2, coords.length - 2).join(' '),
        stroke: opts.stroke,
        'stroke-width': strokeWidth,
        'stroke-linecap': 'square',
      })
    )
  }
}
