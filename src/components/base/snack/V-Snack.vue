<script setup lang="ts">
import { computed } from 'vue'

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

const isIconify = computed(() => {
  return props.icon && props.icon.indexOf(':') !== -1
})
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
      <i
        v-if="isIconify"
        aria-hidden="true"
        class="iconify snack-icon"
        :data-icon="icon"
      ></i>
      <i v-else aria-hidden="true" class="snack-icon" :class="props.icon"></i>
    </div>
    <div v-else-if="props.image" class="snack-media">
      <img class="avatar" :src="props.image" alt="" @error.once="placeholderHandler" />
    </div>
    <span class="snack-text">
      <slot name="title">{{ props.title }}</slot>
    </span>
    <span class="snack-action">
      <slot></slot>
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
  background: var(--fade-grey-light-2);
  height: 38px;
  width: auto;
  border-radius: 500px;
  border: 1px solid var(--fade-grey-dark-3);
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
      margin-right: 4px;

      &.is-icon {
        height: 30px;
        width: 30px;

        svg {
          height: 15px;
          width: 15px;
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
    margin-right: 6px;

    &.is-icon {
      position: relative;
      left: -1px;
      height: 38px;
      width: 38px;
      background: var(--white);
      border: 1px solid var(--fade-grey-dark-3);
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

          svg {
            color: var(--white);
          }
        }

        svg {
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

          svg {
            color: var(--white);
          }
        }

        svg {
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

          svg {
            color: var(--white);
          }
        }

        svg {
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

          svg {
            color: var(--white);
          }
        }

        svg {
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

          svg {
            color: var(--white);
          }
        }

        svg {
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
        left: 50%;
        transform: translate(-50%, -50%);
      }

      svg {
        height: 18px;
        width: 18px;
        stroke-width: 1.6px;
        color: var(--light-text);
        vertical-align: 0 !important;
        transform: rotate(0) translate(-50%, -50%) !important;
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

    svg {
      height: 14px;
      width: 14px;
      color: var(--light-text);
    }
  }
}

.is-dark {
  .snack {
    background: var(--dark-sidebar-light-2);
    border-color: var(--dark-sidebar-light-4);

    .snack-media {
      &.is-icon {
        &:not(.is-solid) {
          background: var(--dark-sidebar-light-4);
        }

        &.is-primary:not(.is-solid) {
          border-color: var(--primary);

          svg {
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
