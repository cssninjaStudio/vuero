<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/activeSidebarState'

import {
  accordionSimpleData,
  accordionExclusiveData,
} from '/@src/data/documentation/accordion'

onMounted(() => {
  activeSidebar.value = 'components'
})

useHead({
  title: 'Components - Accordion Basic - Vuero',
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
        <h1 class="title is-4">Accordion</h1>
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
              <span>Accordions</span>
            </a>
          </li>
          <li>
            <a>
              <span>Accordion</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="columns is-multiline">
        <div class="column is-12">
          <!--Accordion-->
          <AccordionDefaultDocumentation />
        </div>

        <div class="column is-6">
          <V-AccordionSimple :items="accordionSimpleData" />
        </div>

        <div class="column is-6">
          <V-AccordionExclusive :items="accordionExclusiveData" />
        </div>
      </div>
    </div>
  </div>
</template>
