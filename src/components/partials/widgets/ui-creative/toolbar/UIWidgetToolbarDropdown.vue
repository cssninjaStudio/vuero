<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
    default: 'UI Widget',
  },
})
</script>

<template>
  <div class="widget-toolbar">
    <div class="left">
      <h3>{{ title }}</h3>
    </div>
    <div class="right">
      <WidgetDropdown />
    </div>
  </div>
</template>
