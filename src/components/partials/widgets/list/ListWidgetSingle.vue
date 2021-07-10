<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: 'List Widget',
  },
  straight: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="list-widget" :class="[props.straight && 'is-straight']">
    <div class="widget-head">
      <h3 class="dark-inverted">{{ props.title }}</h3>
      <ListWidgetMainDropdown />
    </div>

    <div class="inner-list">
      <slot></slot>
    </div>
  </div>
</template>
