import type { Options } from 'html-minifier-terser'
import type { minify } from '@minify-html/node'

type ArgsType<T> = T extends (...args: infer U) => any ? U : never

export type Format = 'cjs' | 'esm'
export type StaticParams = Record<
  string,
  () => Promise<Record<string, string | string[]>[]>
>

export type HTMLMinifierConfig =
  | {
    minifier: false
  }
  | {
    minifier: 'terser'
    terserOptions: Options
  }
  | {
    minifier: 'minify-html'
    minifyHtmlOptions: ArgsType<typeof minify>[1]
  }
