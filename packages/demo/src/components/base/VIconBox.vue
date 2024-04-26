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

.icon-boxes {
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;

  .v-icon {
    margin: 0 0.25rem 0.5rem 0;
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

  &.is-small {
    height: 32px;
    width: 32px;
    min-width: 32px;

    .fas,
    .fab,
    .far,
    .fal {
      font-size: 1rem;
    }

    .lnil,
    .lnir,
    .fas,
    .fab {
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
    :deep(.lnir),
    :deep(.fas),
    :deep(.fab) {
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
    :deep(.lnir),
    :deep(.fas),
    :deep(.fab) {
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
    :deep(.lnir),
    :deep(.fas),
    :deep(.fab) {
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
    :deep(.lnir),
    :deep(.fas),
    :deep(.fab) {
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
    background: var(--primary-light-42);

    &.is-bordered {
      border-color: var(--primary);
    }

    :deep(.iconify, .fas, .lnil, .lnir, .fab) {
      color: var(--primary);
    }

    :deep(.iconify, .fas, .lnil, .lnir, .fab) {
      color: var(--primary);
    }
  }

  &.is-secondary {
    background: var(--secondary-light-42);

    &.is-bordered {
      border-color: var(--secondary);
    }

    :deep(.iconify, .fas, .lnil, .lnir, .fab) {
      color: var(--secondary);
    }

    :deep(.iconify, .fas, .lnil, .lnir, .fab) {
      color: var(--secondary);
    }
  }

  &.is-accent {
    background: var(--primary-light-36);

    &.is-bordered {
      border-color: var(--primary);
    }

    :deep(.iconify, .fas, .lnil, .lnir, .fab) {
      color: var(--primary);
    }

    :deep(.iconify, .fas, .lnil, .lnir, .fab) {
      color: var(--primary);
    }
  }

  &.is-success {
    background: var(--success-light-45);

    &.is-bordered {
      border-color: var(--success);
    }

    :deep(.iconify, .fas, .lnil, .lnir, .fab) {
      color: var(--success);
    }

    :deep(.iconify, .fas, .lnil, .lnir, .fab) {
      color: var(--success);
    }
  }

  &.is-info {
    background: var(--info-light-45);

    &.is-bordered {
      border-color: var(--info);
    }

    :deep(.iconify, .fas, .lnil, .lnir, .fab) {
      color: var(--info);
    }

    :deep(.iconify, .fas, .lnil, .lnir, .fab) {
      color: var(--info);
    }
  }

  &.is-warning {
    background: var(--warning-light-32);

    &.is-bordered {
      border-color: var(--warning);
    }

    :deep(.iconify, .fas, .lnil, .lnir, .fab) {
      color: var(--warning);
    }

    :deep(.iconify, .fas, .lnil, .lnir, .fab) {
      color: var(--warning);
    }
  }

  &.is-danger {
    background: var(--danger-light-36);

    &.is-bordered {
      border-color: var(--danger);
    }

    :deep(.iconify, .fas, .lnil, .lnir, .fab) {
      color: var(--danger);
    }

    :deep(.iconify, .fas, .lnil, .lnir, .fab) {
      color: var(--danger);
    }
  }

  &.is-purple {
    background: var(--purple-light-36);

    &.is-bordered {
      border-color: var(--purple);
    }

    :deep(.iconify, .fas, .lnil, .lnir, .fab) {
      color: var(--purple);
    }

    :deep(.iconify, .fas, .lnil, .lnir, .fab) {
      color: var(--purple);
    }
  }

  &.is-blue {
    background: var(--blue-light-34);

    &.is-bordered {
      border-color: var(--blue);
    }

    :deep(.iconify, .fas, .lnil, .lnir, .fab) {
      color: var(--blue);
    }

    :deep(.iconify, .fas, .lnil, .lnir, .fab) {
      color: var(--blue);
    }
  }

  &.is-yellow {
    background: var(--yellow-light-22);

    &.is-bordered {
      border-color: var(--yellow);
    }

    :deep(.iconify, .fas, .lnil, .lnir, .fab) {
      color: var(--yellow);
    }

    :deep(.iconify, .fas, .lnil, .lnir, .fab) {
      color: var(--yellow);
    }
  }

  &.is-orange {
    background: var(--orange-light-20);

    &.is-bordered {
      border-color: var(--orange);
    }

    :deep(.iconify, .fas, .lnil, .lnir, .fab) {
      color: var(--orange);
    }

    :deep(.iconify, .fas, .lnil, .lnir, .fab) {
      color: var(--orange);
    }
  }

  &.is-green {
    background: var(--green-light-23);

    &.is-bordered {
      border-color: var(--green);
    }

    :deep(.iconify, .fas, .lnil, .lnir, .fab) {
      color: var(--green);
    }

    :deep(.iconify, .fas, .lnil, .lnir, .fab) {
      color: var(--green);
    }
  }

  &.is-red {
    background: var(--red-light-38);

    &.is-bordered {
      border-color: var(--red);
    }

    :deep(.iconify, .fas, .lnil, .lnir, .fab) {
      color: var(--red);
    }

    :deep(.iconify, .fas, .lnil, .lnir, .fab) {
      color: var(--red);
    }
  }

  &.is-bordered {
    border: 1px solid var(--muted-grey);
  }

  :deep(.fas),
  :deep(.fab),
  :deep(.far),
  :deep(.fal) {
    font-size: 1.2rem;
    color: var(--muted-grey);
    transition: color 0.3s;
  }

  :deep(.lnil),
  :deep(.lnir),
  :deep(.fas),
  :deep(.fab) {
    font-size: 1.4rem;
    color: var(--muted-grey);
    transition: color 0.3s;
  }

  :deep(.iconify) {
    font-size: 20px;
  }
}

.is-dark {
  .v-icon {
    background-color: var(--dark-sidebar-light-2);

    &.is-primary {
      background: var(--primary);

      &.is-bordered {
        border-color: var(--primary);
      }

      :deep(.lnil),
      :deep(.lnir),
      :deep(.fas),
      :deep(.fab) {
        color: var(--white);
      }

      :deep(.iconify, .fas, .lnil, .lnir, .fab) {
        color: var(--smoke-white);
      }
    }

    &.is-accent {
      background: var(--primary);

      &.is-bordered {
        border-color: var(--primary);
      }

      :deep(.lnil),
      :deep(.lnir),
      :deep(.fas),
      :deep(.fab) {
        color: var(--white);
      }

      :deep(.iconify, .fas, .lnil, .lnir, .fab) {
        color: var(--smoke-white);
      }
    }

    &.is-success {
      background: var(--success);

      &.is-bordered {
        border-color: var(--success);
      }

      :deep(.lnil),
      :deep(.lnir),
      :deep(.fas),
      :deep(.fab) {
        color: var(--white);
      }

      :deep(.iconify, .fas, .lnil, .lnir, .fab) {
        color: var(--smoke-white);
      }
    }

    &.is-info {
      background: var(--info);

      &.is-bordered {
        border-color: var(--info);
      }

      :deep(.lnil),
      :deep(.lnir),
      :deep(.fas),
      :deep(.fab) {
        color: var(--white);
      }

      :deep(.iconify, .fas, .lnil, .lnir, .fab) {
        color: var(--smoke-white);
      }
    }

    &.is-warning {
      background: var(--warning);

      &.is-bordered {
        border-color: var(--warning);
      }

      :deep(.lnil),
      :deep(.lnir),
      :deep(.fas),
      :deep(.fab) {
        color: var(--white);
      }

      :deep(.iconify, .fas, .lnil, .lnir, .fab) {
        color: var(--smoke-white);
      }
    }

    &.is-danger {
      background: var(--danger);

      &.is-bordered {
        border-color: var(--danger);
      }

      :deep(.lnil),
      :deep(.lnir),
      :deep(.fas),
      :deep(.fab) {
        color: var(--white);
      }

      :deep(.iconify, .fas, .lnil, .lnir, .fab) {
        color: var(--smoke-white);
      }
    }

    &.is-purple {
      background: var(--purple);

      &.is-bordered {
        border-color: var(--purple);
      }

      :deep(.lnil),
      :deep(.lnir),
      :deep(.fas),
      :deep(.fab) {
        color: var(--white);
      }

      :deep(.iconify, .fas, .lnil, .lnir, .fab) {
        color: var(--smoke-white);
      }
    }

    &.is-blue {
      background: var(--blue);

      &.is-bordered {
        border-color: var(--blue);
      }

      :deep(.lnil),
      :deep(.lnir),
      :deep(.fas),
      :deep(.fab) {
        color: var(--white);
      }

      :deep(.iconify, .fas, .lnil, .lnir, .fab) {
        color: var(--smoke-white);
      }
    }

    &.is-yellow {
      background: var(--yellow);

      &.is-bordered {
        border-color: var(--yellow);
      }

      :deep(.lnil),
      :deep(.lnir),
      :deep(.fas),
      :deep(.fab) {
        color: var(--white);
      }

      :deep(.iconify, .fas, .lnil, .lnir, .fab) {
        color: var(--smoke-white);
      }
    }

    &.is-orange {
      background: var(--orange);

      &.is-bordered {
        border-color: var(--orange);
      }

      :deep(.lnil),
      :deep(.lnir),
      :deep(.fas),
      :deep(.fab) {
        color: var(--white);
      }

      .iconify {
        color: var(--smoke-white);
      }
    }

    &.is-green {
      background: var(--green);

      &.is-bordered {
        border-color: var(--green);
      }

      :deep(.lnil),
      :deep(.lnir),
      :deep(.fas),
      :deep(.fab) {
        color: var(--white);
      }

      .iconify {
        color: var(--smoke-white);
      }
    }

    &.is-red {
      background: var(--red);

      &.is-bordered {
        border-color: var(--red);
      }

      :deep(.lnil),
      :deep(.lnir),
      :deep(.fas),
      :deep(.fab) {
        color: var(--white);
      }

      .iconify {
        color: var(--smoke-white);
      }
    }
  }
}
</style>
