<script setup lang="ts">
import { VFlexTableColumn } from './VFlexTable.vue'

export interface VFlexTableCellProps {
  column?: Partial<VFlexTableColumn>
}

const props = withDefaults(defineProps<VFlexTableCellProps>(), {
  column: () => ({}),
})
</script>

<template>
  <div
    class="flex-table-cell is-relative"
    :class="[
      props.column.bold && 'is-bold',
      props.column.media && 'is-media',
      props.column.grow === true && 'is-grow',
      props.column.grow === 'lg' && 'is-grow-lg',
      props.column.grow === 'xl' && 'is-grow-xl',
      props.column.scrollX && !props.column.scrollY && 'has-slimscroll-x',
      !props.column.scrollX && props.column.scrollY && 'has-slimscroll',
      props.column.scrollX && props.column.scrollY && 'has-slimscroll-all',
      props.column.align === 'end' && 'cell-end',
      props.column.align === 'center' && 'cell-center',
      props.column.cellClass,
    ]"
    :data-th="props.column.label || undefined"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss">
.flex-table-cell {
  flex: 1 1 0;
  display: flex;
  align-items: center;
  padding: 0 10px;
  font-family: var(--font);
  word-break: keep-all;
  white-space: nowrap;

  &.is-scrollable-x {
    overflow-x: auto;
  }

  &.is-scrollable-y {
    overflow-y: auto;
  }

  &.is-grow {
    flex-grow: 2;
  }

  &.cell-center {
    justify-content: center;
  }

  &.cell-end {
    justify-content: flex-end;

    .button {
      &.has-dot {
        .dot {
          position: relative;
          top: 1px;
          font-size: 4px;
          margin: 0 6px;
        }
      }
    }

    .action-link {
      font-size: 0.9rem;
    }
  }

  &.is-bold {
    > span {
      font-family: var(--font-alt);
      font-size: 0.9rem;
      font-weight: 600;
    }
  }

  &.is-checkbox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    max-width: 30px;

    .checkbox {
      padding: 0;
      margin-left: 4px;
    }
  }

  &.is-grow {
    flex-grow: 2;
  }

  &.is-grow-lg {
    flex-grow: 3;
  }

  &.is-grow-xl {
    flex-grow: 6;
  }

  &.is-user,
  &.is-media {
    padding-left: 0;

    > div span:not(.avatar) {
      display: block;
      margin-left: 10px;
    }

    > div {
      line-height: 1.2;

      .item-name {
        font-family: var(--font-alt);
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--dark);
      }

      .item-meta {
        color: var(--light-text);

        svg {
          position: relative;
          top: 2px;
          height: 14px;
          width: 14px;
          stroke-width: 1.6px;
          margin-right: 4px;
        }

        span,
        .text {
          display: inline-block;
          margin-left: 0;
          font-size: 0.9rem;
        }

        .flex-media {
          margin-left: 10px;
          margin-top: 4px;

          .v-avatar {
            width: 26px !important;
            min-width: 26px !important;
            height: 26px !important;

            .avatar {
              width: 26px !important;
              min-width: 26px !important;
              height: 26px !important;
            }
          }
        }

        .separator {
          padding: 0 8px;
        }
      }
    }

    .v-avatar {
      margin-left: 0 !important;

      .avatar.is-fake {
        span,
        .text {
          margin: 0;
        }
      }

      + div {
        margin-left: 0.5rem !important;
      }
    }

    .media {
      display: block;
      width: 100%;
      max-width: 130px;
      min-height: 95px;
      object-fit: cover;
      border-radius: 8px;
    }

    .cell-image {
      display: block;
      width: 100%;
      max-width: 80px;

      &.is-mini {
        max-width: 40px;
      }
    }

    &::before {
      display: none;
    }
  }

  .cell-icon {
    margin-right: 4px;
    color: var(--light-text);
  }

  .tag {
    margin-bottom: 0 !important;
    line-height: 1.8;
    height: 1.8em;
  }

  .flex-media {
    display: flex;
    align-items: center;

    .meta {
      margin-left: 6px;
      line-height: 1.3;

      span,
      .text {
        display: block !important;
        font-size: 0.8rem;
        color: var(--light-text);
        font-family: var(--font);
      }
    }
  }

  .dot-levels {
    display: flex;
    align-items: center;

    .dot {
      font-size: 8px;
      color: var(--light-text-light-6);
      margin: 0 6px;

      &.active {
        color: var(--primary);
      }
    }
  }

  .edit-icon-link {
    color: var(--light-text);

    .iconify {
      opacity: 0;
      transition: opacity 0.3s;
    }

    &:hover,
    &:focus-within {
      color: var(--primary);

      .iconify {
        opacity: 1;
      }
    }
  }
}

.is-dark {
  .flex-table-cell {
    &.is-user,
    &.is-media {
      .v-avatar {
        .badge {
          border-color: var(--dark-sidebar-light-6) !important;
        }
      }
    }

    &.cell-end {
      .button {
        &.dark-outlined {
          &:hover,
          &:focus-within {
            border-color: var(--primary) !important;
            color: var(--primary) !important;
          }
        }
      }
    }

    .dark-text {
      color: var(--dark-dark-text) !important;
    }

    .avatar-stack {
      .v-avatar {
        .avatar {
          border-color: var(--dark-sidebar-light-6) !important;
        }

        .is-more {
          .inner {
            border-color: var(--dark-sidebar-light-6) !important;
          }
        }
      }
    }

    .dot-levels {
      .dot {
        &.active {
          color: var(--primary);
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .flex-table-cell {
    position: relative;
    margin-bottom: 12px;

    &.no-label-mobile {
      &::before {
        display: none !important;
      }
    }

    &.cell-end {
      justify-content: flex-start !important;

      .btn-group {
        margin-left: auto;
      }
    }

    &.is-user,
    &.is-media {
      padding-left: 10px;

      span,
      .text {
        font-size: 1.2rem;
      }
    }
  }
}
@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .flex-table-cell {
    &.is-user {
      img {
        min-width: 50px;
      }
    }
  }
}
</style>
