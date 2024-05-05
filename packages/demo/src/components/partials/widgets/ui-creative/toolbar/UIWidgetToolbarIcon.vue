<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    icon?: string
  }>(),
  {
    title: 'UI Widget',
    icon: 'lucide:bell',
  },
)
</script>

<template>
  <div class="widget-toolbar">
    <div class="left">
      <h3>{{ props.title }}</h3>
    </div>
    <div class="right">
      <a class="right-icon has-indicator">
        <VIcon
          :icon="props.icon"
        />
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.widget-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;

  .left {
    display: flex;
    align-items: center;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .tag {
      font-family: var(--font);
    }

    .right-icon {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 32px;
      width: 32px;
      min-width: 32px;
      border-radius: var(--radius-rounded);
      color: color-mix(in oklab, var(--light-text), white 12%);
      transition: all 0.3s; // transition-all test

      &.has-indicator {
        &::after {
          content: '';
          position: absolute;
          top: 3px;
          inset-inline-end: 4px;
          height: 10px;
          width: 10px;
          border-radius: var(--radius-rounded);
          background: var(--primary);
          border: 1.8px solid var(--white);
        }
      }

      .iconify {
        height: 18px;
        width: 18px;
        font-size: 18px;
        transition: stroke 0.3s;
      }
    }
  }

  h3 {
    font-family: var(--font-alt);
    font-size: 0.9rem;
    color: var(--dark-text);
    font-weight: 600;

    &.is-bigger {
      font-size: 1rem;
    }
  }

  .action-icon {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    width: 32px;
    min-width: 32px;
    border-radius: var(--radius-rounded);
    color: color-mix(in oklab, var(--light-text), white 12%);
    transition: all 0.3s; // transition-all test

    .iconify {
      height: 18px;
      width: 18px;
      font-size: 18px;
      transition: stroke 0.3s;
    }
  }
}

.is-dark {
  .widget-toolbar {
    h3 {
      color: var(--dark-dark-text);
    }

    .right {
      .right-icon {
        &.has-indicator {
          &::after {
            border-color: color-mix(in oklab, var(--dark-sidebar), white 6%);
          }
        }
      }
    }
  }
}
</style>
