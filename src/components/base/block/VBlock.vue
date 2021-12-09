<script setup lang="ts">
export interface VBlockProps {
  title: string
  subtitle?: string
  infratitle?: string
  center?: boolean
  lighter?: boolean
  narrow?: boolean
  mResponsive?: boolean
  tResponsive?: boolean
}

const props = withDefaults(defineProps<VBlockProps>(), {
  subtitle: undefined,
  infratitle: undefined,
})
</script>

<template>
  <div
    :class="[
      !props.center && 'media-flex',
      props.center && 'media-flex-center',
      props.narrow && 'no-margin',
      props.mResponsive && 'is-responsive-mobile',
      props.tResponsive && 'is-responsive-tablet-p',
    ]"
  >
    <slot name="icon"></slot>
    <div class="flex-meta" :class="[props.lighter && 'is-lighter']">
      <slot name="title">
        <span>{{ props.title }}</span>
        <span v-if="props.subtitle">{{ props.subtitle }}</span>
        <span v-if="props.infratitle">{{ props.infratitle }}</span>
      </slot>
      <slot></slot>
    </div>
    <div class="flex-end">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<style lang="scss">
.media-flex {
  display: flex;
  margin-bottom: 1rem;
  width: 100%;

  &:last-child,
  &.no-margin {
    margin-bottom: 0;
  }

  .flex-meta {
    margin-left: 12px;
    line-height: 1.3;

    &.is-lighter {
      span,
      > a {
        &:first-child {
          font-weight: 400;
        }
      }
    }

    &.is-light {
      span,
      > a {
        &:first-child {
          font-weight: 500;
        }
      }
    }

    span,
    > a {
      display: block;

      &:first-child {
        font-family: var(--font-alt);
        color: var(--dark-text);
        font-weight: 600;
      }

      &:nth-child(2) {
        font-family: var(--font);
        color: var(--light-text);
        font-size: 0.9rem;
      }
    }

    a:hover {
      color: var(--primary);
    }
  }

  .flex-end {
    margin-left: auto;
    display: flex;
    justify-content: flex-end;

    .end-action {
      margin-left: 1rem;
    }
  }
}

.media-flex-center {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;

  &:last-child,
  &.no-margin {
    margin-bottom: 0;
  }

  .flex-meta {
    margin-left: 12px;
    line-height: 1.4;

    &.is-lighter {
      span,
      > a {
        &:first-child {
          font-weight: 400;
        }
      }
    }

    &.is-light {
      span,
      > a {
        &:first-child {
          font-weight: 500;
        }
      }
    }

    span,
    > a {
      display: block;

      &:first-child {
        font-family: var(--font-alt);
        font-size: 0.95rem;
        color: var(--dark-text);
        font-weight: 600;
      }

      &:nth-child(2) {
        font-family: var(--font);
        color: var(--light-text);
        font-size: 0.9rem;
      }
    }

    a:hover {
      color: var(--primary);
    }
  }

  .flex-end {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .end-action {
      margin-left: 1rem;
    }
  }
}

.is-dark {
  .media-flex-center,
  .media-flex {
    .flex-meta {
      span,
      a {
        &:first-child {
          color: var(--dark-dark-text) !important;
        }
      }

      a:hover {
        color: var(--primary);
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .media-flex,
  .media-flex-center {
    &.is-responsive-mobile {
      flex-direction: column;
      text-align: center;

      .v-avatar,
      .v-icon {
        margin: 0 auto;
      }

      .flex-meta {
        margin: 10px auto 0;
      }

      .flex-end {
        margin: 10px auto;

        .end-action {
          margin-left: 0;
        }

        .button {
          min-width: 140px;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .media-flex,
  .media-flex-center {
    &.is-responsive-tablet-p {
      flex-direction: column;
      text-align: center;

      .v-avatar,
      .v-icon {
        margin: 0 auto;
      }

      .flex-meta {
        margin: 10px auto 0;
      }

      .flex-end {
        margin: 10px auto;

        .end-action {
          margin-left: 0;
        }

        .button {
          min-width: 140px;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .media-flex,
  .media-flex-center {
    &.is-responsive-tablet-l {
      flex-direction: column;
      text-align: center;

      .v-avatar,
      .v-icon {
        margin: 0 auto;
      }

      .flex-meta {
        margin: 10px auto 0;
      }

      .flex-end {
        margin: 10px auto;

        .end-action {
          margin-left: 0;
        }

        .button {
          min-width: 140px;
        }
      }
    }
  }
}
</style>
