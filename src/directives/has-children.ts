import type { App } from 'vue'

export default function hasChildren(app: App) {
  app.directive('has-children', {
    mounted(el: HTMLElement) {
      const link = el.querySelector('.parent-link') as HTMLElement
      const content = el.querySelector('ul') as HTMLElement

      if (link && content) {
        link.onclick = (event) => {
          event.preventDefault()
          const isActive = el.classList.contains('active')

          if (isActive) {
            el.classList.remove('active')
          } else {
            el.classList.add('active')
          }
        }
      }
    },
  })
}
