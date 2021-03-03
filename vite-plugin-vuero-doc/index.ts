import type { Plugin, ResolvedConfig } from 'vite'
import MarkdownIt from 'markdown-it'
import matter from 'gray-matter'
import { compileTemplate, parse, SFCTemplateBlock } from '@vue/compiler-sfc'
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
      markdownItUses: [require('markdown-it-anchor'), MarkdownPrismVue],
      markdownItSetup: () => {},
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
    },
    options
  )

  const markdown = new MarkdownIt({
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
  let vuePlugin: Plugin

  function markdownToVue(id: string, raw: string) {
    if (resolved.transforms.before) raw = resolved.transforms.before(raw, id)

    const path = parseId(id)
    const { content, data: frontmatter } = matter(raw)

    let sfc = markdown.render(content, {})

    if (resolved.wrapperClasses)
      sfc = `<div class="${resolved.wrapperClasses}">${sfc}</div>`
    if (resolved.wrapperComponent)
      sfc = `<${resolved.wrapperComponent} :frontmatter="frontmatter">${sfc}</${resolved.wrapperComponent}>`
    if (resolved.transforms.after) sfc = resolved.transforms.after(sfc, id)

    const template = parse(`<template>${sfc}</template>`, {
      filename: path,
      sourceMap: true,
    }).descriptor.template as SFCTemplateBlock

    const { code, errors } = compileTemplate({
      filename: path,
      id: path,
      source: template.content,
      preprocessLang: template.lang,
      transformAssetUrls: false,
    })

    if (errors.length) {
      console.error(errors)
      console.error('---MARKDOWN---', id)

      if (config.isProduction)
        throw new Error(`Markdown: file "${id}" have errors`)
    }

    let result = code.replace('export function render', 'function render')
    result += `\nconst __matter = ${JSON.stringify(frontmatter)};`
    result += '\nconst data = () => ({ frontmatter: __matter });'
    result += '\nconst __script = { render, data };'

    if (!config?.isProduction)
      result += `\n__script.__hmrId = ${JSON.stringify(path)};`

    result += '\nexport default __script;'

    return result
  }

  return {
    name: 'vite-plugin-vuero-doc',
    enforce: 'pre',
    configResolved(_config) {
      config = _config
      vuePlugin = config.plugins.find((p) => p.name === 'vite:vue')
    },
    transform(raw, id) {
      if (id.endsWith('.md')) return markdownToVue(id, raw)
    },
    async handleHotUpdate(ctx) {
      // hot reload .md files as .vue files
      if (ctx.file.endsWith('.md')) {
        return vuePlugin.handleHotUpdate!({
          ...ctx,
          async read() {
            return markdownToVue(ctx.file, await ctx.read())
          },
        })
      }
    },
  }
}

export default VitePluginVueroDoc
