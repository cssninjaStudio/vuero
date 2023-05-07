<script setup lang="ts">
type TabId = 'list' | 'grid' | 'app' | 'utility'
const activeTab = ref<TabId>('list')
</script>

<template>
  <div class="navbar-subnavbar-inner tabs-wrapper">
    <div class="tabs-inner">
      <div class="tabs is-centered is-4">
        <ul>
          <li :class="[activeTab === 'list' && 'is-active']">
            <a
              tabindex="0"
              role="button"
              @keydown.space.prevent="activeTab = 'list'"
              @click="activeTab = 'list'"
              >List Views</a
            >
          </li>
          <li :class="[activeTab === 'grid' && 'is-active']">
            <a
              tabindex="0"
              role="button"
              @keydown.space.prevent="activeTab = 'grid'"
              @click="activeTab = 'grid'"
              >Grid Views</a
            >
          </li>
          <li :class="[activeTab === 'app' && 'is-active']">
            <a
              tabindex="0"
              role="button"
              @keydown.space.prevent="activeTab = 'app'"
              @click="activeTab = 'app'"
              >Pages</a
            >
          </li>
          <li :class="[activeTab === 'utility' && 'is-active']">
            <a
              tabindex="0"
              role="button"
              @keydown.space.prevent="activeTab = 'utility'"
              @click="activeTab = 'utility'"
              >Utility</a
            >
          </li>
        </ul>
      </div>
    </div>

    <div class="container">
      <div
        id="list-pages-tab"
        class="tab-content"
        :class="[activeTab === 'list' && 'is-active']"
      >
        <div class="tab-content-inner">
          <div class="center has-slimscroll">
            <div class="columns">
              <div class="column is-3">
                <h4 class="column-heading">Lists</h4>
                <ul>
                  <li>
                    <RouterLink to="/navbar/layouts">
                      <i aria-hidden="true" class="lnil lnil-list-alt"></i>
                      <span>List View V1</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/list-view-2">
                      <i aria-hidden="true" class="lnil lnil-list-alt"></i>
                      <span>List View V2</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/list-view-3">
                      <i aria-hidden="true" class="lnil lnil-list-alt"></i>
                      <span>List View V3</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/list-view-4">
                      <i aria-hidden="true" class="lnil lnil-list-alt"></i>
                      <span>List View V4</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Flex Lists</h4>
                <ul>
                  <li>
                    <RouterLink to="/navbar/layouts/list-flex-1">
                      <i aria-hidden="true" class="lnil lnil-list-alt-1"></i>
                      <span>Flex List V1</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/list-flex-2">
                      <i aria-hidden="true" class="lnil lnil-list-alt-1"></i>
                      <span>Flex List V2</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/list-flex-3">
                      <i aria-hidden="true" class="lnil lnil-list-alt-1"></i>
                      <span>Flex List V3</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Datatables</h4>
                <ul>
                  <li>
                    <RouterLink to="/navbar/layouts/list-datatable-1">
                      <i aria-hidden="true" class="lnil lnil-layout-alt"></i>
                      <span>Table List V1</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/list-datatable-2">
                      <i aria-hidden="true" class="lnil lnil-layout-alt"></i>
                      <span>Table List V2</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/list-datatable-3">
                      <i aria-hidden="true" class="lnil lnil-layout-alt"></i>
                      <span>Table List V3</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <a href="https://cssninja.io" class="column-placeholder">
                  <img class="light-image" src="/images/icons/misc/buoy.svg" alt="" />
                  <img class="dark-image" src="/images/icons/misc/buoy-dark.svg" alt="" />
                  <h3>Support</h3>
                </a>
                <a href="https://docs.cssninja.io/vuero" class="column-placeholder">
                  <img class="light-image" src="/images/icons/misc/docs.svg" alt="" />
                  <img class="dark-image" src="/images/icons/misc/docs-dark.svg" alt="" />
                  <h3>Documentation</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="grid-pages-tab"
        class="tab-content"
        :class="[activeTab === 'grid' && 'is-active']"
      >
        <div class="tab-content-inner">
          <div class="center has-slimscroll">
            <div class="columns">
              <div class="column is-3">
                <h4 class="column-heading">Cards</h4>
                <ul>
                  <li>
                    <RouterLink to="/navbar/layouts/grid-cards-1">
                      <i aria-hidden="true" class="lnil lnil-grid-alt"></i>
                      <span>Card Grid V1</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/grid-cards-2">
                      <i aria-hidden="true" class="lnil lnil-grid-alt"></i>
                      <span>Card Grid V2</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/grid-cards-3">
                      <i aria-hidden="true" class="lnil lnil-grid-alt"></i>
                      <span>Card Grid V3</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/grid-cards-4">
                      <i aria-hidden="true" class="lnil lnil-grid-alt"></i>
                      <span>Card Grid V4</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Tiles</h4>
                <ul>
                  <li>
                    <RouterLink to="/navbar/layouts/grid-tiles-1">
                      <i aria-hidden="true" class="lnil lnil-layout-alt-2"></i>
                      <span>Tile Grid V1</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/grid-tiles-2">
                      <i aria-hidden="true" class="lnil lnil-layout-alt-2"></i>
                      <span>Tile Grid V2</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/grid-tiles-3">
                      <i aria-hidden="true" class="lnil lnil-layout-alt-2"></i>
                      <span>Tile Grid V3</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Users</h4>
                <ul>
                  <li>
                    <RouterLink to="/navbar/layouts/grid-users-1">
                      <i aria-hidden="true" class="lnil lnil-users-alt"></i>
                      <span>User Grid V1</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/grid-users-2">
                      <i aria-hidden="true" class="lnil lnil-users-alt"></i>
                      <span>User Grid V2</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/grid-users-3">
                      <i aria-hidden="true" class="lnil lnil-users-alt"></i>
                      <span>User Grid V3</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/grid-users-4">
                      <i aria-hidden="true" class="lnil lnil-users-alt"></i>
                      <span>User Grid V4</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <a href="https://cssninja.io" class="column-placeholder">
                  <img class="light-image" src="/images/icons/misc/buoy.svg" alt="" />
                  <img class="dark-image" src="/images/icons/misc/buoy-dark.svg" alt="" />
                  <h3>Support</h3>
                </a>
                <a href="https://docs.cssninja.io/vuero" class="column-placeholder">
                  <img class="light-image" src="/images/icons/misc/docs.svg" alt="" />
                  <img class="dark-image" src="/images/icons/misc/docs-dark.svg" alt="" />
                  <h3>Documentation</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="app-pages-tab"
        class="tab-content"
        :class="[activeTab === 'app' && 'is-active']"
      >
        <div class="tab-content-inner">
          <div class="center has-slimscroll">
            <div class="columns">
              <div class="column is-3">
                <h4 class="column-heading">Personal</h4>
                <ul>
                  <li>
                    <RouterLink to="/navbar/layouts/profile-view">
                      <i aria-hidden="true" class="lnil lnil-user-alt"></i>
                      <span>Profile</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/profile-edit">
                      <i aria-hidden="true" class="lnil lnil-pencil"></i>
                      <span>Edit Profile</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/profile-notifications">
                      <i aria-hidden="true" class="lnil lnil-notification"></i>
                      <span>Notifications</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/profile-settings">
                      <i aria-hidden="true" class="lnil lnil-cog"></i>
                      <span>Settings</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Pages</h4>
                <ul>
                  <li>
                    <RouterLink to="/auth/login">
                      <i aria-hidden="true" class="lnil lnil-pointer-right"></i>
                      <span>Login v1</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/auth/login-2">
                      <i aria-hidden="true" class="lnil lnil-pointer-right"></i>
                      <span>Login v2</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/auth/login-3">
                      <i aria-hidden="true" class="lnil lnil-pointer-right"></i>
                      <span>Login v3</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/auth/signup-2">
                      <i aria-hidden="true" class="lnil lnil-crown"></i>
                      <span>Signup v1</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/auth/signup-3">
                      <i aria-hidden="true" class="lnil lnil-crown"></i>
                      <span>Signup v2</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/auth/signup-1">
                      <i aria-hidden="true" class="lnil lnil-crown"></i>
                      <span>Signup Flow</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Subpages</h4>
                <ul>
                  <li>
                    <RouterLink to="/navbar/layouts/saas-billing">
                      <i aria-hidden="true" class="lnil lnil-credit-card"></i>
                      <span>Saas Billing</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="navbar">
                      <i aria-hidden="true" class="lnil lnil-door-alt"></i>
                      <span>Welcome</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/action-page-1">
                      <i aria-hidden="true" class="lnil lnil-thunderbolt"></i>
                      <span>Action Page V1</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/action-page-2">
                      <i aria-hidden="true" class="lnil lnil-thunderbolt"></i>
                      <span>Action Page V2</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/search-results">
                      <i aria-hidden="true" class="lnil lnil-search-alt"></i>
                      <span>Search Results</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/search-empty">
                      <i aria-hidden="true" class="lnil lnil-search-alt"></i>
                      <span>Empty Search</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Projects</h4>
                <ul>
                  <li>
                    <RouterLink to="/navbar/layouts/projects-projects-1">
                      <i aria-hidden="true" class="lnil lnil-grid-alt"></i>
                      <span>Projects V1</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/projects-projects-2">
                      <i aria-hidden="true" class="lnil lnil-grid-alt"></i>
                      <span>Projects V2</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/projects-projects-3">
                      <i aria-hidden="true" class="lnil lnil-grid-alt"></i>
                      <span>Projects V3</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/projects-details">
                      <i aria-hidden="true" class="lnil lnil-layout"></i>
                      <span>Project Details</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/kanban-board">
                      <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
                      <span>Project Board</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="utility-pages-tab"
        class="tab-content"
        :class="[activeTab === 'utility' && 'is-active']"
      >
        <div class="tab-content-inner">
          <div class="center has-slimscroll">
            <div class="columns">
              <div class="column is-3">
                <h4 class="column-heading">Utility</h4>
                <ul>
                  <li>
                    <RouterLink to="/navbar/layouts/utility-account-confirm">
                      <i aria-hidden="true" class="lnil lnil-thunderbolt"></i>
                      <span>Confirm Account</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/utility-promotion">
                      <i aria-hidden="true" class="lnil lnil-magnet"></i>
                      <span>Promotion Page</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/utility-invoice">
                      <i aria-hidden="true" class="lnil lnil-calculator-alt"></i>
                      <span>Invoice</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/status">
                      <i aria-hidden="true" class="lnil lnil-checkmark-circle"></i>
                      <span>App Status</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/roadmap">
                      <i aria-hidden="true" class="lnil lnil-pyramids"></i>
                      <span>Roadmap</span>
                      <VTag label="v2.4" color="primary" outlined curved />
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Onboarding</h4>
                <ul>
                  <li>
                    <RouterLink to="/navbar/layouts/onboarding-page-1">
                      <i aria-hidden="true" class="lnil lnil-train"></i>
                      <span>Onboarding V1</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/onboarding-page-2">
                      <i aria-hidden="true" class="lnil lnil-train-alt"></i>
                      <span>Onboarding V2</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/onboarding-page-3">
                      <i aria-hidden="true" class="lnil lnil-car"></i>
                      <span>Onboarding V3</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/onboarding-page-4">
                      <i aria-hidden="true" class="lnil lnil-car-alt"></i>
                      <span>Onboarding V4</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/onboarding-page-5">
                      <i aria-hidden="true" class="lnil lnil-train-alt"></i>
                      <span>Onboarding V5</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Error</h4>
                <ul>
                  <li>
                    <RouterLink to="/error/page-1">
                      <i aria-hidden="true" class="lnil lnil-cross-circle"></i>
                      <span>Error Page V1</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/error/page-2">
                      <i aria-hidden="true" class="lnil lnil-cross-circle"></i>
                      <span>Error Page V2</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/error/page-3">
                      <i aria-hidden="true" class="lnil lnil-cross-circle"></i>
                      <span>Error Page V3</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/error/page-4">
                      <i aria-hidden="true" class="lnil lnil-cross-circle"></i>
                      <span>Error Page V4</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/error/page-5">
                      <i aria-hidden="true" class="lnil lnil-cross-circle"></i>
                      <span>Error Page V5</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Placeload</h4>
                <ul>
                  <li>
                    <RouterLink to="/navbar/layouts/placeload-1">
                      <i aria-hidden="true" class="lnil lnil lnil-reload"></i>
                      <span>Placeload V1</span>
                      <VTag label="v1.2" color="primary" outlined curved />
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/placeload-2">
                      <i aria-hidden="true" class="lnil lnil lnil-reload"></i>
                      <span>Placeload V2</span>
                      <VTag label="v1.2" color="primary" outlined curved />
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/placeload-3">
                      <i aria-hidden="true" class="lnil lnil lnil-reload"></i>
                      <span>Placeload V3</span>
                      <VTag label="v1.2" color="primary" outlined curved />
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/placeload-4">
                      <i aria-hidden="true" class="lnil lnil lnil-reload"></i>
                      <span>Placeload V4</span>
                      <VTag label="v1.2" color="primary" outlined curved />
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/mixins';
@import '/@src/scss/layout/navbar';
@import '/@src/scss/layout/responsive';
</style>
