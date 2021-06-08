import type { Ref } from 'vue'
import { ref, watchEffect } from 'vue'

const HEADER_SELECTORS = [
  'h1[id]',
  'h2[id]',
  'h3[id]',
  'h4[id]',
  'h5[id]',
  'h6[id]',
]

export type TocItem = {
  id: string
  title: string
  level: number
}

export default function useMarkdownToc(container: Ref<HTMLElement | null>) {
  const toc = ref<TocItem[]>([])

  watchEffect(() => {
    if (container.value) {
      const anchors = container.value.querySelectorAll(
        HEADER_SELECTORS.join(', ')
      )
      anchors.forEach((anchor) => {
        toc.value.push({
          id: anchor.id,
          level: parseInt(anchor.tagName.replace(/[a-z]+/i, '')),
          title: anchor.textContent || '',
        })
      })
    }
  })

  return toc
}
