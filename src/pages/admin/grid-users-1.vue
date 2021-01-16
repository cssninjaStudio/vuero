<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import { onMounted } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

onMounted(() => {
  activeSidebar.value = 'none'
})

useTitle('Grid Users 1 - Admin - Vuero')
</script>

<template>
  <DefaultLayout>
    <LayoutsSidebar />
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="grid-users"
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
              <h1 class="title is-4">User Grid</h1>
            </div>

            <Toolbar />
          </div>

          <div class="user-grid-toolbar">
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
            <div class="user-grid user-grid-v1">
              <!--List Empty Search Placeholder -->
              <div
                class="page-placeholder custom-text-filter-placeholder is-hidden"
              >
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
                  <h3>We couldn't find any matching results.</h3>
                  <p class="is-larger">
                    Too bad. Looks like we couldn't find any matching results
                    for the search terms you've entered. Please try different
                    search terms or criteria.
                  </p>
                </div>
              </div>

              <div class="columns is-multiline">
                <!--Grid item-->
                <div class="column is-3">
                  <div class="grid-item">
                    <div class="h-avatar is-big">
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
                    <h3 class="dark-inverted" data-filter-match>
                      Tara Svenson
                    </h3>
                    <p data-filter-match>UI/UX Designer</p>
                    <div class="people">
                      <div class="h-avatar is-small">
                        <span
                          class="avatar is-fake is-warning"
                          data-user-popover="36"
                        >
                          <span>BT</span>
                        </span>
                      </div>
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
                        <span
                          class="avatar is-fake is-info"
                          data-user-popover="34"
                        >
                          <span>JD</span>
                        </span>
                      </div>
                      <div class="h-avatar is-small">
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
                      </div>
                    </div>
                    <div class="buttons">
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:user" />
                        </span>
                        <span>Profile</span>
                      </button>
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:message-circle" />
                        </span>
                        <span>Talk</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-3">
                  <div class="grid-item">
                    <div class="h-avatar is-big">
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
                    <h3 class="dark-inverted" data-filter-match>
                      Helmut Fritz
                    </h3>
                    <p data-filter-match>Product Manager</p>
                    <div class="people">
                      <div class="h-avatar is-small">
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
                      <div class="h-avatar is-small">
                        <span
                          class="avatar is-fake is-success"
                          data-user-popover="37"
                        >
                          <span>AT</span>
                        </span>
                      </div>
                      <div class="h-avatar is-small">
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
                      </div>
                    </div>
                    <div class="buttons">
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:user" />
                        </span>
                        <span>Profile</span>
                      </button>
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:message-circle" />
                        </span>
                        <span>Talk</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-3">
                  <div class="grid-item">
                    <div class="h-avatar is-big">
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
                    <h3 class="dark-inverted" data-filter-match>
                      Melany Wallace
                    </h3>
                    <p data-filter-match>Web Developer</p>
                    <div class="people">
                      <div class="h-avatar is-small">
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
                      <div class="h-avatar is-small">
                        <span
                          class="avatar is-fake is-h-purple"
                          data-user-popover="35"
                        >
                          <span>SC</span>
                        </span>
                      </div>
                      <div class="h-avatar is-small">
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
                      </div>
                    </div>
                    <div class="buttons">
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:user" />
                        </span>
                        <span>Profile</span>
                      </button>
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:message-circle" />
                        </span>
                        <span>Talk</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-3">
                  <div class="grid-item">
                    <div class="h-avatar is-big">
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
                    <h3 class="dark-inverted" data-filter-match>
                      Hakeem Calami
                    </h3>
                    <p data-filter-match>Software Engineer</p>
                    <div class="people">
                      <div class="h-avatar is-small">
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
                      </div>
                      <div class="h-avatar is-small">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/33.jpg"
                          alt=""
                          data-user-popover="29"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                    </div>
                    <div class="buttons">
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:user" />
                        </span>
                        <span>Profile</span>
                      </button>
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:message-circle" />
                        </span>
                        <span>Talk</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-3">
                  <div class="grid-item">
                    <div class="h-avatar is-big">
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
                    <h3 class="dark-inverted" data-filter-match>
                      Alejandro Badajoz
                    </h3>
                    <p data-filter-match>Business Analyst</p>
                    <div class="people">
                      <div class="h-avatar is-small">
                        <span
                          class="avatar is-fake is-success"
                          data-user-popover="37"
                        >
                          <span>AT</span>
                        </span>
                      </div>
                      <div class="h-avatar is-small">
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
                      </div>
                    </div>
                    <div class="buttons">
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:user" />
                        </span>
                        <span>Profile</span>
                      </button>
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:message-circle" />
                        </span>
                        <span>Talk</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-3">
                  <div class="grid-item">
                    <div class="h-avatar is-big">
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
                      <img
                        class="badge"
                        src="/@images/icons/stacks/android.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <h3 class="dark-inverted" data-filter-match>
                      Jeanne Marchand
                    </h3>
                    <p data-filter-match>Mobile Developer</p>
                    <div class="people">
                      <div class="h-avatar is-small">
                        <span
                          class="avatar is-fake is-warning"
                          data-user-popover="36"
                        >
                          <span>BT</span>
                        </span>
                      </div>
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
                        <span
                          class="avatar is-fake is-info"
                          data-user-popover="34"
                        >
                          <span>JD</span>
                        </span>
                      </div>
                    </div>
                    <div class="buttons">
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:user" />
                        </span>
                        <span>Profile</span>
                      </button>
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:message-circle" />
                        </span>
                        <span>Talk</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-3">
                  <div class="grid-item">
                    <div class="h-avatar is-big">
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
                    <h3 class="dark-inverted" data-filter-match>
                      Greta Kroppfer
                    </h3>
                    <p data-filter-match>Sales Manager</p>
                    <div class="people">
                      <div class="h-avatar is-small">
                        <span
                          class="avatar is-fake is-h-purple"
                          data-user-popover="35"
                        >
                          <span>SC</span>
                        </span>
                      </div>
                      <div class="h-avatar is-small">
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
                      </div>
                    </div>
                    <div class="buttons">
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:user" />
                        </span>
                        <span>Profile</span>
                      </button>
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:message-circle" />
                        </span>
                        <span>Talk</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-3">
                  <div class="grid-item">
                    <div class="h-avatar is-big">
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
                        src="/@images/icons/stacks/photoshop.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <h3 class="dark-inverted" data-filter-match>Anna Baker</h3>
                    <p data-filter-match>UI/UX Designer</p>
                    <div class="people">
                      <div class="h-avatar is-small">
                        <span
                          class="avatar is-fake is-success"
                          data-user-popover="37"
                        >
                          <span>AT</span>
                        </span>
                      </div>
                      <div class="h-avatar is-small">
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
                      </div>
                    </div>
                    <div class="buttons">
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:user" />
                        </span>
                        <span>Profile</span>
                      </button>
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:message-circle" />
                        </span>
                        <span>Talk</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-3">
                  <div class="grid-item">
                    <div class="h-avatar is-big">
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
                    <h3 class="dark-inverted" data-filter-match>
                      Mary Lebowski
                    </h3>
                    <p data-filter-match>Project Manager</p>
                    <div class="people">
                      <div class="h-avatar is-small">
                        <span
                          class="avatar is-fake is-warning"
                          data-user-popover="36"
                        >
                          <span>BT</span>
                        </span>
                      </div>
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
                        <span
                          class="avatar is-fake is-info"
                          data-user-popover="34"
                        >
                          <span>JD</span>
                        </span>
                      </div>
                      <div class="h-avatar is-small">
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
                      </div>
                    </div>
                    <div class="buttons">
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:user" />
                        </span>
                        <span>Profile</span>
                      </button>
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:message-circle" />
                        </span>
                        <span>Talk</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-3">
                  <div class="grid-item">
                    <div class="h-avatar is-big">
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
                    <h3 class="dark-inverted" data-filter-match>
                      Jonathan Krugger
                    </h3>
                    <p data-filter-match>Product Manager</p>
                    <div class="people">
                      <div class="h-avatar is-small">
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
                      <div class="h-avatar is-small">
                        <span
                          class="avatar is-fake is-h-purple"
                          data-user-popover="35"
                        >
                          <span>SC</span>
                        </span>
                      </div>
                      <div class="h-avatar is-small">
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
                      </div>
                    </div>
                    <div class="buttons">
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:user" />
                        </span>
                        <span>Profile</span>
                      </button>
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:message-circle" />
                        </span>
                        <span>Talk</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-3">
                  <div class="grid-item">
                    <div class="h-avatar is-big">
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
                    <h3 class="dark-inverted" data-filter-match>
                      Benoit Leblanc
                    </h3>
                    <p data-filter-match>Software Engineer</p>
                    <div class="people">
                      <div class="h-avatar is-small">
                        <span
                          class="avatar is-fake is-warning"
                          data-user-popover="36"
                        >
                          <span>BT</span>
                        </span>
                      </div>
                      <div class="h-avatar is-small">
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
                    </div>
                    <div class="buttons">
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:user" />
                        </span>
                        <span>Profile</span>
                      </button>
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:message-circle" />
                        </span>
                        <span>Talk</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-3">
                  <div class="grid-item">
                    <div class="h-avatar is-big">
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
                    <h3 class="dark-inverted" data-filter-match>
                      Christie Dallas
                    </h3>
                    <p data-filter-match>Web Developer</p>
                    <div class="people">
                      <div class="h-avatar is-small">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/33.jpg"
                          alt=""
                          data-user-popover="29"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="h-avatar is-small">
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
                      </div>
                    </div>
                    <div class="buttons">
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:user" />
                        </span>
                        <span>Profile</span>
                      </button>
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:message-circle" />
                        </span>
                        <span>Talk</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-3">
                  <div class="grid-item">
                    <div class="h-avatar is-big">
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
                    <h3 class="dark-inverted" data-filter-match>
                      Courtney Wilson
                    </h3>
                    <p data-filter-match>Web Developer</p>
                    <div class="people">
                      <div class="h-avatar is-small">
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
                      <div class="h-avatar is-small">
                        <span
                          class="avatar is-fake is-success"
                          data-user-popover="37"
                        >
                          <span>AT</span>
                        </span>
                      </div>
                      <div class="h-avatar is-small">
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
                      </div>
                    </div>
                    <div class="buttons">
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:user" />
                        </span>
                        <span>Profile</span>
                      </button>
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:message-circle" />
                        </span>
                        <span>Talk</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-3">
                  <div class="grid-item">
                    <div class="h-avatar is-big">
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
                    <h3 class="dark-inverted" data-filter-match>
                      Jason Guarank
                    </h3>
                    <p data-filter-match>Business Analyst</p>
                    <div class="people">
                      <div class="h-avatar is-small">
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
                      </div>
                      <div class="h-avatar is-small">
                        <span
                          class="avatar is-fake is-h-purple"
                          data-user-popover="35"
                        >
                          <span>SC</span>
                        </span>
                      </div>
                    </div>
                    <div class="buttons">
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:user" />
                        </span>
                        <span>Profile</span>
                      </button>
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:message-circle" />
                        </span>
                        <span>Talk</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-3">
                  <div class="grid-item">
                    <div class="h-avatar is-big">
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
                    <h3 class="dark-inverted" data-filter-match>
                      Irina Vierbovsky
                    </h3>
                    <p data-filter-match>Project Manager</p>
                    <div class="people">
                      <div class="h-avatar is-small">
                        <span
                          class="avatar is-fake is-success"
                          data-user-popover="37"
                        >
                          <span>AT</span>
                        </span>
                      </div>
                      <div class="h-avatar is-small">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/34.jpg"
                          alt=""
                          data-user-popover="12"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                    </div>
                    <div class="buttons">
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:user" />
                        </span>
                        <span>Profile</span>
                      </button>
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:message-circle" />
                        </span>
                        <span>Talk</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-3">
                  <div class="grid-item">
                    <div class="h-avatar is-big">
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
                    <h3 class="dark-inverted" data-filter-match>
                      Edouard Falant
                    </h3>
                    <p data-filter-match>Web Developer</p>
                    <div class="people">
                      <div class="h-avatar is-small">
                        <span
                          class="avatar is-fake is-warning"
                          data-user-popover="36"
                        >
                          <span>BT</span>
                        </span>
                      </div>
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
                        <span
                          class="avatar is-fake is-info"
                          data-user-popover="34"
                        >
                          <span>JD</span>
                        </span>
                      </div>
                    </div>
                    <div class="buttons">
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:user" />
                        </span>
                        <span>Profile</span>
                      </button>
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:message-circle" />
                        </span>
                        <span>Talk</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-3">
                  <div class="grid-item">
                    <div class="h-avatar is-big">
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
                        src="/@images/icons/stacks/csharp.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <h3 class="dark-inverted" data-filter-match>
                      Alice Carasca
                    </h3>
                    <p data-filter-match>Software Engineer</p>
                    <div class="people">
                      <div class="h-avatar is-small">
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
                      </div>
                      <div class="h-avatar is-small">
                        <span
                          class="avatar is-fake is-h-purple"
                          data-user-popover="35"
                        >
                          <span>SC</span>
                        </span>
                      </div>
                      <div class="h-avatar is-small">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/12.jpg"
                          alt=""
                          data-user-popover="2"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                    </div>
                    <div class="buttons">
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:user" />
                        </span>
                        <span>Profile</span>
                      </button>
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:message-circle" />
                        </span>
                        <span>Talk</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-3">
                  <div class="grid-item">
                    <div class="h-avatar is-big">
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
                    <h3 class="dark-inverted" data-filter-match>
                      Dwayne Hicks
                    </h3>
                    <p data-filter-match>Product Manager</p>
                    <div class="people">
                      <div class="h-avatar is-small">
                        <span
                          class="avatar is-fake is-warning"
                          data-user-popover="36"
                        >
                          <span>BT</span>
                        </span>
                      </div>
                      <div class="h-avatar is-small">
                        <span
                          class="avatar is-fake is-h-purple"
                          data-user-popover="35"
                        >
                          <span>SC</span>
                        </span>
                      </div>
                    </div>
                    <div class="buttons">
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:user" />
                        </span>
                        <span>Profile</span>
                      </button>
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:message-circle" />
                        </span>
                        <span>Talk</span>
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
  </DefaultLayout>
</template>
