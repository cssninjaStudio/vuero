<script setup lang="ts">
import type { PropType } from 'vue'
import { computed } from 'vue'

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
      if ([undefined, 'small', 'medium', 'large'].indexOf(value) === -1) {
        console.warn(
          `V-IconWrap: invalid "${value}" size. Should be small, medium, large or undefined`
        )
        return false
      }

      return true
    },
  },
  dark: {
    type: String as PropType<IconWrapDark>,
    default: '3',
    validator: (value: IconWrapDark) => {
      // The value must match one of these strings
      if (['1', '2', '3', '4', '5', '6'].indexOf(value) === -1) {
        console.warn(
          `V-IconWrap: invalid "${value}" dark. Should be 1, 2, 3, 4, 5, 6 or undefined`
        )
        return false
      }

      return true
    },
  },
  hasLargeIcon: {
    type: Boolean,
    default: false,
  },
  hasBackground: {
    type: Boolean,
    default: false,
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
      props.color && !props.hasBackground && `has-text-${props.color}`,
      props.color && props.hasBackground && `has-background-${props.color}`,
      props.color &&
        props.color !== 'white' &&
        props.hasBackground &&
        `has-text-white`,
      props.color &&
        props.color === 'white' &&
        props.hasBackground &&
        `has-text-black`,
      props.size && `is-${props.size}`,
      props.dark && !props.hasBackground && `is-dark-bg-${props.dark}`,
      props.darkPrimary && 'is-dark-primary',
      props.darkCardBordered && 'is-dark-card-bordered',
      props.hasLargeIcon && 'has-large-icon',
      props.picture && 'has-img',
      props.placeholder && 'is-placeholder',
    ]"
  >
    <img
      v-if="props.picture"
      :src="props.picture"
      alt=""
      @error.once="$event.target.src = 'https://via.placeholder.com/32x32'"
    />
    <i
      v-else-if="isIconify"
      aria-hidden="true"
      class="iconify"
      :data-icon="props.icon"
    ></i>
    <i v-else-if="props.icon" aria-hidden="true" :class="props.icon"></i>
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

  &.has-large-icon {
    font-size: 1.3rem;
  }

  &.is-small {
    font-size: 0.9rem;
    height: 24px;
    width: 24px;
    min-width: 24px;

    &.has-large-icon {
      font-size: 1rem;
    }
  }

  &.is-medium {
    font-size: 1.4rem;
    height: 42px;
    width: 42px;
    min-width: 42px;

    &.has-large-icon {
      font-size: 1.8rem;
    }
  }

  &.is-large {
    font-size: 2rem;
    height: 58px;
    width: 58px;
    min-width: 58px;

    &.has-large-icon {
      font-size: 2.9rem;
    }
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

.is-dark {
  .icon-wrap {
    /* background: $dark-sidebar; */
    border-color: transparent;
  }
}
</style>
