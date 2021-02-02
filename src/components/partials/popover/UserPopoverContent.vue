<script setup lang="ts">
import { defineProps, onMounted, ref, watch } from 'vue'
import { tippy } from 'vue-tippy'
import sleep from '/@src/utils/sleep'

const props = defineProps({
  userId: {
    type: String,
    default: '19',
  },
  tippyState: {
    type: Object,
  },
})

const isLoading = ref(false)

onMounted(async () => {
  console.log('mounted?')
  isLoading.value = true
  await sleep(3000)
  isLoading.value = false
})
watch(
  props,
  () => {
    console.log('watch?', props.tippyState)
  },
  { deep: true }
)
</script>

<template>
  <div class="v-popover-profile has-loader">
    <div class="profile-popover-block">
      <V-Loader :active="isLoading" />
      <div class="profile-popover-wrapper">
        <div class="popover-avatar">
          <img class="avatar" :src="tippyState.avatar" />
          <img class="badge" :src="tippyState.badge" />
        </div>
        <div class="popover-meta">
          <span class="user-meta">
            <span class="username">{{ tippyState.username }}</span>
            <span class="location">{{ tippyState.location }}</span>
          </span>
          <span class="job-title mb-1">{{ tippyState.position }}</span>
          <span class="bio">{{ tippyState.bio }}</span>
        </div>
      </div>
      <div class="popover-actions">
        <a class="popover-icon">
          <i class="iconify" data-icon="feather:phone"></i>
        </a>
        <a class="popover-icon">
          <i class="iconify" data-icon="feather:mail"></i>
        </a>
        <a class="popover-icon">
          <i class="iconify" data-icon="feather:user"></i>
        </a>
      </div>
    </div>
  </div>
</template>
