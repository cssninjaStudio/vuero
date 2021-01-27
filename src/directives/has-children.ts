import type { App } from 'vue'

export default function hasChildren(app: App) {
  app.directive('has-children', {
    getSSRProps(binding, vnode) {
      return {}
    },
    mounted(el: HTMLElement) {
      const link = el.querySelector<HTMLElement>('.parent-link')
      const content = el.querySelector<HTMLElement>('ul')
      const linkExactActive = el.querySelector<HTMLElement>(
        '.router-link-exact-active'
      )

      if (link && content) {
        if (linkExactActive) {
          el.classList.add('active')
        } else {
          el.classList.remove('active')
        }

        link.onclick = (event) => {
          event.preventDefault()

          const isActive = el.classList.contains('active')

          if (isActive) {
            //TODO: @stf: make child-menu exclusive, menu should close on self click
            document
              .querySelectorAll('.has-children')
              .forEach((element) => element.classList.remove('active'))
            el.classList.remove('active')
          } else {
            el.classList.add('active')
          }
        }
      }
    },
  })
}
