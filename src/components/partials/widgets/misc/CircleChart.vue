<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    value?: number
    size?: number
  }>(),
  {
    value: 50,
    size: 60,
  }
)
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

<style lang="scss">
.circle-chart-wrapper {
  &.is-success {
    .circle-chart__circle {
      color: var(--success) !important;
      stroke: var(--success) !important;
    }
  }

  &.is-info {
    .circle-chart__circle {
      color: var(--info) !important;
      stroke: var(--info) !important;
    }
  }

  &.is-warning {
    .circle-chart__circle {
      color: var(--warning) !important;
      stroke: var(--warning) !important;
    }
  }

  &.is-danger {
    .circle-chart__circle {
      color: var(--danger) !important;
      stroke: var(--danger) !important;
    }
  }
}

.circle-chart__circle {
  animation: circle-chart-fill 2.4s reverse;
  transform: rotate(calc(var(--transform-direction) * 90deg));
  transform-origin: center;
  color: var(--primary);
  stroke: var(--primary);
  animation-timing-function: cubic-bezier(0.78, 0.59, 0.19, 0.33);
}

.circle-chart__circle_2 {
  animation: circle-chart-fill-3 4s reverse;
}

.circle-chart__background {
  color: #efefef;
  stroke: #efefef;
}

@keyframes circle-chart-fill {
  50% {
    stroke-dasharray: 0 0;
  }

  100% {
    stroke-dasharray: 0 100;
  }
}

@keyframes circle-chart-fill-2 {
  from {
    opacity: 1;
  }

  to {
    stroke-dasharray: 0 100;
    opacity: 0;
  }
}

@keyframes circle-chart-fill-3 {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 1;
    stroke-dasharray: 0 100;
  }

  100% {
    stroke-dasharray: 0 100;
    opacity: 0;
  }
}

.is-dark {
  .circle-chart-wrapper {
    &:not(.is-success, .is-info, .is-warning, .is-danger) {
      .circle-chart__circle {
        color: var(--primary) !important;
        stroke: var(--primary) !important;
      }
    }
  }

  .circle-chart__background {
    color: var(--dark-sidebar-dark-2);
    stroke: var(--dark-sidebar-dark-2);
  }
}
</style>
