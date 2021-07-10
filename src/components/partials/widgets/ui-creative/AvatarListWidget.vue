<script setup lang="ts">
const props = defineProps({
  avatars: {
    type: Array,
    required: true,
  },
  squared: {
    type: Boolean,
    default: false,
  },
  straight: {
    type: Boolean,
    default: false,
  },
})
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
        <V-Avatar :picture="avatar.picture" :squared="props.squared" />
        <div class="meta">
          <span>{{ avatar.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
