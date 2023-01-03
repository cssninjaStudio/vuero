<script setup lang="ts">
import { type UserPopover } from '/@src/models/users'

const props = defineProps<{
  user: UserPopover
}>()
</script>

<template>
  <div class="v-popover-profile has-loader">
    <div class="profile-popover-block">
      <div class="profile-popover-wrapper">
        <div v-if="props.user.avatar" class="popover-avatar">
          <img class="avatar" :src="props.user.avatar" alt="" />
          <img v-if="props.user.badge" class="badge" :src="props.user.badge" alt="" />
        </div>
        <div
          v-else
          class="popover-fake-avatar"
          :class="[props.user.color && `is-${props.user.color}`]"
        >
          <div class="fake-avatar">
            <span>{{ props.user.initials }}</span>
          </div>
          <img v-if="props.user.badge" class="badge" :src="props.user.badge" alt="" />
        </div>
        <div class="popover-meta">
          <span class="user-meta">
            <span class="username">{{ props.user.username }}</span>
            <span class="location">{{ props.user.location }}</span>
          </span>
          <span class="job-title mb-1">{{ props.user.position }}</span>
          <span class="bio">{{ props.user.bio }}</span>
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
