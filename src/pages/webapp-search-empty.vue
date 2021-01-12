<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

useTitle('Search Empty - WebApp - Vuero')
</script>

<template>
  <WebappLayout>
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-search"
      class="view-wrapper is-webapp"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-naver-offset="214"
      data-page-title="Empty Search"
      data-menu-item="#layouts-navbar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div
          class="page-content is-relative tabs-wrapper is-triple-slider is-squared is-inverted"
        >
          <div class="page-title has-text-centered is-webapp">
            <div class="title-wrap">
              <h1 class="title is-4">Empty Search</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner is-webapp">
            <!--Empty Search-->
            <div class="search-results-wrapper is-webapp">
              <div class="search-results-header">
                <div class="control has-icon">
                  <input class="input" placeholder="Search again..." />
                  <div class="form-icon">
                    <Icon icon="feather:search" />
                  </div>
                </div>

                <div class="search-info">
                  <span>0 results found</span>
                </div>

                <div class="tabs-inner">
                  <div class="tabs is-disabled">
                    <ul>
                      <li data-tab="all-items-tab" class="is-active">
                        <a><span>All</span></a>
                      </li>
                      <li data-tab="people-items-tab">
                        <a><span>People</span></a>
                      </li>
                      <li data-tab="records-items-tab">
                        <a><span>Records</span></a>
                      </li>
                      <li class="tab-naver"></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="search-results-body">
                <!--Search Placeholder -->
                <div class="page-placeholder">
                  <div class="placeholder-content">
                    <img
                      class="light-image"
                      src="/@images/illustrations/placeholders/search-7.svg"
                      alt=""
                    />
                    <img
                      class="dark-image"
                      src="/@images/illustrations/placeholders/search-7-dark.svg"
                      alt=""
                    />
                    <h3>We couldn't find any matching results.</h3>
                    <p class="is-larger">
                      Too bad. Looks like we couldn't find any matching results
                      for the search terms you've entered. Please try different
                      search terms or criteria.
                    </p>
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
