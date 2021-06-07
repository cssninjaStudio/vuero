<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps, computed } from 'vue'

type IconWrapDark = undefined | '1' | '2' | '3' | '4' | '5' | '6'
type IconWrapColor =
  | undefined
  | 'white'
  | 'black'
  | 'light'
  | 'dark'
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

const props = defineProps({
  icon: {
    type: String,
    default: undefined,
  },
  picture: {
    type: String,
    default: undefined,
  },
  color: {
    type: String as PropType<IconWrapColor>,
    default: undefined,
    validator: (value: IconWrapColor) => {
      if (!value) return true
      // The value must match one of these strings
      if (
        [
          'white',
          'black',
          'light',
          'dark',
          'primary',
          'secondary',
          'link',
          'info',
          'success',
          'warning',
          'danger',
        ].indexOf(value) === -1
      ) {
        console.warn(
          `V-IconWrap: invalid "${value}" color. Should be white, black, light, ` +
            `dark, primary, secondary, link, info, success, warning, danger or undefined`
        )
        return false
      }

      return true
    },
  },
  size: {
    type: String as PropType<IconWrapDark>,
    default: undefined,
    validator: (value: IconWrapDark) => {
      // The value must match one of these strings
      if ([undefined, 'large'].indexOf(value) === -1) {
        console.warn(
          `V-IconWrap: invalid "${value}" size. Should be large or undefined`
        )
        return false
      }

      return true
    },
  },
  dark: {
    type: String as PropType<IconWrapDark>,
    default: undefined,
    validator: (value: IconWrapDark) => {
      // The value must match one of these strings
      if ([undefined, '1', '2', '3', '4', '5', '6'].indexOf(value) === -1) {
        console.warn(
          `V-IconWrap: invalid "${value}" dark. Should be 1, 2, 3, 4, 5, 6 or undefined`
        )
        return false
      }

      return true
    },
  },
  placeholder: {
    type: Boolean,
    default: false,
  },
  darkPrimary: {
    type: Boolean,
    default: false,
  },
  darkCardBordered: {
    type: Boolean,
    default: false,
  },
})

const isIconify = computed(() => {
  return props.icon && props.icon.indexOf(':') !== -1
})
</script>

<template>
  <div
    class="icon-wrap"
    :class="[
      color && `has-text-${color}`,
      size && `is-${size}`,
      dark && `is-dark-bg-${dark}`,
      darkPrimary && 'is-dark-primary',
      darkCardBordered && 'is-dark-card-bordered',
      picture && 'has-img',
      placeholder && 'is-placeholder',
    ]"
  >
    <img
      v-if="picture"
      :src="picture"
      alt=""
      @error.once="$event.target.src = 'https://via.placeholder.com/32x32'"
    />
    <i
      v-else-if="isIconify"
      aria-hidden="true"
      class="iconify"
      :data-icon="icon"
    ></i>
    <i v-else-if="icon" aria-hidden="true" :class="icon"></i>
  </div>
</template>

<style lang="scss">
@import '../../../scss/abstracts/_variables.scss';

.icon-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  min-width: 32px;
  border-radius: $radius-rounded;
  background: $white;
  border: 1px solid darken($fade-grey, 3%);
  box-shadow: $light-box-shadow;
  color: $primary;
  font-size: 1rem;

  &.is-medium {
    font-size: 1.5rem;
  }

  &.is-large {
    font-size: 2rem;
    height: 58px;
    width: 58px;
    min-width: 58px;
  }

  img {
    border-radius: $radius-rounded;
  }

  &.is-placeholder {
    background-color: lighten($fade-grey, 2%) !important;
    border-color: darken($fade-grey, 3%) !important;
    color: $light-text;

    i {
      font-size: 1.4rem;
    }
  }
}
</style>
