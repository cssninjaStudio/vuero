<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    channels?: any[]
  }>(),
  {
    channels: () => [],
  }
)
</script>

<template>
  <div class="channels">
    <div v-for="channel in props.channels" :key="channel.id" class="channel">
      <div class="channel-icon">
        <i aria-hidden="true" :class="channel.icon"></i>
      </div>
      <div class="channel-stats">
        <span>{{ channel.count }}</span>
      </div>
    </div>
  </div>
</template>
