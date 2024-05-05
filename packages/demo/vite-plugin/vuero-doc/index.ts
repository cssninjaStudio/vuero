import type { Plugin, ResolvedConfig } from 'vite'
import type {
  ThemeRegistration,
  ThemeRegistrationRaw,
  BuiltinTheme,
  StringLiteralUnion,
} from 'shiki'

import { join, basename } from 'pathe'
import { compileTemplate, parse } from '@vue/compiler-sfc'
import MagicString from 'magic-string'

import { createProcessor } from './markdown'
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
    themes: Partial<
      Record<
        string,
        ThemeRegistration | ThemeRegistrationRaw | StringLiteralUnion<BuiltinTheme>
      >
    >
  }
  sourceMeta?: {
    enabled?: boolean
    editProtocol?: string
  }
}

export function VueroMarkdownDoc(options: PluginOptions) {
  let config: ResolvedConfig | undefined
  let processor: Awaited<ReturnType<typeof createProcessor>> | undefined

  const cwd = process.cwd()
  const pathPrefix = options.pathPrefix ? join(cwd, options.pathPrefix) : cwd

  async function markdownToVue(id: string, raw: string) {
    const path = parseId(id)

    // transform example markup to use kebab-case without self-closing elements.
    // this is needed because rehype-raw requires valid html (only some tags are self-closable)
    const input = transformExampleMarkup(raw)

    // process markdown with remark
    if (!processor) processor = await createProcessor(options.shiki.themes)

    const vFile = await processor?.process(input)

    const content = vFile.toString()
    const frontmatter = vFile.data?.frontmatter ?? {}

    // replace code/example slots placeholders
    const slot = transformSlots(content)

    // wrap content in wrapper component default slot
    const sfc = [
      `<template>`,
      `  <${options.wrapperComponent} :frontmatter="frontmatter" :source-meta="sourceMeta">`,
      `    ${slot}`,
      `  </${options.wrapperComponent}>`,
      `</template>`,
    ].join('\n')

    // parse template with vue sfc compiler
    const result = parse(sfc, {
      filename: path,
      sourceMap: Boolean(config?.build?.sourcemap),
      templateParseOptions: {
        isCustomElement: tag => ['iconify-icon'].includes(tag),
      },
    })

    if (result.errors.length || result.descriptor.template === null) {
      console.error(result.errors)

      throw new Error(`Markdown: unable to parse virtual file generated for "${id}"`)
    }

    // compile template with vue sfc compiler
    const isSSR = Boolean(config?.build?.ssr)
    const { code, errors } = compileTemplate({
      filename: path,
      id: path,
      ast: result.descriptor.template.ast,
      source: result.descriptor.template.content,
      preprocessLang: result.descriptor.template.lang,
      ssr: isSSR,
      ssrCssVars: result.descriptor?.cssVars,
      transformAssetUrls: false,
      isProd: config?.isProduction,
      compilerOptions: {
        isCustomElement: tag => ['iconify-icon'].includes(tag),
      },
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

    const s = new MagicString(code, {
      filename: path,
    })

    s.prepend(`import { reactive } from 'vue'\n`)
    s.prepend(`import { useDarkmode } from '/@src/composables/darkmode'\n`)

    if (isSSR) {
      s.replace('export function ssrRender', 'function ssrRender')
    }
    else {
      s.replace('export function render', 'function render')
    }

    s.append(`const __frontmatter = ${JSON.stringify(frontmatter)};\n`)
    s.append(`const setup = () => ({\n`)
    s.append(`  frontmatter: reactive(__frontmatter),\n`)
    s.append(`  darkmode: useDarkmode(),\n`)
    s.append(`  sourceMeta: ${sourceMeta},\n`)
    s.append(`});\n`)

    if (isSSR) {
      s.append(`const __script = { ssrRender, setup };\n`)
    }
    else {
      s.append(`const __script = { render, setup };\n`)
    }

    if (!config?.isProduction) {
      s.append([
        `__script.__hmrId = ${JSON.stringify(path)};`,
        'if (import.meta.hot) {',
        '  typeof __VUE_HMR_RUNTIME__ !== "undefined" && __VUE_HMR_RUNTIME__.createRecord(__script.__hmrId, __script);',
        '  import.meta.hot.accept((mod) => {',
        '    if (!mod)',
        '      return;',
        '    const { default: updated, _rerender_only: _rerender_only2 } = mod;',
        '    if (_rerender_only2) {',
        '      __VUE_HMR_RUNTIME__.rerender(updated.__hmrId, updated.render);',
        '    } else {',
        '      __VUE_HMR_RUNTIME__.reload(updated.__hmrId, updated);',
        '    }',
        '  });',
        '}',
        '',
      ].join('\n'))
    }

    s.append(`export default __script;\n`)

    return {
      code: s.toString(),
      map: config?.build?.sourcemap ? s.generateMap() : null,
    }
  }

  return {
    name: 'vite-plugin-vuero-doc',
    enforce: 'pre',
    configResolved(_config) {
      config = _config
    },
    transform(raw, id) {
      if (id.endsWith('.md') && id.startsWith(pathPrefix)) {
        return markdownToVue(id, raw)
      }
    },
  } satisfies Plugin
}

export default VueroMarkdownDoc
