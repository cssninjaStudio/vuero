<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    currentLabel?: string
    currentValue?: string
    previousLabel?: string
    previousValue?: string
    straight?: boolean
  }>(),
  {
    title: 'Line stats widget',
    currentLabel: 'Current Label',
    currentValue: '$75,648.43',
    previousLabel: 'Previous Label',
    previousValue: '$91,512.18',
  }
)
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
