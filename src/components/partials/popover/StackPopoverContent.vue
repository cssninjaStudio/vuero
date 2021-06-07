<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'

type Stack = {
  logo: string
  name: string
  description: string
  subtitle?: string
  homepage?: string
  github?: string
}

const props = defineProps({
  stack: {
    type: Object as PropType<Stack>,
  },
})
</script>

<template>
  <div class="v-popover-profile has-loader">
    <div class="profile-popover-block">
      <div class="profile-popover-wrapper">
        <div v-if="stack.logo" class="popover-avatar">
          <img class="avatar" :src="stack.logo" alt="" />
        </div>
        <div class="popover-meta">
          <span class="stack-meta">
            <span class="stackname dark-inverted">{{ stack.name }}</span>
          </span>
          <span v-if="stack.subtitle" class="job-title mb-1">{{
            stack.subtitle
          }}</span>
          <span class="bio">{{ stack.description }}</span>
        </div>
      </div>
      <div class="popover-actions">
        <a v-if="stack.homepage" class="popover-icon" :href="stack.homepage">
          <i aria-hidden="true" class="iconify" data-icon="feather:link"></i>
        </a>
        <a v-if="stack.github" class="popover-icon" :href="stack.github">
          <i aria-hidden="true" class="iconify" data-icon="feather:github"></i>
        </a>
      </div>
    </div>
  </div>
</template>
