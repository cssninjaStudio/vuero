<script setup lang="ts">
import { VInputMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VInput'
})

useHead({
  title: 'VInput - Forms Elements - Vuero',
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
          label: 'VInput',
          to: '/components/forms/inputs',
        },
      ]"
    />

    <DocumentationTocContainer>
      <!-- Input -->
      <InputBasicDocumentation />

      <!-- Help Text -->
      <InputHelpDocumentation />

      <!-- Rounded Input -->
      <InputRoundedDocumentation />

      <!-- Focus Colors -->
      <InputFocusDocumentation />

      <!-- Font Awesome -->
      <InputFaDocumentation />

      <!-- Line Icons -->
      <InputLineDocumentation />

      <!-- Lucide Icons -->
      <InputFeatherDocumentation />

      <!-- Loading State -->
      <InputLoadingDocumentation />

      <!-- Disabled Input -->
      <InputDisabledDocumentation />

      <InputDatasetDocumentation />

      <DocumentationMeta
        name="VInput"
        :meta="VInputMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
