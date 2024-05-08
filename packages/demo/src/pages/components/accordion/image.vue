<script setup lang="ts">
import { VAccordionImageMeta } from '/@src/data/documentation/components-meta'

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

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VAccordionImage'
})

useHead({
  title: 'VAccordionImage - Components - Vuero',
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
          label: 'Accordions',
        },
        {
          label: 'VAccordionImage',
          to: '/components/accordion/image',
        },
      ]"
    />

    <div class="columns is-multiline">
      <div class="column is-12">
        <!--Image Accordion-->
        <AccordionImageDocumentation />
      </div>
      <div class="column is-12">
        <VAccordionImage :items="data" />
      </div>
      <div class="column is-12">
        <DocumentationMeta
          name="VAccordionImage"
          :meta="VAccordionImageMeta"
        />
      </div>
    </div>
  </div>
</template>
