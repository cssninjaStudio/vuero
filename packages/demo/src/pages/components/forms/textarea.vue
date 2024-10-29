<script setup lang="ts">
import { VTextareaMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VTextarea'
})

useHead({
  title: 'VTextarea - Forms Elements - Vuero',
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
          label: 'VTextarea',
          to: '/components/forms/textarea',
        },
      ]"
    />

    <DocumentationTocContainer>
      <!-- Textarea -->
      <TextareaBaseDocumentation />

      <!-- Textarea Focus -->
      <TextareaFocusDocumentation />

      <!-- Textarea loading -->
      <TextareaLoadingDocumentation />

      <!-- Textarea disabled -->
      <TextareaDisabledDocumentation />

      <!-- Textarea Addon -->
      <TextareaAddonDocumentation />

      <DocumentationMeta
        name="VTextarea"
        :meta="VTextareaMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
