<template>
  <div class="page-content-inner">
    <!--Edit Profile-->
    <div class="account-wrapper">
      <div class="columns">
        <!--Navigation-->
        <div class="column is-4">
          <div class="account-box is-navigation">
            <VBlock title="Erik Kovalsky" subtitle="Product Manager" center>
              <template #icon>
                <VAvatar
                  size="large"
                  picture="/images/avatars/svg/vuero-1.svg"
                  badge="/images/icons/flags/united-states-of-america.svg"
                />
              </template>
            </VBlock>

            <div class="account-menu">
              <RouterLink
                :to="{ name: 'sidebar-layouts-profile-edit' }"
                class="account-menu-item"
              >
                <i aria-hidden="true" class="lnil lnil-user-alt"></i>
                <span>General</span>
                <span class="end">
                  <i aria-hidden="true" class="fas fa-arrow-right"></i>
                </span>
              </RouterLink>
              <RouterLink
                :to="{ name: 'sidebar-layouts-profile-edit-experience' }"
                class="account-menu-item"
              >
                <i aria-hidden="true" class="lnil lnil-crown-alt"></i>
                <span>Experience</span>
                <span class="end">
                  <i aria-hidden="true" class="fas fa-arrow-right"></i>
                </span>
              </RouterLink>
              <RouterLink
                :to="{ name: 'sidebar-layouts-profile-edit-skills' }"
                class="account-menu-item"
              >
                <i aria-hidden="true" class="lnil lnil-quill"></i>
                <span>Skills</span>
                <span class="end">
                  <i aria-hidden="true" class="fas fa-arrow-right"></i>
                </span>
              </RouterLink>
              <RouterLink
                :to="{ name: 'sidebar-layouts-profile-edit-settings' }"
                class="account-menu-item"
              >
                <i aria-hidden="true" class="lnil lnil-cog"></i>
                <span>Settings</span>
                <span class="end">
                  <i aria-hidden="true" class="fas fa-arrow-right"></i>
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
</template>

<style lang="scss">
@import '../../../scss/abstracts/_mixins.scss';
@import '../../../scss/pages/profile/_user-profile.scss';
</style>
