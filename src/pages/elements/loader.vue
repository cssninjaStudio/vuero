<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref, onMounted } from 'vue'

import { activeSidebar, toggleSidebar } from '/@src/state/activeSidebarState'

const isLoaderActive = ref(false)

const toggleLoaders = () => {
  isLoaderActive.value = !isLoaderActive.value
}

onMounted(() => {
  activeSidebar.value = 'elements'
})

useHead({
  title: 'V-Loader - Elements - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered">
      <!-- Sidebar Trigger -->
      <div
        class="vuero-hamburger nav-trigger push-resize"
        @click="toggleSidebar('elements')"
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
            label: 'Elements',
            to: { name: 'elements' },
          },
          {
            label: 'V-Loader',
            to: { name: 'elements-loader' },
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
                <V-CardAction
                  avatar="/demo/avatars/19.jpg"
                  badge="/images/icons/flags/germany.svg"
                  title="Greta K."
                  subtitle="Sales Manager"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quibusnam praeteritis? At multis se probavit. Quoniam, si
                    dis placet, ab Epicuro loqui discimus. Et ille ridens.
                  </p>
                </V-CardAction>
              </V-Loader>
            </div>
            <div class="column is-4">
              <V-Loader size="small" :active="isLoaderActive">
                <V-CardAction
                  avatar="/demo/avatars/19.jpg"
                  badge="/images/icons/flags/germany.svg"
                  title="Greta K."
                  subtitle="Sales Manager"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quibusnam praeteritis? At multis se probavit. Quoniam, si
                    dis placet, ab Epicuro loqui discimus. Et ille ridens.
                  </p>
                </V-CardAction>
              </V-Loader>
            </div>
            <div class="column is-4">
              <V-Loader size="small" :active="isLoaderActive" translucent>
                <V-CardAction
                  avatar="/demo/avatars/19.jpg"
                  badge="/images/icons/flags/germany.svg"
                  title="Greta K."
                  subtitle="Sales Manager"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quibusnam praeteritis? At multis se probavit. Quoniam, si
                    dis placet, ab Epicuro loqui discimus. Et ille ridens.
                  </p>
                </V-CardAction>
              </V-Loader>
            </div>
            <div class="column is-4">
              <V-Loader card="smooth" :active="isLoaderActive">
                <V-CardAction
                  avatar="/demo/avatars/19.jpg"
                  badge="/images/icons/flags/germany.svg"
                  title="Greta K."
                  subtitle="Sales Manager"
                  radius="smooth"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quibusnam praeteritis? At multis se probavit. Quoniam, si
                    dis placet, ab Epicuro loqui discimus. Et ille ridens.
                  </p>
                </V-CardAction>
              </V-Loader>
            </div>
            <div class="column is-4">
              <V-Loader card="rounded" size="large" :active="isLoaderActive">
                <V-CardAction
                  avatar="/demo/avatars/19.jpg"
                  badge="/images/icons/flags/germany.svg"
                  title="Greta K."
                  subtitle="Sales Manager"
                  radius="rounded"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quibusnam praeteritis? At multis se probavit. Quoniam, si
                    dis placet, ab Epicuro loqui discimus. Et ille ridens.
                  </p>
                </V-CardAction>
              </V-Loader>
            </div>
            <div class="column is-4">
              <V-Loader card="rounded" size="xl" :active="isLoaderActive">
                <V-CardAction
                  avatar="/demo/avatars/19.jpg"
                  badge="/images/icons/flags/germany.svg"
                  title="Greta K."
                  subtitle="Sales Manager"
                  radius="rounded"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quibusnam praeteritis? At multis se probavit. Quoniam, si
                    dis placet, ab Epicuro loqui discimus. Et ille ridens.
                  </p>
                </V-CardAction>
              </V-Loader>
            </div>
          </div>

          <VLoaderPropsDocumentation />
          <VLoaderSlotsDocumentation />
        </div>
      </div>
    </div>
  </div>
</template>
