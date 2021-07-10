<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'Grouped stats widget',
  },
  values: {
    type: Array,
    required: true,
  },
  labels: {
    type: Array,
    required: true,
  },
  straight: {
    type: Boolean,
    default: false,
  },
  gauge: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    class="stat-widget grouped-stat-widget is-straight"
    :class="[props.straight && 'is-straight']"
  >
    <div class="widget-head">
      <h3 class="dark-inverted">{{ props.title }}</h3>
    </div>
    <div class="chart-group">
      <div class="group">
        <div class="group-content">
          <div class="chart-container" :class="[props.gauge && 'is-gauge']">
            <slot name="chart1"></slot>
          </div>
          <span class="dark-inverted">{{ props.values[0] }}</span>
          <p>{{ props.labels[0] }}</p>
        </div>
      </div>
      <div class="group">
        <div class="group-content">
          <div class="chart-container" :class="[props.gauge && 'is-gauge']">
            <slot name="chart2"></slot>
          </div>
          <span class="dark-inverted">{{ props.values[1] }}</span>
          <p>{{ props.labels[1] }}</p>
        </div>
      </div>
      <div class="group">
        <div class="group-content">
          <div class="chart-container" :class="[props.gauge && 'is-gauge']">
            <slot name="chart3"></slot>
          </div>
          <span class="dark-inverted">{{ props.values[2] }}</span>
          <p>{{ props.labels[2] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
