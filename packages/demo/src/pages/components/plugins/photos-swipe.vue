<script setup lang="ts">
import { VPhotosSwipeMeta } from '/@src/data/documentation/components-meta'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

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

    <div class="columns is-multiline">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <!--Thumbnails-->
        <GalleryImagesDocumentation />

        <!--Curved Thumbnails-->
        <GalleryImagesCurvedDocumentation />

        <!--Rounded Thumbnails-->
        <GalleryImagesRoundedDocumentation />

        <!--Bigger Thumbnails-->
        <GalleryImagesLargerDocumentation />

        <DocumentationMeta
          name="VPhotosSwipe"
          :meta="VPhotosSwipeMeta"
        />
      </div>
      <div
        v-if="toc.length"
        class="column is-3 toc-column"
      >
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
