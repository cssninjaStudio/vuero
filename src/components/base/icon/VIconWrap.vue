<script setup lang="ts">
import { computed } from 'vue'
import { onceImageErrored } from '/@src/utils/via-placeholder'

export type VIconWrapDark = '1' | '2' | '3' | '4' | '5' | '6'
export type VIconWrapSize = 'small' | 'medium' | 'large'
export type VIconWrapColor =
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
export interface VIconWrapProps {
  icon?: string
  picture?: string
  color?: VIconWrapColor
  size?: VIconWrapSize
  dark?: VIconWrapDark
  hasLargeIcon?: boolean
  hasBackground?: boolean
  placeholder?: boolean
  darkPrimary?: boolean
  darkCardBordered?: boolean
}

const props = withDefaults(defineProps<VIconWrapProps>(), {
  icon: undefined,
  picture: undefined,
  color: undefined,
  size: undefined,
  dark: '3',
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
      props.color && props.color !== 'white' && props.hasBackground && `has-text-white`,
      props.color && props.color === 'white' && props.hasBackground && `has-text-black`,
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
      @error.once="(event) => onceImageErrored(event, '32x32')"
    />
    <i
      v-else-if="isIconify"
      aria-hidden="true"
      class="iconify"
      :data-icon="props.icon"
    ></i>
    <i v-else-if="props.icon" aria-hidden="true" :class="props.icon"></i>
    <slot name="after"></slot>
  </div>
</template>

<style lang="scss">
.icon-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  min-width: 32px;
  border-radius: var(--radius-rounded);
  background: var(--white);
  border: 1px solid var(--fade-grey-dark-3);
  box-shadow: var(--light-box-shadow);
  color: var(--primary);
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
    border-radius: var(--radius-rounded);
  }

  &.is-placeholder {
    background-color: var(--fade-grey-light-2) !important;
    border-color: var(--fade-grey-dark-3) !important;
    color: var(--light-text);

    i {
      font-size: 1.4rem;
    }
  }
}

.is-dark {
  .icon-wrap {
    border-color: transparent;
  }
}
</style>
