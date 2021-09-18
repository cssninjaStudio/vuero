export function HSLToHex(hslCss: string) {
  const sep = hslCss.indexOf(',') > -1 ? ',' : ' '
  const hsl = hslCss.substr(4).split(')')[0].split('(')[1].split(sep)

  const hString = hsl[0]
  let h = 0
  let s = parseFloat(hsl[1].substr(0, hsl[1].length - 1))
  let l = parseFloat(hsl[2].substr(0, hsl[2].length - 1))

  // Strip label and convert to degrees (if necessary)
  if (hString.indexOf('deg') > -1)
    h = parseFloat(hString.substr(0, hString.length - 3))
  else if (hString.indexOf('rad') > -1)
    h = Math.round(
      parseFloat(hString.substr(0, hString.length - 3)) * (180 / Math.PI)
    )
  else if (hString.indexOf('turn') > -1)
    h = Math.round(parseFloat(hString.substr(0, hString.length - 4)) * 360)
  else h = parseFloat(hString)

  if (h >= 360) h %= 360

  s /= 100
  l /= 100

  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = l - c / 2
  let r = 0
  let g = 0
  let b = 0

  if (0 <= h && h < 60) {
    r = c
    g = x
    b = 0
  } else if (60 <= h && h < 120) {
    r = x
    g = c
    b = 0
  } else if (120 <= h && h < 180) {
    r = 0
    g = c
    b = x
  } else if (180 <= h && h < 240) {
    r = 0
    g = x
    b = c
  } else if (240 <= h && h < 300) {
    r = x
    g = 0
    b = c
  } else if (300 <= h && h < 360) {
    r = c
    g = 0
    b = x
  }

  // Having obtained RGB, convert channels to hex
  let rString = Math.round((r + m) * 255).toString(16)
  let gString = Math.round((g + m) * 255).toString(16)
  let bString = Math.round((b + m) * 255).toString(16)

  // Prepend 0s, if necessary
  if (rString.length == 1) rString = '0' + rString
  if (gString.length == 1) gString = '0' + gString
  if (bString.length == 1) bString = '0' + bString

  return '#' + rString + gString + bString
}
