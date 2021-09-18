<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'

import { activeSidebar, toggleSidebar } from '/@src/state/activeSidebarState'

onMounted(() => {
  activeSidebar.value = 'components'
})

useHead({
  title: 'V-Accordion - Components - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered">
      <!-- Sidebar Trigger -->
      <div
        class="vuero-hamburger nav-trigger push-resize"
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
        <h1 class="title is-4">VAccordion</h1>
      </div>

      <Toolbar />
    </div>
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
            label: 'Accordions',
          },
          {
            label: 'V-Accordion',
            to: { name: 'components-accordion' },
          },
        ]"
      />

      <div class="columns is-multiline">
        <div class="column is-12">
          <!--Accordion-->
          <AccordionDefaultDocumentation />
        </div>

        <div class="column is-6 is-full-tablet">
          <VAccordion
            :items="[
              {
                title: 'Accordion Item 1',
                content: 'Sed ut perspiciatis unde omnis iste ...',
              },
              {
                title: 'Accordion Item 2',
                content: 'Sed ut perspiciatis unde omnis iste ...',
              },
              {
                title: 'Accordion Item 3',
                content: 'Sed ut perspiciatis unde omnis iste ...',
              },
            ]"
          />
        </div>

        <div class="column is-6 is-full-tablet">
          <VAccordion
            :items="[
              {
                title: 'Accordion Item 1',
                content: 'Sed ut perspiciatis unde omnis iste ...',
              },
              {
                title: 'Accordion Item 2',
                content: 'Sed ut perspiciatis unde omnis iste ...',
              },
              {
                title: 'Accordion Item 3',
                content: 'Sed ut perspiciatis unde omnis iste ...',
              },
            ]"
            exclusive
          />
        </div>

        <div class="column is-12 mt-5">
          <!--Props-->
          <AccordionDefaultPropsDocumentation />
        </div>
      </div>
    </div>
  </div>
</template>
