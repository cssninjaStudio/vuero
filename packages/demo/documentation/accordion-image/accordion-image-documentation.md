### Image accordion

A nice experimental and playful CSS only image
accordion component: `<VAccordionImage />`.
Images simply stack on mobile.
Pass an **Array** to the `items` props to render the accordion.
Check markup for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
const data = [
  {
    image: 'https://source.unsplash.com/FV3GConVSss/1600x900',
    title: 'Office Part I',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: 'https://source.unsplash.com/rRiAzFkJPMo/1600x900',
    title: 'Office Part II',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: 'https://source.unsplash.com/tvleqH3p1os/1600x900',
    title: '12 Great Landscapes',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: 'https://source.unsplash.com/-Xv7k95vOFA/1600x900',
    title: 'Team Meetup',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: 'https://source.unsplash.com/F6NvgzU3RfM/1600x900',
    title: 'Purple Shades',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: 'https://source.unsplash.com/5E5N49RWtbA/1600x900',
    title: 'Blue Note',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
]
</script>

<template>
  <div class="column is-12">
    <VAccordionImage :items="accordionImagesData" />
  </div>
</template>
```

<!--/code-->
