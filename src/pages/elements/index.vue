<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

onMounted(() => {
  activeSidebar.value = 'elements'
})

useHead({
  title: 'Elements - Hub - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered">
      <!-- Sidebar Trigger -->
      <div
        class="huro-hamburger nav-trigger push-resize"
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
        <h1 class="title is-4">Elements</h1>
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
                  src="/images/avatars/svg/huro-1.svg"
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
              <h3 class="title is-4 is-narrow is-thin">Vuero Elements</h3>
              <p class="light-text">
                This is the Vuero elements library with detailed code examples.
              </p>
            </div>

            <div class="hub-body">
              <div class="body-inner">
                <!--Component-->
                <HubCard
                  title="Buttons"
                  content="Get familiar with the Vuero button styles. Code examples
                        included."
                  light="/images/illustrations/components/buttons.svg"
                  dark="/images/illustrations/components/buttons-dark.svg"
                >
                  <RouterLink :to="{ name: 'elements-buttons' }"
                    >Get Started</RouterLink
                  >
                </HubCard>

                <!--Component-->
                <HubCard
                  title="Cards"
                  content="Get familiar with the Vuero card styles. Code examples
                        included."
                  light="/images/illustrations/components/cards.svg"
                  dark="/images/illustrations/components/cards-dark.svg"
                >
                  <RouterLink :to="{ name: 'elements-cards-basic' }"
                    >Get Started</RouterLink
                  >
                </HubCard>

                <!--Component-->
                <HubCard
                  title="Icons"
                  content="Get familiar with the Vuero icon libraries. Code
                        examples included."
                  light="/images/illustrations/components/icons.svg"
                  dark="/images/illustrations/components/icons-dark.svg"
                >
                  <RouterLink :to="{ name: 'elements-icons-lnil' }"
                    >Get Started</RouterLink
                  >
                </HubCard>

                <!--Component-->
                <HubCard
                  title="Content"
                  content="Get familiar with the Vuero content styles. Code
                        examples included."
                  light="/images/illustrations/components/lists.svg"
                  dark="/images/illustrations/components/lists-dark.svg"
                >
                  <RouterLink :to="{ name: 'elements-content' }"
                    >Get Started</RouterLink
                  >
                </HubCard>

                <!--Component-->
                <HubCard
                  title="Forms"
                  content="Get familiar with the Vuero form elements. Code
                        examples included."
                  light="/images/illustrations/components/forms.svg"
                  dark="/images/illustrations/components/forms-dark.svg"
                >
                  <RouterLink :to="{ name: 'elements-forms-inputs' }"
                    >Get Started</RouterLink
                  >
                </HubCard>

                <!--Component-->
                <HubCard
                  title="Checkboxes"
                  content="Get familiar with the Vuero checkboxes styles. Code
                        examples included."
                  light="/images/illustrations/components/checkboxes.svg"
                  dark="/images/illustrations/components/checkboxes-dark.svg"
                >
                  <RouterLink :to="{ name: 'elements-forms-checkboxes' }"
                    >Get Started</RouterLink
                  >
                </HubCard>

                <!--Component-->
                <HubCard
                  title="Tags"
                  content="Get familiar with the Vuero tags styles. Code
                        examples included."
                  light="/images/illustrations/components/tags.svg"
                  dark="/images/illustrations/components/tags-dark.svg"
                >
                  <RouterLink :to="{ name: 'elements-tags' }"
                    >Get Started</RouterLink
                  >
                </HubCard>

                <!--Component-->
                <HubCard
                  title="Switches"
                  content="Get familiar with the Vuero switches styles. Code
                        examples included."
                  light="/images/illustrations/components/switches.svg"
                  dark="/images/illustrations/components/switches-dark.svg"
                >
                  <RouterLink :to="{ name: 'elements-forms-switch' }"
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
