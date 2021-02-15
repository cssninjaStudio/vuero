<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/activeSidebarState'

onMounted(() => {
  activeSidebar.value = 'components'
})

useHead({
  title: 'Components - Vuero',
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
        <h1 class="title is-4">Components</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner card-hub">
      <div class="columns">
        <div class="column is-12">
          <div class="hub-wrapper">
            <div class="hub-header has-text-centered">
              <div class="v-avatar is-xl">
                <img
                  class="avatar"
                  src="/images/avatars/svg/huro-2.svg"
                  alt=""
                  @error.once="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
                <img
                  class="badge"
                  src="/images/photo/demo/misc/buoy.jpg"
                  alt=""
                  @error.once="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <h3 class="title is-4 is-narrow is-thin">Vuero Components</h3>
              <p class="light-text">
                This is the Vuero components library with detailed code
                examples.
              </p>
            </div>

            <div class="hub-body">
              <div class="body-inner">
                <!--Component-->
                <HubCard
                  title="Avatars"
                  content="Get familiar with the Vuero avatar styles. Code examples included."
                >
                  <RouterLink :to="{ name: 'components-avatars' }">
                    Get Started
                  </RouterLink>

                  <template #icon>
                    <img
                      class="light-image"
                      src="/@src/assets/illustrations/components/avatar.svg"
                      alt=""
                    />
                    <img
                      class="dark-image"
                      src="/@src/assets/illustrations/components/avatar-dark.svg"
                      alt=""
                    />
                  </template>
                </HubCard>

                <!--Component-->
                <HubCard
                  title="Accordions"
                  content="Get familiar with the Vuero accordion styles. Code examples included."
                >
                  <RouterLink :to="{ name: 'components-accordion' }">
                    Get Started
                  </RouterLink>

                  <template #icon>
                    <img
                      class="light-image"
                      src="/@src/assets/illustrations/components/accordion.svg"
                      alt=""
                    />
                    <img
                      class="dark-image"
                      src="/@src/assets/illustrations/components/accordion-dark.svg"
                      alt=""
                    />
                  </template>
                </HubCard>

                <!--Component-->
                <HubCard
                  title="Breadcrumbs"
                  content="Get familiar with the Vuero breadcrumb styles. Code examples included."
                >
                  <RouterLink :to="{ name: 'components-breadcrumb' }">
                    Get Started
                  </RouterLink>

                  <template #icon>
                    <img
                      class="light-image"
                      src="/@src/assets/illustrations/components/breadcrumb.svg"
                      alt=""
                    />
                    <img
                      class="dark-image"
                      src="/@src/assets/illustrations/components/breadcrumb-dark.svg"
                      alt=""
                    />
                  </template>
                </HubCard>

                <!--Component-->
                <HubCard
                  title="Dropdowns"
                  content="Get familiar with the Vuero dropdown styles. Code examples included."
                >
                  <RouterLink :to="{ name: 'components-dropdown' }">
                    Get Started
                  </RouterLink>

                  <template #icon>
                    <img
                      class="light-image"
                      src="/@src/assets/illustrations/components/dropdown.svg"
                      alt=""
                    />
                    <img
                      class="dark-image"
                      src="/@src/assets/illustrations/components/dropdown-dark.svg"
                      alt=""
                    />
                  </template>
                </HubCard>

                <!--Component-->
                <HubCard
                  title="Icon Box"
                  content="Get familiar with the Vuero icon boxes styles. Code examples included."
                >
                  <RouterLink :to="{ name: 'components-icon-box' }">
                    Get Started
                  </RouterLink>

                  <template #icon>
                    <img
                      class="light-image"
                      src="/@src/assets/illustrations/components/icon-box.svg"
                      alt=""
                    />
                    <img
                      class="dark-image"
                      src="/@src/assets/illustrations/components/icon-box-dark.svg"
                      alt=""
                    />
                  </template>
                </HubCard>

                <!--Component-->
                <HubCard
                  title="Messages"
                  content="Get familiar with the Vuero messages styles. Code examples included."
                >
                  <RouterLink :to="{ name: 'components-messages' }">
                    Get Started
                  </RouterLink>

                  <template #icon>
                    <img
                      class="light-image"
                      src="/@src/assets/illustrations/components/message.svg"
                      alt=""
                    />
                    <img
                      class="dark-image"
                      src="/@src/assets/illustrations/components/message-dark.svg"
                      alt=""
                    />
                  </template>
                </HubCard>

                <!--Component-->
                <HubCard
                  title="Modals"
                  content="Get familiar with the Vuero modal styles. Code examples included."
                >
                  <RouterLink :to="{ name: 'components-modal' }">
                    Get Started
                  </RouterLink>

                  <template #icon>
                    <img
                      class="light-image"
                      src="/@src/assets/illustrations/components/modal.svg"
                      alt=""
                    />
                    <img
                      class="dark-image"
                      src="/@src/assets/illustrations/components/modal-dark.svg"
                      alt=""
                    />
                  </template>
                </HubCard>

                <!--Component-->
                <HubCard
                  title="Progress"
                  content="Get familiar with the Vuero progress bar styles. Code examples included."
                >
                  <RouterLink :to="{ name: 'components-progress' }">
                    Get Started
                  </RouterLink>

                  <template #icon>
                    <img
                      class="light-image"
                      src="/@src/assets/illustrations/components/progress.svg"
                      alt=""
                    />
                    <img
                      class="dark-image"
                      src="/@src/assets/illustrations/components/progress-dark.svg"
                      alt=""
                    />
                  </template>
                </HubCard>

                <!--Component-->
                <HubCard
                  title="Tabs"
                  content="Get familiar with the Vuero nav tabs styles. Code examples included."
                >
                  <RouterLink :to="{ name: 'elements-tabs-regular' }">
                    Get Started
                  </RouterLink>

                  <template #icon>
                    <img
                      class="light-image"
                      src="/@src/assets/illustrations/components/tabs.svg"
                      alt=""
                    />
                    <img
                      class="dark-image"
                      src="/@src/assets/illustrations/components/tabs-dark.svg"
                      alt=""
                    />
                  </template>
                </HubCard>

                <!--Component-->
                <HubCard
                  title="Flex Table"
                  content="Get familiar with the Vuero flex table styles. Code examples included."
                >
                  <RouterLink :to="{ name: 'components-flex-table' }">
                    Get Started
                  </RouterLink>

                  <template #icon>
                    <img
                      class="light-image"
                      src="/@src/assets/illustrations/components/table.svg"
                      alt=""
                    />
                    <img
                      class="dark-image"
                      src="/@src/assets/illustrations/components/table-dark.svg"
                      alt=""
                    />
                  </template>
                </HubCard>

                <!--Component-->
                <HubCard
                  title="Snacks"
                  content="Get familiar with the Vuero snacks styles. Code examples included."
                >
                  <RouterLink :to="{ name: 'components-snacks' }">
                    Get Started
                  </RouterLink>

                  <template #icon>
                    <img
                      class="light-image"
                      src="/@src/assets/illustrations/components/snacks.svg"
                      alt=""
                    />
                    <img
                      class="dark-image"
                      src="/@src/assets/illustrations/components/snacks-dark.svg"
                      alt=""
                    />
                  </template>
                </HubCard>

                <!--Component-->
                <HubCard
                  title="Plugins"
                  content="Get familiar with the Vuero plugins. Code examples included."
                >
                  <RouterLink :to="{ name: 'components-plugins-notif' }">
                    Get Started
                  </RouterLink>

                  <template #icon>
                    <img
                      class="light-image"
                      src="/@src/assets/illustrations/components/plugins.svg"
                      alt=""
                    />
                    <img
                      class="dark-image"
                      src="/@src/assets/illustrations/components/plugins-dark.svg"
                      alt=""
                    />
                  </template>
                </HubCard>
              </div>
            </div>

            <div class="hub-footer">
              <p><a class="action-link">Online Documentation</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/pages/dashboards/_hub.scss';
</style>
