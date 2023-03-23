<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { flexRowsContacts } from '/@src/data/documentation/table'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Slots usage')
useHead({
  title: 'Slots usage - VFlexTable - Components - Vuero',
})

// this is a local directive (it begins with V..., usable with v-focus)
// that is used to force the focus on input when mounted
const VFocus = {
  mounted(el: HTMLInputElement) {
    el.focus()
  },
}

const selectedRows = ref<number[]>([])
const editCompanyIndex = ref<number>()
const isAllSelected = computed(
  () => flexRowsContacts.length === selectedRows.value.length
)

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
    label: '',
    align: 'end',
  },
} as const
function toggleSelection() {
  if (isAllSelected.value) {
    selectedRows.value = []
  } else {
    selectedRows.value = flexRowsContacts.map((item) => item.id)
  }
}
function clickOnRow(row: any) {
  if (selectedRows.value.includes(row.id)) {
    selectedRows.value = selectedRows.value.filter((i) => i !== row.id)
  } else {
    selectedRows.value = [...selectedRows.value, row.id]
  }
}
function contactUser(row: any) {
  alert(`Contacting "${row.company}" ...`)
}
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
          label: 'Slots usage',
          to: '/components/flextable/slots',
        },
      ]"
    />

    <div class="columns">
      <div class="column is-12">
        <!--Flex Table-->
        <VFlexTableWithSlotsDocumentation class="mt-5" />

        <div class="mt-4">
          <!--VFlexTabe-->
          <VFlexTable
            :data="flexRowsContacts"
            :columns="columns"
            compact
            rounded
            reactive
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
            <template #body-cell="{ row, column, index, value }">
              <VCheckbox
                v-if="column.key === 'select'"
                v-model="selectedRows"
                :value="row.id"
                name="selection"
                square
              />
              <template v-else-if="column.key === 'company'">
                <VControl v-if="editCompanyIndex === index">
                  <VField>
                    <input
                      v-model="row[column.key]"
                      v-focus
                      type="text"
                      class="input is-primary-focus"
                      @blur="editCompanyIndex = undefined"
                      @keydown.space.prevent="editCompanyIndex = undefined"
                    />
                  </VField>
                </VControl>

                <a
                  v-else
                  class="is-overlay-desktop is-flex is-pushed-mobile is-align-items-center mx-3-desktop edit-icon-link is-clickable"
                  tabindex="0"
                  role="button"
                  @keydown.space.prevent="editCompanyIndex = index"
                  @click="editCompanyIndex = index"
                >
                  {{ value }}
                  <i
                    class="iconify is-inline ml-1"
                    data-icon="feather:edit-3"
                    role="img"
                    aria-label="edit"
                  ></i>
                </a>
              </template>

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

              <VAction
                v-else-if="column.key === 'contacts'"
                hoverable
                @click="contactUser(row)"
              >
                Contact manager
              </VAction>
            </template>
          </VFlexTable>
        </div>

        <DocumentationDivider id="with-reactive" title="With reactive props" />

        <div class="mt-4">
          <VFlexTable
            :data="flexRowsContacts"
            :columns="columns"
            compact
            rounded
            reactive
          >
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
            <template #body-cell="{ row, column, value }">
              <VCheckbox
                v-if="column.key === 'select'"
                v-model="selectedRows"
                :value="row.id"
                name="selection"
                square
              />
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
              <VAction
                v-if="column.key === 'contacts'"
                hoverable
                @click="contactUser(row)"
              >
                Contact manager
              </VAction>
            </template>
          </VFlexTable>
        </div>

        <DocumentationDivider id="without-reactive" title="Without reactive props" />

        <div class="mt-4">
          <VFlexTable :data="flexRowsContacts" :columns="columns" compact rounded>
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
            <template #body-cell="{ row, column, value }">
              <VCheckbox
                v-if="column.key === 'select'"
                v-model="selectedRows"
                :value="row.id"
                name="selection"
                square
              />

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
              <VAction
                v-else-if="column.key === 'contacts'"
                hoverable
                @click="contactUser(row)"
              >
                Contact manager
              </VAction>
            </template>
          </VFlexTable>
        </div>

        <DocumentationDivider id="with-clickable" title="With clickable props" />

        <div class="mt-4">
          <VFlexTable
            :data="flexRowsContacts"
            :columns="columns"
            clickable
            compact
            rounded
            @row-click="clickOnRow"
          >
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
            <template #body-cell="{ row, column, value }">
              <VCheckbox
                v-if="column.key === 'select'"
                v-model="selectedRows"
                :value="row.id"
                name="selection"
                square
              />

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
              <VAction
                v-else-if="column.key === 'contacts'"
                @click.stop="contactUser(row)"
              >
                Contact manager
              </VAction>
            </template>
          </VFlexTable>
        </div>
      </div>
    </div>
  </div>
</template>
