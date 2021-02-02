<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, reactive, ref } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

import {
  addItem,
  autoupdate,
  randUpdate,
  onSort,
  options,
} from '/@src/data/v-datatable/simple-datatable'

import { optionsAdvanced } from '/@src/data/v-datatable/advanced-datatable'

onMounted(() => {
  activeSidebar.value = 'components'

  setInterval(randUpdate, 1000)
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

          <div class="buttons">
            <V-Button @click="addItem">Add item</V-Button>
            <V-Button @click="randUpdate">Update random item</V-Button>
            <label
              ><input v-model="autoupdate" type="checkbox" /> autoupdate</label
            >
          </div>

          <div class="r-card mb-6">
            <V-SimpleDatatables
              :options="options"
              :autoupdate="autoupdate"
              @sort="onSort"
            />
          </div>

          <!--Advanced Datatable-->
          <DatatableAdvancedDocumentation />

          <div class="r-card mb-6">
            <V-SimpleDatatables :options="optionsAdvanced" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
tr.yes .icon {
  color: red;
}
tr.no .icon {
  color: green;
}

tr.yes b {
  color: green;
}
tr.no b {
  color: red;
}

button {
  background: blue;
  color: white;
  border: 0;
  border-radius: 4px;
  margin: 0 0 0 0.5rem;
}

.currency::before {
  content: '$';
}

.currency--profit {
  color: limegreen;
}
.currency--loss {
  color: red;
}
.currency--zero {
  color: gray;
}
</style>
