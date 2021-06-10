<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onBeforeUnmount, onMounted, ref } from 'vue'

import useMarkdownToc from '/@src/composable/useMarkdownToc'

import { optionsBase } from '/@src/data/documentation/v-datatable/simple-datatable'
import { optionsReactive } from '/@src/data/documentation/v-datatable/reactive-datatable'
import { optionsAdvanced } from '/@src/data/documentation/v-datatable/advanced-datatable'
import { optionsUsers } from '/@src/data/documentation/v-datatable/users-datatable'
import { pageTitle } from '/@src/state/sidebarLayoutState'

let interval: NodeJS.Timeout
const markdownContainer = ref<HTMLElement | null>(null)
const toc = useMarkdownToc(markdownContainer)

const randomUpdate = () => {
  const max = optionsReactive.data.data.length
  const index = Math.floor(Math.random() * max)
  const percent = parseInt(
    `${optionsReactive.data.data[index][4]}`.replace('%', '')
  )

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

pageTitle.value = 'V-SimpleDatatables'
useHead({
  title: 'V-SimpleDatatables - Plugins - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <V-Breadcrumb
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
          label: 'Plugins',
        },
        {
          label: 'V-SimpleDatatables',
          to: { name: 'components-plugins-simple-datatables' },
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
          <V-SimpleDatatables :options="optionsBase" />
        </div>

        <!--Reactive Datatable-->
        <DatatableReactiveDocumentation />

        <div class="mb-6">
          <V-SimpleDatatables :options="optionsReactive" autoupdate />
        </div>

        <!--Slot Datatable-->
        <DatatableSlotDocumentation />

        <div class="mb-6">
          <V-SimpleDatatables>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Ext.</th>
                <th scope="col">City</th>
                <th scope="col" data-type="date" data-format="YYYY/MM/DD">
                  Start Date
                </th>
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
                  <V-Tag
                    :color="row[4] === '100%' ? 'primary' : 'light'"
                    :label="row[4]"
                  />
                </td>
              </tr>
            </tbody>
          </V-SimpleDatatables>
        </div>

        <!--Advanced Datatable-->
        <DatatableAdvancedDocumentation />

        <div class="mb-6">
          <V-SimpleDatatables :options="optionsAdvanced" />
        </div>

        <!--Users Datatable-->
        <DatatableUsersDocumentation />

        <div class="mb-6">
          <V-SimpleDatatables :options="optionsUsers" />
        </div>
      </div>
      <div v-if="toc.length" class="column is-3 toc-column">
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
