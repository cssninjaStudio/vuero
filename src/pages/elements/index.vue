<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Elements Hub'
useHead({
  title: 'Elements - Vuero',
})
</script>

<template>
  <div class="page-content-inner card-hub">
    <div class="columns">
      <div class="column is-12">
        <div class="hub-wrapper">
          <div class="hub-header has-text-centered">
            <VAvatar
              size="xl"
              picture="/images/avatars/svg/vuero-1.svg"
              badge="/demo/photos/misc/buoy.jpg"
            />

            <h3 class="title is-4 is-narrow is-thin">Vuero Elements</h3>
            <p class="light-text">
              This is the Vuero elements library with detailed code examples.
            </p>
          </div>

          <div class="hub-body">
            <div class="body-inner">
              <!--Component/buttons-->
              <HubCard
                title="Buttons"
                content="Get familiar with the Vuero button styles. Code examples included."
              >
                <RouterLink :to="{ name: 'elements-button' }">
                  Get Started
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/@src/assets/illustrations/components/buttons.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/@src/assets/illustrations/components/buttons-dark.svg"
                    alt=""
                  />
                </template>
              </HubCard>

              <!--Component/icons-->
              <HubCard
                title="Icons"
                content="Get familiar with the Vuero icon libraries. Code examples included."
              >
                <RouterLink :to="{ name: 'elements-icons-line-icons' }">
                  Get Started
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/@src/assets/illustrations/components/icons.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/@src/assets/illustrations/components/icons-dark.svg"
                    alt=""
                  />
                </template>
              </HubCard>

              <!--Component/dropdowns-->
              <HubCard
                title="Dropdowns"
                content="Get familiar with the Vuero dropdown styles. Code examples included."
              >
                <RouterLink :to="{ name: 'elements-dropdown' }">
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

              <!--Component/modals-->
              <HubCard
                title="Modals"
                content="Get familiar with the Vuero modal styles. Code examples included."
              >
                <RouterLink :to="{ name: 'elements-modal' }">
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

              <!--Component/progress-->
              <HubCard
                title="Progress"
                content="Get familiar with the Vuero progress bar styles. Code examples included."
              >
                <RouterLink :to="{ name: 'elements-progress' }">
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

              <!--Component/forms-->
              <HubCard
                title="Forms"
                content="Get familiar with the Vuero form elements. Code examples included."
              >
                <RouterLink :to="{ name: 'elements-forms-inputs' }">
                  Get Started
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/@src/assets/illustrations/components/forms.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/@src/assets/illustrations/components/forms-dark.svg"
                    alt=""
                  />
                </template>
              </HubCard>

              <!--Component/checkbox-->
              <HubCard
                title="Checkboxes"
                content="Get familiar with the Vuero checkboxes styles. Code examples included."
              >
                <RouterLink :to="{ name: 'elements-checkbox' }">
                  Get Started
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/@src/assets/illustrations/components/checkboxes.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/@src/assets/illustrations/components/checkboxes-dark.svg"
                    alt=""
                  />
                </template>
              </HubCard>

              <!--Component/switch-block-->
              <HubCard
                title="Switches"
                content="Get familiar with the Vuero switches styles. Code examples included."
              >
                <RouterLink :to="{ name: 'elements-switch-block' }">
                  Get Started
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/@src/assets/illustrations/components/switches.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/@src/assets/illustrations/components/switches-dark.svg"
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
</template>

<style lang="scss">
@import '../../scss/pages/dashboards/_hub.scss';
</style>
