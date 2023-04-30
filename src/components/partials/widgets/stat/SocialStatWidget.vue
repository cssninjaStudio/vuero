<script setup lang="ts">
const props = defineProps<{
  icon: string
  value: string
  straight?: boolean
  squared?: boolean
  colored?: boolean
}>()
</script>

<template>
  <div
    class="stat-widget followers-stat-widget-v1"
    :class="[props.straight && 'is-straight']"
  >
    <div class="follow-block">
      <div
        class="follow-icon"
        :class="[props.squared && 'is-squared', props.colored && 'is-primary']"
      >
        <i aria-hidden="true" :class="props.icon"></i>
      </div>
      <div class="follow-count">
        <span class="dark-inverted">{{ props.value }} Followers</span>
        <span>Based on your latest stats</span>
      </div>
      <a href="#" class="go-icon">
        <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right"></i>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.stat-widget {
  &.followers-stat-widget-v1 {
    .follow-block {
      display: flex;
      align-items: center;

      .follow-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 50px;
        min-width: 50px;
        border-radius: var(--radius-rounded);
        background: var(--white);
        color: var(--primary);
        border: 1px solid var(--fade-grey-dark-3);
        box-shadow: var(--light-box-shadow);

        &.is-squared {
          border-radius: 10px;
        }

        &.is-primary {
          background: var(--primary);
          border-color: var(--primary);
          box-shadow: var(--primary-box-shadow);
          color: var(--smoke-white);
        }

        svg {
          height: 18px;
          width: 18px;
        }

        i {
          font-size: 18px;
        }
      }

      .follow-count {
        margin-inline-start: 12px;

        span {
          display: block;

          &:first-child {
            font-family: var(--font-alt);
            font-size: 1.15rem;
            font-weight: 600;
            color: var(--dark-text);
          }

          &:nth-child(2) {
            font-size: 0.95rem;
            color: var(--light-text);
          }
        }
      }

      .go-icon {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 36px;
        width: 36px;
        border-radius: var(--radius-rounded);
        background: var(--widget-grey);
        color: var(--light-text);
        margin-inline-start: auto;

        &.is-squared {
          border-radius: 10px;
        }

        svg {
          height: 16px;
          width: 16px;
          stroke-width: 3px;
        }
      }
    }
  }
}

.is-dark {
  .stat-widget {
    @include vuero-card--dark;

    &.followers-stat-widget-v1 {
      .follow-block {
        .follow-icon:not(.is-primary) {
          background: var(--dark-sidebar-light-2);
          border-color: var(--dark-sidebar-light-12);
          color: var(--primary);
        }

        .follow-icon {
          &.is-primary {
            border-color: var(--primary);
            background: var(--primary);
          }
        }
      }

      .go-icon {
        background: var(--dark-sidebar-light-2);
        border: 1px solid var(--dark-sidebar-light-12);
      }
    }
  }
}
</style>
