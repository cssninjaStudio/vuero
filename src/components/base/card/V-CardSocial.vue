<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  avatar: {
    type: String,
    default: 'https://via.placeholder.com/150x150',
  },
  username: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: 'Featured Post',
  },
  network: {
    type: String,
    default: 'twitter',
  },
  hashtags: {
    type: Array,
  },
  icon: {
    type: String,
    default: 'fa fa-check',
  },
})
</script>

<template>
  <div class="card v-card">
    <header class="card-header">
      <div class="card-header-title">{{ props.title }}</div>
      <a
        href="#"
        class="card-header-icon"
        :class="[network && `text-${network}`]"
      >
        <span class="icon">
          <i :class="icon"></i>
        </span>
      </a>
    </header>
    <div class="card-content">
      <div class="media-flex p-b-10">
        <V-Avatar size="medium" :picture="avatar" squared />
        <div class="flex-meta">
          <span>{{ props.username }}</span>
          <span>
            {{ props.text }}
          </span>
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
      <a href="#" class="card-footer-item">Save</a>
      <a href="#" class="card-footer-item">Edit</a>
    </footer>
  </div>
</template>
