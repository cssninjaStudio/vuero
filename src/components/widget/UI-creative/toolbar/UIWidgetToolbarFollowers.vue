<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: 'UI Widget',
  },
  avatars: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="widget-toolbar">
    <div class="left">
      <h3>{{ props.title }}</h3>
    </div>
    <div class="right">
      <AvatarStack :avatars="avatars" :limit="3" size="small" />
    </div>
  </div>
</template>
