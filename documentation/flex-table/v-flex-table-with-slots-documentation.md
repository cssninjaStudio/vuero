---
example_bottom: true
---

### Make VFlexTable yours with slots

The easiest way to create complex tables with `<VFlexTable />` is to uses slots.
This allow to use other components and having great control
inside rows (with `#body-cell` slot) and columns (with `#header-column` slot).
To update data dynamically, use `reactive` props so your interface will know
that data is updated, this is disabled by default to prevent
performance issues.  
Check the markup for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
import { ref, computed } from 'vue'

const selectedRowsId = ref<number[]>([])
const editCompanyIndex = ref<number>()

const isAllSelected = computed(
  () => flexRowsContacts.length === selectedRowsId.value.length
)

// this is our data
const data = [
  {
    id: 0,
    company: 'Grubspot',
    type: 'New Lead',
    industry: 'Software',
    status: 'Active',
    contacts: [
      {
        id: 0,
        picture: '/demo/avatars/25.jpg',
        initials: 'AC',
        color: 'info',
      },
      // and more contacts ..
    ],
  },
  // and more data ...
]

// this is the columns configuration
const columns = {
  select: {
    label: '',
    cellClass: 'is-flex-grow-0',
  },
  company: {
    label: 'Company',
    grow: true,
  },
  type: 'Type',
  industry: 'Industry',
  status: 'Status',
  contacts: {
    label: 'Contacts',
    align: 'end',
  },
}

// the select all checkbox click handler
function toggleSelection() {
  if (isAllSelected.value) {
    selectedRowsId.value = []
  } else {
    selectedRowsId.value = flexRowsContacts.map((_, index) => index)
  }
}
// this it the row click handler (enabled with clickable props)
function clickOnRow(row: any) {
  if (selectedRowsId.value.includes(row.id)) {
    selectedRowsId.value = selectedRowsId.value.filter((i) => i !== row.id)
  } else {
    selectedRowsId.value = [...selectedRowsId.value, row.id]
  }
}

// this is the "Contact me" click handler
function contactUser(row: any) {
  alert(`Contacting "${row.company}" ...`)
}

// this is a local directive (it begins with V..., usable with v-focus)
// that is used to force the focus on input when mounted
const VFocus = {
  mounted(el: HTMLInputElement) {
    el.focus()
  },
}
</script>

<template>
  <VFlexTable
    :data="data"
    :columns="columns"
    clickable
    compact
    rounded
    @row-click="clickOnRow"
  >
    <!-- header-column slot -->
    <template #header-column="{ column }">
      <VCheckbox
        v-if="column.key === 'select'"
        class="ml-2 mr-3"
        :checked="isAllSelected"
        name="all_selected"
        color="primary"
        square
        @click="toggleSelection"
      />
    </template>

    <!-- body-cell slot -->
    <template #body-cell="{ row, column, value }">
      <!--This is the slot for row.select cells-->
      <VCheckbox
        v-if="column.key === 'select'"
        v-model="selectedRowsId"
        :value="row.id"
        name="selection"
        square
      />

      <!--This is the slot for row.company cells-->
      <template v-else-if="column.key === 'company'">
        <VControl v-if="editCompanyIndex === index">
          <VField>
            <input
              v-model="row[column.key]"
              v-focus
              type="text"
              class="input is-primary-focus"
              @blur="editCompanyIndex = undefined"
              @keyup.enter="editCompanyIndex = undefined"
            />
          </VField>
        </VControl>

        <a
          v-else
          class="is-overlay m-3 is-flex is-align-items-center is-clickable edit-icon-link"
          tabindex="0"
          @click="editCompanyIndex = index"
          @keydown.enter="editCompanyIndex = index"
        >
          {{ value }}
          <i
            class="iconify is-inline ml-1"
            data-icon="feather:edit"
            role="img"
            aria-label="edit-3"
          ></i>
        </a>
      </template>

      <!--This is the slot for row.status cells-->
      <VTag
        v-else-if="column.key === 'status'"
        rounded
        :color="
          value === 'Suspended'
            ? 'orange'
            : value === 'New'
            ? 'info'
            : value === 'Active'
            ? 'primary'
            : undefined
        "
      >
        {{ value }}
      </VTag>

      <!--This is the slot for row.contacts cells-->
      <VAction v-if="column.key === 'contacts'" @click.stop="contactUser(row)">
        Contact me
      </VAction>

      <!--The default slot is used then-->
    </template>
  </VFlexTable>
</template>
```

<!--/code-->
