<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  list: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="icon-list">
    <div v-for="item in list" :key="item.id" class="icon-list-item">
      <V-IconWrap :icon="item.icon" />

      <div class="item-meta">
        <span>{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>
