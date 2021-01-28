<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  notifications: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="widget-content">
    <ul>
      <li v-for="notification in notifications" :key="notification.id">
        <a>
          <span>{{ notification.category }}</span>
          <V-Tag rounded :label="notification.count" />
        </a>
      </li>
    </ul>
  </div>
</template>
