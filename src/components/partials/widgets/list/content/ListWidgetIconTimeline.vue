<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'

const props = withDefaults(
  defineProps<{
    items?: any[]
    squared?: boolean
    colored?: boolean
  }>(),
  {
    items: () => [],
  }
)
</script>

<template>
  <div class="icon-timeline">
    <div v-for="item in props.items" :key="item.id" class="timeline-item">
      <div
        class="timeline-icon"
        :class="[props.squared && 'is-squared', props.colored && 'is-' + item.color]"
      >
        <img
          v-if="item.picture"
          class="avatar"
          :src="item.picture"
          alt=""
          @error.once="onceImageErrored(150)"
        />
        <i v-else aria-hidden="true" class="iconify" :data-icon="item.icon"></i>
      </div>
      <div class="timeline-content">
        <p>{{ item.title }}</p>
        <span>{{ item.time }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.list-widget {
  .icon-timeline {
    .timeline-item {
      position: relative;
      display: flex;
      padding-bottom: 30px;

      &::after {
        content: '';
        position: absolute;
        top: 36px;
        inset-inline-start: 18px;
        width: 1px;
        height: calc(100% - 36px);
        border-inline-start: 1px solid var(--fade-grey-dark-3);
      }

      .timeline-icon {
        position: relative;
        height: 36px;
        width: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--white);
        border: 1px solid var(--fade-grey-dark-3);
        border-radius: var(--radius-rounded);
        color: var(--light-text);
        box-shadow: var(--light-box-shadow);

        &::after {
          content: '';
          position: absolute;
          top: 17px;
          inset-inline-start: 40px;
          width: 20px;
          height: 1px;
          border-top: 1px solid var(--fade-grey-dark-3);
        }

        &.is-squared {
          border-radius: 10px;

          img {
            border-radius: 10px;
          }
        }

        &.is-primary {
          background: var(--primary);
          border-color: var(--primary);
          box-shadow: var(--primary-box-shadow);

          svg {
            color: var(--smoke-white);
          }
        }

        &.is-info {
          background: var(--info);
          border-color: var(--info);
          box-shadow: var(--info-box-shadow);

          svg {
            color: var(--smoke-white);
          }
        }

        &.is-success {
          background: var(--success);
          border-color: var(--success);
          box-shadow: var(--success-box-shadow);

          svg {
            color: var(--smoke-white);
          }
        }

        &.is-orange {
          background: var(--orange);
          border-color: var(--orange);
          box-shadow: var(--orange-box-shadow);

          svg {
            color: var(--smoke-white);
          }
        }

        &.is-yellow {
          background: var(--yellow);
          border-color: var(--yellow);

          svg {
            color: var(--smoke-white);
          }
        }

        img {
          display: block;
          height: 28px;
          width: 28px;
          border-radius: var(--radius-rounded);
        }

        svg {
          height: 16px;
          width: 16px;
          stroke-width: 1.6px;
        }
      }

      .timeline-content {
        margin-inline-start: 34px;
        line-height: 1.2;

        span {
          font-size: 0.85rem;
          color: var(--light-text);
        }

        p {
          font-family: var(--font-alt);
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--dark-text);
        }
      }
    }
  }
}

.is-dark {
  .list-widget {
    .icon-timeline {
      .timeline-item {
        &::after {
          border-color: var(--dark-sidebar-light-12) !important;
        }

        .timeline-icon:not(.is-primary, .is-info, .is-success, .is-orange, .is-yellow) {
          background: var(--dark-sidebar-light-3) !important;
          border-color: var(--dark-sidebar-light-12) !important;
        }

        .timeline-icon {
          &::after {
            border-color: var(--dark-sidebar-light-12) !important;
          }

          &.is-primary {
            background: var(--primary);
            border-color: var(--primary);
            box-shadow: var(--primary-box-shadow);

            svg {
              color: var(--smoke-white);
            }
          }
        }

        .timeline-content {
          p {
            color: var(--dark-dark-text);
          }
        }
      }
    }
  }
}
</style>
