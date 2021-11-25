<script setup lang="ts">
export type VLoaderSize = 'small' | 'large' | 'xl'
export type VLoaderWrapperRadius = 'regular' | 'smooth' | 'rounded'
export interface VLoaderProps {
  size?: VLoaderSize
  card?: VLoaderWrapperRadius
  active?: boolean
  grey?: boolean
  translucent?: boolean
}

const props = withDefaults(defineProps<VLoaderProps>(), {
  size: undefined,
  card: undefined,
})
</script>

<template>
  <div class="has-loader" :class="[props.active && 'has-loader-active']">
    <div
      v-if="props.active"
      class="v-loader-wrapper is-active"
      :class="[
        grey && 'is-grey',
        translucent && 'is-translucent',
        card === 'regular' && 's-card',
        card === 'smooth' && 'r-card',
        card === 'rounded' && 'l-card',
      ]"
    >
      <div class="loader is-loading" :class="[props.size && `is-${props.size}`]"></div>
    </div>

    <slot></slot>
  </div>
</template>

<style lang="scss">
.has-loader {
  position: relative;

  &.has-loader-active {
    overflow: hidden;
  }

  .v-loader-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background: var(--white);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
    z-index: 5;

    &.is-active {
      opacity: 1;
      pointer-events: all;

      &.is-translucent {
        opacity: 0.65;
      }
    }

    &.is-grey {
      background: var(--background-grey);
    }

    .loader {
      height: 3rem;
      width: 3rem;

      &.is-small {
        height: 2rem;
        width: 2rem;
      }

      &.is-large {
        height: 5rem;
        width: 5rem;
      }

      &.is-xl {
        height: 7rem;
        width: 7rem;
      }
    }
  }
}

.is-dark {
  .has-loader {
    .v-loader-wrapper {
      background: var(--dark-sidebar-light-6);

      &.is-grey {
        background: var(--dark-sidebar-light-10);
      }
    }
  }
}

$grey-lighter: hsl(0deg 0% 86%) !default;
$radius-rounded: 290486px !default;

@keyframes spinAroundLoader {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}

@mixin loader {
  animation: spinAroundLoader 500ms infinite linear;
  border: 2px solid $grey-lighter;
  border-radius: var(--radius-rounded);
  border-right-color: transparent;
  border-top-color: transparent;
  content: '';
  display: block;
  height: 1em;
  position: relative;
  width: 1em;
}

%loader {
  @include loader;
}
</style>
