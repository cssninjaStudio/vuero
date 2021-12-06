<script lang="ts">
import 'simple-datatables/src/style.css'
</script>

<script setup lang="ts">
import { isReactive, onBeforeUnmount, onMounted, ref, watch, reactive } from 'vue'
import { DataTable } from 'simple-datatables'

export interface VSimpleDatatablesProps {
  options?: any
  autoupdate?: boolean
}

const props = withDefaults(defineProps<VSimpleDatatablesProps>(), {
  options: () => ({}),
})

const tableElement = ref<HTMLElement>()
const wrapperElement = ref<HTMLElement>()
const datatable = ref<any>(null)
const hasFocus = ref(false)
const lastSort = reactive({
  column: 0,
  direction: '',
})

const emit = defineEmits([
  'init',
  'refresh',
  'update',
  'page',
  'sort',
  'perpage',
  'search',
])

const onFocus = (event: Event) => {
  if (!hasFocus.value) {
    hasFocus.value = true
  }
}

const onBlur = (event: Event) => {
  if (hasFocus.value) {
    hasFocus.value = false
  }
}

const registerEvents = () => {
  if (wrapperElement.value) {
    const searchElement = wrapperElement.value.querySelector(
      '.dataTable-input'
    ) as HTMLInputElement
    const pageLimitElement = wrapperElement.value.querySelector(
      '.dataTable-selector'
    ) as HTMLSelectElement
    const paginationElement = wrapperElement.value.querySelector(
      '.dataTable-pagination'
    ) as HTMLElement
    const sortersElement = wrapperElement.value.querySelectorAll('.dataTable-sorter')

    if (searchElement) {
      searchElement.addEventListener('focus', onFocus, false)
      searchElement.addEventListener('blur', onBlur, false)
    }
    if (pageLimitElement) {
      pageLimitElement.addEventListener('focus', onFocus, false)
      pageLimitElement.addEventListener('blur', onBlur, false)
      pageLimitElement.addEventListener('change', onBlur, false)
    }
    if (paginationElement) {
      paginationElement.addEventListener('mousedown', onFocus, false)
      paginationElement.addEventListener('mouseup', onBlur, false)
    }
    sortersElement.forEach((sorterElement) => {
      let sorter = sorterElement as HTMLElement
      if (sorter) {
        sorter.addEventListener('mousedown', onFocus, false)
        sorter.addEventListener('mouseup', onBlur, false)
      }
    })
  }

  if (datatable.value) {
    datatable.value.on(`datatable.init`, () => {
      emit('init')
    })
    datatable.value.on(`datatable.refresh`, () => {
      emit('refresh')
    })
    datatable.value.on(`datatable.update`, () => {
      emit('update')
    })
    datatable.value.on(`datatable.page`, (page: number) => {
      emit('page', page)
    })
    datatable.value.on(`datatable.sort`, (column: number, direction?: string) => {
      lastSort.column = column
      lastSort.direction = direction || ''
      emit('sort', column, direction)
    })
    datatable.value.on(`datatable.perpage`, (perpage: number) => {
      emit('perpage', perpage)
    })
    datatable.value.on(`datatable.search`, (query: string, matched: any[]) => {
      emit('search', query, matched)
    })
  }
}

const unregisterEvents = () => {
  if (datatable.value) {
    datatable.value.destroy()
    datatable.value = null
  }

  if (wrapperElement.value) {
    const searchElement = wrapperElement.value.querySelector(
      '.dataTable-input'
    ) as HTMLInputElement
    const pageLimitElement = wrapperElement.value.querySelector(
      '.dataTable-selector'
    ) as HTMLSelectElement
    const paginationElement = wrapperElement.value.querySelector(
      '.dataTable-pagination'
    ) as HTMLElement
    const sortersElement = wrapperElement.value.querySelectorAll('.dataTable-sorter')

    if (searchElement) {
      searchElement.removeEventListener('focus', onFocus)
      searchElement.removeEventListener('blur', onBlur)
    }
    if (pageLimitElement) {
      pageLimitElement.removeEventListener('focus', onFocus)
      pageLimitElement.removeEventListener('blur', onBlur)
      pageLimitElement.removeEventListener('change', onBlur)
    }
    if (paginationElement) {
      paginationElement.removeEventListener('mousedown', onFocus)
      paginationElement.removeEventListener('mouseup', onBlur)
    }
    sortersElement.forEach((sorterElement) => {
      let sorter = sorterElement as HTMLElement
      if (sorter) {
        sorter.removeEventListener('mousedown', onFocus)
        sorter.removeEventListener('mouseup', onBlur)
      }
    })
  }
}

onMounted(() => {
  if (tableElement.value) {
    datatable.value = new DataTable(tableElement.value, props.options)
  }
  registerEvents()
})

onBeforeUnmount(() => {
  unregisterEvents()
})

if (isReactive(props.options)) {
  watch([props.options, () => props.autoupdate], () => {
    if (tableElement.value && props.autoupdate && !hasFocus.value) {
      let currentPage = 1
      let perPage = 10
      let search = ''

      if (datatable.value) {
        currentPage = datatable.value.currentPage
        search = datatable.value.input?.value
        perPage = datatable.value.options?.perPage
        unregisterEvents()
      }

      datatable.value = new DataTable(tableElement.value, {
        ...props.options,
        perPage,
      })
      if (props.options.searchable !== false) {
        datatable.value.input.value = search
        datatable.value.input.dispatchEvent(new Event('keyup'))
      }
      if (lastSort.direction !== '') {
        datatable.value.columns().sort(lastSort.column, lastSort.direction)
      }

      datatable.value.page(currentPage)
      registerEvents()
    }
  })
}
</script>

<template>
  <div ref="wrapperElement">
    <table ref="tableElement">
      <slot></slot>
    </table>
  </div>
</template>

<style lang="scss">
.is-navbar {
  .datatable-toolbar {
    padding-top: 30px;
  }
}

.datatable-toolbar {
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  &.is-reversed {
    flex-direction: row-reverse;
  }

  .field {
    margin-bottom: 0;

    .control {
      .button {
        color: var(--light-text);

        &:hover,
        &:focus {
          background: var(--primary);
          border-color: var(--primary);
          color: var(--primary--color-invert);
        }
      }
    }
  }

  .buttons {
    margin-left: auto;
    margin-bottom: 0;

    .v-button {
      margin-bottom: 0;
    }
  }
}

.is-dark {
  .datatable-toolbar {
    .field {
      .control {
        .button {
          background: var(--dark-sidebar) !important;
          color: var(--light-text);

          &:hover,
          &:focus {
            background: var(--primary) !important;
            border-color: var(--primary) !important;
            color: var(--smoke-white) !important;
          }
        }
      }
    }
  }
}

.dataTable-wrapper {
  .dataTable-top {
    margin-bottom: 1.5rem;
    padding-left: 0;
    padding-right: 0;

    .dataTable-dropdown {
      label {
        display: block;
        position: relative;
        font-family: var(--font);
        font-weight: 400;
        font-size: 0.9rem;
        color: var(--light-text);

        &::after {
          position: absolute;
          top: 1px;
          right: 4px;
          content: '';
          font-family: 'Font Awesome 5 Free';
          font-weight: 900;
          font-size: 0.9rem;
          color: var(--light-text);
          height: 36px;
          width: 36px;
          border-radius: 0.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background: var(--white);
        }
      }

      select {
        font-size: 1rem;
        background: var(--white);
        border: 1px solid var(--border);
        color: var(--dark-text);
        border-radius: 0.5rem;
        height: 38px;
        transition: box-shadow 0.3s;

        &:focus {
          box-shadow: var(--light-box-shadow);
        }
      }
    }

    .dataTable-search {
      position: relative;

      &::after {
        position: absolute;
        top: 1px;
        right: 4px;
        content: '\f002';
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
        font-size: 0.9rem;
        color: var(--light-text);
        height: 36px;
        width: 36px;
        border-radius: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--white);
      }

      input {
        font-family: var(--font);
        font-size: 1rem;
        background: var(--white);
        border: 1px solid var(--border);
        color: var(--dark-text);
        border-radius: 0.5rem;
        height: 38px;
        transition: box-shadow 0.3s;

        &::placeholder {
          color: var(--placeholder);
        }

        &:focus {
          box-shadow: var(--light-box-shadow);
        }
      }
    }
  }

  .dataTable-container {
    background: var(--white);
    border: none !important;
    overflow-x: auto;

    &::-webkit-scrollbar {
      height: 8px !important;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px !important;
      background: rgb(0 0 0 / 20%) !important;
    }

    .dataTable-table {
      border: 1px solid var(--fade-grey);
      border-collapse: collapse;
      border-radius: 0.75rem;

      th {
        padding: 16px 20px;
        font-family: var(--font-alt);
        font-size: 0.8rem;
        color: var(--dark-text);
        text-transform: uppercase;
        border: 1px solid var(--fade-grey);
        font-weight: 600;

        &:last-child {
          text-align: right;
        }
      }

      td {
        font-family: var(--font);
        vertical-align: middle;
        padding: 12px 20px;
        border-bottom: 1px solid var(--fade-grey);

        &:last-child {
          text-align: right;
        }

        &.dataTables-empty {
          opacity: 0;
        }
      }

      .light-text {
        color: var(--light-text);
      }

      .flex-media {
        display: flex;
        align-items: center;

        .meta {
          margin-left: 10px;
          line-height: 1.3;

          span {
            display: block;
            font-size: 0.8rem;
            color: var(--light-text);
            font-family: var(--font);

            &:first-child {
              font-family: var(--font-alt);
              color: var(--dark-text);
            }
          }
        }
      }

      .row-action {
        display: flex;
        justify-content: flex-end;
      }

      .checkbox {
        padding: 0;
      }

      .product-photo {
        width: 80px;
        height: 80px;
        object-fit: contain;
      }

      .file-icon {
        width: 46px;
        height: 46px;
        object-fit: contain;
      }

      .drinks-icon {
        display: block;
        max-width: 48px;
        border-radius: var(--radius-rounded);
        border: 1px solid var(--fade-grey);
      }

      .negative-icon,
      .positive-icon {
        svg {
          height: 16px;
          width: 16px;
        }
      }

      .positive-icon {
        .iconify {
          color: var(--success);

          * {
            stroke-width: 4px;
          }
        }
      }

      .negative-icon {
        &.is-danger {
          .iconify {
            color: var(--danger) !important;
          }
        }

        .iconify {
          color: var(--light-text);

          * {
            stroke-width: 4px;
          }
        }
      }

      .price {
        color: var(--dark-text);
        font-weight: 500;

        &::before {
          content: '$';
        }

        &.price-free {
          color: var(--light-text);
        }
      }

      .status {
        display: flex;
        align-items: center;

        &.is-available {
          i {
            color: var(--success);
          }
        }

        &.is-busy {
          i {
            color: var(--danger);
          }
        }

        &.is-offline {
          i {
            color: var(--light-text);
          }
        }

        i {
          margin-right: 8px;
          font-size: 8px;
        }

        span {
          font-family: var(--font);
          font-size: 0.9rem;
          color: var(--light-text);
        }
      }
    }
  }

  .dataTable-bottom {
    .dataTable-info {
      font-family: var(--font);
      font-size: 0.9rem;
      color: var(--light-text);
    }

    .dataTable-pagination {
      li {
        &:not(.active) {
          a:hover {
            background: var(--white);
          }
        }

        &.active {
          a {
            background: var(--primary);
            box-shadow: var(--primary-box-shadow);
            color: var(--primary--color-invert);
          }
        }

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: var(--font);
          color: var(--light-text);
          border-radius: var(--radius-rounded);
          min-width: 34px;
          min-height: 34px;
          padding: 0;
        }
      }
    }
  }
}

.is-dark {
  .dataTable-wrapper {
    .dataTable-top {
      .dataTable-dropdown {
        label {
          &::after {
            background: var(--dark-sidebar-light-6) !important;
          }
        }

        select {
          border-color: var(--dark-sidebar-light-12);
          background: var(--dark-sidebar-light-6);
          color: var(--white);
        }
      }

      .dataTable-search {
        &::after {
          background: var(--dark-sidebar-light-6) !important;
        }

        input {
          border-color: var(--dark-sidebar-light-12);
          background: var(--dark-sidebar-light-6);
          color: var(--white);
        }
      }
    }

    .dataTable-container {
      border-color: var(--dark-sidebar-light-12);
      background: var(--dark-sidebar-light-6);

      .dataTable-table {
        border-color: var(--dark-sidebar-light-12);

        th,
        td {
          border-color: var(--dark-sidebar-light-12);
          color: var(--dark-dark-text);
        }

        th {
          .dataTable-sorter {
            &::before {
              border-top-color: var(--dark-dark-text);
            }

            &::after {
              border-bottom-color: var(--dark-dark-text);
            }
          }
        }

        .drinks-icon {
          border-color: var(--dark-sidebar-light-12);
        }
      }
    }
  }
}
</style>
