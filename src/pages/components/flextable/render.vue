<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { flexRowsAdvanced } from '/@src/data/documentation/table'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import VTag from '/@src/components/base/tags/VTag.vue'
import FlexTableDropdown from '/@src/components/partials/dropdowns/FlexTableDropdown.vue'
import VFlexTableSortColumn from '/@src/components/base/table/VFlexTableSortColumn.vue'
import VAvatarStack from '/@src/components/base/avatar/VAvatarStack.vue'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Render functions (advanced)')
useHead({
  title: 'Render functions (advanced) - VFlexTable - Components - Vuero',
})

const collator = new Intl.Collator('en')
const numberFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})
const router = useRoute()
const sortedData = computed(() => {
  switch (router.query.sort) {
    case 'username:asc': {
      return [...flexRowsAdvanced].sort((a, b) =>
        collator.compare(a.username, b.username)
      )
    }
    case 'username:desc': {
      return [...flexRowsAdvanced].sort((a, b) =>
        collator.compare(b.username, a.username)
      )
    }
    case 'annual-earnings:asc': {
      return [...flexRowsAdvanced].sort((a, b) =>
        a.annualEarnings > b.annualEarnings ? 1 : -1
      )
    }
    case 'annual-earnings:desc': {
      return [...flexRowsAdvanced].sort((a, b) =>
        a.annualEarnings > b.annualEarnings ? -1 : 1
      )
    }
    case 'position:asc': {
      return [...flexRowsAdvanced].sort((a, b) =>
        collator.compare(a.position, b.position)
      )
    }
    case 'position:desc': {
      return [...flexRowsAdvanced].sort((a, b) =>
        collator.compare(b.position, a.position)
      )
    }
    case 'status:asc': {
      return [...flexRowsAdvanced].sort((a, b) => collator.compare(a.status, b.status))
    }
    case 'status:desc': {
      return [...flexRowsAdvanced].sort((a, b) => collator.compare(b.status, a.status))
    }
    case 'contacts:asc': {
      return [...flexRowsAdvanced].sort((a, b) =>
        a.contacts.length > b.contacts.length ? 1 : -1
      )
    }
    case 'contacts:desc': {
      return [...flexRowsAdvanced].sort((a, b) =>
        a.contacts.length > b.contacts.length ? -1 : 1
      )
    }
    default: {
      return flexRowsAdvanced
    }
  }
})

// this is the how rows and columns are rendered
const exampleColumns = {
  username: {
    bold: true,
    // we can use custom render function for column heading
    renderHeader: () =>
      h(VFlexTableSortColumn, {
        label: 'Name',
        id: 'username',
      }),
  },
  position: {
    renderHeader: () =>
      h(VFlexTableSortColumn, {
        label: 'Position',
        id: 'position',
      }),
  },
  annualEarnings: {
    inverted: true,
    format: (value: any) => numberFormat.format(value),
    // we can use custom render function for column heading
    renderHeader: () =>
      h(VFlexTableSortColumn, {
        label: 'Revenue',
        id: 'annual-earnings',
      }),
  },
  status: {
    label: 'Status',
    // we can use custom render function for each rows
    renderRow: (row: any) =>
      h(
        VTag,
        {
          rounded: true,
          color:
            row.status === 'Active'
              ? 'success'
              : row.status === 'New'
              ? 'info'
              : row.status === 'Suspended'
              ? 'orange'
              : undefined,
        },
        // that notation is to render content in the default slot
        {
          default() {
            return `${row.status}`
          },
        }
      ),
    // we can use custom render function for column heading
    renderHeader: () =>
      h(VFlexTableSortColumn, {
        label: 'Status',
        id: 'status',
      }),
  },
  contacts: {
    renderHeader: () =>
      h(
        'span',
        {},
        h(VFlexTableSortColumn, {
          label: 'Contacts',
          id: 'contacts',
        })
      ),
    renderRow: (row: any) =>
      // We can render custom components and set props
      h(VAvatarStack, {
        class: 'is-pushed-mobile',
        size: 'small',
        avatars: row.contacts,
        limit: 3,
      }),
  },
  actions: {
    label: '',
    align: 'end',
    renderRow: (row: any) =>
      h(FlexTableDropdown, {
        // We can catch all events from vue
        onView: () => {
          console.log('viewing', row)
        },
        onProjects: () => {
          console.log('projects', row)
        },
        onSchedule: () => {
          console.log('schedule', row)
        },
        onRemove: () => {
          console.log('remove', row)
        },
      }),
  },
} as const
</script>

<template>
  <div class="page-content-inner">
    <VBreadcrumb
      with-icons
      separator="bullet"
      :items="[
        {
          label: 'Vuero',
          hideLabel: true,
          icon: 'feather:home',
          to: '/',
        },
        {
          label: 'Components',
          to: '/components/',
        },
        {
          label: 'VFlexTable',
          to: '/components/flextable/',
        },
        {
          label: 'Render functions (advanced)',
          to: '/components/flextable/render',
        },
      ]"
    />

    <div class="columns">
      <div class="column is-12">
        <!--Flex Table-->
        <VFlexTableWithRenderDocumentation class="mt-5" />

        <div class="mt-4">
          <!--VFlexTabe-->
          <VFlexTable :data="sortedData" :columns="exampleColumns" rounded></VFlexTable>
        </div>
      </div>
    </div>
  </div>
</template>
