<script setup lang="ts">
export type MinimalTheme = 'darker' | 'light'

const props = withDefaults(
  defineProps<{
    theme?: MinimalTheme
  }>(),
  {
    theme: 'darker',
  },
)
</script>

<template>
  <div
    class="minimal-wrapper"
    :class="[props.theme]"
  >
    <slot />
  </div>
</template>

<style lang="scss">
.minimal-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: var(--lighter-grey);

  &.light {
    background: var(--white);
  }

  &.lighter {
    background: var(--smoke-white);
  }

  &.darker {
    background: var(--background-grey);
  }

  .minimal-wrap {
    min-height: calc(100vh - 60px);
  }
}

.is-dark {
  .minimal-wrapper {
    background: color-mix(in oklab, var(--dark-sidebar), white 10%);
    border-color: color-mix(in oklab, var(--dark-sidebar), white 10%);
  }
}
</style>
