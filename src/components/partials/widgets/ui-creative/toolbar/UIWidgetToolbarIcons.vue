<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  tabs: {
    type: Array,
    required: true,
  },
  currentTab: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <div class="icon-toolbar">
    <div v-for="(tab, index) in tabs" :key="tab.id" class="toolbar-icon">
      <a
        class="inner-icon"
        :class="{ 'is-active': currentTab === index }"
        @click="currentTab = index"
      >
        <i aria-hidden="true" class="iconify" :data-icon="tab.icon"></i>
      </a>
    </div>
  </div>
</template>
