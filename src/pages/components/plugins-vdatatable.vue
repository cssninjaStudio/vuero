<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onBeforeUnmount, onMounted } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

import { optionsBase } from '/@src/data/v-datatable/simple-datatable'
import {
  randomUpdate,
  optionsReactive,
} from '/@src/data/v-datatable/reactive-datatable'

import { optionsAdvanced } from '/@src/data/v-datatable/advanced-datatable'
import { optionsUsers } from '/@src/data/v-datatable/users-datatable'

let interval: NodeJS.Timeout

onMounted(() => {
  activeSidebar.value = 'components'

  interval = setInterval(randomUpdate, 400)
})

onBeforeUnmount(() => {
  if (interval) {
    clearInterval(interval)
  }
})

useHead({
  title: 'Components - Plugins V-Datatable - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered">
      <!-- Sidebar Trigger -->
      <div
        class="huro-hamburger nav-trigger push-resize"
        @click="toggleSidebar('components')"
      >
        <span class="menu-toggle has-chevron">
          <span
            :class="[activeSidebar !== 'none' && 'active']"
            class="icon-box-toggle"
          >
            <span class="rotate">
              <i class="icon-line-top"></i>
              <i class="icon-line-center"></i>
              <i class="icon-line-bottom"></i>
            </span>
          </span>
        </span>
      </div>

      <div class="title-wrap">
        <h1 class="title is-4">V-Datatable</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner">
      <nav class="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
        <ul>
          <li>
            <RouterLink :to="{ name: 'index' }">
              <span class="icon is-small is-solo">
                <i class="iconify" data-icon="feather:home"></i>
              </span>
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'elements' }">
              <span>Components</span>
            </RouterLink>
          </li>
          <li>
            <a>
              <span>Plugins</span>
            </a>
          </li>
          <li>
            <a>
              <span>V-Datatable</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="columns is-multiline">
        <div class="column is-12">
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
                  <th>Name</th>
                  <th>Ext.</th>
                  <th>City</th>
                  <th data-type="date" data-format="YYYY/MM/DD">Start Date</th>
                  <th>Completion</th>
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
      </div>
    </div>
  </div>
</template>
