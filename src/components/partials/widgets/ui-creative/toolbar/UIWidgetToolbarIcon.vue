<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    icon?: string
  }>(),
  {
    title: 'UI Widget',
    icon: 'feather:bell',
  }
)
</script>

<template>
  <div class="widget-toolbar">
    <div class="left">
      <h3>{{ props.title }}</h3>
    </div>
    <div class="right">
      <a class="right-icon has-indicator">
        <i aria-hidden="true" class="iconify" :data-icon="props.icon"></i>
      </a>
    </div>
  </div>
</template>
