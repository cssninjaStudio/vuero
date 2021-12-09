import type { Ref } from 'vue'
import { ref, watchEffect } from 'vue'

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

export function useMarkdownToc(container: Ref<HTMLElement | undefined>) {
  const toc = ref<TocItem[]>([])

  watchEffect(() => {
    if (container.value) {
      const anchors = container.value.querySelectorAll(HEADER_SELECTORS.join(', '))
      anchors.forEach((anchor) => {
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
