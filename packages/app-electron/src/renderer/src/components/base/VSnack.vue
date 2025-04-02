<script setup lang="ts">
export type VSnackColor = 'primary' | 'success' | 'info' | 'warning' | 'danger'
export type VSnackSize = 'small'
export interface VSnackProps {
  title: string
  icon?: string
  image?: string
  placeholder?: string
  color?: VSnackColor
  size?: VSnackSize
  solid?: boolean
  white?: boolean
}

const props = withDefaults(defineProps<VSnackProps>(), {
  icon: undefined,
  image: undefined,
  color: undefined,
  size: undefined,
  placeholder: 'https://via.placeholder.com/50x50',
})

function placeholderHandler(event: Event) {
  const target = event.target as HTMLImageElement
  target.src = props.placeholder
}
</script>

<template>
  <div
    class="snack"
    :class="[props.white && 'is-white', props.size && `is-${props.size}`]"
  >
    <div
      v-if="props.icon"
      class="snack-media is-icon"
      :class="[props.color && `is-${props.color}`, props.solid && `is-solid`]"
    >
      <VIcon :icon="props.icon" class="snack-icon" />
    </div>
    <div
      v-else-if="props.image"
      class="snack-media"
    >
      <img
        class="avatar"
        :src="props.image"
        alt=""
        @error.once="placeholderHandler"
      >
    </div>
    <span class="snack-text">
      <slot name="title">{{ props.title }}</slot>
    </span>
    <span class="snack-action">
      <slot />
    </span>
  </div>
</template>

<style lang="scss">
.snacks {
  display: flex;
  flex-wrap: wrap;

  .snack {
    margin: 0 8px 16px;
  }
}

.snack {
  display: inline-block;
  background: color-mix(in oklab, var(--fade-grey), white 2%);
  height: 38px;
  width: auto;
  border-radius: 500px;
  border: 1px solid color-mix(in oklab, var(--fade-grey), black 3%);
  transition: all 0.3s; // transition-all test

  &:hover {
    box-shadow: var(--light-box-shadow);
  }

  &.is-white {
    background: var(--white);
  }

  &.is-small {
    height: 30px;

    .snack-media {
      height: 32px;
      width: 32px;
      margin-inline-end: 4px;

      &.is-icon {
        height: 30px;
        width: 30px;

        .iconify {
          height: 15px;
          width: 15px;
          font-size: 15px;
        }

        .fas,
        .far,
        .fad,
        .fal,
        .fab {
          font-size: 13px;
        }

        .lnil,
        .lnir {
          font-size: 16px;
        }
      }

      img {
        height: 30px;
        width: 30px;
      }
    }

    .snack-text {
      font-size: 0.9rem;
      top: -12px;
    }

    .snack-action {
      top: -9px;
      margin: 0 10px 0 6px;
    }
  }

  .snack-media {
    position: relative;
    top: -1px;
    height: 40px;
    width: 40px;
    display: inline-block;
    margin-inline-end: 6px;

    &.is-icon {
      position: relative;
      inset-inline-start: -1px;
      height: 38px;
      width: 38px;
      background: var(--white);
      border: 1px solid color-mix(in oklab, var(--fade-grey), black 3%);
      border-radius: var(--radius-rounded);

      &.is-solid {
        .fas,
        .far,
        .fad,
        .fal,
        .fab,
        .lnil,
        .lnir {
          color: var(--white) !important;
        }
      }

      &.is-primary {
        border-color: var(--primary);

        &.is-solid {
          background: var(--primary);

          .iconify {
            color: var(--white);
          }
        }

        .iconify {
          color: var(--primary);
        }

        .fas,
        .far,
        .fad,
        .fal,
        .fab,
        .lnil,
        .lnir {
          color: var(--primary);
        }
      }

      &.is-success {
        border-color: var(--success);

        &.is-solid {
          background: var(--success);

          .iconify {
            color: var(--white);
          }
        }

        .iconify {
          color: var(--success);
        }

        .fas,
        .far,
        .fad,
        .fal,
        .fab,
        .lnil,
        .lnir {
          color: var(--success);
        }
      }

      &.is-info {
        border-color: var(--info);

        &.is-solid {
          background: var(--info);

          .iconify {
            color: var(--white);
          }
        }

        .iconify {
          color: var(--info);
        }

        .fas,
        .far,
        .fad,
        .fal,
        .fab,
        .lnil,
        .lnir {
          color: var(--info);
        }
      }

      &.is-warning {
        border-color: var(--warning);

        &.is-solid {
          background: var(--warning);

          .iconify {
            color: var(--white);
          }
        }

        .iconify {
          color: var(--warning);
        }

        .fas,
        .far,
        .fad,
        .fal,
        .fab,
        .lnil,
        .lnir {
          color: var(--warning);
        }
      }

      &.is-danger {
        border-color: var(--danger);

        &.is-solid {
          background: var(--danger);

          .iconify {
            color: var(--white);
          }
        }

        .iconify {
          color: var(--danger);
        }

        .fas,
        .far,
        .fad,
        .fal,
        .fab,
        .lnil,
        .lnir {
          color: var(--danger);
        }
      }

      .snack-icon {
        position: absolute;
        top: 50%;
        inset-inline-start: 50%;
        transform: translate(-50%, -50%);
      }

      .iconify {
        height: 18px;
        width: 18px;
        font-size: 18px;
        color: var(--light-text);
      }

      .fas,
      .far,
      .fad,
      .fal,
      .fab {
        font-size: 15px;
        color: var(--light-text);
      }

      .lnil,
      .lnir {
        font-size: 18px;
        color: var(--light-text);
      }
    }

    img {
      display: inline-block;
      height: 38px;
      width: 38px;
      border-radius: var(--radius-rounded);
    }
  }

  .snack-text {
    display: inline-block;
    position: relative;
    top: -15px;
    color: var(--dark-text);
  }

  .snack-action {
    position: relative;
    top: -14px;
    display: inline-block;
    margin: 0 16px 0 10px;
    cursor: pointer;

    .iconify {
      height: 14px;
      width: 14px;
      color: var(--light-text);
    }
  }
}

.is-dark {
  .snack {
    background: color-mix(in oklab, var(--dark-sidebar), white 2%);
    border-color: color-mix(in oklab, var(--dark-sidebar), white 4%);

    .snack-media {
      &.is-icon {
        &:not(.is-solid) {
          background: color-mix(in oklab, var(--dark-sidebar), white 4%);
        }

        &.is-primary:not(.is-solid) {
          border-color: var(--primary);

          .iconify {
            color: var(--primary);
          }

          .fas,
          .far,
          .fad,
          .fab,
          .fal,
          .lnil,
          .lnir {
            color: var(--primary);
          }
        }

        &.is-primary.is-solid {
          background: var(--primary);
          border-color: var(--primary);
        }
      }
    }

    .snack-text {
      color: var(--dark-dark-text);
    }
  }
}
</style>
