<script setup lang="ts">
import type { VNode } from 'vue'
import { toRaw, computed, reactive, isReactive, inject } from 'vue'

import { flewTableWrapperSymbol } from './VFlexTableWrapper.vue'

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

export interface VFlexTableProps {
  data?: any[]
  columns?: Record<string, string | Partial<VFlexTableColumn>>
  printObjects?: boolean
  reactive?: boolean
  compact?: boolean
  rounded?: boolean
  separators?: boolean
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

const wrapper = inject(flewTableWrapperSymbol, null)

const data = computed(() => {
  if (wrapper?.data) return wrapper.data

  if (props.reactive) {
    if (isReactive(props.data)) {
      return props.data
    } else {
      return reactive(props.data)
    }
  }

  return toRaw(props.data)
})

const defaultFormatter = (value: any) => value
const columns = computed(() => {
  const columnsSrc = wrapper?.columns ?? props.columns
  let columns: VFlexTableColumn[] = []

  if (columnsSrc) {
    for (const [key, label] of Object.entries(columnsSrc)) {
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
          key,
          ...(label as any),
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
      props.separators && 'with-separators',
      props.noHeader && 'no-header',
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
      <template v-for="(row, index) in data" :key="index">
        <slot name="body-row-pre" :row="row" :columns="columns" :index="index"></slot>
        <div
          class="flex-table-item has-slimscroll-x"
          :class="[props.clickable && 'is-clickable']"
          :tabindex="props.clickable ? 0 : undefined"
          @keydown.space.prevent="
            () => {
              props.clickable && emits('rowClick', row, index)
            }
          "
          @click="
            () => {
              props.clickable && emits('rowClick', row, index)
            }
          "
        >
          <slot name="body-row" :row="row" :columns="columns" :index="index">
            <template v-for="column in columns" :key="'row' + column.key">
              <VFlexTableCell :column="column">
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
                      <div class="language-json py-4">
                        <pre><code>{{ column.format(row[column.key], row, index) }}</code></pre>
                      </div>
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
              </VFlexTableCell>
            </template>
          </slot>
        </div>
        <slot name="body-row-post" :row="row" :columns="columns" :index="index"></slot>
      </template>
    </slot>
  </div>
</template>

<style lang="scss">
.flex-table {
  .flex-table-header {
    display: flex;
    align-items: center;
    padding: 0 10px;

    > span,
    .text {
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
      &:not(.no-header) {
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

      &.no-header {
        .flex-table-item {
          &:first-child {
            border-radius: 8px 8px 0 0;
          }

          &:last-child {
            margin-bottom: 6px;
            border-radius: 0 0 8px 8px;
          }
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
      &:hover,
      &:focus-within {
        background: var(--widget-grey) !important;
      }
    }
  }

  &.with-separators {
    .flex-table-item {
      .flex-table-cell {
        &:not(:first-of-type) {
          border-left: dashed 1px var(--fade-grey-dark-3);
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
    &:not(.sub-table) {
      .flex-table-item {
        background: var(--dark-sidebar-light-6);
        border-color: var(--dark-sidebar-light-12);
      }
    }

    &.with-separators {
      .flex-table-item {
        .flex-table-cell {
          &:not(:first-of-type) {
            border-left: dashed 1px var(--dark-sidebar-light-12);
          }
        }
      }
    }

    &.is-table-clickable {
      .flex-table-item {
        &:hover,
        &:focus-within {
          background: var(--dark-sidebar-light-12) !important;
        }
      }
    }
  }
}

/* ==========================================================================
3. Media Queries
========================================================================== */

@media (max-width: 767px) {
  .flex-table {
    .flex-table-header {
      display: none;
    }

    .flex-table-item {
      flex-direction: column;
      justify-content: center;
      width: 100% !important;
      padding: 20px;
      margin-bottom: 16px;

      &:last-child {
        margin-bottom: 0;
      }

      > div {
        border: none !important;
      }
    }

    &:not(.sub-table) {
      .flex-table-item {
        .flex-table-cell {
          > span,
          > small,
          > strong,
          > p,
          > div,
          > .is-pushed-mobile,
          > .text {
            margin-left: auto;

            &.no-push {
              margin-left: 0 !important;
            }
          }

          &[data-th] {
            &::before {
              content: attr(data-th);
              font-size: 0.9rem;
              text-transform: uppercase;
              font-weight: 500;
              color: var(--muted-grey);
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
