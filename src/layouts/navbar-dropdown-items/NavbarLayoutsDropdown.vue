<script setup lang="ts">
const dropdownElement = ref()
const selectedCategory = ref('')
const route = useRoute()

watch([() => route.fullPath, dropdownElement], () => {
  if (dropdownElement.value) {
    dropdownElement.value.close?.()
  }
})
</script>

<template>
  <VDropdown ref="dropdownElement" class="has-mega-dropdown" modern spaced>
    <template #button="{ toggle }">
      <div
        class="dropdown-trigger is-trigger"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
      >
        <VButton
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          icon-caret="feather:chevron-down"
          rounded
          @click="toggle"
        >
          Layouts
        </VButton>
      </div>
    </template>

    <template #content>
      <div class="category-selector" :class="[selectedCategory !== '' && 'is-hidden']">
        <div class="title-wrap">
          <h4>Select a category</h4>
        </div>
        <div class="category-selector-inner">
          <div
            class="category-item"
            tabindex="0"
            role="button"
            @keydown.space.prevent="selectedCategory = 'lists'"
            @click="selectedCategory = 'lists'"
          >
            <i aria-hidden="true" class="lnil lnil-list-alt"></i>
            <span>Lists</span>
          </div>
          <div
            class="category-item"
            tabindex="0"
            role="button"
            @keydown.space.prevent="selectedCategory = 'grids'"
            @click="selectedCategory = 'grids'"
          >
            <i aria-hidden="true" class="lnil lnil-grid-alt"></i>
            <span>Grids</span>
          </div>
          <div
            class="category-item"
            tabindex="0"
            role="button"
            @keydown.space.prevent="selectedCategory = 'pages'"
            @click="selectedCategory = 'pages'"
          >
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Pages</span>
          </div>
          <div
            class="category-item"
            tabindex="0"
            role="button"
            @keydown.space.prevent="selectedCategory = 'subpages'"
            @click="selectedCategory = 'subpages'"
          >
            <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
            <span>Subpages</span>
          </div>
          <div
            class="category-item"
            tabindex="0"
            role="button"
            @keydown.space.prevent="selectedCategory = 'utility'"
            @click="selectedCategory = 'utility'"
          >
            <i aria-hidden="true" class="lnil lnil-reload"></i>
            <span>Utility</span>
          </div>
        </div>
      </div>

      <div class="content-wrap" :class="[selectedCategory === '' && 'is-hidden']">
        <button class="button is-circle back-button" @click="selectedCategory = ''">
          <span class="icon is-small">
            <i aria-hidden="true" class="iconify" data-icon="feather:arrow-left"></i>
          </span>
        </button>

        <div
          id="lists-menu"
          :class="[selectedCategory === 'lists' && 'is-active']"
          class="columns is-gapless mega-menus"
        >
          <!--Column-->
          <div class="column is-4">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-info">
                <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
                <span>List Views</span>
              </h4>

              <div class="column-content" data-simplebar>
                <RouterLink to="/navbar/layouts" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-list-alt"></i>
                  </div>
                  <div class="meta">
                    <span>List View V1</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/list-view-2"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-list-alt"></i>
                  </div>
                  <div class="meta">
                    <span>List View V2</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/list-view-3"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-list-alt"></i>
                  </div>
                  <div class="meta">
                    <span>List View V3</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/list-view-4"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-list-alt-1"></i>
                  </div>
                  <div class="meta">
                    <span>List View V4</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
          <!--Column-->
          <div class="column is-4">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-green">
                <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
                <span>Flex Lists</span>
              </h4>

              <div class="column-content" data-simplebar>
                <RouterLink
                  to="/navbar/layouts/list-flex-2"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-list-alt-1"></i>
                  </div>
                  <div class="meta">
                    <span>Flex List V2</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/list-flex-2"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-list-alt-1"></i>
                  </div>
                  <div class="meta">
                    <span>Flex List V2</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/list-flex-3"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-list-alt-1"></i>
                  </div>
                  <div class="meta">
                    <span>Flex List V3</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
          <!--Column-->
          <div class="column is-4">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-orange">
                <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
                <span>Datatables</span>
              </h4>

              <div class="column-content" data-simplebar>
                <RouterLink
                  to="/navbar/layouts/list-datatable-1"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-layout-alt"></i>
                  </div>
                  <div class="meta">
                    <span>Table List V1</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/list-datatable-2"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-layout-alt"></i>
                  </div>
                  <div class="meta">
                    <span>Table List V2</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/list-datatable-3"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-layout-alt"></i>
                  </div>
                  <div class="meta">
                    <span>Table List V3</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <div
          id="grids-menu"
          :class="[selectedCategory === 'grids' && 'is-active']"
          class="columns is-gapless mega-menus"
        >
          <!--Column-->
          <div class="column is-4">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-purple">
                <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
                <span>Cards</span>
              </h4>

              <div class="column-content">
                <RouterLink
                  to="/navbar/layouts/grid-cards-1"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-grid-alt"></i>
                  </div>
                  <div class="meta">
                    <span>Card Grid V1</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/grid-cards-2"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-grid-alt"></i>
                  </div>
                  <div class="meta">
                    <span>Card Grid V2</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/grid-cards-3"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-grid-alt"></i>
                  </div>
                  <div class="meta">
                    <span>Card Grid V3</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/grid-cards-4"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-grid-alt"></i>
                  </div>
                  <div class="meta">
                    <span>Card Grid V4</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>

          <!--Column-->
          <div class="column is-4">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-secondary">
                <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
                <span>Tiles</span>
              </h4>

              <div class="column-content">
                <RouterLink
                  to="/navbar/layouts/grid-tiles-1"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-layout-alt-2"></i>
                  </div>
                  <div class="meta">
                    <span>Tile Grid V1</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/grid-tiles-2"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-layout-alt-2"></i>
                  </div>
                  <div class="meta">
                    <span>Tile Grid V2</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/grid-tiles-3"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-layout-alt-2"></i>
                  </div>
                  <div class="meta">
                    <span>Tile Grid V3</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>

          <!--Column-->
          <div class="column is-4">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-success">
                <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
                <span>Users</span>
              </h4>

              <div class="column-content">
                <RouterLink
                  to="/navbar/layouts/grid-users-1"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-users-alt"></i>
                  </div>
                  <div class="meta">
                    <span>User Grid V1</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/grid-users-2"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-users-alt"></i>
                  </div>
                  <div class="meta">
                    <span>User Grid V2</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/grid-users-3"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-users-alt"></i>
                  </div>
                  <div class="meta">
                    <span>User Grid V3</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/grid-users-4"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-users-alt"></i>
                  </div>
                  <div class="meta">
                    <span>User Grid V4</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <div
          id="pages-menu"
          :class="[selectedCategory === 'pages' && 'is-active']"
          class="columns is-gapless mega-menus"
        >
          <!--Column-->
          <div class="column is-4">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-yellow">
                <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
                <span>Personal</span>
              </h4>

              <div class="column-content" data-simplebar>
                <RouterLink
                  to="/navbar/layouts/profile-view"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-user-alt"></i>
                  </div>
                  <div class="meta">
                    <span>User Profile</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/profile-edit"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-pencil"></i>
                  </div>
                  <div class="meta">
                    <span>Edit Profile</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/profile-notifications"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-notification"></i>
                  </div>
                  <div class="meta">
                    <span>Notifications</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/profile-settings"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-cog"></i>
                  </div>
                  <div class="meta">
                    <span>Settings</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>

          <!--Column-->
          <div class="column is-4">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-primary">
                <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
                <span>Pages</span>
              </h4>

              <div class="column-content" data-simplebar>
                <RouterLink to="/auth/login" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-pointer-right"></i>
                  </div>
                  <div class="meta">
                    <span>Login v1</span>
                  </div>
                </RouterLink>
                <RouterLink to="/auth/login-2" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-pointer-right"></i>
                  </div>
                  <div class="meta">
                    <span>Login v2</span>
                  </div>
                </RouterLink>
                <RouterLink to="/auth/login-3" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-pointer-right"></i>
                  </div>
                  <div class="meta">
                    <span>Login v3</span>
                  </div>
                </RouterLink>
                <RouterLink to="/auth/signup-2" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-crown"></i>
                  </div>
                  <div class="meta">
                    <span>Signup v1</span>
                  </div>
                </RouterLink>
                <RouterLink to="/auth/signup-3" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-crown"></i>
                  </div>
                  <div class="meta">
                    <span>Signup v2</span>
                  </div>
                </RouterLink>
                <RouterLink to="/auth/signup-1" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-crown"></i>
                  </div>
                  <div class="meta">
                    <span>Signup Flow</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/search-results"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-search-alt"></i>
                  </div>
                  <div class="meta">
                    <span>Search Results</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/search-empty"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-search-alt"></i>
                  </div>
                  <div class="meta">
                    <span>Empty Search</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>

          <!--Column-->
          <div class="column is-4">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-success">
                <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
                <span>Projects</span>
              </h4>

              <div class="column-content" data-simplebar>
                <RouterLink
                  to="/navbar/layouts/projects-projects-1"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-grid-alt"></i>
                  </div>
                  <div class="meta">
                    <span>Projects V1</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/projects-projects-2"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-grid-alt"></i>
                  </div>
                  <div class="meta">
                    <span>Projects V2</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/projects-projects-3"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-grid-alt"></i>
                  </div>
                  <div class="meta">
                    <span>Projects V3</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/projects-details"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-layout"></i>
                  </div>
                  <div class="meta">
                    <span>Project Details</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/kanban-board"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
                  </div>
                  <div class="meta">
                    <span>Kanban Board</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <div
          id="subpages-menu"
          :class="[selectedCategory === 'subpages' && 'is-active']"
          class="columns is-gapless mega-menus"
        >
          <!--Column-->
          <div class="column is-4">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-green">
                <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
                <span>Subpages</span>
              </h4>

              <div class="column-content" data-simplebar>
                <RouterLink
                  to="/navbar/layouts/saas-billing"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-credit-card"></i>
                  </div>
                  <div class="meta">
                    <span>SaaS Billing</span>
                  </div>
                </RouterLink>
                <RouterLink to="navbar" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-door-alt"></i>
                  </div>
                  <div class="meta">
                    <span>Welcome</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/action-page-1"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-thunderbolt"></i>
                  </div>
                  <div class="meta">
                    <span>Action Page V1</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/action-page-2"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-thunderbolt"></i>
                  </div>
                  <div class="meta">
                    <span>Action Page V2</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
          <!--Column-->
          <div class="column is-4">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-yellow">
                <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
                <span>Utility</span>
              </h4>

              <div class="column-content" data-simplebar>
                <RouterLink
                  to="/navbar/layouts/utility-account-confirm"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-thunderbolt"></i>
                  </div>
                  <div class="meta">
                    <span>Confirm Account</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/utility-promotion"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-magnet"></i>
                  </div>
                  <div class="meta">
                    <span>Promotion Page</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/utility-invoice"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-calculator-alt"></i>
                  </div>
                  <div class="meta">
                    <span>Invoice</span>
                  </div>
                </RouterLink>
                <RouterLink to="/status" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-checkmark-circle"></i>
                  </div>
                  <div class="meta">
                    <span>App Status</span>
                  </div>
                </RouterLink>
                <RouterLink to="/roadmap" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-pyramids"></i>
                  </div>
                  <div class="meta">
                    <span>Roadmap</span>
                    <VTag label="v2.4" color="primary" outlined curved class="ml-3" />
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
          <!--Column-->
          <div class="column is-4">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-secondary">
                <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
                <span>Onboarding</span>
              </h4>

              <div class="column-content">
                <RouterLink
                  to="/navbar/layouts/onboarding-page-1"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-train"></i>
                  </div>
                  <div class="meta">
                    <span>Onboarding V1</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/onboarding-page-2"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-train-alt"></i>
                  </div>
                  <div class="meta">
                    <span>Onboarding V2</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/onboarding-page-3"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-car"></i>
                  </div>
                  <div class="meta">
                    <span>Onboarding V3</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/onboarding-page-4"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-car-alt"></i>
                  </div>
                  <div class="meta">
                    <span>Onboarding V4</span>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/onboarding-page-5"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-train-alt"></i>
                  </div>
                  <div class="meta">
                    <span>Onboarding V5</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <div
          id="utility-menu"
          :class="[selectedCategory === 'utility' && 'is-active']"
          class="columns is-gapless mega-menus"
        >
          <!--Column-->
          <div class="column is-4">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-secondary">
                <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
                <span>utility</span>
              </h4>

              <div class="column-content" data-simplebar>
                <RouterLink to="/error/page-1" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-cross-circle"></i>
                  </div>
                  <div class="meta">
                    <span>Error Page V1</span>
                  </div>
                </RouterLink>
                <RouterLink to="/error/page-2" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-cross-circle"></i>
                  </div>
                  <div class="meta">
                    <span>Error Page V2</span>
                  </div>
                </RouterLink>
                <RouterLink to="/error/page-3" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-cross-circle"></i>
                  </div>
                  <div class="meta">
                    <span>Error Page V3</span>
                  </div>
                </RouterLink>
                <RouterLink to="/error/page-4" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-cross-circle"></i>
                  </div>
                  <div class="meta">
                    <span>Error Page V4</span>
                  </div>
                </RouterLink>
                <RouterLink to="/error/page-5" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-cross-circle"></i>
                  </div>
                  <div class="meta">
                    <span>Error Page V5</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
          <!--Column-->
          <div class="column is-4">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-secondary">
                <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
                <span>Placeload</span>
              </h4>

              <div class="column-content" data-simplebar>
                <RouterLink
                  to="/navbar/layouts/placeload-1"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-reload"></i>
                  </div>
                  <div class="meta">
                    <span>Placeload V1</span>
                    <VTag label="v1.2" color="primary" outlined curved class="ml-3" />
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/placeload-2"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-reload"></i>
                  </div>
                  <div class="meta">
                    <span>Placeload V2</span>
                    <VTag label="v1.2" color="primary" outlined curved class="ml-3" />
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/placeload-3"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-reload"></i>
                  </div>
                  <div class="meta">
                    <span>Placeload V3</span>
                    <VTag label="v1.2" color="primary" outlined curved class="ml-3" />
                  </div>
                </RouterLink>
                <RouterLink
                  to="/navbar/layouts/placeload-4"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-reload"></i>
                  </div>
                  <div class="meta">
                    <span>Placeload V4</span>
                    <VTag label="v1.2" color="primary" outlined curved class="ml-3" />
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </VDropdown>
</template>
