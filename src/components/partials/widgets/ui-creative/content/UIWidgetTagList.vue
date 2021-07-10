<script setup lang="ts">
const props = defineProps({
  tags: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="widget-content">
    <div class="tags">
      <V-Tag
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
