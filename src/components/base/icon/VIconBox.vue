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
    <slot></slot>
  </div>
</template>

<style lang="scss">
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

    svg {
      height: 16px;
      width: 16px;
      stroke-width: 1.4px;
    }
  }

  &.is-medium {
    height: 50px;
    width: 50px;
    min-width: 50px;

    &.is-bordered {
      border-width: 1.6px;
    }

    .fas,
    .fab,
    .far,
    .fal {
      font-size: 1.5rem;
    }

    .lnil,
    .lnir,
    .fas,
    .fab {
      font-size: 1.7rem;
    }

    svg {
      height: 25px;
      width: 25px;
      stroke-width: 1.4px;
    }
  }

  &.is-large {
    height: 68px;
    width: 68px;
    min-width: 68px;

    &.is-bordered {
      border-width: 2px;
    }

    .fas,
    .fab,
    .far,
    .fal {
      font-size: 2rem;
    }

    .lnil,
    .lnir,
    .fas,
    .fab {
      font-size: 2.2rem;
    }

    svg {
      height: 34px;
      width: 34px;
      stroke-width: 2px;
    }
  }

  &.is-big {
    height: 80px;
    width: 80px;
    min-width: 80px;

    &.is-bordered {
      border-width: 2px;
    }

    .fas,
    .fab,
    .far,
    .fal {
      font-size: 2.4rem;
    }

    .lnil,
    .lnir,
    .fas,
    .fab {
      font-size: 2.6rem;
    }

    svg {
      height: 40px;
      width: 40px;
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

    .fas,
    .fab,
    .far,
    .fal {
      font-size: 3rem;
    }

    .lnil,
    .lnir,
    .fas,
    .fab {
      font-size: 3.4rem;
    }

    svg {
      height: 50px;
      width: 50px;
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

    i {
      color: var(--primary);
    }

    svg {
      color: var(--primary);
    }
  }

  &.is-secondary {
    background: var(--secondary-light-42);

    &.is-bordered {
      border-color: var(--secondary);
    }

    i {
      color: var(--secondary);
    }

    svg {
      color: var(--secondary);
    }
  }

  &.is-accent {
    background: var(--primary-light-36);

    &.is-bordered {
      border-color: var(--primary);
    }

    i {
      color: var(--primary);
    }

    svg {
      color: var(--primary);
    }
  }

  &.is-success {
    background: var(--success-light-45);

    &.is-bordered {
      border-color: var(--success);
    }

    i {
      color: var(--success);
    }

    svg {
      color: var(--success);
    }
  }

  &.is-info {
    background: var(--info-light-45);

    &.is-bordered {
      border-color: var(--info);
    }

    i {
      color: var(--info);
    }

    svg {
      color: var(--info);
    }
  }

  &.is-warning {
    background: var(--warning-light-32);

    &.is-bordered {
      border-color: var(--warning);
    }

    i {
      color: var(--warning);
    }

    svg {
      color: var(--warning);
    }
  }

  &.is-danger {
    background: var(--danger-light-36);

    &.is-bordered {
      border-color: var(--danger);
    }

    i {
      color: var(--danger);
    }

    svg {
      color: var(--danger);
    }
  }

  &.is-purple {
    background: var(--purple-light-36);

    &.is-bordered {
      border-color: var(--purple);
    }

    i {
      color: var(--purple);
    }

    svg {
      color: var(--purple);
    }
  }

  &.is-blue {
    background: var(--blue-light-34);

    &.is-bordered {
      border-color: var(--blue);
    }

    i {
      color: var(--blue);
    }

    svg {
      color: var(--blue);
    }
  }

  &.is-yellow {
    background: var(--yellow-light-22);

    &.is-bordered {
      border-color: var(--yellow);
    }

    i {
      color: var(--yellow);
    }

    svg {
      color: var(--yellow);
    }
  }

  &.is-orange {
    background: var(--orange-light-20);

    &.is-bordered {
      border-color: var(--orange);
    }

    i {
      color: var(--orange);
    }

    svg {
      color: var(--orange);
    }
  }

  &.is-green {
    background: var(--green-light-23);

    &.is-bordered {
      border-color: var(--green);
    }

    i {
      color: var(--green);
    }

    svg {
      color: var(--green);
    }
  }

  &.is-red {
    background: var(--red-light-38);

    &.is-bordered {
      border-color: var(--red);
    }

    i {
      color: var(--red);
    }

    svg {
      color: var(--red);
    }
  }

  &.is-bordered {
    border: 1px solid var(--muted-grey);
  }

  .fas,
  .fab,
  .far,
  .fal {
    font-size: 1.2rem;
    color: var(--muted-grey);
    transition: color 0.3s;
  }

  .lnil,
  .lnir,
  .fas,
  .fab {
    font-size: 1.4rem;
    color: var(--muted-grey);
    transition: color 0.3s;
  }

  svg {
    height: 20px;
    width: 20px;
    stroke-width: 1.4px;
  }
}

.is-dark {
  .v-icon {
    &.is-primary {
      background: var(--primary);

      &.is-bordered {
        border-color: var(--primary);
      }

      .lnil,
      .lnir,
      .fas,
      .fab {
        color: var(--white);
      }

      svg {
        color: var(--smoke-white);
      }
    }

    &.is-accent {
      background: var(--primary);

      &.is-bordered {
        border-color: var(--primary);
      }

      .lnil,
      .lnir,
      .fas,
      .fab {
        color: var(--white);
      }

      svg {
        color: var(--smoke-white);
      }
    }

    &.is-success {
      background: var(--success);

      &.is-bordered {
        border-color: var(--success);
      }

      .lnil,
      .lnir,
      .fas,
      .fab {
        color: var(--white);
      }

      svg {
        color: var(--smoke-white);
      }
    }

    &.is-info {
      background: var(--info);

      &.is-bordered {
        border-color: var(--info);
      }

      .lnil,
      .lnir,
      .fas,
      .fab {
        color: var(--white);
      }

      svg {
        color: var(--smoke-white);
      }
    }

    &.is-warning {
      background: var(--warning);

      &.is-bordered {
        border-color: var(--warning);
      }

      .lnil,
      .lnir,
      .fas,
      .fab {
        color: var(--white);
      }

      svg {
        color: var(--smoke-white);
      }
    }

    &.is-danger {
      background: var(--danger);

      &.is-bordered {
        border-color: var(--danger);
      }

      .lnil,
      .lnir,
      .fas,
      .fab {
        color: var(--white);
      }

      svg {
        color: var(--smoke-white);
      }
    }

    &.is-purple {
      background: var(--purple);

      &.is-bordered {
        border-color: var(--purple);
      }

      .lnil,
      .lnir,
      .fas,
      .fab {
        color: var(--white);
      }

      svg {
        color: var(--smoke-white);
      }
    }

    &.is-blue {
      background: var(--blue);

      &.is-bordered {
        border-color: var(--blue);
      }

      .lnil,
      .lnir,
      .fas,
      .fab {
        color: var(--white);
      }

      svg {
        color: var(--smoke-white);
      }
    }

    &.is-yellow {
      background: var(--yellow);

      &.is-bordered {
        border-color: var(--yellow);
      }

      .lnil,
      .lnir,
      .fas,
      .fab {
        color: var(--white);
      }

      svg {
        color: var(--smoke-white);
      }
    }

    &.is-orange {
      background: var(--orange);

      &.is-bordered {
        border-color: var(--orange);
      }

      .lnil,
      .lnir,
      .fas,
      .fab {
        color: var(--white);
      }

      svg {
        color: var(--smoke-white);
      }
    }

    &.is-green {
      background: var(--green);

      &.is-bordered {
        border-color: var(--green);
      }

      .lnil,
      .lnir,
      .fas,
      .fab {
        color: var(--white);
      }

      svg {
        color: var(--smoke-white);
      }
    }

    &.is-red {
      background: var(--red);

      &.is-bordered {
        border-color: var(--red);
      }

      .lnil,
      .lnir,
      .fas,
      .fab {
        color: var(--white);
      }

      svg {
        color: var(--smoke-white);
      }
    }
  }
}
</style>
