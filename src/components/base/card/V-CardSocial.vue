<script setup lang="ts">
import { defineProps, computed, defineEmit, PropType } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: undefined,
  },
  username: {
    type: String,
    default: undefined,
  },
  network: {
    type: String,
    default: undefined,
  },
  icon: {
    type: String,
    default: undefined,
  },
  hashtags: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
})

const emit = defineEmit(['icon', 'save', 'edit'])

const isIconify = computed(() => {
  return props.icon && props.icon.indexOf(':') !== -1
})
</script>

<template>
  <div class="card v-card">
    <header class="card-header">
      <div class="card-header-title">{{ title }}</div>
      <a
        v-if="icon"
        class="card-header-icon"
        :class="[network && `text-${network}`]"
        @click="emit('icon')"
      >
        <span v-if="isIconify" class="icon">
          <i class="iconify" :data-icon="icon"></i>
        </span>
        <span v-else-if="icon" class="icon">
          <i :class="icon"></i>
        </span>
      </a>
    </header>
    <div class="card-content">
      <div class="media-flex p-b-10">
        <V-Avatar size="medium" :picture="avatar" squared />
        <div class="flex-meta">
          <span v-if="username">{{ username }}</span>
          <slot></slot>
          <span>
            <a
              v-for="(hashtag, index) in hashtags"
              :key="index"
              class="px-1"
              :class="[network && `text-${network}`]"
              href="#"
              >{{ hashtag }}</a
            >
          </span>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item" @click="emit('save')">Save</a>
      <a class="card-footer-item" @click="emit('edit')">Edit</a>
    </footer>
  </div>
</template>
