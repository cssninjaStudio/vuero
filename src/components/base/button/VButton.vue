<script lang="ts">
import type { PropType } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import { CssUnitRe } from '/@src/utils/regex'
import { computed, defineComponent, h } from 'vue'
import { RouterLink } from 'vue-router'

import VPlaceload from '../loader/VPlaceload.vue'

export type VButtonSize = 'big' | 'huge'
export type VButtonColor =
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'white'
  | 'dark'
  | 'light'
export type VButtonDark = '1' | '2' | '3' | '4' | '5' | '6'

export default defineComponent({
  props: {
    to: {
      type: [Object, String] as PropType<RouteLocationRaw>,
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
            `VButton: invalid "${value}" placeload. Should be a valid css unit value.`
          )
        }

        return true
      },
    },
    color: {
      type: String as PropType<VButtonColor>,
      default: undefined,
      validator: (value: VButtonColor) => {
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
            'dark',
            'light',
          ].indexOf(value) === -1
        ) {
          console.warn(
            `VButton: invalid "${value}" color. Should be primary, info, success, warning, danger, dark, light, white or undefined`
          )
          return false
        }

        return true
      },
    },
    size: {
      type: String as PropType<VButtonSize>,
      default: undefined,
      validator: (value: VButtonSize) => {
        // The value must match one of these strings
        if ([undefined, 'big', 'huge'].indexOf(value) === -1) {
          console.warn(
            `VButton: invalid "${value}" size. Should be big, huge or undefined`
          )
          return false
        }

        return true
      },
    },
    dark: {
      type: String as PropType<VButtonDark>,
      default: undefined,
      validator: (value: VButtonDark) => {
        // The value must match one of these strings
        if ([undefined, '1', '2', '3', '4', '5', '6'].indexOf(value) === -1) {
          console.warn(
            `VButton: invalid "${value}" dark. Should be 1, 2, 3, 4, 5, 6 or undefined`
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
      const defaultClasses = (attrs?.class ?? []) as string[]
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
    const isIconify = computed(() => props.icon && props.icon.indexOf(':') !== -1)
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
        childrens.push(
          h(VPlaceload, {
            width: props.placeload,
          })
        )
      } else {
        childrens.push(h('span', slots.default?.()))
      }
      if (caretWrapper) {
        childrens.push(caretWrapper)
      }

      return childrens
    }

    return () => {
      if (props.to) {
        return h(
          RouterLink,
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

<style lang="scss">
.button {
  &.is-circle {
    border-radius: var(--radius-rounded);
  }

  &.v-button {
    padding: 8px 22px;
    height: 38px;
    line-height: 1.1;
    font-size: 0.95rem;
    font-family: var(--font);
    transition: all 0.3s; // transition-all test

    &:not([disabled]) {
      cursor: pointer;
    }

    &:active,
    &:focus {
      box-shadow: none !important;
      border-color: var(--fade-grey-dark-2);
    }

    &:focus-visible {
      outline-offset: var(--accessibility-focus-outline-offset);
      outline-width: var(--accessibility-focus-outline-width);
      outline-style: var(--accessibility-focus-outline-style);
      outline-color: var(--accessibility-focus-outline-color);
    }

    &.is-bold {
      font-weight: 500;
    }

    &.is-primary {
      &.is-raised:hover {
        opacity: 0.9;
        box-shadow: var(--primary-box-shadow);
      }

      &.is-elevated {
        box-shadow: var(--primary-box-shadow);
      }
    }

    &.is-success {
      &.is-raised:hover {
        opacity: 0.9;
        box-shadow: var(--success-box-shadow);
      }

      &.is-elevated {
        box-shadow: var(--success-box-shadow);
      }
    }

    &.is-info {
      &.is-raised:hover {
        opacity: 0.9;
        box-shadow: var(--info-box-shadow);
      }

      &.is-elevated {
        box-shadow: var(--info-box-shadow);
      }
    }

    &.is-warning {
      &.is-raised:hover {
        opacity: 0.9;
        box-shadow: var(--warning-box-shadow);
      }

      &.is-elevated {
        box-shadow: var(--warning-box-shadow);
      }
    }

    &.is-danger {
      &.is-raised:hover {
        opacity: 0.9;
        box-shadow: var(--danger-box-shadow);
      }

      &.is-elevated {
        box-shadow: var(--danger-box-shadow);
      }
    }

    &.is-lower {
      text-transform: none !important;
      font-size: 0.9rem;
    }

    &.is-big {
      height: 40px;
    }

    &.is-huge {
      height: 50px;
      width: 220px;
    }
  }

  &.simple-action {
    height: 32px;
    padding: 0 24px;
    line-height: 0;
    border-radius: 100px;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.3s; // transition-all test

    &.is-purple {
      background: var(--primary);
      border-color: var(--primary);
      color: var(--smoke-white);

      &:hover,
      &:focus {
        opacity: 0.95;
        box-shadow: var(--primary-box-shadow);
        color: var(--smoke-white) !important;
      }
    }

    &.has-icon {
      svg {
        height: 16px;
        width: 16px;
      }
    }

    &:hover {
      border-color: var(--primary);
      color: var(--primary);
    }

    svg {
      height: 18px;
      width: 18px;
    }
  }

  .icon {
    svg {
      height: 14px;
      width: 14px;
    }
  }
}

.is-dark {
  .v-button {
    &:not(.is-primary):not(.is-success):not(.is-info):not(.is-warning):not(.is-danger):not(.is-light):not(.is-white) {
      background: var(--dark-sidebar-light-10);
      border-color: var(--dark-sidebar-light-12);
      color: var(--dark-dark-text);

      &:hover,
      &:focus {
        border-color: var(--dark-sidebar-light-18);
      }
    }

    &.is-primary {
      border-color: var(--primary);
      background: var(--primary);

      &.is-raised:hover {
        box-shadow: var(--primary-box-shadow) !important;
      }

      &.is-elevated {
        box-shadow: var(--primary-box-shadow) !important;
      }

      &.is-outlined {
        background: transparent;
        border-color: var(--primary) !important;
        color: var(--primary);

        &:hover,
        &:focus {
          background: var(--primary) !important;
          border-color: var(--primary) !important;
          color: var(--white) !important;
        }
      }

      &.is-light {
        background: var(--primary-light-25) !important;
        color: var(--primary-dark-15);
      }
    }

    &.is-white {
      background: var(--dark-sidebar-light-6) !important;
      border-color: var(--muted-grey) !important;
      color: var(--muted-grey) !important;
    }

    &.is-dark-outlined {
      background: var(--dark-sidebar-light-10);
      border-color: var(--dark-sidebar-light-12);
      color: var(--dark-dark-text);

      &:hover,
      &:focus {
        border-color: var(--primary) !important;
        color: var(--primary) !important;
      }
    }
  }

  .button {
    &:not(.is-primary):not(.is-success):not(.is-info):not(.is-warning):not(.is-danger):not(.is-light):not(.is-white) {
      background: var(--dark-sidebar-light-10);
      border-color: var(--dark-sidebar-light-12);
      color: var(--dark-dark-text);

      &:hover,
      &:focus {
        border-color: var(--dark-sidebar-light-18);
      }
    }

    &.is-primary {
      border-color: var(--primary);
      background: var(--primary);
    }

    &.is-white {
      background: var(--dark-sidebar-light-6) !important;
      border-color: var(--muted-grey) !important;
      color: var(--muted-grey) !important;
    }

    &.is-dark-outlined {
      background: var(--dark-sidebar-light-10);
      border-color: var(--dark-sidebar-light-12);
      color: var(--dark-dark-text);

      &:hover,
      &:focus {
        border-color: var(--primary) !important;
        color: var(--primary) !important;
      }
    }
  }
}
</style>
