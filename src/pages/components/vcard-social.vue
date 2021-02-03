<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/activeSidebarState'

import { userStack2 } from '/@src/data/users/userStacks'

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
              <span>Social</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="columns is-multiline">
        <div class="column is-12">
          <!--V-Card Social-->
          <VCardSocialDocumentation />
        </div>

        <div class="column is-4">
          <V-CardSocial
            title="Featured Tweet"
            network="twitter"
            avatar="/images/avatars/photos/19.jpg"
            username="Greta K."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
            :hashtags="['#bulmaio', '#css', '#responsive']"
            icon="fab fa-twitter"
          />
        </div>

        <div class="column is-4">
          <V-CardSocial
            title="Featured Story"
            network="instagram"
            avatar="/images/avatars/photos/5.jpg"
            username="Mary L."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
            :hashtags="['#bulmaio', '#css', '#responsive']"
            icon="fab fa-instagram"
          />
        </div>

        <div class="column is-4">
          <V-CardSocial
            title="Featured Post"
            network="facebook"
            avatar="/images/avatars/photos/36.jpg"
            username="Benoit L."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
            :hashtags="['#bulmaio', '#css', '#responsive']"
            icon="fab fa-facebook-f"
          />
        </div>
      </div>
    </div>
  </div>
</template>
