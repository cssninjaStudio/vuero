<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import { ref } from 'vue'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

const activeTab = ref<'active' | 'inactive'>('active')

useTitle('List View 3 - WebApp - Vuero')
</script>

<template>
  <WebappLayout>
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-lists"
      class="view-wrapper is-webapp"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-page-title="List View"
      data-naver-offset="214"
      data-menu-item="#layouts-navbar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div
          class="page-content is-relative tabs-wrapper is-slider is-squared is-inverted"
        >
          <div class="page-title has-text-centered is-webapp">
            <div class="title-wrap">
              <h1 class="title is-4">List View</h1>
            </div>

            <Toolbar />
          </div>

          <div class="list-view-toolbar is-webapp is-reversed">
            <div class="control has-icon">
              <input
                class="input custom-text-filter"
                placeholder="Search..."
                data-filter-target=".list-view-item"
              />
              <div class="form-icon">
                <Icon icon="feather:search" />
              </div>
            </div>

            <div class="tabs-inner">
              <div class="tabs">
                <ul>
                  <li :class="[activeTab === 'active' && 'is-active']">
                    <a @click="activeTab = 'active'"><span>Active</span></a>
                  </li>
                  <li :class="[activeTab === 'inactive' && 'is-active']">
                    <a @click="activeTab = 'inactive'"><span>Inactive</span></a>
                  </li>
                  <li class="tab-naver"></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="page-content-inner is-webapp">
            <!--List-->
            <div class="list-view list-view-v3">
              <!--List Empty Search Placeholder -->
              <div
                class="page-placeholder custom-text-filter-placeholder is-hidden"
              >
                <div class="placeholder-content">
                  <img
                    class="light-image"
                    src="/@images/illustrations/placeholders/search-3.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/@images/illustrations/placeholders/search-3-dark.svg"
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

              <!--Active Tab-->
              <div
                id="active-items-tab"
                class="tab-content"
                :class="[activeTab === 'active' && 'is-active']"
              >
                <div class="list-view-inner">
                  <!--Item-->
                  <div class="list-view-item">
                    <div class="list-view-item-inner">
                      <img
                        class="avatar"
                        src="/@images/photo/demo/brands/airbnb.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <div class="meta-left">
                        <h3 data-filter-match>
                          Node JS Fullstack Developer wanted 👌
                        </h3>
                        <span>
                          <Icon icon="feather:map-pin" />
                          <span data-filter-match>San Diego</span>
                          <i class="fas fa-circle icon-separator"></i>
                          <Icon icon="feather:clock" />
                          <span data-filter-match>Full Time</span>
                          <i class="fas fa-circle icon-separator"></i>
                          <Icon icon="feather:check-circle" />
                          <span data-filter-match>3 Years Exp.</span>
                        </span>
                      </div>
                      <div class="meta-right">
                        <div class="buttons">
                          <a
                            class="button h-button is-primary is-outlined is-raised"
                            >Apply Now</a
                          >
                          <button
                            class="button is-light is-circle hint--bubble hint--primary hint--top"
                            data-hint="Save"
                          >
                            <span class="icon is-small">
                              <Icon icon="feather:bookmark" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--Item-->
                  <div class="list-view-item">
                    <div class="list-view-item-inner">
                      <img
                        class="avatar"
                        src="/@images/photo/demo/brands/hubspot.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <div class="meta-left">
                        <h3 data-filter-match>
                          Project Manager for React Native Project
                        </h3>
                        <span>
                          <Icon icon="feather:map-pin" />
                          <span data-filter-match>Los Angeles</span>
                          <i class="fas fa-circle icon-separator"></i>
                          <Icon icon="feather:clock" />
                          <span data-filter-match>Part Time</span>
                          <i class="fas fa-circle icon-separator"></i>
                          <Icon icon="feather:check-circle" />
                          <span data-filter-match>2 Years Exp.</span>
                        </span>
                      </div>
                      <div class="meta-right">
                        <div class="buttons">
                          <a
                            class="button h-button is-primary is-outlined is-raised"
                            >Apply Now</a
                          >
                          <button
                            class="button is-light is-circle hint--bubble hint--primary hint--top"
                            data-hint="Save"
                          >
                            <span class="icon is-small">
                              <Icon icon="feather:bookmark" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--Item-->
                  <div class="list-view-item">
                    <div class="list-view-item-inner">
                      <img
                        class="avatar"
                        src="/@images/photo/demo/brands/slack.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <div class="meta-left">
                        <h3 data-filter-match>
                          UI/UX Designer to Consolidate the UX Team 💪💪
                        </h3>
                        <span>
                          <Icon icon="feather:map-pin" />
                          <span data-filter-match>Los Angeles</span>
                          <i class="fas fa-circle icon-separator"></i>
                          <Icon icon="feather:clock" />
                          <span data-filter-match>Full Time</span>
                          <i class="fas fa-circle icon-separator"></i>
                          <Icon icon="feather:check-circle" />
                          <span data-filter-match>3 Years Exp.</span>
                        </span>
                      </div>
                      <div class="meta-right">
                        <div class="buttons">
                          <a
                            class="button h-button is-primary is-outlined is-raised"
                            >Apply Now</a
                          >
                          <button
                            class="button is-light is-circle hint--bubble hint--primary hint--top"
                            data-hint="Save"
                          >
                            <span class="icon is-small">
                              <Icon icon="feather:bookmark" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--Item-->
                  <div class="list-view-item">
                    <div class="list-view-item-inner">
                      <img
                        class="avatar"
                        src="/@images/photo/demo/brands/gitlab.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <div class="meta-left">
                        <h3 data-filter-match>IT Team Senior DevOps Manager</h3>
                        <span>
                          <Icon icon="feather:map-pin" />
                          <span data-filter-match>Los Angeles</span>
                          <i class="fas fa-circle icon-separator"></i>
                          <Icon icon="feather:clock" />
                          <span data-filter-match>Full Time</span>
                          <i class="fas fa-circle icon-separator"></i>
                          <Icon icon="feather:check-circle" />
                          <span data-filter-match>10 Years Exp.</span>
                        </span>
                      </div>
                      <div class="meta-right">
                        <div class="buttons">
                          <a
                            class="button h-button is-primary is-outlined is-raised"
                            >Apply Now</a
                          >
                          <button
                            class="button is-light is-circle hint--bubble hint--primary hint--top"
                            data-hint="Save"
                          >
                            <span class="icon is-small">
                              <Icon icon="feather:bookmark" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--Item-->
                  <div class="list-view-item">
                    <div class="list-view-item-inner">
                      <img
                        class="avatar"
                        src="/@images/photo/demo/brands/google.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <div class="meta-left">
                        <h3 data-filter-match>
                          Fullstack Developer With Solid MongoDB Skills
                        </h3>
                        <span>
                          <Icon icon="feather:map-pin" />
                          <span data-filter-match>San Francisco</span>
                          <i class="fas fa-circle icon-separator"></i>
                          <Icon icon="feather:clock" />
                          <span data-filter-match>Full Time</span>
                          <i class="fas fa-circle icon-separator"></i>
                          <Icon icon="feather:check-circle" />
                          <span data-filter-match>5 Years Exp.</span>
                        </span>
                      </div>
                      <div class="meta-right">
                        <div class="buttons">
                          <a
                            class="button h-button is-primary is-outlined is-raised"
                            >Apply Now</a
                          >
                          <button
                            class="button is-light is-circle hint--bubble hint--primary hint--top"
                            data-hint="Save"
                          >
                            <span class="icon is-small">
                              <Icon icon="feather:bookmark" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--Item-->
                  <div class="list-view-item">
                    <div class="list-view-item-inner">
                      <img
                        class="avatar"
                        src="/@images/photo/demo/brands/facebook.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <div class="meta-left">
                        <h3 data-filter-match>
                          Fullstack Javascript and Node JS Developer
                        </h3>
                        <span>
                          <Icon icon="feather:map-pin" />
                          <span data-filter-match>Pasadena</span>
                          <i class="fas fa-circle icon-separator"></i>
                          <Icon icon="feather:clock" />
                          <span data-filter-match>Full Time</span>
                          <i class="fas fa-circle icon-separator"></i>
                          <Icon icon="feather:check-circle" />
                          <span data-filter-match>4 Years Exp.</span>
                        </span>
                      </div>
                      <div class="meta-right">
                        <div class="buttons">
                          <a
                            class="button h-button is-primary is-outlined is-raised"
                            >Apply Now</a
                          >
                          <button
                            class="button is-light is-circle hint--bubble hint--primary hint--top"
                            data-hint="Save"
                          >
                            <span class="icon is-small">
                              <Icon icon="feather:bookmark" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--Item-->
                  <div class="list-view-item">
                    <div class="list-view-item-inner">
                      <img
                        class="avatar"
                        src="/@images/photo/demo/brands/tnw.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <div class="meta-left">
                        <h3 data-filter-match>
                          Product Owner for React Native Project
                        </h3>
                        <span>
                          <Icon icon="feather:map-pin" />
                          <span data-filter-match>Los Angeles</span>
                          <i class="fas fa-circle icon-separator"></i>
                          <Icon icon="feather:clock" />
                          <span data-filter-match>Full Time</span>
                          <i class="fas fa-circle icon-separator"></i>
                          <Icon icon="feather:check-circle" />
                          <span data-filter-match>2 Years Exp.</span>
                        </span>
                      </div>
                      <div class="meta-right">
                        <div class="buttons">
                          <a
                            class="button h-button is-primary is-outlined is-raised"
                            >Apply Now</a
                          >
                          <button
                            class="button is-light is-circle hint--bubble hint--primary hint--top"
                            data-hint="Save"
                          >
                            <span class="icon is-small">
                              <Icon icon="feather:bookmark" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--Item-->
                  <div class="list-view-item">
                    <div class="list-view-item-inner">
                      <img
                        class="avatar"
                        src="/@images/photo/demo/brands/dribbble.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <div class="meta-left">
                        <h3 data-filter-match>
                          UI/UX Designer With Html5 and Sass Skills 👍
                        </h3>
                        <span>
                          <Icon icon="feather:map-pin" />
                          <span data-filter-match>Los Angeles</span>
                          <i class="fas fa-circle icon-separator"></i>
                          <Icon icon="feather:clock" />
                          <span data-filter-match>Full Time</span>
                          <i class="fas fa-circle icon-separator"></i>
                          <Icon icon="feather:check-circle" />
                          <span data-filter-match>4 Years Exp.</span>
                        </span>
                      </div>
                      <div class="meta-right">
                        <div class="buttons">
                          <a
                            class="button h-button is-primary is-outlined is-raised"
                            >Apply Now</a
                          >
                          <button
                            class="button is-light is-circle hint--bubble hint--primary hint--top"
                            data-hint="Save"
                          >
                            <span class="icon is-small">
                              <Icon icon="feather:bookmark" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--Item-->
                  <div class="list-view-item">
                    <div class="list-view-item-inner">
                      <img
                        class="avatar"
                        src="/@images/photo/demo/brands/atlassian.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <div class="meta-left">
                        <h3 data-filter-match>
                          Experienced Senior UX Team Manager
                        </h3>
                        <span>
                          <Icon icon="feather:map-pin" />
                          <span data-filter-match>Melbourne</span>
                          <i class="fas fa-circle icon-separator"></i>
                          <Icon icon="feather:clock" />
                          <span data-filter-match>Full Time</span>
                          <i class="fas fa-circle icon-separator"></i>
                          <Icon icon="feather:check-circle" />
                          <span data-filter-match>10 Years Exp.</span>
                        </span>
                      </div>
                      <div class="meta-right">
                        <div class="buttons">
                          <a
                            class="button h-button is-primary is-outlined is-raised"
                            >Apply Now</a
                          >
                          <button
                            class="button is-light is-circle hint--bubble hint--primary hint--top"
                            data-hint="Save"
                          >
                            <span class="icon is-small">
                              <Icon icon="feather:bookmark" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--Item-->
                  <div class="list-view-item">
                    <div class="list-view-item-inner">
                      <img
                        class="avatar"
                        src="/@images/photo/demo/brands/github.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <div class="meta-left">
                        <h3 data-filter-match>
                          Fullstack Javascript and Node JS Developer
                        </h3>
                        <span>
                          <Icon icon="feather:map-pin" />
                          <span data-filter-match>Los Angeles</span>
                          <i class="fas fa-circle icon-separator"></i>
                          <Icon icon="feather:clock" />
                          <span data-filter-match>Part Time</span>
                          <i class="fas fa-circle icon-separator"></i>
                          <Icon icon="feather:check-circle" />
                          <span data-filter-match>1 Year Exp.</span>
                        </span>
                      </div>
                      <div class="meta-right">
                        <div class="buttons">
                          <a
                            class="button h-button is-primary is-outlined is-raised"
                            >Apply Now</a
                          >
                          <button
                            class="button is-light is-circle hint--bubble hint--primary hint--top"
                            data-hint="Save"
                          >
                            <span class="icon is-small">
                              <Icon icon="feather:bookmark" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!--Infinite Loader-->
                <div class="infinite-scroll-loader" data-filter-hide>
                  <div class="infinite-scroll-loader-inner">
                    <div class="loader is-loading"></div>
                    <div class="loader-end is-hidden">
                      <span>No more items to load</span>
                    </div>
                  </div>
                </div>
              </div>

              <!--Inactive Tab-->
              <div
                id="inactive-items-tab"
                class="tab-content"
                :class="[activeTab === 'inactive' && 'is-active']"
              >
                <div class="list-view-inner">
                  <!--Empty placeholder-->
                  <div
                    class="page-placeholder custom-text-filter-placeholder"
                    data-filter-hide
                  >
                    <div class="placeholder-content">
                      <img
                        class="light-image"
                        src="/@images/illustrations/placeholders/thinking-canvas.svg"
                        alt=""
                      />
                      <img
                        class="dark-image"
                        src="/@images/illustrations/placeholders/thinking-canvas-dark.svg"
                        alt=""
                      />
                      <h3>No saved jobs.</h3>
                      <p class="">
                        Looks like you don't have any saved jobs for the moment.
                        It's also possible that some of your saved items expired
                      </p>
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
