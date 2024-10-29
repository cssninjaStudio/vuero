<script setup lang="ts">
import { VPlaceloadMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VPlaceload'
})

useHead({
  title: 'VPlaceload - Components - Vuero',
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
          label: 'VPlaceload',
          to: '/components/placeload/',
        },
      ]"
    />

    <DocumentationTocContainer>
      <!-- Loader -->
      <PlaceloadBaseDocumentation />

      <PlaceloadWrapDocumentation />

      <PlaceloadSizeDocumentation />

      <DocumentationMeta
        name="VPlaceload"
        :meta="VPlaceloadMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
