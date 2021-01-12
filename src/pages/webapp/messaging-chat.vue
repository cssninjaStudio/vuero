<script setup lang="ts">
import { useTitle } from '@vueuse/core'
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

useTitle('Messaging chat - WebApp - Vuero')
</script>

<template>
  <MinimalLayout>
    <div class="chat-app-wrapper">
      <!--Header-->
      <div class="chat-app-header">
        <!--Logo-->
        <div class="logo">
          <img class="light-image" src="/@images/logos/logo/logo.svg" alt="" />
          <img
            class="dark-image"
            src="/@images/logos/logo/logo-light.svg"
            alt=""
          />
        </div>

        <!--Search-->
        <div class="search-bar">
          <div class="field">
            <div class="control has-icon">
              <input
                type="text"
                class="input search-input"
                placeholder="Search..."
              />
              <div class="form-icon">
                <Icon icon="feather:search" />
              </div>
              <div class="search-results has-slimscroll"></div>
            </div>
          </div>
        </div>

        <!--User Settings-->
        <div class="user-settings">
          <!--Toolbar-->
          <Toolbar />

          <!--User Menu-->
          <div
            ref="dropdownElement1"
            :class="[isOpen1 && 'is-active']"
            class="dropdown is-right dropdown-trigger user-dropdown"
          >
            <div class="is-trigger" aria-haspopup="true" @click="open1">
              <div class="profile-avatar">
                <img
                  class="avatar"
                  src="/@images/avatars/photos/8.jpg"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <Icon icon="feather:chevron-down" />
            </div>
            <div class="dropdown-menu" role="menu">
              <div class="dropdown-content">
                <div class="dropdown-item">
                  <p class="is-size-7">Erik Kovalsky</p>
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
        </div>
      </div>

      <!--Chat app wrapper-->
      <div class="wrapper">
        <!--Conversation List-->
        <WebappConversationList />

        <!--Conversation messages-->
        <div class="chat-area" data-simplebar>
          <!--Conversation 1-->
          <WebappConversation1 />

          <!--Conversation 2-->
          <WebappConversation2 />

          <!--Conversation 3-->
          <WebappConversation3 />

          <!--Conversation 4-->
          <WebappConversation4 />

          <!--Conversation 5-->
          <WebappConversation5 />

          <!--Conversation 6-->
          <WebappConversation6 />

          <!--Conversation 7-->
          <WebappConversation7 />

          <!--Conversation 8-->
          <WebappConversation8 />

          <!--Conversation 9-->
          <WebappConversation9 />

          <!--Conversation 10-->
          <WebappConversation10 />

          <!--Conversation 11-->
          <WebappConversation11 />

          <div class="chat-area-footer">
            <div class="add-content">
              <div
                ref="dropdownElement2"
                :class="[isOpen2 && 'is-active']"
                class="dropdown dropdown-trigger is-up"
              >
                <div>
                  <div class="button" aria-haspopup="true" @click="open2">
                    <Icon icon="feather:plus" />
                  </div>
                </div>
                <div class="dropdown-menu" role="menu">
                  <div class="dropdown-content">
                    <a class="dropdown-item">
                      <Icon icon="feather:video" />
                      <div class="meta">
                        <span>Video</span>
                        <span>Embed a video</span>
                      </div>
                    </a>
                    <a href="#" class="dropdown-item kill-drop h-modal-trigger">
                      <Icon icon="feather:image" />
                      <div class="meta">
                        <span>Images</span>
                        <span>Upload pictures</span>
                      </div>
                    </a>
                    <a href="#" class="dropdown-item kill-drop h-modal-trigger">
                      <Icon icon="feather:link" />
                      <div class="meta">
                        <span>Link</span>
                        <span>Post a link</span>
                      </div>
                    </a>
                    <hr class="dropdown-divider" />
                    <a href="#" class="dropdown-item kill-drop h-modal-trigger">
                      <Icon icon="feather:file" />
                      <div class="meta">
                        <span>File</span>
                        <span>Upload a file</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="add-emoji">
              <div class="button">
                <Icon icon="feather:smile" />
              </div>
            </div>
            <input type="text" placeholder="Type something here..." />
          </div>
        </div>

        <!--Conversation Details-->
        <div class="detail-area" data-simplebar>
          <div class="chat-side-content is-single">
            <div class="user-pic h-avatar is-large">
              <span class="avatar is-fake is-h-purple">
                <span>WG</span>
              </span>
              <img
                class="avatar is-hidden"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <h4 id="user-details-name" class="user-name">Work Group</h4>
            <p id="user-details-title" class="user-job-title">
              7 people are chatting
            </p>

            <div class="side-actions">
              <a class="button h-button is-rounded">
                <span class="icon is-small">
                  <Icon icon="fa-phone" />
                </span>
                <span>Audio Call</span>
              </a>
              <a class="button h-button is-rounded">
                <span class="icon is-small">
                  <Icon icon="fa-video" />
                </span>
                <span>Video Call</span>
              </a>
            </div>

            <div class="detail-photos">
              <div class="detail-photo-title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-image"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <path d="M21 15l-5-5L5 21"></path>
                </svg>
                Shared photos
              </div>
              <div class="detail-photo-grid">
                <img
                  src="/@images/photo/demo/demo-apps/1.jpg"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/1600x900'
                  "
                />
                <img
                  src="/@images/photo/demo/demo-apps/2.jpg"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/1600x900'
                  "
                />
                <img
                  src="/@images/photo/demo/demo-apps/3.jpg"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/1600x900'
                  "
                />
                <img
                  src="/@images/photo/demo/demo-apps/4.jpg"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/1600x900'
                  "
                />
                <img
                  src="/@images/photo/demo/demo-apps/5.jpg"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/1600x900'
                  "
                />
                <img
                  src="/@images/photo/demo/demo-apps/6.jpg"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/1600x900'
                  "
                />
                <img
                  src="/@images/photo/demo/demo-apps/7.jpg"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/1600x900'
                  "
                />
                <img
                  src="/@images/photo/demo/demo-apps/8.jpg"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/1600x900'
                  "
                />
                <img
                  src="/@images/photo/demo/demo-apps/9.jpg"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/1600x900'
                  "
                />
                <img
                  src="/@images/photo/demo/demo-apps/10.jpg"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/1600x900'
                  "
                />
                <img
                  src="/@images/photo/demo/demo-apps/11.jpg"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/1600x900'
                  "
                />
                <img
                  src="/@images/photo/demo/demo-apps/12.jpg"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/1600x900'
                  "
                />
              </div>
              <a class="view-more">View More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MinimalLayout>
</template>
