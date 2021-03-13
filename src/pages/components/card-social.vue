<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'

import { activeSidebar, toggleSidebar } from '/@src/state/activeSidebarState'

import { userStack2 } from '/@src/data/users/userStacks'

onMounted(() => {
  activeSidebar.value = 'components'
})

useHead({
  title: 'V-CardSocial - Components - Vuero',
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
        <h1 class="title is-4">V-CardSocial</h1>
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
            label: 'Cards',
          },
          {
            label: 'V-CardSocial',
            to: { name: 'components-card-social' },
          },
        ]"
      />

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
            :hashtags="['#bulmaio', '#css', '#responsive']"
            icon="fab fa-twitter"
          >
            <span class="dark-inverted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
            </span>
          </V-CardSocial>
        </div>

        <div class="column is-4">
          <V-CardSocial
            title="Featured Story"
            network="instagram"
            avatar="/images/avatars/photos/5.jpg"
            username="Mary L."
            :hashtags="['#bulmaio', '#css', '#responsive']"
            icon="fab fa-instagram"
          >
            <span class="dark-inverted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
            </span>
          </V-CardSocial>
        </div>

        <div class="column is-4">
          <V-CardSocial
            title="Featured Post"
            network="facebook"
            avatar="/images/avatars/photos/36.jpg"
            username="Benoit L."
            :hashtags="['#bulmaio', '#css', '#responsive']"
            icon="fab fa-facebook-f"
          >
            <span class="dark-inverted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
            </span>
          </V-CardSocial>
        </div>
      </div>
    </div>
  </div>
</template>
