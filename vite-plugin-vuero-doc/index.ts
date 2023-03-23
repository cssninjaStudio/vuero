import type { Plugin, ResolvedConfig } from 'vite'
import type { Processor } from 'unified'
import type { Theme } from 'shiki'

import { join, basename } from 'pathe'
import { compileTemplate, parse } from '@vue/compiler-sfc'

import { createProcessors } from './markdown'
import { transformExampleMarkup, transformSlots } from './transform'

function parseId(id: string) {
  const index = id.indexOf('?')
  if (index < 0) return id
  else return id.slice(0, index)
}

export interface PluginOptions {
  pathPrefix?: string
  wrapperComponent: string
  shiki: {
    theme:
      | Theme
      | {
          light: Theme
          dark: Theme
        }
  }
  sourceMeta?: {
    enabled?: boolean
    editProtocol?: string
  }
}

export function VitePluginVueroDoc(options: PluginOptions) {
  let config: ResolvedConfig | undefined
  let processors: { light: Processor; dark: Processor } | undefined

  const cwd = process.cwd()
  const pathPrefix = options.pathPrefix ? join(cwd, options.pathPrefix) : cwd

  async function markdownToVue(id: string, raw: string) {
    const path = parseId(id)

    // transform example markup to use kebab-case without self-closing elements.
    // this is needed because rehype-raw requires valid html (only some tags are self-closable)
    const input = transformExampleMarkup(raw)

    // process markdown with remark
    if (!processors) processors = await createProcessors(options.shiki.theme)

    const [vFileLight, vFileDark] = await Promise.all([
      processors.light.process(input),
      processors.dark.process(input),
    ])

    const contentLight = vFileLight.toString()
    const contentDark = vFileDark.toString()
    const frontmatter = vFileLight.data?.frontmatter ?? {}

    // replace code/example slots placeholders
    const slotLight = transformSlots(contentLight, 'v-if="!darkmode.isDark"')
    const slotDark = transformSlots(contentDark, 'v-if="darkmode.isDark"')

    // wrap content in wrapper component default slot
    const sfc = [
      `<template>`,
      `  <${options.wrapperComponent} :frontmatter="frontmatter" :source-meta="sourceMeta">`,
      `    ${slotLight}`,
      `    ${slotDark}`,
      `  </${options.wrapperComponent}>`,
      `</template>`,
    ].join('\n')

    // parse template with vue sfc compiler
    const result = parse(sfc, {
      filename: path,
      sourceMap: true,
    })

    if (result.errors.length || result.descriptor.template === null) {
      console.error(result.errors)

      throw new Error(`Markdown: unable to parse virtual file generated for "${id}"`)
    }

    // compile template with vue sfc compiler
    const { code, errors } = compileTemplate({
      filename: path,
      id: path,
      source: result.descriptor.template.content,
      preprocessLang: result.descriptor.template.lang,
      transformAssetUrls: false,
    })

    if (errors.length) {
      console.error(errors)

      throw new Error(`Markdown: unable to compile virtual file "${id}"`)
    }

    // source is used to display edit source link in the docs
    let sourceMeta = 'undefined'
    if (options.sourceMeta?.enabled) {
      sourceMeta = JSON.stringify({
        relativePath: path.substring(cwd.length),
        basename: basename(path),
        path: config?.isProduction ? '' : path,
        editProtocol: config?.isProduction ? '' : options.sourceMeta.editProtocol,
      })
    }

    // inject frontmatter/darkmode and hmrId into the compiled render function
    const output = [
      `import { reactive } from 'vue'`,
      `import { useDarkmode } from '/@src/stores/darkmode'`,

      code.replace('export function render', 'function render'),

      `const __frontmatter = ${JSON.stringify(frontmatter)};`,
      `const setup = () => ({`,
      `  frontmatter: reactive(__frontmatter),`,
      `  darkmode: useDarkmode(),`,
      `  sourceMeta: ${sourceMeta},`,
      `});`,
      `const __script = { render, setup };`,

      config?.isProduction ? '' : `__script.__hmrId = ${JSON.stringify(path)};`,
      `export default __script;`,
    ].join('\n')

    return output
  }

  return {
    name: 'vite-plugin-vuero-doc',
    enforce: 'pre',
    configResolved(_config) {
      config = _config
    },
    async transform(raw, id) {
      if (id.endsWith('.md') && id.startsWith(pathPrefix)) {
        return await markdownToVue(id, raw)
      }
    },
  } satisfies Plugin
}

export default VitePluginVueroDoc
