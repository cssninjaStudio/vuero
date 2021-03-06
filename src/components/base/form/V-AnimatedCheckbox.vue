<script setup lang="ts">
import { defineProps, ref, defineEmit, watchEffect } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: '',
  },
})

const emit = defineEmit(['update:modelValue'])

const element = ref<HTMLElement | null>(null)
const innerElement = ref<HTMLElement | null>(null)

const handleClick = () => {
  emit('update:modelValue', !props.modelValue)
}

const updateCheckbox = () => {
  if (element.value && innerElement.value) {
    if (props.modelValue) {
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

watchEffect(updateCheckbox)
</script>

<template>
  <div
    ref="element"
    class="animated-checkbox"
    :class="[color && 'is-' + color]"
  >
    <input type="checkbox" :checked="modelValue" @change="handleClick" />
    <div class="checkmark-wrap">
      <div ref="innerElement" class="shadow-circle"></div>
      <svg
        class="checkmark"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
      >
        <circle class="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
        <path
          class="checkmark-check"
          fill="none"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        />
      </svg>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../assets/scss/abstracts/_variables.scss';
@import '../../../assets/scss/abstracts/_mixins.scss';

$curve: cubic-bezier(0.65, 0, 0.45, 1);

.animated-checkbox {
  position: relative;
  height: 32px;
  width: 32px;

  &.is-purple {
    .checkmark-circle {
      color: $h-purple !important;
      stroke: $h-purple !important;
    }

    .checkmark {
      box-shadow: inset 0 0 0 $h-purple !important;
    }

    .checkmark-check {
      color: $h-purple !important;
      stroke: $h-purple !important;
    }
  }

  &.is-info {
    .checkmark-circle {
      color: $info !important;
      stroke: $info !important;
    }

    .checkmark {
      box-shadow: inset 0 0 0 $info !important;
    }

    .checkmark-check {
      color: $info !important;
      stroke: $info !important;
    }
  }

  &.is-success {
    .checkmark-circle {
      color: $success !important;
      stroke: $success !important;
    }

    .checkmark {
      box-shadow: inset 0 0 0 $success !important;
    }

    .checkmark-check {
      color: $success !important;
      stroke: $success !important;
    }
  }

  &.is-warning {
    .checkmark-circle {
      color: $warning !important;
      stroke: $warning !important;
    }

    .checkmark {
      box-shadow: inset 0 0 0 $warning !important;
    }

    .checkmark-check {
      color: $warning !important;
      stroke: $warning !important;
    }
  }

  &.is-danger {
    .checkmark-circle {
      color: $h-red !important;
      stroke: $h-red !important;
    }

    .checkmark {
      box-shadow: inset 0 0 0 $h-red !important;
    }

    .checkmark-check {
      color: $h-red !important;
      stroke: $h-red !important;
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
      border-radius: $radius-rounded;
      border: 1px solid $placeholder;
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
      color: $primary;
      stroke: $primary;
    }

    //Checkmark
    .checkmark {
      width: 32px;
      height: 32px;
      border-radius: $radius-rounded;
      display: block;
      stroke-width: 2;
      color: $placeholder;
      stroke: $placeholder;
      stroke-miterlimit: 10;
      margin: 0 auto;
      box-shadow: inset 0 0 0 $primary;
    }

    //Check symbol
    .checkmark-check {
      transform-origin: 50% 50%;
      stroke-dasharray: 48;
      stroke-dashoffset: 48;
      color: $primary;
      stroke: $primary;
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

  //Keyframes
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
        color: $accent;
      }

      .shadow-circle {
        border-color: lighten($dark-sidebar, 20%);
      }
    }
  }
}
</style>
