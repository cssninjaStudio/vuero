<script setup lang="ts">
const props = defineProps({
  notifications: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="widget-content">
    <ul>
      <li v-for="notification in props.notifications" :key="notification.id">
        <a>
          <span>{{ notification.category }}</span>
          <V-Tag rounded :label="notification.count" />
        </a>
      </li>
    </ul>
  </div>
</template>
