<script lang="ts">
import type { PropType } from 'vue'
import { computed, defineComponent, h, resolveComponent } from 'vue'

const CssUnitRe =
  /(\d*\.?\d+)\s?(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)/

type ButtonSize = undefined | 'big' | 'huge'
type ButtonColor =
  | undefined
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'white'
type ButtonDark = undefined | '1' | '2' | '3' | '4' | '5' | '6'

export default defineComponent({
  props: {
    to: {
      type: [Object, String],
      default: undefined,
    },
    href: {
      type: String,
      default: undefined,
    },
    icon: {
      type: String,
      default: undefined,
    },
    iconCaret: {
      type: String,
      default: undefined,
    },
    placeload: {
      type: String,
      default: undefined,
      validator: (value: string) => {
        if (value.match(CssUnitRe) === null) {
          console.warn(
            `V-Button: invalid "${value}" placeload. Should be a valid css unit value.`
          )
        }

        return true
      },
    },
    color: {
      type: String as PropType<ButtonColor>,
      default: undefined,
      validator: (value: ButtonColor) => {
        // The value must match one of these strings
        if (
          [
            undefined,
            'primary',
            'info',
            'success',
            'warning',
            'danger',
            'white',
          ].indexOf(value) === -1
        ) {
          console.warn(
            `V-Button: invalid "${value}" color. Should be primary, info, success, warning, danger, white or undefined`
          )
          return false
        }

        return true
      },
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: undefined,
      validator: (value: ButtonSize) => {
        // The value must match one of these strings
        if ([undefined, 'big', 'huge'].indexOf(value) === -1) {
          console.warn(
            `V-Button: invalid "${value}" size. Should be big, huge or undefined`
          )
          return false
        }

        return true
      },
    },
    dark: {
      type: String as PropType<ButtonDark>,
      default: undefined,
      validator: (value: ButtonDark) => {
        // The value must match one of these strings
        if ([undefined, '1', '2', '3', '4', '5', '6'].indexOf(value) === -1) {
          console.warn(
            `V-Button: invalid "${value}" dark. Should be 1, 2, 3, 4, 5, 6 or undefined`
          )
          return false
        }

        return true
      },
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    bold: {
      type: Boolean,
      default: false,
    },
    fullwidth: {
      type: Boolean,
      default: false,
    },
    light: {
      type: Boolean,
      default: false,
    },
    raised: {
      type: Boolean,
      default: false,
    },
    elevated: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    darkOutlined: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    lower: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots, attrs }) {
    const classes = computed(() => {
      const defaultClasses = attrs?.class || []
      return [
        ...defaultClasses,
        'button',
        'v-button',
        props.disabled && 'is-disabled',
        props.rounded && 'is-rounded',
        props.bold && 'is-bold',
        props.size && `is-${props.size}`,
        props.lower && 'is-lower',
        props.fullwidth && 'is-fullwidth',
        props.outlined && 'is-outlined',
        props.dark && `is-dark-bg-${props.dark}`,
        props.darkOutlined && 'is-dark-outlined',
        props.raised && 'is-raised',
        props.elevated && 'is-elevated',
        props.loading && !props.placeload && 'is-loading',
        props.color && `is-${props.color}`,
        props.light && 'is-light',
      ]
    })
    const isIconify = computed(
      () => props.icon && props.icon.indexOf(':') !== -1
    )
    const isCaretIconify = computed(
      () => props.iconCaret && props.iconCaret.indexOf(':') !== -1
    )

    const getChildrens = () => {
      const childrens = []

      let iconWrapper
      if (isIconify.value) {
        const icon = h('i', {
          'aria-hidden': true,
          class: 'iconify',
          'data-icon': props.icon,
        })
        iconWrapper = h('span', { class: 'icon' }, icon)
      } else if (props.icon) {
        const icon = h('i', { 'aria-hidden': true, class: props.icon })
        iconWrapper = h('span', { class: 'icon' }, icon)
      }

      let caretWrapper
      if (isCaretIconify.value) {
        const caret = h('i', {
          'aria-hidden': true,
          class: 'iconify',
          'data-icon': props.iconCaret,
        })
        caretWrapper = h('span', { class: 'caret' }, caret)
      } else if (props.iconCaret) {
        const caret = h('i', { 'aria-hidden': true, class: props.iconCaret })
        caretWrapper = h('span', { class: 'caret' }, caret)
      }

      if (iconWrapper) {
        childrens.push(iconWrapper)
      }
      if (props.placeload) {
        childrens.push(resolveComponent('V-Placeload'), {
          width: props.placeload,
        })
      } else {
        childrens.push(h('span', slots.default?.()))
      }
      if (caretWrapper) {
        childrens.push(caretWrapper)
      }

      return childrens
    }

    return () => {
      let link
      if (props.to) {
        return h(
          resolveComponent('RouterLink'),
          {
            ...attrs,
            'aria-hidden': !!props.placeload && true,
            to: props.to,
            class: ['button', ...classes.value],
          },
          {
            default: getChildrens,
          }
        )
      } else if (props.href) {
        return h(
          'a',
          {
            ...attrs,
            'aria-hidden': !!props.placeload && true,
            href: props.href,
            class: classes.value,
          },
          {
            default: getChildrens,
          }
        )
      }

      return h(
        'button',
        {
          type: 'button',
          ...attrs,
          'aria-hidden': !!props.placeload && true,
          disabled: props.disabled,
          class: ['button', ...classes.value],
        },
        {
          default: getChildrens,
        }
      )
    }
  },
})
</script>
