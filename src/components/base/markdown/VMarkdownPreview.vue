<script lang="ts">
import type { Lang, Theme } from 'shiki-es'
import type { Processor } from 'unified'
import type { PropType } from 'vue'
import { useDarkmode } from '/@src/stores/darkmode'

async function loadModules() {
  const [
    remarkShiki,
    rehypeExternalLinks,
    rehypeRaw,
    [rehypeSanitize, defaultSchema],
    rehypeStringify,
    rehypeSlug,
    rehypeAutolinkHeadings,
    remarkGfm,
    remarkParse,
    remarkRehype,
    getHighlighter,
    unified,
  ] = await Promise.all([
    import('@stefanprobst/remark-shiki').then((m) => m.default),
    import('rehype-external-links').then((m) => m.default),
    import('rehype-raw').then((m) => m.default),
    import('rehype-sanitize').then((m) => [m.default, m.defaultSchema] as const),
    import('rehype-stringify').then((m) => m.default),
    import('rehype-slug').then((m) => m.default),
    import('rehype-autolink-headings').then((m) => m.default),
    import('remark-gfm').then((m) => m.default),
    import('remark-parse').then((m) => m.default),
    import('remark-rehype').then((m) => m.default),
    import('shiki-es').then((m) => m.getHighlighter),
    import('unified').then((m) => m.unified),
  ])

  return {
    remarkShiki,
    rehypeExternalLinks,
    rehypeRaw,
    rehypeSanitize,
    defaultSchema,
    rehypeStringify,
    rehypeSlug,
    rehypeAutolinkHeadings,
    remarkGfm,
    remarkParse,
    remarkRehype,
    getHighlighter,
    unified,
  }
}

export default defineComponent({
  name: 'VMarkdownPreview',
  props: {
    source: {
      type: String,
      default: '',
    },
    size: {
      type: String as PropType<'full' | 'medium' | 'small'>,
      default: 'full',
    },
    shiki: {
      type: Object as PropType<{
        langs: Lang[]
        theme:
          | Theme
          | {
              light: Theme
              dark: Theme
            }
      }>,
      default: () => ({
        theme: {
          light: 'min-light',
          dark: 'github-dark-dimmed',
        },
        langs: ['vue', 'vue-html', 'typescript', 'bash', 'scss'],
      }),
    },
  },
  setup(props) {
    const processor = ref<Processor>()
    const darkmode = useDarkmode()

    watchEffect(async () => {
      const isDark = darkmode.isDark
      const langs = props.shiki.langs
      const theme = {
        light:
          typeof props.shiki.theme === 'string'
            ? props.shiki.theme
            : props.shiki.theme.light,
        dark:
          typeof props.shiki.theme === 'string'
            ? props.shiki.theme
            : props.shiki.theme.dark,
      }

      const {
        remarkShiki,
        rehypeExternalLinks,
        rehypeRaw,
        rehypeSanitize,
        defaultSchema,
        rehypeStringify,
        rehypeSlug,
        rehypeAutolinkHeadings,
        remarkGfm,
        remarkParse,
        remarkRehype,
        getHighlighter,
        unified,
      } = await loadModules()
      const highlighter = await getHighlighter({
        theme: isDark ? theme.dark : theme.light,
        langs,
      })

      processor.value = unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkShiki, { highlighter })
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeSanitize, {
          ...defaultSchema,
          attributes: {
            ...defaultSchema.attributes,
            pre: [...(defaultSchema.attributes?.pre || []), ['className'], ['style']],
            code: [...(defaultSchema.attributes?.code || []), ['className'], ['style']],
            i: [...(defaultSchema.attributes?.i || []), ['className']],
            span: [
              ...(defaultSchema.attributes?.span || []),
              ['className'],
              ['style'],
              ['dataHint'],
            ],
          },
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
        })
        .use(rehypeStringify)
    })

    const html = computed(() => {
      if (!processor.value) return ''
      if (!props.source) return ''

      return processor.value.processSync(props.source).toString()
    })

    const classes = computed(() => {
      return {
        'markdown content': true,
        'is-markdown-full': props.size === 'full',
        'is-markdown-medium': props.size === 'medium',
        'is-markdown-small': props.size === 'small',
      }
    })

    return () =>
      h('div', {
        class: classes.value,
        innerHTML: html.value,
      })
  },
})
</script>

<style lang="scss" scoped>
.markdown {
  &.is-markdown-full {
    max-width: 100%;
  }

  &.is-markdown-medium {
    max-width: 48rem;
  }

  &.is-markdown-small {
    max-width: 42rem;
  }

  :deep(a) {
    color: var(--primary);
  }

  :deep(.toc-link-anchor) {
    color: var(--light-text);
    margin-left: 0.5rem;
    font-size: 1rem;
    transition: color 0.2s;
    outline: none;

    &:hover,
    &:focus {
      color: var(--primary);
    }
  }

  :deep(.shiki) {
    border-radius: var(--radius-large);

    code {
      counter-reset: step;
      counter-increment: step 0;
    }

    code .line::before {
      content: counter(step);
      counter-increment: step;
      width: 1rem;
      margin-right: 1.5rem;
      display: inline-block;
      text-align: right;
      color: #898d98;
    }
  }
}
</style>
