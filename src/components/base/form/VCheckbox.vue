<script setup lang="ts">
import { useVFieldContext } from '/@src/composable/useVFieldContext'

export type VCheckboxColor = 'primary' | 'info' | 'success' | 'warning' | 'danger'
export interface VCheckboxEmits {
  (e: 'update:modelValue', value: any): void
}
export interface VCheckboxProps {
  raw?: boolean
  label?: string
  color?: VCheckboxColor
  trueValue?: any
  falseValue?: any
  value?: any
  modelValue?: any
  circle?: boolean
  solid?: boolean
  paddingless?: boolean
  wrapperClass?: string
}

const emits = defineEmits<VCheckboxEmits>()
const props = withDefaults(defineProps<VCheckboxProps>(), {
  label: undefined,
  color: undefined,
  trueValue: true,
  falseValue: false,
  value: undefined,
  modelValue: false,
  circle: false,
  solid: false,
  paddingless: false,
  wrapperClass: undefined,
})

const vFieldContext = reactive(useVFieldContext())
const $value = ref((vFieldContext.field?.value ?? props.modelValue) as any)

const classes = computed(() => {
  if (props.raw) return [props.wrapperClass]

  return [
    'checkbox',
    props.wrapperClass,
    props.solid ? 'is-solid' : 'is-outlined',
    props.circle && 'is-circle',
    props.color && `is-${props.color}`,
    props.paddingless && 'is-paddingless',
  ]
})

watch($value, () => {
  emits('update:modelValue', $value.value)
})
watch(
  () => props.modelValue,
  () => {
    $value.value = props.modelValue
  }
)
</script>

<template>
  <VLabel raw :class="classes">
    <input
      :id="vFieldContext.id"
      v-model="$value"
      v-bind="$attrs"
      :true-value="props.trueValue"
      :false-value="props.falseValue"
      :value="props.value"
      type="checkbox"
    />
    <span></span>
    <slot v-bind="vFieldContext">{{ props.label }}</slot>
  </VLabel>
</template>

<style lang="scss">
%controller {
  position: relative;
  font-family: var(--font);
  cursor: pointer;
  padding: 1em;

  &::selection {
    background: transparent;
  }

  input + span {
    position: relative;
    top: -1px;
    background: var(--white);
    content: '';
    display: inline-block;
    margin-inline-end: 0.5rem;
    padding: 0;
    vertical-align: middle;
    width: 1.4em;
    height: 1.4em;
    border: 1px solid var(--fade-grey-dark-8);
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;

    &::after {
      content: '';
      display: block;
      transform: scale(0);
      transition: transform 0.2s;
    }
  }

  @media screen and (width >= 768px) {
    &:hover input + span {
      box-shadow: 0 2px 4px rgba(#000, 0.15);
    }
  }

  input:active + span {
    box-shadow: 0 4px 8px rgba(#000, 0.15);
  }

  input:checked + span::after {
    transform: translate(calc(var(--transform-direction) * -50%), -50%) scale(1) !important;
  }

  input {
    position: absolute;
    cursor: pointer;
    opacity: 0;
    transition: all 0.3s; // transition-all test
  }
}

.checkbox {
  @extend %controller;

  color: var(--light-text);

  &:hover,
  &:focus {
    color: var(--light-text);
  }

  &.is-paddingless {
    padding: 0 !important;
  }

  &.is-circle {
    input + span {
      border-radius: var(--radius-rounded);
    }
  }

  &.is-solid {
    input + span {
      background: var(--fade-grey-light-3);
    }

    &.is-primary {
      input + span {
        border-color: var(--primary);
        background: var(--primary);

        &::after {
          color: var(--white);
        }
      }
    }

    &.is-success {
      input + span {
        border-color: var(--success);
        background: var(--success);

        &::after {
          color: var(--white);
        }
      }
    }

    &.is-info {
      input + span {
        border-color: var(--info);
        background: var(--info);

        &::after {
          color: var(--white);
        }
      }
    }

    &.is-warning {
      input + span {
        border-color: var(--warning);
        background: var(--warning);

        &::after {
          color: var(--white);
        }
      }
    }

    &.is-danger {
      input + span {
        border-color: var(--danger);
        background: var(--danger);

        &::after {
          color: var(--white);
        }
      }
    }
  }

  &.is-outlined {
    &.is-primary {
      input:checked + span {
        border-color: var(--primary);
      }

      input + span {
        &::after {
          color: var(--primary);
        }
      }
    }

    &.is-success {
      input:checked + span {
        border-color: var(--success);
      }

      input + span {
        &::after {
          color: var(--success);
        }
      }
    }

    &.is-info {
      input:checked + span {
        border-color: var(--info);
      }

      input + span {
        &::after {
          color: var(--info);
        }
      }
    }

    &.is-warning {
      input:checked + span {
        border-color: var(--warning);
      }

      input + span {
        &::after {
          color: var(--warning);
        }
      }
    }

    &.is-danger {
      input:checked + span {
        border-color: var(--danger);
      }

      input + span {
        &::after {
          color: var(--danger);
        }
      }
    }
  }

  input + span {
    border-radius: var(--radius-small);
    transition: all 0.3s; // transition-all test

    &::after {
      background-size: contain;
      position: absolute;
      top: 48%;
      inset-inline-start: 50%;
      transform: translate(-50%, -50%) scale(0);
      content: '\f00c';
      font-family: 'Font Awesome\ 5 Free';
      font-weight: 900;
      font-size: 0.7rem;
    }
  }

  input:focus + span,
  input:active + span {
    outline-offset: var(--accessibility-focus-outline-offset);
    outline-width: var(--accessibility-focus-outline-width);
    outline-color: var(--accessibility-focus-outline-color);
    outline-style: var(--accessibility-focus-outline-style);
  }
}

.is-dark {
  %controller {
    input + span {
      background-color: var(--dark-sidebar-light-2);
      border-color: var(--dark-sidebar-light-4);

      &::after {
        color: var(--dark-dark-text);
      }
    }

    input + span {
      border-color: var(--dark-sidebar-light-16);
    }
  }

  .checkbox {
    &.is-solid.is-primary {
      input + span {
        background-color: var(--primary) !important;
        border-color: var(--primary) !important;
      }
    }

    &.is-outlined.is-primary {
      input:checked + span {
        border-color: var(--primary) !important;

        &::after {
          color: var(--primary) !important;
        }
      }
    }
  }
}
</style>
