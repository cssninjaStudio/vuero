<script setup lang="ts">
import { isMobileSidebarOpen } from '/@src/composition/state/ui/mobileSidebarState'
import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'
</script>

<template>
  <div
    :class="[
      isMobileSidebarOpen && activeSidebar === 'messages' && 'is-active',
    ]"
    class="mobile-subsidebar is-messaging"
  >
    <div class="inner">
      <div class="sidebar-title">
        <h3>Messages</h3>
      </div>

      <ul id="mobile-conversations-list" class="animated preFadeInUp fadeInUp">
        <li
          id="mobile-conversation1"
          class="is-active"
          data-conversation-menu="conversation1"
          data-position="Business Analyst"
          data-username="Henry G."
        >
          <div class="recent-user">
            <div class="user-container">
              <img
                class="is-user"
                src="/images/avatars/photos/10.jpg"
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
          id="mobile-conversation2"
          data-conversation-menu="conversation2"
          data-position="Web Developer"
          data-username="Melany W."
        >
          <div class="recent-user">
            <div class="user-container">
              <img
                class="is-user"
                src="/images/avatars/photos/25.jpg"
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
          id="mobile-conversation3"
          class="is-flex-wrapped multiple"
          data-conversation-menu="conversation3"
          data-position="UI/UX Designer"
          data-username="Tara S."
        >
          <div class="recent-user">
            <div class="user-container">
              <img
                class="is-user"
                src="/images/avatars/photos/13.jpg"
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
          id="mobile-conversation4"
          data-conversation-menu="conversation4"
          data-position="UI/UX Designer"
          data-username="Esteban C."
        >
          <div class="recent-user">
            <div class="user-container">
              <img
                class="is-user"
                src="/images/avatars/photos/18.jpg"
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
          id="mobile-conversation5"
          data-conversation-menu="conversation5"
          data-position="Software Engineer"
        >
          <div class="recent-user">
            <div class="user-container">
              <img
                class="is-user"
                src="/images/avatars/photos/7.jpg"
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
@import '../../../../../assets/scss/layout/_sidebar-mobile.scss';
</style>
