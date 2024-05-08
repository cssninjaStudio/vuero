<script setup lang="ts">
const userSession = useUserSession()
const router = useRouter()

function logout() {
  userSession.logoutUser()
  router.push('/')
}
</script>

<template>
  <VDropdown
    spaced
    class="profile-dropdown"
  >
    <template #button="{ toggle }">
      <a
        role="button"
        tabindex="0"
        class="is-trigger dropdown-trigger"
        aria-haspopup="true"
        @keydown.enter.prevent="toggle"
        @click="toggle"
      >
        <VAvatar picture="/images/avatars/svg/vuero-1.svg" />
      </a>
    </template>

    <template #content>
      <div class="dropdown-head">
        <VAvatar
          size="large"
          picture="/images/avatars/svg/vuero-1.svg"
        />

        <div class="meta">
          <span>Erik Kovalsky</span>
          <span>Product Manager</span>
        </div>
      </div>

      <a
        href="#"
        role="menuitem"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-user-alt"
          />
        </div>
        <div class="meta">
          <span>Profile</span>
          <span>View your profile</span>
        </div>
      </a>

      <hr class="dropdown-divider">

      <a
        href="#"
        role="menuitem"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-briefcase"
          />
        </div>
        <div class="meta">
          <span>Projects</span>
          <span>All my projects</span>
        </div>
      </a>

      <a
        href="#"
        role="menuitem"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-users-alt"
          />
        </div>
        <div class="meta">
          <span>Team</span>
          <span>Manage your team</span>
        </div>
      </a>

      <hr class="dropdown-divider">

      <a
        href="#"
        role="menuitem"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-cog"
          />
        </div>
        <div class="meta">
          <span>Settings</span>
          <span>Account settings</span>
        </div>
      </a>

      <hr class="dropdown-divider">

      <div class="dropdown-item is-button">
        <VButton
          class="logout-button"
          icon="lucide:log-out"
          color="primary"
          role="menuitem"
          raised
          fullwidth
          @click="logout"
        >
          Logout
        </VButton>
      </div>
    </template>
  </VDropdown>
</template>

<style scoped lang="scss">
.profile-dropdown {
  > img {
    height: 32px;
    width: 32px;
    border-radius: var(--radius-rounded);
    margin: 0 4px;
    cursor: pointer;
  }

  .dropdown-content, :deep(.dropdown-content) {
    padding-top: 0 !important;
    overflow: hidden;

    .dropdown-head {
      display: flex;
      align-items: center;
      padding: 20px 16px;
      margin-bottom: 12px;
      background: #fafafa;

      .meta {
        margin-inline-start: 12px;
        font-family: var(--font);

        span {
          display: block;

          &:first-child {
            font-size: 1.1rem;
            font-weight: 500;
            color: var(--dark-text);
            line-height: 1.2;
          }

          &:nth-child(2) {
            text-transform: uppercase;
            color: var(--light-text);
            font-size: 0.7rem;
          }
        }
      }
    }

    .logout-button {
      .iconify {
        color: var(--smoke-white) !important;
      }
    }
  }
}

.is-dark {
  .profile-dropdown {
    .dropdown-content, :deep(.dropdown-content) {
      .dropdown-head {
        background: color-mix(in oklab, var(--dark-sidebar), white 2%) !important;

        &:hover,
        &:focus {
          background: color-mix(in oklab, var(--dark-sidebar), white 2%) !important;
        }

        .meta {
          &:hover {
            background: color-mix(in oklab, var(--dark-sidebar), white 2%) !important;
          }

          span {
            &:first-child {
              color: var(--dark-dark-text) !important;
            }
          }
        }
      }
    }
  }
}
</style>
