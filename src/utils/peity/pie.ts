// pie.ts
import { PeityOptions } from './types'
import { createSvgElement } from './createSvgElement'

export function drawPie(el: HTMLElement, data: number[], opts: PeityOptions) {
  let values = data.map((n: any) => (n > 0 ? n : 0))

  if (values.length === 2) {
    const v1 = values[0]
    const v2 = values[1]
    values = [v1, Math.max(0, v2 - v1)]
  }

  let i = 0
  let length = values.length
  let sum = 0

  for (; i < length; i++) {
    sum += values[i]
  }

  if (!sum) {
    length = 2
    sum = 1
    values = [0, 1]
  }

  const rect = el.getBoundingClientRect()
  const width = rect.width
  const height = rect.height
  const cx = width / 2
  const cy = height / 2

  const radius = Math.min(cx, cy)
  let innerRadius = opts.innerRadius

  if (opts.type === 'donut' && !innerRadius) {
    innerRadius = radius * 0.5
  }

  const pi = Math.PI

  const scale = (value: number, rad: number) => {
    const radians = (value / sum) * pi * 2 - pi / 2
    return [rad * Math.cos(radians) + cx, rad * Math.sin(radians) + cy]
  }

  let cumulative = 0

  for (i = 0; i < length; i++) {
    const value = values[i]
    const portion = value / sum
    let $node

    if (portion === 0) {
      continue
    }

    if (portion === 1) {
      if (innerRadius) {
        const x2 = cx - 0.01
        const y1 = cy - radius
        const y2 = cy - innerRadius

        $node = createSvgElement('path', {
          d: [
            'M',
            cx,
            y1,
            'A',
            radius,
            radius,
            0,
            1,
            1,
            x2,
            y1,
            'L',
            x2,
            y2,
            'A',
            innerRadius,
            innerRadius,
            0,
            1,
            0,
            cx,
            y2,
          ].join(' '),
        })
      } else {
        $node = createSvgElement('circle', {
          cx,
          cy,
          r: radius,
        })
      }
    } else {
      const cumulativePlusValue = cumulative + value

      let d = ['M'].concat(
        scale(cumulative, radius).map(String),
        'A',
        `${radius}`,
        `${radius}`,
        '0',
        portion > 0.5 ? '1' : '0',
        '1',
        scale(cumulativePlusValue, radius).map(String),
        'L'
      )

      if (innerRadius) {
        d = d.concat(
          scale(cumulativePlusValue, innerRadius).map(String),
          'A',
          `${innerRadius}`,
          `${innerRadius}`,
          '0',
          portion > 0.5 ? '1' : '0',
          '0',
          scale(cumulative, innerRadius).map(String)
        )
      } else {
        d.push(`${cx}`, `${cy}`)
      }

      cumulative += value

      $node = createSvgElement('path', {
        d: d.join(' '),
      })
    }

    let fill
    if (typeof opts.fill === 'string') {
      fill = opts.fill
    } else if (Array.isArray(opts.fill)) {
      fill = opts.fill?.[i] ?? opts.fill?.[0]
    } else if (typeof opts.fill === 'function') {
      fill = opts.fill(i)
    }

    if (fill) {
      $node.setAttribute('fill', fill)
    }

    el.appendChild($node)
  }
}
