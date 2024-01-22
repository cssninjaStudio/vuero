<script setup lang="ts">
import { useVFieldContext } from '/@src/composable/useVFieldContext'

export type VSwitchSegmentColor = 'primary' | 'info' | 'success' | 'warning' | 'danger'

export interface VSwitchSegmentProps {
  labelTrue?: string
  labelFalse?: string
  color?: VSwitchSegmentColor
}

const modelValue = defineModel<boolean>({
  default: false,
})

const props = withDefaults(defineProps<VSwitchSegmentProps>(), {
  labelTrue: undefined,
  labelFalse: undefined,
  color: undefined,
})

const { field, id } = useVFieldContext({
  create: false,
  help: 'VSwitchSegment',
})

const internal = computed({
  get() {
    if (field?.value) {
      return field.value.value
    }
    else {
      return modelValue.value
    }
  },
  set(value: any) {
    if (field?.value) {
      field.value.setValue(value)
    }
    modelValue.value = value
  },
})
</script>

<template>
  <div class="switch-segment">
    <VLabel
      v-if="props.labelFalse || 'label-false' in $slots"
      raw
      class="is-label"
    >
      <slot name="label-false">
        {{ props.labelFalse }}
      </slot>
    </VLabel>
    <VLabel
      raw
      class="form-switch"
      :class="[props.color && `is-${props.color}`]"
    >
      <input
        :id="id"
        v-model="internal"
        :true-value="true"
        :false-value="false"
        v-bind="$attrs"
        type="checkbox"
        class="is-switch"
      >
      <i aria-hidden="true" />
    </VLabel>
    <VLabel
      v-if="props.labelTrue || 'label-true' in $slots"
      raw
      class="is-label"
    >
      <slot name="label-true">
        {{ props.labelTrue }}
      </slot>
    </VLabel>
  </div>
</template>

<style lang="scss">
.form-switch {
  position: relative;
  display: inline-block;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:focus-within {
    border-radius: 50px;
    outline-offset: var(--accessibility-focus-outline-offset);
    outline-width: var(--accessibility-focus-outline-width);
    outline-style: var(--accessibility-focus-outline-style);
    outline-color: var(--accessibility-focus-outline-color);
  }

  &.is-primary {
    input {
      &:checked + i {
        background-color: var(--primary);
      }
    }
  }

  &.is-success {
    input {
      &:checked + i {
        background-color: var(--success);
      }
    }
  }

  &.is-info {
    input {
      &:checked + i {
        background-color: var(--info);
      }
    }
  }

  &.is-warning {
    input {
      &:checked + i {
        background-color: var(--warning);
      }
    }
  }

  &.is-danger {
    input {
      &:checked + i {
        background-color: var(--danger);
      }
    }
  }

  i {
    position: relative;
    display: inline-block;
    width: 46px;
    height: 26px;
    background-color: #e6e6e6;
    border-radius: 23px;
    vertical-align: text-bottom;
    transition: all 0.3s linear;

    &::before {
      content: '';
      position: absolute;
      inset-inline-start: 0;
      width: 42px;
      height: 22px;
      background-color: var(--white);
      border-radius: 11px;
      transform: translate3d(calc(var(--transform-direction) * 2px), 2px, 0)
        scale3d(calc(var(--transform-direction) * 1), 1, 1);
      transition: all 0.25s linear;
    }

    &::after {
      content: '';
      position: absolute;
      inset-inline-start: 0;
      width: 22px;
      height: 22px;
      background-color: var(--white);
      border-radius: 11px;
      box-shadow: 0 2px 2px rgb(0 0 0 / 24%);
      transform: translate3d(calc(var(--transform-direction) * 2px), 2px, 0);
      transition: all 0.2s ease-in-out;
    }
  }

  &:active {
    i::after {
      width: 28px;
      transform: translate3d(calc(var(--transform-direction) * 2px), 2px, 0);
    }

    input {
      &:checked + i::after {
        transform: translate3d(calc(var(--transform-direction) * 16px), 2px, 0);
      }
    }
  }

  input {
    position: absolute;
    opacity: 0;
    pointer-events: none;

    &:checked + i {
      background-color: var(--light-text);

      &::before {
        transform: translate3d(calc(var(--transform-direction) * 18px), 2px, 0)
          scale3d(0, 0, 0);
      }

      &::after {
        transform: translate3d(calc(var(--transform-direction) * 22px), 2px, 0);
      }
    }
  }

  small {
    color: var(--muted-grey);
    position: relative;
    top: -4px;
  }
}

.switch-block {
  padding: 10px 0;
  display: flex;
  align-items: center;

  .text {
    margin-inline-start: 6px;

    span {
      display: block;
      position: relative;
      top: -2px;
      color: var(--light-text);
    }
  }
}

.is-dark {
  .form-switch {
    &.is-primary {
      input {
        &:checked + i {
          background-color: var(--primary) !important;

          &::after {
            background: var(--white) !important;
          }
        }
      }
    }

    &.is-success {
      input {
        &:checked + i {
          background-color: var(--success) !important;

          &::after {
            background: var(--white) !important;
          }
        }
      }
    }

    &.is-info {
      input {
        &:checked + i {
          background-color: var(--info) !important;

          &::after {
            background: var(--white) !important;
          }
        }
      }
    }

    &.is-warning {
      input {
        &:checked + i {
          background-color: var(--warning) !important;

          &::after {
            background: var(--white) !important;
          }
        }
      }
    }

    &.is-danger {
      input {
        &:checked + i {
          background-color: var(--danger) !important;

          &::after {
            background: var(--white) !important;
          }
        }
      }
    }

    i {
      background: var(--dark-sidebar) !important;

      &::before {
        background: var(--dark-sidebar) !important;
      }

      &::after {
        background: var(--dark-sidebar-light-22) !important;
      }
    }

    input {
      &:checked + i {
        &::after {
          background: var(--dark-sidebar-light-55) !important;
        }
      }
    }
  }
}

.thin-switch {
  display: block;
  margin-inline-start: 8px;

  &:focus-visible .slider::after {
    border-radius: 50px;
    outline-offset: var(--accessibility-focus-outline-offset);
    outline-width: var(--accessibility-focus-outline-width);
    outline-style: var(--accessibility-focus-outline-style);
    outline-color: var(--accessibility-focus-outline-color);
  }

  &:focus-visible {
    outline: none !important;
  }

  &.is-primary {
    .input:checked ~ .slider {
      background: var(--primary-light-20);

      &::after {
        background: var(--primary);
        border-color: var(--primary);
      }
    }
  }

  &.is-success {
    .input:checked ~ .slider {
      background: var(--success-light-20);

      &::after {
        background: var(--success);
        border-color: var(--success);
      }
    }
  }

  &.is-info {
    .input:checked ~ .slider {
      background: var(--info-light-20);

      &::after {
        background: var(--info);
        border-color: var(--info);
      }
    }
  }

  &.is-warning {
    .input:checked ~ .slider {
      background: var(--warning-light-20);

      &::after {
        background: var(--warning);
        border-color: var(--warning);
      }
    }
  }

  &.is-danger {
    .input:checked ~ .slider {
      background: var(--danger-light-20);

      &::after {
        background: var(--danger);
        border-color: var(--danger);
      }
    }
  }

  .slider {
    position: relative;
    display: inline-block;
    height: 8px;
    width: 32px;
    border-radius: 8px;
    cursor: pointer;
    background: #c5c5c5;
    transition: all 0.3s; // transition-all test

    &::after {
      background: var(--light-grey);
      position: absolute;
      inset-inline-start: -8px;
      top: calc((7px - 24px) / 2);
      display: block;
      width: 24px;
      height: 24px;
      border-radius: var(--radius-rounded);
      border: 1px solid transparent;
      box-shadow: 0 2px 2px rgba(#000, 0.2);
      content: '';
      transition: all 0.3s; // transition-all test
    }
  }

  label {
    margin-inline-end: 7px;
  }

  .input {
    display: none;

    ~ .label {
      margin-inline-start: 8px;
    }

    &:checked ~ .slider {
      &::after {
        inset-inline-start: 32px - 24px + 8px;
      }
    }
  }

  .input:checked ~ .slider {
    &::after {
      background: var(--white);
      border: 1px solid var(--fade-grey);
    }
  }
}

.thin-switch-block {
  padding: 10px 0;
  display: flex;
  align-items: center;

  .text {
    margin-inline-start: 16px;

    span {
      display: block;
      position: relative;
      color: var(--light-text);
    }
  }
}

.is-dark {
  .thin-switch {
    &.is-primary {
      .input:checked ~ .slider {
        background: var(--primary-light-20);

        &::after {
          background: var(--primary);
          border-color: var(--primary);
        }
      }
    }

    &.is-success {
      .input:checked ~ .slider {
        &::after {
          background: var(--success);
          border-color: var(--success);
        }
      }
    }

    &.is-info {
      .input:checked ~ .slider {
        &::after {
          background: var(--info);
          border-color: var(--info);
        }
      }
    }

    &.is-warning {
      .input:checked ~ .slider {
        &::after {
          background: var(--warning);
          border-color: var(--warning);
        }
      }
    }

    &.is-danger {
      .input:checked ~ .slider {
        &::after {
          background: var(--danger);
          border-color: var(--danger);
        }
      }
    }

    .slider {
      background: var(--dark-sidebar);

      &::after {
        background: var(--dark-sidebar-light-22);
      }
    }

    .input:checked ~ .slider {
      &::after {
        background: var(--dark-sidebar-light-55);
        border: var(--dark-sidebar-light-55);
      }
    }
  }
}

.switch-segment {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .is-label {
    font-family: var(--font);
    font-size: 0.9rem;

    &:first-child {
      color: var(--dark-text);
    }

    &:nth-child(3) {
      color: var(--light-text);
    }
  }

  .form-switch {
    transform: scale(0.7);
    margin: 0 0.25rem;
  }
}

.is-dark {
  .switch-segment {
    .is-label {
      &:first-child {
        color: var(--dark-dark-text);
      }
    }
  }
}
</style>
