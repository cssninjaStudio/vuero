<script setup lang="ts">
import { isDark } from '/@src/composition/state/ui/darkModeState.ts'
import useDropdown from '/@src/composition/use/useDropdown'

const {
  dropdownElement: dropdownElement1,
  open: open1,
  isOpen: isOpen1,
} = useDropdown()

const {
  dropdownElement: dropdownElement2,
  open: open2,
  isOpen: isOpen2,
} = useDropdown()
</script>

<template>
  <nav class="wizard-navigation">
    <RouterLink :to="{ name: 'index' }" class="wizard-brand">
      <img class="light-image" src="/@images/logos/logo/logo.svg" alt="" />
      <img class="dark-image" src="/@images/logos/logo/logo-light.svg" alt="" />
    </RouterLink>

    <div class="navbar-item is-wizard-title">
      <span class="title-wrap">Step 1: <span>Project Type</span></span>
    </div>

    <div
      ref="dropdownElement1"
      :class="[isOpen1 && 'is-active']"
      class="dropdown wizard-dropdown dropdown-trigger"
    >
      <div class="is-trigger" @click="open1">
        <Icon icon="feather:chevron-down" />
      </div>
      <div id="wizard-navigation-dropdown" class="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a
            href="javascript:void(0);"
            class="dropdown-item kill-drop"
            data-dropdown-step="0"
          >
            Step 1: Project Type
          </a>
          <a
            href="javascript:void(0);"
            class="dropdown-item kill-drop is-disabled"
            data-dropdown-step="1"
          >
            Step 2: Project Info
          </a>
          <a
            href="javascript:void(0);"
            class="dropdown-item kill-drop is-disabled"
            data-dropdown-step="2"
          >
            Step 3: Project Details
          </a>
          <a
            href="javascript:void(0);"
            class="dropdown-item kill-drop is-disabled"
            data-dropdown-step="3"
          >
            Step 4: Project Files
          </a>
          <a
            href="javascript:void(0);"
            class="dropdown-item kill-drop is-disabled"
            data-dropdown-step="4"
          >
            Step 5: Team Members
          </a>
          <a
            href="javascript:void(0);"
            class="dropdown-item kill-drop is-disabled"
            data-dropdown-step="5"
          >
            Step 6: Project Tools
          </a>
          <a
            href="javascript:void(0);"
            class="dropdown-item kill-drop is-disabled"
            data-dropdown-step="6"
          >
            Step 7: Preview
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-item is-dark-mode">
      <div class="navbar-icon">
        <label class="dark-mode">
          <input
            type="checkbox"
            :checked="!isDark"
            @change="
              (event) => {
                isDark = !event.target.checked
              }
            "
          />
          <span></span>
        </label>
      </div>
    </div>

    <div
      ref="dropdownElement2"
      :class="[isOpen2 && 'is-active']"
      class="dropdown is-right dropdown-trigger user-dropdown"
    >
      <div class="is-trigger" aria-haspopup="true" @click="open2">
        <div class="profile-avatar">
          <img
            class="avatar"
            src="/@images/avatars/photos/8.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/150x150'"
          />
        </div>
        <Icon icon="feather:chevron-down" />
      </div>
      <div class="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <div class="dropdown-item">
            <p class="is-size-7 dark-inverted">Erik Kovalsky</p>
          </div>
          <a href="#" class="dropdown-item">
            <Icon icon="feather:user" />
            <span>Profile</span>
          </a>
          <a class="dropdown-item">
            <Icon icon="feather:edit-2" />
            <span>Edit Profile</span>
          </a>
          <a class="dropdown-item">
            <Icon icon="feather:box" />
            <span>Projects</span>
          </a>
          <a class="dropdown-item">
            <Icon icon="feather:settings" />
            <span>Settings</span>
          </a>
          <hr class="dropdown-divider" />
          <a href="#" class="dropdown-item">
            <Icon icon="feather:log-out" />
            <span>Sign Out</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
