<script setup lang="ts">
import { h, ref, reactive, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'

import { flexRowsContacts, flexRowsAdvanced } from '/@src/data/documentation/table'
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
        {
          label: 'Customize columns',
          to: { name: 'components-flex-table-columns' },
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column"
      >
        <VFlexTableColumnsDocumentation />

        <div class="mt-4">
          <VFlexTable
            rounded
            :data="flexRowsContacts"
            :columns="{
              id: {
                label: 'Identifier (inverted)',
                inverted: true,
                format: (value) => `ID-0000${value}`,
              },
              company: {
                label: 'Company (bold)',
                bold: true,
              },
              type: 'Type',
              status: {
                label: 'Status (center)',
                align: 'center',
              },
              contacts: {
                label: 'Contacts (end)',
                align: 'end',
                format: (value) => value.map((r: any) => r.initials).join(', '),
              },
            }"
          />
        </div>

        <a id="grow" name="grow" class="is-invisible is-block zero-height"> Grow </a>
        <div
          class="is-divider"
          data-content="Grow"
          style="--white: var(--background-grey)"
        ></div>

        <div class="mt-4">
          <VFlexTable
            rounded
            :data="flexRowsContacts"
            :columns="{
              id: {
                label: 'Identifier',
                inverted: true,
                format: (value) => `ID-0000${value}`,
              },
              company: {
                label: 'Company',
                bold: true,
              },
              type: 'Type',
              status: {
                label: 'Status',
                align: 'center',
              },
              contacts: {
                label: 'Contacts (grow)',
                align: 'end',
                grow: true,
                format: (value) => value.map((r: any) => r.initials).join(', '),
              },
            }"
          />
        </div>

        <a id="grow-lg" name="grow-lg" class="is-invisible is-block zero-height">
          Grow (large)
        </a>
        <div
          class="is-divider"
          data-content="Grow (large)"
          style="--white: var(--background-grey)"
        ></div>

        <div class="mt-4">
          <VFlexTable
            rounded
            :data="flexRowsContacts"
            :columns="{
              id: {
                label: 'Identifier',
                inverted: true,
                format: (value) => `ID-0000${value}`,
              },
              company: {
                label: 'Company',
                bold: true,
              },
              type: 'Type',
              status: {
                label: 'Status',
                align: 'center',
              },
              contacts: {
                label: 'Contacts (grow: lg)',
                align: 'end',
                grow: 'lg',
                format: (value) => value.map((r: any) => r.initials).join(', '),
              },
            }"
          />
        </div>

        <a id="grow-xl" name="grow-xl" class="is-invisible is-block zero-height">
          Grow (xl)
        </a>
        <div
          class="is-divider"
          data-content="Grow (xl)"
          style="--white: var(--background-grey)"
        ></div>

        <div class="mt-4">
          <VFlexTable
            rounded
            :data="flexRowsContacts"
            :columns="{
              id: {
                label: 'Identifier',
                inverted: true,
                format: (value) => `ID-0000${value}`,
              },
              company: {
                label: 'Company',
                bold: true,
              },
              type: 'Type',
              status: {
                label: 'Status',
                align: 'center',
              },
              contacts: {
                label: 'Contacts (grow: xl)',
                align: 'end',
                grow: 'xl',
                format: (value) => value.map((r: any) => r.initials).join(', '),
              },
            }"
          />
        </div>

        <VFlexTableScrollableDocumentation class="mt-6" />

        <div class="mt-4">
          <VFlexTable
            rounded
            print-objects
            :data="flexRowsContacts"
            :columns="{
              id: {
                label: 'Identifier',
                inverted: true,
                format: (value) => `ID-0000${value}`,
              },
              company: {
                label: 'Company',
                bold: true,
                grow: true,
              },
              contacts: {
                label: 'Contacts (scrollX & scrollY)',
                grow: true,
                scrollX: true,
                scrollY: true,
                cellClass: 'max-h-280',
              },
            }"
          />
        </div>

        <VFlexTableMediaDocumentation class="mt-6" />

        <div class="mt-4">
          <VFlexTable
            rounded
            :data="flexRowsAdvanced"
            :columns="{
              username: {
                label: 'User (media)',
                grow: true,
                media: true,
              },
              position: 'Position',
              status: {
                label: 'Status',
              },
              contacts: {
                label: 'Contacts',
                align: 'end',
                format: (value) => value.map((r: any) => r.initials).join(', '),
              },
            }"
          >
            <template #body-cell="{ row, column, value }">
              <template v-if="column.key === 'username'">
                <VAvatar size="medium" :picture="row.picture" :badge="row.badge" />
                <div>
                  <span class="item-name">{{ row.name }}</span>
                  <span class="item-meta">
                    <strong>{{ value }}</strong>
                  </span>
                </div>
              </template>

              <VPlaceload v-else-if="column.key === 'status'" />

              <VAvatarStack
                v-else-if="column.key === 'contacts'"
                class="is-pushed-mobile"
                size="small"
                :avatars="row.contacts"
                :title="value"
                :limit="3"
              />
            </template>
          </VFlexTable>
        </div>
      </div>
      <div v-if="toc.length" class="column is-3 toc-column">
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
