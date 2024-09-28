<script setup lang="ts">
import { VCheckboxMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VCheckbox'
})

useHead({
  title: 'VCheckbox - Forms Elements - Vuero',
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
          label: 'Switches',
        },
        {
          label: 'VCheckbox',
          to: '/components/checkbox',
        },
      ]"
    />

    <DocumentationTocContainer>
      <!-- VCheckbox -->
      <CheckboxOutlinedDocumentation />

      <CheckboxOutlinedCircleDocumentation />

      <CheckboxSolidDocumentation />

      <CheckboxSolidCircleDocumentation />

      <DocumentationMeta
        name="VCheckbox"
        :meta="VCheckboxMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
