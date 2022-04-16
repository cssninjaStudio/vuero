<script setup lang="ts">
const props = defineProps<{
  avatars: any[]
  squared?: boolean
  straight?: boolean
}>()
</script>

<template>
  <div class="widget avatar-list-widget" :class="[props.straight && 'is-straight']">
    <VField raw>
      <VControl icon="feather:search">
        <VInput placeholder="Search again..." />
      </VControl>
    </VField>
    <div class="avatar-list">
      <div v-for="avatar in props.avatars" :key="avatar.id" class="avatar-list-item">
        <VAvatar :picture="avatar.picture" :squared="props.squared" />
        <div class="meta">
          <span>{{ avatar.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
