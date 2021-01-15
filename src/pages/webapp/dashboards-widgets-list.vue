<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

useTitle('Dashboards Widgets List - WebApp - Vuero')
</script>

<template>
  <WebappLayout>
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-widgets"
      class="view-wrapper is-webapp"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-page-title="Widgets"
      data-naver-offset="150"
      data-menu-item="#dashboards-navbar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered is-webapp">
            <div class="title-wrap">
              <h1 class="title is-4">Widgets</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner">
            <!--List Widgets-->
            <div class="columns is-multiline has-webapp-spacing">
              <!--List Widget V1a-->
              <div class="column is-4">
                <div class="list-widget list-widget-v1 is-straight">
                  <div class="widget-head">
                    <h3 class="dark-inverted">User Progress</h3>
                    <WidgetDropdown />
                  </div>

                  <div class="inner-list">
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="h-avatar">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/31.jpg"
                          alt=""
                          data-user-popover="27"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Yasseene Amzi</a>
                        <span>Business Analyst</span>
                      </div>
                      <div class="flex-end">
                        <a href="#" class="go-icon is-up" data-content="+18%">
                          <Icon icon="feather:chevron-right" />
                        </a>
                      </div>
                    </div>
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="h-avatar">
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
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Mary Lebowski</a>
                        <span>Project Manager</span>
                      </div>
                      <div class="flex-end">
                        <a href="#" class="go-icon is-up" data-content="+22%">
                          <Icon icon="feather:chevron-right" />
                        </a>
                      </div>
                    </div>
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="h-avatar">
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
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Erik Kovalsky</a>
                        <span>Product Manager</span>
                      </div>
                      <div class="flex-end">
                        <a href="#" class="go-icon is-down" data-content="-12%">
                          <Icon icon="feather:chevron-right" />
                        </a>
                      </div>
                    </div>
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="h-avatar">
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
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Jonathan Krugger</a>
                        <span>Product Manager</span>
                      </div>
                      <div class="flex-end">
                        <a href="#" class="go-icon is-up" data-content="+32%">
                          <Icon icon="feather:chevron-right" />
                        </a>
                      </div>
                    </div>
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="h-avatar">
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
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Elizabeth Fisher</a>
                        <span>Mobile Developer</span>
                      </div>
                      <div class="flex-end">
                        <a href="#" class="go-icon is-down" data-content="-4%">
                          <Icon icon="feather:chevron-right" />
                        </a>
                      </div>
                    </div>
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="h-avatar">
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
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Tara Svenson</a>
                        <span>UI/UX Designer</span>
                      </div>
                      <div class="flex-end">
                        <a href="#" class="go-icon is-up" data-content="+32%">
                          <Icon icon="feather:chevron-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!--List Widget V1b-->
              <div class="column is-4">
                <div class="list-widget list-widget-v1 is-straight">
                  <div class="widget-head">
                    <h3 class="dark-inverted">User Progress</h3>
                    <WidgetDropdown />
                  </div>

                  <div class="inner-list">
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="h-avatar">
                        <img
                          class="avatar is-squared"
                          src="/@images/avatars/photos/31.jpg"
                          alt=""
                          data-user-popover="27"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Yasseene Amzi</a>
                        <span>Business Analyst</span>
                      </div>
                      <div class="flex-end">
                        <a
                          href="#"
                          class="go-icon is-squared is-up"
                          data-content="+18%"
                        >
                          <Icon icon="feather:chevron-right" />
                        </a>
                      </div>
                    </div>
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="h-avatar">
                        <img
                          class="avatar is-squared"
                          src="/@images/avatars/photos/5.jpg"
                          alt=""
                          data-user-popover="9"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Mary Lebowski</a>
                        <span>Project Manager</span>
                      </div>
                      <div class="flex-end">
                        <a
                          href="#"
                          class="go-icon is-squared is-up"
                          data-content="+22%"
                        >
                          <Icon icon="feather:chevron-right" />
                        </a>
                      </div>
                    </div>
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="h-avatar">
                        <img
                          class="avatar is-squared"
                          src="/@images/avatars/photos/8.jpg"
                          alt=""
                          data-user-popover="3"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Erik Kovalsky</a>
                        <span>Product Manager</span>
                      </div>
                      <div class="flex-end">
                        <a
                          href="#"
                          class="go-icon is-squared is-down"
                          data-content="-12%"
                        >
                          <Icon icon="feather:chevron-right" />
                        </a>
                      </div>
                    </div>
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="h-avatar">
                        <img
                          class="avatar is-squared"
                          src="/@images/avatars/photos/32.jpg"
                          alt=""
                          data-user-popover="28"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Jonathan Krugger</a>
                        <span>Product Manager</span>
                      </div>
                      <div class="flex-end">
                        <a
                          href="#"
                          class="go-icon is-squared is-up"
                          data-content="+32%"
                        >
                          <Icon icon="feather:chevron-right" />
                        </a>
                      </div>
                    </div>
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="h-avatar">
                        <img
                          class="avatar is-squared"
                          src="/@images/avatars/photos/21.jpg"
                          alt=""
                          data-user-popover="19"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Elizabeth Fisher</a>
                        <span>Mobile Developer</span>
                      </div>
                      <div class="flex-end">
                        <a
                          href="#"
                          class="go-icon is-squared is-down"
                          data-content="-4%"
                        >
                          <Icon icon="feather:chevron-right" />
                        </a>
                      </div>
                    </div>
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="h-avatar">
                        <img
                          class="avatar is-squared"
                          src="/@images/avatars/photos/13.jpg"
                          alt=""
                          data-user-popover="6"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Tara Svenson</a>
                        <span>UI/UX Designer</span>
                      </div>
                      <div class="flex-end">
                        <a
                          href="#"
                          class="go-icon is-squared is-up"
                          data-content="+32%"
                        >
                          <Icon icon="feather:chevron-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!--List Widget V2-->
              <div class="column is-4">
                <div
                  class="list-widget list-widget-v2 tabbed-widget is-straight"
                >
                  <div class="widget-head">
                    <h3 class="dark-inverted">Files</h3>
                    <div class="tabbed-controls">
                      <a class="tabbed-control is-active">
                        <span>Recent</span>
                      </a>
                      <a class="tabbed-control">
                        <span>Popular</span>
                      </a>
                      <div class="tabbed-naver"></div>
                    </div>
                  </div>

                  <div class="inner-list-wrapper is-active">
                    <div class="inner-list">
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <img
                          class="image-icon"
                          src="/@images/icons/files/zip-format.svg"
                          alt=""
                        />
                        <div class="flex-meta is-light">
                          <a href="#">theme.zip</a>
                          <span>Zipped folder</span>
                        </div>
                        <div class="flex-end">
                          <FileTileDropdown />
                        </div>
                      </div>
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <img
                          class="image-icon"
                          src="/@images/icons/files/doc-2.svg"
                          alt=""
                        />
                        <div class="flex-meta is-light">
                          <a href="#">project_outline.doc</a>
                          <span>MS Word file</span>
                        </div>
                        <div class="flex-end">
                          <FileTileDropdown />
                        </div>
                      </div>
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <img
                          class="image-icon"
                          src="/@images/icons/files/pdf.svg"
                          alt=""
                        />
                        <div class="flex-meta is-light">
                          <a href="#">requirements_v3.pdf</a>
                          <span>PDF file</span>
                        </div>
                        <div class="flex-end">
                          <FileTileDropdown />
                        </div>
                      </div>
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <img
                          class="image-icon"
                          src="/@images/icons/files/sheet.svg"
                          alt=""
                        />
                        <div class="flex-meta is-light">
                          <a href="#">project_budget.xsls</a>
                          <span>MS Excel file</span>
                        </div>
                        <div class="flex-end">
                          <FileTileDropdown />
                        </div>
                      </div>
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <img
                          class="image-icon"
                          src="/@images/icons/files/ai.svg"
                          alt=""
                        />
                        <div class="flex-meta is-light">
                          <a href="#">wireframes.ai</a>
                          <span>Illustrator file</span>
                        </div>
                        <div class="flex-end">
                          <FileTileDropdown />
                        </div>
                      </div>
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <img
                          class="image-icon"
                          src="/@images/icons/files/sheet.svg"
                          alt=""
                        />
                        <div class="flex-meta is-light">
                          <a href="#">invoice_recap.xsls</a>
                          <span>MS Excel file</span>
                        </div>
                        <div class="flex-end">
                          <FileTileDropdown />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="inner-list-wrapper">
                    <div class="inner-list">
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <img
                          class="image-icon"
                          src="/@images/icons/files/ai.svg"
                          alt=""
                        />
                        <div class="flex-meta is-light">
                          <a href="#">header.ai</a>
                          <span>Illustrator file</span>
                        </div>
                        <div class="flex-end">
                          <FileTileDropdown />
                        </div>
                      </div>
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <img
                          class="image-icon"
                          src="/@images/icons/files/ai.svg"
                          alt=""
                        />
                        <div class="flex-meta is-light">
                          <a href="#">section.ai</a>
                          <span>Illustrator file</span>
                        </div>
                        <div class="flex-end">
                          <FileTileDropdown />
                        </div>
                      </div>
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <img
                          class="image-icon"
                          src="/@images/icons/files/ai.svg"
                          alt=""
                        />
                        <div class="flex-meta is-light">
                          <a href="#">footer.ai</a>
                          <span>Illustrator file</span>
                        </div>
                        <div class="flex-end">
                          <FileTileDropdown />
                        </div>
                      </div>
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <img
                          class="image-icon"
                          src="/@images/icons/files/zip-format.svg"
                          alt=""
                        />
                        <div class="flex-meta is-light">
                          <a href="#">theme_assets.zip</a>
                          <span>Zipped folder</span>
                        </div>
                        <div class="flex-end">
                          <FileTileDropdown />
                        </div>
                      </div>
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <img
                          class="image-icon"
                          src="/@images/icons/files/doc-2.svg"
                          alt=""
                        />
                        <div class="flex-meta is-light">
                          <a href="#">team_structure.doc</a>
                          <span>MS Word file</span>
                        </div>
                        <div class="flex-end">
                          <FileTileDropdown />
                        </div>
                      </div>
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <img
                          class="image-icon"
                          src="/@images/icons/files/doc-2.svg"
                          alt=""
                        />
                        <div class="flex-meta is-light">
                          <a href="#">meeting_notes.doc</a>
                          <span>MS Word file</span>
                        </div>
                        <div class="flex-end">
                          <FileTileDropdown />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!--List Widget V1a-->
              <div class="column is-4">
                <div class="list-widget list-widget-v1 is-straight">
                  <div class="widget-head">
                    <h3 class="dark-inverted">Todo</h3>
                    <WidgetDropdown />
                  </div>

                  <div class="inner-list">
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="animated-checkbox">
                        <input type="checkbox" />
                        <div class="checkmark-wrap">
                          <div class="shadow-circle"></div>
                          <svg
                            class="checkmark"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 52 52"
                          >
                            <circle
                              class="checkmark-circle"
                              cx="26"
                              cy="26"
                              r="25"
                              fill="none"
                            />
                            <path
                              class="checkmark-check"
                              fill="none"
                              d="M14.1 27.2l7.1 7.2 16.7-16.8"
                            />
                          </svg>
                        </div>
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Call Mike R.</a>
                        <span>at 8:30am</span>
                      </div>
                      <div class="flex-end">
                        <span class="tag is-rounded">Pending</span>
                      </div>
                    </div>
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="animated-checkbox is-checked">
                        <input type="checkbox" />
                        <div class="checkmark-wrap">
                          <div class="shadow-circle"></div>
                          <svg
                            class="checkmark"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 52 52"
                          >
                            <circle
                              class="checkmark-circle"
                              cx="26"
                              cy="26"
                              r="25"
                              fill="none"
                            />
                            <path
                              class="checkmark-check"
                              fill="none"
                              d="M14.1 27.2l7.1 7.2 16.7-16.8"
                            />
                          </svg>
                        </div>
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Finish document review</a>
                        <span>at 11:30am</span>
                      </div>
                      <div class="flex-end">
                        <span class="tag is-rounded">Pending</span>
                      </div>
                    </div>
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="animated-checkbox">
                        <input type="checkbox" />
                        <div class="checkmark-wrap">
                          <div class="shadow-circle"></div>
                          <svg
                            class="checkmark"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 52 52"
                          >
                            <circle
                              class="checkmark-circle"
                              cx="26"
                              cy="26"
                              r="25"
                              fill="none"
                            />
                            <path
                              class="checkmark-check"
                              fill="none"
                              d="M14.1 27.2l7.1 7.2 16.7-16.8"
                            />
                          </svg>
                        </div>
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Project Meeting</a>
                        <span>at 12:00pm</span>
                      </div>
                      <div class="flex-end">
                        <span class="tag is-rounded">Pending</span>
                      </div>
                    </div>
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="animated-checkbox">
                        <input type="checkbox" />
                        <div class="checkmark-wrap">
                          <div class="shadow-circle"></div>
                          <svg
                            class="checkmark"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 52 52"
                          >
                            <circle
                              class="checkmark-circle"
                              cx="26"
                              cy="26"
                              r="25"
                              fill="none"
                            />
                            <path
                              class="checkmark-check"
                              fill="none"
                              d="M14.1 27.2l7.1 7.2 16.7-16.8"
                            />
                          </svg>
                        </div>
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Meet with Kacey M.</a>
                        <span>at 3:00pm</span>
                      </div>
                      <div class="flex-end">
                        <span class="tag is-rounded">Pending</span>
                      </div>
                    </div>
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="animated-checkbox">
                        <input type="checkbox" />
                        <div class="checkmark-wrap">
                          <div class="shadow-circle"></div>
                          <svg
                            class="checkmark"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 52 52"
                          >
                            <circle
                              class="checkmark-circle"
                              cx="26"
                              cy="26"
                              r="25"
                              fill="none"
                            />
                            <path
                              class="checkmark-check"
                              fill="none"
                              d="M14.1 27.2l7.1 7.2 16.7-16.8"
                            />
                          </svg>
                        </div>
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Review final draft</a>
                        <span>at 6:00pm</span>
                      </div>
                      <div class="flex-end">
                        <span class="tag is-rounded">Pending</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!--List Widget V1a-->
              <div class="column is-4">
                <div class="list-widget list-widget-v1 is-straight">
                  <div class="widget-head">
                    <h3 class="dark-inverted">Todo</h3>
                    <WidgetDropdown />
                  </div>

                  <div class="inner-list">
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="animated-checkbox is-purple is-checked">
                        <input type="checkbox" />
                        <div class="checkmark-wrap">
                          <div class="shadow-circle"></div>
                          <svg
                            class="checkmark"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 52 52"
                          >
                            <circle
                              class="checkmark-circle"
                              cx="26"
                              cy="26"
                              r="25"
                              fill="none"
                            />
                            <path
                              class="checkmark-check"
                              fill="none"
                              d="M14.1 27.2l7.1 7.2 16.7-16.8"
                            />
                          </svg>
                        </div>
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Call Mike R.</a>
                        <span>at 8:30am</span>
                      </div>
                      <div class="flex-end">
                        <span class="tag is-rounded">Pending</span>
                      </div>
                    </div>
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="animated-checkbox is-info is-checked">
                        <input type="checkbox" />
                        <div class="checkmark-wrap">
                          <div class="shadow-circle"></div>
                          <svg
                            class="checkmark"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 52 52"
                          >
                            <circle
                              class="checkmark-circle"
                              cx="26"
                              cy="26"
                              r="25"
                              fill="none"
                            />
                            <path
                              class="checkmark-check"
                              fill="none"
                              d="M14.1 27.2l7.1 7.2 16.7-16.8"
                            />
                          </svg>
                        </div>
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Finish document review</a>
                        <span>at 11:30am</span>
                      </div>
                      <div class="flex-end">
                        <span class="tag is-rounded">Pending</span>
                      </div>
                    </div>
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="animated-checkbox is-success is-checked">
                        <input type="checkbox" />
                        <div class="checkmark-wrap">
                          <div class="shadow-circle"></div>
                          <svg
                            class="checkmark"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 52 52"
                          >
                            <circle
                              class="checkmark-circle"
                              cx="26"
                              cy="26"
                              r="25"
                              fill="none"
                            />
                            <path
                              class="checkmark-check"
                              fill="none"
                              d="M14.1 27.2l7.1 7.2 16.7-16.8"
                            />
                          </svg>
                        </div>
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Project Meeting</a>
                        <span>at 12:00pm</span>
                      </div>
                      <div class="flex-end">
                        <span class="tag is-rounded">Pending</span>
                      </div>
                    </div>
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="animated-checkbox is-warning is-checked">
                        <input type="checkbox" />
                        <div class="checkmark-wrap">
                          <div class="shadow-circle"></div>
                          <svg
                            class="checkmark"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 52 52"
                          >
                            <circle
                              class="checkmark-circle"
                              cx="26"
                              cy="26"
                              r="25"
                              fill="none"
                            />
                            <path
                              class="checkmark-check"
                              fill="none"
                              d="M14.1 27.2l7.1 7.2 16.7-16.8"
                            />
                          </svg>
                        </div>
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Meet with Kacey M.</a>
                        <span>at 3:00pm</span>
                      </div>
                      <div class="flex-end">
                        <span class="tag is-rounded">Pending</span>
                      </div>
                    </div>
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="animated-checkbox is-danger is-checked">
                        <input type="checkbox" />
                        <div class="checkmark-wrap">
                          <div class="shadow-circle"></div>
                          <svg
                            class="checkmark"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 52 52"
                          >
                            <circle
                              class="checkmark-circle"
                              cx="26"
                              cy="26"
                              r="25"
                              fill="none"
                            />
                            <path
                              class="checkmark-check"
                              fill="none"
                              d="M14.1 27.2l7.1 7.2 16.7-16.8"
                            />
                          </svg>
                        </div>
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Review final draft</a>
                        <span>at 6:00pm</span>
                      </div>
                      <div class="flex-end">
                        <span class="tag is-rounded">Pending</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!--List Widget V2-->
              <div class="column is-4">
                <div
                  class="list-widget list-widget-v2 tabbed-widget is-straight"
                >
                  <div class="widget-head">
                    <h3 class="dark-inverted">Todo</h3>
                    <div class="tabbed-controls">
                      <a class="tabbed-control is-active">
                        <span>All</span>
                      </a>
                      <a class="tabbed-control">
                        <span>Mine</span>
                      </a>
                      <div class="tabbed-naver"></div>
                    </div>
                  </div>

                  <div class="inner-list-wrapper is-active">
                    <div class="inner-list">
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <div class="animated-checkbox">
                          <input type="checkbox" />
                          <div class="checkmark-wrap">
                            <div class="shadow-circle"></div>
                            <svg
                              class="checkmark"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 52 52"
                            >
                              <circle
                                class="checkmark-circle"
                                cx="26"
                                cy="26"
                                r="25"
                                fill="none"
                              />
                              <path
                                class="checkmark-check"
                                fill="none"
                                d="M14.1 27.2l7.1 7.2 16.7-16.8"
                              />
                            </svg>
                          </div>
                        </div>
                        <div class="flex-meta is-light">
                          <a href="#">Review Anna's report</a>
                          <span>at 9:45am</span>
                        </div>
                        <div class="flex-end">
                          <span class="tag is-rounded">Pending</span>
                        </div>
                      </div>
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <div class="animated-checkbox is-checked">
                          <input type="checkbox" />
                          <div class="checkmark-wrap">
                            <div class="shadow-circle"></div>
                            <svg
                              class="checkmark"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 52 52"
                            >
                              <circle
                                class="checkmark-circle"
                                cx="26"
                                cy="26"
                                r="25"
                                fill="none"
                              />
                              <path
                                class="checkmark-check"
                                fill="none"
                                d="M14.1 27.2l7.1 7.2 16.7-16.8"
                              />
                            </svg>
                          </div>
                        </div>
                        <div class="flex-meta is-light">
                          <a href="#">Finish document review</a>
                          <span>at 11:30am</span>
                        </div>
                        <div class="flex-end">
                          <span class="tag is-rounded">Pending</span>
                        </div>
                      </div>
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <div class="animated-checkbox is-checked">
                          <input type="checkbox" />
                          <div class="checkmark-wrap">
                            <div class="shadow-circle"></div>
                            <svg
                              class="checkmark"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 52 52"
                            >
                              <circle
                                class="checkmark-circle"
                                cx="26"
                                cy="26"
                                r="25"
                                fill="none"
                              />
                              <path
                                class="checkmark-check"
                                fill="none"
                                d="M14.1 27.2l7.1 7.2 16.7-16.8"
                              />
                            </svg>
                          </div>
                        </div>
                        <div class="flex-meta is-light">
                          <a href="#">Project Meeting</a>
                          <span>at 12:00pm</span>
                        </div>
                        <div class="flex-end">
                          <span class="tag is-rounded">Pending</span>
                        </div>
                      </div>
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <div class="animated-checkbox">
                          <input type="checkbox" />
                          <div class="checkmark-wrap">
                            <div class="shadow-circle"></div>
                            <svg
                              class="checkmark"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 52 52"
                            >
                              <circle
                                class="checkmark-circle"
                                cx="26"
                                cy="26"
                                r="25"
                                fill="none"
                              />
                              <path
                                class="checkmark-check"
                                fill="none"
                                d="M14.1 27.2l7.1 7.2 16.7-16.8"
                              />
                            </svg>
                          </div>
                        </div>
                        <div class="flex-meta is-light">
                          <a href="#">Meet with Kacey M.</a>
                          <span>at 3:00pm</span>
                        </div>
                        <div class="flex-end">
                          <span class="tag is-rounded">Pending</span>
                        </div>
                      </div>
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <div class="animated-checkbox">
                          <input type="checkbox" />
                          <div class="checkmark-wrap">
                            <div class="shadow-circle"></div>
                            <svg
                              class="checkmark"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 52 52"
                            >
                              <circle
                                class="checkmark-circle"
                                cx="26"
                                cy="26"
                                r="25"
                                fill="none"
                              />
                              <path
                                class="checkmark-check"
                                fill="none"
                                d="M14.1 27.2l7.1 7.2 16.7-16.8"
                              />
                            </svg>
                          </div>
                        </div>
                        <div class="flex-meta is-light">
                          <a href="#">Review final draft</a>
                          <span>at 6:00pm</span>
                        </div>
                        <div class="flex-end">
                          <span class="tag is-rounded">Pending</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="inner-list-wrapper">
                    <div class="inner-list">
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <div class="animated-checkbox is-checked">
                          <input type="checkbox" />
                          <div class="checkmark-wrap">
                            <div class="shadow-circle"></div>
                            <svg
                              class="checkmark"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 52 52"
                            >
                              <circle
                                class="checkmark-circle"
                                cx="26"
                                cy="26"
                                r="25"
                                fill="none"
                              />
                              <path
                                class="checkmark-check"
                                fill="none"
                                d="M14.1 27.2l7.1 7.2 16.7-16.8"
                              />
                            </svg>
                          </div>
                        </div>
                        <div class="flex-meta is-light">
                          <a href="#">Call Mike R.</a>
                          <span>at 8:30am</span>
                        </div>
                        <div class="flex-end">
                          <span class="tag is-rounded">Pending</span>
                        </div>
                      </div>
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <div class="animated-checkbox is-checked">
                          <input type="checkbox" />
                          <div class="checkmark-wrap">
                            <div class="shadow-circle"></div>
                            <svg
                              class="checkmark"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 52 52"
                            >
                              <circle
                                class="checkmark-circle"
                                cx="26"
                                cy="26"
                                r="25"
                                fill="none"
                              />
                              <path
                                class="checkmark-check"
                                fill="none"
                                d="M14.1 27.2l7.1 7.2 16.7-16.8"
                              />
                            </svg>
                          </div>
                        </div>
                        <div class="flex-meta is-light">
                          <a href="#">Finish document review</a>
                          <span>at 11:30am</span>
                        </div>
                        <div class="flex-end">
                          <span class="tag is-rounded">Pending</span>
                        </div>
                      </div>
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <div class="animated-checkbox is-checked">
                          <input type="checkbox" />
                          <div class="checkmark-wrap">
                            <div class="shadow-circle"></div>
                            <svg
                              class="checkmark"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 52 52"
                            >
                              <circle
                                class="checkmark-circle"
                                cx="26"
                                cy="26"
                                r="25"
                                fill="none"
                              />
                              <path
                                class="checkmark-check"
                                fill="none"
                                d="M14.1 27.2l7.1 7.2 16.7-16.8"
                              />
                            </svg>
                          </div>
                        </div>
                        <div class="flex-meta is-light">
                          <a href="#">Project Meeting</a>
                          <span>at 12:00pm</span>
                        </div>
                        <div class="flex-end">
                          <span class="tag is-rounded">Pending</span>
                        </div>
                      </div>
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <div class="animated-checkbox">
                          <input type="checkbox" />
                          <div class="checkmark-wrap">
                            <div class="shadow-circle"></div>
                            <svg
                              class="checkmark"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 52 52"
                            >
                              <circle
                                class="checkmark-circle"
                                cx="26"
                                cy="26"
                                r="25"
                                fill="none"
                              />
                              <path
                                class="checkmark-check"
                                fill="none"
                                d="M14.1 27.2l7.1 7.2 16.7-16.8"
                              />
                            </svg>
                          </div>
                        </div>
                        <div class="flex-meta is-light">
                          <a href="#">Meet with the Boss</a>
                          <span>at 4:30pm</span>
                        </div>
                        <div class="flex-end">
                          <span class="tag is-rounded">Pending</span>
                        </div>
                      </div>
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <div class="animated-checkbox">
                          <input type="checkbox" />
                          <div class="checkmark-wrap">
                            <div class="shadow-circle"></div>
                            <svg
                              class="checkmark"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 52 52"
                            >
                              <circle
                                class="checkmark-circle"
                                cx="26"
                                cy="26"
                                r="25"
                                fill="none"
                              />
                              <path
                                class="checkmark-check"
                                fill="none"
                                d="M14.1 27.2l7.1 7.2 16.7-16.8"
                              />
                            </svg>
                          </div>
                        </div>
                        <div class="flex-meta is-light">
                          <a href="#">Business diner</a>
                          <span>at 9:00pm</span>
                        </div>
                        <div class="flex-end">
                          <span class="tag is-rounded">Pending</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!--List Widget V1a-->
              <div class="column is-4">
                <div class="list-widget list-widget-v1 is-straight">
                  <div class="widget-head">
                    <h3 class="dark-inverted">Topics</h3>
                    <WidgetDropdown />
                  </div>

                  <div class="inner-list">
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="h-icon is-info is-rounded">
                        <Icon icon="feather:chrome" />
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Browsers</a>
                        <span>Technology</span>
                      </div>
                      <div class="flex-end">
                        <div class="avatar-stack">
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/12.jpg"
                              alt=""
                              data-user-popover="2"
                              data-target="webuiPopover7"
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
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="h-icon is-green is-rounded">
                        <Icon icon="feather:wind" />
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Natural Ecosystems</a>
                        <span>Environment</span>
                      </div>
                      <div class="flex-end">
                        <div class="avatar-stack">
                          <div class="h-avatar is-small">
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
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/8.jpg"
                              alt=""
                              data-user-popover="3"
                              data-target="webuiPopover5"
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="h-icon is-orange is-rounded">
                        <Icon icon="feather:cpu" />
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Computer chips</a>
                        <span>Technology</span>
                      </div>
                      <div class="flex-end">
                        <div class="avatar-stack">
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/7.jpg"
                              alt=""
                              data-user-popover="0"
                              data-target="webuiPopover32"
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/23.jpg"
                              alt=""
                              data-user-popover="21"
                              data-target="webuiPopover0"
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="h-icon is-purple is-rounded">
                        <Icon icon="feather:music" />
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Modal Improvisation</a>
                        <span>Music</span>
                      </div>
                      <div class="flex-end">
                        <div class="avatar-stack">
                          <div class="h-avatar is-small">
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
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/13.jpg"
                              alt=""
                              data-user-popover="6"
                              data-target="webuiPopover31"
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/8.jpg"
                              alt=""
                              data-user-popover="3"
                              data-target="webuiPopover32"
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
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="h-icon is-yellow is-rounded">
                        <Icon icon="feather:monitor" />
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Old Movies</a>
                        <span>Entertainment</span>
                      </div>
                      <div class="flex-end">
                        <div class="avatar-stack">
                          <div class="h-avatar is-small">
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
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/22.jpg"
                              alt=""
                              data-user-popover="20"
                              data-target="webuiPopover8"
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="h-icon is-purple is-rounded">
                        <Icon icon="feather:github" />
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Git Management</a>
                        <span>Technology</span>
                      </div>
                      <div class="flex-end">
                        <div class="avatar-stack">
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/27.jpg"
                              alt=""
                              data-user-popover="10"
                              data-target="webuiPopover3"
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
                              data-user-popover="16"
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="h-avatar is-small">
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
                          </div>
                          <div class="h-avatar is-small">
                            <span class="avatar is-more">
                              <span class="inner">
                                <span>+7</span>
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!--List Widget V1a-->
              <div class="column is-4">
                <div class="list-widget list-widget-v1 is-straight">
                  <div class="widget-head">
                    <h3 class="dark-inverted">Topics</h3>
                    <WidgetDropdown />
                  </div>

                  <div class="inner-list">
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="h-icon is-info">
                        <Icon icon="feather:chrome" />
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Browsers</a>
                        <span>Technology</span>
                      </div>
                      <div class="flex-end">
                        <div class="avatar-stack">
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/12.jpg"
                              alt=""
                              data-user-popover="2"
                              data-target="webuiPopover7"
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
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="h-icon is-green">
                        <Icon icon="feather:wind" />
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Natural Ecosystems</a>
                        <span>Environment</span>
                      </div>
                      <div class="flex-end">
                        <div class="avatar-stack">
                          <div class="h-avatar is-small">
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
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/8.jpg"
                              alt=""
                              data-user-popover="3"
                              data-target="webuiPopover5"
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="h-icon is-orange">
                        <Icon icon="feather:cpu" />
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Computer chips</a>
                        <span>Technology</span>
                      </div>
                      <div class="flex-end">
                        <div class="avatar-stack">
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/7.jpg"
                              alt=""
                              data-user-popover="0"
                              data-target="webuiPopover32"
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/23.jpg"
                              alt=""
                              data-user-popover="21"
                              data-target="webuiPopover0"
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="h-icon is-purple">
                        <Icon icon="feather:music" />
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Modal Improvisation</a>
                        <span>Music</span>
                      </div>
                      <div class="flex-end">
                        <div class="avatar-stack">
                          <div class="h-avatar is-small">
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
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/13.jpg"
                              alt=""
                              data-user-popover="6"
                              data-target="webuiPopover31"
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/8.jpg"
                              alt=""
                              data-user-popover="3"
                              data-target="webuiPopover32"
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
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="h-icon is-yellow">
                        <Icon icon="feather:monitor" />
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Old Movies</a>
                        <span>Entertainment</span>
                      </div>
                      <div class="flex-end">
                        <div class="avatar-stack">
                          <div class="h-avatar is-small">
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
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/22.jpg"
                              alt=""
                              data-user-popover="20"
                              data-target="webuiPopover8"
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--List Item-->
                    <div class="inner-list-item media-flex-center">
                      <div class="h-icon is-purple">
                        <Icon icon="feather:github" />
                      </div>
                      <div class="flex-meta is-light">
                        <a href="#">Git Management</a>
                        <span>Technology</span>
                      </div>
                      <div class="flex-end">
                        <div class="avatar-stack">
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/27.jpg"
                              alt=""
                              data-user-popover="10"
                              data-target="webuiPopover3"
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
                              data-user-popover="16"
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="h-avatar is-small">
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
                          </div>
                          <div class="h-avatar is-small">
                            <span class="avatar is-more">
                              <span class="inner">
                                <span>+7</span>
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!--List Widget V2-->
              <div class="column is-4">
                <div
                  class="list-widget list-widget-v2 tabbed-widget is-straight"
                >
                  <div class="widget-head">
                    <h3 class="dark-inverted">Topics</h3>
                    <div class="tabbed-controls">
                      <a class="tabbed-control is-active">
                        <span>Recent</span>
                      </a>
                      <a class="tabbed-control">
                        <span>Popular</span>
                      </a>
                      <div class="tabbed-naver"></div>
                    </div>
                  </div>

                  <div class="inner-list-wrapper is-active">
                    <div class="inner-list">
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <div class="h-icon is-info is-rounded">
                          <Icon icon="feather:chrome" />
                        </div>
                        <div class="flex-meta is-light">
                          <a href="#">Browsers</a>
                          <span>Technology</span>
                        </div>
                        <div class="flex-end">
                          <div class="avatar-stack">
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/12.jpg"
                                alt=""
                                data-user-popover="2"
                                data-target="webuiPopover7"
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
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <div class="h-icon is-green is-rounded">
                          <Icon icon="feather:wind" />
                        </div>
                        <div class="flex-meta is-light">
                          <a href="#">Natural Ecosystems</a>
                          <span>Environment</span>
                        </div>
                        <div class="flex-end">
                          <div class="avatar-stack">
                            <div class="h-avatar is-small">
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
                            </div>
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/8.jpg"
                                alt=""
                                data-user-popover="3"
                                data-target="webuiPopover5"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <div class="h-icon is-orange is-rounded">
                          <Icon icon="feather:cpu" />
                        </div>
                        <div class="flex-meta is-light">
                          <a href="#">Computer chips</a>
                          <span>Technology</span>
                        </div>
                        <div class="flex-end">
                          <div class="avatar-stack">
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/7.jpg"
                                alt=""
                                data-user-popover="0"
                                data-target="webuiPopover32"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/23.jpg"
                                alt=""
                                data-user-popover="21"
                                data-target="webuiPopover0"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <div class="h-icon is-purple is-rounded">
                          <Icon icon="feather:music" />
                        </div>
                        <div class="flex-meta is-light">
                          <a href="#">Modal Improvisation</a>
                          <span>Music</span>
                        </div>
                        <div class="flex-end">
                          <div class="avatar-stack">
                            <div class="h-avatar is-small">
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
                            </div>
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/13.jpg"
                                alt=""
                                data-user-popover="6"
                                data-target="webuiPopover31"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/8.jpg"
                                alt=""
                                data-user-popover="3"
                                data-target="webuiPopover32"
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
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <div class="h-icon is-yellow is-rounded">
                          <Icon icon="feather:monitor" />
                        </div>
                        <div class="flex-meta is-light">
                          <a href="#">Old Movies</a>
                          <span>Entertainment</span>
                        </div>
                        <div class="flex-end">
                          <div class="avatar-stack">
                            <div class="h-avatar is-small">
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
                            </div>
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/22.jpg"
                                alt=""
                                data-user-popover="20"
                                data-target="webuiPopover8"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <div class="h-icon is-purple is-rounded">
                          <Icon icon="feather:github" />
                        </div>
                        <div class="flex-meta is-light">
                          <a href="#">Git Management</a>
                          <span>Technology</span>
                        </div>
                        <div class="flex-end">
                          <div class="avatar-stack">
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/27.jpg"
                                alt=""
                                data-user-popover="10"
                                data-target="webuiPopover3"
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
                                data-user-popover="16"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                            <div class="h-avatar is-small">
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
                            </div>
                            <div class="h-avatar is-small">
                              <span class="avatar is-more">
                                <span class="inner">
                                  <span>+7</span>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="inner-list-wrapper">
                    <div class="inner-list">
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <div class="h-icon is-info">
                          <Icon icon="feather:chrome" />
                        </div>
                        <div class="flex-meta is-light">
                          <a href="#">Browsers</a>
                          <span>Technology</span>
                        </div>
                        <div class="flex-end">
                          <div class="avatar-stack">
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/12.jpg"
                                alt=""
                                data-user-popover="2"
                                data-target="webuiPopover7"
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
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <div class="h-icon is-green">
                          <Icon icon="feather:wind" />
                        </div>
                        <div class="flex-meta is-light">
                          <a href="#">Natural Ecosystems</a>
                          <span>Environment</span>
                        </div>
                        <div class="flex-end">
                          <div class="avatar-stack">
                            <div class="h-avatar is-small">
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
                            </div>
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/8.jpg"
                                alt=""
                                data-user-popover="3"
                                data-target="webuiPopover5"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <div class="h-icon is-orange">
                          <Icon icon="feather:cpu" />
                        </div>
                        <div class="flex-meta is-light">
                          <a href="#">Computer chips</a>
                          <span>Technology</span>
                        </div>
                        <div class="flex-end">
                          <div class="avatar-stack">
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/7.jpg"
                                alt=""
                                data-user-popover="0"
                                data-target="webuiPopover32"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/23.jpg"
                                alt=""
                                data-user-popover="21"
                                data-target="webuiPopover0"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <div class="h-icon is-purple">
                          <Icon icon="feather:music" />
                        </div>
                        <div class="flex-meta is-light">
                          <a href="#">Modal Improvisation</a>
                          <span>Music</span>
                        </div>
                        <div class="flex-end">
                          <div class="avatar-stack">
                            <div class="h-avatar is-small">
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
                            </div>
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/13.jpg"
                                alt=""
                                data-user-popover="6"
                                data-target="webuiPopover31"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/8.jpg"
                                alt=""
                                data-user-popover="3"
                                data-target="webuiPopover32"
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
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <div class="h-icon is-yellow">
                          <Icon icon="feather:monitor" />
                        </div>
                        <div class="flex-meta is-light">
                          <a href="#">Old Movies</a>
                          <span>Entertainment</span>
                        </div>
                        <div class="flex-end">
                          <div class="avatar-stack">
                            <div class="h-avatar is-small">
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
                            </div>
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/22.jpg"
                                alt=""
                                data-user-popover="20"
                                data-target="webuiPopover8"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <div class="h-icon is-purple">
                          <Icon icon="feather:github" />
                        </div>
                        <div class="flex-meta is-light">
                          <a href="#">Git Management</a>
                          <span>Technology</span>
                        </div>
                        <div class="flex-end">
                          <div class="avatar-stack">
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/27.jpg"
                                alt=""
                                data-user-popover="10"
                                data-target="webuiPopover3"
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
                                data-user-popover="16"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                            <div class="h-avatar is-small">
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
                            </div>
                            <div class="h-avatar is-small">
                              <span class="avatar is-more">
                                <span class="inner">
                                  <span>+7</span>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!--List Widget V1a-->
              <div class="column is-4">
                <div class="list-widget list-widget-v3 is-straight">
                  <div class="widget-head">
                    <h3 class="dark-inverted">Timeline</h3>
                    <WidgetDropdown />
                  </div>

                  <div class="inner-list">
                    <div class="icon-timeline">
                      <!--Timeline item-->
                      <div class="timeline-item">
                        <div class="timeline-icon">
                          <Icon icon="feather:phone-call" />
                        </div>
                        <div class="timeline-content">
                          <p>Call Danny at Colby's</p>
                          <span>Today - 11:30am</span>
                        </div>
                      </div>
                      <!--Timeline item-->
                      <div class="timeline-item">
                        <div class="timeline-icon">
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
                        <div class="timeline-content">
                          <p>Meeting with Alice</p>
                          <span>Today - 01:00pm</span>
                        </div>
                      </div>
                      <!--Timeline item-->
                      <div class="timeline-item">
                        <div class="timeline-icon">
                          <Icon icon="feather:message-circle" />
                        </div>
                        <div class="timeline-content">
                          <p>Answer Annie's message</p>
                          <span>Today - 01:45pm</span>
                        </div>
                      </div>
                      <!--Timeline item-->
                      <div class="timeline-item">
                        <div class="timeline-icon">
                          <Icon icon="feather:mail" />
                        </div>
                        <div class="timeline-content">
                          <p>Send new campaign</p>
                          <span>Today - 02:30pm</span>
                        </div>
                      </div>
                      <!--Timeline item-->
                      <div class="timeline-item">
                        <div class="timeline-icon">
                          <Icon icon="feather:smile" />
                        </div>
                        <div class="timeline-content">
                          <p>Project review</p>
                          <span>Today - 03:30pm</span>
                        </div>
                      </div>
                      <!--Timeline item-->
                      <div class="timeline-item">
                        <div class="timeline-icon">
                          <Icon icon="feather:phone-call" />
                        </div>
                        <div class="timeline-content">
                          <p>Call Trisha Jackson</p>
                          <span>Today - 05:00pm</span>
                        </div>
                      </div>
                      <!--Timeline item-->
                      <div class="timeline-item">
                        <div class="timeline-icon">
                          <Icon icon="feather:feather" />
                        </div>
                        <div class="timeline-content">
                          <p>Write proposal for Don</p>
                          <span>Today - 06:00pm</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!--List Widget V1a-->
              <div class="column is-4">
                <div class="list-widget list-widget-v3 is-straight">
                  <div class="widget-head">
                    <h3 class="dark-inverted">Timeline</h3>
                    <WidgetDropdown />
                  </div>

                  <div class="inner-list">
                    <div class="icon-timeline">
                      <!--Timeline item-->
                      <div class="timeline-item">
                        <div class="timeline-icon is-squared">
                          <Icon icon="feather:phone-call" />
                        </div>
                        <div class="timeline-content">
                          <p>Call Danny at Colby's</p>
                          <span>Today - 11:30am</span>
                        </div>
                      </div>
                      <!--Timeline item-->
                      <div class="timeline-item">
                        <div class="timeline-icon is-squared">
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
                        <div class="timeline-content">
                          <p>Meeting with Alice</p>
                          <span>Today - 01:00pm</span>
                        </div>
                      </div>
                      <!--Timeline item-->
                      <div class="timeline-item">
                        <div class="timeline-icon is-squared">
                          <Icon icon="feather:message-circle" />
                        </div>
                        <div class="timeline-content">
                          <p>Answer Annie's message</p>
                          <span>Today - 01:45pm</span>
                        </div>
                      </div>
                      <!--Timeline item-->
                      <div class="timeline-item">
                        <div class="timeline-icon is-squared">
                          <Icon icon="feather:mail" />
                        </div>
                        <div class="timeline-content">
                          <p>Send new campaign</p>
                          <span>Today - 02:30pm</span>
                        </div>
                      </div>
                      <!--Timeline item-->
                      <div class="timeline-item">
                        <div class="timeline-icon is-squared">
                          <Icon icon="feather:smile" />
                        </div>
                        <div class="timeline-content">
                          <p>Project review</p>
                          <span>Today - 03:30pm</span>
                        </div>
                      </div>
                      <!--Timeline item-->
                      <div class="timeline-item">
                        <div class="timeline-icon is-squared">
                          <Icon icon="feather:phone-call" />
                        </div>
                        <div class="timeline-content">
                          <p>Call Trisha Jackson</p>
                          <span>Today - 05:00pm</span>
                        </div>
                      </div>
                      <!--Timeline item-->
                      <div class="timeline-item">
                        <div class="timeline-icon is-squared">
                          <Icon icon="feather:feather" />
                        </div>
                        <div class="timeline-content">
                          <p>Write proposal for Don</p>
                          <span>Today - 06:00pm</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!--List Widget V1a-->
              <div class="column is-4">
                <div class="list-widget list-widget-v3 is-straight">
                  <div class="widget-head">
                    <h3 class="dark-inverted">Timeline</h3>
                    <WidgetDropdown />
                  </div>

                  <div class="inner-list">
                    <div class="icon-timeline">
                      <!--Timeline item-->
                      <div class="timeline-item">
                        <div class="timeline-icon is-squared is-primary">
                          <Icon icon="feather:phone-call" />
                        </div>
                        <div class="timeline-content">
                          <p>Call Danny at Colby's</p>
                          <span>Today - 11:30am</span>
                        </div>
                      </div>
                      <!--Timeline item-->
                      <div class="timeline-item">
                        <div class="timeline-icon is-squared">
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
                        <div class="timeline-content">
                          <p>Meeting with Alice</p>
                          <span>Today - 01:00pm</span>
                        </div>
                      </div>
                      <!--Timeline item-->
                      <div class="timeline-item">
                        <div class="timeline-icon is-squared is-info">
                          <Icon icon="feather:message-circle" />
                        </div>
                        <div class="timeline-content">
                          <p>Answer Annie's message</p>
                          <span>Today - 01:45pm</span>
                        </div>
                      </div>
                      <!--Timeline item-->
                      <div class="timeline-item">
                        <div class="timeline-icon is-squared is-success">
                          <Icon icon="feather:mail" />
                        </div>
                        <div class="timeline-content">
                          <p>Send new campaign</p>
                          <span>Today - 02:30pm</span>
                        </div>
                      </div>
                      <!--Timeline item-->
                      <div class="timeline-item">
                        <div class="timeline-icon is-squared is-purple">
                          <Icon icon="feather:smile" />
                        </div>
                        <div class="timeline-content">
                          <p>Project review</p>
                          <span>Today - 03:30pm</span>
                        </div>
                      </div>
                      <!--Timeline item-->
                      <div class="timeline-item">
                        <div class="timeline-icon is-squared is-orange">
                          <Icon icon="feather:phone-call" />
                        </div>
                        <div class="timeline-content">
                          <p>Call Trisha Jackson</p>
                          <span>Today - 05:00pm</span>
                        </div>
                      </div>
                      <!--Timeline item-->
                      <div class="timeline-item">
                        <div class="timeline-icon is-squared is-yellow">
                          <Icon icon="feather:feather" />
                        </div>
                        <div class="timeline-content">
                          <p>Write proposal for Don</p>
                          <span>Today - 06:00pm</span>
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
  </WebappLayout>
</template>

<style lang="scss">
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/abstracts/_mixins.scss';
@import '../../assets/scss/pages/generic/_widgets-lists.scss';
</style>
