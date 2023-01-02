<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useMarkdownToc } from '/@src/composable/useMarkdownToc'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Table')

useHead({
  title: 'Table - Components - Vuero',
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
          label: 'Table',
          to: '/components/table',
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <!--Table-->
        <TableBaseDocumentation />

        <VCard radius="smooth" class="demo-table mb-6">
          <table
            class="table is-hoverable is-fullwidth"
            aria-label="Vuero basic table example"
          >
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Position</th>
                <th scope="col" class="is-end">
                  <div class="dark-inverted is-flex is-justify-content-flex-end">
                    Actions
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tina</td>
                <td>Bergmann</td>
                <td>Head of Sales</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableDropdown />
                  </div>
                </td>
              </tr>
              <tr>
                <td>John</td>
                <td>Wistmus</td>
                <td>Senior Executive</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableDropdown />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Sam</td>
                <td>Watson</td>
                <td>Software Engineer</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableDropdown />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Jolaine</td>
                <td>Joestar</td>
                <td>HR Manager</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableDropdown />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Anders</td>
                <td>Jensen</td>
                <td>Accountant</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableDropdown />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </VCard>

        <!--Table striped-->
        <TableStripedDocumentation />

        <VCard radius="smooth" class="demo-table">
          <table
            class="table is-striped is-fullwidth"
            aria-label="Vuero striped table example"
          >
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Position</th>
                <th scope="col" class="is-end">
                  <div class="dark-inverted is-flex is-justify-content-flex-end">
                    Actions
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tina</td>
                <td>Bergmann</td>
                <td>Head of Sales</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableDropdown />
                  </div>
                </td>
              </tr>
              <tr>
                <td>John</td>
                <td>Wistmus</td>
                <td>Senior Executive</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableDropdown />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Sam</td>
                <td>Watson</td>
                <td>Software Engineer</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableDropdown />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Jolaine</td>
                <td>Joestar</td>
                <td>HR Manager</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableDropdown />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Anders</td>
                <td>Jensen</td>
                <td>Accountant</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableDropdown />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </VCard>

        <!--Table media-->
        <TableMediaDocumentation />

        <VCard radius="smooth" class="demo-table">
          <table
            class="table is-hoverable is-fullwidth"
            aria-label="Vuero media table example"
          >
            <thead>
              <tr>
                <th scope="col" class="is-media"></th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Position</th>
                <th scope="col" class="is-end">
                  <div class="dark-inverted is-flex is-justify-content-flex-end">
                    Actions
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="is-media">
                  <VAvatar picture="/demo/avatars/8.gif" />
                </td>
                <td>Tina</td>
                <td>Bergmann</td>
                <td>Head of Sales</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableDropdown />
                  </div>
                </td>
              </tr>
              <tr>
                <td class="is-media">
                  <VAvatar picture="/demo/avatars/1.gif" />
                </td>
                <td>John</td>
                <td>Wistmus</td>
                <td>Senior Executive</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableDropdown />
                  </div>
                </td>
              </tr>
              <tr>
                <td class="is-media">
                  <VAvatar picture="/demo/avatars/4.gif" />
                </td>
                <td>Sam</td>
                <td>Watson</td>
                <td>Software Engineer</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableDropdown />
                  </div>
                </td>
              </tr>
              <tr>
                <td class="is-media">
                  <VAvatar initials="JD" color="info" />
                </td>
                <td>Jolaine</td>
                <td>Joestar</td>
                <td>HR Manager</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableDropdown />
                  </div>
                </td>
              </tr>
              <tr>
                <td class="is-media">
                  <VAvatar picture="/demo/avatars/3.gif" />
                </td>
                <td>Anders</td>
                <td>Jensen</td>
                <td>Accountant</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableDropdown />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </VCard>
      </div>
      <div v-if="toc.length" class="column is-3 toc-column">
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
