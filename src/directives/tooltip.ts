import type { Directive, DirectiveHook } from 'vue'

const onUpdate: DirectiveHook = (el: HTMLElement, bindings) => {
  const value = bindings.value
  if (typeof value === 'string') {
    el.dataset.hint = value
  } else {
    el.dataset.hint = ''
  }
}
const onMounted: DirectiveHook = (el: HTMLElement, bindings) => {
  const value = bindings.value
  let placement = 'top'
  let color = ''
  let shape = ''

  if (bindings.modifiers.bottom) {
    placement = 'bottom'
  }

  if (bindings.modifiers.left) {
    placement += '-left'
  } else if (bindings.modifiers.right) {
    placement += '-right'
  }

  if (bindings.modifiers.light) {
    color = 'hint--light'
  } else if (bindings.modifiers.primary) {
    color = 'hint--primary'
  } else if (bindings.modifiers.info) {
    color = 'hint--info'
  } else if (bindings.modifiers.success) {
    color = 'hint--success'
  } else if (bindings.modifiers.warning) {
    color = 'hint--warning'
  } else if (bindings.modifiers.error) {
    color = 'hint--error'
  }

  if (bindings.modifiers.rounded) {
    shape = 'hint--rounded'
  } else if (bindings.modifiers.bubble) {
    shape = 'hint--bubble'
  }

  if (typeof value === 'string') {
    el.dataset.hint = value
    el.tabIndex = 0
    el.classList.add(`hint--${placement}`)

    if (color) {
      el.classList.add(color)
    }
    if (shape) {
      el.classList.add(shape)
    }
  }
}

const tooltip: Directive = {
  getSSRProps() {
    return {}
  },
  updated: onUpdate,
  mounted: onMounted,
}

export default tooltip
