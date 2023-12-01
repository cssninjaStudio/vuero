<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'
import {
  VCollapseMeta,
  VCollapseModelMeta,
} from '/@src/data/documentation/components-meta'

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

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('VCollapse')

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
          label: 'VCollapse',
          to: '/components/collapse',
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
        <VCollapse
          :items="data"
          with-chevron
        />
      </div>

      <div class="column is-12">
        <DocumentationMeta
          name="VCollapse"
          :meta="VCollapseMeta"
        />
        <DocumentationMeta
          name="VCollapseModel"
          :meta="VCollapseModelMeta"
        />
      </div>
    </div>
  </div>
</template>
