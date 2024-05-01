<script setup lang="ts">
const props = withDefaults(defineProps<{
  size?: 'default' | 'large' | 'wide'
}>(), {
  size: 'default',
})
</script>

<template>
  <div class="page-content-wrapper" :class="[`is-size-${props.size}`]">
    <slot />
  </div>
</template>

<style lang="scss">
/* ==========================================================================
3. Page Content
========================================================================== */

.page-content-wrapper {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  &.is-size-default {
    padding-bottom: 100px;
  }

  &.is-size-large {
    padding-bottom: 100px;
  }

  &.is-size-wide {
    padding-bottom: 32px;
  }

  .page-content {
    padding: 0 40px;

    &.is-relative {
      position: relative;
    }

    &.kanban-content {
      padding: 0 20px;
    }

    &.chat-content {
      padding: 0 40px;
    }

    &.card-content {
      padding: 0 20px;
    }

    &.waterfall-content {
      overflow: hidden;
    }

    &.projects-content {
      padding: 0 40px;
    }
  }
}

// Enable this setting if you want the dashboard to be larger
@media only screen and (width >= 1408px) {
  .page-content-wrapper {
    &.is-size-large {
      max-width: 1380px;
    }

    &.is-size-wide {
      max-width: none;
    }
  }
}

@media only screen and (device-width >= 768px) and (device-width <= 1024px) and (orientation: portrait) {
  .page-content-wrapper {
    .page-content {
      padding: 0;
    }
  }
}
</style>
