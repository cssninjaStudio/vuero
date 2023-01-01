---
items:
  - src: http://via.placeholder.com/600x400
    thumbnail: http://via.placeholder.com/60x40
    w: 600
    h: 400
    alt: 'optional alt attribute for thumbnail image'
  - src: http://via.placeholder.com/1200x900
    thumbnail: http://via.placeholder.com/120x90
    w: 1200
    h: 900
  - src: http://via.placeholder.com/800x600
    thumbnail: http://via.placeholder.com/80x60
    w: 800
    h: 600
---

### Rounded Thumbnails

We wrote a custom Vue wrapper for the `Photo Swipe` library so it makes it easy
for you to create image galleries seamlessly. Thumbnails border radius is
configurable. Pass a value of `full` to the `thumbnailRadius` to show curved
borders.

<!--code-->

```vue
<script setup lang="ts">
const items = [
  {
    src: 'http://via.placeholder.com/600x400',
    thumbnail: 'http://via.placeholder.com/60x40',
    w: 600,
    h: 400,
    alt: 'optional alt attribute for thumbnail image',
  },
  {
    src: 'http://via.placeholder.com/1200x900',
    thumbnail: 'http://via.placeholder.com/120x90',
    w: 1200,
    h: 900,
  },
  {
    src: 'http://via.placeholder.com/800x600',
    thumbnail: 'http://via.placeholder.com/80x60',
    w: 800,
    h: 600,
  },
]
</script>

<template>
  <VPhotosSwipe :items="items" thumbnail-radius="full" />
</template>
```

<!--/code-->

<!--example-->

<VPhotosSwipe :items="frontmatter.items" thumbnail-radius="full" />

<!--/example-->
