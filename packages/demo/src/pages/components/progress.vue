<script setup lang="ts">
import { VProgressMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VProgress'
})

useHead({
  title: 'VProgress - Components - Vuero',
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
          label: 'VProgess',
          to: '/components/progress',
        },
      ]"
    />

    <DocumentationTocContainer>
      <!-- VProgress -->
      <VProgressBaseDocumentation />

      <!-- VProgress colors -->
      <VProgressColorsDocumentation />

      <!-- VProgress undeterminate -->
      <VProgressUndeterminateDocumentation />

      <DocumentationMeta
        name="VProgress"
        :meta="VProgressMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
