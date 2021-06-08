<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { ref } from 'vue'
import useMarkdownToc from '/@src/composable/useMarkdownToc'
import { pageTitle } from '/@src/state/sidebarLayoutState'

const markdownContainer = ref<HTMLElement | null>(null)
const toc = useMarkdownToc(markdownContainer)

pageTitle.value = 'V-PhotosSwipe'
useHead({
  title: 'V-PhotosSwipe - Plugins - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <V-Breadcrumb
      with-icons
      separator="bullet"
      :items="[
        {
          label: 'Vuero',
          hideLabel: true,
          icon: 'feather:home',
          to: { name: 'index' },
        },
        {
          label: 'Components',
          to: { name: 'components' },
        },
        {
          label: 'Plugins',
        },
        {
          label: 'V-PhotosSwipe',
          to: { name: 'components-plugins-photos-swipe' },
        },
      ]"
    />

    <div class="columns is-multiline">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column"
      >
        <!--Thumbnails-->
        <GalleryImagesDocumentation />

        <!--Curved Thumbnails-->
        <GalleryImagesCurvedDocumentation />

        <!--Rounded Thumbnails-->
        <GalleryImagesRoundedDocumentation />

        <!--Bigger Thumbnails-->
        <GalleryImagesLargerDocumentation />
      </div>
      <div v-if="toc.length" class="column is-3 toc-column">
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
