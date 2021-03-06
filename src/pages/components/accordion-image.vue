<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'

import { activeSidebar, toggleSidebar } from '/@src/state/activeSidebarState'

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

onMounted(() => {
  activeSidebar.value = 'components'
})

useHead({
  title: 'V-AccordionImage - Components - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered">
      <!-- Sidebar Trigger -->
      <div
        class="huro-hamburger nav-trigger push-resize"
        @click="toggleSidebar('components')"
      >
        <span class="menu-toggle has-chevron">
          <span
            :class="[activeSidebar !== 'none' && 'active']"
            class="icon-box-toggle"
          >
            <span class="rotate">
              <i class="icon-line-top"></i>
              <i class="icon-line-center"></i>
              <i class="icon-line-bottom"></i>
            </span>
          </span>
        </span>
      </div>

      <div class="title-wrap">
        <h1 class="title is-4">V-AccordionImage</h1>
      </div>

      <Toolbar />
    </div>

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
            label: 'Accordions',
          },
          {
            label: 'V-AccordionImage',
            to: { name: 'components-accordion-image' },
          },
        ]"
      />

      <div class="columns is-multiline">
        <div class="column is-12">
          <!--Image Accordion-->
          <AccordionImageDocumentation />
        </div>
        <div class="column is-12">
          <V-AccordionImage :items="data" />
        </div>
      </div>
    </div>
  </div>
</template>
