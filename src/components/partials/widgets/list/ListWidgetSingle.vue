<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    straight?: boolean
  }>(),
  {
    title: 'List Widget',
  }
)
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
