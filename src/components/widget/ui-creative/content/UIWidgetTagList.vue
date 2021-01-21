<script setup lang="ts">
import { defineProps } from 'vue'

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
      <Tag
        v-for="tag in tags"
        :key="tag.id"
        :color="tag.color"
        curved
        :outlined="!tag.popular"
        :label="tag.title"
      />
    </div>
  </div>
</template>
