<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
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
  <div class="widget avatar-list-widget" :class="[straight && 'is-straight']">
    <div class="field">
      <div class="control">
        <input type="text" class="input" placeholder="Search..." />
        <button class="searcv-button">
          <i aria-hidden="true" class="iconify" data-icon="feather:search"></i>
        </button>
      </div>
    </div>
    <div class="avatar-list">
      <div v-for="avatar in avatars" :key="avatar.id" class="avatar-list-item">
        <V-Avatar :picture="avatar.picture" :squared="squared" />
        <div class="meta">
          <span>{{ avatar.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
