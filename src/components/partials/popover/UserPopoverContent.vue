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
  <V-MediaCard
    class="demo-s-card"
    avatar="/images/avatars/photos/19.jpg"
    badge="/images/icons/flags/germany.svg"
    title="Greta K."
    subtitle="Sales Manager"
    content="I can be used as is in any layout. L Cards are simple containers that can hold any type of content, from simple plain text to more structured markup."
    radius="smooth"
    :loading="isLoading"
  >
    <template #loader>
      <V-Loader :active="isLoading" />
    </template>
  </V-MediaCard>
</template>
