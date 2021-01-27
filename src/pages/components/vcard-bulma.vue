<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

onMounted(() => {
  activeSidebar.value = 'components'
})

useHead({
  title: 'Components - V-Card - Vuero',
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
        <h1 class="title is-4">V-Card</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner">
      <nav class="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
        <ul>
          <li>
            <RouterLink :to="{ name: 'index' }">
              <span class="icon is-small is-solo">
                <i class="iconify" data-icon="feather:home"></i>
              </span>
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'elements' }">
              <span>Components</span>
            </RouterLink>
          </li>
          <li>
            <a>
              <span>V-Card</span>
            </a>
          </li>
          <li>
            <a>
              <span>Bulma</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="columns is-multiline">
        <div class="column is-12">
          <!--V-Card Bulma-->
          <VCardBulmaDocumentation />
        </div>

        <div class="column is-4">
          <V-CardBulma
            image="/images/photo/demo/apps/1.jpg"
            avatar="/images/avatars/photos/19.jpg"
            badge="/images/icons/flags/germany.svg"
            title="Greta K."
            subtitle="Sales Manager"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ego vero isti, inquam, permitto. Id Sextilius factum
                      negabat. Apparet statim, quae sint officia, quae actiones.
                      Sed hoc sane concedamus..."
          >
            <a class="action-link">Read More</a>
          </V-CardBulma>
        </div>

        <div class="column is-4">
          <V-CardBulma
            image="/images/photo/demo/apps/2.png"
            avatar="/images/avatars/photos/23.jpg"
            badge="/images/icons/flags/united-states-of-america.svg"
            title="Irina V."
            subtitle="Project Manager"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ego vero isti, inquam, permitto. Id Sextilius factum
                      negabat. Apparet statim, quae sint officia, quae actiones.
                      Sed hoc sane concedamus..."
          >
            <a class="action-link">Read More</a>
          </V-CardBulma>
        </div>

        <div class="column is-4">
          <V-CardBulma
            image="/images/photo/demo/apps/3.png"
            avatar="/images/avatars/photos/12.jpg"
            badge="/images/icons/flags/united-states-of-america.svg"
            title="Joshua S."
            subtitle="Backend Developer"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ego vero isti, inquam, permitto. Id Sextilius factum
                      negabat. Apparet statim, quae sint officia, quae actiones.
                      Sed hoc sane concedamus..."
          >
            <a class="action-link">Read More</a>
          </V-CardBulma>
        </div>
      </div>
    </div>
  </div>
</template>
