<script setup lang="ts">
import { VTagMeta, VTagsMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VTag'
})

useHead({
  title: 'VTag - Components - Vuero',
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
          label: 'VTag',
          to: '/components/tag',
        },
      ]"
    />

    <DocumentationTocContainer>
      <!-- VTag base -->
      <VTagBaseDocumentation />

      <!-- VTag rounded -->
      <VTagRoundedDocumentation />

      <!-- VTag curved -->
      <VTagCurvedDocumentation />

      <!-- VTag Outlined -->
      <VTagOutlinedDocumentation />

      <!-- VTag Elevated -->
      <VTagElevatedDocumentation />

      <!-- VTag addons -->
      <VTagAddonsDocumentation />

      <!-- VTag list -->
      <VTagListDocumentation />

      <DocumentationMeta
        name="VTag"
        :meta="VTagMeta"
      />
      <DocumentationMeta
        name="VTags"
        :meta="VTagsMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
