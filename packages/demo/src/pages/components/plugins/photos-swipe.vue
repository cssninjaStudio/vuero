<script setup lang="ts">
import { VPhotosSwipeMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VPhotosSwipe'
})

useHead({
  title: 'VPhotosSwipe - Plugins - Vuero',
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
          label: 'Plugins',
        },
        {
          label: 'VPhotosSwipe',
          to: '/components/plugins/photos-swipe',
        },
      ]"
    />

    <DocumentationTocContainer class="is-multiline">
      <!-- Thumbnails -->
      <GalleryImagesDocumentation />

      <!-- Curved Thumbnails -->
      <GalleryImagesCurvedDocumentation />

      <!-- Rounded Thumbnails -->
      <GalleryImagesRoundedDocumentation />

      <!-- Bigger Thumbnails -->
      <GalleryImagesLargerDocumentation />

      <DocumentationMeta
        name="VPhotosSwipe"
        :meta="VPhotosSwipeMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
