<template>
  <div class="mobile-subsidebar">
    <div class="inner">
      <div class="sidebar-title">
        <h3>Layouts</h3>
      </div>

      <ul class="submenu">
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Lists <Icon icon="chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'admin-list-view-1' }"
                class="is-submenu"
              >
                <i class="lnil lnil-list-alt"></i>
                <span>List View V1</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-list-view-2' }"
                class="is-submenu"
              >
                <i class="lnil lnil-list-alt"></i>
                <span>List View V2</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-list-view-3' }"
                class="is-submenu"
              >
                <i class="lnil lnil-list-alt"></i>
                <span>List View V3</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-list-view-4' }"
                class="is-submenu"
              >
                <i class="lnil lnil-list-alt"></i>
                <span>List View V4</span>
              </RouterLink>
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Flex Lists <Icon icon="chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'admin-list-flex-1' }"
                class="is-submenu"
              >
                <i class="lnil lnil-list-alt-1"></i>
                <span>Flex List V1</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-list-flex-2' }"
                class="is-submenu"
              >
                <i class="lnil lnil-list-alt-1"></i>
                <span>Flex List V2</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-list-flex-3' }"
                class="is-submenu"
              >
                <i class="lnil lnil-list-alt-1"></i>
                <span>Flex List V3</span>
              </RouterLink>
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Datatable <Icon icon="chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'admin-list-datatable-1' }"
                class="is-submenu"
              >
                <i class="lnil lnil-layout-alt"></i>
                <span>Datatable V1</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-list-datatable-2' }"
                class="is-submenu"
              >
                <i class="lnil lnil-layout-alt"></i>
                <span>Datatable V2</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-list-datatable-3' }"
                class="is-submenu"
              >
                <i class="lnil lnil-layout-alt"></i>
                <span>Datatable V3</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-list-datatable-4' }"
                class="is-submenu"
              >
                <i class="lnil lnil-layout-alt"></i>
                <span>Datatable V4</span>
              </RouterLink>
            </li>
          </ul>
        </li>
        <li class="divider"></li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Card Grid <Icon icon="chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'admin-grid-cards-1' }"
                class="is-submenu"
              >
                <i class="lnil lnil-grid-alt"></i>
                <span>Card Grid V1</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-grid-cards-2' }"
                class="is-submenu"
              >
                <i class="lnil lnil-grid-alt"></i>
                <span>Card Grid V2</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-grid-cards-3' }"
                class="is-submenu"
              >
                <i class="lnil lnil-grid-alt"></i>
                <span>Card Grid V3</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-grid-cards-4' }"
                class="is-submenu"
              >
                <i class="lnil lnil-grid-alt"></i>
                <span>Card Grid V4</span>
              </RouterLink>
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Tile Grid <Icon icon="chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'admin-grid-tiles-1' }"
                class="is-submenu"
              >
                <i class="lnil lnil-layout-alt-2"></i>
                <span>Tile Grid V1</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-grid-tiles-2' }"
                class="is-submenu"
              >
                <i class="lnil lnil-layout-alt-2"></i>
                <span>Tile Grid V2</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-grid-tiles-3' }"
                class="is-submenu"
              >
                <i class="lnil lnil-layout-alt-2"></i>
                <span>Tile Grid V3</span>
              </RouterLink>
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >User Grid <Icon icon="chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'admin-grid-users-1' }"
                class="is-submenu"
              >
                <i class="lnil lnil-users-alt"></i>
                <span>User Grid V1</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-grid-users-2' }"
                class="is-submenu"
              >
                <i class="lnil lnil-users-alt"></i>
                <span>User Grid V2</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-grid-users-3' }"
                class="is-submenu"
              >
                <i class="lnil lnil-users-alt"></i>
                <span>User Grid V3</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-grid-users-4' }"
                class="is-submenu"
              >
                <i class="lnil lnil-users-alt"></i>
                <span>User Grid V4</span>
              </RouterLink>
            </li>
          </ul>
        </li>
        <li class="divider"></li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Personal <Icon icon="chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'admin-profile-view' }"
                class="is-submenu"
              >
                <i class="lnil lnil-user-alt"></i>
                <span>Profile</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-profile-edit-1' }"
                class="is-submenu"
              >
                <i class="lnil lnil-pencil"></i>
                <span>Edit Profile</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-profile-notifications' }"
                class="is-submenu"
              >
                <i class="lnil lnil-notification"></i>
                <span>Notifications</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-profile-settings' }"
                class="is-submenu"
              >
                <i class="lnil lnil-cog"></i>
                <span>Settings</span>
              </RouterLink>
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Pages <Icon icon="chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink :to="{ name: 'auth-login-1' }" class="is-submenu">
                <i class="lnil lnil-pointer-right"></i>
                <span>Login v1</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'auth-login-2' }" class="is-submenu">
                <i class="lnil lnil-pointer-right"></i>
                <span>Login v2</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'auth-login-3' }" class="is-submenu">
                <i class="lnil lnil-pointer-right"></i>
                <span>Login v3</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'auth-signup-2' }" class="is-submenu">
                <i class="lnil lnil-crown"></i>
                <span>Signup v1</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'auth-signup-3' }" class="is-submenu">
                <i class="lnil lnil-crown"></i>
                <span>Signup v2</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'auth-signup-1' }" class="is-submenu">
                <i class="lnil lnil-crown"></i>
                <span>Signup Flow</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-search-results' }"
                class="is-submenu"
              >
                <i class="lnil lnil-search-alt"></i>
                <span>Search Results</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-search-empty' }"
                class="is-submenu"
              >
                <i class="lnil lnil-search-alt"></i>
                <span>Empty Search</span>
              </RouterLink>
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Subpages <Icon icon="chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'admin-saas-billing' }"
                class="is-submenu"
              >
                <i class="lnil lnil-credit-card"></i>
                <span>SaaS Billing</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'admin-welcome' }" class="is-submenu">
                <i class="lnil lnil-door-alt"></i>
                <span>Welcome</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-action-page-1' }"
                class="is-submenu"
              >
                <i class="lnil lnil-thunderbolt"></i>
                <span>Action Page V1</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-action-page-2' }"
                class="is-submenu"
              >
                <i class="lnil lnil-thunderbolt"></i>
                <span>Action Page V2</span>
              </RouterLink>
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Projects <Icon icon="chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'admin-projects-projects' }"
                class="is-submenu"
              >
                <i class="lnil lnil-grid-alt"></i>
                <span>Projects V1</span>
                <Icon class="is-auto" icon="feather:map-pin" />
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-projects-projects-2' }"
                class="is-submenu"
              >
                <i class="lnil lnil-grid-alt"></i>
                <span>Projects V2</span>
                <Icon class="is-auto" icon="feather:map-pin" />
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-projects-projects-3' }"
                class="is-submenu"
              >
                <i class="lnil lnil-grid-alt"></i>
                <span>Projects V3</span>
                <Icon class="is-auto" icon="feather:map-pin" />
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-projects-project' }"
                class="is-submenu"
              >
                <i class="lnil lnil-layout"></i>
                <span>Project Details</span>
                <Icon class="is-auto" icon="feather:map-pin" />
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-kanban-board' }"
                class="is-submenu"
              >
                <i class="lnil lnil-layout-alt-1"></i>
                <span>Kanban Board</span>
                <Icon class="is-auto" icon="feather:map-pin" />
              </RouterLink>
            </li>
          </ul>
        </li>
        <li class="divider"></li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Utility <Icon icon="chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'admin-utility-account-confirm' }"
                class="is-submenu"
              >
                <i class="lnil lnil-thunderbolt"></i>
                <span>Confirm Account</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-utility-promotion' }"
                class="is-submenu"
              >
                <i class="lnil lnil-magnet"></i>
                <span>Promotion Page</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-utility-invoice' }"
                class="is-submenu"
              >
                <i class="lnil lnil-calculator-alt"></i>
                <span>Invoice</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-utility-status' }"
                class="is-submenu"
              >
                <i class="lnil lnil-checkmark-circle"></i>
                <span>App Status</span>
              </RouterLink>
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Onboarding <Icon icon="chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'admin-onboarding-page-1' }"
                class="is-submenu"
              >
                <i class="lnil lnil-train"></i>
                <span>Onboarding V1</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-onboarding-page-2' }"
                class="is-submenu"
              >
                <i class="lnil lnil-train-alt"></i>
                <span>Onboarding V2</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-onboarding-page-3' }"
                class="is-submenu"
              >
                <i class="lnil lnil-car"></i>
                <span>Onboarding V3</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-onboarding-page-4' }"
                class="is-submenu"
              >
                <i class="lnil lnil-car-alt"></i>
                <span>Onboarding V4</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-onboarding-page-5' }"
                class="is-submenu"
              >
                <i class="lnil lnil-train"></i>
                <span>Onboarding V5</span>
              </RouterLink>
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Error Pages <Icon icon="chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink :to="{ name: 'error-page-1' }" class="is-submenu">
                <i class="lnil lnil-cross-circle"></i>
                <span>Error 404 V1</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'error-page-2' }" class="is-submenu">
                <i class="lnil lnil-cross-circle"></i>
                <span>Error 404 V2</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'error-page-3' }" class="is-submenu">
                <i class="lnil lnil-cross-circle"></i>
                <span>Error 404 V3</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'error-page-4' }" class="is-submenu">
                <i class="lnil lnil-cross-circle"></i>
                <span>Error 404 V4</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'error-page-5' }" class="is-submenu">
                <i class="lnil lnil-cross-circle"></i>
                <span>Error 500 V1</span>
              </RouterLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
