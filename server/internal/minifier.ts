/* eslint-disable @typescript-eslint/consistent-type-imports */

let _minifier: any
export async function lazyMinifier<
  M extends 'terser' | 'minify-html',
  R extends M extends 'terser'
    ? typeof import('html-minifier-terser').minify
    : typeof import('@minify-html/node').minify,
>(minifier: M): Promise<R> {
  if (_minifier) return _minifier

  switch (minifier) {
    case 'terser':
      _minifier = await import('html-minifier-terser').then(m => m.minify)
      return _minifier
    case 'minify-html':
      _minifier = await import('@minify-html/node').then(m => m.minify)
      return _minifier
  }

  throw new Error(`Unknown minifier: ${minifier}`)
}
