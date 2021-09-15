<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    avatars?: any[]
  }>(),
  {
    title: 'UI Widget',
    avatars: () => [],
  }
)
</script>

<template>
  <div class="widget-toolbar">
    <div class="left">
      <h3>{{ props.title }}</h3>
    </div>
    <div class="right">
      <VAvatarStack :avatars="props.avatars" :limit="3" size="small" />
    </div>
  </div>
</template>
