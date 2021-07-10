<script setup lang="ts">
const props = defineProps({
  list: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="icon-list">
    <div v-for="item in props.list" :key="item.id" class="icon-list-item">
      <V-IconWrap :icon="item.icon" />

      <div class="item-meta">
        <span>{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>
