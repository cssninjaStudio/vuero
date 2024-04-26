<script setup lang="ts">
import { type RouteLocationAsString } from 'unplugin-vue-router'

export type VActionDark = '1' | '2' | '3' | '4' | '5' | '6'
export interface VActionProps {
  to?: RouteLocationAsString
  dark?: VActionDark
  active?: boolean
  rounded?: boolean
  grey?: boolean
}

const props = withDefaults(defineProps<VActionProps>(), {
  to: undefined,
  dark: undefined,
})
</script>

<template>
  <RouterLink
    v-if="props.to"
    :to="props.to"
    class="button v-action"
    :class="[
      props.active && 'is-active',
      props.rounded && 'is-rounded',
      props.dark && `is-dark-bg-${props.dark}`,
      props.grey && 'is-grey',
    ]"
  >
    <slot />
  </RouterLink>
  <button
    v-else
    class="button v-action"
    :class="[
      props.active && 'is-active',
      props.rounded && 'is-rounded',
      props.dark && `is-dark-bg-${props.dark}`,
      props.grey && 'is-grey',
    ]"
  >
    <slot />
  </button>
</template>

<style lang="scss">
.button {
  font-family: var(--font);
  transition: all 0.3s; // transition-all test

  &.v-action {
    padding: 8px 16px;
    font-weight: 500;
    font-size: 0.9rem;
    line-height: 0;
    border-radius: 3px;
    background: var(--white);
    color: var(--dark-text);
    border: 1px solid var(--placeholder);
    transition: border-color 0.3s; // transition-all test
    cursor: pointer;
    box-shadow: none !important;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &.is-rounded {
      border-radius: 500px;
    }

    &:focus-visible {
      outline-offset: var(--accessibility-focus-outline-offset);
      outline-width: var(--accessibility-focus-outline-width);
      outline-style: var(--accessibility-focus-outline-style);
      outline-color: var(--accessibility-focus-outline-color);
    }

    &:hover,
    &:focus {
      border-color: var(--primary);
      box-shadow: var(--primary-box-shadow);
    }

    &:not(.is-active) {
      &:focus {
        color: var(--dark-text) !important;
      }

      &:active {
        background: var(--smoke-white);
      }
    }

    &:focus-visible {
      outline-color: var(--primary);
    }

    &.is-grey {
      background: var(--fade-grey-light-2);
      border-color: var(--fade-grey-light-2);
      color: var(--muted-grey);
    }

    &.is-active {
      background: var(--primary);
      border-color: var(--primary);
      color: var(--smoke-white);
      box-shadow: var(--primary-box-shadow);
    }
  }
}

.is-dark {
  .button {
    &.v-action {
      background: var(--dark-sidebar-light-10);
      border-color: var(--dark-sidebar-light-12);
      color: var(--dark-dark-text);

      &:hover,
      &:focus {
        background: var(--primary);
        border-color: var(--primary);
        color: var(--smoke-white);
        text-shadow: 0 0 1px rgb(0 0 0 / 70%);
      }

      &:focus {
        color: var(--smoke-white) !important;
      }

      &.is-active {
        background: var(--primary) !important;
        border-color: var(--primary) !important;
        box-shadow: var(--primary-box-shadow) !important;
        color: var(--dark-sidebar-dark-2) !important;
        text-shadow: none;
      }
    }
  }
}
</style>
