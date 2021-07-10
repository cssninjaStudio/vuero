<script setup lang="ts">
const props = defineProps({
  value: {
    type: Number,
    default: 50,
  },
  size: {
    type: Number,
    default: 60,
  },
})
</script>

<template>
  <svg
    class="circle-chart"
    viewBox="0 0 45 45"
    :width="props.size"
    :height="props.size"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      class="circle-chart__background"
      stroke-width="5"
      fill="none"
      cx="50%"
      cy="50%"
      r="15.91549431"
    />
    <circle
      class="circle-chart__circle"
      stroke-width="5"
      :stroke-dasharray="`${props.value},100`"
      stroke-linecap="round"
      fill="none"
      cx="50%"
      cy="50%"
      r="15.91549431"
    />
  </svg>
</template>
