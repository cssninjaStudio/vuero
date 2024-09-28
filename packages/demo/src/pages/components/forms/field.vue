<script setup lang="ts">
import { VFieldMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VField'
})

useHead({
  title: 'VField - Components - Vuero',
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
          label: 'Forms',
        },
        {
          label: 'VField',
          to: '/components/forms/field',
        },
      ]"
    />

    <DocumentationTocContainer>
      <VFieldBaseDocumentation />
      <VFieldLabelInlineDocumentation />
      <VFieldIdTrackingDocumentation />
      <VFieldAddonEndDocumentation />
      <VFieldAddonStartDocumentation />
      <VFieldAddonRoundedDocumentation />
      <VFieldAddonDirectionalDocumentation />

      <DocumentationMeta
        name="VField"
        :meta="VFieldMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
