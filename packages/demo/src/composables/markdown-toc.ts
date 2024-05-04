import type { Ref } from 'vue'

const HEADER_SELECTORS = [
  'h1[id]',
  'h2[id]',
  'h3[id]',
  'h4[id]',
  'h5[id]',
  'h6[id]',
  'a[name]',
]

export type TocItem = {
  id: string
  title: string
  level: number
}

export function useMarkdownToc(target: Ref<HTMLElement | undefined>) {
  const toc = ref<TocItem[]>([])

  watchEffect(() => {
    if (target.value) {
      const anchors = target.value.querySelectorAll(HEADER_SELECTORS.join(', '))
      anchors.forEach((anchor) => {
        if (anchor.classList.contains('toc-ignore')) return

        toc.value.push({
          id: anchor.id,
          level: parseInt(anchor.tagName.replace(/[a-z]+/i, '') || '1'),
          title: anchor.textContent || '',
        })
      })
    }
  })

  return toc
}
