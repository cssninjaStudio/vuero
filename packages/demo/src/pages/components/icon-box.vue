<script setup lang="ts">
import { VIconBoxMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VIconBox'
})

useHead({
  title: 'VIconBox - Components - Vuero',
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
          label: 'VIconBox',
          to: '/components/icon-box',
        },
      ]"
    />

    <DocumentationTocContainer>
      <!-- Icon Box -->
      <IconBoxDefaultDocumentation />

      <!-- Box Colors -->
      <IconBoxColorsDocumentation />

      <!-- Box Border -->
      <IconBoxSquaredBorderDocumentation />

      <!-- Box Rounded -->
      <IconBoxRoundedDocumentation />

      <!-- Box Colors -->
      <IconBoxRoundedBorderDocumentation />

      <!-- Lucide Icons -->
      <IconBoxFeatherDocumentation />

      <!-- Font Awesome -->
      <IconBoxFaDocumentation />

      <DocumentationMeta
        name="VIconBox"
        :meta="VIconBoxMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
