export function createSvgElement(tag: string, attrs: any): SVGElement {
  const e = document.createElementNS('http://www.w3.org/2000/svg', tag)
  for (const key of Object.keys(attrs)) {
    e.setAttribute(key, attrs[key])
  }
  return e
}
