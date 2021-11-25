<script lang="ts">
let instances = 0
</script>

<script setup lang="ts">
export type VSwitchSegmentColor = 'primary' | 'info' | 'success' | 'warning' | 'danger'
export interface VSwitchSegmentEmits {
  (e: 'update:modelValue', value: boolean): void
}
export interface VSwitchSegmentProps {
  modelValue?: boolean
  labelTrue?: string
  labelFalse?: string
  color?: VSwitchSegmentColor
}

const emit = defineEmits<VSwitchSegmentEmits>()
const props = withDefaults(defineProps<VSwitchSegmentProps>(), {
  modelValue: false,
  labelTrue: undefined,
  labelFalse: undefined,
  color: undefined,
})
const blockSwitchId = `segment-switch-${++instances}`
</script>

<template inherit-attrs="false">
  <div class="switch-segment">
    <label v-if="props.labelFalse" class="is-label" :for="blockSwitchId">
      {{ props.labelFalse }}
    </label>
    <label
      :for="blockSwitchId"
      class="form-switch"
      :class="[props.color && `is-${props.color}`]"
    >
      <input
        :id="blockSwitchId"
        :checked="props.modelValue"
        v-bind="$attrs"
        type="checkbox"
        class="is-switch"
        @change="emit('update:modelValue', !props.modelValue)"
      />
      <i aria-hidden="true"></i>
    </label>
    <label v-if="props.labelTrue" class="is-label" :for="blockSwitchId">
      {{ props.labelTrue }}
    </label>
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
      left: 0;
      width: 42px;
      height: 22px;
      background-color: var(--white);
      border-radius: 11px;
      transform: translate3d(2px, 2px, 0) scale3d(1, 1, 1);
      transition: all 0.25s linear;
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 22px;
      height: 22px;
      background-color: var(--white);
      border-radius: 11px;
      box-shadow: 0 2px 2px rgb(0 0 0 / 24%);
      transform: translate3d(2px, 2px, 0);
      transition: all 0.2s ease-in-out;
    }
  }

  &:active {
    i::after {
      width: 28px;
      transform: translate3d(2px, 2px, 0);
    }

    input {
      &:checked + i::after {
        transform: translate3d(16px, 2px, 0);
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
        transform: translate3d(18px, 2px, 0) scale3d(0, 0, 0);
      }

      &::after {
        transform: translate3d(22px, 2px, 0);
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
    margin-left: 6px;

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
  margin-left: 8px;

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
      left: -8px;
      top: (7px - 24px) / 2;
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
    margin-right: 7px;
  }

  .input {
    display: none;

    ~ .label {
      margin-left: 8px;
    }

    &:checked ~ .slider {
      &::after {
        left: 32px - 24px + 8px;
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
    margin-left: 16px;

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
