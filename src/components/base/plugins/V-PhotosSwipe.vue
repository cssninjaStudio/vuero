<script lang="ts">
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

let instances = 0
</script>

<script setup lang="ts">
import { ref, defineProps, onMounted } from 'vue'
import PhotoSwipe from 'photoswipe/dist/photoswipe'
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'

const galleryUID = ++instances
const angle = ref(0)
const pswpElement = ref<HTMLElement | null>(null)
const galleryElement = ref<HTMLElement | null>(null)
const props = defineProps({
  items: {
    default: () => [],
    type: Array,
  },
  options: {
    default: () => ({}),
    type: Object,
  },
  singleThumbnail: {
    type: Boolean,
    default: false,
  },
  thumbnailRadius: {
    type: String,
    default: '',
  },
})

const resolveImageSrc = async function (item: any) {
  return new Promise((resolve) => {
    const img = new Image()
    img.onerror = function () {
      img.onerror = null
      resolve(item.msrc)
    }
    img.onload = function () {
      img.onload = null
      resolve(item.src)
    }
    img.style.display = 'none'
    img.src = item.src
  })
}

// parse slide data (url, title, size ...) from DOM elements
// (children of gallerySelector)
const parseThumbnailElements = async function (el: HTMLElement) {
  let thumbElements = el.childNodes,
    numNodes = thumbElements.length,
    items = [],
    figureEl,
    linkEl,
    size,
    item: any

  for (let i = 0; i < numNodes; i++) {
    figureEl = thumbElements[i] as HTMLElement // <figure> element

    // include only element nodes
    if (figureEl.nodeType !== 1) {
      continue
    }

    linkEl = figureEl.children[0] // <a> element

    if (!linkEl) {
      continue
    }

    size = linkEl.getAttribute('data-size')?.split('x')

    if (!size) {
      continue
    }

    // create slide object
    item = {
      src: linkEl.getAttribute('href'),
      w: parseInt(size[0], 10),
      h: parseInt(size[1], 10),
      title: linkEl.getAttribute('title'),
    }

    if (figureEl.children.length > 1) {
      // <figcaption> content
      item.title = figureEl.children[1].innerHTML
    }

    if (linkEl.children.length > 0) {
      // <img> thumbnail element, retrieving thumbnail url
      item.msrc = linkEl.children[0].getAttribute('src')
    }

    item.src = await resolveImageSrc(item)

    item.el = figureEl // save link to element for getThumbBoundsFn
    items.push(item)
  }

  return items
}

// find nearest parent element
const closest = function closest(el: any, fn: Function): HTMLElement {
  return el && (fn(el) ? el : closest(el.parentNode, fn))
}

// triggers when user clicks on thumbnail
const onThumbnailsClick = async function (e: Event) {
  let eTarget = e.target

  // find root element of slide
  let clickedListItem = closest(eTarget, function (el: HTMLElement) {
    return el.tagName && el.tagName.toUpperCase() === 'FIGURE'
  })

  if (!clickedListItem) {
    return
  }

  // find index of clicked item by looping through all child nodes
  // alternatively, you may define index via data- attribute
  let childNodes = (clickedListItem.parentNode as HTMLElement).childNodes,
    numChildNodes = childNodes.length,
    nodeIndex = 0,
    index

  for (let i = 0; i < numChildNodes; i++) {
    if (childNodes[i].nodeType !== 1) {
      continue
    }

    if (childNodes[i] === clickedListItem) {
      index = nodeIndex
      break
    }
    nodeIndex++
  }

  if (galleryElement.value && index !== undefined && index >= 0) {
    // open PhotoSwipe if valid index found
    await openPhotoSwipe(index.toString(), galleryElement.value)
  }
  return false
}

// parse picture index and gallery index from URL (#&pid=1&gid=2)
const photoswipeParseHash = function () {
  let hash = window.location.hash.substring(1),
    params: Record<string, any> = {}

  if (hash.length < 5) {
    return params
  }

  let vars = hash.split('&')
  for (let i = 0; i < vars.length; i++) {
    if (!vars[i]) {
      continue
    }
    let pair = vars[i].split('=')
    if (pair.length < 2) {
      continue
    }
    params[pair[0]] = pair[1]
  }

  if (params.gid) {
    params.gid = parseInt(params.gid, 10)
  }

  return params
}

const openPhotoSwipe = async function (
  index: string,
  galleryElement: HTMLElement,
  disableAnimation = false,
  fromURL = false
) {
  if (!galleryElement) {
    return
  }

  let gallery: any, options: any, items: any

  items = await parseThumbnailElements(galleryElement)

  // define options (if needed)
  options = {
    // define gallery index (for URL)
    galleryUID,

    getThumbBoundsFn: function (index: number) {
      // See Options -> getThumbBoundsFn section of documentation for more info
      let thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
        pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
        rect = thumbnail.getBoundingClientRect()

      return { x: rect.left, y: rect.top + pageYScroll, w: rect.width }
    },
  }

  // PhotoSwipe opened from URL
  if (fromURL) {
    if (props.options.galleryPIDs) {
      // parse real index when custom PIDs are used
      // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
      for (let j = 0; j < items.length; j++) {
        if (items[j].pid == index) {
          options.index = j
          break
        }
      }
    } else {
      // in URL indexes start from 1
      options.index = parseInt(index, 10) - 1
    }
  } else {
    options.index = parseInt(index, 10)
  }

  // exit if index not found
  if (isNaN(options.index)) {
    return
  }

  if (disableAnimation) {
    options.showAnimationDuration = 0
  }

  // Pass data to PhotoSwipe and initialize it
  gallery = new PhotoSwipe(
    pswpElement.value,
    PhotoSwipeUI_Default,
    items,
    Object.assign(options, props.options)
  )
  gallery.listen('gettingData', function (index: any, item: any) {
    if (item.w < 1 || item.h < 1) {
      // unknown size
      let img = new Image()
      img.onload = function () {
        // will get size after load
        item.w = img.width // set image width
        item.h = img.height // set image height
        gallery.invalidateCurrItems() // reinit Items
        gallery.updateSize(true) // reinit Items
      }
      img.style.display = 'none'
      img.src = item.src // let's download image
    }
  })
  gallery.init()
}

// Parse URL and open gallery if it contains #&pid=3&gid=1
onMounted(() => {
  if (galleryElement.value) {
    let hashData = photoswipeParseHash()
    if (hashData.pid && hashData.gid === galleryUID) {
      openPhotoSwipe(hashData.pid.toString(), galleryElement.value, true, true)
    }
  }
})

const rotate = (newAngle: number) => {
  if (pswpElement.value) {
    angle.value = angle.value + newAngle
    pswpElement.value
      .querySelectorAll('.pswp__img')
      .forEach(
        (i) =>
          ((i as HTMLElement).style.transform = `rotate(${angle.value}deg)`)
      )
  }
}

const resetAngle = () => {
  if (pswpElement.value) {
    angle.value = 0
    pswpElement.value
      .querySelectorAll('.pswp__img')
      .forEach(
        (i) =>
          ((i as HTMLElement).style.transform = `rotate(${angle.value}deg)`)
      )
  }
}
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
        itemprop="contentUrl"
        :data-size="'' + item.w + 'x' + item.h"
        :title="item.title"
        @click.prevent="onThumbnailsClick"
      >
        <img
          :class="[thumbnailRadius && `radius-${thumbnailRadius}`]"
          :src="item.thumbnail"
          :alt="item.alt"
          itemprop="thumbnail"
          @error.once="
            $event.target.src = `https://via.placeholder.com/${item.w}x${item.h}`
          "
        />
      </a>
    </figure>
  </div>

  <div
    ref="pswpElement"
    class="pswp"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="pswp__bg"></div>
    <div class="pswp__scroll-wrap">
      <div class="pswp__container">
        <div class="pswp__item"></div>
        <div class="pswp__item"></div>
        <div class="pswp__item"></div>
      </div>
      <div class="pswp__ui pswp__ui--hidden">
        <div class="pswp__top-bar">
          <div class="pswp__counter"></div>
          <button
            class="pswp__button pswp__button--close"
            title="Close (Esc)"
          ></button>

          <button
            v-if="options.rotationOn"
            class="pswp__button pswp__button--rotate pswp__button--rotate--left"
            title="Rotate left"
            @click="rotate(-90)"
          ></button>
          <button
            v-if="options.rotationOn"
            class="
              pswp__button pswp__button--rotate pswp__button--rotate--right
            "
            title="Rotate right"
            @click="rotate(90)"
          ></button>

          <button
            class="pswp__button pswp__button--share"
            title="Share"
          ></button>
          <button
            class="pswp__button pswp__button--fs"
            title="Toggle fullscreen"
          ></button>
          <button
            class="pswp__button pswp__button--zoom"
            title="Zoom in/out"
          ></button>
          <div class="pswp__preloader">
            <div class="pswp__preloader__icn">
              <div class="pswp__preloader__cut">
                <div class="pswp__preloader__donut"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"
        >
          <div class="pswp__share-tooltip"></div>
        </div>
        <button
          class="pswp__button pswp__button--arrow--left"
          title="Previous (arrow left)"
          @click="resetAngle"
        ></button>
        <button
          class="pswp__button pswp__button--arrow--right"
          title="Next (arrow right)"
          @click="resetAngle"
        ></button>
        <div class="pswp__caption">
          <div class="pswp__caption__center"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery-thumbnail {
  display: inline;
  margin: 5px;
}
</style>
