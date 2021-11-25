<script lang="ts">
let instances = 0
</script>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'

export type VAnimatedCheckboxColor =
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'purple'

export interface VAnimatedCheckboxEmits {
  (e: 'update:modelValue', value: (string | number)[]): void
}
export interface VAnimatedCheckboxProps {
  value?: string | number
  color?: VAnimatedCheckboxColor
  modelValue?: (string | number)[]
}

const emit = defineEmits<VAnimatedCheckboxEmits>()
const props = withDefaults(defineProps<VAnimatedCheckboxProps>(), {
  value: undefined,
  color: undefined,
  modelValue: () => [],
})

const animatedCheckboxId = `animated-checkbox-${++instances}`
const element = ref<HTMLElement>()
const innerElement = ref<HTMLElement>()
const checked = computed(() => props.modelValue.includes(props.value))

const updateCheckbox = () => {
  if (element.value && innerElement.value) {
    if (checked.value) {
      element.value.classList.add('is-checked')
      innerElement.value.classList.add('is-opaque')
      setTimeout(() => {
        element.value?.classList.remove('is-unchecked')
      }, 150)
    } else {
      element.value.classList.add('is-unchecked')
      element.value.classList.remove('is-checked')
      setTimeout(() => {
        innerElement.value?.classList.remove('is-opaque')
      }, 150)
    }
  }
}

function change() {
  const values = [...props.modelValue]

  if (checked.value) {
    values.splice(values.indexOf(props.value), 1)
  } else {
    values.push(props.value)
  }
  emit('update:modelValue', values)
}

watchEffect(updateCheckbox)
</script>

<template>
  <div ref="element" class="animated-checkbox" :class="[color && 'is-' + color]">
    <input
      :id="animatedCheckboxId"
      type="checkbox"
      :checked="checked"
      :value="props.value"
      v-bind="$attrs"
      @change="change"
    />
    <label :for="animatedCheckboxId" class="checkmark-wrap">
      <div ref="innerElement" class="shadow-circle"></div>
      <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle class="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
        <path class="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
      </svg>
    </label>
  </div>
</template>

<style lang="scss">
$curve: cubic-bezier(0.65, 0, 0.45, 1);

.animated-checkbox {
  position: relative;
  height: 32px;
  width: 32px;

  &:focus-within {
    border-radius: 50%;
    outline-offset: var(--accessibility-focus-outline-offset);
    outline-width: var(--accessibility-focus-outline-width);
    outline-style: var(--accessibility-focus-outline-style);
    outline-color: var(--accessibility-focus-outline-color);
  }

  &.is-purple {
    .checkmark-circle {
      color: var(--purple) !important;
      stroke: var(--purple) !important;
    }

    .checkmark {
      box-shadow: inset 0 0 0 var(--purple) !important;
    }

    .checkmark-check {
      color: var(--purple) !important;
      stroke: var(--purple) !important;
    }
  }

  &.is-primary {
    .checkmark-circle {
      color: var(--primary) !important;
      stroke: var(--primary) !important;
    }

    .checkmark {
      box-shadow: inset 0 0 0 var(--primary) !important;
    }

    .checkmark-check {
      color: var(--primary) !important;
      stroke: var(--primary) !important;
    }
  }

  &.is-info {
    .checkmark-circle {
      color: var(--info) !important;
      stroke: var(--info) !important;
    }

    .checkmark {
      box-shadow: inset 0 0 0 var(--info) !important;
    }

    .checkmark-check {
      color: var(--info) !important;
      stroke: var(--info) !important;
    }
  }

  &.is-success {
    .checkmark-circle {
      color: var(--success) !important;
      stroke: var(--success) !important;
    }

    .checkmark {
      box-shadow: inset 0 0 0 var(--success) !important;
    }

    .checkmark-check {
      color: var(--success) !important;
      stroke: var(--success) !important;
    }
  }

  &.is-warning {
    .checkmark-circle {
      color: var(--warning) !important;
      stroke: var(--warning) !important;
    }

    .checkmark {
      box-shadow: inset 0 0 0 var(--warning) !important;
    }

    .checkmark-check {
      color: var(--warning) !important;
      stroke: var(--warning) !important;
    }
  }

  &.is-danger {
    .checkmark-circle {
      color: var(--red) !important;
      stroke: var(--red) !important;
    }

    .checkmark {
      box-shadow: inset 0 0 0 var(--red) !important;
    }

    .checkmark-check {
      color: var(--red) !important;
      stroke: var(--red) !important;
    }
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    cursor: pointer;
    z-index: 1;
  }

  .checkmark-wrap {
    position: relative;
    height: 32px;
    width: 32px;

    .shadow-circle {
      position: absolute;
      top: 0;
      left: 0;
      height: 32px;
      width: 32px;
      border-radius: var(--radius-rounded);
      border: 1px solid var(--placeholder);
      z-index: 0;
      opacity: 1;
      transition: all 0.2s;

      &.is-opaque {
        opacity: 0;
      }
    }

    .checkmark-circle {
      height: 32px;
      width: 32px;
      stroke-dasharray: 166;
      stroke-dashoffset: 166;
      stroke-width: 2;
      stroke-miterlimit: 10;
      fill: none;
      color: var(--primary);
      stroke: var(--primary);
    }

    // Checkmark
    .checkmark {
      width: 32px;
      height: 32px;
      border-radius: var(--radius-rounded);
      display: block;
      stroke-width: 2;
      color: var(--placeholder);
      stroke: var(--placeholder);
      stroke-miterlimit: 10;
      margin: 0 auto;
      box-shadow: inset 0 0 0 var(--primary);
    }

    // Check symbol
    .checkmark-check {
      transform-origin: 50% 50%;
      stroke-dasharray: 48;
      stroke-dashoffset: 48;
      color: var(--primary);
      stroke: var(--primary);
    }
  }

  &.is-checked {
    .checkmark-circle {
      animation: stroke 0.6s $curve both;
    }

    .checkmark-check {
      animation: stroke 0.3s $curve 0.8s both;
    }
  }

  &.is-unchecked {
    .checkmark-circle {
      animation: reverseCircle 0.6s $curve 0.2s both;
    }

    .checkmark-check {
      animation: reverseCheck 0.3s $curve 0.1s both;
    }
  }

  // Keyframes
  @keyframes stroke {
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes reverseCircle {
    from {
      stroke-dashoffset: 0;
    }

    to {
      stroke-dashoffset: 166;
    }
  }

  @keyframes reverseCheck {
    from {
      stroke-dashoffset: 0;
    }

    to {
      stroke-dashoffset: 48;
    }
  }
}

.is-dark {
  .animated-checkbox {
    .checkmark-wrap {
      .checkmark-circle,
      .checkmark-check {
        color: var(--primary);
      }

      .shadow-circle {
        border-color: var(--dark-sidebar-light-20);
      }
    }
  }
}
</style>
