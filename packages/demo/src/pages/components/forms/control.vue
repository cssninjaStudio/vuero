<script setup lang="ts">
import { VControlMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VControl'
})

const breadcrumb = [
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
    label: 'VControl',
    to: '/components/forms/control',
  },
]

useHead({
  title: 'VControl - Components - Vuero',
})
</script>

<template>
  <div>
    <VBreadcrumb
      with-icons
      separator="bullet"
      :items="breadcrumb"
    />

    <DocumentationTocContainer>
      <VControlValidationDocumentation />
      <VControlValidationRoundedDocumentation />
      <VControlValidationVeeZodDocumentation>
        <template #example>
          <DocumentationDemoFormValidation />
        </template>
      </VControlValidationVeeZodDocumentation>

      <DocumentationMeta
        name="VControl"
        :meta="VControlMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
