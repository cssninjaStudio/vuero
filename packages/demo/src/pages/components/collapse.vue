<script setup lang="ts">
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

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VCollapse'
})

useHead({
  title: 'VCollapse - Components - Vuero',
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
