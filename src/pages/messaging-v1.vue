<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import { onMounted } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'
import useDropdown from '/@src/composition/use/useDropdown'

const { dropdownElement, isOpen, open } = useDropdown()

onMounted(() => {
  activeSidebar.value = 'messages'
})

useTitle('Messaging chat - Admin - Vuero')
</script>

<template>
  <DefaultLayout>
    <MessagesSidebar />
    <MessagesMobileSubsidebar />
    <CollapsedMessaging />

    <div
      id="huro-messaging"
      class="view-wrapper"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-naver-offset="406"
      data-menu-item="#sidebar-bubble"
      data-mobile-item="#mobile-bubble"
    >
      <div class="page-content-wrapper">
        <div class="page-content chat-content">
          <div class="page-title has-text-centered is-hidden">
            <div
              class="huro-hamburger nav-trigger push-resize"
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

            <h1 class="title is-5">Messages</h1>
          </div>

          <!-- Chat Card -->
          <div class="is-chat animated preFadeInUp fadeInUp">
            <!-- Header -->
            <div class="chat-header">
              <div class="is-autocomplete is-hidden">
                <div class="control">
                  <input
                    id="users-autocpl"
                    type="text"
                    class="input"
                    placeholder="Start typing a name"
                    autofocus
                  />
                  <div class="icon">
                    <span>To:</span>
                  </div>
                  <div class="hide">
                    <i class="iconify" data-icon="feather:x"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="chat-body-wrap">
              <!-- Chat Body -->
              <ol
                id="chat-body"
                class="chat-body"
                data-conversation-body="conversation1"
              >
                <li class="no-messages is-hidden">
                  <img
                    class="light-image"
                    src="/@images/illustrations/placeholders/search-4.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/@images/illustrations/placeholders/search-4-dark.svg"
                    alt=""
                  />
                  <div class="text">
                    <h3>No messages yet</h3>
                    <p>Start the conversation by typing a message</p>
                  </div>
                </li>

                <li class="chat-loader">
                  <div class="loader is-loading"></div>
                </li>
              </ol>

              <!-- Chat side -->
              <div class="chat-side">
                <div class="chat-side-header">
                  <MessagingToolbar />
                </div>
                <div class="chat-side-content is-single">
                  <div class="user-pic">
                    <img
                      id="user-details-image"
                      src="/@images/avatars/photos/10.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                    <img
                      id="user-details-badge"
                      class="is-badge"
                      src="/@images/icons/flags/united-states-of-america.svg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <h4 id="user-details-name" class="user-name">Henry G.</h4>
                  <p id="user-details-title" class="user-job-title">
                    Business Analyst
                  </p>

                  <div class="side-actions">
                    <a class="button h-button is-rounded">
                      <span class="icon is-small">
                        <i class="fas fa-phone"></i>
                      </span>
                      <span>Audio Call</span>
                    </a>
                    <a class="button h-button is-rounded">
                      <span class="icon is-small">
                        <i class="fas fa-video"></i>
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
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
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
                          $event.target.src =
                            'https://via.placeholder.com/1600x900'
                        "
                      />
                      <img
                        src="/@images/photo/demo/demo-apps/2.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/1600x900'
                        "
                      />
                      <img
                        src="/@images/photo/demo/demo-apps/3.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/1600x900'
                        "
                      />
                      <img
                        src="/@images/photo/demo/demo-apps/4.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/1600x900'
                        "
                      />
                      <img
                        src="/@images/photo/demo/demo-apps/5.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/1600x900'
                        "
                      />
                      <img
                        src="/@images/photo/demo/demo-apps/6.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/1600x900'
                        "
                      />
                      <img
                        src="/@images/photo/demo/demo-apps/7.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/1600x900'
                        "
                      />
                      <img
                        src="/@images/photo/demo/demo-apps/8.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/1600x900'
                        "
                      />
                      <img
                        src="/@images/photo/demo/demo-apps/9.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/1600x900'
                        "
                      />
                      <img
                        src="/@images/photo/demo/demo-apps/10.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/1600x900'
                        "
                      />
                      <img
                        src="/@images/photo/demo/demo-apps/11.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/1600x900'
                        "
                      />
                      <img
                        src="/@images/photo/demo/demo-apps/12.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/1600x900'
                        "
                      />
                    </div>
                    <a class="view-more">View More</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="message-field-wrapper">
              <div class="control">
                <div class="add-content">
                  <div
                    ref="dropdownElement"
                    :class="[isOpen && 'is-active']"
                    class="dropdown dropdown-trigger is-up"
                  >
                    <div>
                      <div class="button" aria-haspopup="true" @click="open">
                        <i class="iconify" data-icon="feather:plus"></i>
                      </div>
                    </div>
                    <div class="dropdown-menu" role="menu">
                      <div class="dropdown-content">
                        <a class="dropdown-item">
                          <i class="iconify" data-icon="feather:video"></i>
                          <div class="meta">
                            <span>Video</span>
                            <span>Embed a video</span>
                          </div>
                        </a>
                        <a
                          href="#"
                          class="dropdown-item kill-drop h-modal-trigger"
                        >
                          <i class="iconify" data-icon="feather:image"></i>
                          <div class="meta">
                            <span>Images</span>
                            <span>Upload pictures</span>
                          </div>
                        </a>
                        <a
                          href="#"
                          class="dropdown-item kill-drop h-modal-trigger"
                        >
                          <i class="iconify" data-icon="feather:link"></i>
                          <div class="meta">
                            <span>Link</span>
                            <span>Post a link</span>
                          </div>
                        </a>
                        <hr class="dropdown-divider" />
                        <a
                          href="#"
                          class="dropdown-item kill-drop h-modal-trigger"
                        >
                          <i class="iconify" data-icon="feather:file"></i>
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
                    <i class="iconify" data-icon="feather:smile"></i>
                  </div>
                </div>
                <input
                  id="chat-input"
                  class="input is-rounded"
                  type="text"
                  placeholder="Write a message ..."
                />
                <div class="send-message">
                  <div class="button h-button is-primary is-raised is-rounded">
                    Send
                  </div>
                </div>
              </div>

              <div class="typing-indicator">
                <img src="/@images/icons/typing.gif" alt="" />
              </div>
            </div>
          </div>

          <div
            class="is-chat-placeholder animated preFadeInUp fadeInUp is-hidden"
          >
            <div class="caption">
              <img
                src="/@images/illustrations/placeholders/having-coffee.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
              <div class="text">
                <h3>Nothing to show</h3>
                <p>Select an existing conversation or start a new one</p>
                <a
                  id="new-chat"
                  class="button h-button is-solid is-outlined is-big is-rounded"
                  >Start a new conversation</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <a class="chat-side-fab">
      <i class="iconify" data-icon="feather:chevron-left"></i>
    </a>
  </DefaultLayout>
</template>

<style lang="scss">
@import '../assets/scss/abstracts/_variables.scss';
@import '../assets/scss/pages/messaging/_messaging.scss';
</style>
