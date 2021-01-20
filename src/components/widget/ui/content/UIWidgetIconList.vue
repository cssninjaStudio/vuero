<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
    list: {
        type: Array,
        required: true,
    },
})
</script>

<template>
  <div class="icon-list">
    <div v-for="item in list" :key="item.id" class="icon-list-item">
      <div class="icon-wrap">
        <i class="iconify" :data-icon="item.icon"></i>
      </div>
      <div class="item-meta">
        <span>{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>