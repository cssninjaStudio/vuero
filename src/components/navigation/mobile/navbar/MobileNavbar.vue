<template>
  <nav
    class="navbar mobile-navbar no-shadow is-hidden-desktop is-hidden-tablet"
    aria-label="main navigation"
  >
    <div class="container">
      <!-- Brand -->
      <div class="navbar-brand">
        <!-- Mobile menu toggler icon -->
        <div class="brand-start">
          <div class="navbar-burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <RouterLink :to="{ name: 'index' }" class="navbar-item is-brand">
          <img class="light-image" src="/@images/logos/logo/logo.svg" alt="" />
          <img
            class="dark-image"
            src="/@images/logos/logo/logo-light.svg"
            alt=""
          />
        </RouterLink>

        <div class="brand-end">
          <NotificationsWidgetMobile />

          <div
            class="dropdown is-right is-spaced dropdown-trigger user-dropdown"
          >
            <div class="is-trigger" aria-haspopup="true">
              <div class="profile-avatar">
                <img
                  class="avatar"
                  src="/@images/avatars/photos/8.jpg"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
            </div>
            <div class="dropdown-menu" role="menu">
              <div class="dropdown-content">
                <div class="dropdown-head">
                  <div class="h-avatar is-large">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/8.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="meta">
                    <span>Erik Kovalsky</span>
                    <span>Product Manager</span>
                  </div>
                </div>
                <a href="#" class="dropdown-item is-media">
                  <div class="icon">
                    <i class="lnil lnil-user-alt"></i>
                  </div>
                  <div class="meta">
                    <span>Profile</span>
                    <span>View your profile</span>
                  </div>
                </a>
                <a class="dropdown-item is-media layout-switcher">
                  <div class="icon">
                    <i class="lnil lnil-layout"></i>
                  </div>
                  <div class="meta">
                    <span>Layout</span>
                    <span>Switch to admin/webapp</span>
                  </div>
                </a>
                <hr class="dropdown-divider" />
                <a href="#" class="dropdown-item is-media">
                  <div class="icon">
                    <i class="lnil lnil-briefcase"></i>
                  </div>
                  <div class="meta">
                    <span>Projects</span>
                    <span>All my projects</span>
                  </div>
                </a>
                <a href="#" class="dropdown-item is-media">
                  <div class="icon">
                    <i class="lnil lnil-users-alt"></i>
                  </div>
                  <div class="meta">
                    <span>Team</span>
                    <span>Manage your team</span>
                  </div>
                </a>
                <hr class="dropdown-divider" />
                <a href="#" class="dropdown-item is-media">
                  <div class="icon">
                    <i class="lnil lnil-cog"></i>
                  </div>
                  <div class="meta">
                    <span>Settings</span>
                    <span>Account settings</span>
                  </div>
                </a>
                <hr class="dropdown-divider" />
                <div class="dropdown-item is-button">
                  <button
                    class="button h-button is-primary is-raised is-fullwidth logout-button"
                  >
                    <span class="icon is-small">
                      <Icon icon="feather:log-out" />
                    </span>
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
