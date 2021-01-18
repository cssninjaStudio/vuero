<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useTitle } from '@vueuse/core'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

useTitle('Components - Dropdown - Vuero')
</script>

<template>
  <DefaultLayout>
    <ComponentsSidebar />
    <ComponentsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="huro-demo"
      class="view-wrapper"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-naver-offset="342"
      data-menu-item="#components-sidebar-menu"
      data-mobile-item="#components-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered">
            <!-- Sidebar Trigger -->
            <div
              class="huro-hamburger nav-trigger push-resize"
              @click="activeSidebar = 'components'"
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
              <h1 class="title is-4">Dropdown</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner">
            <nav
              class="breadcrumb has-bullet-separator"
              aria-label="breadcrumbs"
            >
              <ul>
                <li>
                  <RouterLink :to="{ name: 'index' }">
                    <span class="icon is-small is-solo">
                      <Icon icon="feather:home" />
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
                    <span>Dropdown</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns">
              <div class="column is-12">
                <!--Dropdown-->
                <DropdownDocumentation />

                <!--Dropdown-->
                <DropdownColorsDocumentation />

                <!--Dropdown-->
                <DropdownButtonSlotDocumentation />

                <!--Dropdown-->
                <DropdownModernDocumentation />

                <!--Dropdown-->
                <DropdownWithIconsDocumentation />

                <!--Dropdown-->
                <DropdownWithImagesDocumentation />

                <!--Artificial Spacing-->
                <div class="demo-spacer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
