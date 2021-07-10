<script setup lang="ts">
import type { PropType } from 'vue'

type User = {
  avatar: string
  badge: string
  username: string
  location: string
  position: string
  bio: string
}

const props = defineProps({
  user: {
    type: Object as PropType<User>,
    default: undefined,
  },
})
</script>

<template>
  <div class="v-popover-profile has-loader">
    <div class="profile-popover-block">
      <div class="profile-popover-wrapper">
        <div v-if="user.avatar" class="popover-avatar">
          <img class="avatar" :src="user.avatar" alt="" />
          <img v-if="user.badge" class="badge" :src="user.badge" alt="" />
        </div>
        <div
          v-else
          class="popover-fake-avatar"
          :class="[user.color && `is-${user.color}`]"
        >
          <div class="fake-avatar">
            <span>{{ user.initials }}</span>
          </div>
          <img v-if="user.badge" class="badge" :src="user.badge" alt="" />
        </div>
        <div class="popover-meta">
          <span class="user-meta">
            <span class="username">{{ user.username }}</span>
            <span class="location">{{ user.location }}</span>
          </span>
          <span class="job-title mb-1">{{ user.position }}</span>
          <span class="bio">{{ user.bio }}</span>
        </div>
      </div>
      <div class="popover-actions">
        <a class="popover-icon">
          <i aria-hidden="true" class="iconify" data-icon="feather:phone"></i>
        </a>
        <a class="popover-icon">
          <i aria-hidden="true" class="iconify" data-icon="feather:mail"></i>
        </a>
        <a class="popover-icon">
          <i aria-hidden="true" class="iconify" data-icon="feather:user"></i>
        </a>
      </div>
    </div>
  </div>
</template>
