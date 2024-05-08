<script setup lang="ts">
import { VAccordionMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VAccordion'
})

useHead({
  title: 'VAccordion - Components - Vuero',
})
</script>

<template>
  <div>
    <VBreadcrumb
      with-icons
      separator="bullet"
      :items="[
        {
          label: 'Vuero',
          hideLabel: true,
          icon: 'lucide:home',
          to: '/',
        },
        {
          label: 'Components',
          to: '/components/',
        },
        {
          label: 'Accordions',
        },
        {
          label: 'V-Accordion',
          to: '/components/accordion/',
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
        <DocumentationMeta
          name="VAccordion"
          :meta="VAccordionMeta"
        />
      </div>
    </div>
  </div>
</template>
