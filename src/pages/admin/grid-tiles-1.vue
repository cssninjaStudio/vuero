<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

useTitle('Grid Tiles 1 - Admin - Vuero')
</script>

<template>
  <DefaultLayout>
    <LayoutsSidebar />
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="grid-tiles"
      class="view-wrapper"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
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
              @click="toggleSidebar('layouts')"
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
              <h1 class="title is-4">Tile Grid</h1>
            </div>

            <Toolbar />
          </div>

          <div class="tile-grid-toolbar">
            <div class="control has-icon">
              <input
                class="input custom-text-filter"
                placeholder="Search..."
                data-filter-target=".column"
              />
              <div class="form-icon">
                <Icon icon="feather:search" />
              </div>
            </div>

            <div class="buttons">
              <div class="field h-hidden-mobile">
                <div class="control">
                  <div class="h-select">
                    <div class="select-box">
                      <span>Filter</span>
                    </div>
                    <div class="select-icon">
                      <Icon icon="feather:chevron-down" />
                    </div>
                    <div class="select-drop has-slimscroll-sm">
                      <div class="drop-inner">
                        <div class="option-row">
                          <input type="radio" name="grid_filter" />
                          <div class="option-meta">
                            <span>UI/UX Design</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="grid_filter" />
                          <div class="option-meta">
                            <span>Web Development</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="grid_filter" />
                          <div class="option-meta">
                            <span>Software Engineering</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="grid_filter" />
                          <div class="option-meta">
                            <span>Business</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="grid_filter" />
                          <div class="option-meta">
                            <span>Product Management</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button class="button h-button is-primary is-raised">
                <span class="icon">
                  <i class="fas fa-plus"></i>
                </span>
                <span>Add User</span>
              </button>
            </div>
          </div>

          <div class="page-content-inner">
            <div class="tile-grid tile-grid-v1">
              <!--List Empty Search Placeholder -->
              <div
                class="page-placeholder custom-text-filter-placeholder is-hidden"
              >
                <div class="placeholder-content">
                  <img
                    class="light-image"
                    src="/@images/illustrations/placeholders/search-6.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/@images/illustrations/placeholders/search-6-dark.svg"
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

              <!--Tile Grid v1-->
              <div class="columns is-multiline">
                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <div class="h-avatar is-medium">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/29.jpg"
                          alt=""
                          data-user-popover="25"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/stacks/python.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span class="dark-inverted">Hakeem C.</span>
                        <span>Software Engineer</span>
                      </div>
                      <UserCardDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <div class="h-avatar is-medium">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/21.jpg"
                          alt=""
                          data-user-popover="19"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/stacks/swift.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span class="dark-inverted">Elizabeth F.</span>
                        <span>Mobile Developer</span>
                      </div>
                      <UserCardDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <div class="h-avatar is-medium">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/8.jpg"
                          alt=""
                          data-user-popover="3"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/flags/united-states-of-america.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span class="dark-inverted">Erik K.</span>
                        <span>Product Manager</span>
                      </div>
                      <UserCardDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <div class="h-avatar is-medium">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/7.jpg"
                          alt=""
                          data-user-popover="0"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/stacks/js.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span class="dark-inverted">Alice C.</span>
                        <span>Software Engineer</span>
                      </div>
                      <UserCardDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <div class="h-avatar is-medium">
                        <span
                          class="avatar is-fake is-warning"
                          data-user-popover="36"
                        >
                          <span>BT</span>
                        </span>
                        <img
                          class="badge"
                          src="/@images/icons/flags/united-states-of-america.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span class="dark-inverted">Betty T.</span>
                        <span>Product Manager</span>
                      </div>
                      <UserCardDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <div class="h-avatar is-medium">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/23.jpg"
                          alt=""
                          data-user-popover="21"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/flags/united-states-of-america.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span class="dark-inverted">Irina V.</span>
                        <span>Project Manager</span>
                      </div>
                      <UserCardDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <div class="h-avatar is-medium">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/37.jpg"
                          alt=""
                          data-user-popover="31"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/flags/france.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span class="dark-inverted">Helmut F.</span>
                        <span>Product Manager</span>
                      </div>
                      <UserCardDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <div class="h-avatar is-medium">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/25.jpg"
                          alt=""
                          data-user-popover="4"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/stacks/js.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span class="dark-inverted">Melany W.</span>
                        <span>Web Developer</span>
                      </div>
                      <UserCardDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <div class="h-avatar is-medium">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/39.jpg"
                          alt=""
                          data-user-popover="33"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/stacks/python.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span class="dark-inverted">Alejandro B.</span>
                        <span>Business Analyst</span>
                      </div>
                      <UserCardDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <div class="h-avatar is-medium">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/19.jpg"
                          alt=""
                          data-user-popover="17"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/flags/germany.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span class="dark-inverted">Greta K.</span>
                        <span>Sales Manager</span>
                      </div>
                      <UserCardDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <div class="h-avatar is-medium">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/9.jpg"
                          alt=""
                          data-user-popover="1"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/stacks/illustrator.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span class="dark-inverted">Anna B.</span>
                        <span>UI/UX Designer</span>
                      </div>
                      <UserCardDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <div class="h-avatar is-medium">
                        <span
                          class="avatar is-fake is-success"
                          data-user-popover="37"
                        >
                          <span>AT</span>
                        </span>
                        <img
                          class="badge"
                          src="/@images/icons/flags/united-states-of-america.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span class="dark-inverted">Alan T.</span>
                        <span>Software Engineer</span>
                      </div>
                      <UserCardDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <div class="h-avatar is-medium">
                        <span
                          class="avatar is-fake is-h-purple"
                          data-user-popover="35"
                        >
                          <span>SC</span>
                        </span>
                        <img
                          class="badge"
                          src="/@images/icons/flags/united-states-of-america.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span class="dark-inverted">Sara C.</span>
                        <span>UI/UX Designer</span>
                      </div>
                      <UserCardDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <div class="h-avatar is-medium">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/5.jpg"
                          alt=""
                          data-user-popover="9"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/flags/united-states-of-america.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span class="dark-inverted">Mary L.</span>
                        <span>Project Manager</span>
                      </div>
                      <UserCardDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <div class="h-avatar is-medium">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/32.jpg"
                          alt=""
                          data-user-popover="28"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/flags/united-states-of-america.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span class="dark-inverted">Jonathan K.</span>
                        <span>Product Manager</span>
                      </div>
                      <UserCardDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <div class="h-avatar is-medium">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/36.jpg"
                          alt=""
                          data-user-popover="30"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/stacks/reactjs.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span class="dark-inverted">Benoit B.</span>
                        <span>Software Engineer</span>
                      </div>
                      <UserCardDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <div class="h-avatar is-medium">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/38.jpg"
                          alt=""
                          data-user-popover="32"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/stacks/vuejs.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span class="dark-inverted">Christie D.</span>
                        <span>Web Developer</span>
                      </div>
                      <UserCardDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <div class="h-avatar is-medium">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/26.jpg"
                          alt=""
                          data-user-popover="23"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/stacks/html5.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span class="dark-inverted">Courtney W.</span>
                        <span>Web Developer</span>
                      </div>
                      <UserCardDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <div class="h-avatar is-medium">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/16.jpg"
                          alt=""
                          data-user-popover="16"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/flags/united-states-of-america.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span class="dark-inverted">Jason G.</span>
                        <span>Business Analyst</span>
                      </div>
                      <UserCardDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <div class="h-avatar is-medium">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/28.jpg"
                          alt=""
                          data-user-popover="24"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/stacks/angular.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span class="dark-inverted">Edouard F.</span>
                        <span>Web Developer</span>
                      </div>
                      <UserCardDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <div class="h-avatar is-medium">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/22.jpg"
                          alt=""
                          data-user-popover="20"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/flags/united-states-of-america.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span class="dark-inverted">Dwayne H.</span>
                        <span>Product Manager</span>
                      </div>
                      <UserCardDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <div class="h-avatar is-medium">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/13.jpg"
                          alt=""
                          data-user-popover="6"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/stacks/illustrator.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span class="dark-inverted">Tara S.</span>
                        <span>UI/UX Designer</span>
                      </div>
                      <UserCardDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <div class="h-avatar is-medium">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/24.jpg"
                          alt=""
                          data-user-popover="22"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/flags/united-states-of-america.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span class="dark-inverted">Sandrine C.</span>
                        <span>HR Manager</span>
                      </div>
                      <UserCardDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <div class="h-avatar is-medium">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/27.jpg"
                          alt=""
                          data-user-popover="10"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/flags/spain.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span class="dark-inverted">Carmen E.</span>
                        <span>HR Manager</span>
                      </div>
                      <UserCardDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <div class="h-avatar is-medium">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/11.jpg"
                          alt=""
                          data-user-popover="13"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/flags/england.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span class="dark-inverted">Kelly M.</span>
                        <span>HR Manager</span>
                      </div>
                      <UserCardDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <div class="h-avatar is-medium">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/15.jpg"
                          alt=""
                          data-user-popover="15"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/flags/germany.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span class="dark-inverted">Hilde V.</span>
                        <span>Software Engineer</span>
                      </div>
                      <UserCardDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <div class="h-avatar is-medium">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/14.jpg"
                          alt=""
                          data-user-popover="14"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/flags/england.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span class="dark-inverted">Ryan B.</span>
                        <span>Web Developer</span>
                      </div>
                      <UserCardDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <div class="h-avatar is-medium">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/10.jpg"
                          alt=""
                          data-user-popover="8"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/flags/united-states-of-america.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span class="dark-inverted">Henry G.</span>
                        <span>Business Analyst</span>
                      </div>
                      <UserCardDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <div class="h-avatar is-medium">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/18.jpg"
                          alt=""
                          data-user-popover="7"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/flags/united-states-of-america.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span class="dark-inverted">Esteban C.</span>
                        <span>UI/UX Designer</span>
                      </div>
                      <UserCardDropdown />
                    </div>
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
@import '../../assets/scss/abstracts/_mixins.scss';
@import '../../assets/scss/pages/grids/_grid-tiles.scss';
</style>
