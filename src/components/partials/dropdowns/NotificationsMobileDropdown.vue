<script setup lang="ts">
import { ref } from 'vue'
import { useDropdown } from '/@src/composable/useDropdown'
import { onceImageErrored } from '/@src/utils/via-placeholder'

const dropdownElement = ref<HTMLElement>()
const dropdown = useDropdown(dropdownElement)
</script>

<template>
  <div
    ref="dropdownElement"
    class="navbar-item has-dropdown is-notification is-hidden-tablet is-hidden-desktop"
  >
    <a
      class="navbar-link is-arrowless"
      tabindex="0"
      @keydown.space.prevent="dropdown.toggle"
      @click="dropdown.toggle"
    >
      <i aria-hidden="true" class="iconify" data-icon="feather:bell"></i>
      <span class="new-indicator pulsate"></span>
    </a>
    <div class="navbar-dropdown is-boxed is-right">
      <div class="heading">
        <div class="heading-left">
          <h6 class="heading-title">Notifications</h6>
        </div>
        <div class="heading-right">
          <a class="notification-link" href="#">See all</a>
        </div>
      </div>
      <div class="inner has-slimscroll">
        <ul class="notification-list">
          <li>
            <a class="notification-item">
              <div class="img-left">
                <img
                  class="user-photo"
                  alt=""
                  src="/images/avatars/svg/vuero-4.svg"
                  @error.once="(event) => onceImageErrored(event, '150x150')"
                />
              </div>
              <div class="user-content">
                <p class="user-info">
                  <span class="name">Alice C.</span> left a comment.
                </p>
                <p class="time">1 hour ago</p>
              </div>
            </a>
          </li>
          <li>
            <a class="notification-item">
              <div class="img-left">
                <img
                  class="user-photo"
                  alt=""
                  src="/images/avatars/svg/vuero-2.svg"
                  @error.once="(event) => onceImageErrored(event, '150x150')"
                />
              </div>
              <div class="user-content">
                <p class="user-info">
                  <span class="name">Joshua S.</span> uploaded a file.
                </p>
                <p class="time">2 hours ago</p>
              </div>
            </a>
          </li>
          <li>
            <a class="notification-item">
              <div class="img-left">
                <img
                  class="user-photo"
                  alt=""
                  src="/images/avatars/svg/vuero-5.svg"
                  @error.once="(event) => onceImageErrored(event, '150x150')"
                />
              </div>
              <div class="user-content">
                <p class="user-info">
                  <span class="name">Tara S.</span> sent you a message.
                </p>
                <p class="time">2 hours ago</p>
              </div>
            </a>
          </li>
          <li>
            <a class="notification-item">
              <div class="img-left">
                <img
                  class="user-photo"
                  alt=""
                  src="/images/avatars/svg/vuero-9.svg"
                  @error.once="(event) => onceImageErrored(event, '150x150')"
                />
              </div>
              <div class="user-content">
                <p class="user-info">
                  <span class="name">Melany W.</span> left a comment.
                </p>
                <p class="time">3 hours ago</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
