<script lang="ts">
import { defineComponent } from 'vue'

const NavbarLayoutsDropdown = defineComponent({
  name: 'NavbarLayoutsDropdown',
  components: {},
  setup() {
    // NavbarLayoutsDropdown - Composition API

    return {}
  },
})

export default NavbarLayoutsDropdown
</script>

<template>
  <div class="dropdown is-modern is-spaced dropdown-trigger has-mega-dropdown">
    <div class="is-trigger" aria-haspopup="true" aria-controls="dropdown-menu">
      <button
        class="button h-button is-rounded"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
      >
        <span>Layouts</span>
        <span class="caret">
          <Icon icon="feather:chevron-down" />
        </span>
      </button>
    </div>
    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <div class="category-selector">
          <div class="title-wrap">
            <h4>Select a category</h4>
          </div>
          <div class="category-selector-inner">
            <div data-category="lists-menu" class="category-item">
              <i class="lnil lnil-list-alt"></i>
              <span>Lists</span>
            </div>
            <div data-category="grids-menu" class="category-item">
              <i class="lnil lnil-grid-alt"></i>
              <span>Grids</span>
            </div>
            <div data-category="pages-menu" class="category-item">
              <i class="lnil lnil-layout"></i>
              <span>Pages</span>
            </div>
            <div data-category="subpages-menu" class="category-item">
              <i class="lnil lnil-layout-alt-1"></i>
              <span>Subpages</span>
            </div>
            <div data-category="errors-menu" class="category-item">
              <i class="lnil lnil-lock-alt"></i>
              <span>Errors</span>
            </div>
          </div>
        </div>

        <div class="content-wrap is-hidden">
          <button class="button is-circle back-button">
            <span class="icon is-small">
              <Icon icon="feather:arrow-left" />
            </span>
          </button>

          <div id="lists-menu" class="columns is-gapless mega-menus is-active">
            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-info">
                  <Icon icon="feather:circle" />
                  <span>List Views</span>
                </h4>

                <div class="column-content" data-simplebar>
                  <a
                    href="/webapp-list-view-1.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-list-alt"></i>
                    </div>
                    <div class="meta">
                      <span>List View V1</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-list-view-2.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-list-alt"></i>
                    </div>
                    <div class="meta">
                      <span>List View V2</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-list-view-3.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-list-alt"></i>
                    </div>
                    <div class="meta">
                      <span>List View V3</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-list-view-4.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-list-alt-1"></i>
                    </div>
                    <div class="meta">
                      <span>List View V4</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-green">
                  <Icon icon="feather:circle" />
                  <span>Flex Lists</span>
                </h4>

                <div class="column-content" data-simplebar>
                  <a
                    href="/webapp-list-flex-2.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-list-alt-1"></i>
                    </div>
                    <div class="meta">
                      <span>Flex List V2</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-list-flex-2.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-list-alt-1"></i>
                    </div>
                    <div class="meta">
                      <span>Flex List V2</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-list-flex-3.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-list-alt-1"></i>
                    </div>
                    <div class="meta">
                      <span>Flex List V3</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-orange">
                  <Icon icon="feather:circle" />
                  <span>Datatables</span>
                </h4>

                <div class="column-content" data-simplebar>
                  <a
                    href="/webapp-list-datatable-1.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Datatable V1</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-list-datatable-2.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Datatable V2</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-list-datatable-3.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Datatable V3</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-list-datatable-4.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Datatable V4</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="grids-menu" class="columns is-gapless mega-menus">
            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-purple">
                  <Icon icon="feather:circle" />
                  <span>Cards</span>
                </h4>

                <div class="column-content">
                  <a
                    href="/webapp-grid-cards-1.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-grid-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Card Grid V1</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-grid-cards-2.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-grid-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Card Grid V2</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-grid-cards-3.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-grid-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Card Grid V3</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-grid-cards-4.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-grid-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Card Grid V4</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-secondary">
                  <Icon icon="feather:circle" />
                  <span>Tiles</span>
                </h4>

                <div class="column-content">
                  <a
                    href="/webapp-grid-tiles-1.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt-2"></i>
                    </div>
                    <div class="meta">
                      <span>Tile Grid V1</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-grid-tiles-2.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt-2"></i>
                    </div>
                    <div class="meta">
                      <span>Tile Grid V2</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-grid-tiles-3.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt-2"></i>
                    </div>
                    <div class="meta">
                      <span>Tile Grid V3</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-success">
                  <Icon icon="feather:circle" />
                  <span>Users</span>
                </h4>

                <div class="column-content">
                  <a
                    href="/webapp-grid-users-1.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-users-alt"></i>
                    </div>
                    <div class="meta">
                      <span>User Grid V1</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-grid-users-2.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-users-alt"></i>
                    </div>
                    <div class="meta">
                      <span>User Grid V2</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-grid-users-3.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-users-alt"></i>
                    </div>
                    <div class="meta">
                      <span>User Grid V3</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-grid-users-4.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-users-alt"></i>
                    </div>
                    <div class="meta">
                      <span>User Grid V4</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="pages-menu" class="columns is-gapless mega-menus">
            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-yellow">
                  <Icon icon="feather:circle" />
                  <span>Personal</span>
                </h4>

                <div class="column-content" data-simplebar>
                  <a
                    href="/webapp-profile-view.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-user-alt"></i>
                    </div>
                    <div class="meta">
                      <span>User Profile</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-profile-edit-1.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-pencil"></i>
                    </div>
                    <div class="meta">
                      <span>Edit Profile</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-profile-notifications.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-notification"></i>
                    </div>
                    <div class="meta">
                      <span>Notifications</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-profile-settings.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-cog"></i>
                    </div>
                    <div class="meta">
                      <span>Settings</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-primary">
                  <Icon icon="feather:circle" />
                  <span>Pages</span>
                </h4>

                <div class="column-content" data-simplebar>
                  <a href="/auth-login-1.html" class="dropdown-item is-media">
                    <div class="icon">
                      <i class="lnil lnil-pointer-right"></i>
                    </div>
                    <div class="meta">
                      <span>Login v1</span>
                    </div>
                  </a>
                  <a href="/auth-login-2.html" class="dropdown-item is-media">
                    <div class="icon">
                      <i class="lnil lnil-pointer-right"></i>
                    </div>
                    <div class="meta">
                      <span>Login v2</span>
                    </div>
                  </a>
                  <a href="/auth-login-3.html" class="dropdown-item is-media">
                    <div class="icon">
                      <i class="lnil lnil-pointer-right"></i>
                    </div>
                    <div class="meta">
                      <span>Login v3</span>
                    </div>
                  </a>
                  <a href="/auth-signup-2.html" class="dropdown-item is-media">
                    <div class="icon">
                      <i class="lnil lnil-crown"></i>
                    </div>
                    <div class="meta">
                      <span>Signup v1</span>
                    </div>
                  </a>
                  <a href="/auth-signup-3.html" class="dropdown-item is-media">
                    <div class="icon">
                      <i class="lnil lnil-crown"></i>
                    </div>
                    <div class="meta">
                      <span>Signup v2</span>
                    </div>
                  </a>
                  <a href="/auth-signup-1.html" class="dropdown-item is-media">
                    <div class="icon">
                      <i class="lnil lnil-crown"></i>
                    </div>
                    <div class="meta">
                      <span>Signup Flow</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-search-results.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-search-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Search Results</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-search-empty.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-search-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Empty Search</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-success">
                  <Icon icon="feather:circle" />
                  <span>Projects</span>
                </h4>

                <div class="column-content" data-simplebar>
                  <a
                    href="/webapp-projects-projects.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-grid-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Projects V1</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-projects-projects-2.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-grid-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Projects V2</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-projects-projects-3.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-grid-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Projects V3</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-projects-project.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout"></i>
                    </div>
                    <div class="meta">
                      <span>Project Details</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-kanban-board.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt-1"></i>
                    </div>
                    <div class="meta">
                      <span>Kanban Board</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="subpages-menu" class="columns is-gapless mega-menus">
            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-green">
                  <Icon icon="feather:circle" />
                  <span>Subpages</span>
                </h4>

                <div class="column-content" data-simplebar>
                  <a
                    href="/webapp-saas-billing.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-credit-card"></i>
                    </div>
                    <div class="meta">
                      <span>SaaS Billing</span>
                    </div>
                  </a>
                  <a href="/webapp-welcome.html" class="dropdown-item is-media">
                    <div class="icon">
                      <i class="lnil lnil-door-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Welcome</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-action-page-1.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-thunderbolt"></i>
                    </div>
                    <div class="meta">
                      <span>Action Page V1</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-action-page-2.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-thunderbolt"></i>
                    </div>
                    <div class="meta">
                      <span>Action Page V2</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-yellow">
                  <Icon icon="feather:circle" />
                  <span>Utility</span>
                </h4>

                <div class="column-content" data-simplebar>
                  <a
                    href="/webapp-utility-account-confirm.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-thunderbolt"></i>
                    </div>
                    <div class="meta">
                      <span>Confirm Account</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-utility-promotion.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-magnet"></i>
                    </div>
                    <div class="meta">
                      <span>Promotion Page</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-utility-invoice.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-calculator-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Invoice</span>
                    </div>
                  </a>
                  <a
                    href="/admin-utility-status.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-checkmark-circle"></i>
                    </div>
                    <div class="meta">
                      <span>App Status</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-secondary">
                  <Icon icon="feather:circle" />
                  <span>Onboarding</span>
                </h4>

                <div class="column-content">
                  <a
                    href="/webapp-onboarding-page-1.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-train"></i>
                    </div>
                    <div class="meta">
                      <span>Onboarding V1</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-onboarding-page-2.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-train-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Onboarding V2</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-onboarding-page-3.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-car"></i>
                    </div>
                    <div class="meta">
                      <span>Onboarding V3</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-onboarding-page-4.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-car-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Onboarding V4</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-onboarding-page-5.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-train-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Onboarding V5</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="errors-menu" class="columns is-gapless mega-menus">
            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-secondary">
                  <Icon icon="feather:circle" />
                  <span>Errors</span>
                </h4>

                <div class="column-content" data-simplebar>
                  <a href="/error-page-1.html" class="dropdown-item is-media">
                    <div class="icon">
                      <i class="lnil lnil-cross-circle"></i>
                    </div>
                    <div class="meta">
                      <span>Error Page V1</span>
                    </div>
                  </a>
                  <a href="/error-page-2.html" class="dropdown-item is-media">
                    <div class="icon">
                      <i class="lnil lnil-cross-circle"></i>
                    </div>
                    <div class="meta">
                      <span>Error Page V2</span>
                    </div>
                  </a>
                  <a href="/error-page-3.html" class="dropdown-item is-media">
                    <div class="icon">
                      <i class="lnil lnil-cross-circle"></i>
                    </div>
                    <div class="meta">
                      <span>Error Page V3</span>
                    </div>
                  </a>
                  <a href="/error-page-4.html" class="dropdown-item is-media">
                    <div class="icon">
                      <i class="lnil lnil-cross-circle"></i>
                    </div>
                    <div class="meta">
                      <span>Error Page V4</span>
                    </div>
                  </a>
                  <a href="/error-page-5.html" class="dropdown-item is-media">
                    <div class="icon">
                      <i class="lnil lnil-cross-circle"></i>
                    </div>
                    <div class="meta">
                      <span>Error Page V5</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>