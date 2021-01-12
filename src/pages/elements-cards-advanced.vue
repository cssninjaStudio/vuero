<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import { onMounted } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

onMounted(() => {
  activeSidebar.value = 'elements'
})

useTitle('Elements - Cards Advanced - Vuero')
</script>

<template>
  <DefaultLayout>
    <ElementsSidebar />
    <ElementsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="huro-demo"
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
              <h1 class="title is-4">Advanced Cards</h1>
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
                  <RouterLink :to="{ name: 'elements-hub' }">
                    <span>Elements</span>
                  </RouterLink>
                </li>
                <li>
                  <a>
                    <span>Advanced Cards</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns is-multiline">
              <div class="column is-12">
                <!--Advanced Cards-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Advanced Cards</h3>
                    <p>
                      All Vuero basic cards have an advanced version that
                      features a card header, body, and footer, to display any
                      type of content. Card header and footer have both left and
                      right subsection where you can insert your UI elements.
                    </p>
                  </div>
                </div>

                <div class="columns is-multiline">
                  <!--Card-->
                  <div class="column is-4">
                    <div class="s-card-advanced">
                      <div class="card-head">
                        <div class="left">
                          <div class="media-flex-center no-margin">
                            <div class="h-avatar">
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
                            <div class="flex-meta">
                              <span>Greta K.</span>
                              <span>Sales Manager</span>
                            </div>
                          </div>
                        </div>
                        <div class="right">
                          <div class="avatar-stack">
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/12.jpg"
                                alt=""
                                data-user-popover="2"
                                data-target="webuiPopover19"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/22.jpg"
                                alt=""
                                data-user-popover="5"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/40.jpg"
                                alt=""
                                data-user-popover="11"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                            <div class="h-avatar is-small">
                              <span class="avatar is-more">
                                <span class="inner">
                                  <span>+5</span>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card-body">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quibusnam praeteritis? At multis se probavit.
                          Quoniam, si dis placet, ab Epicuro loqui discimus. Et
                          ille ridens.
                        </p>
                      </div>
                      <div class="card-foot">
                        <div class="left">
                          <div class="tags">
                            <span class="tag is-rounded is-solid">Sales</span>
                            <span class="tag is-rounded is-solid"
                              >Business</span
                            >
                          </div>
                        </div>
                        <div class="right">
                          <button class="button is-primary is-raised">
                            Action
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--Card-->
                  <div class="column is-4">
                    <div class="r-card-advanced">
                      <div class="card-head">
                        <div class="left">
                          <div class="tags">
                            <span class="tag is-rounded is-solid">Sales</span>
                            <span class="tag is-rounded is-solid"
                              >Business</span
                            >
                          </div>
                        </div>
                        <div class="right">
                          <button class="button is-primary is-raised">
                            Action
                          </button>
                        </div>
                      </div>
                      <div class="card-body">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quibusnam praeteritis? At multis se probavit.
                          Quoniam, si dis placet, ab Epicuro loqui discimus. Et
                          ille ridens.
                        </p>
                      </div>
                      <div class="card-foot">
                        <div class="left">
                          <div class="media-flex-center no-margin">
                            <div class="h-avatar">
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
                            <div class="flex-meta">
                              <span>Greta K.</span>
                              <span>Sales Manager</span>
                            </div>
                          </div>
                        </div>
                        <div class="right">
                          <div class="avatar-stack">
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/12.jpg"
                                alt=""
                                data-user-popover="2"
                                data-target="webuiPopover19"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/22.jpg"
                                alt=""
                                data-user-popover="5"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/40.jpg"
                                alt=""
                                data-user-popover="11"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                            <div class="h-avatar is-small">
                              <span class="avatar is-more">
                                <span class="inner">
                                  <span>+5</span>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--Card-->
                  <div class="column is-4">
                    <div class="l-card-advanced">
                      <div class="card-head">
                        <div class="left">
                          <h3 class="title is-6">A Card Title</h3>
                        </div>
                        <div class="right">
                          <UserCardDropdown />
                        </div>
                      </div>
                      <div class="card-body">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quibusnam praeteritis? At multis se probavit.
                          Quoniam, si dis placet, ab Epicuro loqui discimus. Et
                          ille ridens.
                        </p>
                      </div>
                      <div class="card-foot">
                        <div class="left">
                          <div class="media-flex-center no-margin">
                            <div class="h-avatar">
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
                            <div class="flex-meta">
                              <span>Greta K.</span>
                              <span>Sales Manager</span>
                            </div>
                          </div>
                        </div>
                        <div class="right">
                          <button class="button is-primary is-raised">
                            Action
                          </button>
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
    </div>
  </DefaultLayout>
</template>
