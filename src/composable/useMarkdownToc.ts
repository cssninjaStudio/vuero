import { ref, onMounted, nextTick } from 'vue'

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

export default function useMarkdownToc() {
  const markdownContainer = ref<HTMLElement | null>(null)
  const toc = ref<TocItem[]>([])

  onMounted(() => {
    nextTick(() => {
      if (markdownContainer.value) {
        const anchors = markdownContainer.value.querySelectorAll(
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
  })

  return {
    markdownContainer,
    toc,
  }
}
