import yaml from 'js-yaml'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import remarkFrontmatter from 'remark-frontmatter'
import rehypeShikiji from 'rehype-shikiji'
import type {
  ThemeRegistration,
  ThemeRegistrationRaw,
  BuiltinLanguage,
  BuiltinTheme,
  StringLiteralUnion,
} from 'shikiji'
import { unified } from 'unified'
import type { Literal, Parent } from 'unist'

const langs = [
  'vue',
  'vue-html',
  'typescript',
  'bash',
  'scss',
] satisfies BuiltinLanguage[]

export async function createProcessor(
  themes: Partial<
    Record<
      string,
      ThemeRegistration | ThemeRegistrationRaw | StringLiteralUnion<BuiltinTheme>
    >
  >,
) {
  return unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(() => (tree, file) => {
      if ('children' in tree) {
        const parent = tree as Parent
        if (parent.children[0].type === 'yaml') {
          // store frontmatter in vfile
          const value = (parent.children[0] as Literal).value
          file.data.frontmatter = typeof value === 'string' ? yaml.load(value) : undefined
        }
      }
    })
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeShikiji, {
      themes,
      langs,
    })
    .use(rehypeExternalLinks, { rel: ['nofollow'], target: '_blank' })
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      behavior: 'append',
      content: {
        type: 'element',
        tagName: 'i',
        properties: {
          className: ['iconify toc-link-anchor'],
          dataIcon: 'feather:link',
        },
        children: [],
      },
      test: (node) => {
        if (
          Array.isArray(node.properties?.className)
          && node.properties?.className?.includes('toc-ignore')
        ) {
          return false
        }
        return Boolean(node.properties?.id)
      },
    })
    .use(rehypeStringify)
}
