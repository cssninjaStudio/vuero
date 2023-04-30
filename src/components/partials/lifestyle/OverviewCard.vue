<script setup lang="ts">
const props = defineProps<{
  metrics?: boolean
  heatmap?: boolean
}>()
</script>

<template>
  <div
    class="overview-card"
    :class="[props.metrics && 'is-metrics', props.heatmap && 'is-heatmap']"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.overview-card {
  @include vuero-s-card;

  font-family: var(--font);

  &.is-metrics,
  &.is-heatmap {
    padding: 30px;
  }

  .card-head {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.has-margin-bottom {
      margin-bottom: 16px;
    }

    h4 {
      color: var(--light-text-dark-2);
    }

    h3 {
      font-family: var(--font-alt);
      font-size: 1rem;
      font-weight: 600;
      color: var(--dark-text);
    }
  }

  .card-metric {
    font-weight: 700;
    font-size: 2.8rem;
    color: var(--dark-text);
    padding: 6px 0 16px;

    &.is-smaller {
      font-size: 2.5rem;
    }
  }

  .card-foot {
    display: flex;
    align-items: center;

    &.is-up {
      span span {
        color: var(--green);

        svg {
          transform: rotate(calc(var(--transform-direction) * -45deg));
        }
      }
    }

    &.is-down {
      span span {
        color: var(--red);

        svg {
          transform: rotate(calc(var(--transform-direction) * 45deg));
        }
      }
    }

    span {
      display: flex;
      color: var(--light-text);

      span {
        margin-inline-end: 8px;
        font-weight: 500;

        svg {
          height: 18px;
          width: 18px;
          stroke-width: 3px;
        }
      }
    }
  }

  .metric {
    .metric-head {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h4 {
        color: var(--light-text-dark-2);
      }
    }

    .metric {
      font-weight: 700;
      font-size: 2.8rem;
      color: var(--dark-text);
      padding: 10px 0;

      &.is-smaller {
        font-size: 2.5rem;
      }
    }

    .metric-foot {
      display: flex;
      align-items: center;

      &.is-up {
        span span {
          color: var(--green);

          svg {
            transform: rotate(calc(var(--transform-direction) * -45deg));
          }
        }
      }

      &.is-down {
        span span {
          color: var(--red);

          svg {
            transform: rotate(calc(var(--transform-direction) * 45deg));
          }
        }
      }

      span {
        display: flex;
        color: var(--light-text);

        span {
          margin-inline-end: 8px;
          font-weight: 500;

          svg {
            height: 18px;
            width: 18px;
            stroke-width: 3px;
          }
        }
      }
    }
  }
}

.is-dark {
  .overview-card {
    @include vuero-card--dark;

    .card-metric,
    .metric .metric {
      color: var(--dark-dark-text);
    }
  }
}

[dir='rtl'] {
  .overview-card {
    .card-head {
      flex-direction: row-reverse;
    }
  }
}
</style>
