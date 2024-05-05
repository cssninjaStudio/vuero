<script setup lang="ts">
export type VIconBoxSize = 'small' | 'medium' | 'large' | 'big' | 'xl'
export type VIconBoxColor =
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'purple'
  | 'yellow'
  | 'orange'
  | 'green'
  | 'red'
  | 'blue'
export interface VIconProps {
  size?: VIconBoxSize
  color?: VIconBoxColor
  rounded?: boolean
  bordered?: boolean
}

const props = withDefaults(defineProps<VIconProps>(), {
  size: undefined,
  color: undefined,
})
</script>

<template>
  <div
    class="v-icon"
    :class="[
      props.size && 'is-' + props.size,
      props.color && 'is-' + props.color,
      props.rounded && 'is-rounded',
      props.bordered && 'is-bordered',
    ]"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
.icons {
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;

  .v-icon {
    margin: 0 6px;
  }
}

.v-icon {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  min-width: 40px;
  border-radius: 8px;
  background: var(--fade-grey);
  transition: all 0.3s; // transition-all test

  :deep(.fas),
  :deep(.fab),
  :deep(.far),
  :deep(.fal) {
    font-size: 1.2rem;
    color: var(--muted-grey);
    transition: color 0.3s;
  }

  :deep(.lnil),
  :deep(.lnir) {
    font-size: 1.4rem;
    color: var(--muted-grey);
    transition: color 0.3s;
  }

  :deep(.iconify) {
    font-size: 20px;
  }

  &.is-small {
    height: 32px;
    width: 32px;
    min-width: 32px;

    :deep(.fas),
    :deep(.fab),
    :deep(.far),
    :deep(.fal) {
      font-size: 1rem;
    }

    :deep(.lnil),
    :deep(.lnir) {
      font-size: 1.2rem;
    }

    :deep(.iconify) {
      font-size: 16px;
    }
  }

  &.is-medium {
    height: 50px;
    width: 50px;
    min-width: 50px;

    &.is-bordered {
      border-width: 1.6px;
    }

    :deep(.fas),
    :deep(.fab),
    :deep(.far),
    :deep(.fal) {
      font-size: 1.5rem;
    }

    :deep(.lnil),
    :deep(.lnir) {
      font-size: 1.7rem;
    }

    :deep(.iconify) {
      font-size: 25px;
    }
  }

  &.is-large {
    height: 68px;
    width: 68px;
    min-width: 68px;

    &.is-bordered {
      border-width: 2px;
    }

    :deep(.fas),
    :deep(.fab),
    :deep(.far),
    :deep(.fal) {
      font-size: 2rem;
    }

    :deep(.lnil),
    :deep(.lnir) {
      font-size: 2.2rem;
    }

    :deep(.iconify) {
      font-size: 34px;
    }
  }

  &.is-big {
    height: 80px;
    width: 80px;
    min-width: 80px;

    &.is-bordered {
      border-width: 2px;
    }

    :deep(.fas),
    :deep(.fab),
    :deep(.far),
    :deep(.fal) {
      font-size: 2.4rem;
    }

    :deep(.lnil),
    :deep(.lnir) {
      font-size: 2.6rem;
    }

    :deep(.iconify) {
      height: 40px;
      width: 40px;
      font-size: 40px;
      stroke-width: 3px;
    }
  }

  &.is-xl {
    height: 100px;
    width: 100px;
    min-width: 100px;

    &.is-bordered {
      border-width: 2px;
    }

    :deep(.fas),
    :deep(.fab),
    :deep(.far),
    :deep(.fal) {
      font-size: 3rem;
    }

    :deep(.lnil),
    :deep(.lnir) {
      font-size: 3.4rem;
    }

    :deep(.iconify) {
      height: 50px;
      width: 50px;
      font-size: 50px;
      stroke-width: 3px;
    }
  }

  &.is-rounded {
    border-radius: var(--radius-rounded);
  }

  &.is-primary {
    background: color-mix(in oklab, var(--primary), white 82%);

    &.is-bordered {
      border-color: var(--primary);
    }

    :deep(.iconify),
    :deep(.fas),
    :deep(.far),
    :deep(.fal),
    :deep(.lnil),
    :deep(.lnir),
    :deep(.fab) {
      color: var(--primary);
    }
  }

  &.is-secondary {
    background: color-mix(in oklab, var(--secondary), white 82%);

    &.is-bordered {
      border-color: var(--secondary);
    }

    :deep(.iconify),
    :deep(.fas),
    :deep(.far),
    :deep(.fal),
    :deep(.lnil),
    :deep(.lnir),
    :deep(.fab) {
      color: var(--secondary);
    }
  }

  &.is-accent {
    background: color-mix(in oklab, var(--primary), white 76%);

    &.is-bordered {
      border-color: var(--primary);
    }

    :deep(.iconify),
    :deep(.fas),
    :deep(.far),
    :deep(.fal),
    :deep(.lnil),
    :deep(.lnir),
    :deep(.fab) {
      color: var(--primary);
    }
  }

  &.is-success {
    background: color-mix(in oklab, var(--success), white 80%);

    &.is-bordered {
      border-color: var(--success);
    }

    :deep(.iconify),
    :deep(.fas),
    :deep(.far),
    :deep(.fal),
    :deep(.lnil),
    :deep(.lnir),
    :deep(.fab) {
      color: var(--success);
    }
  }

  &.is-info {
    background: color-mix(in oklab, var(--info), white 80%);

    &.is-bordered {
      border-color: var(--info);
    }

    :deep(.iconify),
    :deep(.fas),
    :deep(.far),
    :deep(.fal),
    :deep(.lnil),
    :deep(.lnir),
    :deep(.fab) {
      color: var(--info);
    }
  }

  &.is-warning {
    background: color-mix(in oklab, var(--warning), white 80%);

    &.is-bordered {
      border-color: var(--warning);
    }

    :deep(.iconify),
    :deep(.fas),
    :deep(.far),
    :deep(.fal),
    :deep(.lnil),
    :deep(.lnir),
    :deep(.fab) {
      color: var(--warning);
    }
  }

  &.is-danger {
    background: color-mix(in oklab, var(--danger), white 80%);

    &.is-bordered {
      border-color: var(--danger);
    }

    :deep(.iconify),
    :deep(.fas),
    :deep(.far),
    :deep(.fal),
    :deep(.lnil),
    :deep(.lnir),
    :deep(.fab) {
      color: var(--danger);
    }
  }

  &.is-purple {
    background: color-mix(in oklab, var(--purple), white 80%);

    &.is-bordered {
      border-color: var(--purple);
    }

    :deep(.iconify),
    :deep(.fas),
    :deep(.far),
    :deep(.fal),
    :deep(.lnil),
    :deep(.lnir),
    :deep(.fab) {
      color: var(--purple);
    }
  }

  &.is-blue {
    background: color-mix(in oklab, var(--blue), white 80%);

    &.is-bordered {
      border-color: var(--blue);
    }

    :deep(.iconify),
    :deep(.fas),
    :deep(.far),
    :deep(.fal),
    :deep(.lnil),
    :deep(.lnir),
    :deep(.fab) {
      color: var(--blue);
    }
  }

  &.is-yellow {
    background: color-mix(in oklab, var(--yellow), white 80%);

    &.is-bordered {
      border-color: var(--yellow);
    }

    :deep(.iconify),
    :deep(.fas),
    :deep(.far),
    :deep(.fal),
    :deep(.lnil),
    :deep(.lnir),
    :deep(.fab) {
      color: var(--yellow);
    }
  }

  &.is-orange {
    background: color-mix(in oklab, var(--orange), white 80%);

    &.is-bordered {
      border-color: var(--orange);
    }

    :deep(.iconify),
    :deep(.fas),
    :deep(.far),
    :deep(.fal),
    :deep(.lnil),
    :deep(.lnir),
    :deep(.fab) {
      color: var(--orange);
    }
  }

  &.is-green {
    background: color-mix(in oklab, var(--green), white 80%);

    &.is-bordered {
      border-color: var(--green);
    }

    :deep(.iconify),
    :deep(.fas),
    :deep(.far),
    :deep(.fal),
    :deep(.lnil),
    :deep(.lnir),
    :deep(.fab) {
      color: var(--green);
    }
  }

  &.is-red {
    background: color-mix(in oklab, var(--red), white 80%);

    &.is-bordered {
      border-color: var(--red);
    }

    :deep(.iconify),
    :deep(.fas),
    :deep(.far),
    :deep(.fal),
    :deep(.lnil),
    :deep(.lnir),
    :deep(.fab) {
      color: var(--red);
    }
  }

  &.is-bordered {
    border: 1px solid var(--muted-grey);
  }
}

.is-dark {
  .v-icon {
    background-color: color-mix(in oklab, var(--dark-sidebar), white 2%);

    &.is-primary {
      background: var(--primary);

      &.is-bordered {
        border-color: var(--primary);
      }

      :deep(.lnil),
      :deep(.lnir) {
        color: var(--white);
      }

      :deep(.iconify),
      :deep(.fas),
      :deep(.far),
      :deep(.fal),
      :deep(.fab) {
        color: var(--smoke-white);
      }
    }

    &.is-accent {
      background: var(--primary);

      &.is-bordered {
        border-color: var(--primary);
      }

      :deep(.lnil),
      :deep(.lnir) {
        color: var(--white);
      }

      :deep(.iconify),
      :deep(.fas),
      :deep(.far),
      :deep(.fal),
      :deep(.fab) {
        color: var(--smoke-white);
      }
    }

    &.is-success {
      background: var(--success);

      &.is-bordered {
        border-color: var(--success);
      }

      :deep(.lnil),
      :deep(.lnir) {
        color: var(--white);
      }

      :deep(.iconify),
      :deep(.fas),
      :deep(.far),
      :deep(.fal),
      :deep(.fab) {
        color: var(--smoke-white);
      }
    }

    &.is-info {
      background: var(--info);

      &.is-bordered {
        border-color: var(--info);
      }

      :deep(.lnil),
      :deep(.lnir) {
        color: var(--white);
      }

      :deep(.iconify),
      :deep(.fas),
      :deep(.far),
      :deep(.fal),
      :deep(.fab) {
        color: var(--smoke-white);
      }
    }

    &.is-warning {
      background: var(--warning);

      &.is-bordered {
        border-color: var(--warning);
      }

      :deep(.lnil),
      :deep(.lnir) {
        color: var(--white);
      }

      :deep(.iconify),
      :deep(.fas),
      :deep(.far),
      :deep(.fal),
      :deep(.fab) {
        color: var(--smoke-white);
      }
    }

    &.is-danger {
      background: var(--danger);

      &.is-bordered {
        border-color: var(--danger);
      }

      :deep(.lnil),
      :deep(.lnir) {
        color: var(--white);
      }

      :deep(.iconify),
      :deep(.fas),
      :deep(.far),
      :deep(.fal),
      :deep(.fab) {
        color: var(--smoke-white);
      }
    }

    &.is-purple {
      background: var(--purple);

      &.is-bordered {
        border-color: var(--purple);
      }

      :deep(.lnil),
      :deep(.lnir) {
        color: var(--white);
      }

      :deep(.iconify),
      :deep(.fas),
      :deep(.far),
      :deep(.fal),
      :deep(.fab) {
        color: var(--smoke-white);
      }
    }

    &.is-blue {
      background: var(--blue);

      &.is-bordered {
        border-color: var(--blue);
      }

      :deep(.lnil),
      :deep(.lnir) {
        color: var(--white);
      }

      :deep(.iconify),
      :deep(.fas),
      :deep(.far),
      :deep(.fal),
      :deep(.fab) {
        color: var(--smoke-white);
      }
    }

    &.is-yellow {
      background: var(--yellow);

      &.is-bordered {
        border-color: var(--yellow);
      }

      :deep(.lnil),
      :deep(.lnir) {
        color: var(--white);
      }

      :deep(.iconify),
      :deep(.fas),
      :deep(.far),
      :deep(.fal),
      :deep(.fab) {
        color: var(--smoke-white);
      }
    }

    &.is-orange {
      background: var(--orange);

      &.is-bordered {
        border-color: var(--orange);
      }

      :deep(.lnil),
      :deep(.lnir) {
        color: var(--white);
      }

      :deep(.iconify),
      :deep(.fas),
      :deep(.far),
      :deep(.fal),
      :deep(.fab) {
        color: var(--smoke-white);
      }
    }

    &.is-green {
      background: var(--green);

      &.is-bordered {
        border-color: var(--green);
      }

      :deep(.lnil),
      :deep(.lnir) {
        color: var(--white);
      }

      :deep(.iconify),
      :deep(.fas),
      :deep(.far),
      :deep(.fal),
      :deep(.fab) {
        color: var(--smoke-white);
      }
    }

    &.is-red {
      background: var(--red);

      &.is-bordered {
        border-color: var(--red);
      }

      :deep(.lnil),
      :deep(.lnir) {
        color: var(--white);
      }

      :deep(.iconify),
      :deep(.fas),
      :deep(.far),
      :deep(.fal),
      :deep(.fab) {
        color: var(--smoke-white);
      }
    }
  }
}
</style>
