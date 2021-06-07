<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true,
    default: 'Design Project',
  },
  user: {
    type: String,
    required: true,
    default: 'Alice C.',
  },
  picture: {
    type: String,
    required: true,
    default: '/demo/avatars/7.jpg',
  },
  time: {
    type: String,
    required: true,
    default: '28 minutes ago',
  },
})
</script>

<template>
  <div class="widget-content">
    <div class="sender-block">
      <div class="sender-block-inner">
        <V-Avatar :picture="picture" />
        <div class="meta">
          <span>{{ user }} just sent you an inbox message.</span>
        </div>
      </div>
      <div class="exerpt">
        <h5>
          <i aria-hidden="true" class="fas fa-circle"></i>
          <span>{{ title }}</span>
        </h5>
        <p>
          Where are we in terms of design? We need to review the new screens.
        </p>
        <small>{{ time }}</small>
      </div>
    </div>
  </div>
</template>
