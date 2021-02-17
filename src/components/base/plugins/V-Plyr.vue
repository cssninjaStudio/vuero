<script lang="ts">
import 'plyr/dist/plyr.css'
</script>

<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps, onBeforeUnmount, onMounted, ref } from 'vue'
import Plyr from 'plyr'

const props = defineProps({
  ratio: {
    type: String,
    default: '16by9',
  },
  source: {
    type: String,
    default: '',
  },
  poster: {
    type: String,
    default: '',
  },
  reversed: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Object as PropType<Plyr.Options>,
    default: () => ({}),
  },
})

const player = ref<Plyr | null>(null)
const videoElement = ref<HTMLElement | null>(null)

onMounted(() => {
  if (videoElement.value) {
    player.value = new Plyr(videoElement.value, props.options)
  }
})

onBeforeUnmount(() => {
  if (player.value) {
    player.value.destroy()
    player.value = null
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
