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
  <DefaultLayout>
    <ElementsSidebar />
    <ElementsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-elements"
      class="view-wrapper"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-naver-offset="278"
      data-menu-item="#elements-sidebar-menu"
      data-mobile-item="#elements-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
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
                    <div class="h-avatar is-xl">
                      <img
                        class="avatar"
                        src="/@images/avatars/svg/huro-1.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <img
                        class="badge"
                        src="/@images/photo/demo/misc/buoy.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <h3 class="title is-4 is-narrow is-thin">Vuero Elements</h3>
                    <p class="light-text">
                      This is the Vuero elements library with detailed code
                      examples.
                    </p>
                  </div>

                  <div class="hub-body">
                    <div class="body-inner">
                      <!--Component-->
                      <div class="hub-card">
                        <div class="hub-card-body">
                          <div class="inner-content">
                            <h3 class="title is-5 is-narrow is-thin">
                              Buttons
                            </h3>
                            <p class="light-text">
                              Get familiar with the Vuero button styles. Code
                              examples included.
                            </p>
                          </div>
                          <img
                            class="light-image"
                            src="/@images/illustrations/components/buttons.svg"
                            alt=""
                          />
                          <img
                            class="dark-image"
                            src="/@images/illustrations/components/buttons-dark.svg"
                            alt=""
                          />
                        </div>
                        <div class="hub-card-foot">
                          <RouterLink :to="{ name: 'elements-buttons' }"
                            >Get Started</RouterLink
                          >
                        </div>
                      </div>
                      <!--Component-->
                      <div class="hub-card">
                        <div class="hub-card-body">
                          <div class="inner-content">
                            <h3 class="title is-5 is-narrow is-thin">Cards</h3>
                            <p class="light-text">
                              Get familiar with the Vuero card styles. Code
                              examples included.
                            </p>
                          </div>
                          <img
                            class="light-image"
                            src="/@images/illustrations/components/cards.svg"
                            alt=""
                          />
                          <img
                            class="dark-image"
                            src="/@images/illustrations/components/cards-dark.svg"
                            alt=""
                          />
                        </div>
                        <div class="hub-card-foot">
                          <RouterLink :to="{ name: 'elements-cards-basic' }"
                            >Get Started</RouterLink
                          >
                        </div>
                      </div>
                      <!--Component-->
                      <div class="hub-card">
                        <div class="hub-card-body">
                          <div class="inner-content">
                            <h3 class="title is-5 is-narrow is-thin">Icons</h3>
                            <p class="light-text">
                              Get familiar with the Vuero icon libraries. Code
                              examples included.
                            </p>
                          </div>
                          <img
                            class="light-image"
                            src="/@images/illustrations/components/icons.svg"
                            alt=""
                          />
                          <img
                            class="dark-image"
                            src="/@images/illustrations/components/icons-dark.svg"
                            alt=""
                          />
                        </div>
                        <div class="hub-card-foot">
                          <RouterLink :to="{ name: 'elements-icons-lnil' }"
                            >Get Started</RouterLink
                          >
                        </div>
                      </div>
                      <!--Component-->
                      <div class="hub-card">
                        <div class="hub-card-body">
                          <div class="inner-content">
                            <h3 class="title is-5 is-narrow is-thin">
                              Content
                            </h3>
                            <p class="light-text">
                              Get familiar with the Vuero content styles. Code
                              examples included.
                            </p>
                          </div>
                          <img
                            class="light-image"
                            src="/@images/illustrations/components/lists.svg"
                            alt=""
                          />
                          <img
                            class="dark-image"
                            src="/@images/illustrations/components/lists-dark.svg"
                            alt=""
                          />
                        </div>
                        <div class="hub-card-foot">
                          <RouterLink :to="{ name: 'elements-content' }"
                            >Get Started</RouterLink
                          >
                        </div>
                      </div>
                      <!--Component-->
                      <div class="hub-card">
                        <div class="hub-card-body">
                          <div class="inner-content">
                            <h3 class="title is-5 is-narrow is-thin">Forms</h3>
                            <p class="light-text">
                              Get familiar with the Vuero form elements. Code
                              examples included.
                            </p>
                          </div>
                          <img
                            class="light-image"
                            src="/@images/illustrations/components/forms.svg"
                            alt=""
                          />
                          <img
                            class="dark-image"
                            src="/@images/illustrations/components/forms-dark.svg"
                            alt=""
                          />
                        </div>
                        <div class="hub-card-foot">
                          <RouterLink :to="{ name: 'elements-forms-inputs' }"
                            >Get Started</RouterLink
                          >
                        </div>
                      </div>
                      <!--Component-->
                      <div class="hub-card">
                        <div class="hub-card-body">
                          <div class="inner-content">
                            <h3 class="title is-5 is-narrow is-thin">
                              Checkboxes
                            </h3>
                            <p class="light-text">
                              Get familiar with the Vuero checkboxes styles.
                              Code examples included.
                            </p>
                          </div>
                          <img
                            class="light-image"
                            src="/@images/illustrations/components/checkboxes.svg"
                            alt=""
                          />
                          <img
                            class="dark-image"
                            src="/@images/illustrations/components/checkboxes-dark.svg"
                            alt=""
                          />
                        </div>
                        <div class="hub-card-foot">
                          <RouterLink
                            :to="{ name: 'elements-forms-checkboxes' }"
                            >Get Started</RouterLink
                          >
                        </div>
                      </div>
                      <!--Component-->
                      <div class="hub-card">
                        <div class="hub-card-body">
                          <div class="inner-content">
                            <h3 class="title is-5 is-narrow is-thin">Tags</h3>
                            <p class="light-text">
                              Get familiar with the Vuero tags styles. Code
                              examples included.
                            </p>
                          </div>
                          <img
                            class="light-image"
                            src="/@images/illustrations/components/tags.svg"
                            alt=""
                          />
                          <img
                            class="dark-image"
                            src="/@images/illustrations/components/tags-dark.svg"
                            alt=""
                          />
                        </div>
                        <div class="hub-card-foot">
                          <RouterLink :to="{ name: 'elements-tags' }"
                            >Get Started</RouterLink
                          >
                        </div>
                      </div>
                      <!--Component-->
                      <div class="hub-card">
                        <div class="hub-card-body">
                          <div class="inner-content">
                            <h3 class="title is-5 is-narrow is-thin">
                              Switches
                            </h3>
                            <p class="light-text">
                              Get familiar with the Vuero switches styles. Code
                              examples included.
                            </p>
                          </div>
                          <img
                            class="light-image"
                            src="/@images/illustrations/components/switches.svg"
                            alt=""
                          />
                          <img
                            class="dark-image"
                            src="/@images/illustrations/components/switches-dark.svg"
                            alt=""
                          />
                        </div>
                        <div class="hub-card-foot">
                          <RouterLink :to="{ name: 'elements-forms-switch' }"
                            >Get Started</RouterLink
                          >
                        </div>
                      </div>
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
      </div>
    </div>
  </DefaultLayout>
</template>

<style lang="scss">
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/pages/dashboards/_hub.scss';
</style>
