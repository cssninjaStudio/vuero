<script setup lang="ts">
import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/activeSidebarState'
</script>

<template>
  <div class="is-webapp-lg">
    <div class="page-title has-text-centered">
      <!-- Sidebar Trigger -->
      <div class="huro-hamburger nav-trigger push-resize">
        <span class="menu-toggle has-chevron">
          <span class="icon-box-toggle">
            <span class="rotate">
              <i class="icon-line-top"></i>
              <i class="icon-line-center"></i>
              <i class="icon-line-bottom"></i>
            </span>
          </span>
        </span>
      </div>

      <div class="title-wrap">
        <h1 class="title is-4">Dashboard</h1>
      </div>

      <Toolbar />
    </div>
    <div class="page-content-inner">
      <!--Edit Profile-->
      <div class="account-wrapper">
        <div class="columns">
          <!--Navigation-->
          <div class="column is-4">
            <div class="account-box is-navigation">
              <div class="media-flex-center">
                <div class="v-avatar is-large">
                  <img
                    class="avatar"
                    src="/images/avatars/photos/8.jpg"
                    alt=""
                    @error.once="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                  <img
                    class="badge"
                    src="/images/icons/flags/united-states-of-america.svg"
                    alt=""
                    @error.once="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="flex-meta">
                  <span>Erik Kovalsky</span>
                  <span>product Manager</span>
                </div>
              </div>

              <div class="account-menu">
                <RouterLink
                  :to="{ name: 'webapp-layouts-profile-edit' }"
                  class="account-menu-item"
                >
                  <i class="lnil lnil-user-alt"></i>
                  <span>General</span>
                  <span class="end">
                    <i class="fas fa-arrow-right"></i>
                  </span>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'webapp-layouts-profile-edit-experience' }"
                  class="account-menu-item"
                >
                  <i class="lnil lnil-crown-alt"></i>
                  <span>Experience</span>
                  <span class="end">
                    <i class="fas fa-arrow-right"></i>
                  </span>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'webapp-layouts-profile-edit-skills' }"
                  class="account-menu-item"
                >
                  <i class="lnil lnil-quill"></i>
                  <span>Skills</span>
                  <span class="end">
                    <i class="fas fa-arrow-right"></i>
                  </span>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'webapp-layouts-profile-edit-settings' }"
                  class="account-menu-item"
                >
                  <i class="lnil lnil-cog"></i>
                  <span>Settings</span>
                  <span class="end">
                    <i class="fas fa-arrow-right"></i>
                  </span>
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="column is-8">
            <RouterView v-slot="{ Component }">
              <transition name="translate-page-y" mode="in-out">
                <component :is="Component" />
              </transition>
            </RouterView>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../assets/scss/abstracts/_variables.scss';
@import '../../../assets/scss/abstracts/_mixins.scss';
@import '../../../assets/scss/pages/profile/_user-profile.scss';
</style>
