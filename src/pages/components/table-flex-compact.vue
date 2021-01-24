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
  title: 'Components - Table Flex Compact - Vuero',
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
        <h1 class="title is-4">Compact Table</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner">
      <nav class="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
        <ul>
          <li>
            <RouterLink :to="{ name: 'index' }">
              <span class="icon is-small is-solo">
                <i class="iconify" data-icon="feather:home"></i>
              </span>
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'components' }">
              <span>Components</span>
            </RouterLink>
          </li>
          <li>
            <a>
              <span>Compact Table</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="columns">
        <div class="column is-12">
          <!--Flex Table Compact-->
          <div class="demo-card has-more-margin">
            <div class="demo-title">
              <h3 class="title is-thin is-5">Flex Table Compact</h3>
              <p>
                Vuero provides a custom table component called flex table. It
                looks like a table but is not a Html5 table. Instead, it uses
                the flexbox technology and is fully responsive. You can make it
                more compact by adding the
                <code>is-compact</code> class. Check the markup for more
                details.
              </p>
            </div>
          </div>

          <div class="flex-table is-compact">
            <!--Table header-->
            <div class="flex-table-header">
              <span>Company</span>
              <span>Type</span>
              <span>Industry</span>
              <span>Status</span>
              <span>Contacts</span>
              <span class="cell-end">Actions</span>
            </div>

            <!--Table item-->
            <div class="flex-table-item">
              <div class="flex-table-cell is-bold" data-th="Company">
                <span class="dark-text">Grubspot</span>
              </div>
              <div class="flex-table-cell" data-th="Type">
                <span class="light-text">New lead</span>
              </div>
              <div class="flex-table-cell" data-th="Industry">
                <span class="light-text">Software</span>
              </div>
              <div class="flex-table-cell" data-th="Status">
                <span class="tag is-success is-rounded">Active</span>
              </div>
              <div class="flex-table-cell" data-th="Contacts">
                <div class="avatar-stack is-pushed-mobile">
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/7.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="v-avatar is-small">
                    <span class="avatar is-fake is-info">
                      <span>JD</span>
                    </span>
                  </div>
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/8.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="v-avatar is-small">
                    <span class="avatar is-more">
                      <span class="inner">
                        <span>+2</span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex-table-cell cell-end" data-th="Actions">
                <FlexTableContextMenu />
              </div>
            </div>

            <!--Table item-->
            <div class="flex-table-item">
              <div class="flex-table-cell is-bold" data-th="Company">
                <span class="dark-text">PhaseBit</span>
              </div>
              <div class="flex-table-cell" data-th="Type">
                <span class="light-text">Confirmed</span>
              </div>
              <div class="flex-table-cell" data-th="Industry">
                <span class="light-text">Cryptocurrency</span>
              </div>
              <div class="flex-table-cell" data-th="Status">
                <span class="tag is-info is-rounded">New</span>
              </div>
              <div class="flex-table-cell" data-th="Contacts">
                <div class="avatar-stack is-pushed-mobile">
                  <div class="v-avatar is-small">
                    <span class="avatar is-fake is-danger">
                      <span>SC</span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex-table-cell cell-end" data-th="Actions">
                <FlexTableContextMenu />
              </div>
            </div>

            <!--Table item-->
            <div class="flex-table-item">
              <div class="flex-table-cell is-bold" data-th="Company">
                <span class="dark-text">Kokolint</span>
              </div>
              <div class="flex-table-cell" data-th="Type">
                <span class="light-text">New lead</span>
              </div>
              <div class="flex-table-cell" data-th="Industry">
                <span class="light-text">Software</span>
              </div>
              <div class="flex-table-cell" data-th="Status">
                <span class="tag is-success is-rounded">Active</span>
              </div>
              <div class="flex-table-cell" data-th="Contacts">
                <div class="avatar-stack is-pushed-mobile">
                  <div class="v-avatar is-small">
                    <span class="avatar is-fake is-success">
                      <span>BT</span>
                    </span>
                  </div>
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/12.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                </div>
              </div>
              <div class="flex-table-cell cell-end" data-th="Actions">
                <FlexTableContextMenu />
              </div>
            </div>

            <!--Table item-->
            <div class="flex-table-item">
              <div class="flex-table-cell is-bold" data-th="Company">
                <span class="dark-text">VScope X</span>
              </div>
              <div class="flex-table-cell" data-th="Type">
                <span class="light-text">Canceled</span>
              </div>
              <div class="flex-table-cell" data-th="Industry">
                <span class="light-text">Software</span>
              </div>
              <div class="flex-table-cell" data-th="Status">
                <span class="tag is-rounded">Disabled</span>
              </div>
              <div class="flex-table-cell" data-th="Contacts">
                <div class="avatar-stack is-pushed-mobile">
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/21.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                </div>
              </div>
              <div class="flex-table-cell cell-end" data-th="Actions">
                <FlexTableContextMenu />
              </div>
            </div>

            <!--Table item-->
            <div class="flex-table-item">
              <div class="flex-table-cell is-bold" data-th="Company">
                <span class="dark-text">MediHelp</span>
              </div>
              <div class="flex-table-cell" data-th="Type">
                <span class="light-text">Confirmed</span>
              </div>
              <div class="flex-table-cell" data-th="Industry">
                <span class="light-text">Software</span>
              </div>
              <div class="flex-table-cell" data-th="Status">
                <span class="tag is-rounded is-danger">Suspended</span>
              </div>
              <div class="flex-table-cell" data-th="Contacts">
                <div class="avatar-stack is-pushed-mobile">
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/5.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/9.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/11.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                </div>
              </div>
              <div class="flex-table-cell cell-end" data-th="Actions">
                <FlexTableContextMenu />
              </div>
            </div>
          </div>

          <!--Table Pagination-->
          <FlexPagination />
        </div>
      </div>
    </div>
  </div>
</template>
