import type { Directive, DirectiveHook } from 'vue'

const updateVTooltip: DirectiveHook = (el: HTMLElement, bindings) => {
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

  const previousClasses: string[] = []
  const nextClasses: string[] = []

  el.classList.forEach((className) => {
    if (className.startsWith('hint--')) {
      previousClasses.push(className)
    }
  })

  if (typeof value === 'string') {
    el.dataset.hint = value
    el.ariaLabel = value
    el.tabIndex ??= 0

    nextClasses.push(`hint--${placement}`)

    if (color) {
      nextClasses.push(color)
    }
    if (shape) {
      nextClasses.push(shape)
    }
  } else {
    el.dataset.hint = undefined
  }

  // add new classes
  nextClasses.forEach((className) => {
    if (!previousClasses.includes(className)) {
      el.classList.add(className)
    }
  })

  // remove old classes
  previousClasses.forEach((className) => {
    if (!nextClasses.includes(className)) {
      el.classList.remove(className)
    }
  })
}

export const vTooltip = {
  getSSRProps() {
    return {}
  },
  updated: updateVTooltip,
  mounted: updateVTooltip,
} satisfies Directive
