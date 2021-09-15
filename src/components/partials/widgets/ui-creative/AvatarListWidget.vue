<script setup lang="ts">
const props = defineProps<{
  avatars: any[]
  squared?: boolean
  straight?: boolean
}>()
</script>

<template>
  <div
    class="widget avatar-list-widget"
    :class="[props.straight && 'is-straight']"
  >
    <div class="field">
      <div class="control">
        <input type="text" class="input" placeholder="Search..." />
        <button class="searcv-button">
          <i aria-hidden="true" class="iconify" data-icon="feather:search"></i>
        </button>
      </div>
    </div>
    <div class="avatar-list">
      <div
        v-for="avatar in props.avatars"
        :key="avatar.id"
        class="avatar-list-item"
      >
        <VAvatar :picture="avatar.picture" :squared="props.squared" />
        <div class="meta">
          <span>{{ avatar.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
