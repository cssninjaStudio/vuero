<script lang="ts">
import { defineComponent } from 'vue'

const LayoutsWebappMenu = defineComponent({
  name: 'LayoutsWebappMenu',
  components: {},
  setup() {
    // LayoutsWebappMenu - Composition API

    return {}
  },
})

export default LayoutsWebappMenu
</script>

<template>
  <div
    id="layouts-webapp-menu"
    class="webapp-subnavbar-inner tabs-wrapper is-active"
  >
    <div class="tabs-inner">
      <div class="tabs is-centered is-4">
        <ul>
          <li data-tab="list-pages-tab" class="is-active"><a>List Views</a></li>
          <li data-tab="grid-pages-tab"><a>Grid Views</a></li>
          <li data-tab="app-pages-tab"><a>Pages</a></li>
          <li data-tab="utility-pages-tab"><a>Utility</a></li>
        </ul>
      </div>
    </div>

    <div class="container">
      <div id="list-pages-tab" class="tab-content is-active">
        <div class="tab-content-inner">
          <div class="center has-slimscroll">
            <div class="columns">
              <div class="column is-3">
                <h4 class="column-heading">Lists</h4>
                <ul>
                  <li>
                    <a href="/webapp-list-view-1.html">
                      <i class="lnil lnil-list-alt"></i>
                      <span>List View V1</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-list-view-2.html">
                      <i class="lnil lnil-list-alt"></i>
                      <span>List View V2</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-list-view-3.html">
                      <i class="lnil lnil-list-alt"></i>
                      <span>List View V3</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-list-view-4.html">
                      <i class="lnil lnil-list-alt"></i>
                      <span>List View V4</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Flex Lists</h4>
                <ul>
                  <li>
                    <a href="/webapp-list-flex-1.html">
                      <i class="lnil lnil-list-alt-1"></i>
                      <span>Flex List V1</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-list-flex-2.html">
                      <i class="lnil lnil-list-alt-1"></i>
                      <span>Flex List V2</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-list-flex-3.html">
                      <i class="lnil lnil-list-alt-1"></i>
                      <span>Flex List V3</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Datatables</h4>
                <ul>
                  <li>
                    <a href="/webapp-list-datatable-1.html">
                      <i class="lnil lnil-layout-alt"></i>
                      <span>Datatable V1</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-list-datatable-2.html">
                      <i class="lnil lnil-layout-alt"></i>
                      <span>Datatable V2</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-list-datatable-3.html">
                      <i class="lnil lnil-layout-alt"></i>
                      <span>Datatable V3</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-list-datatable-4.html">
                      <i class="lnil lnil-layout-alt"></i>
                      <span>Datatable V4</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <a
                  href="https://cssninja.io"
                  target="_blank"
                  class="column-placeholder"
                >
                  <img
                    class="light-image"
                    src="assets/img/icons/misc/buoy.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="assets/img/icons/misc/buoy-dark.svg"
                    alt=""
                  />
                  <h3>Support</h3>
                </a>
                <a
                  href="https://docs.huro.cssninja.io"
                  target="_blank"
                  class="column-placeholder"
                >
                  <img
                    class="light-image"
                    src="assets/img/icons/misc/docs.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="assets/img/icons/misc/docs-dark.svg"
                    alt=""
                  />
                  <h3>Documentation</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="grid-pages-tab" class="tab-content">
        <div class="tab-content-inner">
          <div class="center has-slimscroll">
            <div class="columns">
              <div class="column is-3">
                <h4 class="column-heading">Cards</h4>
                <ul>
                  <li>
                    <a href="/webapp-grid-cards-1.html">
                      <i class="lnil lnil-grid-alt"></i>
                      <span>Card Grid V1</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-grid-cards-2.html">
                      <i class="lnil lnil-grid-alt"></i>
                      <span>Card Grid V2</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-grid-cards-3.html">
                      <i class="lnil lnil-grid-alt"></i>
                      <span>Card Grid V3</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-grid-cards-4.html">
                      <i class="lnil lnil-grid-alt"></i>
                      <span>Card Grid V4</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Tiles</h4>
                <ul>
                  <li>
                    <a href="/webapp-grid-tiles-1.html">
                      <i class="lnil lnil-layout-alt-2"></i>
                      <span>Tile Grid V1</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-grid-tiles-2.html">
                      <i class="lnil lnil-layout-alt-2"></i>
                      <span>Tile Grid V2</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-grid-tiles-3.html">
                      <i class="lnil lnil-layout-alt-2"></i>
                      <span>Tile Grid V3</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Users</h4>
                <ul>
                  <li>
                    <a href="/webapp-grid-users-1.html">
                      <i class="lnil lnil-users-alt"></i>
                      <span>User Grid V1</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-grid-users-2.html">
                      <i class="lnil lnil-users-alt"></i>
                      <span>User Grid V2</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-grid-users-3.html">
                      <i class="lnil lnil-users-alt"></i>
                      <span>User Grid V3</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-grid-users-4.html">
                      <i class="lnil lnil-users-alt"></i>
                      <span>User Grid V4</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <a
                  href="https://cssninja.io"
                  target="_blank"
                  class="column-placeholder"
                >
                  <img
                    class="light-image"
                    src="assets/img/icons/misc/buoy.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="assets/img/icons/misc/buoy-dark.svg"
                    alt=""
                  />
                  <h3>Support</h3>
                </a>
                <a
                  href="https://docs.huro.cssninja.io"
                  target="_blank"
                  class="column-placeholder"
                >
                  <img
                    class="light-image"
                    src="assets/img/icons/misc/docs.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="assets/img/icons/misc/docs-dark.svg"
                    alt=""
                  />
                  <h3>Documentation</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="app-pages-tab" class="tab-content">
        <div class="tab-content-inner">
          <div class="center has-slimscroll">
            <div class="columns">
              <div class="column is-3">
                <h4 class="column-heading">Personal</h4>
                <ul>
                  <li>
                    <a href="/webapp-profile-view.html">
                      <i class="lnil lnil-user-alt"></i>
                      <span>Profile</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-profile-edit-1.html">
                      <i class="lnil lnil-pencil"></i>
                      <span>Edit Profile</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-profile-notifications.html">
                      <i class="lnil lnil-notification"></i>
                      <span>Notifications</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-profile-settings.html">
                      <i class="lnil lnil-cog"></i>
                      <span>Settings</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Pages</h4>
                <ul>
                  <li>
                    <a href="/auth-login-1.html">
                      <i class="lnil lnil-pointer-right"></i>
                      <span>Login v1</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/auth-login-2.html">
                      <i class="lnil lnil-pointer-right"></i>
                      <span>Login v2</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/auth-login-3.html">
                      <i class="lnil lnil-pointer-right"></i>
                      <span>Login v3</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/auth-signup-2.html">
                      <i class="lnil lnil-crown"></i>
                      <span>Signup v1</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/auth-signup-3.html">
                      <i class="lnil lnil-crown"></i>
                      <span>Signup v2</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/auth-signup-1.html">
                      <i class="lnil lnil-crown"></i>
                      <span>Signup Flow</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Subpages</h4>
                <ul>
                  <li>
                    <a href="/webapp-saas-billing.html">
                      <i class="lnil lnil-credit-card"></i>
                      <span>Saas Billing</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-welcome.html">
                      <i class="lnil lnil-door-alt"></i>
                      <span>Welcome</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-action-page-1.html">
                      <i class="lnil lnil-thunderbolt"></i>
                      <span>Action Page V1</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-action-page-2.html">
                      <i class="lnil lnil-thunderbolt"></i>
                      <span>Action Page V2</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-search-results.html">
                      <i class="lnil lnil-search-alt"></i>
                      <span>Search Results</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-search-empty.html">
                      <i class="lnil lnil-search-alt"></i>
                      <span>Empty Search</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Projects</h4>
                <ul>
                  <li>
                    <a href="/webapp-projects-projects.html">
                      <i class="lnil lnil-grid-alt"></i>
                      <span>Projects V1</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-projects-projects-2.html">
                      <i class="lnil lnil-grid-alt"></i>
                      <span>Projects V2</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-projects-projects-3.html">
                      <i class="lnil lnil-grid-alt"></i>
                      <span>Projects V3</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-projects-project.html">
                      <i class="lnil lnil-layout"></i>
                      <span>Project Details</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-kanban-board.html">
                      <i class="lnil lnil-layout-alt-1"></i>
                      <span>Project Board</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="utility-pages-tab" class="tab-content">
        <div class="tab-content-inner">
          <div class="center has-slimscroll">
            <div class="columns">
              <div class="column is-3">
                <h4 class="column-heading">Utility</h4>
                <ul>
                  <li>
                    <a href="/webapp-utility-account-confirm.html">
                      <i class="lnil lnil-thunderbolt"></i>
                      <span>Confirm Account</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-utility-promotion.html">
                      <i class="lnil lnil-magnet"></i>
                      <span>Promotion Page</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-utility-invoice.html">
                      <i class="lnil lnil-calculator-alt"></i>
                      <span>Invoice</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/admin-utility-status.html">
                      <i class="lnil lnil-checkmark-circle"></i>
                      <span>App Status</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Onboarding</h4>
                <ul>
                  <li>
                    <a href="/webapp-onboarding-page-1.html">
                      <i class="lnil lnil-train"></i>
                      <span>Onboarding V1</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-onboarding-page-2.html">
                      <i class="lnil lnil-train-alt"></i>
                      <span>Onboarding V2</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-onboarding-page-3.html">
                      <i class="lnil lnil-car"></i>
                      <span>Onboarding V3</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-onboarding-page-4.html">
                      <i class="lnil lnil-car-alt"></i>
                      <span>Onboarding V4</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-onboarding-page-5.html">
                      <i class="lnil lnil-train-alt"></i>
                      <span>Onboarding V5</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Error</h4>
                <ul>
                  <li>
                    <a href="/error-page-1.html">
                      <i class="lnil lnil-cross-circle"></i>
                      <span>Error Page V1</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/error-page-2.html">
                      <i class="lnil lnil-cross-circle"></i>
                      <span>Error Page V2</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/error-page-3.html">
                      <i class="lnil lnil-cross-circle"></i>
                      <span>Error Page V3</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/error-page-4.html">
                      <i class="lnil lnil-cross-circle"></i>
                      <span>Error Page V4</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/error-page-5.html">
                      <i class="lnil lnil-cross-circle"></i>
                      <span>Error Page V5</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <a
                  href="https://cssninja.io"
                  target="_blank"
                  class="column-placeholder"
                >
                  <img
                    class="light-image"
                    src="assets/img/icons/misc/buoy.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="assets/img/icons/misc/buoy-dark.svg"
                    alt=""
                  />
                  <h3>Support</h3>
                </a>
                <a
                  href="https://docs.huro.cssninja.io"
                  target="_blank"
                  class="column-placeholder"
                >
                  <img
                    class="light-image"
                    src="assets/img/icons/misc/docs.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="assets/img/icons/misc/docs-dark.svg"
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