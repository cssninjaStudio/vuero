<template>
  <nav class="wizard-navigation">
    <a href="/" class="wizard-brand">
      <img
        class="light-image"
        src="/src/assets/images/logos/logo/logo.svg"
        alt=""
      />
      <img
        class="dark-image"
        src="/src/assets/images/logos/logo/logo-light.svg"
        alt=""
      />
    </a>

    <div class="navbar-item is-wizard-title">
      <span class="title-wrap">Step 1: <span>Project Type</span></span>
    </div>

    <div class="dropdown wizard-dropdown dropdown-trigger">
      <div class="is-trigger">
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
          <input type="checkbox" checked />
          <span></span>
        </label>
      </div>
    </div>

    <div class="dropdown is-right dropdown-trigger user-dropdown">
      <div class="is-trigger" aria-haspopup="true">
        <div class="profile-avatar">
          <img
            class="avatar"
            src="https://via.placeholder.com/150x150"
            data-demo-src="/src/assets/images/avatars/photos/8.jpg"
            alt=""
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