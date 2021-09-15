<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    list?: any[]
    squared?: boolean
  }>(),
  {
    list: () => [],
  }
)
</script>

<template>
  <div class="creative-list">
    <div
      v-for="item in props.list"
      :key="item.id"
      class="creative-list-item"
      :class="'is-' + item.color"
    >
      <VAvatar :picture="item.picture" :squared="props.squared" />
      <div class="meta">
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>
