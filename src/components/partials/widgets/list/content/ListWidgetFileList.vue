<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  files: {
    type: Array,
    required: true,
    default: [],
  },
})
</script>

<template>
  <div>
    <div
      v-for="file in files"
      :key="file.id"
      class="inner-list-item media-flex-center"
    >
      <img class="image-icon" :src="file.icon" alt="" />
      <div class="flex-meta is-light">
        <a href="#">{{ file.name }}</a>
        <span>{{ file.type }}</span>
      </div>
      <div class="flex-end">
        <ListWidgetFileDropdown />
      </div>
    </div>
  </div>
</template>
