<script setup lang="ts">
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
      v-for="item in props.list"
      :key="item.id"
      class="creative-list-item"
      :class="'is-' + item.color"
    >
      <V-Avatar :picture="item.picture" :squared="props.squared" />
      <div class="meta">
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>
