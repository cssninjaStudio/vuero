<script setup lang="ts">
const { onceError } = useImageError()

const dropdownElement = ref<HTMLElement>()
const dropdown = useDropdownContext(dropdownElement)

const wizard = useWizard()
</script>

<template>
  <nav class="wizard-navigation">
    <RouterLink
      to="/"
      class="wizard-brand"
    >
      <AnimatedLogo
        width="38px"
        height="38px"
      />
    </RouterLink>

    <div class="navbar-item is-wizard-title">
      <span class="title-wrap">
        Step {{ wizard.step }}: <span>{{ wizard.stepTitle }}</span>
      </span>
    </div>

    <VDropdown class="wizard-dropdown">
      <template #button="{ toggle }">
        <div
          tabindex="0"
          role="button"
          class="is-trigger"
          @click="toggle"
          @keydown.enter.prevent="toggle"
        >
          <VIcon
            icon="lucide:chevron-down"
          />
        </div>
      </template>
      <template #content="{ close }">
        <RouterLink
          :class="[wizard.step < 1 && 'is-disabled']"
          class="dropdown-item kill-drop"
          tabindex="0"
          to="/wizard-v1"
          @click.passive="close"
        >
          Step 1: Project Type
        </RouterLink>
        <RouterLink
          :class="[wizard.step < 2 && 'is-disabled']"
          class="dropdown-item kill-drop"
          tabindex="0"
          to="/wizard-v1/project-info"
          @click.passive="close"
        >
          Step 2: Project Info
        </RouterLink>
        <RouterLink
          :class="[wizard.step < 3 && 'is-disabled']"
          class="dropdown-item kill-drop"
          tabindex="0"
          to="/wizard-v1/project-details"
          @click.passive="close"
        >
          Step 3: Project Details
        </RouterLink>
        <RouterLink
          :class="[wizard.step < 4 && 'is-disabled']"
          class="dropdown-item kill-drop"
          tabindex="0"
          to="/wizard-v1/project-files"
          @click.passive="close"
        >
          Step 4: Project Files
        </RouterLink>
        <RouterLink
          :class="[wizard.step < 5 && 'is-disabled']"
          class="dropdown-item kill-drop"
          tabindex="0"
          to="/wizard-v1/project-team"
          @click.passive="close"
        >
          Step 5: Team Members
        </RouterLink>
        <RouterLink
          :class="[wizard.step < 6 && 'is-disabled']"
          class="dropdown-item kill-drop"
          tabindex="0"
          to="/wizard-v1/project-tools"
          @click.passive="close"
        >
          Step 6: Project Tools
        </RouterLink>
        <RouterLink
          :class="[wizard.step < 7 && 'is-disabled']"
          class="dropdown-item kill-drop"
          tabindex="0"
          to="/wizard-v1/project-review"
          @click.passive="close"
        >
          Step 7: Preview
        </RouterLink>
      </template>
    </VDropdown>

    <div class="navbar-item is-dark-mode">
      <div class="navbar-icon">
        <VDarkmodeToggle />
      </div>
    </div>

    <div
      ref="dropdownElement2"
      class="dropdown is-right dropdown-trigger user-dropdown"
    >
      <div
        tabindex="0"
        class="is-trigger"
        aria-haspopup="true"
        @click="dropdown.toggle"
        @keydown.enter.prevent="dropdown.toggle"
      >
        <div class="profile-avatar">
          <img
            class="avatar"
            src="/images/avatars/svg/vuero-1.svg"
            alt=""
            @error.once="onceError($event, 150)"
          >
        </div>
        <VIcon
          icon="lucide:chevron-down"
        />
      </div>
      <div
        class="dropdown-menu"
        role="menu"
      >
        <div class="dropdown-content">
          <div class="dropdown-item">
            <p class="is-size-7 dark-inverted">
              Erik Kovalsky
            </p>
          </div>
          <a
            href="#"
            class="dropdown-item"
          >
            <VIcon
              icon="lucide:user"
            />
            <span>Profile</span>
          </a>
          <a class="dropdown-item">
            <VIcon
              icon="lucide:edit-2"
            />
            <span>Edit Profile</span>
          </a>
          <a class="dropdown-item">
            <VIcon
              icon="lucide:box"
            />
            <span>Projects</span>
          </a>
          <a class="dropdown-item">
            <VIcon
              icon="lucide:settings"
            />
            <span>Settings</span>
          </a>
          <hr class="dropdown-divider">
          <a
            href="#"
            class="dropdown-item"
          >
            <VIcon
              icon="lucide:log-out"
            />
            <span>Sign Out</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.wizard-navigation {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
  background: var(--white);
  padding: 0 20px;
  transition: all 0.3s; // transition-all test
  z-index: 99;

  .wizard-brand {
    img {
      display: block;
      height: 34px;
      margin: 0 auto;
    }
  }

  .navbar-item {
    &.is-wizard-title {
      margin-inline-start: 15px;
      border-inline-start: 1px solid color-mix(in oklab, var(--muted-grey), white 15%);
      padding-bottom: 6px;
      padding-top: 6px;
      font-family: var(--font);

      .title-wrap {
        position: relative;
        display: block;
        font-family: var(--font-alt);
        font-size: 1.2rem;
        font-weight: 600;

        span {
          font-weight: 400;
        }
      }
    }
  }

  .wizard-dropdown {
    cursor: pointer;

    .is-trigger {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;

      .iconify {
        height: 18px;
        width: 18px;
        color: var(--light-text);
      }
    }

    .dropdown-menu,
    :deep(.dropdown-menu) {
      border: 1px solid color-mix(in oklab, var(--fade-grey), black 3%);
      box-shadow: var(--light-box-shadow);
      border-radius: 8px;
      padding-top: 0;
      overflow: hidden;

      .dropdown-content {
        .dropdown-item {
          font-family: var(--font);
        }
      }
    }
  }

  .is-dark-mode {
    margin-inline-start: auto;
    background: transparent !important;

    .navbar-icon {
      height: 38px;
      width: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--radius-rounded);
      border: 1px solid color-mix(in oklab, var(--fade-grey), black 3%);
      box-shadow: var(--light-box-shadow);
      background: var(--white);
      transition: all 0.3s; // transition-all test

      .dark-mode {
        transform: scale(0.6);
      }
    }
  }

  .user-dropdown {
    .is-trigger {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      cursor: pointer;

      .profile-avatar {
        position: relative;

        .avatar {
          display: block;
          width: 38px;
          height: 38px;
          border-radius: var(--radius-rounded);
        }

        .badge {
          position: absolute;
          inset-inline-end: -8px;
          bottom: 0;
          width: 20px;
          height: 20px;
          border: 2px solid var(--white);
          border-radius: var(--radius-rounded);
        }
      }

      .iconify {
        margin-inline-start: 3px;
        width: 18px;
        height: 18px;
        color: var(--light-text);
        transition: all 0.3s; // transition-all test
      }
    }

    .dropdown-menu {
      top: 52px;
      border: 1px solid color-mix(in oklab, var(--fade-grey), black 3%);
      box-shadow: var(--light-box-shadow);
      border-radius: 8px;
      padding-top: 0;
      width: 180px;
      overflow: hidden;

      .dropdown-item {
        display: flex;
        align-items: center;
        font-family: var(--font);
        font-size: 0.9rem;
        padding: 8px 12px;
        color: var(--light-text);

        p {
          font-family: var(--font-alt);
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--dark-text);
        }

        .iconify {
          margin-inline-end: 8px;
          height: 16px;
          width: 16px;
          color: var(--light-text);
        }
      }
    }
  }
}
</style>
