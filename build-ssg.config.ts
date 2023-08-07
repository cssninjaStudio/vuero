export const format: 'cjs' | 'esm' = 'esm'

export function generateStaticParams(): Record<
  string,
  () => Promise<Record<string, string | string[]>[]>
> {
  return {
    // '/path/with/dynamic/[slug]': async () => {
    //   return [{ slug: 'first-slug' }, { slug: 'second-slug' }, { slug: 'third-slug' }]
    // },
  }
}
