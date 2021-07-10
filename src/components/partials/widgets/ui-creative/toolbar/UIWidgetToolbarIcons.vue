<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
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
    <div v-for="(tab, index) in props.tabs" :key="tab.id" class="toolbar-icon">
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
