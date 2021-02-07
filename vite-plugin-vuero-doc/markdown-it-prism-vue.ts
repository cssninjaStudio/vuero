import prism from 'prismjs'
import MarkdownIt from 'markdown-it'
// import loadLanguages from 'prismjs/components/index'
// const prism = require('prismjs')
const loadLanguages = require('prismjs/components/index')

const RE = /{([\d,-]+)}/
const wrapperRE = /^<pre .*?><code>/

function preWrapperPlugin(md: MarkdownIt) {
  const fence = md.renderer.rules.fence!
  md.renderer.rules.fence = (...args) => {
    const [tokens, idx] = args
    const token = tokens[idx]
    const rawCode = fence(...args)
    return `<div class="language-${token.info.trim()}">${rawCode}</div>`
  }
}

function lineNumberPlugin(md: MarkdownIt) {
  const fence = md.renderer.rules.fence!
  md.renderer.rules.fence = (...args) => {
    const rawCode = fence(...args)
    const code = rawCode.slice(
      rawCode.indexOf('<code>'),
      rawCode.indexOf('</code>')
    )

    const lines = code.split('\n')
    const lineNumbersCode = [...Array(lines.length - 1)]
      .map((line, index) => `<span class="line-number">${index + 1}</span><br>`)
      .join('')

    const lineNumbersWrapperCode = `<div class="line-numbers-wrapper">${lineNumbersCode}</div>`

    const finalCode = rawCode
      .replace(/<\/div>$/, `${lineNumbersWrapperCode}</div>`)
      .replace(/"(language-\w+)"/, '"$1 line-numbers-mode"')

    return finalCode
  }
}

function highlightLinePlugin(md: MarkdownIt) {
  const fence = md.renderer.rules.fence!
  md.renderer.rules.fence = (...args) => {
    const [tokens, idx, options] = args
    const token = tokens[idx]

    const rawInfo = token.info
    if (!rawInfo || !RE.test(rawInfo)) {
      return fence(...args)
    }

    const langName = rawInfo.replace(RE, '').trim()
    // ensure the next plugin get the correct lang.
    token.info = langName

    const lineNumbers = RE.exec(rawInfo)![1]
      .split(',')
      .map((v) => v.split('-').map((v) => parseInt(v, 10)))

    const code = options.highlight
      ? options.highlight(token.content, langName, '')
      : token.content

    const rawCode = code.replace(wrapperRE, '')
    const highlightLinesCode = rawCode
      .split('\n')
      .map((split, index) => {
        const lineNumber = index + 1
        const inRange = lineNumbers.some(([start, end]) => {
          if (start && end) {
            return lineNumber >= start && lineNumber <= end
          }
          return lineNumber === start
        })
        if (inRange) {
          return `<div class="highlighted">&nbsp;</div>`
        }
        return '<br>'
      })
      .join('')

    const highlightLinesWrapperCode = `<div class="highlight-lines">${highlightLinesCode}</div>`

    return highlightLinesWrapperCode + code
  }
}

function loadprismPlugin(name: string): void {
  try {
    require(`prismjs/plugins/${name}/prism-${name}`)
  } catch (e) {
    throw new Error(
      `Cannot load prism plugin "${name}". Please check the spelling.`
    )
  }
}

// required to make embedded highlighting work...
loadLanguages(['markup', 'css', 'javascript'])
loadprismPlugin('custom-class')

function wrap(code: string, lang: string): string {
  // if (lang === 'text') {
  //   code = escapeHtml(code)
  // }
  return `<pre v-pre><code>${code}</code></pre>`
}

export const highlight = (str: string, lang: string) => {
  if (!lang) {
    return wrap(str, 'text')
  }
  lang = lang.toLowerCase()
  const rawLang = lang
  if (lang === 'vue' || lang === 'html') {
    lang = 'markup'
  }
  if (lang === 'md') {
    lang = 'markdown'
  }
  if (lang === 'ts') {
    lang = 'typescript'
  }
  if (lang === 'py') {
    lang = 'python'
  }
  if (!prism.languages[lang]) {
    try {
      loadLanguages([lang])
    } catch (e) {
      console.warn(`Syntax highlight for language "${lang}" is not supported.`)
    }
  }
  if (prism.languages[lang]) {
    const code = prism.highlight(str, prism.languages[lang], lang)
    return wrap(code, rawLang)
  }
  return wrap(str, 'text')
}

export default function markdownItprism(md: MarkdownIt): void {
  prism.plugins.customClass.prefix('prism--')

  md.options.highlight = highlight

  highlightLinePlugin(md)
  preWrapperPlugin(md)
  lineNumberPlugin(md)
}
