<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useMarkdownToc } from '/@src/composable/useMarkdownToc'

import { optionsBase } from '/@src/data/documentation/v-datatable/simple-datatable'
import { optionsReactive } from '/@src/data/documentation/v-datatable/reactive-datatable'
import { optionsAdvanced } from '/@src/data/documentation/v-datatable/advanced-datatable'
import { optionsUsers } from '/@src/data/documentation/v-datatable/users-datatable'
import { useViewWrapper } from '/@src/stores/viewWrapper'

let interval: any
const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const randomUpdate = () => {
  const max = optionsReactive.data.data.length
  const index = Math.floor(Math.random() * max)
  const percent = parseInt(`${optionsReactive.data.data[index][4]}`.replace('%', ''))

  if (percent < 100) {
    optionsReactive.data.data[index][1] = Math.floor(Math.random() * 5000)
    optionsReactive.data.data[index][4] = `${percent + 1}%`
  }
}

onMounted(() => {
  interval = setInterval(randomUpdate, 400)
})

onBeforeUnmount(() => {
  if (interval) {
    clearInterval(interval)
  }
})

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('VSimpleDatatables')

useHead({
  title: 'VSimpleDatatables - Plugins - Vuero',
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
          to: { name: '/' },
        },
        {
          label: 'Components',
          to: { name: '/components/' },
        },
        {
          label: 'Plugins',
        },
        {
          label: 'VSimpleDatatables',
          to: { name: '/components/plugins/simple-datatables' },
        },
      ]"
    />

    <div class="columns is-multiline">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column"
      >
        <!--Simple Datatable-->
        <DatatableBaseDocumentation />

        <div class="mb-6">
          <VSimpleDatatables :options="optionsBase" />
        </div>

        <!--Reactive Datatable-->
        <DatatableReactiveDocumentation />

        <div class="mb-6">
          <VSimpleDatatables :options="optionsReactive" autoupdate />
        </div>

        <!--Slot Datatable-->
        <DatatableSlotDocumentation />

        <div class="mb-6">
          <VSimpleDatatables>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Ext.</th>
                <th scope="col">City</th>
                <th scope="col" data-type="date" data-format="YYYY/MM/DD">Start Date</th>
                <th scope="col" data-sort="asc">Completion</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in optionsBase.data.data" :key="index">
                <td>
                  {{ row[0] }}
                </td>
                <td>
                  <strong>{{ row[1] }}</strong>
                </td>
                <td>{{ row[2] }}</td>
                <td>{{ row[3] }}</td>
                <td>
                  <VTag
                    :color="row[4] === '100%' ? 'primary' : 'light'"
                    :label="row[4]"
                  />
                </td>
              </tr>
            </tbody>
          </VSimpleDatatables>
        </div>

        <!--Advanced Datatable-->
        <DatatableAdvancedDocumentation />

        <div class="mb-6">
          <VSimpleDatatables :options="optionsAdvanced" />
        </div>

        <!--Users Datatable-->
        <DatatableUsersDocumentation />

        <div class="mb-6">
          <VSimpleDatatables :options="optionsUsers" />
        </div>
      </div>
      <div v-if="toc.length" class="column is-3 toc-column">
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
