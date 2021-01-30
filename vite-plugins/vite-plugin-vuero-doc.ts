import type { Plugin, ResolvedConfig } from 'vite'
import MarkdownIt from 'markdown-it'
import matter from 'gray-matter'
import { compileTemplate } from '@vue/compiler-sfc'
import MarkdownPrismVue from './markdown-it-prism-vue'

interface Options {
  /**
   * Options passed to Markdown It
   */
  markdownItOptions?: MarkdownIt.Options
  /**
   * Plugins for Markdown It
   */
  markdownItUses?: (
    | MarkdownIt.PluginSimple
    | [MarkdownIt.PluginSimple | MarkdownIt.PluginWithOptions<any>, any]
    | any
  )[]
  /**
   * A function providing the Markdown It instance gets the ability to apply custom settings/plugins
   */
  markdownItSetup?: (MarkdownIt: MarkdownIt) => void
  /**
   * Class names for wrapper div
   *
   * @default 'markdown-body'
   */
  wrapperClasses?: string | string[]
  /**
   * Component name to wrapper with
   *
   * @default undefined
   */
  wrapperComponent?: string | undefined | null
  /**
   * Custom tranformations apply before and after the markdown transformation.
   */
  transforms?: {
    before?: (code: string, id: string) => string
    after?: (code: string, id: string) => string
  }
}

type ResolvedOptions = Required<Options>

function toArray<T>(n: T | T[]): T[] {
  if (!Array.isArray(n)) return [n]
  return n
}

function parseId(id: string) {
  const index = id.indexOf('?')
  if (index < 0) return id
  else return id.slice(0, index)
}

function VitePluginVueroDoc(options: Options = {}): Plugin {
  const resolved: ResolvedOptions = Object.assign(
    {
      markdownItOptions: {},
      markdownItUses: [],
      markdownItSetup: () => {},
      wrapperClasses: 'markdown-body',
      wrapperComponent: null,
      transforms: {},
    },
    {
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
      wrapperClasses: '',
      wrapperComponent: 'DocumentationItem',
      transforms: {
        after(sfc: string) {
          return sfc
            .replace('<!--code-->', '<template #code>')
            .replace('<!--/code-->', '</template>')
            .replace('<!--example-->', '<template #example>')
            .replace('<!--/example-->', '</template>')
        },
      },
      markdownItSetup(md: MarkdownIt) {
        md.use(require('markdown-it-anchor'), {
          // permalink: true,
          // permalinkBefore: true,
          // permalinkSymbol: '⚝',
        })
        md.use(MarkdownPrismVue)
      },
    },
    options
  )

  const markdown = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    ...resolved.markdownItOptions,
  })

  resolved.markdownItUses.forEach((e) => {
    const [plugin, options] = toArray(e)

    markdown.use(plugin, options)
  })

  resolved.markdownItSetup(markdown)

  const wrapperClasses = toArray(resolved.wrapperClasses)
    .filter((i) => i)
    .join(' ')
  let config: ResolvedConfig | undefined

  return {
    name: 'vite-plugin-vuero-doc',
    enforce: 'pre',
    configResolved(_config) {
      config = _config
    },
    transform(raw, id) {
      const path = parseId(id)

      if (!path.endsWith('.md')) return raw

      if (resolved.transforms.before) raw = resolved.transforms.before(raw, id)

      const { content: md, data: frontmatter } = matter(raw)
      let sfc = markdown.render(md, {})
      if (resolved.wrapperClasses)
        sfc = `<div class="${wrapperClasses}">${sfc}</div>`
      if (resolved.wrapperComponent)
        sfc = `<${resolved.wrapperComponent} :frontmatter="frontmatter">${sfc}</${resolved.wrapperComponent}>`

      if (resolved.transforms.after) sfc = resolved.transforms.after(sfc, id)

      let { code: result } = compileTemplate({
        filename: path,
        id: path,
        source: sfc,
        transformAssetUrls: false,
      })

      result = result.replace('export function render', 'function render')
      result += `\nconst __matter = ${JSON.stringify(frontmatter)};`
      result += `\nconst methods = {
        timeout(cb, t = 1000) { setTimeout(cb, t); },
        reset() { this.frontmatter = ${JSON.stringify(frontmatter)}; },
        clickMe(event) { 
          const text = event.target.innerText; 
          if (text === 'Clicked!') return;
          
          event.target.innerText = 'Clicked!'; 
          this.timeout(() => {
            event.target.innerText = text;
          })
        },
        formatAsPercent (value) { return value + '%' },
        clickMyText(event) { 
          const inner = event.currentTarget.querySelector('.text');
          if (!inner) return;
          const text = inner.innerText; 
          if (text === 'Clicked!') return;
          
          inner.innerText = 'Clicked!'; 
          this.timeout(() => {
            inner.innerText = text;
          })
        },
      }`
      result += '\nconst data = () => ({ frontmatter: __matter });'
      result += '\nconst __script = { render, data, methods };'

      if (!config?.isProduction)
        result += `\n__script.__hmrId = ${JSON.stringify(path)};`

      result += '\nexport default __script;'

      return result
    },
  }
}

export default VitePluginVueroDoc
