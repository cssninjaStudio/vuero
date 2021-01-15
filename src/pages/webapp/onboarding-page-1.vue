<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

useTitle('Onboarding Page 1 - WebApp - Vuero')
</script>

<template>
  <WebappLayout>
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-onboarding"
      class="view-wrapper is-webapp"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-page-title="Onboarding"
      data-naver-offset="214"
      data-menu-item="#layouts-navbar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered is-webapp">
            <div class="title-wrap">
              <h1 class="title is-4">Onboarding</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner">
            <!--Onboarding V1-->
            <div class="onboarding-wrapper onboarding-v1 is-webapp">
              <div class="title-wrap">
                <p>Looks like you're new here</p>
                <h2 class="dark-inverted">
                  Welcome to Vuero. What would you like to do?
                </h2>
              </div>

              <div class="onboarding-wrap">
                <div class="onboarding-wrap-inner">
                  <!--Card-->
                  <div class="onboarding-card">
                    <img
                      class="light-image"
                      src="/@images/illustrations/onboarding/set2-1.svg"
                      alt=""
                    />
                    <img
                      class="dark-image"
                      src="/@images/illustrations/onboarding/set2-1-dark.svg"
                      alt=""
                    />
                    <div class="onboarding-content">
                      <h3 class="dark-inverted">Explore Posts</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Recte dicis; Ita enim vivunt.
                      </p>
                      <div class="button-wrap">
                        <a
                          class="button h-button is-primary is-rounded is-elevated"
                          >Explore</a
                        >
                      </div>
                    </div>
                  </div>
                  <!--Card-->
                  <div class="onboarding-card">
                    <img
                      class="light-image"
                      src="/@images/illustrations/onboarding/set2-2.svg"
                      alt=""
                    />
                    <img
                      class="dark-image"
                      src="/@images/illustrations/onboarding/set2-2-dark.svg"
                      alt=""
                    />
                    <div class="onboarding-content">
                      <h3 class="dark-inverted">Schedule a Meeting</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Recte dicis; Ita enim vivunt.
                      </p>
                      <div class="button-wrap">
                        <a
                          class="button h-button is-primary is-rounded is-elevated"
                          >Schedule</a
                        >
                      </div>
                    </div>
                  </div>
                  <!--Card-->
                  <div class="onboarding-card">
                    <img
                      class="light-image"
                      src="/@images/illustrations/onboarding/set2-3.svg"
                      alt=""
                    />
                    <img
                      class="dark-image"
                      src="/@images/illustrations/onboarding/set2-3-dark.svg"
                      alt=""
                    />
                    <div class="onboarding-content">
                      <h3 class="dark-inverted">Chill Out</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Recte dicis; Ita enim vivunt.
                      </p>
                      <div class="button-wrap">
                        <a
                          class="button h-button is-primary is-rounded is-elevated"
                          >Take a Nap</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </WebappLayout>
</template>

<style lang="scss">
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/abstracts/_mixins.scss';
@import '../../assets/scss/pages/generic/_onboarding.scss';
</style>
