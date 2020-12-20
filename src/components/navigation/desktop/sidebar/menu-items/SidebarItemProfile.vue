<script lang="ts">
import { defineComponent } from 'vue'

const SidebarItemProfile = defineComponent({
  name: 'SidebarItemProfile',
  components: {},
  setup() {
    // SidebarItemProfile - Composition API

    return {}
  },
})

export default SidebarItemProfile
</script>

<template>
  <li id="user-menu">
    <div
      id="profile-menu"
      class="dropdown profile-dropdown dropdown-trigger is-spaced is-up"
    >
      <img
        src="https://via.placeholder.com/150x150"
        data-demo-src="/src/assets/images/avatars/photos/8.jpg"
        alt=""
      />
      <span class="status-indicator"></span>

      <div class="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <div class="dropdown-head">
            <div class="h-avatar is-large">
              <img
                class="avatar"
                src="https://via.placeholder.com/150x150"
                data-demo-src="/src/assets/images/avatars/photos/8.jpg"
                alt=""
              />
            </div>
            <div class="meta">
              <span>Erik Kovalsky</span>
              <span>Product Manager</span>
            </div>
          </div>
          <a href="/admin-profile-view.html" class="dropdown-item is-media">
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
  </li>
</template>