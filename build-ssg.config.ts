import type { Format, StaticParams, HTMLMinifierConfig } from './build-ssg.types'

export const format: Format = 'esm'

export const htmlMinifier: HTMLMinifierConfig = {
  minifier: 'minify-html',
  minifyHtmlOptions: {
    keep_comments: true,
    minify_js: true,
  },
}

export function generateStaticParams(): StaticParams {
  return {
    // '/path/with/dynamic/[slug]': async () => {
    //   return [{ slug: 'first-slug' }, { slug: 'second-slug' }, { slug: 'third-slug' }]
    // },
  }
}
