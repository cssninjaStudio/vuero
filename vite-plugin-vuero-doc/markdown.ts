import yaml from 'js-yaml'
import remarkShiki from '@stefanprobst/remark-shiki'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import remarkFrontmatter from 'remark-frontmatter'
import { getHighlighter, type IThemeRegistration, type Lang, type Theme } from 'shiki'
import { unified, type Processor } from 'unified'

const langs = ['vue', 'vue-html', 'typescript', 'bash', 'scss'] satisfies Lang[]

export async function createProcessor(theme: IThemeRegistration): Promise<Processor> {
  const highlighter = await getHighlighter({
    theme,
    langs,
  })

  return unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(() => (tree, file) => {
      if (tree.children[0].type === 'yaml') {
        // store frontmatter in vfile
        file.data.frontmatter = yaml.load(tree.children[0].value)
      }
    })
    .use(remarkGfm)
    .use(remarkShiki, { highlighter })
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
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
    })
    .use(rehypeStringify)
}

export async function createProcessors(
  theme:
    | Theme
    | {
        light: Theme
        dark: Theme
      }
): Promise<{ light: Processor; dark: Processor }> {
  return {
    light: await createProcessor(typeof theme === 'string' ? theme : theme.light),
    dark: await createProcessor(typeof theme === 'string' ? theme : theme.dark),
  }
}
