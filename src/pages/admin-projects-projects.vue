<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

useTitle('Projects projects - Admin - Vuero')
</script>

<template>
  <DefaultLayout>
    <LayoutsSidebar />
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-projects"
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
              <h1 class="title is-4">Projects</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner all-projects">
            <div class="projects-toolbar">
              <div class="control has-icon">
                <input class="input" placeholder="Search..." />
                <div class="form-icon">
                  <Icon icon="feather:search" />
                </div>
              </div>

              <div class="avatar-stack">
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/7.jpg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/9.jpg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/12.jpg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/8.jpg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/25.jpg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/22.jpg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
              </div>

              <a class="button h-button is-primary is-raised is-bold">
                <span>New Project</span>
              </a>
            </div>

            <h3 class="section-heading">Recently viewed</h3>

            <div class="columns is-multiline project-grid">
              <div class="column is-one-fifth">
                <a class="project-grid-item">
                  <img
                    class="project-avatar"
                    src="/@images/icons/logos/slicer.svg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                  <h3>The Slicer project</h3>
                  <p>Design project</p>
                  <progress
                    class="progress is-primary is-tiny"
                    value="31"
                    max="100"
                  >
                    31%
                  </progress>
                </a>
              </div>

              <div class="column is-one-fifth">
                <a class="project-grid-item">
                  <img
                    class="project-avatar"
                    src="/@images/icons/logos/metamovies.svg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                  <h3>Metamovies reworked</h3>
                  <p>Design project</p>
                  <progress
                    class="progress is-primary is-tiny"
                    value="84"
                    max="100"
                  >
                    84%
                  </progress>
                </a>
              </div>

              <div class="column is-one-fifth">
                <a class="project-grid-item">
                  <img
                    class="project-avatar"
                    src="/@images/illustrations/dashboards/flights/company1.svg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                  <h3>Supreme Flights app</h3>
                  <p>Software project</p>
                  <progress
                    class="progress is-primary is-tiny"
                    value="45"
                    max="100"
                  >
                    45%
                  </progress>
                </a>
              </div>

              <div class="column is-one-fifth">
                <a class="project-grid-item">
                  <img
                    class="project-avatar"
                    src="/@images/icons/logos/fastpizza.svg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                  <h3>Fastpizza delivery app</h3>
                  <p>Software project</p>
                  <progress
                    class="progress is-primary is-tiny"
                    value="90"
                    max="100"
                  >
                    90%
                  </progress>
                </a>
              </div>

              <div class="column is-one-fifth">
                <a class="project-grid-item">
                  <img
                    class="project-avatar"
                    src="/@images/icons/logos/drop.svg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                  <h3>Drop website redesign</h3>
                  <p>Design project</p>
                  <progress
                    class="progress is-primary is-tiny"
                    value="12"
                    max="100"
                  >
                    12%
                  </progress>
                </a>
              </div>
            </div>

            <div class="columns">
              <div class="column is-12">
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
                      <span class="tag is-solid is-rounded">Active</span>
                    </div>
                    <div class="flex-table-cell" data-th="Contacts">
                      <div class="avatar-stack is-pushed-mobile">
                        <div class="h-avatar is-small">
                          <img
                            class="avatar"
                            src="/@images/avatars/photos/7.jpg"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                        <div class="h-avatar is-small">
                          <span class="avatar is-fake is-info">
                            <span>JD</span>
                          </span>
                        </div>
                        <div class="h-avatar is-small">
                          <img
                            class="avatar"
                            src="/@images/avatars/photos/12.jpg"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                        <div class="h-avatar is-small">
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
                      <span class="tag is-solid is-rounded">New</span>
                    </div>
                    <div class="flex-table-cell" data-th="Contacts">
                      <div class="avatar-stack is-pushed-mobile">
                        <div class="h-avatar is-small">
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
                      <span class="tag is-solid is-rounded">Active</span>
                    </div>
                    <div class="flex-table-cell" data-th="Contacts">
                      <div class="avatar-stack is-pushed-mobile">
                        <div class="h-avatar is-small">
                          <span class="avatar is-fake is-success">
                            <span>BT</span>
                          </span>
                        </div>
                        <div class="h-avatar is-small">
                          <img
                            class="avatar"
                            src="/@images/avatars/photos/8.jpg"
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
                      <span class="tag is-rounded is-solid">Disabled</span>
                    </div>
                    <div class="flex-table-cell" data-th="Contacts">
                      <div class="avatar-stack is-pushed-mobile">
                        <div class="h-avatar is-small">
                          <img
                            class="avatar"
                            src="/@images/avatars/photos/13.jpg"
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
                      <span class="tag is-rounded is-solid">Suspended</span>
                    </div>
                    <div class="flex-table-cell" data-th="Contacts">
                      <div class="avatar-stack is-pushed-mobile">
                        <div class="h-avatar is-small">
                          <img
                            class="avatar"
                            src="/@images/avatars/photos/11.jpg"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                        <div class="h-avatar is-small">
                          <img
                            class="avatar"
                            src="/@images/avatars/photos/16.jpg"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                        <div class="h-avatar is-small">
                          <img
                            class="avatar"
                            src="/@images/avatars/photos/19.jpg"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
