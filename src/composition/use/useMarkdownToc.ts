import { ref, onMounted, nextTick } from 'vue'

const ANCHOR_PREFIX = '⚝ '

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
        const anchors = markdownContainer.value.querySelectorAll('[id]')
        anchors.forEach((anchor) => {
          let title = ''

          if (
            anchor.textContent /*&&
            anchor.textContent.startsWith(ANCHOR_PREFIX)*/
          ) {
            title = anchor.textContent.replace(ANCHOR_PREFIX, '')
          }

          toc.value.push({
            id: anchor.id,
            level: parseInt(anchor.tagName.replace(/[a-z]+/i, '')),
            title,
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
