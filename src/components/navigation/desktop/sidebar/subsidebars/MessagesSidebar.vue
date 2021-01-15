<script setup lang="ts">
import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'
</script>

<template>
  <div
    id="messages-sidebar"
    :class="[activeSidebar === 'messages' && 'is-active']"
    class="sidebar-panel is-messages"
  >
    <div class="messages-header">
      <h3 class="no-mb">Chat</h3>

      <div
        class="huro-hamburger nav-trigger push-resize messages-push"
        @click="toggleSidebar('messages')"
      >
        <span class="menu-toggle has-chevron">
          <span
            :class="[activeSidebar !== 'none' && 'active']"
            class="icon-box-toggle"
          >
            <span class="rotate">
              <i class="icon-line-top"></i>
              <i class="icon-line-center"></i>
              <i class="icon-line-bottom"></i>
            </span>
          </span>
        </span>
      </div>
    </div>
    <div class="inner">
      <div class="is-new-conversation">
        <button
          id="start-conversation"
          class="button h-button is-primary is-raised is-rounded is-fullwidth"
        >
          <Icon icon="feather:plus" />
          <span>New Conversation</span>
        </button>
      </div>
      <ul id="conversations-list" class="animated preFadeInUp fadeInUp">
        <li
          id="conversation1"
          class="is-active"
          data-conversation-menu="conversation1"
          data-position="Business Analyst"
        >
          <div class="recent-user">
            <div class="user-container">
              <img
                class="is-user"
                src="/@images/avatars/photos/10.jpg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="recipient-meta">
              <span>Henry G.</span>
              <span>3 minutes ago</span>
            </div>
          </div>
        </li>
        <li
          id="conversation2"
          data-conversation-menu="conversation2"
          data-position="Web Developer"
        >
          <div class="recent-user">
            <div class="user-container">
              <img
                class="is-user"
                src="/@images/avatars/photos/25.jpg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="recipient-meta">
              <span>Melany W.</span>
              <span>30 minutes ago</span>
            </div>
          </div>
        </li>
        <li
          id="conversation3"
          data-conversation-menu="conversation3"
          data-position="UI/UX Designer"
        >
          <div class="recent-user">
            <div class="user-container">
              <img
                class="is-user"
                src="/@images/avatars/photos/13.jpg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="recipient-meta">
              <span>Tara S.</span>
              <span>1 day ago</span>
            </div>
          </div>
        </li>
        <li
          id="conversation4"
          data-conversation-menu="conversation4"
          data-position="UI/UX Designer"
        >
          <div class="recent-user">
            <div class="user-container">
              <img
                class="is-user"
                src="/@images/avatars/photos/18.jpg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="recipient-meta">
              <span>Esteban C.</span>
              <span>1 day ago</span>
            </div>
          </div>
        </li>
        <li
          id="conversation5"
          data-conversation-menu="conversation5"
          data-position="Software Engineer"
        >
          <div class="recent-user">
            <div class="user-container">
              <img
                class="is-user"
                src="/@images/avatars/photos/7.jpg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="recipient-meta">
              <span>Alice C.</span>
              <span>2 days ago</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../../assets/scss/abstracts/_variables.scss';
@import '../../../../../assets/scss/layout/_sidebar-panel.scss';
</style>
