<script setup lang="ts">
import { useTitle } from '@vueuse/core'

useTitle('List Datatable 2 - Admin - Vuero')
</script>

<template>
  <DefaultLayout>
    <LayoutsSidebar />
    <Layouts-mobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-projects"
      class="view-wrapper"
      data-naver-offset="214"
      data-menu-item="#layouts-sidebar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered">
            <!-- Sidebar Trigger -->
            <div
              class="huro-hamburger nav-trigger push-resize"
              data-sidebar="layouts-sidebar"
            >
              <span class="menu-toggle has-chevron">
                <span class="icon-box-toggle">
                  <span class="rotate">
                    <i class="icon-line-top"></i>
                    <i class="icon-line-center"></i>
                    <i class="icon-line-bottom"></i>
                  </span>
                </span>
              </span>
            </div>

            <div class="title-wrap">
              <h1 class="title is-4">Datatable</h1>
            </div>

            <Toolbar />
          </div>

          <div class="datatable-toolbar">
            <div class="field has-addons is-disabled">
              <p class="control">
                <button class="button h-button">
                  <span class="icon is-small">
                    <Icon icon="fa-bolt" />
                  </span>
                  <span>Disable</span>
                </button>
              </p>
              <p class="control">
                <button class="button h-button">
                  <span class="icon is-small">
                    <Icon icon="fa-times" />
                  </span>
                  <span>Delete</span>
                </button>
              </p>
              <p class="control">
                <button class="button h-button">
                  <span class="icon is-small">
                    <Icon icon="fa-file" />
                  </span>
                  <span>Report</span>
                </button>
              </p>
            </div>

            <div class="buttons">
              <button class="button h-button is-primary is-elevated">
                <span class="icon">
                  <Icon icon="fa-plus" />
                </span>
                <span>Add Product</span>
              </button>
            </div>
          </div>

          <div class="page-content-inner">
            <!-- Datatable -->
            <div class="table-wrapper" data-simplebar>
              <table
                id="products-datatable"
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
                    <th>Picture</th>
                    <th>Name</th>
                    <th>SKU</th>
                    <th class="has-text-centered">Price</th>
                    <th class="has-text-centered">Stock</th>
                    <th>Category</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
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
  </DefaultLayout>
</template>
