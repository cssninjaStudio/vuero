<script setup lang="ts">
export type VMessageColor =
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'white'
export interface VMessageEmits {
  (e: 'close'): void
}
export interface VMessageProps {
  color?: VMessageColor
  closable?: boolean
}

const emit = defineEmits<VMessageEmits>()
const props = withDefaults(defineProps<VMessageProps>(), {
  color: undefined,
})
</script>

<template>
  <div class="message" :class="[props.color && `is-${props.color}`]">
    <a
      v-if="props.closable"
      aria-label="Dismiss"
      class="delete"
      tabindex="0"
      @keydown.space.prevent="emit('close')"
      @click.prevent="emit('close')"
    ></a>
    <div class="message-body"><slot></slot></div>
  </div>
</template>

<style lang="scss">
.message {
  position: relative;
  border: 1px solid var(--fade-grey-dark-3);
  box-shadow: var(--light-box-shadow);
  padding-right: 20px;

  &.is-primary {
    border-color: var(--primary-light-24);

    .delete {
      &::before,
      &::after {
        background-color: var(--primary);
      }
    }
  }

  &.is-info {
    border-color: var(--info-light-24);

    .delete {
      &::before,
      &::after {
        background-color: var(--info);
      }
    }
  }

  &.is-success {
    border-color: var(--success-light-24);

    .delete {
      &::before,
      &::after {
        background-color: var(--success);
      }
    }
  }

  &.is-warning {
    border-color: var(--warning-light-24);

    .delete {
      &::before,
      &::after {
        background-color: var(--warning);
      }
    }
  }

  &.is-danger {
    border-color: var(--danger-light-24);

    .delete {
      &::before,
      &::after {
        background-color: var(--danger);
      }
    }
  }

  .delete {
    position: absolute;
    background-color: transparent;
    top: 6px;
    right: 6px;

    &::before {
      height: 1px;
      background-color: var(--light-text);
    }

    &::after {
      width: 1px;
      background-color: var(--light-text);
    }
  }

  .message-body {
    border: none;
    font-family: var(--font);
  }
}

.is-dark {
  .message {
    &:not(.is-primary):not(.is-info):not(.is-success):not(.is-warning):not(.is-danger) {
      background-color: var(--dark-sidebar);
      border-color: var(--dark-sidebar-light-3);

      .message-body {
        color: var(--light-text);
      }
    }

    span {
      color: var(--white);
    }

    &.is-primary {
      background: var(--primary);
      border-color: var(--primary);

      .message-body {
        color: var(--white);
      }

      .delete {
        &::before,
        &::after {
          background-color: var(--white);
        }
      }
    }

    &.is-success {
      background: var(--success);
      border-color: var(--success);

      .message-body {
        color: var(--white);
      }

      .delete {
        &::before,
        &::after {
          background-color: var(--white);
        }
      }
    }

    &.is-info {
      background: var(--info);
      border-color: var(--info);

      .message-body {
        color: var(--white);
      }

      .delete {
        &::before,
        &::after {
          background-color: var(--white);
        }
      }
    }

    &.is-warning {
      background: var(--warning);
      border-color: var(--warning);

      .message-body {
        color: var(--white);
      }

      .delete {
        &::before,
        &::after {
          background-color: var(--white);
        }
      }
    }

    &.is-danger {
      background: var(--danger);
      border-color: var(--danger);

      .message-body {
        color: var(--white);
      }

      .delete {
        &::before,
        &::after {
          background-color: var(--white);
        }
      }
    }
  }
}
</style>
