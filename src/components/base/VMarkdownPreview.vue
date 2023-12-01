<script lang="ts">
import type { BuiltinLanguage, BuiltinTheme } from 'shikiji'
import { h, type PropType } from 'vue'
import VPlaceload, {
  type VPlaceloadProps,
} from '/@src/components/base/VPlaceload.vue'

async function loadModules() {
  const [
    rehypeShiki,
    rehypeExternalLinks,
    rehypeRaw,
    [rehypeSanitize, defaultSchema],
    rehypeStringify,
    rehypeSlug,
    rehypeAutolinkHeadings,
    remarkGfm,
    remarkParse,
    remarkRehype,
    unified,
  ] = await Promise.all([
    import('rehype-shikiji').then(m => m.default),
    import('rehype-external-links').then(m => m.default),
    import('rehype-raw').then(m => m.default),
    import('rehype-sanitize').then(m => [m.default, m.defaultSchema] as const),
    import('rehype-stringify').then(m => m.default),
    import('rehype-slug').then(m => m.default),
    import('rehype-autolink-headings').then(m => m.default),
    import('remark-gfm').then(m => m.default),
    import('remark-parse').then(m => m.default),
    import('remark-rehype').then(m => m.default),
    import('unified').then(m => m.unified),
  ])

  return {
    rehypeShiki,
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
      type: String as PropType<undefined | 'large' | 'medium' | 'small'>,
      default: undefined,
    },
    maxWidth: {
      type: String as PropType<undefined | 'fullwidth' | 'medium' | 'small'>,
      default: undefined,
    },
    shiki: {
      type: Object as PropType<{
        langs: BuiltinLanguage[]
        theme:
          | BuiltinTheme
          | {
            light: BuiltinTheme
            dark: BuiltinTheme
          }
      }>,
      default: () => ({
        theme: {
          light: 'min-light',
          dark: 'github-dark',
        },
        langs: ['vue', 'vue-html', 'typescript', 'bash', 'scss'],
      }),
    },
    placeholder: {
      type: Object as PropType<VPlaceloadProps>,
      default: () => ({
        height: '100px',
      }),
    },
  },
  setup(props) {
    const processor = ref<any>()
    const rendered = ref(false)
    const html = ref('')

    watchEffect(async () => {
      const langs = props.shiki.langs
      const themes = {
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
        rehypeShiki,
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
        unified,
      } = await loadModules()

      processor.value = unified()
        .use(remarkParse)
        .use(remarkGfm)
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
        .use(rehypeShiki, {
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
        })
        .use(rehypeStringify)
    })

    watchEffect(async () => {
      const _source = unref(props.source)
      const _processor = unref(processor)
      if (!_processor) return
      if (!_source) return

      const result = (await _processor.process(_source)).toString()
      rendered.value = true

      html.value = result
    })

    const classes = computed(() => {
      return {
        'markdown content': true,
        'is-max-width-fullwidth': props.maxWidth === 'fullwidth',
        'is-max-width-medium': props.maxWidth === 'medium',
        'is-max-width-small': props.maxWidth === 'small',
        'is-small': props.size === 'small',
        'is-medium': props.size === 'medium',
        'is-large': props.size === 'large',
      }
    })

    return () => {
      if (!rendered.value) {
        return h(VPlaceload, {
          ...props.placeholder,
          class: {
            'is-max-width-fullwidth': props.maxWidth === 'fullwidth',
            'is-max-width-medium': props.maxWidth === 'medium',
            'is-max-width-small': props.maxWidth === 'small',
          },
        })
      }
      return h('div', {
        class: classes.value,
        innerHTML: html.value,
      })
    }
  },
})
</script>

<style lang="scss" scoped>
.is-max-width-full {
  max-width: 100%;
}

.is-max-width-medium {
  max-width: 48rem;
}

.is-max-width-small {
  max-width: 42rem;
}

.markdown {
  :deep(a) {
    color: var(--primary);
  }

  &.is-small {
    font-size: 0.875rem;

    :deep(pre) {
      padding: 0.5rem 0.8rem 0.4rem;
    }
  }

  :deep(.toc-link-anchor) {
    color: var(--light-text);
    margin-inline-start: 0.5rem;
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

    // code {
    //   counter-reset: step;
    //   counter-increment: step 0;
    // }

    // code .line::before {
    //   content: counter(step);
    //   counter-increment: step;
    //   width: 1rem;
    //   margin-inline-end: 1.5rem;
    //   display: inline-block;
    //   text-align: inset-inline-end;
    //   color: #898d98;
    // }
  }
}
</style>
