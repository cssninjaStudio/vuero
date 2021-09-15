<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    tags?: any[]
  }>(),
  {
    tags: () => [],
  }
)
</script>

<template>
  <div class="widget-content">
    <div class="tags">
      <VTag
        v-for="tag in props.tags"
        :key="tag.id"
        :color="tag.color"
        curved
        :outlined="!tag.popular"
        :label="tag.title"
      />
    </div>
  </div>
</template>
