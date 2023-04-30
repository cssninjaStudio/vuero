<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    currentLabel?: string
    currentValue?: string
    previousLabel?: string
    previousValue?: string
    straight?: boolean
  }>(),
  {
    title: 'Line stats widget',
    currentLabel: 'Current Label',
    currentValue: '$75,648.43',
    previousLabel: 'Previous Label',
    previousValue: '$91,512.18',
  }
)
</script>

<template>
  <div class="stat-widget line-stats-widget" :class="[props.straight && 'is-straight']">
    <div class="widget-head">
      <h3 class="dark-inverted">{{ props.title }}</h3>
    </div>
    <div class="line-stats">
      <div class="line-stat">
        <span>{{ props.currentLabel }}</span>
        <span class="current">{{ props.currentValue }}</span>
      </div>
      <div class="line-stat">
        <span>{{ props.previousLabel }}</span>
        <span class="dark-inverted">{{ props.previousValue }}</span>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<style lang="scss">
.stat-widget {
  &.line-stats-widget {
    .line-stats,
    .area-stats {
      display: flex;

      .line-stat,
      .area-stat {
        margin-inline-end: 30px;
        font-family: var(--font);

        span {
          display: block;

          &:first-child {
            color: var(--light-text);
            font-size: 0.9rem;
          }

          &:nth-child(2) {
            color: var(--dark-text);
            font-size: 1.2rem;
            font-weight: 600;
          }

          &.current {
            color: var(--primary);
          }
        }
      }
    }
  }
}
</style>
