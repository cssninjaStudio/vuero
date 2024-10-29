<script setup lang="ts">
import { VBlockMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VBlock'
})

useHead({
  title: 'VBlock - Components - Vuero',
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
          label: 'VBlock',
          to: '/components/block',
        },
      ]"
    />

    <DocumentationTocContainer>
      <!-- VBlock base -->
      <VBlockBaseDocumentation />

      <!-- VBlock icon -->
      <VBlockIconDocumentation />

      <!-- VBlock center -->
      <VBlockCenterDocumentation />

      <!-- VBlock icon center -->
      <VBlockIconCenterDocumentation />

      <!-- VBlock base responsive -->
      <VBlockBaseResponsiveDocumentation />

      <!-- VBlock center responsive -->
      <VBlockCenterResponsiveDocumentation />

      <DocumentationMeta
        name="VBlock"
        :meta="VBlockMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
