<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'

export type VAvatarSize = 'small' | 'medium' | 'large' | 'big' | 'xl'
export type VAvatarColor =
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'h-purple'
  | 'h-orange'
  | 'h-blue'
  | 'h-green'
  | 'h-red'
  | 'h-yellow'
export type VAvatarDotColor = 'primary' | 'success' | 'info' | 'warning' | 'danger'

export interface VAvatarProps {
  picture?: string
  pictureDark?: string
  placeholder?: string
  badge?: string
  initials?: string
  size?: VAvatarSize
  color?: VAvatarColor
  dotColor?: VAvatarDotColor
  squared?: boolean
  dot?: boolean
}

const props = withDefaults(defineProps<VAvatarProps>(), {
  picture: undefined,
  pictureDark: undefined,
  placeholder: 'https://via.placeholder.com/50x50',
  initials: '?',
  badge: undefined,
  size: undefined,
  color: undefined,
  dotColor: undefined,
})
</script>

<template>
  <div
    class="v-avatar"
    :class="[
      size && `is-${props.size}`,
      dot && 'has-dot',
      dotColor && `dot-${props.dotColor}`,
      squared && dot && 'has-dot-squared',
    ]"
  >
    <slot name="avatar">
      <img
        v-if="props.picture"
        class="avatar"
        :class="[props.squared && 'is-squared', props.pictureDark && 'light-image']"
        :src="props.picture"
        alt=""
        @error.once="(event) => onceImageErrored(event, '150x150')"
      />
      <span
        v-else
        class="avatar is-fake"
        :class="[props.squared && 'is-squared', props.color && `is-${props.color}`]"
      >
        <span>{{ props.initials }}</span>
      </span>
      <img
        v-if="props.picture && props.pictureDark"
        class="avatar dark-image"
        :class="[props.squared && 'is-squared']"
        :src="props.pictureDark"
        alt=""
        @error.once="(event) => onceImageErrored(event, '150x150')"
      />
    </slot>

    <slot name="badge">
      <img
        v-if="props.badge"
        class="badge"
        :src="props.badge"
        alt=""
        @error.once="(event) => onceImageErrored(event, '150x150')"
      />
    </slot>
  </div>
</template>

<style lang="scss">
.v-avatar {
  position: relative;
  display: inline-block;
  vertical-align: bottom;

  &.has-dot {
    &::after {
      content: '';
      position: absolute;
      top: 1px;
      right: 1px;
      height: 12px;
      width: 12px;
      border-radius: var(--radius-rounded);
      background: var(--success);
      border: 1.8px solid var(--white);
    }

    &.has-dot-squared {
      &::after {
        top: -3px;
        right: -3px;
      }
    }

    &.dot-primary {
      &::after {
        background: var(--primary);
      }
    }

    &.dot-info {
      &::after {
        background: var(--info);
      }
    }

    &.dot-warning {
      &::after {
        background: var(--warning);
      }
    }

    &.dot-danger {
      &::after {
        background: var(--danger);
      }
    }

    &.dot-grey {
      &::after {
        background: var(--light-text);
      }
    }
  }

  .avatar {
    width: 40px;
    min-width: 40px;
    height: 40px;
    object-fit: cover;

    &.is-squared {
      border-radius: 10px !important;
    }

    &.is-fake {
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--fade-grey);
      border-radius: var(--radius-rounded);

      &.is-primary {
        background: var(--primary-light-42);

        span {
          color: var(--primary);
        }
      }

      &.is-accent {
        background: var(--primary-light-36);

        span {
          color: var(--primary);
        }
      }

      &.is-success {
        background: var(--success-light-45);

        span {
          color: var(--success);
        }
      }

      &.is-info {
        background: var(--info-light-45);

        span {
          color: var(--info);
        }
      }

      &.is-warning {
        background: var(--warning-light-32);

        span {
          color: var(--warning);
        }
      }

      &.is-danger {
        background: var(--danger-light-36);

        span {
          color: var(--danger);
        }
      }

      &.is-h-purple {
        background: var(--purple-light-36);

        span {
          color: var(--purple);
        }
      }

      &.is-h-orange {
        background: var(--orange-light-18);

        span {
          color: var(--orange);
        }
      }

      &.is-h-blue {
        background: var(--blue-light-32);

        span {
          color: var(--blue);
        }
      }

      &.is-h-red {
        background: var(--red-light-38);

        span {
          color: var(--red);
        }
      }

      &.is-h-green {
        background: var(--green-light-22);

        span {
          color: var(--green);
        }
      }

      &.is-h-yellow {
        background: var(--yellow-light-22);

        span {
          color: var(--yellow-dark-8);
        }
      }

      span {
        position: relative;
        display: block;
        font-size: 1rem;
        font-weight: 500;
        text-transform: uppercase;
        color: var(--muted-grey);
      }
    }

    &.is-more {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: var(--radius-rounded);

      .inner {
        width: 40px;
        min-width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: var(--radius-rounded);
        background: var(--fade-grey-light-2);
        border: 1px solid var(--fade-grey);

        span {
          line-height: 1;
          position: relative;

          // top: -1px;
          left: -3px;
          display: block;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--light-text);
        }
      }
    }
  }

  .badge {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 16px;
    width: 16px;
    border: 1px solid var(--white);
  }

  img {
    display: block;
    border-radius: var(--radius-rounded);
  }

  &.is-small {
    max-width: 32px;
    min-width: 32px;
    max-height: 32px;

    &.has-dot {
      &::after {
        content: '';
        top: 0;
        right: 0;
        height: 8px;
        width: 8px;
        border-width: 1.4px;
      }

      &.has-dot-squared {
        &::after {
          top: -2px;
          right: -2px;
        }
      }
    }

    .avatar {
      width: 32px;
      min-width: 32px;
      height: 32px;

      &.is-squared {
        border-radius: 8px !important;
      }

      &.is-fake,
      &.is-more {
        width: 32px;
        min-width: 32px;
        height: 32px;

        .inner {
          width: 30px;
          min-width: 30px;
          height: 30px;
        }

        span {
          font-size: 0.85rem;
        }
      }
    }

    .badge {
      border-width: 1px;
      width: 12px;
      height: 12px;
    }
  }

  &.is-medium {
    max-width: 50px;
    min-width: 50px;

    &.has-dot {
      &::after {
        content: '';
        top: 1px;
        right: 1px;
        height: 12px;
        width: 12px;
        border-width: 2px;
      }

      &.has-dot-squared {
        &::after {
          top: -3px;
          right: -3px;
        }
      }
    }

    .avatar {
      width: 50px;
      min-width: 50px;
      height: 50px;

      &.is-squared {
        border-radius: 12px !important;
      }

      &.is-fake,
      &.is-more {
        width: 50px;
        min-width: 50px;
        height: 50px;

        .inner {
          width: 50px;
          min-width: 50px;
          height: 50px;
        }

        span {
          font-size: 1.2rem;
        }
      }
    }

    .badge {
      border-width: 2px;
      height: 20px;
      width: 20px;
    }
  }

  &.is-large {
    max-width: 68px;
    min-width: 68px;

    &.has-dot {
      &::after {
        content: '';
        top: 4px;
        right: 4px;
        height: 14px;
        width: 14px;
        border-width: 2.6px;
      }

      &.has-dot-squared {
        &::after {
          top: -4px;
          right: -1px;
        }
      }
    }

    .avatar {
      width: 68px;
      min-width: 68px;
      height: 68px;

      &.is-squared {
        border-radius: 16px !important;
      }

      &.is-fake {
        width: 68px;
        min-width: 68px;
        height: 68px;

        span {
          font-size: 1.4rem;
        }
      }
    }

    .badge {
      border-width: 2px;
      height: 24px;
      width: 24px;
    }
  }

  &.is-big {
    max-width: 80px;
    min-width: 80px;

    &.has-dot {
      &::after {
        content: '';
        top: 4px;
        right: 4px;
        height: 16px;
        width: 16px;
        border-width: 2.8px;
      }

      &.has-dot-squared {
        &::after {
          top: -4px;
          right: -1px;
        }
      }
    }

    .avatar {
      width: 80px;
      min-width: 80px;
      height: 80px;

      &.is-squared {
        border-radius: 18px !important;
      }

      &.is-fake {
        width: 80px;
        min-width: 80px;
        height: 80px;

        span {
          font-size: 1.4rem;
        }
      }
    }

    .badge {
      border-width: 2.4px;
      height: 28px;
      width: 28px;
    }
  }

  &.is-xl {
    max-width: 100px;
    min-width: 100px;

    &.has-dot {
      &::after {
        content: '';
        top: 6px;
        right: 5px;
        height: 18px;
        width: 18px;
        border-width: 2.8px;
      }

      &.has-dot-squared {
        &::after {
          top: -3px;
          right: -3px;
        }
      }
    }

    .avatar {
      width: 100px;
      min-width: 100px;
      height: 100px;

      &.is-squared {
        border-radius: 22px !important;
      }

      &.is-fake {
        width: 100px;
        min-width: 100px;
        height: 100px;

        span {
          font-size: 1.6rem;
        }
      }
    }

    .badge {
      border-width: 3px;
      height: 34px;
      width: 34px;
    }
  }
}

.is-dark {
  .v-avatar {
    .avatar {
      border-color: var(--dark-sidebar-light-6);

      &.is-fake {
        &.is-primary {
          background: var(--primary);

          span {
            color: var(--white);
          }
        }

        &.is-accent {
          background: var(--primary);

          span {
            color: var(--white);
          }
        }

        &.is-success {
          background: var(--success);

          span {
            color: var(--white);
          }
        }

        &.is-info {
          background: var(--info);

          span {
            color: var(--white);
          }
        }

        &.is-warning {
          background: var(--warning);

          span {
            color: var(--white);
          }
        }

        &.is-danger {
          background: var(--danger);

          span {
            color: var(--white);
          }
        }

        &.is-h-purple {
          background: var(--purple);

          span {
            color: var(--white);
          }
        }

        &.is-h-orange {
          background: var(--orange);

          span {
            color: var(--white);
          }
        }

        &.is-h-blue {
          background: var(--blue);

          span {
            color: var(--white);
          }
        }

        &.is-h-red {
          background: var(--red);

          span {
            color: var(--white);
          }
        }

        &.is-h-green {
          background: var(--green);

          span {
            color: var(--white);
          }
        }

        &.is-h-yellow {
          background: var(--yellow);

          span {
            color: var(--white);
          }
        }
      }

      &.is-more {
        .inner {
          background: var(--dark-sidebar-light-10);
          border-color: var(--dark-sidebar-dark-2);
        }
      }

      &.is-fake {
        border-color: var(--dark-sidebar-light-6);
      }
    }
  }
}

.avatar-stack {
  display: flex;

  .v-avatar {
    border-radius: var(--radius-rounded);

    &.is-small {
      border-radius: var(--radius-rounded);

      &:not(:first-child) {
        $var: 12;

        @for $i from 1 through 99 {
          &:nth-child(#{$i}) {
            margin-left: -#{$var}px;
          }
        }
      }

      img,
      .is-fake,
      .is-more .inner {
        border: 2px solid var(--white);
      }
    }

    &.is-medium {
      border-radius: var(--radius-rounded);

      &:not(:first-child) {
        $var: 16;

        @for $i from 1 through 99 {
          &:nth-child(#{$i}) {
            margin-left: -#{$var}px;
          }
        }
      }

      img,
      .is-fake,
      .is-more .inner {
        border: 4px solid var(--white);
      }
    }

    &:not(:first-child) {
      $var: 14;

      @for $i from 1 through 99 {
        &:nth-child(#{$i}) {
          margin-left: -#{$var}px;
        }
      }
    }

    img,
    .is-fake,
    .is-more .inner {
      border: 2px solid var(--white);
    }
  }
}
</style>
