<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

const data = [
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
]

pageTitle.value = 'VCollapse'
useHead({
  title: 'VCollapse - Components - Vuero',
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
          label: 'Accordions',
        },
        {
          label: 'VCollapse',
          to: { name: 'components-collapse' },
        },
      ]"
    />

    <div class="columns is-multiline">
      <div class="column is-12">
        <!--Collapse-->
        <AccordionCollapseDocumentation />
      </div>

      <div class="column is-6">
        <VCollapse :items="data" />
      </div>

      <div class="column is-6">
        <VCollapse :items="data" with-chevron />
      </div>

      <div class="column is-12">
        <!--Props-->
        <AccordionCollapsePropsDocumentation />
      </div>
    </div>
  </div>
</template>
