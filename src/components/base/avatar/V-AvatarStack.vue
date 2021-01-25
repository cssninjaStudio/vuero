<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  avatars: {
    type: Array,
    required: true,
    default: [],
  },
  limit: {
    type: Number,
    default: 5,
  },
  size: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="avatar-stack">
    <V-Avatar
      v-for="avatar in avatars.slice(0, limit)"
      :key="avatar.id"
      :picture="avatar.picture"
      :size="props.size"
      :initials="avatar.initials"
      :color="avatar.color"
    />
    <div
      v-if="avatars.length > limit"
      class="v-avatar"
      :class="[size && 'is-' + size]"
    >
      <span class="avatar is-more">
        <span class="inner">
          <span>+{{ avatars.length - limit }}</span>
        </span>
      </span>
    </div>
  </div>
</template>
