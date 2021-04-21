<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'

import { activeSidebar, toggleSidebar } from '/@src/state/activeSidebarState'

onMounted(() => {
  activeSidebar.value = 'components'
})

useHead({
  title: 'V-CardMedia - Components - Vuero',
})

const breadcrumb = [
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
    label: 'Cards',
  },
  {
    label: 'V-CardMedia',
    to: { name: 'components-card-media' },
  },
]
</script>

<template>
  <div>
    <div class="page-title has-text-centered">
      <!-- Sidebar Trigger -->
      <div
        class="vuero-hamburger nav-trigger push-resize"
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
        <h1 class="title is-4">V-CardMedia</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner">
      <V-Breadcrumb with-icons separator="bullet" :items="breadcrumb" />

      <div class="columns is-multiline">
        <div class="column is-12">
          <!--V-CardMedia-->
          <VCardMediaDocumentation />
        </div>

        <div class="column is-4">
          <V-CardMedia
            image="/demo/photos/apps/1.jpg"
            avatar="/demo/avatars/19.jpg"
            badge="/images/icons/flags/germany.svg"
            title="Greta K."
            subtitle="Sales Manager"
          >
            <p class="pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ego vero
              isti, inquam, permitto. Id Sextilius factum negabat. Apparet
              statim, quae sint officia, quae actiones. Sed hoc sane
              concedamus...
            </p>

            <a class="action-link">Read More</a>
          </V-CardMedia>
        </div>

        <div class="column is-4">
          <V-CardMedia
            image="/demo/photos/apps/2.png"
            avatar="/demo/avatars/23.jpg"
            badge="/images/icons/flags/united-states-of-america.svg"
            title="Irina V."
            subtitle="Project Manager"
          >
            <p class="pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ego vero
              isti, inquam, permitto. Id Sextilius factum negabat. Apparet
              statim, quae sint officia, quae actiones. Sed hoc sane
              concedamus...
            </p>

            <a class="action-link">Read More</a>
          </V-CardMedia>
        </div>

        <div class="column is-4">
          <V-CardMedia
            image="/demo/photos/apps/3.png"
            avatar="/demo/avatars/12.jpg"
            badge="/images/icons/flags/united-states-of-america.svg"
            title="Joshua S."
            subtitle="Backend Developer"
          >
            <p class="pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ego vero
              isti, inquam, permitto. Id Sextilius factum negabat. Apparet
              statim, quae sint officia, quae actiones. Sed hoc sane
              concedamus...
            </p>

            <a class="action-link">Read More</a>
          </V-CardMedia>
        </div>

        <div class="column is-12 mt-5">
          <!--Props-->
          <VCardMediaPropsDocumentation />

          <!--Slots-->
          <VCardMediaSlotsDocumentation />
        </div>
      </div>
    </div>
  </div>
</template>
