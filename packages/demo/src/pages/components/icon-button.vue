<script setup lang="ts">
import { VIconButtonMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VIconButton'
})

useHead({
  title: 'VIconButton - Components - Vuero',
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
          label: 'VIconButton',
          to: '/components/icon-button',
        },
      ]"
    />

    <DocumentationTocContainer>
      <VIconButtonDefaultDocumentation />

      <DocumentationMeta
        name="VIconButton"
        :meta="VIconButtonMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
