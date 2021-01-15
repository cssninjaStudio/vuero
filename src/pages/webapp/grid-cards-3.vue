<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

useTitle('Grid Cards 3 - WebApp - Vuero')
</script>

<template>
  <WebappLayout>
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="grid-cards"
      class="view-wrapper is-webapp"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-page-title="Card Grids"
      data-naver-offset="214"
      data-menu-item="#layouts-navbar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered is-webapp">
            <div class="title-wrap">
              <h1 class="title is-4">Card Grid</h1>
            </div>

            <Toolbar />
          </div>

          <div class="card-grid-toolbar is-webapp">
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

          <div class="page-content-inner is-webapp">
            <div class="card-grid card-grid-v3">
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

              <!--Card Grid v3-->
              <div class="columns is-multiline">
                <!--Grid Item-->
                <div class="column is-4">
                  <div class="card-grid-item">
                    <label class="h-toggle">
                      <input type="checkbox" />
                      <span class="toggler">
                        <span class="active">
                          <Icon icon="feather:lock" />
                        </span>
                        <span class="inactive">
                          <Icon icon="feather:check" />
                        </span>
                      </span>
                    </label>
                    <div class="h-avatar is-large">
                      <img
                        class="avatar is-squared"
                        src="/@images/photo/demo/apps/1.jpg"
                        alt=""
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
                      Delivery App Project
                    </h3>
                    <p data-filter-match>3 months remaining</p>
                    <div class="description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quo tandem modo? At certe gravius.
                      </p>
                    </div>
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
                          <Icon icon="feather:eye" />
                        </span>
                        <span>View</span>
                      </button>
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:edit-2" />
                        </span>
                        <span>Edit</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!--Grid Item-->
                <div class="column is-4">
                  <div class="card-grid-item">
                    <div class="h-avatar is-large">
                      <img
                        class="avatar is-squared"
                        src="/@images/photo/demo/apps/2.png"
                        alt=""
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
                      Health and Fitness Dashboard
                    </h3>
                    <p data-filter-match>2 months remaining</p>
                    <div class="description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quo tandem modo? At certe gravius.
                      </p>
                    </div>
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
                          <Icon icon="feather:eye" />
                        </span>
                        <span>View</span>
                      </button>
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:edit-2" />
                        </span>
                        <span>Edit</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!--Grid Item-->
                <div class="column is-4">
                  <div class="card-grid-item">
                    <label class="h-toggle">
                      <input type="checkbox" checked />
                      <span class="toggler">
                        <span class="active">
                          <Icon icon="feather:lock" />
                        </span>
                        <span class="inactive">
                          <Icon icon="feather:check" />
                        </span>
                      </span>
                    </label>
                    <div class="h-avatar is-large">
                      <img
                        class="avatar is-squared"
                        src="/@images/photo/demo/apps/3.png"
                        alt=""
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
                      Learning Tracker Dashboard
                    </h3>
                    <p data-filter-match>4 months remaining</p>
                    <div class="description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quo tandem modo? At certe gravius.
                      </p>
                    </div>
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
                          <Icon icon="feather:eye" />
                        </span>
                        <span>View</span>
                      </button>
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:edit-2" />
                        </span>
                        <span>Edit</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!--Grid Item-->
                <div class="column is-4">
                  <div class="card-grid-item">
                    <div class="h-avatar is-large">
                      <img
                        class="avatar is-squared"
                        src="/@images/photo/demo/apps/4.png"
                        alt=""
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
                      Banking and Finance Dashboard
                    </h3>
                    <p data-filter-match>2 weeks remaining</p>
                    <div class="description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quo tandem modo? At certe gravius.
                      </p>
                    </div>
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
                          <Icon icon="feather:eye" />
                        </span>
                        <span>View</span>
                      </button>
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:edit-2" />
                        </span>
                        <span>Edit</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!--Grid Item-->
                <div class="column is-4">
                  <div class="card-grid-item">
                    <label class="h-toggle">
                      <input type="checkbox" />
                      <span class="toggler">
                        <span class="active">
                          <Icon icon="feather:lock" />
                        </span>
                        <span class="inactive">
                          <Icon icon="feather:check" />
                        </span>
                      </span>
                    </label>
                    <div class="h-avatar is-large">
                      <img
                        class="avatar is-squared"
                        src="/@images/photo/demo/apps/5.png"
                        alt=""
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
                      Resume Management Mobile App
                    </h3>
                    <p data-filter-match>1 month remaining</p>
                    <div class="description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quo tandem modo? At certe gravius.
                      </p>
                    </div>
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
                          <Icon icon="feather:eye" />
                        </span>
                        <span>View</span>
                      </button>
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:edit-2" />
                        </span>
                        <span>Edit</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!--Grid Item-->
                <div class="column is-4">
                  <div class="card-grid-item">
                    <div class="h-avatar is-large">
                      <img
                        class="avatar is-squared"
                        src="/@images/photo/demo/apps/6.png"
                        alt=""
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
                      Banking Landing Page
                    </h3>
                    <p data-filter-match>3 weeks remaining</p>
                    <div class="description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quo tandem modo? At certe gravius.
                      </p>
                    </div>
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
                          <Icon icon="feather:eye" />
                        </span>
                        <span>View</span>
                      </button>
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:edit-2" />
                        </span>
                        <span>Edit</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!--Grid Item-->
                <div class="column is-4">
                  <div class="card-grid-item">
                    <div class="h-avatar is-large">
                      <img
                        class="avatar is-squared"
                        src="/@images/photo/demo/apps/7.png"
                        alt=""
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
                    <h3 class="dark-inverted" data-filter-match>
                      Learning App Design
                    </h3>
                    <p data-filter-match>5 months remaining</p>
                    <div class="description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quo tandem modo? At certe gravius.
                      </p>
                    </div>
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
                          <Icon icon="feather:eye" />
                        </span>
                        <span>View</span>
                      </button>
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:edit-2" />
                        </span>
                        <span>Edit</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!--Grid Item-->
                <div class="column is-4">
                  <div class="card-grid-item">
                    <div class="h-avatar is-large">
                      <img
                        class="avatar is-squared"
                        src="/@images/photo/demo/apps/8.png"
                        alt=""
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
                      Educational App Design
                    </h3>
                    <p data-filter-match>2 months remaining</p>
                    <div class="description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quo tandem modo? At certe gravius.
                      </p>
                    </div>
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
                          <Icon icon="feather:eye" />
                        </span>
                        <span>View</span>
                      </button>
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:edit-2" />
                        </span>
                        <span>Edit</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!--Grid Item-->
                <div class="column is-4">
                  <div class="card-grid-item">
                    <div class="h-avatar is-large">
                      <img
                        class="avatar is-squared"
                        src="/@images/photo/demo/apps/9.png"
                        alt=""
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
                      Banking Solution Website
                    </h3>
                    <p data-filter-match>2 months remaining</p>
                    <div class="description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quo tandem modo? At certe gravius.
                      </p>
                    </div>
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
                          <Icon icon="feather:eye" />
                        </span>
                        <span>View</span>
                      </button>
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:edit-2" />
                        </span>
                        <span>Edit</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!--Grid Item-->
                <div class="column is-4">
                  <div class="card-grid-item">
                    <div class="h-avatar is-large">
                      <img
                        class="avatar is-squared"
                        src="/@images/photo/demo/apps/10.png"
                        alt=""
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
                    <h3 class="dark-inverted" data-filter-match>
                      HR Webapp Design
                    </h3>
                    <p data-filter-match>2 months remaining</p>
                    <div class="description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quo tandem modo? At certe gravius.
                      </p>
                    </div>
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
                          <Icon icon="feather:eye" />
                        </span>
                        <span>View</span>
                      </button>
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:edit-2" />
                        </span>
                        <span>Edit</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!--Grid Item-->
                <div class="column is-4">
                  <div class="card-grid-item">
                    <div class="h-avatar is-large">
                      <img
                        class="avatar is-squared"
                        src="/@images/photo/demo/apps/11.png"
                        alt=""
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
                      Ice Cream Delivery Dashboard
                    </h3>
                    <p data-filter-match>1 week remaining</p>
                    <div class="description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quo tandem modo? At certe gravius.
                      </p>
                    </div>
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
                          <Icon icon="feather:eye" />
                        </span>
                        <span>View</span>
                      </button>
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:edit-2" />
                        </span>
                        <span>Edit</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!--Grid Item-->
                <div class="column is-4">
                  <div class="card-grid-item">
                    <div class="h-avatar is-large">
                      <img
                        class="avatar is-squared"
                        src="/@images/photo/demo/apps/12.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <img
                        class="badge"
                        src="/@images/icons/stacks/css3.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <h3 class="dark-inverted" data-filter-match>
                      Mobile App Landing Page
                    </h3>
                    <p data-filter-match>3 months remaining</p>
                    <div class="description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quo tandem modo? At certe gravius.
                      </p>
                    </div>
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
                          <Icon icon="feather:eye" />
                        </span>
                        <span>View</span>
                      </button>
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:edit-2" />
                        </span>
                        <span>Edit</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!--Grid Item-->
                <div class="column is-4">
                  <div class="card-grid-item">
                    <div class="h-avatar is-large">
                      <img
                        class="avatar is-squared"
                        src="/@images/photo/demo/apps/13.png"
                        alt=""
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
                      Web Marketing Landing Page
                    </h3>
                    <p data-filter-match>4 months remaining</p>
                    <div class="description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quo tandem modo? At certe gravius.
                      </p>
                    </div>
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
                          <Icon icon="feather:eye" />
                        </span>
                        <span>View</span>
                      </button>
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:edit-2" />
                        </span>
                        <span>Edit</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!--Grid Item-->
                <div class="column is-4">
                  <div class="card-grid-item">
                    <div class="h-avatar is-large">
                      <img
                        class="avatar is-squared"
                        src="/@images/photo/demo/apps/14.jpg"
                        alt=""
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
                      Startup Landing Page
                    </h3>
                    <p data-filter-match>1 month remaining</p>
                    <div class="description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quo tandem modo? At certe gravius.
                      </p>
                    </div>
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
                          <Icon icon="feather:eye" />
                        </span>
                        <span>View</span>
                      </button>
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:edit-2" />
                        </span>
                        <span>Edit</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!--Grid Item-->
                <div class="column is-4">
                  <div class="card-grid-item">
                    <div class="h-avatar is-large">
                      <img
                        class="avatar is-squared"
                        src="/@images/photo/demo/apps/15.png"
                        alt=""
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
                      Expense Management System
                    </h3>
                    <p data-filter-match>5 months remaining</p>
                    <div class="description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quo tandem modo? At certe gravius.
                      </p>
                    </div>
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
                          <Icon icon="feather:eye" />
                        </span>
                        <span>View</span>
                      </button>
                      <button class="button h-button is-dark-outlined">
                        <span class="icon">
                          <Icon icon="feather:edit-2" />
                        </span>
                        <span>Edit</span>
                      </button>
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
          </div>
        </div>
      </div>
    </div>
  </WebappLayout>
</template>

<style lang="scss">
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/abstracts/_mixins.scss';
@import '../../assets/scss/pages/grids/_grid-cards.scss';
</style>
