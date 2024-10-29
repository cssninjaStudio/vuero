<script setup lang="ts">
import { VGridItemMeta, VGridMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VGrid'
})

useHead({
  title: 'VGrid - Components - Vuero',
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
          label: 'VGrid',
          to: '/components/flex',
        },
      ]"
    />

    <DocumentationTocContainer>
      <!-- VGrid -->
      <VGridBaseDocumentation />

      <DocumentationMeta
        name="VGrid"
        :meta="VGridMeta"
      />

      <DocumentationMeta
        name="VGridItem"
        :meta="VGridItemMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
