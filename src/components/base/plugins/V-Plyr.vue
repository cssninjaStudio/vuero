<script lang="ts">
import 'plyr/dist/plyr.css'
</script>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import Plyr from 'plyr'

export type MediaFormat = '4by3' | '16by9'

const props = withDefaults(
  defineProps<{
    source: string
    poster: string
    reversed?: boolean
    ratio?: MediaFormat
    options?: Plyr.Options
  }>(),
  {
    ratio: '16by9',
    options: () => ({}),
  }
)

const player = ref<Plyr>()
const videoElement = ref<HTMLElement>()

onMounted(() => {
  if (videoElement.value) {
    player.value = new Plyr(videoElement.value, props.options)
  }
})

onBeforeUnmount(() => {
  if (player.value) {
    player.value.destroy()
    player.value = undefined
  }
})
</script>

<template>
  <div
    class="video-player-container"
    :class="[ratio && 'is-' + ratio, reversed && 'reversed-play']"
  >
    <!-- video element -->
    <video
      ref="videoElement"
      controls
      crossorigin
      playsinline
      :data-poster="poster"
    >
      <source :src="source" type="video/mp4" />
    </video>
  </div>
</template>
