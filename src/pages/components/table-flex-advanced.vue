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
  title: 'Components - Table Flex Advanced - Vuero',
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
        <h1 class="title is-4">Advanced Table</h1>
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
              <span>Advanced Table</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="columns">
        <div class="column is-12">
          <!--Flex Table-->
          <div class="demo-card has-more-margin">
            <div class="demo-title">
              <h3 class="title is-thin is-5">Advanced Table</h3>
              <p>
                Vuero provides a custom table component called flex table. It
                looks like a table but is not a Html5 table. Instead, it uses
                the flexbox technology and is fully responsive. The below
                example, adds more controls and a wrapper to the table. Check
                the markup for more details.
              </p>
            </div>
          </div>

          <div class="flex-table-wrapper">
            <div class="flex-table-toolbar">
              <div class="left">
                <div class="control has-icon">
                  <input class="input is-rounded" placeholder="Filter..." />
                  <div class="form-icon">
                    <i class="iconify" data-icon="feather:search"></i>
                  </div>
                </div>
              </div>

              <div class="right">
                <div class="control">
                  <div class="h-select is-rounded">
                    <div class="select-box">
                      <span>10 results per page</span>
                    </div>
                    <div class="select-icon">
                      <i class="iconify" data-icon="feather:chevron-down"></i>
                    </div>
                    <div class="select-drop has-slimscroll-sm">
                      <div class="drop-inner">
                        <div class="option-row">
                          <input type="radio" name="table_results" />
                          <div class="option-meta">
                            <span>10 results per page</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="table_results" />
                          <div class="option-meta">
                            <span>25 results per page</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="table_results" />
                          <div class="option-meta">
                            <span>50 results per page</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="table_results" />
                          <div class="option-meta">
                            <span>100 results per page</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="advanced-flex-table" class="flex-table">
              <!--Table header-->
              <div class="flex-table-header">
                <span class="is-checkbox">
                  <label class="checkbox">
                    <input type="checkbox" />
                    <span></span>
                  </label>
                </span>
                <span class="is-grow">User</span>
                <span>Location</span>
                <span>Industry</span>
                <span>Status</span>
                <span>Relations</span>
                <span class="cell-end">Actions</span>
              </div>

              <!--Table item-->
              <div class="flex-table-item">
                <div class="flex-table-cell is-checkbox">
                  <label class="checkbox">
                    <input type="checkbox" />
                    <span></span>
                  </label>
                </div>
                <div class="flex-table-cell is-media is-grow" data-th="">
                  <div class="v-avatar is-medium">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/8.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                    <img
                      class="badge"
                      src="/images/icons/flags/united-states-of-america.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <span class="item-name">Erik K.</span>
                    <span class="item-meta">
                      <span>Product Manager</span>
                    </span>
                  </div>
                </div>
                <div class="flex-table-cell" data-th="Location">
                  <span class="light-text">Las Vegas, NV</span>
                </div>
                <div class="flex-table-cell" data-th="Industry">
                  <span class="light-text">Software</span>
                </div>
                <div class="flex-table-cell" data-th="Status">
                  <span class="tag is-success is-rounded">Online</span>
                </div>
                <div class="flex-table-cell" data-th="Relations">
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
                        src="/images/avatars/photos/12.jpg"
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
                  <FlexTableContextMenuAlt />
                </div>
              </div>

              <!--Table item-->
              <div class="flex-table-item">
                <div class="flex-table-cell is-checkbox">
                  <label class="checkbox">
                    <input type="checkbox" />
                    <span></span>
                  </label>
                </div>
                <div class="flex-table-cell is-media is-grow" data-th="">
                  <div class="v-avatar is-medium">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/22.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                    <img
                      class="badge"
                      src="/images/icons/flags/united-states-of-america.svg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div>
                    <span class="item-name">Jimmy H.</span>
                    <span class="item-meta">
                      <span>Project Manager</span>
                    </span>
                  </div>
                </div>
                <div class="flex-table-cell" data-th="Location">
                  <span class="light-text">Toronto, CA</span>
                </div>
                <div class="flex-table-cell" data-th="Industry">
                  <span class="light-text">Business</span>
                </div>
                <div class="flex-table-cell" data-th="Status">
                  <span class="tag is-rounded">Offline</span>
                </div>
                <div class="flex-table-cell" data-th="Relations">
                  <div class="avatar-stack is-pushed-mobile">
                    <div class="v-avatar is-small">
                      <span class="avatar is-fake is-danger">
                        <span>SC</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="flex-table-cell cell-end" data-th="Actions">
                  <FlexTableContextMenuAlt />
                </div>
              </div>

              <!--Table item-->
              <div class="flex-table-item">
                <div class="flex-table-cell is-checkbox">
                  <label class="checkbox">
                    <input type="checkbox" />
                    <span></span>
                  </label>
                </div>
                <div class="flex-table-cell is-media is-grow" data-th="">
                  <div class="v-avatar is-medium">
                    <span class="avatar is-fake is-success">
                      <span>KL</span>
                    </span>
                    <img
                      class="badge"
                      src="/images/icons/flags/united-states-of-america.svg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div>
                    <span class="item-name">Karen Langley</span>
                    <span class="item-meta">
                      <span>Sales Manager</span>
                    </span>
                  </div>
                </div>
                <div class="flex-table-cell" data-th="Location">
                  <span class="light-text">Boston, US</span>
                </div>
                <div class="flex-table-cell" data-th="Industry">
                  <span class="light-text">Business</span>
                </div>
                <div class="flex-table-cell" data-th="Status">
                  <span class="tag is-rounded">Offline</span>
                </div>
                <div class="flex-table-cell" data-th="Relations">
                  <div class="avatar-stack is-pushed-mobile">
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
                  <FlexTableContextMenuAlt />
                </div>
              </div>

              <!--Table item-->
              <div class="flex-table-item">
                <div class="flex-table-cell is-checkbox">
                  <label class="checkbox">
                    <input type="checkbox" />
                    <span></span>
                  </label>
                </div>
                <div class="flex-table-cell is-media is-grow" data-th="">
                  <div class="v-avatar is-medium">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/25.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                    <img
                      class="badge"
                      src="/images/icons/flags/united-states-of-america.svg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div>
                    <span class="item-name">Melany W.</span>
                    <span class="item-meta">
                      <span>Web Developer</span>
                    </span>
                  </div>
                </div>
                <div class="flex-table-cell" data-th="Location">
                  <span class="light-text">San Jose, CA</span>
                </div>
                <div class="flex-table-cell" data-th="Industry">
                  <span class="light-text">Design</span>
                </div>
                <div class="flex-table-cell" data-th="Status">
                  <span class="tag is-success is-rounded">Online</span>
                </div>
                <div class="flex-table-cell" data-th="Relations">
                  <div class="avatar-stack is-pushed-mobile">
                    <div class="v-avatar is-small">
                      <span class="avatar is-fake is-success">
                        <span>BT</span>
                      </span>
                    </div>
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
                  </div>
                </div>
                <div class="flex-table-cell cell-end" data-th="Actions">
                  <FlexTableContextMenuAlt />
                </div>
              </div>

              <!--Table item-->
              <div class="flex-table-item">
                <div class="flex-table-cell is-checkbox">
                  <label class="checkbox">
                    <input type="checkbox" />
                    <span></span>
                  </label>
                </div>
                <div class="flex-table-cell is-media is-grow" data-th="">
                  <div class="v-avatar is-medium">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/13.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                    <img
                      class="badge"
                      src="/images/icons/flags/united-states-of-america.svg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div>
                    <span class="item-name">Tara S.</span>
                    <span class="item-meta">
                      <span>UI/UX Designer</span>
                    </span>
                  </div>
                </div>
                <div class="flex-table-cell" data-th="Location">
                  <span class="light-text">New York, NY</span>
                </div>
                <div class="flex-table-cell" data-th="Industry">
                  <span class="light-text">Accounting</span>
                </div>
                <div class="flex-table-cell" data-th="Status">
                  <span class="tag is-danger is-rounded">Busy</span>
                </div>
                <div class="flex-table-cell" data-th="Relations">
                  <div class="avatar-stack is-pushed-mobile">
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/14.jpg"
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
                  <FlexTableContextMenuAlt />
                </div>
              </div>

              <!--Table item-->
              <div class="flex-table-item">
                <div class="flex-table-cell is-checkbox">
                  <label class="checkbox">
                    <input type="checkbox" />
                    <span></span>
                  </label>
                </div>
                <div class="flex-table-cell is-media is-grow" data-th="">
                  <div class="v-avatar is-medium">
                    <span class="avatar is-fake is-warning">
                      <span>SD</span>
                    </span>
                    <img
                      class="badge"
                      src="/images/icons/flags/united-states-of-america.svg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div>
                    <span class="item-name">Sam Davenport</span>
                    <span class="item-meta">
                      <span>Accountant</span>
                    </span>
                  </div>
                </div>
                <div class="flex-table-cell" data-th="Location">
                  <span class="light-text">Los Angeles, US</span>
                </div>
                <div class="flex-table-cell" data-th="Industry">
                  <span class="light-text">Business</span>
                </div>
                <div class="flex-table-cell" data-th="Status">
                  <span class="tag is-rounded">Offline</span>
                </div>
                <div class="flex-table-cell" data-th="Relations">
                  <div class="avatar-stack is-pushed-mobile">
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/13.jpg"
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
                        src="/images/avatars/photos/7.jpg"
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
                  <FlexTableContextMenuAlt />
                </div>
              </div>

              <!--Table item-->
              <div class="flex-table-item">
                <div class="flex-table-cell is-checkbox">
                  <label class="checkbox">
                    <input type="checkbox" />
                    <span></span>
                  </label>
                </div>
                <div class="flex-table-cell is-media is-grow" data-th="">
                  <div class="v-avatar is-medium">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/7.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                    <img
                      class="badge"
                      src="/images/icons/flags/united-states-of-america.svg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div>
                    <span class="item-name">Alice C.</span>
                    <span class="item-meta">
                      <span>Software Engineer</span>
                    </span>
                  </div>
                </div>
                <div class="flex-table-cell" data-th="Location">
                  <span class="light-text">San Diego, CA</span>
                </div>
                <div class="flex-table-cell" data-th="Industry">
                  <span class="light-text">Finance</span>
                </div>
                <div class="flex-table-cell" data-th="Status">
                  <span class="tag is-danger is-rounded">Busy</span>
                </div>
                <div class="flex-table-cell" data-th="Relations">
                  <div class="avatar-stack is-pushed-mobile">
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
                  <FlexTableContextMenuAlt />
                </div>
              </div>

              <!--Table item-->
              <div class="flex-table-item">
                <div class="flex-table-cell is-checkbox">
                  <label class="checkbox">
                    <input type="checkbox" />
                    <span></span>
                  </label>
                </div>
                <div class="flex-table-cell is-media is-grow" data-th="">
                  <div class="v-avatar is-medium">
                    <span class="avatar is-fake is-info">
                      <span>LK</span>
                    </span>
                    <img
                      class="badge"
                      src="/images/icons/flags/united-states-of-america.svg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div>
                    <span class="item-name">Lindsey Kohl</span>
                    <span class="item-meta">
                      <span>Software Engineer</span>
                    </span>
                  </div>
                </div>
                <div class="flex-table-cell" data-th="Location">
                  <span class="light-text">San Francisco, US</span>
                </div>
                <div class="flex-table-cell" data-th="Industry">
                  <span class="light-text">Business</span>
                </div>
                <div class="flex-table-cell" data-th="Status">
                  <span class="tag is-rounded is-success">Online</span>
                </div>
                <div class="flex-table-cell" data-th="Relations">
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
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/19.jpg"
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
                  <FlexTableContextMenuAlt />
                </div>
              </div>

              <!--Table item-->
              <div class="flex-table-item">
                <div class="flex-table-cell is-checkbox">
                  <label class="checkbox">
                    <input type="checkbox" />
                    <span></span>
                  </label>
                </div>
                <div class="flex-table-cell is-media is-grow" data-th="">
                  <div class="v-avatar is-medium">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/18.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                    <img
                      class="badge"
                      src="/images/icons/flags/united-states-of-america.svg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div>
                    <span class="item-name">Esteban C.</span>
                    <span class="item-meta">
                      <span>UI/UX Designer</span>
                    </span>
                  </div>
                </div>
                <div class="flex-table-cell" data-th="Location">
                  <span class="light-text">Miami, FL</span>
                </div>
                <div class="flex-table-cell" data-th="Industry">
                  <span class="light-text">Finance</span>
                </div>
                <div class="flex-table-cell" data-th="Status">
                  <span class="tag is-danger is-rounded">Busy</span>
                </div>
                <div class="flex-table-cell" data-th="Relations">
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
                        src="/images/avatars/photos/12.jpg"
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
                  <FlexTableContextMenuAlt />
                </div>
              </div>

              <!--Table item-->
              <div class="flex-table-item">
                <div class="flex-table-cell is-checkbox">
                  <label class="checkbox">
                    <input type="checkbox" />
                    <span></span>
                  </label>
                </div>
                <div class="flex-table-cell is-media is-grow" data-th="">
                  <div class="v-avatar is-medium">
                    <span class="avatar is-fake is-danger">
                      <span>HM</span>
                    </span>
                    <img
                      class="badge"
                      src="/images/icons/flags/united-states-of-america.svg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div>
                    <span class="item-name">Helen Miller</span>
                    <span class="item-meta">
                      <span>Head of Marketing</span>
                    </span>
                  </div>
                </div>
                <div class="flex-table-cell" data-th="Location">
                  <span class="light-text">Boston, US</span>
                </div>
                <div class="flex-table-cell" data-th="Industry">
                  <span class="light-text">Marketing</span>
                </div>
                <div class="flex-table-cell" data-th="Status">
                  <span class="tag is-rounded">Offline</span>
                </div>
                <div class="flex-table-cell" data-th="Relations">
                  <div class="avatar-stack is-pushed-mobile">
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
                  </div>
                </div>
                <div class="flex-table-cell cell-end" data-th="Actions">
                  <FlexTableContextMenuAlt />
                </div>
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
