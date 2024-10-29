<script setup lang="ts">
import { VActionMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VAction'
})

useHead({
  title: 'VAction - Components - Vuero',
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
          label: 'Buttons',
        },
        {
          label: 'VAction',
          to: '/components/action',
        },
      ]"
    />

    <DocumentationTocContainer>
      <!-- VAction -->
      <VActionDocumentation />

      <DocumentationMeta
        name="VAction"
        :meta="VActionMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
