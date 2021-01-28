<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
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
  <div class="list-widget" :class="[straight && 'is-straight']">
    <div class="widget-head">
      <h3 class="dark-inverted">{{ title }}</h3>
      <ListWidgetMainDropdown />
    </div>

    <div class="inner-list">
      <slot></slot>
    </div>
  </div>
</template>
