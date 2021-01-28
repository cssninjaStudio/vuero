<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  list: {
    type: Array,
    required: true,
  },
  squared: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="creative-list">
    <div
      v-for="item in list"
      :key="item.id"
      class="creative-list-item"
      :class="'is-' + item.color"
    >
      <V-Avatar :picture="item.picture" :squared="squared" />
      <div class="meta">
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>
