<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { flexRowsContacts, flexRowsAdvanced } from '/@src/data/documentation/table'
import { useMarkdownToc } from '/@src/composable/useMarkdownToc'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Customize columns')
useHead({
  title: 'Customize columns - VFlexTable - Components - Vuero',
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
        {
          label: 'Customize columns',
          to: '/components/flextable/columns',
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
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

        <DocumentationDivider id="grow" title="Grow" />

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

        <DocumentationDivider id="grow-lg" title="Grow (large)" />

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

        <DocumentationDivider id="grow-xl" title="Grow (xl)" />

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

              <VPlaceload v-else-if="column.key === 'status'" mobile-width="30%" />

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
