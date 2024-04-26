---
items:
  - src: http://via.placeholder.com/600x400
    thumbnail: http://via.placeholder.com/200x150
    w: 600
    h: 400
    alt: 'optional alt attribute for thumbnail image'
  - src: http://via.placeholder.com/1200x900
    thumbnail: http://via.placeholder.com/200x150
    w: 1200
    h: 900
  - src: http://via.placeholder.com/800x600
    thumbnail: http://via.placeholder.com/200x150
    w: 800
    h: 600
---

### Large Thumbnails

Thumbnails can be the size you want based on the thumbnail image real size.

<!--code-->

```vue
<template>
  <VPhotosSwipe :items="items" thumbnail-radius="5" />
</template>
```

<!--/code-->

<!--example-->

<VPhotosSwipe :items="frontmatter.items" thumbnail-radius="5" />

<!--/example-->
