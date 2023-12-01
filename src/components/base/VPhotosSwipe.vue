<script setup lang="ts">
import PhotoSwipeLightbox, { type PhotoSwipeOptions } from 'photoswipe/lightbox'
import { onceImageErrored } from '/@src/utils/via-placeholder'
import 'photoswipe/style.css'

export interface VPhotoSwipeItem {
  src: string
  msrc?: string
  thumbnail?: string
  alt?: string
  w?: number
  h?: number
  title?: string
  el?: HTMLElement
}
export interface VPhotoSwipeProps {
  items?: VPhotoSwipeItem[]
  options?: PhotoSwipeOptions
  singleThumbnail?: boolean
  thumbnailRadius?: string
}

const props = withDefaults(defineProps<VPhotoSwipeProps>(), {
  items: () => [],
  options: () => ({}),
  thumbnailRadius: undefined,
})

let lightbox: PhotoSwipeLightbox | null = null
const galleryElement = ref<HTMLElement>()

onMounted(() => {
  lightbox = new PhotoSwipeLightbox({
    gallery: galleryElement.value,
    pswpModule: () => import('photoswipe'),
    ...props.options,
    children: 'a',
  })
  lightbox.init()
})

onUnmounted(() => {
  if (lightbox) {
    lightbox.destroy()
    lightbox = null
  }
})
</script>

<template>
  <div
    ref="galleryElement"
    class="my-gallery"
    itemscope
    itemtype="http://schema.org/ImageGallery"
  >
    <figure
      v-for="(item, index) in items"
      v-show="index === 0 || !singleThumbnail"
      :key="index"
      class="gallery-thumbnail"
      itemprop="associatedMedia"
      itemscope
      itemtype="http://schema.org/ImageObject"
      :src="item.src"
    >
      <a
        :href="item.src"
        :title="item.title"
        itemprop="contentUrl"
        :data-pswp-width="item.w"
        :data-pswp-height="item.h"
        data-cropped="true"
        target="_blank"
        rel="noreferrer"
      >
        <img
          :class="[thumbnailRadius && `radius-${thumbnailRadius}`]"
          :src="item.thumbnail"
          :alt="item.alt"
          itemprop="thumbnail"
          @error.once="onceImageErrored(item.w, item.h)"
        >
      </a>
    </figure>
  </div>
</template>

<style lang="scss" scoped>
.gallery-thumbnail {
  display: inline;
  margin: 5px;
}
</style>
