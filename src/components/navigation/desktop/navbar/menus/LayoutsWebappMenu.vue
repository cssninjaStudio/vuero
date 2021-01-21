<script setup lang="ts">
import { ref } from 'vue'
import { activeSubnav } from '/@src/composition/state/ui/webappNavState'

const activeTab = ref<'list' | 'grid' | 'app' | 'utility'>('list')
</script>

<template>
  <div
    id="layouts-webapp-menu"
    :class="[activeSubnav === 'layouts' && 'is-active']"
    class="webapp-subnavbar-inner tabs-wrapper"
  >
    <div class="tabs-inner">
      <div class="tabs is-centered is-4">
        <ul>
          <li :class="[activeTab === 'list' && 'is-active']">
            <a @click="activeTab = 'list'">List Views</a>
          </li>
          <li :class="[activeTab === 'grid' && 'is-active']">
            <a @click="activeTab = 'grid'">Grid Views</a>
          </li>
          <li :class="[activeTab === 'app' && 'is-active']">
            <a @click="activeTab = 'app'">Pages</a>
          </li>
          <li :class="[activeTab === 'utility' && 'is-active']">
            <a @click="activeTab = 'utility'">Utility</a>
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
                    <RouterLink :to="{ name: 'webapp-list-view-1' }">
                      <i class="lnil lnil-list-alt"></i>
                      <span>List View V1</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-list-view-2' }">
                      <i class="lnil lnil-list-alt"></i>
                      <span>List View V2</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-list-view-3' }">
                      <i class="lnil lnil-list-alt"></i>
                      <span>List View V3</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-list-view-4' }">
                      <i class="lnil lnil-list-alt"></i>
                      <span>List View V4</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Flex Lists</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'webapp-list-flex-1' }">
                      <i class="lnil lnil-list-alt-1"></i>
                      <span>Flex List V1</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-list-flex-2' }">
                      <i class="lnil lnil-list-alt-1"></i>
                      <span>Flex List V2</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-list-flex-3' }">
                      <i class="lnil lnil-list-alt-1"></i>
                      <span>Flex List V3</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Datatables</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'webapp-list-datatable-1' }">
                      <i class="lnil lnil-layout-alt"></i>
                      <span>Datatable V1</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-list-datatable-2' }">
                      <i class="lnil lnil-layout-alt"></i>
                      <span>Datatable V2</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-list-datatable-3' }">
                      <i class="lnil lnil-layout-alt"></i>
                      <span>Datatable V3</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-list-datatable-4' }">
                      <i class="lnil lnil-layout-alt"></i>
                      <span>Datatable V4</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <a href="https://cssninja.io" class="column-placeholder">
                  <img
                    class="light-image"
                    src="/images/icons/misc/buoy.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/images/icons/misc/buoy-dark.svg"
                    alt=""
                  />
                  <h3>Support</h3>
                </a>
                <a
                  href="https://docs.huro.cssninja.io"
                  class="column-placeholder"
                >
                  <img
                    class="light-image"
                    src="/images/icons/misc/docs.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/images/icons/misc/docs-dark.svg"
                    alt=""
                  />
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
                    <RouterLink :to="{ name: 'webapp-grid-cards-1' }">
                      <i class="lnil lnil-grid-alt"></i>
                      <span>Card Grid V1</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-grid-cards-2' }">
                      <i class="lnil lnil-grid-alt"></i>
                      <span>Card Grid V2</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-grid-cards-3' }">
                      <i class="lnil lnil-grid-alt"></i>
                      <span>Card Grid V3</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-grid-cards-4' }">
                      <i class="lnil lnil-grid-alt"></i>
                      <span>Card Grid V4</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Tiles</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'webapp-grid-tiles-1' }">
                      <i class="lnil lnil-layout-alt-2"></i>
                      <span>Tile Grid V1</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-grid-tiles-2' }">
                      <i class="lnil lnil-layout-alt-2"></i>
                      <span>Tile Grid V2</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-grid-tiles-3' }">
                      <i class="lnil lnil-layout-alt-2"></i>
                      <span>Tile Grid V3</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Users</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'webapp-grid-users-1' }">
                      <i class="lnil lnil-users-alt"></i>
                      <span>User Grid V1</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-grid-users-2' }">
                      <i class="lnil lnil-users-alt"></i>
                      <span>User Grid V2</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-grid-users-3' }">
                      <i class="lnil lnil-users-alt"></i>
                      <span>User Grid V3</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-grid-users-4' }">
                      <i class="lnil lnil-users-alt"></i>
                      <span>User Grid V4</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <a href="https://cssninja.io" class="column-placeholder">
                  <img
                    class="light-image"
                    src="/images/icons/misc/buoy.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/images/icons/misc/buoy-dark.svg"
                    alt=""
                  />
                  <h3>Support</h3>
                </a>
                <a
                  href="https://docs.huro.cssninja.io"
                  class="column-placeholder"
                >
                  <img
                    class="light-image"
                    src="/images/icons/misc/docs.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/images/icons/misc/docs-dark.svg"
                    alt=""
                  />
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
                    <RouterLink :to="{ name: 'webapp-profile-view' }">
                      <i class="lnil lnil-user-alt"></i>
                      <span>Profile</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-profile-edit-1' }">
                      <i class="lnil lnil-pencil"></i>
                      <span>Edit Profile</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-profile-notifications' }">
                      <i class="lnil lnil-notification"></i>
                      <span>Notifications</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-profile-settings' }">
                      <i class="lnil lnil-cog"></i>
                      <span>Settings</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Pages</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'auth-login-1' }">
                      <i class="lnil lnil-pointer-right"></i>
                      <span>Login v1</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'auth-login-2' }">
                      <i class="lnil lnil-pointer-right"></i>
                      <span>Login v2</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'auth-login-3' }">
                      <i class="lnil lnil-pointer-right"></i>
                      <span>Login v3</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'auth-signup-2' }">
                      <i class="lnil lnil-crown"></i>
                      <span>Signup v1</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'auth-signup-3' }">
                      <i class="lnil lnil-crown"></i>
                      <span>Signup v2</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'auth-signup-1' }">
                      <i class="lnil lnil-crown"></i>
                      <span>Signup Flow</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Subpages</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'webapp-saas-billing' }">
                      <i class="lnil lnil-credit-card"></i>
                      <span>Saas Billing</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp' }">
                      <i class="lnil lnil-door-alt"></i>
                      <span>Welcome</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-action-page-1' }">
                      <i class="lnil lnil-thunderbolt"></i>
                      <span>Action Page V1</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-action-page-2' }">
                      <i class="lnil lnil-thunderbolt"></i>
                      <span>Action Page V2</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-search-results' }">
                      <i class="lnil lnil-search-alt"></i>
                      <span>Search Results</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-search-empty' }">
                      <i class="lnil lnil-search-alt"></i>
                      <span>Empty Search</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Projects</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'webapp-projects-projects' }">
                      <i class="lnil lnil-grid-alt"></i>
                      <span>Projects V1</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-projects-projects-2' }">
                      <i class="lnil lnil-grid-alt"></i>
                      <span>Projects V2</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-projects-projects-3' }">
                      <i class="lnil lnil-grid-alt"></i>
                      <span>Projects V3</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-projects-project' }">
                      <i class="lnil lnil-layout"></i>
                      <span>Project Details</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-kanban-board' }">
                      <i class="lnil lnil-layout-alt-1"></i>
                      <span>Project Board</span>
                      <i class="iconify" data-icon="feather:circle"></i>
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
                    <RouterLink
                      :to="{ name: 'webapp-utility-account-confirm' }"
                    >
                      <i class="lnil lnil-thunderbolt"></i>
                      <span>Confirm Account</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-utility-promotion' }">
                      <i class="lnil lnil-magnet"></i>
                      <span>Promotion Page</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-utility-invoice' }">
                      <i class="lnil lnil-calculator-alt"></i>
                      <span>Invoice</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'status' }">
                      <i class="lnil lnil-checkmark-circle"></i>
                      <span>App Status</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Onboarding</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'webapp-onboarding-page-1' }">
                      <i class="lnil lnil-train"></i>
                      <span>Onboarding V1</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-onboarding-page-2' }">
                      <i class="lnil lnil-train-alt"></i>
                      <span>Onboarding V2</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-onboarding-page-3' }">
                      <i class="lnil lnil-car"></i>
                      <span>Onboarding V3</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-onboarding-page-4' }">
                      <i class="lnil lnil-car-alt"></i>
                      <span>Onboarding V4</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-onboarding-page-5' }">
                      <i class="lnil lnil-train-alt"></i>
                      <span>Onboarding V5</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Error</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'error-page-1' }">
                      <i class="lnil lnil-cross-circle"></i>
                      <span>Error Page V1</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'error-page-2' }">
                      <i class="lnil lnil-cross-circle"></i>
                      <span>Error Page V2</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'error-page-3' }">
                      <i class="lnil lnil-cross-circle"></i>
                      <span>Error Page V3</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'error-page-4' }">
                      <i class="lnil lnil-cross-circle"></i>
                      <span>Error Page V4</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'error-page-5' }">
                      <i class="lnil lnil-cross-circle"></i>
                      <span>Error Page V5</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <a href="https://cssninja.io" class="column-placeholder">
                  <img
                    class="light-image"
                    src="/images/icons/misc/buoy.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/images/icons/misc/buoy-dark.svg"
                    alt=""
                  />
                  <h3>Support</h3>
                </a>
                <a
                  href="https://docs.huro.cssninja.io"
                  class="column-placeholder"
                >
                  <img
                    class="light-image"
                    src="/images/icons/misc/docs.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/images/icons/misc/docs-dark.svg"
                    alt=""
                  />
                  <h3>Documentation</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../../assets/scss/abstracts/_variables.scss';
@import '../../../../../assets/scss/abstracts/_mixins.scss';
@import '../../../../../assets/scss/layout/_navbar.scss';
@import '../../../../../assets/scss/layout/_responsive.scss';
</style>
