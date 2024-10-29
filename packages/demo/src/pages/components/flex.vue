<script setup lang="ts">
import { VFlexItemMeta, VFlexMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VFlex'
})

useHead({
  title: 'VFlex - Components - Vuero',
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
          label: 'VFlex',
          to: '/components/flex',
        },
      ]"
    />

    <DocumentationTocContainer>
      <!-- VFlex -->
      <VFlexBaseDocumentation />

      <DocumentationMeta
        name="VFlex"
        :meta="VFlexMeta"
      />

      <DocumentationMeta
        name="VFlexItem"
        :meta="VFlexItemMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
