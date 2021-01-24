<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
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
    default: '/images/avatars/photos/7.jpg',
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
        <V-Avatar :picture="props.picture" />
        <div class="meta">
          <span>{{ props.user }} just sent you an inbox message.</span>
        </div>
      </div>
      <div class="exerpt">
        <h5>
          <i class="fas fa-circle"></i>
          <span>{{ props.title }}</span>
        </h5>
        <p>
          Where are we in terms of design? We need to review the new screens.
        </p>
        <small>{{ props.time }}</small>
      </div>
    </div>
  </div>
</template>
