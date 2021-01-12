<script setup lang="ts">
import { useTitle } from '@vueuse/core'

useTitle('List Flex 1 - WebApp - Vuero')
</script>

<template>
  <WebappLayout>
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-project"
      class="view-wrapper is-webapp"
      data-page-title="Flex Lists"
      data-naver-offset="214"
      data-menu-item="#layouts-navbar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered is-webapp">
            <div class="title-wrap">
              <h1 class="title is-4">Flex Lists</h1>
            </div>

            <Toolbar />
          </div>

          <div class="list-flex-toolbar is-webapp flex-list-v1">
            <div class="control has-icon">
              <input
                class="input custom-text-filter"
                placeholder="Search..."
                data-filter-target=".flex-table-item"
              />
              <div class="form-icon">
                <Icon icon="feather:search" />
              </div>
            </div>

            <div class="buttons">
              <button class="button h-button is-primary is-elevated">
                <span class="icon">
                  <Icon icon="fa-plus" />
                </span>
                <span>Add User</span>
              </button>
            </div>
          </div>

          <div class="page-content-inner is-webapp">
            <div class="flex-list-wrapper flex-list-v1 is-webapp">
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

              <div class="flex-table">
                <!--Table header-->
                <div class="flex-table-header" data-filter-hide>
                  <span class="is-grow">User</span>
                  <span>Location</span>
                  <span>Industry</span>
                  <span>Status</span>
                  <span>Relations</span>
                  <span class="cell-end">Actions</span>
                </div>

                <div class="flex-list-inner">
                  <!--Table item-->
                  <div class="flex-table-item">
                    <div class="flex-table-cell is-media is-grow">
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
                      <div>
                        <span class="item-name dark-inverted" data-filter-match
                          >Erik K.</span
                        >
                        <span class="item-meta">
                          <span data-filter-match>Product Manager</span>
                        </span>
                      </div>
                    </div>
                    <div class="flex-table-cell" data-th="Location">
                      <span class="light-text" data-filter-match
                        >New York, NY</span
                      >
                    </div>
                    <div class="flex-table-cell" data-th="Industry">
                      <span class="light-text" data-filter-match>Software</span>
                    </div>
                    <div class="flex-table-cell" data-th="Status">
                      <span class="tag is-success is-rounded" data-filter-match
                        >Online</span
                      >
                    </div>
                    <div class="flex-table-cell" data-th="Relations">
                      <div class="avatar-stack is-pushed-mobile">
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
                            src="/@images/avatars/photos/27.jpg"
                            alt=""
                            data-user-popover="10"
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
                      <FlexTableContextMenuAlt />
                    </div>
                  </div>

                  <!--Table item-->
                  <div class="flex-table-item">
                    <div class="flex-table-cell is-media is-grow">
                      <div class="h-avatar is-medium">
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
                      <div>
                        <span class="item-name dark-inverted" data-filter-match
                          >Jimmy H.</span
                        >
                        <span class="item-meta">
                          <span data-filter-match>Project Manager</span>
                        </span>
                      </div>
                    </div>
                    <div class="flex-table-cell" data-th="Location">
                      <span class="light-text" data-filter-match
                        >Los Angeles, CA</span
                      >
                    </div>
                    <div class="flex-table-cell" data-th="Industry">
                      <span class="light-text" data-filter-match>Business</span>
                    </div>
                    <div class="flex-table-cell" data-th="Status">
                      <span class="tag is-rounded" data-filter-match
                        >Offline</span
                      >
                    </div>
                    <div class="flex-table-cell" data-th="Relations">
                      <div class="avatar-stack is-pushed-mobile">
                        <div class="h-avatar is-small">
                          <span
                            class="avatar is-fake is-danger"
                            data-user-popover="35"
                          >
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
                    <div class="flex-table-cell is-media is-grow">
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
                      <div>
                        <span class="item-name dark-inverted" data-filter-match
                          >Greta K.</span
                        >
                        <span class="item-meta">
                          <span data-filter-match>Sales Manager</span>
                        </span>
                      </div>
                    </div>
                    <div class="flex-table-cell" data-th="Location">
                      <span class="light-text" data-filter-match
                        >Berlin, Germany</span
                      >
                    </div>
                    <div class="flex-table-cell" data-th="Industry">
                      <span class="light-text" data-filter-match>Business</span>
                    </div>
                    <div class="flex-table-cell" data-th="Status">
                      <span class="tag is-success is-rounded" data-filter-match
                        >Online</span
                      >
                    </div>
                    <div class="flex-table-cell" data-th="Relations">
                      <div class="avatar-stack is-pushed-mobile">
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
                            class="avatar is-fake is-warning"
                            data-user-popover="37"
                          >
                            <span>AT</span>
                          </span>
                        </div>
                        <div class="h-avatar is-small">
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
                        </div>
                        <div class="h-avatar is-small">
                          <span class="avatar is-more">
                            <span class="inner">
                              <span>+6</span>
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
                    <div class="flex-table-cell is-media is-grow">
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
                          src="/@images/icons/flags/united-states-of-america.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div>
                        <span class="item-name dark-inverted" data-filter-match
                          >Melany W.</span
                        >
                        <span class="item-meta">
                          <span data-filter-match>Web Developer</span>
                        </span>
                      </div>
                    </div>
                    <div class="flex-table-cell" data-th="Location">
                      <span class="light-text" data-filter-match
                        >San Jose, CA</span
                      >
                    </div>
                    <div class="flex-table-cell" data-th="Industry">
                      <span class="light-text" data-filter-match>Design</span>
                    </div>
                    <div class="flex-table-cell" data-th="Status">
                      <span class="tag is-success is-rounded" data-filter-match
                        >Online</span
                      >
                    </div>
                    <div class="flex-table-cell" data-th="Relations">
                      <div class="avatar-stack is-pushed-mobile">
                        <div class="h-avatar is-small">
                          <span
                            class="avatar is-fake is-success"
                            data-user-popover="36"
                          >
                            <span>BT</span>
                          </span>
                        </div>
                        <div class="h-avatar is-small">
                          <span
                            class="avatar is-fake is-warning"
                            data-user-popover="37"
                          >
                            <span>AT</span>
                          </span>
                        </div>
                        <div class="h-avatar is-small">
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
                        </div>
                      </div>
                    </div>
                    <div class="flex-table-cell cell-end" data-th="Actions">
                      <FlexTableContextMenuAlt />
                    </div>
                  </div>

                  <!--Table item-->
                  <div class="flex-table-item">
                    <div class="flex-table-cell is-media is-grow">
                      <div class="h-avatar is-medium">
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
                      <div>
                        <span class="item-name dark-inverted" data-filter-match
                          >Joshua S.</span
                        >
                        <span class="item-meta">
                          <span data-filter-match>Backend Developer</span>
                        </span>
                      </div>
                    </div>
                    <div class="flex-table-cell" data-th="Location">
                      <span class="light-text" data-filter-match
                        >Las Vegas, NV</span
                      >
                    </div>
                    <div class="flex-table-cell" data-th="Industry">
                      <span class="light-text" data-filter-match>Software</span>
                    </div>
                    <div class="flex-table-cell" data-th="Status">
                      <span class="tag is-danger is-rounded" data-filter-match
                        >Busy</span
                      >
                    </div>
                    <div class="flex-table-cell" data-th="Relations">
                      <div class="avatar-stack is-pushed-mobile">
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
                      </div>
                    </div>
                    <div class="flex-table-cell cell-end" data-th="Actions">
                      <FlexTableContextMenuAlt />
                    </div>
                  </div>

                  <!--Table item-->
                  <div class="flex-table-item">
                    <div class="flex-table-cell is-media is-grow">
                      <div class="h-avatar is-medium">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/30.jpg"
                          alt=""
                          data-user-popover="26"
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
                      <div>
                        <span class="item-name dark-inverted" data-filter-match
                          >Clément D.</span
                        >
                        <span class="item-meta">
                          <span data-filter-match>Software Engineer</span>
                        </span>
                      </div>
                    </div>
                    <div class="flex-table-cell" data-th="Location">
                      <span class="light-text" data-filter-match
                        >Toulouse, France</span
                      >
                    </div>
                    <div class="flex-table-cell" data-th="Industry">
                      <span class="light-text" data-filter-match>Software</span>
                    </div>
                    <div class="flex-table-cell" data-th="Status">
                      <span class="tag is-rounded" data-filter-match
                        >Offline</span
                      >
                    </div>
                    <div class="flex-table-cell" data-th="Relations">
                      <div class="avatar-stack is-pushed-mobile">
                        <div class="h-avatar is-small">
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
                        </div>
                        <div class="h-avatar is-small">
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
                        </div>
                      </div>
                    </div>
                    <div class="flex-table-cell cell-end" data-th="Actions">
                      <FlexTableContextMenuAlt />
                    </div>
                  </div>

                  <!--Table item-->
                  <div class="flex-table-item">
                    <div class="flex-table-cell is-media is-grow">
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
                          src="/@images/icons/flags/united-states-of-america.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div>
                        <span class="item-name dark-inverted" data-filter-match
                          >Tara S.</span
                        >
                        <span class="item-meta">
                          <span data-filter-match>UI/UX Designer</span>
                        </span>
                      </div>
                    </div>
                    <div class="flex-table-cell" data-th="Location">
                      <span class="light-text" data-filter-match
                        >New York, NY</span
                      >
                    </div>
                    <div class="flex-table-cell" data-th="Industry">
                      <span class="light-text" data-filter-match>Design</span>
                    </div>
                    <div class="flex-table-cell" data-th="Status">
                      <span class="tag is-info is-rounded" data-filter-match
                        >Working</span
                      >
                    </div>
                    <div class="flex-table-cell" data-th="Relations">
                      <div class="avatar-stack is-pushed-mobile">
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
                        </div>
                        <div class="h-avatar is-small">
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
                      <FlexTableContextMenuAlt />
                    </div>
                  </div>

                  <!--Table item-->
                  <div class="flex-table-item">
                    <div class="flex-table-cell is-media is-grow">
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
                      <div>
                        <span class="item-name dark-inverted" data-filter-match
                          >Kelly M.</span
                        >
                        <span class="item-meta">
                          <span data-filter-match>Product Manager</span>
                        </span>
                      </div>
                    </div>
                    <div class="flex-table-cell" data-th="Location">
                      <span class="light-text" data-filter-match
                        >London, UK</span
                      >
                    </div>
                    <div class="flex-table-cell" data-th="Industry">
                      <span class="light-text" data-filter-match>Software</span>
                    </div>
                    <div class="flex-table-cell" data-th="Status">
                      <span class="tag is-success is-rounded" data-filter-match
                        >online</span
                      >
                    </div>
                    <div class="flex-table-cell" data-th="Relations">
                      <div class="avatar-stack is-pushed-mobile">
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
                        <div class="h-avatar is-small">
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
                      </div>
                    </div>
                    <div class="flex-table-cell cell-end" data-th="Actions">
                      <FlexTableContextMenuAlt />
                    </div>
                  </div>

                  <!--Table item-->
                  <div class="flex-table-item">
                    <div class="flex-table-cell is-media is-grow">
                      <div class="h-avatar is-medium">
                        <span
                          class="avatar is-fake is-warning"
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
                      <div>
                        <span class="item-name dark-inverted" data-filter-match
                          >Alan T.</span
                        >
                        <span class="item-meta">
                          <span data-filter-match>Software Engineer</span>
                        </span>
                      </div>
                    </div>
                    <div class="flex-table-cell" data-th="Location">
                      <span class="light-text" data-filter-match
                        >San Francisco, CA</span
                      >
                    </div>
                    <div class="flex-table-cell" data-th="Industry">
                      <span class="light-text" data-filter-match>Software</span>
                    </div>
                    <div class="flex-table-cell" data-th="Status">
                      <span class="tag is-rounded" data-filter-match
                        >Offline</span
                      >
                    </div>
                    <div class="flex-table-cell" data-th="Relations">
                      <div class="avatar-stack is-pushed-mobile">
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
                      </div>
                    </div>
                    <div class="flex-table-cell cell-end" data-th="Actions">
                      <FlexTableContextMenuAlt />
                    </div>
                  </div>

                  <!--Table item-->
                  <div class="flex-table-item">
                    <div class="flex-table-cell is-media is-grow">
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
                          src="/@images/icons/flags/australia.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div>
                        <span class="item-name dark-inverted" data-filter-match
                          >Courtney W.</span
                        >
                        <span class="item-meta">
                          <span data-filter-match>Web Developer</span>
                        </span>
                      </div>
                    </div>
                    <div class="flex-table-cell" data-th="Location">
                      <span class="light-text" data-filter-match
                        >Melbourne, Australia</span
                      >
                    </div>
                    <div class="flex-table-cell" data-th="Industry">
                      <span class="light-text" data-filter-match>Software</span>
                    </div>
                    <div class="flex-table-cell" data-th="Status">
                      <span class="tag is-rounded" data-filter-match
                        >Offline</span
                      >
                    </div>
                    <div class="flex-table-cell" data-th="Relations">
                      <div class="avatar-stack is-pushed-mobile">
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
                            src="/@images/avatars/photos/27.jpg"
                            alt=""
                            data-user-popover="10"
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
                      <FlexTableContextMenuAlt />
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
