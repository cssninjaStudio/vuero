<script setup lang="ts">
export type VProgressSize = 'tiny' | 'smaller' | 'small'
export type VProgressColor = 'primary' | 'success' | 'info' | 'warning' | 'danger'
export interface VProgressProps {
  value?: number
  max?: number
  size?: VProgressSize
  color?: VProgressColor
}

const props = withDefaults(defineProps<VProgressProps>(), {
  value: undefined,
  max: 100,
  size: undefined,
  color: 'primary',
})
</script>

<template>
  <progress
    class="progress"
    :class="[props.size && `is-${props.size}`, props.color && `is-${props.color}`]"
    :value="props.value"
    :max="props.max"
  >
    {{ props.value ? `${(props.value / props.max) * 100}%` : '' }}
  </progress>
</template>

<style lang="scss">
.progress {
  margin-bottom: 0;

  &::-webkit-progress-value {
    border-radius: 50px;
  }

  &::-moz-progress-bar {
    border-radius: 50px;
  }

  &::-ms-fill {
    border-radius: 50px;
  }

  &.is-smaller {
    height: 0.5rem !important;
  }

  &.is-tiny {
    height: 0.35rem !important;
  }
}

.is-dark {
  .progress {
    background-color: var(--dark-sidebar);

    &::-webkit-progress-bar {
      background-color: var(--dark-sidebar);
    }

    &.is-primary {
      &::-webkit-progress-value {
        background: var(--primary);
      }

      &::-moz-progress-bar {
        background: var(--primary);
      }

      &::-ms-fill {
        background: var(--primary);
      }
    }

    &:indeterminate {
      &.is-primary {
        background-color: var(--primary);
        background-image: linear-gradient(
          to right,
          var(--dark-sidebar) 30%,
          var(--primary) 30%
        );

        &::-webkit-progress-bar {
          background: transparent;
        }

        &::-moz-progress-bar {
          background: transparent;
        }
      }

      &.is-success {
        background-color: var(--success);
        background-image: linear-gradient(
          to right,
          var(--dark-sidebar) 30%,
          var(--success) 30%
        );

        &::-webkit-progress-bar {
          background: transparent;
        }

        &::-moz-progress-bar {
          background: transparent;
        }
      }

      &.is-info {
        background-color: var(--info);
        background-image: linear-gradient(
          to right,
          var(--dark-sidebar) 30%,
          var(--info) 30%
        );

        &::-webkit-progress-bar {
          background: transparent;
        }

        &::-moz-progress-bar {
          background: transparent;
        }
      }

      &.is-warning {
        background-color: var(--warning);
        background-image: linear-gradient(
          to right,
          var(--dark-sidebar) 30%,
          var(--warning) 30%
        );

        &::-webkit-progress-bar {
          background: transparent;
        }

        &::-moz-progress-bar {
          background: transparent;
        }
      }

      &.is-danger {
        background-color: var(--danger);
        background-image: linear-gradient(
          to right,
          var(--dark-sidebar) 30%,
          var(--danger) 30%
        );

        &::-webkit-progress-bar {
          background: transparent;
        }

        &::-moz-progress-bar {
          background: transparent;
        }
      }
    }
  }
}
</style>
