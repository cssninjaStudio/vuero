<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    list?: any[]
  }>(),
  {
    list: () => [],
  }
)
</script>

<template>
  <div class="icon-list">
    <div v-for="item in props.list" :key="item.id" class="icon-list-item">
      <VIconWrap :icon="item.icon" />

      <div class="item-meta">
        <span>{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>
