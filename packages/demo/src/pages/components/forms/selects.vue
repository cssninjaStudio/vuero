<script setup lang="ts">
import { VSelectMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VSelect'
})

useHead({
  title: 'VSelect - Forms Elements - Vuero',
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
          label: 'VSelect',
          to: '/components/forms/selects',
        },
      ]"
    />

    <DocumentationTocContainer>
      <!-- Select -->
      <SelectBaseDocumentation />

      <!-- Rounded Select -->
      <SelectRoundedDocumentation />

      <!-- Font Awesome -->
      <SelectFaDocumentation />

      <!-- Line Icons -->
      <SelectLineDocumentation />

      <!-- Lucide Icons -->
      <SelectFeatherDocumentation />

      <!-- Loading -->
      <SelectLoadingDocumentation />

      <!-- Multiple -->
      <SelectMultipleDocumentation />

      <DocumentationMeta
        name="VSelect"
        :meta="VSelectMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
