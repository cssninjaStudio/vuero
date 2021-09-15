<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Components Hub'
useHead({
  title: 'Components - Vuero',
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
              picture="/images/avatars/svg/vuero-2.svg"
              badge="/demo/photos/misc/buoy.jpg"
            />

            <h3 class="title is-4 is-narrow is-thin">Vuero Components</h3>
            <p class="light-text">
              This is the Vuero components library with detailed code examples.
            </p>
          </div>

          <div class="hub-body">
            <div class="body-inner">
              <!--Component/content-->
              <HubCard
                title="Content"
                content="Get familiar with the Vuero content styles. Code examples included."
              >
                <RouterLink :to="{ name: 'components-content' }">
                  Get Started
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/@src/assets/illustrations/components/lists.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/@src/assets/illustrations/components/lists-dark.svg"
                    alt=""
                  />
                </template>
              </HubCard>

              <!--Component/tags-->
              <HubCard
                title="Tags"
                content="Get familiar with the Vuero tags styles. Code examples included."
              >
                <RouterLink :to="{ name: 'components-tag' }">
                  Get Started
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/@src/assets/illustrations/components/tags.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/@src/assets/illustrations/components/tags-dark.svg"
                    alt=""
                  />
                </template>
              </HubCard>

              <!--Component/tabs-->
              <HubCard
                title="Tabs"
                content="Get familiar with the Vuero nav tabs styles. Code examples included."
              >
                <RouterLink :to="{ name: 'components-tabs' }">
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

              <!--Component/cards-->
              <HubCard
                title="Cards"
                content="Get familiar with the Vuero card styles. Code examples included."
              >
                <RouterLink :to="{ name: 'components-card' }">
                  Get Started
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/@src/assets/illustrations/components/cards.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/@src/assets/illustrations/components/cards-dark.svg"
                    alt=""
                  />
                </template>
              </HubCard>
              <!--Component/avatars-->
              <HubCard
                title="Avatars"
                content="Get familiar with the Vuero avatar styles. Code examples included."
              >
                <RouterLink :to="{ name: 'components-avatar' }">
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

              <!--Component/accordions-->
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

              <!--Component/breadcrumbs-->
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

              <!--Component/iconbox-->
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

              <!--Component/flextables-->
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

              <!--Component/snacks-->
              <HubCard
                title="Snacks"
                content="Get familiar with the Vuero snacks styles. Code examples included."
              >
                <RouterLink :to="{ name: 'components-snack' }">
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
