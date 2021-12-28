<script lang="ts">
import { inject, computed, h, VNode, defineComponent } from 'vue'

import { useVFieldSymbol } from '/@src/composable/useVField'

export default defineComponent({
  name: 'VControl',
  props: {
    icon: {
      type: String,
      default: undefined,
    },
    isValid: {
      type: Boolean,
      default: undefined,
    },
    hasError: {
      type: Boolean,
      default: undefined,
    },
    loading: {
      type: Boolean,
      default: undefined,
    },
    expanded: {
      type: Boolean,
      default: undefined,
    },
    fullwidth: {
      type: Boolean,
      default: undefined,
    },
    textaddon: {
      type: Boolean,
      default: undefined,
    },
    nogrow: {
      type: Boolean,
      default: undefined,
    },
    subcontrol: {
      type: Boolean,
      default: undefined,
    },
  },
  setup(props, { slots }) {
    const isIconify = computed(() => {
      return props.icon && props.icon.indexOf(':') !== -1
    })

    const vField = inject(useVFieldSymbol, {
      id: '',
    } as const)

    const controlClasees = computed(() => [
      'control',
      props.icon && 'has-icon',
      props.loading && 'is-loading',
      props.expanded && 'is-expanded',
      props.fullwidth && 'is-fullwidth',
      props.nogrow && 'is-nogrow',
      props.textaddon && 'is-textarea-addon',
      props.isValid && 'has-validation has-success',
      props.hasError && 'has-validation has-error',
      props.subcontrol && 'subcontrol',
    ])

    let formIcon: VNode | null = null
    if (props.icon) {
      if (isIconify.value) {
        formIcon = h(
          'div',
          { class: 'form-icon' },
          h('i', { 'aria-hidden': true, 'data-icon': props.icon, class: 'iconify' })
        )
      } else {
        formIcon = h(
          'div',
          { class: 'form-icon' },
          h('i', { 'aria-hidden': true, class: props.icon })
        )
      }
    }

    let validationIcon: VNode | null = null
    if (props.isValid) {
      validationIcon = h(
        'div',
        { class: 'validation-icon is-success' },
        h('i', {
          'aria-hidden': true,
          'data-icon': 'feather:check',
          class: 'iconify',
        })
      )
    } else if (props.hasError) {
      validationIcon = h(
        'div',
        { class: 'validation-icon is-error' },
        h('i', {
          'aria-hidden': true,
          'data-icon': 'feather:x',
          class: 'iconify',
        })
      )
    }

    return () => {
      const slotDefault = slots.default?.()
      const slotExtra = slots.extra?.()

      if (slotDefault?.[0]?.props && vField.id) {
        slotDefault[0].props.id = vField.id
      }

      return h(
        'div',
        {
          class: controlClasees.value,
        },
        [slotDefault, formIcon, validationIcon, slotExtra]
      )
    }
  },
})
</script>

<style lang="scss" scoped>
.is-nogrow {
  flex-grow: 0 !important;
}

.is-fullwidth {
  width: 100%;
}
</style>
