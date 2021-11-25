<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    values?: any[]
    labels?: any[]
    straight?: boolean
    gauge?: boolean
  }>(),
  {
    title: 'Grouped stats widget',
    values: () => [],
    labels: () => [],
  }
)
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

<style lang="scss">
.stat-widget {
  &.grouped-stat-widget {
    .chart-group {
      display: flex;

      .group {
        text-align: center;
        width: 33.3%;

        .chart-container {
          margin-top: -5px;

          &.is-gauge {
            margin-bottom: 30px;
          }
        }

        span {
          display: block;
          margin-top: -25px;
          font-family: var(--font);
          color: var(--dark-text);
          font-weight: 600;
          font-size: 1.2rem;
        }

        p {
          font-size: 0.9rem;
        }
      }
    }
  }
}
</style>
