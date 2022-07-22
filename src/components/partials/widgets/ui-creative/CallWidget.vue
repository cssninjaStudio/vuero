<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'

const props = defineProps<{
  picture: string
  badge: string
  username: string
  straight?: boolean
}>()
</script>

<template>
  <div class="widget call-widget" :class="[props.straight && 'is-straight']">
    <div class="img-container">
      <img class="main" :src="props.picture" alt="" />
      <img class="badge" :src="props.badge" alt="" @error.once="onceImageErrored(150)" />
    </div>
    <h3>Call {{ props.username }}?</h3>
    <div class="actions">
      <a class="action">
        <i aria-hidden="true" class="iconify" data-icon="feather:message-square"></i>
      </a>
      <a class="action">
        <i aria-hidden="true" class="iconify" data-icon="feather:phone"></i>
      </a>
      <a class="action">
        <i aria-hidden="true" class="iconify" data-icon="feather:video"></i>
      </a>
    </div>
  </div>
</template>
