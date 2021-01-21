<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
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
      <Avatar :picture="item.picture" :squared="squared" />
      <div class="meta">
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>
