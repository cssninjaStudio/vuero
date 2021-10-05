<script setup lang="ts">
import axios from 'axios'
import { useHead } from '@vueuse/head'
import { computed, onMounted, ref, watchEffect, watchPostEffect } from 'vue'

import { activeSidebar, toggleSidebar } from '/@src/state/activeSidebarState'
import { sidebarTheme } from '/@src/state/sidebarLayoutState'
import { useViaPlaceholderError } from '/@src/composable/useViaPlaceholderError'

import useDropdown from '/@src/composable/useDropdown'
import sleep from '/@src/utils/sleep'

// we are using static data here, but you might need to load those from your API
// to do so, this should be a ref<any[]>([]) and be populated when request is done
const conversations = [
  {
    id: 1,
    name: 'Henry G.',
    lastMessage: '3 minutes ago',
    avatar: '/demo/avatars/10.jpg',
  },
  {
    id: 2,
    name: 'Melany W.',
    lastMessage: '30 minutes ago',
    avatar: '/demo/avatars/25.jpg',
  },
  {
    id: 3,
    name: 'Tara S.',
    lastMessage: '1 day ago',
    avatar: '/demo/avatars/13.jpg',
  },
  {
    id: 4,
    name: 'Esteban C.',
    lastMessage: '1 day ago',
    avatar: '/demo/avatars/18.jpg',
  },
  {
    id: 5,
    name: 'Alice C.',
    lastMessage: '2 days ago',
    avatar: '/demo/avatars/7.jpg',
  },
]

const dropdownElement = ref<HTMLElement>()
const dropdown = useDropdown(dropdownElement)
const addConversationOpen = ref(false)
const isLoading = ref(true)
const selectedConversationId = ref(0)
const messages = ref<any[]>([])
const mobileConversationDetailsOpen = ref(false)

const onConversationChanged = async () => {
  if (selectedConversationId.value === 0) {
    messages.value = []
    return
  }

  isLoading.value = true

  // we are waiting for 1sec to simulate network latency
  await sleep(1000)

  try {
    const { data } = await axios.get<{ messages: any }>(
      `/api/conversation${selectedConversationId.value}.json`
    )
    if (data.messages && data.messages.message) {
      messages.value = data.messages.message
    }
  } catch (error) {
    console.error(error)
  }

  isLoading.value = false
}

const selectedConversation = computed(() => {
  const conversation = conversations.find(
    (item) => item.id === selectedConversationId.value
  )
  if (selectedConversationId.value === 0 || !conversation || isLoading.value) {
    return {
      id: 0,
      name: '',
      lastMessage: '',
      avatar: '/images/avatars/placeholder.jpg',
    }
  } else {
    return conversation
  }
})

onMounted(() => {
  activeSidebar.value = 'messages'
  selectedConversationId.value = 1
})

useHead({
  title: 'Messaging chat - Sidebar - Vuero',
})

watchEffect(onConversationChanged)
watchPostEffect(() => {
  const isOpen = activeSidebar.value === 'messages'
  const wrappers = document.querySelectorAll('.view-wrapper')

  wrappers.forEach((wrapper) => {
    if (isOpen === false) {
      wrapper.classList.remove('is-pushed-full')
    } else if (!wrapper.classList.contains('is-pushed-full')) {
      wrapper.classList.add('is-pushed-full')
    }
  })
})
</script>

<template>
  <MessagingLayout :theme="sidebarTheme">
    <template #default="{ isMobileSidebarOpen }">
      <transition name="slide-x">
        <MessagesSubsidebar
          v-if="activeSidebar === 'messages'"
          :conversations="conversations"
          :selected-conversation-id="selectedConversationId"
          @addConversation="
            () => {
              selectedConversationId = 0
              addConversationOpen = !addConversationOpen
            }
          "
          @selectConversation="
            (id) => {
              addConversationOpen = false
              selectedConversationId = id
            }
          "
        />
      </transition>
      <transition name="slide-x">
        <MessagesMobileSubsidebar
          v-if="isMobileSidebarOpen"
          :conversations="conversations"
          :selected-conversation-id="selectedConversationId"
          @selectConversation="
            (id) => {
              addConversationOpen = false
              selectedConversationId = id
            }
          "
        />
      </transition>

      <CollapsedMessaging
        :conversations="conversations"
        :selected-conversation-id="selectedConversationId"
        @addConversation="
          () => {
            selectedConversationId = 0
            addConversationOpen = !addConversationOpen
          }
        "
        @selectConversation="
          (id) => {
            addConversationOpen = false
            selectedConversationId = id
          }
        "
      />

      <div
        id="vuero-messaging"
        class="view-wrapper"
        :class="[activeSidebar === 'none' && 'is-pushed-messages']"
      >
        <div class="page-content-wrapper">
          <div class="page-content chat-content">
            <div class="page-title has-text-centered is-hidden">
              <div
                class="vuero-hamburger nav-trigger push-resize"
                @click="toggleSidebar('messages')"
              >
                <span class="menu-toggle has-chevron">
                  <span
                    :class="[activeSidebar !== 'none' && 'active']"
                    class="icon-box-toggle"
                  >
                    <span class="rotate">
                      <i aria-hidden="true" class="icon-line-top"></i>
                      <i aria-hidden="true" class="icon-line-center"></i>
                      <i aria-hidden="true" class="icon-line-bottom"></i>
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
                <div
                  :class="[!addConversationOpen && 'is-hidden']"
                  class="is-autocomplete"
                >
                  <div class="control">
                    <div class="easy-autocomplete">
                      <input
                        id="users-autocpl"
                        type="text"
                        class="input"
                        aria-label="To"
                        placeholder="Start typing a name"
                      />
                    </div>
                    <div class="icon">
                      <span>To:</span>
                    </div>
                    <div class="hide" @click="addConversationOpen = false">
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:x"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="chat-body-wrap">
                <!-- Chat Body -->
                <ol id="chat-body" class="chat-body">
                  <li v-if="messages.length === 0" class="no-messages">
                    <img
                      class="light-image"
                      src="/@src/assets/illustrations/placeholders/search-4.svg"
                      alt=""
                    />
                    <img
                      class="dark-image"
                      src="/@src/assets/illustrations/placeholders/search-4-dark.svg"
                      alt=""
                    />
                    <div class="text">
                      <h3>No messages yet</h3>
                      <p>Start the conversation by typing a message</p>
                    </div>
                  </li>

                  <li
                    v-for="message in messages"
                    :key="message.id"
                    :class="[
                      message.type === 'system' && 'divider-container',
                      message.type !== 'system' && message.sender,
                    ]"
                  >
                    <!-- System messages -->
                    <template v-if="message.type === 'system'">
                      <li class="divider-container">
                        <div class="divider">
                          <span>{{ message.content.text }}</span>
                        </div>
                      </li>
                    </template>

                    <!-- Text messages -->
                    <template v-else-if="message.type === 'msg'">
                      <div class="avatar">
                        <img :src="message.avatar" draggable="false" alt="" />
                      </div>
                      <div class="msg">
                        <div class="msg-inner">
                          <p>{{ message.content.text }}</p>
                        </div>

                        <time>
                          {{ message.content.time }}
                        </time>
                      </div>
                    </template>

                    <!-- Image messages -->

                    <template v-else-if="message.type === 'image'">
                      <div class="avatar is-online">
                        <img :src="message.avatar" draggable="false" alt="" />
                      </div>
                      <div class="msg is-image">
                        <div class="image-container">
                          <VPhotosSwipe
                            :items="[
                              {
                                src: message.content.image_url,
                                thumbnail: message.content.image_url,
                                w: 600,
                                h: 400,
                                alt: 'optional alt attribute for thumbnail image',
                              },
                            ]"
                            thumbnail-radius="full"
                          />
                          <div class="image-overlay"></div>
                          <div class="image-actions">
                            <div class="actions-inner">
                              <div class="action download">
                                <span
                                  class="iconify"
                                  data-icon="feather:download"
                                >
                                </span>
                              </div>
                              <a
                                :href="message.content.image_url"
                                class="action messaging-popup"
                                aria-label="Maximize"
                              >
                                <span
                                  class="iconify"
                                  data-icon="feather:maximize"
                                >
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </template>

                    <!-- Link image messages -->
                    <template v-else-if="message.type === 'imagelink'">
                      <div class="avatar">
                        <img :src="message.avatar" draggable="false" alt="" />
                      </div>
                      <div class="msg is-link-image">
                        <figure class="image">
                          <img :src="message.content.link_image" alt="" />
                          <div class="link-badge">
                            <img :src="message.content.link_badge" alt="" />
                          </div>
                        </figure>
                        <div class="link-body">
                          <span class="link-title">{{
                            message.content.text
                          }}</span>
                          <small>{{ message.content.subtext }}</small>
                        </div>
                      </div>
                    </template>

                    <!-- Link text messages -->
                    <template v-else-if="message.type === 'link'">
                      <div class="avatar is-online">
                        <img :src="message.avatar" draggable="false" alt="" />
                      </div>
                      <div class="msg is-link">
                        <VIconWrap icon="feather:link" />
                        <p class="link-meta">
                          <span>{{ message.content.text }}</span>
                          <a href="#">{{ message.content.subtext }}</a>
                        </p>
                      </div>
                    </template>
                  </li>

                  <li class="chat-loader" :class="[isLoading && 'is-active']">
                    <div class="loader is-loading"></div>
                  </li>
                </ol>

                <!-- Chat side -->
                <div
                  :class="[mobileConversationDetailsOpen && 'is-mobile-active']"
                  class="chat-side"
                >
                  <div class="chat-side-header">
                    <MessagingToolbar
                      @close="mobileConversationDetailsOpen = false"
                    />
                  </div>

                  <div class="chat-side-content is-single">
                    <div class="user-pic">
                      <img
                        id="user-details-image"
                        :src="selectedConversation.avatar"
                        alt=""
                        @error.once="
                          (event) =>
                            useViaPlaceholderError(
                              event,
                              '                            '
                            )
                        "
                      />
                      <img
                        id="user-details-badge"
                        class="is-badge"
                        src="/images/icons/flags/united-states-of-america.svg"
                        alt=""
                        @error.once="
                          (event) => useViaPlaceholderError(event, '150x150')
                        "
                      />
                    </div>
                    <h4 v-if="selectedConversation.name" class="user-name">
                      {{ selectedConversation.name }}
                    </h4>
                    <p
                      v-if="selectedConversation.lastMessage"
                      class="user-job-title"
                    >
                      {{ selectedConversation.lastMessage }}
                    </p>

                    <div class="side-actions">
                      <a class="button v-button is-rounded">
                        <span class="icon is-small">
                          <i aria-hidden="true" class="fas fa-phone"></i>
                        </span>
                        <span>Audio Call</span>
                      </a>
                      <a class="button v-button is-rounded">
                        <span class="icon is-small">
                          <i aria-hidden="true" class="fas fa-video"></i>
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
                          src="/demo/photos/demo-apps/1.jpg"
                          alt=""
                          @error.once="
                            (event) => useViaPlaceholderError(event, '1600x900')
                          "
                        />
                        <img
                          src="/demo/photos/demo-apps/2.jpg"
                          alt=""
                          @error.once="
                            (event) => useViaPlaceholderError(event, '1600x900')
                          "
                        />
                        <img
                          src="/demo/photos/demo-apps/3.jpg"
                          alt=""
                          @error.once="
                            (event) => useViaPlaceholderError(event, '1600x900')
                          "
                        />
                        <img
                          src="/demo/photos/demo-apps/4.jpg"
                          alt=""
                          @error.once="
                            (event) => useViaPlaceholderError(event, '1600x900')
                          "
                        />
                        <img
                          src="/demo/photos/demo-apps/5.jpg"
                          alt=""
                          @error.once="
                            (event) => useViaPlaceholderError(event, '1600x900')
                          "
                        />
                        <img
                          src="/demo/photos/demo-apps/6.jpg"
                          alt=""
                          @error.once="
                            (event) => useViaPlaceholderError(event, '1600x900')
                          "
                        />
                        <img
                          src="/demo/photos/demo-apps/7.jpg"
                          alt=""
                          @error.once="
                            (event) => useViaPlaceholderError(event, '1600x900')
                          "
                        />
                        <img
                          src="/demo/photos/demo-apps/8.jpg"
                          alt=""
                          @error.once="
                            (event) => useViaPlaceholderError(event, '1600x900')
                          "
                        />
                        <img
                          src="/demo/photos/demo-apps/9.jpg"
                          alt=""
                          @error.once="
                            (event) => useViaPlaceholderError(event, '1600x900')
                          "
                        />
                        <img
                          src="/demo/photos/demo-apps/10.jpg"
                          alt=""
                          @error.once="
                            (event) => useViaPlaceholderError(event, '1600x900')
                          "
                        />
                        <img
                          src="/demo/photos/demo-apps/11.jpg"
                          alt=""
                          @error.once="
                            (event) => useViaPlaceholderError(event, '1600x900')
                          "
                        />
                        <img
                          src="/demo/photos/demo-apps/12.jpg"
                          alt=""
                          @error.once="
                            (event) => useViaPlaceholderError(event, '1600x900')
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
                      class="dropdown dropdown-trigger is-up"
                    >
                      <div>
                        <div
                          class="button"
                          aria-haspopup="true"
                          @click="dropdown.toggle"
                        >
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:plus"
                          ></i>
                        </div>
                      </div>
                      <div class="dropdown-menu" role="menu">
                        <div class="dropdown-content">
                          <a class="dropdown-item">
                            <i
                              aria-hidden="true"
                              class="iconify"
                              data-icon="feather:video"
                            ></i>
                            <div class="meta">
                              <span>Video</span>
                              <span>Embed a video</span>
                            </div>
                          </a>
                          <a
                            href="#"
                            class="dropdown-item kill-drop v-modal-trigger"
                          >
                            <i
                              aria-hidden="true"
                              class="iconify"
                              data-icon="feather:image"
                            ></i>
                            <div class="meta">
                              <span>Images</span>
                              <span>Upload pictures</span>
                            </div>
                          </a>
                          <a
                            href="#"
                            class="dropdown-item kill-drop v-modal-trigger"
                          >
                            <i
                              aria-hidden="true"
                              class="iconify"
                              data-icon="feather:link"
                            ></i>
                            <div class="meta">
                              <span>Link</span>
                              <span>Post a link</span>
                            </div>
                          </a>
                          <hr class="dropdown-divider" />
                          <a
                            href="#"
                            class="dropdown-item kill-drop v-modal-trigger"
                          >
                            <i
                              aria-hidden="true"
                              class="iconify"
                              data-icon="feather:file"
                            ></i>
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
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:smile"
                      ></i>
                    </div>
                  </div>
                  <input
                    id="chat-input"
                    class="input is-rounded"
                    type="text"
                    placeholder="Write a message ..."
                    aria-label="Write a message"
                  />
                  <div class="send-message">
                    <div
                      class="button v-button is-primary is-raised is-rounded"
                    >
                      Send
                    </div>
                  </div>
                </div>

                <div class="typing-indicator">
                  <img src="/images/icons/misc/typing.gif" alt="" />
                </div>
              </div>
            </div>

            <div
              class="
                is-chat-placeholder
                animated
                preFadeInUp
                fadeInUp
                is-hidden
              "
            >
              <div class="caption">
                <img
                  src="/@src/assets/illustrations/placeholders/having-coffee.svg"
                  alt=""
                  @error.once="
                    (event) => useViaPlaceholderError(event, '150x150')
                  "
                />
                <div class="text">
                  <h3>Nothing to show</h3>
                  <p>Select an existing conversation or start a new one</p>
                  <a
                    id="new-chat"
                    class="
                      button
                      v-button
                      is-solid is-outlined is-big is-rounded
                    "
                  >
                    Start a new conversation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        :class="[mobileConversationDetailsOpen && 'is-mobile-active']"
        class="chat-side-fab"
        aria-label="Close convesation details"
        @click="mobileConversationDetailsOpen = !mobileConversationDetailsOpen"
      >
        <i
          aria-hidden="true"
          class="iconify"
          data-icon="feather:chevron-left"
        ></i>
      </a>
    </template>
  </MessagingLayout>
</template>

<style lang="scss">
/* ==========================================================================
1. Chat side FAB
========================================================================== */

.chat-side-fab {
  position: fixed;
  top: 10px;
  right: 10px;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--white);
  border-radius: var(--radius-rounded);
  border: 1px solid var(--fade-grey-dark-3);
  box-shadow: var(--light-box-shadow);
  transform: translateX(60px) rotate(360deg);
  transition: all 0.3s;

  &.is-active {
    transform: translateX(0) rotate(0);
  }

  svg {
    position: relative;
    left: -1px;
    height: 20px;
    width: 20px;
    color: var(--light-text);
  }
}

/* ==========================================================================
2. Chat Wrapper
========================================================================== */

.is-chat {
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 16px 6px 6px 16px;

  .chat-header {
    position: absolute;
    display: flex;
    min-height: 55px;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    padding: 5px 10px;
    z-index: 2;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    .is-autocomplete {
      flex-grow: 2;
      max-width: 320px;
      margin-left: 20px;

      &.is-active,
      &:hover {
        background: transparent !important;
      }

      .control {
        position: relative;

        .icon {
          position: absolute;
          top: 9px;
          left: 9px;
          color: var(--placeholder);

          span {
            color: var(--dark-text);
            font-weight: 500;
          }

          svg {
            width: 20px;
            height: 20px;
            transition: all 0.3s;
          }
        }

        .hide {
          position: absolute;
          top: 2px;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 36px;
          width: 36px;
          cursor: pointer;

          svg {
            height: 18px;
            width: 18px;
            color: var(--muted-grey);
          }
        }

        .easy-autocomplete {
          width: 100% !important;

          input {
            padding-left: 40px;
            border: none;
            box-shadow: none;
            color: var(--muted-grey);
            transition: all 0.3s;

            &:focus {
              + .icon {
                color: var(--primary);
              }
            }
          }

          .template-wrapper {
            display: flex !important;
            justify-content: flex-start;
            align-items: center;

            .avatar-wrapper {
              position: relative;
              width: 40px !important;
              height: 40px !important;

              .autocpl-avatar {
                width: 40px !important;
                height: 40px !important;
                border-radius: var(--radius-rounded) !important;
              }

              .avatar-badge {
                position: absolute;
                bottom: 0;
                right: -5px;
                width: 18px;
                height: 18px;
                border: 2px solid var(--white);
                border-radius: var(--radius-rounded);
              }
            }

            .entry-text {
              margin-left: 15px;

              span {
                font-size: 0.8rem;
                color: var(--title-grey);
              }
            }
          }
        }
      }

      li {
        height: auto !important;
        padding-top: 8px;
        padding-bottom: 8px;
        border-left: none !important;
        border-right: none !important;
      }

      .easy-autocomplete-container {
        top: 120% !important;
        border: none !important;

        ul {
          border-radius: var(--radius) !important;
          box-shadow: -1px 3px 10px 0 rgba(0, 0, 0, 0.06) !important;
        }
      }
    }

    .user-group {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-left: 20px;
      cursor: pointer;

      img {
        height: 36px;
        width: 36px;
        border: 3px solid var(--white);
        border-radius: var(--radius-rounded);
        display: block;

        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4) {
          margin-left: -15px;
        }
      }

      .more-indicator {
        height: 36px;
        width: 36px;
        border-radius: var(--radius-rounded);
        background: var(--primary);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: -15px;
        border: 2px solid var(--white);

        span {
          display: block;
          color: var(--white);
          font-weight: 600;
          font-size: 0.8rem;
        }
      }
    }
  }
}

/* ==========================================================================
3. Chat body
========================================================================== */

.chat-body-wrap {
  position: relative;
  display: flex;
  height: 100%;
  overflow: hidden;

  &.side-collapsed {
    .chat-body {
      width: 100% !important;
    }

    .chat-side {
      width: 0 !important;
      transform: translateX(100%);

      .chat-side-content {
        opacity: 0;
      }
    }
  }
}

.chat-side {
  position: relative;
  width: 320px;
  height: 100%;
  border-left: 1px solid var(--fade-grey);
  background: var(--white);
  z-index: 3;
  transition: all 0.3s;

  .chat-side-header {
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 20px;
  }

  .chat-side-content {
    text-align: center;
    transition: all 0.3s;
    padding: 20px;

    .user-pic {
      position: relative;
      max-width: 90px;
      margin: 0 auto;

      img {
        height: 90px;
        width: 90px;
        border-radius: var(--radius-rounded);
        display: block;

        &.is-squared {
          border-radius: 0 !important;
        }

        &.is-badge {
          display: block;
          position: absolute;
          right: -6px;
          bottom: 0;
          border: 3px solid var(--white);
          height: 34px;
          width: 34px;
          border-radius: var(--radius-rounded);
        }
      }
    }

    .user-name {
      margin-top: 10px;
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--dark-text);
    }

    .user-job-title {
      color: var(--muted-grey);
    }

    .side-actions {
      padding: 12px 0;

      .button {
        color: var(--light-text);

        &:hover {
          box-shadow: var(--light-box-shadow);
        }
      }
    }

    .detail-photos {
      margin-top: 30px;
      text-align: center;
      padding: 0 12px;

      .detail-photo-title {
        display: flex;
        align-items: center;
        font-weight: 400;
        font-size: 1rem;
        margin-bottom: 20px;
        color: var(--light-text);

        svg {
          width: 16px;
          margin-right: 8px;
        }
      }

      .detail-photo-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 6px;
        grid-row-gap: 6px;
        grid-template-rows: repeat(3, 60px);

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          border-radius: 8px;
          object-position: center;
        }
      }

      .view-more {
        display: block;
        color: var(--primary);
        font-weight: 600;
        font-size: 15px;
        margin: 25px 0;
      }
    }
  }
}

.chat-body {
  position: relative;
  width: calc(100% - 320px);
  height: 100%;
  overflow-y: auto;
  list-style: none;
  margin: 0;
  padding: 0 30px 80px 30px;
  transition: all 0.3s;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.2);
  }

  .divider-container {
    width: 100%;
    max-width: 100%;

    .divider {
      margin: 1.5em auto 1.5em auto;

      span {
        color: var(--placeholder);
        font-weight: 400;
        text-transform: uppercase;
        font-size: 0.8rem;

        &::before,
        &::after {
          top: 0.9em;
          width: 43%;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }
      }
    }
  }

  li {
    padding: 0.5rem;
    overflow: hidden;
    display: flex;
  }

  .avatar {
    width: 40px;
    height: 40px;
    position: relative;
    display: block;
    z-index: 2;
    border-radius: var(--radius-rounded);
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    background-color: rgba(255, 255, 255, 0.9);

    img {
      width: 40px;
      height: 40px;
      border-radius: var(--radius-rounded);
      background-color: rgba(255, 255, 255, 0.9);
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  }

  .day {
    position: relative;
    display: block;
    text-align: center;
    color: #c0c0c0;
    height: 20px;
    text-shadow: 7px 0 0 var(--lighter-grey), 6px 0 0 var(--lighter-grey),
      5px 0 0 var(--lighter-grey), 4px 0 0 var(--lighter-grey),
      3px 0 0 var(--lighter-grey), 2px 0 0 var(--lighter-grey),
      1px 0 0 var(--lighter-grey), 1px 0 0 var(--lighter-grey),
      0 0 0 var(--lighter-grey), -1px 0 0 var(--lighter-grey),
      -2px 0 0 var(--lighter-grey), -3px 0 0 var(--lighter-grey),
      -4px 0 0 var(--lighter-grey), -5px 0 0 var(--lighter-grey),
      -6px 0 0 var(--lighter-grey), -7px 0 0 var(--lighter-grey);
    box-shadow: inset 20px 0 0 var(--lighter-grey),
      inset -20px 0 0 var(--lighter-grey), inset 0 -2px 0 #d7d7d7;
    line-height: 38px;
    margin-top: 5px;
    margin-bottom: 20px;
    cursor: default;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .other,
  .self {
    &.is-consecutive {
      .avatar {
        visibility: hidden !important;
      }

      .msg {
        border-radius: var(--radius-large);

        &::after {
          display: none;
        }
      }
    }
  }

  .other + .other,
  .self + .self {
    .avatar {
      visibility: hidden !important;
    }
  }

  .other.is-multi + .other.is-multi {
    .avatar {
      visibility: visible !important;
    }
  }

  .other {
    .msg {
      order: 1;
      min-width: 230px;
      max-width: 40%;
      margin-left: 20px;

      p {
        font-size: 0.9rem;
        color: var(--light-text);
      }

      .msg-inner {
        background: var(--white);
        color: var(--dark-text);
        border-radius: 0 12px 12px 12px;
        padding: 16px;
        position: relative;
      }

      time {
        display: block;
        text-align: right;
        font-size: 0.8rem;
        color: var(--light-text);
        margin-top: 3px;
        cursor: default;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        svg {
          position: relative;
          top: 1px;
          height: 10px;
          width: 10px;
          color: var(--white);
          margin-left: 3px;
        }
      }

      &.is-link-image {
        background: #e6e5ed;
        padding: 0;
      }

      &.is-link {
        background: #e6e5ed;
      }
    }
  }

  .self {
    justify-content: flex-end;
    align-items: stretch;

    .msg {
      order: 1;
      margin-right: 20px;
      min-width: 230px;
      max-width: 40%;
      position: relative;

      .msg-inner {
        background: #e6e5ed;
        color: var(--dark-text);
        border-radius: 12px 0 12px 12px;
        padding: 12px;
      }

      p {
        font-size: 0.9rem;
      }

      time {
        display: block;
        text-align: left;
        font-size: 0.8rem;
        color: var(--light-text);
        margin-top: 3px;
        cursor: default;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        svg {
          position: relative;
          top: 1px;
          height: 10px;
          width: 10px;
          color: var(--dark-text);
          margin-right: 3px;
        }
      }

      &.is-link-image {
        background: #e6e5ed;
        padding: 0;
      }

      &.is-link {
        background: #e6e5ed;
      }
    }

    .avatar {
      order: 2;

      &::before {
        display: none;
      }
    }
  }

  .no-messages {
    display: block;
    width: 50%;
    height: 50%;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    text-align: center;
    transform: translateY(-50%);

    img {
      display: block;
      margin: 0 auto;
      height: 190px;
    }

    .text {
      text-align: center;

      h3 {
        font-size: 1.4rem;
      }

      p {
        color: var(--muted-grey);
      }
    }
  }

  .chat-loader {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 1);
    z-index: 9;
    opacity: 0;
    pointer-events: none;
    transition: all 0.4s;

    &.is-active {
      opacity: 1;
      pointer-events: all;
      z-index: 9 !important;
    }

    .loader {
      position: relative;
      top: -45px;
      height: 6rem;
      width: 6rem;
    }
  }
}

/* ==========================================================================
4. Messages globals and variations
========================================================================== */

.msg {
  min-width: 50px;
  max-width: 40%;

  &.is-image {
    .image-container {
      position: relative;
      border-radius: 3px;

      &:hover {
        .image-overlay {
          opacity: 0.45;
          pointer-events: none;
        }

        .image-actions {
          opacity: 1;

          .download {
            pointer-events: all;
          }
        }
      }

      figure {
        position: relative;
        display: block;
        border-radius: 3px;
        border: 4px solid var(--white);
        z-index: 1;
      }

      .image-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        background: var(--primary);
        border: 4px solid var(--white);
        border-radius: 3px;
        transition: all 0.3s;
        z-index: 2;
      }

      .image-actions {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s;
        z-index: 3;

        .actions-inner {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          .action {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
            width: 40px;
            border-radius: var(--radius-rounded);
            background: var(--white);
            margin: 0 6px;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              background: var(--success);

              svg {
                color: var(--smoke-white);
              }
            }

            svg {
              height: 18px;
              width: 18px;
              color: var(--success);
              transition: all 0.3s;
            }
          }
        }
      }
    }
  }

  &.is-link-image {
    background: #e6e5ed;
    padding: 0;
    max-width: 320px !important;

    .image {
      position: relative;

      img {
        max-width: 320px;
        border-radius: var(--radius-large) 6px 0 0;
      }

      .link-badge {
        height: 40px;
        width: 40px;
        position: absolute;
        right: 15px;
        bottom: 15px;

        img {
          position: relative;
          display: block;
          height: 40px;
          width: 40px;
          border-radius: var(--radius-rounded);
        }
      }
    }

    .link-body {
      padding: 10px 15px;

      .link-title {
        display: block;
        font-weight: 500;
        color: var(--dark-text);
      }

      small {
        display: block;
        width: 100%;
        font-size: 0.75rem;
        color: var(--muted-grey);
        padding-top: 5px;
      }
    }

    &::after {
      display: none;
    }
  }

  &.is-link {
    background: #e6e5ed;
    padding: 10px 20px;
    max-width: 320px;
    display: block;
    position: relative;

    .icon-wrapper {
      position: absolute;
      top: calc(50% - 18px);
      left: -18px;
      width: 36px;
      height: 36px;
      min-width: 36px !important;
      max-height: 36px;
      border-radius: var(--radius-rounded);
      border: 2px solid var(--white);
      background: var(--primary);
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        width: 16px;
        height: 16px;
        color: var(--white);
      }
    }

    .link-meta {
      margin-left: 10px;

      span {
        color: var(--dark-text);
        font-weight: 500;
        font-size: 0.9rem;
      }

      a {
        display: block;
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--primary);
      }
    }

    &::after {
      display: none;
    }
  }

  p {
    font-size: 0.8rem;
    margin: 0 0 0.2rem 0;
  }

  img {
    position: relative;
    display: block;
    width: 450px;
    border-radius: 5px;
    box-shadow: 0 0 3px var(--light-grey);
    transition: all 0.4s cubic-bezier(0.565, -0.26, 0.255, 1.41);
    cursor: default;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
}

//Message queries
@media screen and (max-width: 800px) {
  .msg img {
    width: 300px;
  }
}

@media screen and (max-width: 550px) {
  .msg img {
    width: 200px;
  }
}

/* ==========================================================================
5. Compose message area
========================================================================== */

.message-field-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: 60px;
  width: calc(100% - 320px);
  padding: 0 16px;
  transition: all 0.3s;
  z-index: 2;

  &.side-collapsed {
    width: 100% !important;
  }

  .control {
    position: relative;
    width: 100%;

    input {
      height: 42px;
      padding-left: 70px;
    }

    .add-content {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 11;

      &:hover {
        > div {
          .button {
            background: var(--fade-grey);

            svg {
              color: var(--primary);
            }
          }
        }
      }

      > div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 42px;
        height: 42px;
      }

      .button {
        width: 28px;
        height: 28px;
        border-radius: var(--radius-rounded);
        border: none;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s;

        svg {
          color: var(--placeholder);
          stroke-width: 2px;
          height: 18px;
          width: 18px;
          transition: all 0.3s;
        }
      }

      .dropdown-content {
        a {
          display: flex;
          align-items: center;

          svg {
            height: 18px;
            width: 18px;
            color: var(--muted-grey);
          }

          .meta {
            margin-left: 12px;

            span {
              display: block;

              &:first-child {
                font-size: 0.9rem;
                font-weight: 500;
                color: var(--dark-text);
              }

              &:nth-child(2) {
                font-size: 0.9rem;
                color: var(--muted-grey);
              }
            }
          }
        }
      }
    }

    .add-emoji {
      position: absolute;
      top: 0;
      left: 34px;
      z-index: 11;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 28px;
      height: 42px;

      &:hover {
        .button {
          background: var(--fade-grey);

          svg {
            color: var(--primary);
          }
        }
      }

      .button {
        width: 28px;
        height: 28px;
        border-radius: var(--radius-rounded);
        border: none;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s;

        svg {
          color: var(--placeholder);
          stroke-width: 2px;
          height: 18px;
          width: 18px;
          transition: all 0.3s;
        }
      }
    }

    .send-message {
      position: absolute;
      top: 3px;
      right: 3px;
      z-index: 11;

      .button {
        height: 36px;
        min-width: 90px;
      }
    }
  }

  .typing-indicator {
    position: absolute;
    bottom: 50px;
    left: 10px;
    width: 100px;
    height: 100px;
    z-index: 2;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.3s;

    &.is-active {
      opacity: 1;
      transform: translateY(25px);
    }

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
}

/* ==========================================================================
6. Chat body placeholder
========================================================================== */

.is-chat-placeholder {
  position: absolute;
  bottom: 10px;
  height: calc(100% - 80px);
  width: calc(100% - 80px);

  .caption {
    display: block;
    width: 50%;
    height: 50%;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    transform: translateY(-70%);

    img {
      display: block;
      margin: 0 auto;
      max-width: 250px;
    }

    .text {
      text-align: center;
      margin-top: 20px;

      h3 {
        font-size: 1.4rem;
        font-weight: 500;
        color: var(--dark-text);
      }

      p {
        color: var(--muted-grey);
        margin-bottom: 10px;
      }
    }
  }
}

/* ==========================================================================
7. Chat Dark mode
========================================================================== */

.is-dark {
  .chat-side-fab {
    background: var(--dark-sidebar-light-2) !important;
    border-color: var(--dark-sidebar-light-12) !important;
  }

  .is-chat-placeholder {
    background: var(--dark-sidebar-light-5) !important;
    border-color: var(--dark-sidebar-light-5) !important;

    h3 {
      color: var(--primary-grey-dark-15) !important;
    }
  }

  .is-chat {
    border: none !important;
    background: var(--dark-sidebar-light-3) !important;

    .chat-loader {
      background: var(--dark-sidebar-light-2);
    }

    .chat-header {
      //background: var(--dark-sidebar-light-2);
      //border-color: var(--dark-sidebar-light-2);

      .is-badge {
        border-color: var(--dark-sidebar) !important;
      }

      .recipient-meta {
        span {
          &:first-child {
            color: var(--primary-grey-light-6) !important;
          }
        }
      }

      .chat-options {
        #hide-conversation:hover,
        #hide-chat-side:hover {
          color: var(--primary) !important;
        }
      }

      .is-autocomplete {
        &.is-active,
        &:hover,
        &.is-active:hover {
          background: transparent !important;
        }

        #users-autocpl {
          background: none;
          border-color: none;
          color: var(--primary-grey-dark-4);

          &::-webkit-input-placeholder {
            color: var(--primary-grey-dark-30) !important;
          }

          &::-moz-placeholder {
            color: var(--primary-grey-dark-30) !important;
          }

          &:-ms-input-placeholder {
            color: var(--primary-grey-dark-30) !important;
          }

          &:-moz-placeholder {
            color: var(--primary-grey-dark-30) !important;
          }
        }

        svg {
          color: var(--primary-grey-dark-30) !important;
        }

        .icon span {
          color: var(--smoke-white) !important;
        }

        .easy-autocomplete-container {
          background: var(--dark-sidebar);

          ul {
            background: none repeat scroll 0 0 var(--dark-sidebar);
            border-top: none;

            li {
              border-color: var(--dark-sidebar) !important;

              &.selected {
                background: var(--dark-sidebar-light-2);
              }

              .entry-text {
                color: var(--primary-grey-dark-10);

                span {
                  color: var(--primary-grey-dark-40) !important;
                }
              }
            }
          }
        }
      }
    }

    .chat-side {
      background: var(--dark-sidebar-light-4);
      border-color: var(--dark-sidebar-light-2);

      .user-name {
        color: var(--primary-grey);
      }

      .chat-side-content {
        .is-badge {
          border-color: var(--dark-sidebar-light-4);
        }

        .detail-photos {
          .view-more {
            color: var(--primary);
          }
        }
      }
    }

    .chat-body {
      background: var(--dark-sidebar-light-7);

      .divider span {
        color: var(--dark-sidebar-light-22) !important;

        &::before,
        &::after {
          border-color: var(--dark-sidebar-light-15) !important;
        }
      }

      li {
        &.other {
          .msg {
            .msg-inner {
              color: var(--smoke-white);
              background: var(--primary);

              p {
                color: var(--smoke-white);
              }
            }
          }
        }

        &.self {
          .msg {
            .msg-inner {
              background: var(--dark-sidebar-light-15) !important;
              color: var(--primary-grey-dark-10) !important;
            }

            time {
              color: var(--primary-grey-dark-10) !important;

              svg {
                color: var(--primary-grey-dark-10) !important;
              }
            }
          }
        }
      }

      .msg {
        &.is-link-image {
          border-radius: 10px;

          .link-body {
            background: var(--dark-sidebar-light-5);
            border-radius: 0 0 6px 6px;

            .link-title,
            small {
              color: var(--smoke-white) !important;
            }
          }
        }

        &.is-link {
          background: var(--dark-sidebar-light-3);
          border-radius: var(--radius-large);

          .icon-wrapper {
            border-color: var(--dark-sidebar-light-5);
            background: var(--primary);
          }

          .link-meta {
            span {
              color: var(--smoke-white) !important;
            }

            a {
              color: var(--primary) !important;
            }
          }
        }

        &.is-image {
          .image-container {
            .image-overlay {
              background: var(--primary);
            }
          }
        }
      }
    }

    .message-field-wrapper {
      .add-content {
        .button {
          background: var(--primary);
          border-color: var(--primary);
        }

        .dropdown-item {
          .meta {
            span:first-child {
              color: var(--smoke-white) !important;
            }
          }
        }
      }

      .add-emoji {
        left: 38px;
      }
    }

    #chat-input {
      background: var(--dark-sidebar-light-2) !important;
      color: var(--primary-grey-dark-10) !important;

      &::-webkit-input-placeholder {
        color: var(--primary-grey-dark-15) !important;
      }

      &::-moz-placeholder {
        color: var(--primary-grey-dark-15) !important;
      }

      &:-ms-input-placeholder {
        color: var(--primary-grey-dark-15) !important;
      }

      &:-moz-placeholder {
        color: var(--primary-grey-dark-15) !important;
      }
    }
  }

  .collapsed-messaging {
    background: var(--dark-sidebar-light-5);
    border-color: var(--dark-sidebar-light-5) !important;

    .collapsed-conversations {
      li {
        &.is-active {
          background: var(--dark-sidebar-light-2);
          border-color: var(--primary) !important;
        }

        .user-container {
          .is-badge,
          .is-count {
            border-color: var(--dark-sidebar-light-5) !important;
          }
        }
      }
    }
  }
}

/* ==========================================================================
8. Media Queries
========================================================================== */

@media (max-width: 767px) {
  .chat-side-fab {
    top: 75px;
    right: 16px;
    transform: translateX(0) rotate(0);

    &.is-active {
      transform: translateX(0) rotate(0);
    }

    &.is-mobile-active {
      transform: translateX(60px) rotate(360deg) !important;
    }
  }

  .chat-content {
    padding: 0 5px !important;

    .is-chat {
      position: absolute;
      top: 0 !important;
      left: 0;
      max-height: calc(100% - 60px) !important;

      .chat-side {
        position: fixed;
        top: 0;
        right: 0;
        height: 100%;
        width: 100%;
        transform: translateX(100%);
        transition: all 0.3s;
        z-index: 20;

        &.is-mobile-active {
          transform: translateX(0);
        }
      }

      .chat-header {
        border-radius: 16px 16px 0 0 !important;
      }

      .chat-body {
        width: 100% !important;
        padding: 0 10px 40px 10px;

        .avatar,
        .avatar img {
          height: 36px !important;
          width: 36px !important;
          min-height: 36px !important;
          min-width: 36px !important;
        }

        .msg {
          max-width: 230px;

          &.is-link-image {
            .image img {
              width: 100%;
            }
          }
        }
      }

      .message-field-wrapper {
        width: 100% !important;
      }
    }
  }

  .collapsed-messaging {
    display: none;
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  .chat-side-fab {
    top: 75px;
    right: 16px;
    transform: translateX(0) rotate(0);

    &.is-active {
      transform: translateX(0) rotate(0);
    }

    &.is-mobile-active {
      transform: translateX(60px) rotate(360deg) !important;
    }
  }

  .chat-content {
    padding: 0 5px !important;

    .is-chat {
      position: absolute;
      top: 0 !important;
      left: 0;
      max-height: calc(100% - 60px) !important;

      .chat-side {
        position: fixed;
        top: 0;
        right: 0;
        height: 100%;
        width: 340px;
        transform: translateX(100%);
        transition: all 0.3s;
        z-index: 20;

        &.is-mobile-active {
          transform: translateX(0);
        }
      }

      .chat-header {
        border-radius: 16px 16px 0 0 !important;
      }

      .chat-body {
        width: 100% !important;
        padding: 0 10px 40px 10px;

        .avatar,
        .avatar img {
          height: 36px !important;
          width: 36px !important;
          min-height: 36px !important;
          min-width: 36px !important;
        }

        .msg {
          max-width: 230px;

          &.is-link-image {
            .image img {
              width: 100%;
            }
          }
        }
      }

      .message-field-wrapper {
        width: 100% !important;
      }
    }
  }

  .collapsed-messaging {
    display: none;
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  .collapsed-messaging {
    &.is-active {
      left: 60px !important;
      border-left: 1px var(--fade-grey-dark-3);
    }
  }
}
</style>
