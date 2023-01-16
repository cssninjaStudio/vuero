import { kebabCase } from 'scule'

const SELF_CLOSING_TAG_REGEX = /<([^\s></]+)([^>]+)\/>/g
const OPEN_TAG_REGEX = /<([^\s></]+)/g
const CLOSE_TAG_REGEX = /<\/([^\s></]+)/g

export function transformExampleMarkup(raw: string) {
  let output = raw
  let content: RegExpMatchArray | null = null
  if ((content = raw.match(/<!--example-->([\s\S]*?)<!--\/example-->/))) {
    const kebabContent = content[1]
      .replaceAll(SELF_CLOSING_TAG_REGEX, (substring, tag) => {
        return substring.replace('/>', `></${tag.trim()}>`)
      })
      .replaceAll(OPEN_TAG_REGEX, (substring) => {
        return `<${kebabCase(substring.substring(1).trim())}`
      })
      .replaceAll(CLOSE_TAG_REGEX, (substring) => {
        return `</${kebabCase(substring.substring(2).trim())}`
      })
      .replaceAll('&#x27;', "'")

    output = output.replace(content[1], kebabContent)
  }

  return output
}

export function transformSlots(source: string, condition: string = '') {
  if (source.includes('<!--code-->') && source.includes('<!--example-->')) {
    return `<template ${condition} #default>${source}`
      .replace(
        `<!--code-->`,
        `</template><template ${condition} #code>\n<slot name="code"><div v-pre>`
      )
      .replace(`<!--/code-->`, `</div></slot>\n</template>`)
      .replace(
        `<!--example-->`,
        `<template ${condition} #example>\n<slot name="example">`
      )
      .replace(`<!--/example-->`, `</slot>\n</template>`)
  }

  if (source.includes('<!--code-->')) {
    return `<template ${condition} #default>${source}`
      .replace(
        `<!--code-->`,
        `</template><template ${condition} #code>\n<slot name="code"><div v-pre>`
      )
      .replace(
        `<!--/code-->`,
        `</div></slot>\n</template>\n<template ${condition} #example><slot name="example"></slot></template>`
      )
  }

  if (source.includes('<!--example-->')) {
    return `<template ${condition} #default>${source}`
      .replace(
        `<!--example-->`,
        `</template><template ${condition} #example>\n<slot name="example">`
      )
      .replace(
        `<!--/example-->`,
        `</slot>\n</template>\n<template ${condition} #code><slot name="code"></slot></template>`
      )
  }

  return (
    `<template ${condition} #default>${source}</template>` +
    `<template ${condition} #example><slot name="example"></slot></template>` +
    `<template ${condition} #code><slot name="code"></slot></template>`
  )
}
