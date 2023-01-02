<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { flexRowsBasic, flexRowsContacts } from '/@src/data/documentation/table'
import { useMarkdownToc } from '/@src/composable/useMarkdownToc'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const rowClick = (row: any) => {
  console.log(row)
}

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('VFlexTable')

useHead({
  title: 'VFlexTable - Components - Vuero',
})
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
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <VFlexTableBaseDocumentation />

        <div class="mt-4 mb-4">
          <VFlexTable :data="flexRowsBasic" />
        </div>

        <DocumentationDivider id="no-header" title="Without header" />

        <div class="mt-4">
          <VFlexTable :data="flexRowsBasic" no-header />
        </div>

        <DocumentationDivider id="separators" title="With separators" />

        <div class="mt-4">
          <VFlexTable :data="flexRowsBasic" separators />
        </div>

        <DocumentationDivider id="rounded" title="Rounded" />

        <div class="mt-4">
          <VFlexTable :data="flexRowsBasic" rounded />
        </div>

        <DocumentationDivider id="compact" title="Compact" />

        <div class="mt-4 mb-4">
          <VFlexTable :data="flexRowsBasic" compact />
        </div>

        <DocumentationDivider id="all-options" title="All options together" />

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

        <DocumentationDivider id="subtable" title="SubTable" />

        <div class="mt-4">
          <VFlexTable :data="flexRowsBasic" subtable />
        </div>

        <VFlexTablePrintObjectsDocumentation class="mt-6" />

        <div class="mt-4">
          <VFlexTable rounded :data="flexRowsContacts" print-objects />
        </div>

        <DocumentationDivider id="without-print-object" title="Without print-objects" />

        <div class="mt-4">
          <VFlexTable rounded :data="flexRowsContacts" />
        </div>

        <VFlexTablePropsDocumentation class="mt-6" />

        <VFlexTableEventsDocumentation class="mt-6" />

        <VFlexTableSlotsDocumentation class="mt-6" />
      </div>
      <div v-if="toc.length" class="column is-3 toc-column">
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
