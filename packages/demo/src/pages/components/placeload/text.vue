<script setup lang="ts">
import { VPlaceloadTextMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VPlaceloadText'
})

useHead({
  title: 'VPlaceloadText - Components - Vuero',
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
          label: 'VPlaceloadText',
          to: '/components/placeload/text',
        },
      ]"
    />

    <DocumentationTocContainer>
      <PlaceloadTextBaseDocumentation />
      <PlaceloadTextSizeDocumentation />

      <DocumentationMeta
        name="VPlaceloadText"
        :meta="VPlaceloadTextMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
