<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: 'List Widget'
  },
  straight: {
      type: Boolean,
      default: false
  }
})
</script>

<template>
  <div class="list-widget list-widget-v1" :class="[straight && 'is-straight']">
    <div class="widget-head">
      <h3 class="dark-inverted">{{ props.title }}</h3>
      <ListWidgetMainDropdown />
    </div>

    <div class="inner-list">
      <slot></slot>
    </div>
  </div>
</template>