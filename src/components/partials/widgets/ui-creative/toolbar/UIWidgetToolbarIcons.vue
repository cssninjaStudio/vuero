<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  tabs: {
    type: Array,
    required: true,
  },
  activeTab: {
    type: Number,
    default: 0,
  },
})
const currentTab = ref(props.activeTab)
</script>

<template>
  <div class="icon-toolbar">
    <div v-for="(tab, index) in tabs" :key="tab.id" class="toolbar-icon">
      <a
        class="inner-icon"
        :class="{ 'is-active': currentTab === index }"
        @click="currentTab = index"
      >
        <i aria-hidden="true" class="iconify" :data-icon="currentTab.icon"></i>
      </a>
    </div>
  </div>
</template>
