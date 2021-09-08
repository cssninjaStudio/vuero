<script setup lang="ts">
export type IconWrapsAlign = 'centered' | 'right'

const props = withDefaults(
  defineProps<{
    align?: IconWrapsAlign
    addons?: boolean
  }>(),
  {
    align: undefined,
  }
)
</script>

<template>
  <div
    class="icon-wraps"
    :class="[props.addons && 'has-addons', props.align && `is-${props.align}`]"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.icon-wraps {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  &.is-centered {
    justify-content: center;
  }
  &.is-right {
    justify-content: flex-end;
  }

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  &:last-child {
    margin-bottom: -0.5rem;
  }

  &::v-deep(.icon-wrap:not(:last-child):not(.is-fullwidth)) {
    margin-right: 0.3rem;
  }
}
</style>
