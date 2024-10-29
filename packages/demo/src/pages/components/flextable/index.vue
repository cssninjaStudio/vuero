<script setup lang="ts">
import { VFlexTableMeta } from '/@src/data/documentation/components-meta'

import { flexRowsBasic, flexRowsContacts } from '/@src/data/documentation/table'

function rowClick(row: any) {
  console.log(row)
}

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VFlexTable'
})

useHead({
  title: 'VFlexTable - Components - Vuero',
})
</script>

<template>
  <div>
    <VBreadcrumb
      with-icons
      separator="bullet"
      :items="[
        {
          label: 'Vuero',
          hideLabel: true,
          icon: 'lucide:home',
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
      ]"
    />

    <DocumentationTocContainer>
      <VFlexTableBaseDocumentation />

      <div class="mt-4 mb-4">
        <VFlexTable :data="flexRowsBasic" />
      </div>

      <DocumentationDivider
        id="no-header"
        title="Without header"
      />

      <div class="mt-4">
        <VFlexTable
          :data="flexRowsBasic"
          no-header
        />
      </div>

      <DocumentationDivider
        id="separators"
        title="With separators"
      />

      <div class="mt-4">
        <VFlexTable
          :data="flexRowsBasic"
          separators
        />
      </div>

      <DocumentationDivider
        id="rounded"
        title="Rounded"
      />

      <div class="mt-4">
        <VFlexTable
          :data="flexRowsBasic"
          rounded
        />
      </div>

      <DocumentationDivider
        id="compact"
        title="Compact"
      />

      <div class="mt-4 mb-4">
        <VFlexTable
          :data="flexRowsBasic"
          compact
        />
      </div>

      <DocumentationDivider
        id="all-options"
        title="All options together"
      />

      <div class="mt-4">
        <VFlexTable
          :data="flexRowsBasic"
          no-header
          compact
          rounded
          separators
          clickable
          @row-click="rowClick"
        />
      </div>

      <DocumentationDivider
        id="subtable"
        title="SubTable"
      />

      <div class="mt-4">
        <VFlexTable
          :data="flexRowsBasic"
          subtable
        />
      </div>

      <VFlexTablePrintObjectsDocumentation class="mt-6" />

      <div class="mt-4">
        <VFlexTable
          rounded
          :data="flexRowsContacts"
          print-objects
        />
      </div>

      <DocumentationDivider
        id="without-print-object"
        title="Without print-objects"
      />

      <div class="mt-4">
        <VFlexTable
          rounded
          :data="flexRowsContacts"
        />
      </div>

      <DocumentationMeta
        name="VFlexTable"
        :meta="VFlexTableMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
