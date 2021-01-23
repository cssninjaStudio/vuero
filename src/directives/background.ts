import type { App } from 'vue'

export default function background(app: App) {
  app.directive('background', {
    getSSRProps(binding, vnode) {
      return {}
    },
    updated(el: HTMLElement, bindings) {
      const src = bindings.value.src
      const placeholder = bindings.value.placeholder

      if (src) {
        const image = new Image()

        if (placeholder) {
          image.onerror = () => {
            image.onerror = null
            el.style.backgroundImage = `url(${placeholder})`
          }
        }

        image.onload = () => {
          image.onload = null
          el.style.backgroundImage = `url(${src})`
        }

        image.src = src
      }
    },
    mounted(el: HTMLElement, bindings) {
      const src = bindings.value.src
      const placeholder = bindings.value.placeholder

      if (src) {
        const image = new Image()

        if (placeholder) {
          image.onerror = () => {
            image.onerror = null
            el.style.backgroundImage = `url(${placeholder})`
          }
        }

        image.onload = () => {
          image.onload = null
          el.style.backgroundImage = `url(${src})`
        }

        image.src = src
      }
    },
  })
}
