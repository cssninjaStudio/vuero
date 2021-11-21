<script setup lang="ts">
import { h, ref, reactive, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'

import { flexRowsBasic, flexRowsContacts } from '/@src/data/documentation/table'
import useMarkdownToc from '/@src/composable/useMarkdownToc'
import { pageTitle } from '/@src/state/sidebarLayoutState'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const rowClick = (row: any) => {
  console.log(row)
}

pageTitle.value = 'VFlexTable'
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
          to: { name: 'index' },
        },
        {
          label: 'Components',
          to: { name: 'components' },
        },
        {
          label: 'VFlexTable',
          to: { name: 'components-flex-table' },
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column"
      >
        <VFlexTableBaseDocumentation />

        <div class="mt-4 mb-4">
          <VFlexTable :data="flexRowsBasic" />
        </div>

        <a id="no-header" name="no-header" class="is-invisible is-block zero-height">
          Without header
        </a>
        <div
          class="is-divider"
          data-content="Without header"
          style="--white: var(--background-grey)"
        ></div>

        <div class="mt-4">
          <VFlexTable :data="flexRowsBasic" no-header />
        </div>

        <a id="rounded" name="rounded" class="is-invisible is-block zero-height">
          Rounded
        </a>
        <div
          class="is-divider"
          data-content="Rounded"
          style="--white: var(--background-grey)"
        ></div>

        <div class="mt-4">
          <VFlexTable :data="flexRowsBasic" rounded />
        </div>

        <a id="compact" name="compact" class="is-invisible is-block zero-height">
          Compact
        </a>
        <div
          class="is-divider"
          data-content="Compact"
          style="--white: var(--background-grey)"
        ></div>

        <div class="mt-4 mb-4">
          <VFlexTable :data="flexRowsBasic" compact />
        </div>

        <a
          id="compact-rounded"
          name="compact-rounded"
          class="is-invisible is-block zero-height"
        >
          Compact & Rounded
        </a>
        <div
          class="is-divider"
          data-content="Compact & Rounded"
          style="--white: var(--background-grey)"
        ></div>

        <div class="mt-4">
          <VFlexTable :data="flexRowsBasic" compact rounded />
        </div>

        <a id="subtable" name="subtable" class="is-invisible is-block zero-height">
          SubTable
        </a>
        <div
          class="is-divider"
          data-content="SubTable"
          style="--white: var(--background-grey)"
        ></div>

        <div class="mt-4">
          <VFlexTable :data="flexRowsBasic" subtable />
        </div>

        <VFlexTablePrintObjectsDocumentation class="mt-6" />

        <div class="mt-4">
          <VFlexTable rounded :data="flexRowsContacts" print-objects />
        </div>

        <a
          id="without-print-object"
          name="without-print-object"
          class="is-invisible is-block zero-height"
        >
          Without print-objects
        </a>
        <div
          class="is-divider"
          data-content="Without print-objects"
          style="--white: var(--background-grey)"
        ></div>

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
