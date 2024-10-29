<script setup lang="ts">
import { VIconWrapMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VIconWrap'
})

useHead({
  title: 'VIconWrap - Components - Vuero',
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
          label: 'VIconWrap',
          to: '/components/icon-wrap',
        },
      ]"
    />

    <DocumentationTocContainer>
      <!-- IconBox -->
      <IconWrapDefaultDocumentation />

      <IconWrapColorsDocumentation />
      <IconWrapSizesDocumentation />
      <IconWrapDarkDocumentation />
      <IconWrapTooltipsDocumentation />

      <DocumentationMeta
        name="VIconWrap"
        :meta="VIconWrapMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
