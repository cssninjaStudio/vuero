<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  channels: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="channels">
    <div v-for="channel in channels" :key="channel.id" class="channel">
      <div class="channel-icon">
        <i aria-hidden="true" :class="channel.icon"></i>
      </div>
      <div class="channel-stats">
        <span>{{ channel.count }}</span>
      </div>
    </div>
  </div>
</template>
