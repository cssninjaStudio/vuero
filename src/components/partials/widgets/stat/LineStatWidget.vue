<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'Line stats widget',
  },
  currentLabel: {
    type: String,
    default: 'Current Label',
  },
  currentValue: {
    type: String,
    default: '$75,648.43',
  },
  previousLabel: {
    type: String,
    default: 'Previous Label',
  },
  previousValue: {
    type: String,
    default: '$91,512.18',
  },
  straight: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    class="stat-widget line-stats-widget"
    :class="[props.straight && 'is-straight']"
  >
    <div class="widget-head">
      <h3 class="dark-inverted">{{ props.title }}</h3>
    </div>
    <div class="line-stats">
      <div class="line-stat">
        <span>{{ props.currentLabel }}</span>
        <span class="current">{{ props.currentValue }}</span>
      </div>
      <div class="line-stat">
        <span>{{ props.previousLabel }}</span>
        <span class="dark-inverted">{{ props.previousValue }}</span>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
