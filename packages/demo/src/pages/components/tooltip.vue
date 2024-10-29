<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VTooltip'
})

useHead({
  title: 'VTooltip - Components - Vuero',
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
          label: 'VTooltip',
          to: '/components/tooltip',
        },
      ]"
    />

    <DocumentationTocContainer>
      <!-- @TODO -->
      <!-- Default Tooltip -->
      <TooltipBaseDocumentation />

      <!-- Tooltip Colors -->
      <TooltipColorsDocumentation />

      <!-- Tooltip Shapes -->
      <TooltipShapesDocumentation />
    </DocumentationTocContainer>
  </div>
</template>
