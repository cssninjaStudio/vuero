<script setup lang="ts">
import { VMessageMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VMessage'
})

useHead({
  title: 'VMessage - Components - Vuero',
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
          label: 'VMessage',
          to: '/components/message',
        },
      ]"
    />

    <DocumentationTocContainer>
      <!-- Message -->
      <VMessageBaseDocumentation />

      <!-- Message Colors -->
      <VMessageColorsDocumentation />

      <DocumentationMeta
        name="VMessage"
        :meta="VMessageMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
