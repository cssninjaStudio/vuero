<script setup lang="ts">
import type { VNode } from 'vue'
import { toRaw, computed, reactive, isReactive } from 'vue'

export interface VFlexTableColumn {
  key: string
  label: string
  format: (value: any, row: any, index: number) => any
  renderHeader?: () => VNode
  renderRow?: (row: any, column: VFlexTableColumn, index: number) => VNode
  align?: 'start' | 'center' | 'end'
  bold?: boolean
  inverted?: boolean
  scrollX?: boolean
  scrollY?: boolean
  grow?: boolean | 'lg' | 'xl'
  media?: boolean
  cellClass?: string
}
export interface VFlexTableProps<T = any> {
  data?: T[]
  columns?: Record<string, string | Omit<Partial<VFlexTableColumn>, 'key'>>
  printObjects?: boolean
  reactive?: boolean
  compact?: boolean
  rounded?: boolean
  clickable?: boolean
  subtable?: boolean
  noHeader?: boolean
}

const emits = defineEmits<{
  (e: 'rowClick', row: any, index: number): void
}>()
const props = withDefaults(defineProps<VFlexTableProps>(), {
  columns: undefined,
  data: () => [],
})
const data = computed(() =>
  props.reactive
    ? isReactive(props.data)
      ? props.data
      : reactive(props.data)
    : toRaw(props.data)
)

const defaultFormatter = (value: any) => value
const columns = computed(() => {
  let columns: VFlexTableColumn[] = []

  if (props.columns) {
    for (const [key, label] of Object.entries(props.columns)) {
      if (typeof label === 'string') {
        columns.push({
          format: defaultFormatter,
          label,
          key,
        })
      } else {
        columns.push({
          format: defaultFormatter,
          label: key,
          ...label,
          key,
        })
      }
    }
  } else if (data.value.length > 0) {
    for (const [key] of Object.entries(data.value[0])) {
      columns.push({
        format: defaultFormatter,
        label: key,
        key,
      })
    }
  }

  return columns
})
</script>

<template>
  <div
    class="flex-table"
    :class="[
      props.compact && 'is-compact',
      props.rounded && 'is-rounded',
      props.clickable && 'is-table-clickable',
      props.subtable && 'sub-table',
    ]"
  >
    <slot name="header">
      <div v-if="!props.noHeader" class="flex-table-header">
        <template v-for="column in columns" :key="'col' + column.key">
          <slot name="header-column" :column="column">
            <component
              :is="{ render: column.renderHeader }"
              v-if="column.renderHeader"
              :class="[
                column.grow === true && 'is-grow',
                column.grow === 'lg' && 'is-grow-lg',
                column.grow === 'xl' && 'is-grow-xl',
                column.align === 'end' && 'cell-end',
                column.align === 'center' && 'cell-center',
              ]"
            ></component>
            <span
              v-else
              :class="[
                column.grow === true && 'is-grow',
                column.grow === 'lg' && 'is-grow-lg',
                column.grow === 'xl' && 'is-grow-xl',
                column.align === 'end' && 'cell-end',
                column.align === 'center' && 'cell-center',
              ]"
              >{{ column.label }}</span
            >
          </slot>
        </template>
      </div>
    </slot>
    <slot name="body">
      <div
        v-for="(row, index) in data"
        :key="index"
        class="flex-table-item"
        :class="[props.clickable && 'is-clickable']"
        @click="
          () => {
            props.clickable && emits('rowClick', row, index)
          }
        "
      >
        <slot name="body-row" :row="row" :columns="columns" :index="index">
          <template v-for="column in columns" :key="'row' + column.key">
            <div
              class="flex-table-cell is-relative"
              :class="[
                column.bold && 'is-bold',
                column.media && 'is-media',
                column.grow === true && 'is-grow',
                column.grow === 'lg' && 'is-grow-lg',
                column.grow === 'xl' && 'is-grow-xl',
                column.scrollX && !column.scrollY && 'has-slimscroll-h',
                !column.scrollX && column.scrollY && 'has-slimscroll',
                column.scrollX && column.scrollY && 'has-slimscroll-all',
                column.align === 'end' && 'cell-end',
                column.align === 'center' && 'cell-center',
                column.cellClass,
              ]"
              :data-th="column.label"
            >
              <slot
                name="body-cell"
                :row="row"
                :column="column"
                :index="index"
                :value="column.format(row[column.key], row, index)"
              >
                <component
                  :is="{ render: () => column.renderRow?.(row, column, index) }"
                  v-if="column.renderRow"
                ></component>
                <span
                  v-else-if="
                    typeof column.format(row[column.key], row, index) === 'object'
                  "
                  :class="[
                    column.cellClass,
                    column.inverted && 'dark-inverted',
                    !column.inverted && (column.bold ? 'dark-text' : 'light-text'),
                  ]"
                >
                  <details v-if="printObjects">
                    <pre><code class="language-json">{{ column.format(row[column.key], row, index) }}</code></pre>
                  </details>
                </span>
                <span
                  v-else
                  :class="[
                    column.cellClass,
                    column.inverted && 'dark-inverted',
                    !column.inverted && (column.bold ? 'dark-text' : 'light-text'),
                  ]"
                >
                  {{ column.format(row[column.key], row, index) }}
                </span>
              </slot>
            </div>
          </template>
        </slot>
      </div>
    </slot>
  </div>
</template>

<style lang="scss">
/* ==========================================================================
1. Flex Table
========================================================================== */

.flex-table {
  .flex-table-header {
    display: flex;
    align-items: center;
    padding: 0 10px;

    span {
      flex: 1 1 0;
      display: flex;
      align-items: center;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--muted-grey);
      text-transform: uppercase;
      padding: 0 10px 10px;

      &.is-checkbox {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        max-width: 30px;

        .checkbox {
          padding: 0;

          > span {
            height: 22px;
          }
        }
      }

      &.cell-center {
        justify-content: center;
      }

      &.cell-end {
        justify-content: flex-end;
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

      a {
        color: var(--muted-grey);
      }
    }

    .checkbox {
      padding-bottom: 10px;
      padding-top: 0;

      > span {
        min-height: 20px;
      }
    }
  }

  .flex-table-item {
    display: flex;
    align-items: stretch;
    width: 100%;
    min-height: 60px;
    background: var(--white);
    border: 1px solid var(--fade-grey-dark-3);
    padding: 8px;
    margin-bottom: 6px;

    &.is-row {
      border: none;
      background: transparent;
    }

    .flex-table-cell {
      flex: 1 1 0;
      display: flex;
      align-items: center;
      padding: 0 10px;
      font-family: var(--font);

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

            span {
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
          .avatar.is-fake {
            span {
              margin: 0;
            }
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

          span {
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
          opacity: 0%;
          transition: opacity 0.3s;
        }

        &:hover {
          color: var(--primary);

          .iconify {
            opacity: 100%;
          }
        }
      }
    }
  }

  &.sub-table {
    .flex-table-item {
      padding-top: 0;
      padding-bottom: 0;
      margin-bottom: 0;
      min-height: 40px;
      border: none;
      background: transparent;

      .table-label {
        font-family: var(--font);
        text-transform: uppercase;
        font-size: 0.8rem;
        color: var(--light-text);
      }

      .table-total {
        font-family: var(--font);
        color: var(--dark-text);
        font-weight: 500;

        &.is-bigger {
          font-size: 1.2rem;
          font-weight: 600;
        }
      }
    }
  }

  &.is-compact {
    .flex-table-item {
      margin-bottom: 0;
      border-radius: 0;

      &:not(:last-child) {
        border-bottom: none;
      }
    }

    &.is-rounded {
      .flex-table-item {
        &:nth-of-type(2) {
          border-radius: 8px 8px 0 0;
        }

        &:last-child {
          margin-bottom: 6px;
          border-radius: 0 0 8px 8px;
        }
      }
    }
  }

  &:not(.is-compact) {
    &.is-rounded {
      .flex-table-item {
        border-radius: 8px;
      }
    }
  }

  &.is-table-clickable {
    .flex-table-item {
      &:hover {
        background: var(--primary);

        .light-text {
          color: var(--white);
        }
      }
    }
  }
}

/* ==========================================================================
2. Flex Table Dark mode
========================================================================== */

.is-dark {
  .flex-table {
    .flex-table-item {
      background: var(--dark-sidebar-light-6);
      border-color: var(--dark-sidebar-light-12);

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
              &:hover {
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
  }
}

@media only screen and (max-width: 767px) {
  .flex-table {
    &.sub-table {
      padding-top: 16px;

      .is-vhidden {
        display: none !important;
      }

      .flex-table-item:not(.is-vhidden) {
        flex-direction: revert !important;
      }
    }
  }
}
</style>
