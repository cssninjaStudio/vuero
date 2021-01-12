<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

useTitle('List Datatable 4 - WebApp - Vuero')
</script>

<template>
  <WebappLayout>
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-datatable"
      class="view-wrapper is-webapp"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-page-title="Datatable"
      data-naver-offset="214"
      data-menu-item="#layouts-navbar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered is-webapp">
            <div class="title-wrap">
              <h1 class="title is-4">Datatable</h1>
            </div>

            <Toolbar />
          </div>

          <div class="datatable-toolbar is-webapp">
            <div class="field has-addons is-disabled">
              <p class="control">
                <button class="button h-button">
                  <span class="icon is-small">
                    <i class="fas fa-download"></i>
                  </span>
                  <span>Download</span>
                </button>
              </p>
              <p class="control">
                <button class="button h-button">
                  <span class="icon is-small">
                    <i class="fas fa-upload"></i>
                  </span>
                  <span>Update</span>
                </button>
              </p>
              <p class="control">
                <button class="button h-button">
                  <span class="icon is-small">
                    <i class="fas fa-times"></i>
                  </span>
                  <span>Remove</span>
                </button>
              </p>
            </div>

            <div class="buttons">
              <button class="button h-button is-primary is-elevated">
                <span class="icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span>Upload File</span>
              </button>
            </div>
          </div>

          <div class="page-content-inner is-webapp">
            <!-- Datatable -->
            <div class="table-wrapper" data-simplebar>
              <table
                id="empty-datatable"
                class="table is-datatable is-hoverable table-is-bordered"
              >
                <thead>
                  <tr>
                    <th>
                      <div class="control">
                        <label
                          class="checkbox is-primary is-outlined is-circle"
                        >
                          <input type="checkbox" />
                          <span></span>
                        </label>
                      </div>
                    </th>
                    <th>Type</th>
                    <th>Name</th>
                    <th class="has-text-centered">Size</th>
                    <th class="has-text-centered">Version</th>
                    <th>Last Updated</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>

              <!--Empty Placeholder-->
              <div class="section-placeholder">
                <div class="placeholder-content">
                  <img
                    class="light-image"
                    src="/@images/illustrations/placeholders/search-4.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/@images/illustrations/placeholders/search-4-dark.svg"
                    alt=""
                  />
                  <h3 class="dark-inverted">No data to show</h3>
                  <p>There is currently no data to show in this list.</p>
                </div>
              </div>
            </div>

            <div
              id="paging-first-datatable"
              class="pagination datatable-pagination"
            >
              <div class="datatable-info">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </WebappLayout>
</template>
