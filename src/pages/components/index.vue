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
  title: 'Components - Hub - Vuero',
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
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
                <img
                  class="badge"
                  src="/images/photo/demo/misc/buoy.jpg"
                  alt=""
                  @error="
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
                  content="Get familiar with the Vuero avatar styles. Code examples
                        included."
                  light="/images/illustrations/components/avatar.svg"
                  dark="/images/illustrations/components/avatar-dark.svg"
                >
                  <RouterLink :to="{ name: 'components-avatars' }"
                    >Get Started</RouterLink
                  >
                </HubCard>

                <!--Component-->
                <HubCard
                  title="Accordions"
                  content="Get familiar with the Vuero accordion styles. Code
                        examples included."
                  light="/images/illustrations/components/accordion.svg"
                  dark="/images/illustrations/components/accordion-dark.svg"
                >
                  <RouterLink :to="{ name: 'components-accordion-basic' }"
                    >Get Started</RouterLink
                  >
                </HubCard>

                <!--Component-->
                <HubCard
                  title="Breadcrumbs"
                  content="Get familiar with the Vuero breadcrumb styles. Code
                        examples included."
                  light="/images/illustrations/components/breadcrumb.svg"
                  dark="/images/illustrations/components/breadcrumb-dark.svg"
                >
                  <RouterLink :to="{ name: 'components-breadcrumb' }"
                    >Get Started</RouterLink
                  >
                </HubCard>

                <!--Component-->
                <HubCard
                  title="Dropdowns"
                  content="Get familiar with the Vuero dropdown styles. Code
                        examples included."
                  light="/images/illustrations/components/dropdown.svg"
                  dark="/images/illustrations/components/dropdown-dark.svg"
                >
                  <RouterLink :to="{ name: 'components-dropdown' }"
                    >Get Started</RouterLink
                  >
                </HubCard>

                <!--Component-->
                <HubCard
                  title="Icon Box"
                  content="Get familiar with the Vuero icon boxes styles. Code
                        examples included."
                  light="/images/illustrations/components/icon-box.svg"
                  dark="/images/illustrations/components/icon-box-dark.svg"
                >
                  <RouterLink :to="{ name: 'components-icon-box' }"
                    >Get Started</RouterLink
                  >
                </HubCard>

                <!--Component-->
                <HubCard
                  title="Messages"
                  content="Get familiar with the Vuero messages styles. Code
                        examples included."
                  light="/images/illustrations/components/message.svg"
                  dark="/images/illustrations/components/message-dark.svg"
                >
                  <RouterLink :to="{ name: 'components-messages' }"
                    >Get Started</RouterLink
                  >
                </HubCard>

                <!--Component-->
                <HubCard
                  title="Modals"
                  content="Get familiar with the Vuero modal styles. Code examples
                        included."
                  light="/images/illustrations/components/modal.svg"
                  dark="/images/illustrations/components/modal-dark.svg"
                >
                  <RouterLink :to="{ name: 'components-modal' }"
                    >Get Started</RouterLink
                  >
                </HubCard>

                <!--Component-->
                <HubCard
                  title="Progress"
                  content="Get familiar with the Vuero progress bar styles. Code
                        examples included."
                  light="/images/illustrations/components/progress.svg"
                  dark="/images/illustrations/components/progress-dark.svg"
                >
                  <RouterLink :to="{ name: 'components-progress' }"
                    >Get Started</RouterLink
                  >
                </HubCard>

                <!--Component-->
                <HubCard
                  title="Tabs"
                  content="Get familiar with the Vuero nav tabs styles. Code
                        examples included."
                  light="/images/illustrations/components/tabs.svg"
                  dark="/images/illustrations/components/tabs-dark.svg"
                >
                  <RouterLink :to="{ name: 'components-tabs-regular' }"
                    >Get Started</RouterLink
                  >
                </HubCard>

                <!--Component-->
                <HubCard
                  title="Flex Table"
                  content="Get familiar with the Vuero flex table styles. Code
                        examples included."
                  light="/images/illustrations/components/table.svg"
                  dark="/images/illustrations/components/table-dark.svg"
                >
                  <RouterLink :to="{ name: 'components-table-flex' }"
                    >Get Started</RouterLink
                  >
                </HubCard>

                <!--Component-->
                <HubCard
                  title="Snacks"
                  content="Get familiar with the Vuero snacks styles. Code examples
                        included."
                  light="/images/illustrations/components/snacks.svg"
                  dark="/images/illustrations/components/snacks-dark.svg"
                >
                  <RouterLink :to="{ name: 'components-snacks' }"
                    >Get Started</RouterLink
                  >
                </HubCard>

                <!--Component-->
                <HubCard
                  title="Plugins"
                  content="Get familiar with the Vuero plugins. Code examples
                        included."
                  light="/images/illustrations/components/plugins.svg"
                  dark="/images/illustrations/components/plugins-dark.svg"
                >
                  <RouterLink :to="{ name: 'components-plugins-autocomplete' }"
                    >Get Started</RouterLink
                  >
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
