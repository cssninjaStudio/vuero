<script lang="ts">
import { defineComponent } from 'vue'

const LayoutsSidebar = defineComponent({
  name: 'LayoutsSidebar',
  components: {},
  setup() {
    // LayoutsSidebar - Composition API

    return {}
  },
})

export default LayoutsSidebar
</script>

<template>
  <div id="layouts-sidebar" class="sidebar-panel is-generic">
    <div class="subpanel-header">
      <ProjectsQuickDropdown />

      <h3 class="no-mb">Layouts</h3>
      <div class="panel-close">
        <Icon icon="feather:x" />
      </div>
    </div>
    <div class="inner" data-simplebar>
      <ul>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Lists <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/admin-list-view-1.html">
                <i class="lnil lnil-list-alt"></i>
                <span>List View V1</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-list-view-2.html">
                <i class="lnil lnil-list-alt"></i>
                <span>List View V2</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-list-view-3.html">
                <i class="lnil lnil-list-alt"></i>
                <span>List View V3</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-list-view-4.html">
                <i class="lnil lnil-list-alt"></i>
                <span>List View V4</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Flex Lists <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/admin-list-flex-1.html">
                <i class="lnil lnil-list-alt-1"></i>
                <span>Flex List V1</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-list-flex-2.html">
                <i class="lnil lnil-list-alt-1"></i>
                <span>Flex List V2</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-list-flex-3.html">
                <i class="lnil lnil-list-alt-1"></i>
                <span>Flex List V3</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Datatable <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/admin-list-datatable-1.html">
                <i class="lnil lnil-layout-alt"></i>
                <span>Datatable V1</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-list-datatable-2.html">
                <i class="lnil lnil-layout-alt"></i>
                <span>Datatable V2</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-list-datatable-3.html">
                <i class="lnil lnil-layout-alt"></i>
                <span>Datatable V3</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-list-datatable-4.html">
                <i class="lnil lnil-layout-alt"></i>
                <span>Datatable V4</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="divider"></li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Card Grid <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/admin-grid-cards-1.html">
                <i class="lnil lnil-grid-alt"></i>
                <span>Card Grid V1</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-grid-cards-2.html">
                <i class="lnil lnil-grid-alt"></i>
                <span>Card Grid V2</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-grid-cards-3.html">
                <i class="lnil lnil-grid-alt"></i>
                <span>Card Grid V3</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-grid-cards-4.html">
                <i class="lnil lnil-grid-alt"></i>
                <span>Card Grid V4</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Tile Grid <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/admin-grid-tiles-1.html">
                <i class="lnil lnil-layout-alt-2"></i>
                <span>Tile Grid V1</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-grid-tiles-2.html">
                <i class="lnil lnil-layout-alt-2"></i>
                <span>Tile Grid V2</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-grid-tiles-3.html">
                <i class="lnil lnil-layout-alt-2"></i>
                <span>Tile Grid V3</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >User Grid <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/admin-grid-users-1.html">
                <i class="lnil lnil-users-alt"></i>
                <span>User Grid V1</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-grid-users-2.html">
                <i class="lnil lnil-users-alt"></i>
                <span>User Grid V2</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-grid-users-3.html">
                <i class="lnil lnil-users-alt"></i>
                <span>User Grid V3</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-grid-users-4.html">
                <i class="lnil lnil-users-alt"></i>
                <span>User Grid V4</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="divider"></li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Personal <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/admin-profile-view.html">
                <i class="lnil lnil-user-alt"></i>
                <span>Profile</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-profile-edit-1.html">
                <i class="lnil lnil-pencil"></i>
                <span>Edit Profile</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-profile-notifications.html">
                <i class="lnil lnil-notification"></i>
                <span>Notifications</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-profile-settings.html">
                <i class="lnil lnil-cog"></i>
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Pages <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/auth-login-1.html">
                <i class="lnil lnil-pointer-right"></i>
                <span>Login v1</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/auth-login-2.html">
                <i class="lnil lnil-pointer-right"></i>
                <span>Login v2</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/auth-login-3.html">
                <i class="lnil lnil-pointer-right"></i>
                <span>Login v3</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/auth-signup-2.html">
                <i class="lnil lnil-crown"></i>
                <span>Signup v1</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/auth-signup-3.html">
                <i class="lnil lnil-crown"></i>
                <span>Signup v2</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/auth-signup-1.html">
                <i class="lnil lnil-crown"></i>
                <span>Signup Flow</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-search-results.html">
                <i class="lnil lnil-search-alt"></i>
                <span>Search Results</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-search-empty.html">
                <i class="lnil lnil-search-alt"></i>
                <span>Empty Search</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Subpages <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/admin-saas-billing.html">
                <i class="lnil lnil-credit-card"></i>
                <span>SaaS Billing</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-welcome.html">
                <i class="lnil lnil-door-alt"></i>
                <span>Welcome</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-action-page-1.html">
                <i class="lnil lnil-thunderbolt"></i>
                <span>Action Page V1</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-action-page-2.html">
                <i class="lnil lnil-thunderbolt"></i>
                <span>Action Page V2</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Projects <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/admin-projects-projects.html">
                <i class="lnil lnil-grid-alt"></i>
                <span>Projects V1</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-projects-projects-2.html">
                <i class="lnil lnil-grid-alt"></i>
                <span>Projects V2</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-projects-projects-3.html">
                <i class="lnil lnil-grid-alt"></i>
                <span>Projects V3</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-projects-project.html">
                <i class="lnil lnil-layout"></i>
                <span>Project Details</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-kanban-board.html">
                <i class="lnil lnil-layout-alt-1"></i>
                <span>Kanban Board</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="divider"></li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Utility <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/admin-utility-account-confirm.html">
                <i class="lnil lnil-thunderbolt"></i>
                <span>Confirm Account</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-utility-promotion.html">
                <i class="lnil lnil-magnet"></i>
                <span>Promotion Page</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-utility-invoice.html">
                <i class="lnil lnil-calculator-alt"></i>
                <span>Invoice</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-utility-status.html">
                <i class="lnil lnil-checkmark-circle"></i>
                <span>App Status</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Onboarding <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/admin-onboarding-page-1.html">
                <i class="lnil lnil-train"></i>
                <span>Onboarding V1</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-onboarding-page-2.html">
                <i class="lnil lnil-train-alt"></i>
                <span>Onboarding V2</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-onboarding-page-3.html">
                <i class="lnil lnil-car"></i>
                <span>Onboarding V3</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-onboarding-page-4.html">
                <i class="lnil lnil-car-alt"></i>
                <span>Onboarding V4</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-onboarding-page-5.html">
                <i class="lnil lnil-train"></i>
                <span>Onboarding V5</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Error Pages <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/error-page-1.html">
                <i class="lnil lnil-cross-circle"></i>
                <span>Error 404 V1</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/error-page-2.html">
                <i class="lnil lnil-cross-circle"></i>
                <span>Error 404 V2</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/error-page-3.html">
                <i class="lnil lnil-cross-circle"></i>
                <span>Error 404 V3</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/error-page-4.html">
                <i class="lnil lnil-cross-circle"></i>
                <span>Error 404 V4</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/error-page-5.html">
                <i class="lnil lnil-cross-circle"></i>
                <span>Error 500 V1</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>