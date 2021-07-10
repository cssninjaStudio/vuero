<script setup lang="ts">
const props = defineProps({
  days: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="calendar-widget-inner">
    <div v-for="day in props.days" :key="day.id" class="calendar-square">
      <div class="date">
        <span>{{ day.date }}</span>
        <span>{{ day.name }}</span>
      </div>
    </div>
  </div>
</template>
