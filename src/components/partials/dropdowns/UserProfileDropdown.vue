<script setup lang="ts">
import { ref } from 'vue'
import useDropdown from '/@src/composable/useDropdown'
const dropdownElement = ref<HTMLElement | null>(null)
const dropdown = useDropdown(dropdownElement)
</script>

<template>
  <div
    ref="dropdownElement"
    class="
      dropdown
      is-right is-spaced
      dropdown-trigger
      profile-dropdown
      user-dropdown
    "
  >
    <a class="is-trigger" aria-haspopup="true" @click="dropdown.toggle">
      <V-Avatar picture="/demo/avatars/8.jpg" />
    </a>
    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <div class="dropdown-head">
          <V-Avatar size="large" picture="/demo/avatars/8.jpg" />

          <div class="meta">
            <span>Erik Kovalsky</span>
            <span>Product Manager</span>
          </div>
        </div>
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i aria-hidden="true" class="lnil lnil-user-alt"></i>
          </div>
          <div class="meta">
            <span>Profile</span>
            <span>View your profile</span>
          </div>
        </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i aria-hidden="true" class="lnil lnil-briefcase"></i>
          </div>
          <div class="meta">
            <span>Projects</span>
            <span>All my projects</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i aria-hidden="true" class="lnil lnil-users-alt"></i>
          </div>
          <div class="meta">
            <span>Team</span>
            <span>Manage your team</span>
          </div>
        </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i aria-hidden="true" class="lnil lnil-cog"></i>
          </div>
          <div class="meta">
            <span>Settings</span>
            <span>Account settings</span>
          </div>
        </a>
        <hr class="dropdown-divider" />
        <div class="dropdown-item is-button">
          <button
            class="
              button
              v-button
              is-primary is-raised is-fullwidth
              logout-button
            "
          >
            <span class="icon is-small">
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:log-out"
              ></i>
            </span>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
