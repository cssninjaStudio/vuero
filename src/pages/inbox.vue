<script setup lang="ts">
import { useTitle } from '@vueuse/core'

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

useTitle('Dashboard Apps 2 - Admin - Vuero')
</script>

<template>
  <MinimalLayout>
    <div class="inbox-wrapper">
      <div class="wrapper-inner">
        <!--Inbox sidebar-->
        <div class="inbox-sidebar">
          <!-- Header -->
          <div class="header-area">
            <div class="inbox-title">
              <RouterLink :to="{ name: 'index' }" class="inbox-brand">
                <img
                  class="light-image"
                  src="/@images/logos/logo/logo.svg"
                  alt=""
                />
                <img
                  class="dark-image"
                  src="/@images/logos/logo/logo-light.svg"
                  alt=""
                />
              </RouterLink>
              <span>Inbox</span>

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
            <div
              ref="dropdownElement1"
              :class="[isOpen1 && 'is-active']"
              class="dropdown inbox-dropdown dropdown-trigger is-right"
            >
              <div>
                <button class="button" @click="open1">
                  <span class="icon is-small">
                    <Icon icon="feather:more-vertical" />
                  </span>
                </button>
              </div>
              <div class="dropdown-menu">
                <div class="dropdown-content">
                  <a class="dropdown-item">
                    <Icon icon="feather:refresh-cw" />
                    <span>Refresh</span>
                  </a>
                  <a class="dropdown-item">
                    <Icon icon="feather:bell" />
                    <span>Notifications</span>
                  </a>
                  <a class="dropdown-item">
                    <Icon icon="feather:user-plus" />
                    <span>Invite People</span>
                  </a>
                  <a class="dropdown-item">
                    <Icon icon="feather:settings" />
                    <span>Settings</span>
                  </a>
                </div>
              </div>
            </div>
            <a class="inbox-action inbox-close-sidebar-mobile">
              <Icon icon="feather:x" />
            </a>
          </div>
          <!--Inner-->
          <div class="sidebar-inner">
            <!--Inner menu-->
            <div class="inner-menu">
              <a class="button compose-button is-fullwidth">Compose</a>
              <div class="inbox-menu">
                <ul>
                  <li>
                    <a class="is-active">
                      <Icon icon="feather:mail" />
                      <span>Inbox</span>
                      <span class="tag">24</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Icon icon="feather:file-text" />
                      <span>Drafts</span>
                      <span class="tag">2</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Icon icon="feather:send" />
                      <span>Sent</span>
                      <span class="tag">7</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Icon icon="feather:trash-2" />
                      <span>Trash</span>
                      <span class="tag">18</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Icon icon="feather:alert-octagon" />
                      <span>Spam</span>
                      <span class="tag">29</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <!--Scroll menu-->
            <div class="scroll-menu">
              <div class="title-wrap">
                <h3>Contacts</h3>
                <div class="control has-icon is-hidden">
                  <input
                    type="text"
                    class="input"
                    placeholder="Search Contacts..."
                  />
                  <div class="form-icon">
                    <Icon icon="feather:search" />
                  </div>
                </div>
                <a class="button search-button">
                  <span class="icon is-small">
                    <Icon icon="feather:search" />
                  </span>
                </a>
                <a class="button cancel-search-button is-hidden">
                  <span class="icon is-small">
                    <Icon icon="feather:x" />
                  </span>
                </a>
              </div>
              <div class="contact-list has-slimscroll">
                <!--Contact-->
                <div class="contact-block">
                  <img
                    src="/@images/avatars/photos/7.jpg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                  <div class="contact-meta">
                    <span>Alice Carasca</span>
                    <span>alice@huro.io</span>
                  </div>
                </div>
                <!--Contact-->
                <div class="contact-block">
                  <img
                    src="/@images/avatars/photos/25.jpg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                  <div class="contact-meta">
                    <span>Melany Wallace</span>
                    <span>melany@huro.io</span>
                  </div>
                </div>
                <!--Contact-->
                <div class="contact-block">
                  <img
                    src="/@images/avatars/photos/18.jpg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                  <div class="contact-meta">
                    <span>Esteban Castellanos</span>
                    <span>esteban@huro.io</span>
                  </div>
                </div>
                <!--Contact-->
                <div class="contact-block">
                  <img
                    src="/@images/avatars/photos/32.jpg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                  <div class="contact-meta">
                    <span>Jonathan Krugger</span>
                    <span>jonathan@huro.io</span>
                  </div>
                </div>
                <!--Contact-->
                <div class="contact-block">
                  <img
                    src="/@images/avatars/photos/38.jpg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                  <div class="contact-meta">
                    <span>Christie Dallas</span>
                    <span>christie@huro.io</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Messages list-->
        <div class="inbox-messages">
          <div class="header-area">
            <div class="actions">
              <a class="inbox-action mobile-menu-action">
                <Icon icon="feather:chevron-right" />
              </a>
              <a class="inbox-action check-all-action">
                <Icon icon="feather:check" />
              </a>
            </div>
            <div class="actions">
              <div class="control inbox-search has-icon">
                <input
                  type="text"
                  class="input is-rounded"
                  placeholder="Search Inbox..."
                />
                <div class="form-icon">
                  <Icon icon="feather:search" />
                </div>
              </div>

              <div
                ref="dropdownElement2"
                :class="[isOpen2 && 'is-active']"
                class="dropdown inbox-dropdown dropdown-trigger is-right"
              >
                <div>
                  <button class="button" @click="open2">
                    <span class="icon is-small">
                      <Icon icon="feather:more-vertical" />
                    </span>
                  </button>
                </div>
                <div class="dropdown-menu">
                  <div class="dropdown-content">
                    <a class="dropdown-item">
                      <Icon icon="feather:check" />
                      <span>Mark all as read</span>
                    </a>
                    <a class="dropdown-item">
                      <Icon icon="feather:eye-off" />
                      <span>Hide read</span>
                    </a>
                    <hr class="dropdown-divider" />
                    <a class="dropdown-item">
                      <Icon icon="feather:calendar" />
                      <span>Sort by date</span>
                    </a>
                    <a class="dropdown-item">
                      <Icon icon="feather:user" />
                      <span>Sort by user</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--Messages-->
          <div class="messages-list has-slimscroll">
            <!--messages list partial-->
            <InboxMessagesList />
          </div>
        </div>

        <!--Loader-->
        <div class="inbox-message-overlay">
          <div class="loader is-loading"></div>
        </div>

        <!--Message details 1-->
        <Message1 />

        <!--Message details 2-->
        <Message2 />

        <!--Message details 3-->
        <Message3 />

        <!--Message details 4-->
        <Message4 />

        <!--Message details 5-->
        <Message5 />

        <!--Message details 6-->
        <Message6 />

        <!--Message details 7-->
        <Message7 />

        <!--Message details 8-->
        <Message8 />

        <!--Message details 9-->
        <Message9 />

        <!--Message details 10-->
        <Message10 />
      </div>
    </div>
  </MinimalLayout>
</template>

<style lang="scss">
@import '../assets/scss/abstracts/_variables.scss';
@import '../assets/scss/pages/generic/_inbox.scss';
</style>
