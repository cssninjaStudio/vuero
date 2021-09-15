<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'VAccordion'
useHead({
  title: 'VAccordion - Components - Vuero',
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
          label: 'VAccordion',
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
</template>
