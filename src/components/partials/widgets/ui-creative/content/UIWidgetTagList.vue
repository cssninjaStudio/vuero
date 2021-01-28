<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
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
