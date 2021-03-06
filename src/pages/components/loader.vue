<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref, onMounted } from 'vue'

import { activeSidebar, toggleSidebar } from '/@src/state/activeSidebarState'

const isLoaderActive = ref(false)

const toggleLoaders = () => {
  isLoaderActive.value = !isLoaderActive.value
}

onMounted(() => {
  activeSidebar.value = 'components'
})

useHead({
  title: 'V-Loader - Components - Vuero',
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
        <h1 class="title is-4">V-Loader</h1>
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
            label: 'V-Loader',
            to: { name: 'components-loader' },
          },
        ]"
      />

      <div class="columns">
        <div class="column is-12">
          <!--Loader-->
          <VLoaderDocumentation />

          <div class="mb-4">
            <V-Button color="primary" elevated @click="toggleLoaders">
              <span v-if="!isLoaderActive">Show Loaders</span>
              <span v-else>Hide Loaders</span>
            </V-Button>
          </div>

          <div class="columns is-multiline">
            <div class="column is-4">
              <V-Loader size="small" :active="isLoaderActive" grey>
                <V-MediaCard
                  class="demo-s-card"
                  avatar="/images/avatars/photos/19.jpg"
                  badge="/images/icons/flags/germany.svg"
                  title="Greta K."
                  subtitle="Sales Manager"
                  content="I can be used as is in any layout. L Cards are simple containers that can hold any type of content, from simple plain text to more structured markup."
                />
              </V-Loader>
            </div>
            <div class="column is-4">
              <V-Loader size="small" :active="isLoaderActive">
                <V-MediaCard
                  class="demo-s-card"
                  avatar="/images/avatars/photos/19.jpg"
                  badge="/images/icons/flags/germany.svg"
                  title="Greta K."
                  subtitle="Sales Manager"
                  content="I can be used as is in any layout. L Cards are simple containers that can hold any type of content, from simple plain text to more structured markup."
                />
              </V-Loader>
            </div>
            <div class="column is-4">
              <V-Loader size="small" :active="isLoaderActive" translucent>
                <V-MediaCard
                  class="demo-s-card"
                  avatar="/images/avatars/photos/19.jpg"
                  badge="/images/icons/flags/germany.svg"
                  title="Greta K."
                  subtitle="Sales Manager"
                  content="I can be used as is in any layout. L Cards are simple containers that can hold any type of content, from simple plain text to more structured markup."
                />
              </V-Loader>
            </div>
            <div class="column is-4">
              <V-Loader card="smooth" :active="isLoaderActive">
                <V-MediaCard
                  class="demo-s-card"
                  avatar="/images/avatars/photos/19.jpg"
                  badge="/images/icons/flags/germany.svg"
                  title="Greta K."
                  subtitle="Sales Manager"
                  content="I can be used as is in any layout. L Cards are simple containers that can hold any type of content, from simple plain text to more structured markup."
                  radius="smooth"
                />
              </V-Loader>
            </div>
            <div class="column is-4">
              <V-Loader card="rounded" size="large" :active="isLoaderActive">
                <V-MediaCard
                  class="demo-s-card"
                  avatar="/images/avatars/photos/19.jpg"
                  badge="/images/icons/flags/germany.svg"
                  title="Greta K."
                  subtitle="Sales Manager"
                  content="I can be used as is in any layout. L Cards are simple containers that can hold any type of content, from simple plain text to more structured markup."
                  radius="rounded"
                />
              </V-Loader>
            </div>
            <div class="column is-4">
              <V-Loader card="rounded" size="xl" :active="isLoaderActive">
                <V-MediaCard
                  class="demo-s-card"
                  avatar="/images/avatars/photos/19.jpg"
                  badge="/images/icons/flags/germany.svg"
                  title="Greta K."
                  subtitle="Sales Manager"
                  content="I can be used as is in any layout. L Cards are simple containers that can hold any type of content, from simple plain text to more structured markup."
                  radius="rounded"
                />
              </V-Loader>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
