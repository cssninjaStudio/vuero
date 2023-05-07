<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useDarkmode } from '/@src/stores/darkmode'
import { useDropdown } from '/@src/composable/useDropdown'
import { onceImageErrored } from '/@src/utils/via-placeholder'

const darkmode = useDarkmode()
const contactSearchOpen = ref(false)
const activeTab = ref('inbox')
const selectedConversationId = ref(1)
const selectedConversationList = ref<number[]>([])
const mobileMessageOpen = ref(true)
const mobileSidebarOpen = ref(false)

const isAllChecked = computed(() => {
  return selectedConversationList.value.length === 10
})

const toggleSelection = () => {
  if (isAllChecked.value) {
    selectedConversationList.value.splice(0, selectedConversationList.value.length)
  } else {
    selectedConversationList.value.splice(0, selectedConversationList.value.length)
    selectedConversationList.value.push(...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  }
}

const dropdownElement1 = ref<HTMLElement>()
const dropdown1 = useDropdown(dropdownElement1)

const dropdownElement2 = ref<HTMLElement>()
const dropdown2 = useDropdown(dropdownElement2)

watch(selectedConversationId, () => {
  mobileMessageOpen.value = true
})

useHead({
  title: 'Apps 2 - Sidebar - Vuero',
})
</script>

<template>
  <MinimalLayout>
    <div class="inbox-wrapper">
      <div class="wrapper-inner">
        <!--Inbox sidebar-->
        <div class="inbox-sidebar" :class="[mobileSidebarOpen && 'mobile-active']">
          <!-- Header -->
          <div class="header-area">
            <div class="inbox-title">
              <RouterLink to="/" class="inbox-brand">
                <AnimatedLogo width="36px" height="36px" />
              </RouterLink>
              <span>Inbox</span>

              <label class="dark-mode">
                <input
                  data-cy="dark-mode-toggle"
                  type="checkbox"
                  :checked="!darkmode.isDark"
                  @change="darkmode.onChange"
                />
                <span></span>
              </label>
            </div>
            <div
              ref="dropdownElement1"
              class="dropdown inbox-dropdown dropdown-trigger is-right"
            >
              <div>
                <button class="button" @click="dropdown1.toggle">
                  <span class="icon is-small">
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:more-vertical"
                    ></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu">
                <div class="dropdown-content">
                  <a class="dropdown-item">
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:refresh-cw"
                    ></i>
                    <span>Refresh</span>
                  </a>
                  <a class="dropdown-item">
                    <i aria-hidden="true" class="iconify" data-icon="feather:bell"></i>
                    <span>Notifications</span>
                  </a>
                  <a class="dropdown-item">
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:user-plus"
                    ></i>
                    <span>Invite People</span>
                  </a>
                  <a class="dropdown-item">
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:settings"
                    ></i>
                    <span>Settings</span>
                  </a>
                </div>
              </div>
            </div>
            <a
              class="inbox-action inbox-close-sidebar-mobile"
              aria-label="Close"
              role="button"
              tabindex="0"
              @keydown.space.prevent="mobileSidebarOpen = false"
              @click="mobileSidebarOpen = false"
            >
              <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
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
                    <a
                      :class="[activeTab === 'inbox' && 'is-active']"
                      tabindex="0"
                      role="button"
                      @keydown.space.prevent="activeTab = 'inbox'"
                      @click="activeTab = 'inbox'"
                    >
                      <i aria-hidden="true" class="iconify" data-icon="feather:mail"></i>
                      <span>Inbox</span>
                      <span class="tag">24</span>
                    </a>
                  </li>
                  <li>
                    <a
                      :class="[activeTab === 'drafts' && 'is-active']"
                      tabindex="0"
                      role="button"
                      @keydown.space.prevent="activeTab = 'drafts'"
                      @click="activeTab = 'drafts'"
                    >
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:file-text"
                      ></i>
                      <span>Drafts</span>
                      <span class="tag">2</span>
                    </a>
                  </li>
                  <li>
                    <a
                      :class="[activeTab === 'sent' && 'is-active']"
                      tabindex="0"
                      role="button"
                      @keydown.space.prevent="activeTab = 'sent'"
                      @click="activeTab = 'sent'"
                    >
                      <i aria-hidden="true" class="iconify" data-icon="feather:send"></i>
                      <span>Sent</span>
                      <span class="tag">7</span>
                    </a>
                  </li>
                  <li>
                    <a
                      :class="[activeTab === 'trash' && 'is-active']"
                      tabindex="0"
                      role="button"
                      @keydown.space.prevent="activeTab = 'trash'"
                      @click="activeTab = 'trash'"
                    >
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:trash-2"
                      ></i>
                      <span>Trash</span>
                      <span class="tag">18</span>
                    </a>
                  </li>
                  <li>
                    <a
                      :class="[activeTab === 'span' && 'is-active']"
                      tabindex="0"
                      role="button"
                      @keydown.space.prevent="activeTab = 'span'"
                      @click="activeTab = 'span'"
                    >
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:alert-octagon"
                      ></i>
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
                <h3 :class="[contactSearchOpen && 'is-hidden']">Contacts</h3>
                <div
                  :class="[!contactSearchOpen && 'is-hidden']"
                  class="control has-icon"
                >
                  <input type="text" class="input" placeholder="Search Contacts..." />
                  <div class="form-icon">
                    <i aria-hidden="true" class="iconify" data-icon="feather:search"></i>
                  </div>
                </div>
                <a
                  :class="[contactSearchOpen && 'is-hidden']"
                  class="button searcv-button"
                  aria-label="Search"
                >
                  <span
                    class="icon is-small"
                    tabindex="0"
                    role="button"
                    @keydown.space.prevent="contactSearchOpen = true"
                    @click="contactSearchOpen = true"
                  >
                    <i aria-hidden="true" class="iconify" data-icon="feather:search"></i>
                  </span>
                </a>
                <a
                  :class="[!contactSearchOpen && 'is-hidden']"
                  class="button cancel-searcv-button"
                  aria-label="Close"
                >
                  <span
                    class="icon is-small"
                    tabindex="0"
                    role="button"
                    @keydown.space.prevent="contactSearchOpen = true"
                    @click="contactSearchOpen = false"
                  >
                    <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
                  </span>
                </a>
              </div>
              <div class="contact-list has-slimscroll">
                <!--Contact-->
                <div class="contact-block">
                  <img
                    src="/demo/avatars/7.jpg"
                    alt=""
                    @error.once="onceImageErrored(150)"
                  />
                  <div class="contact-meta">
                    <span>Alice Carasca</span>
                    <span>alice@vuero.io</span>
                  </div>
                </div>
                <!--Contact-->
                <div class="contact-block">
                  <img
                    src="/demo/avatars/25.jpg"
                    alt=""
                    @error.once="onceImageErrored(150)"
                  />
                  <div class="contact-meta">
                    <span>Melany Wallace</span>
                    <span>melany@vuero.io</span>
                  </div>
                </div>
                <!--Contact-->
                <div class="contact-block">
                  <img
                    src="/demo/avatars/18.jpg"
                    alt=""
                    @error.once="onceImageErrored(150)"
                  />
                  <div class="contact-meta">
                    <span>Esteban Castellanos</span>
                    <span>esteban@vuero.io</span>
                  </div>
                </div>
                <!--Contact-->
                <div class="contact-block">
                  <img
                    src="/demo/avatars/32.jpg"
                    alt=""
                    @error.once="onceImageErrored(150)"
                  />
                  <div class="contact-meta">
                    <span>Jonathan Krugger</span>
                    <span>jonathan@vuero.io</span>
                  </div>
                </div>
                <!--Contact-->
                <div class="contact-block">
                  <img
                    src="/demo/avatars/38.jpg"
                    alt=""
                    @error.once="onceImageErrored(150)"
                  />
                  <div class="contact-meta">
                    <span>Christie Dallas</span>
                    <span>christie@vuero.io</span>
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
              <a
                class="inbox-action mobile-menu-action"
                aria-label="Open messages list"
                tabindex="0"
                role="button"
                @keydown.space.prevent="mobileSidebarOpen = true"
                @click="mobileSidebarOpen = true"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:chevron-right"
                ></i>
              </a>
              <a
                class="inbox-action check-all-action"
                :class="[isAllChecked && 'is-checked']"
                aria-label="Toggle selection"
                tabindex="0"
                role="button"
                @keydown.space.prevent="toggleSelection"
                @click="toggleSelection"
              >
                <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
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
                  <i aria-hidden="true" class="iconify" data-icon="feather:search"></i>
                </div>
              </div>

              <div
                ref="dropdownElement2"
                class="dropdown inbox-dropdown dropdown-trigger is-right"
              >
                <div>
                  <button class="button" @click="dropdown2.toggle">
                    <span class="icon is-small">
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:more-vertical"
                      ></i>
                    </span>
                  </button>
                </div>
                <div class="dropdown-menu">
                  <div class="dropdown-content">
                    <a class="dropdown-item">
                      <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
                      <span>Mark all as read</span>
                    </a>
                    <a class="dropdown-item">
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:eye-off"
                      ></i>
                      <span>Hide read</span>
                    </a>
                    <hr class="dropdown-divider" />
                    <a class="dropdown-item">
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:calendar"
                      ></i>
                      <span>Sort by date</span>
                    </a>
                    <a class="dropdown-item">
                      <i aria-hidden="true" class="iconify" data-icon="feather:user"></i>
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
            <InboxMessagesList
              v-model:conversationId="selectedConversationId"
              v-model:selectedConversationList="selectedConversationList"
            />
          </div>
        </div>

        <!--Loader-->
        <div class="inbox-message-overlay">
          <div class="loader is-loading"></div>
        </div>

        <!--Message details 1-->
        <Message1
          v-model:mobile-message-open="mobileMessageOpen"
          :selected="selectedConversationId === 1"
        />

        <!--Message details 2-->
        <Message2
          v-model:mobile-message-open="mobileMessageOpen"
          :selected="selectedConversationId === 2"
        />

        <!--Message details 3-->
        <Message3
          v-model:mobile-message-open="mobileMessageOpen"
          :selected="selectedConversationId === 3"
        />

        <!--Message details 4-->
        <Message4
          v-model:mobile-message-open="mobileMessageOpen"
          :selected="selectedConversationId === 4"
        />

        <!--Message details 5-->
        <Message5
          v-model:mobile-message-open="mobileMessageOpen"
          :selected="selectedConversationId === 5"
        />

        <!--Message details 6-->
        <Message6
          v-model:mobile-message-open="mobileMessageOpen"
          :selected="selectedConversationId === 6"
        />

        <!--Message details 7-->
        <Message7
          v-model:mobile-message-open="mobileMessageOpen"
          :selected="selectedConversationId === 7"
        />

        <!--Message details 8-->
        <Message8
          v-model:mobile-message-open="mobileMessageOpen"
          :selected="selectedConversationId === 8"
        />

        <!--Message details 9-->
        <Message9
          v-model:mobile-message-open="mobileMessageOpen"
          :selected="selectedConversationId === 9"
        />

        <!--Message details 10-->
        <Message10
          v-model:mobile-message-open="mobileMessageOpen"
          :selected="selectedConversationId === 10"
        />
      </div>
    </div>
  </MinimalLayout>
</template>

<style lang="scss">
.inbox-wrapper {
  position: absolute;
  top: 0;
  inset-inline-start: 0;
  height: 100%;
  width: 100%;

  .wrapper-inner {
    position: relative;
    height: 100%;
    width: 100%;

    .inbox-sidebar {
      position: absolute;
      top: 0;
      inset-inline-start: 0;
      height: 100%;
      width: 20%;
      background: var(--white);
      border-inline-end: 1px solid var(--fade-grey-dark-3);

      .header-area {
        height: 80px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--fade-grey-dark-3);
        padding: 0 20px;

        .inbox-title {
          display: flex;
          align-items: center;
          font-family: var(--font-alt);
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--dark-text);
          width: 100%;
          max-width: 100%;

          .inbox-brand {
            margin-inline-end: 16px;

            img {
              height: 40px;
              width: 40px;
              min-width: 40px;
            }
          }

          label {
            display: block;
            margin-inline-start: auto;
            transform: scale(0.65);
          }
        }

        .inbox-close-sidebar-mobile {
          display: none;
        }
      }

      .sidebar-inner {
        position: relative;
        width: 100%;
        height: calc(100% - 80px);

        .inner-menu {
          position: absolute;
          top: 0;
          inset-inline-start: 0;
          padding: 20px;
          width: 100%;

          .compose-button {
            height: 40px;
            line-height: 1.8;
            background: var(--primary);
            border-color: var(--primary);
            color: var(--smoke-white);
            font-weight: 500;
            font-family: var(--font);

            &:hover,
            &:focus {
              opacity: 0.8;
              box-shadow: var(--primary-box-shadow);
            }
          }

          .inbox-menu {
            padding: 20px 0;

            ul {
              li {
                a {
                  font-family: var(--font);
                  display: flex;
                  align-items: center;
                  padding: 8px 12px;
                  border-radius: 100px;

                  &.is-active {
                    background: var(--fade-grey-light-3);

                    span,
                    i {
                      color: var(--dark-text);
                      font-weight: 500;
                    }

                    svg {
                      color: var(--primary);
                    }

                    .tag {
                      display: inline;
                    }
                  }

                  i {
                    color: var(--muted-grey);
                  }

                  svg {
                    height: 16px;
                    width: 16px;
                    color: var(--light-text);
                  }

                  span {
                    display: block;
                    padding: 0 20px;
                    color: var(--muted-grey);
                  }

                  .tag {
                    display: none;
                    margin-inline-start: auto;
                    margin-bottom: 0;
                    font-size: 0.85rem;
                    height: 22px;
                    background: var(--secondary);
                    padding: 0 12px;
                    line-height: 1.8;
                    color: var(--smoke-white) !important;
                    border-radius: 100px;
                  }
                }
              }
            }
          }
        }

        .scroll-menu {
          position: absolute;
          bottom: 0;
          inset-inline-start: 0;
          height: calc(100% - 304px);
          width: 100%;
          border-top: 1px solid var(--fade-grey);
          overflow-y: auto;

          .title-wrap {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 60px;
            padding: 0 20px;

            h3 {
              font-family: var(--font-alt);
              font-weight: 600;
              color: var(--dark-text);
            }

            .control {
              position: relative;
              flex-grow: 2;

              input {
                height: 32px;
                padding-inline-start: 32px;
              }

              .form-icon {
                position: absolute;
                top: 0;
                inset-inline-start: 0;
                height: 32px;
                width: 32px;
                display: flex;
                justify-content: center;
                align-items: center;

                i {
                  color: var(--placeholder);
                  transition: color 0.3s;
                }
              }
            }

            .button {
              height: 36px;
              width: 36px;
              border: none;
              display: flex;
              justify-content: center;
              align-items: center;

              &:hover,
              &:focus {
                i {
                  color: var(--dark-text);
                }
              }

              i {
                color: var(--placeholder);
                transition: color 0.3s;

                &.material-icons {
                  font-size: 16px;
                }
              }
            }
          }

          .contact-list {
            position: relative;
            top: 0;
            width: 100%;
            height: calc(100% - 60px);
            overflow-y: auto;
            padding: 20px;

            .contact-block {
              display: flex;
              align-items: center;
              padding: 6px 8px;
              border-radius: 100px;
              margin-bottom: 6px;
              transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                height 0.3s, width 0.3s;
              cursor: pointer;

              &:hover,
              &:focus {
                background: var(--fade-grey-light-3);
              }

              img {
                display: block;
                height: 32px;
                width: 32px;
                min-width: 32px;
                border-radius: var(--radius-rounded);
              }

              .contact-meta {
                margin-inline-start: 12px;

                span {
                  display: block;
                  font-size: 0.9rem;

                  &:first-child {
                    font-family: var(--font-alt);
                    font-weight: 600;
                    color: var(--dark-text);
                  }

                  &:nth-child(2) {
                    font-family: var(--font);
                    color: var(--muted-grey);
                  }
                }
              }
            }
          }
        }
      }
    }

    .inbox-messages {
      position: absolute;
      top: 0;
      inset-inline-start: 20%;
      height: 100%;
      width: 32%;
      background: var(--white);
      border-inline-end: 1px solid var(--fade-grey-dark-3);

      .header-area {
        height: 80px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--fade-grey-dark-3);
        padding: 0 20px;

        .actions {
          display: flex;
          align-items: center;

          .inbox-search {
            position: relative;
            margin-inline-end: 6px;

            input {
              height: 38px;
              min-width: 220px;
              padding-inline-start: 42px;

              &:focus + .form-icon i {
                color: var(--dark-text);
              }
            }

            .form-icon {
              position: absolute;
              top: 1px;
              inset-inline-start: 4px;
              height: 38px;
              width: 38px;
              display: flex;
              justify-content: center;
              align-items: center;

              i {
                color: var(--placeholder);
                transition: color 0.3s;
              }
            }
          }

          .mobile-menu-action {
            display: none;
          }
        }
      }

      .messages-list {
        position: relative;
        height: calc(100% - 80px);
        width: 100%;
        overflow-y: auto;

        .inbox-message {
          display: flex;
          align-items: stretch;
          border-bottom: 1px solid var(--fade-grey-dark-3);
          padding: 20px;
          cursor: pointer;

          &:focus-visible {
            outline-offset: var(--accessibility-focus-outline-offset);
            outline-width: var(--accessibility-focus-outline-width);
            outline-style: var(--accessibility-focus-outline-style);
            outline-color: var(--accessibility-focus-outline-color);
          }

          &.is-selected {
            background: var(--fade-grey-light-4);
          }

          &.is-unread {
            b {
              font-weight: 600;
            }
          }

          b {
            font-weight: 400;
          }

          .message-meta {
            margin-inline-start: 16px;

            span {
              display: block;

              &.name {
                font-family: var(--font-alt);
                font-weight: 500;
                color: var(--dark-text);
              }

              &.email {
                font-family: var(--font);
                font-size: 0.9rem;
                color: var(--light-text);
              }

              &.subject {
                font-family: var(--font);
                font-size: 0.95rem;
                white-space: nowrap;
                overflow: hidden;
                max-width: 280px;
                text-overflow: ellipsis;
              }
            }
          }

          .pushed {
            margin-inline-start: auto;
            color: var(--muted-grey);
            font-size: 0.9rem;
          }
        }
      }
    }

    .inbox-message-overlay {
      position: absolute;
      top: 0;
      inset-inline-start: 52%;
      height: 100%;
      width: 48%;
      z-index: -1;
      opacity: 0;
      background: var(--white);
      transition: opacity 0.4s;
      display: flex;
      justify-content: center;
      align-items: center;

      &.is-active {
        opacity: 1;
        z-index: 1;
      }

      .loader {
        position: relative;
        height: 60px;
        width: 60px;
      }
    }

    .inbox-message-details {
      position: absolute;
      top: 0;
      inset-inline-start: 52%;
      height: 100%;
      width: 48%;
      transition: all 0.3s; // transition-all test

      .header-area {
        height: 80px;
        width: 100%;
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--fade-grey-dark-3);
        padding: 0 20px;
        background: var(--white);

        .sender-pic {
          display: block;
          height: 44px;
          width: 44px;
          min-width: 44px;
          border-radius: var(--radius-rounded);
        }

        .message-meta {
          margin-inline-start: 12px;
          line-height: 1.3;

          span {
            display: block;
          }

          .message-title {
            font-family: var(--font-alt);
            font-weight: 600;
            font-size: 1.2rem;
            color: var(--dark-text);
          }

          .sender-email {
            font-family: var(--font);
            color: var(--light-text);
            font-size: 0.95rem;
          }
        }

        .attachments {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-inline-start: auto;
          margin-inline-end: 12px;
          font-size: 1.2rem;

          i {
            color: var(--light-text);
          }

          svg {
            color: var(--light-text);
            height: 16px;
            width: 16px;
          }

          span {
            font-family: var(--font);
            font-weight: 600;
            display: block;
            margin-inline-start: 4px;
          }
        }

        .inbox-close-details-mobile {
          display: none;
        }
      }

      .message-wrapper {
        position: relative;
        height: calc(100% - 80px);
        width: 100%;
        overflow-y: auto;
        background: #f4f6fb;

        .message-inner {
          padding: 20px;
          background: var(--white);
          border-bottom: 1px solid var(--fade-grey);

          .message-head {
            display: flex;
            align-items: center;
            padding-bottom: 16px;
            border-bottom: 1px solid var(--fade-grey);

            .info {
              span {
                display: block;

                &:first-child {
                  font-family: var(--font-alt);
                  font-size: 0.95rem;
                  font-weight: 600;
                  color: var(--dark-text);
                }

                &:nth-child(2) {
                  font-family: var(--font);
                  font-size: 0.9rem;
                  color: var(--light-text);
                }
              }
            }

            .message-actions {
              margin-inline-start: auto;
              display: flex;
              align-items: center;
            }
          }

          .mail-content {
            padding: 40px 60px 30px;
            /* stylelint-disable-next-line font-family-name-quotes */
            font-family: 'Roboto', sans-serif;
          }
        }

        .attachments-list {
          padding: 0 60px 30px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;

          .attachment {
            display: flex;
            align-items: center;
            padding: 6px 6px 6px 16px;
            margin: 0 6px 6px;
            border: 1px solid var(--fade-grey);
            background: var(--white);
            border-radius: 100px;
            cursor: pointer;
            transition: all 0.3s; // transition-all test

            &:hover {
              border-color: var(--secondary);
              box-shadow: var(--light-box-shadow);

              .download-icon {
                transform: rotate(calc(var(--transform-direction) * 360deg));
                background: var(--secondary);
                border-color: var(--secondary);
                box-shadow: var(--secondary-box-shadow);

                i {
                  color: var(--white);
                }

                svg {
                  color: var(--white);
                }
              }
            }

            span {
              display: block;
              margin-inline-end: 8px;
              font-size: 0.95rem;
              font-weight: 500;
              color: var(--dark-text);
              transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                height 0.3s, width 0.3s;
            }

            .download-icon {
              height: 24px;
              width: 24px;
              border: 1px solid var(--fade-grey);
              border-radius: var(--radius-rounded);
              display: flex;
              justify-content: center;
              align-items: center;
              transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                height 0.3s, width 0.3s;

              i {
                font-size: 12px;
                transition: color 0.3s;
              }

              svg {
                height: 16px;
                width: 16px;
              }
            }
          }
        }

        .reply-box-wrap {
          position: relative;
          padding: 40px 30px 30px;

          .reply-bubble {
            position: relative;
            padding: 20px;
            border: 1px solid var(--fade-grey-dark-5);
            border-radius: var(--radius-large);
            background: var(--white);
            width: 100%;

            &::after,
            &::before {
              bottom: 100%;
              inset-inline-start: 6%;
              border: solid transparent;
              content: ' ';
              height: 0;
              width: 0;
              position: absolute;
              pointer-events: none;
            }

            &::after {
              border-color: rgb(255 255 255 / 0%);
              border-bottom-color: var(--white);
              border-width: 16px;
              margin-inline-start: -16px;
            }

            &::before {
              border-color: rgb(237 237 237 / 0%);
              border-bottom-color: #e0e0e0;
              border-width: 17px;
              margin-inline-start: -17px;
            }

            .reply-as {
              display: flex;
              align-items: center;

              img {
                display: block;
                height: 32px;
                width: 32px;
                border-radius: var(--radius-rounded);
              }

              .reply-details {
                margin-inline-start: 12px;

                span {
                  display: block;

                  &:first-child {
                    color: var(--dark-text);
                    font-family: var(--font-alt);
                    font-weight: 600;
                  }

                  &:nth-child(2) {
                    font-family: var(--font);
                    color: var(--light-text);
                  }
                }
              }

              .dropdown {
                margin-inline-start: auto;
              }
            }

            .control {
              position: relative;
              margin-top: 16px;

              .textarea {
                box-shadow: none;
                padding-bottom: 52px;
                border: none;
              }

              .button {
                position: absolute;
                height: 38px;
                bottom: 8px;
                inset-inline-end: 8px;
                background: var(--secondary);
                border-color: var(--secondary);
                color: var(--smoke-white);
                font-weight: 500;

                &:hover,
                &:focus {
                  box-shadow: var(--secondary-box-shadow);
                }
              }
            }
          }
        }
      }
    }
  }
}

/* ==========================================================================
1. Inbox action
========================================================================== */

.inbox-action {
  height: 36px;
  width: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  border-radius: var(--radius-rounded);
  border: 1px solid transparent;
  transition: all 0.3s; // transition-all test

  &:hover {
    border-color: var(--fade-grey-dark-4);
    box-shadow: var(--light-box-shadow);

    svg {
      color: var(--primary);
    }
  }

  &.is-checked {
    border-color: var(--fade-grey-dark-3);
    box-shadow: var(--light-box-shadow);
  }

  svg {
    height: 16px;
    width: 16px;
    stroke-width: 1.6px;
    color: var(--light-text);
  }

  i {
    padding: 0;
    transition: color 0.3s;
  }
}

/* ==========================================================================
2. Dropdown
========================================================================== */

.inbox-dropdown {
  div > .button {
    height: 36px;
    width: 36px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: none !important;
    border-radius: var(--radius-rounded);
    background: transparent;
    border: 1px solid transparent;

    &:hover,
    &:focus {
      border-color: var(--fade-grey-dark-4);
      box-shadow: var(--light-box-shadow) !important;
    }

    i {
      padding: 0;
    }

    svg {
      height: 16px;
      width: 16px;
      color: var(--light-text);
    }
  }

  .dropdown-menu {
    width: 180px;

    .dropdown-item {
      display: flex;
      align-items: center;
      font-size: 1rem;
      font-family: var(--font);
      margin-bottom: 4px;
      padding-top: 8px;
      padding-bottom: 8px;

      i {
        color: var(--light-text);
      }

      svg {
        height: 16px;
        width: 16px;
        color: var(--light-text);
      }

      span {
        margin-inline-start: 12px;
      }
    }
  }
}

/* ==========================================================================
3. Compose Panel
========================================================================== */

.compose-panel {
  position: fixed;
  top: 65px;
  inset-inline-end: 0;
  height: calc(100% - 65px);
  width: calc(48% - 40px);
  background: var(--white);
  border-inline-start: 1px solid var(--fade-grey);
  z-index: 10;
  transform: translateX(calc(var(--transform-direction) * 100%));
  transition: all 0.3s; // transition-all test

  &.is-active {
    transform: translateX(calc(var(--transform-direction) * 0));
  }

  .header-area {
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--fade-grey-dark-3);
    padding: 0 20px;

    .panel-title {
      font-family: var(--font);
      font-size: 1.4rem;
      color: var(--dark-text);
    }

    .dropdown {
      margin-inline-start: 6px;
    }

    .inbox-action {
      margin-inline-start: auto;
    }
  }

  .panel-inner {
    position: relative;
    height: calc(100% - 80px);
    width: 100%;
    overflow-y: auto;
    padding: 60px;

    .field-wrap {
      width: 100%;
      margin-bottom: 20px;

      .field {
        position: relative;
        display: flex;
        align-items: center;

        label {
          display: block;
          font-weight: 600;
          font-size: 1.1rem;
          text-align: inset-inline-end;
          color: var(--dark-text);
          margin-inline-end: 20px;
          min-width: 60px;
        }

        .control {
          position: relative;
          width: 100%;

          .compose-input {
            height: 38px;
            font-size: 1.1rem;
          }

          .textarea {
            font-size: 1.1rem;
            box-shadow: none !important;
            padding-bottom: 54px;
          }

          .send-button {
            position: absolute;
            height: 38px;
            bottom: 8px;
            inset-inline-end: 8px;
            background: var(--secondary);
            border-color: var(--secondary);
            color: var(--smoke-white);
            font-weight: 500;

            &:hover,
            &:focus {
              box-shadow: var(--secondary-box-shadow);
            }
          }

          .attacv-button {
            position: absolute;
            height: 38px;
            width: 38px;
            bottom: 8px;
            inset-inline-start: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: var(--white);
            border: 1px solid var(--fade-grey-dark-3);
            border-radius: var(--radius-rounded);
            transition: all 0.3s; // transition-all test

            &:hover {
              box-shadow: var(--light-box-shadow);
              border-color: var(--dark-text);
            }

            i {
              font-size: 16px;
              color: var(--dark-text);
            }
          }
        }
      }
    }
  }
}

/* ==========================================================================
Dark mode
========================================================================== */

.is-dark {
  .inbox-wrapper {
    .wrapper-inner {
      .inbox-sidebar {
        border-inline-end: none;

        .header-area {
          background: var(--dark-sidebar);
          border-color: var(--dark-sidebar-light-12);

          .inbox-title {
            color: var(--dark-dark-text);
          }
        }

        .sidebar-inner {
          background: var(--dark-sidebar-light-4);
          border-color: var(--dark-sidebar-light-12);

          .inner-menu {
            border-color: var(--dark-sidebar-light-12);

            .compose-button {
              background: var(--primary) !important;
              border-color: var(--primary) !important;
              color: var(--smoke-white) !important;

              &:hover,
              &:focus {
                box-shadow: var(--primary-box-shadow);
              }
            }

            .inbox-menu {
              ul li a {
                &.is-active {
                  background: var(--dark-sidebar-light-8);

                  span {
                    color: var(--smoke-white);
                  }

                  svg {
                    color: var(--primary);
                  }

                  .tag {
                    background: var(--secondary) !important;
                  }
                }
              }
            }
          }

          .scroll-menu {
            border-color: var(--dark-sidebar-light-12);

            .title-wrap {
              h3 {
                color: var(--dark-dark-text);
              }

              .searcv-button,
              .cancel-searcv-button {
                background: none !important;
              }
            }

            .contact-list {
              .contact-block {
                &:hover {
                  background: var(--dark-sidebar-light-8);
                }

                .contact-meta {
                  span {
                    &:first-child {
                      color: var(--dark-dark-text);
                    }
                  }
                }
              }
            }
          }
        }
      }

      .inbox-messages {
        border-color: var(--dark-sidebar-light-12);
        border-inline-start: 1px solid var(--dark-sidebar-light-12) !important;

        .header-area {
          background: var(--dark-sidebar);
          border-color: var(--dark-sidebar-light-12);
        }

        .messages-list {
          background: var(--dark-sidebar-light-4);

          .inbox-message {
            border-color: var(--dark-sidebar-light-12);

            &.is-selected {
              background: var(--dark-sidebar-light-8);
            }

            .message-meta {
              span {
                &:first-child,
                &.subject {
                  color: var(--dark-dark-text);
                }
              }
            }
          }
        }
      }

      .inbox-message-details {
        border-color: var(--dark-sidebar-light-12);

        .header-area {
          background: var(--dark-sidebar);
          border-color: var(--dark-sidebar-light-12);

          .message-meta {
            span {
              &:first-child {
                color: var(--dark-dark-text);
              }
            }
          }

          .attachments {
            span {
              color: var(--dark-dark-text);
            }
          }
        }

        .message-wrapper {
          background: var(--dark-sidebar-light-14);

          .message-inner {
            background: var(--dark-sidebar-light-4);
            border-color: var(--dark-sidebar-light-12);

            .message-head {
              border-color: var(--dark-sidebar-light-12);

              .info {
                span {
                  &:first-child {
                    color: var(--dark-dark-text);
                  }
                }
              }
            }

            .attachments-list {
              .attachment {
                background: var(--dark-sidebar-light-2);
                border-color: var(--dark-sidebar-light-12);

                span {
                  color: var(--dark-dark-text);
                }

                .download-icon {
                  border-color: var(--dark-sidebar-light-8);

                  svg {
                    color: var(--smoke-white);
                  }
                }
              }
            }
          }

          .reply-box-wrap {
            .reply-bubble {
              background-color: var(--dark-sidebar-light-2);
              border-color: var(--dark-sidebar-light-4);

              &::before,
              &::after {
                border-bottom-color: var(--dark-sidebar-light-2) !important;
              }

              .reply-as {
                .reply-details {
                  span {
                    &:first-child {
                      color: var(--dark-dark-text);
                    }
                  }
                }
              }

              .control {
                .button {
                  background: var(--secondary);
                  border-color: var(--secondary);
                  color: var(--smoke-white);
                }
              }
            }
          }
        }
      }
    }
  }

  .inbox-action {
    &:hover {
      background: var(--dark-sidebar-light-2);
      border-color: var(--dark-sidebar-light-12);

      svg {
        color: var(--primary);
      }
    }
  }

  .inbox-dropdown {
    &:hover {
      div > .button {
        background: var(--dark-sidebar-light-2) !important;
        border-color: var(--dark-sidebar-light-12) !important;
      }
    }

    div > .button {
      background: transparent !important;
      border-color: transparent !important;
    }
  }
}

/* ==========================================================================
4. Media Queries
========================================================================== */

// Media queries
@media (width <= 767px) {
  .inbox-hidden-mobile {
    display: none !important;
  }

  .inbox-messages,
  .inbox-sidebar,
  .inbox-message-details,
  .inbox-message-overlay {
    width: 100% !important;
  }

  .inbox-messages,
  .inbox-sidebar,
  .inbox-message-overlay {
    inset-inline-start: 0 !important;
  }

  .inbox-sidebar {
    transform: translateX(calc(var(--transform-direction) * -100%));
    z-index: 1 !important;
    transition: all 0.3s !important;

    &.mobile-active {
      transform: translateX(calc(var(--transform-direction) * 0)) !important;
    }

    .dropdown {
      display: none !important;
    }

    .inbox-close-sidebar-mobile {
      display: flex !important;
    }
  }

  .inbox-messages {
    .mobile-menu-action {
      display: flex !important;

      svg {
        height: 22px;
        width: 22px;
      }
    }

    .check-all-action {
      margin-inline-end: 16px;
    }

    .inbox-message {
      .pushed {
        display: none;
      }
    }
  }

  .inbox-message-details {
    inset-inline-start: 0 !important;
    transform: translateX(calc(var(--transform-direction) * 100%));

    &.mobile-active {
      transform: translateX(calc(var(--transform-direction) * 0));
    }

    .header-area {
      padding: 0 10px !important;

      .sender-pic {
        display: none !important;
      }

      .message-meta {
        .message-title {
          font-size: 1rem !important;
        }

        .sender-email {
          font-size: 0.9rem !important;
        }
      }

      .attachments {
        font-size: 1rem !important;
      }

      .dropdown {
        margin-inline-start: auto !important;
      }

      .inbox-close-details-mobile {
        display: flex !important;
      }
    }

    .message-inner {
      .message-head {
        .info {
          font-size: 0.9rem;
        }
      }

      .mail-content {
        padding: 40px 20px 20px !important;
      }

      .attachments-list {
        .attachment {
          width: 100%;

          .download-icon {
            margin-inline-start: auto !important;
          }
        }
      }
    }

    .reply-box-wrap {
      padding-inline-start: 10px !important;
      padding-inline-end: 10px !important;

      .reply-bubble {
        &::after,
        &::before {
          inset-inline-start: 16% !important;
        }
      }
    }
  }

  .compose-panel {
    width: 100% !important;

    .panel-inner {
      padding: 20px !important;

      .field-wrap {
        margin-bottom: 8px !important;

        .field {
          display: block;

          label {
            text-align: inset-inline-start;
          }

          .textarea {
            max-height: 210px !important;
          }
        }
      }
    }
  }
}

// Tablet portrait
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  .inbox-hidden-mobile {
    display: none !important;
  }

  .inbox-messages,
  .inbox-sidebar,
  .inbox-message-details,
  .inbox-message-overlay {
    width: 100% !important;
  }

  .inbox-messages,
  .inbox-sidebar,
  .inbox-message-overlay {
    inset-inline-start: 0 !important;
  }

  .inbox-sidebar {
    transform: translateX(calc(var(--transform-direction) * -100%));
    z-index: 1 !important;
    transition: all 0.3s !important;

    &.mobile-active {
      transform: translateX(calc(var(--transform-direction) * 0)) !important;
    }

    .dropdown {
      display: none !important;
    }

    .inbox-close-sidebar-mobile {
      display: flex !important;
    }
  }

  .inbox-messages {
    .mobile-menu-action {
      display: flex !important;
    }
  }

  .inbox-message-details {
    inset-inline-start: 0 !important;
    transform: translateX(calc(var(--transform-direction) * 100%));

    &.mobile-active {
      transform: translateX(calc(var(--transform-direction) * 0));
    }

    .header-area {
      padding: 0 10px !important;

      .attachments {
        font-size: 1rem !important;
      }

      .dropdown {
        margin-inline-start: auto !important;
      }

      .inbox-close-details-mobile {
        display: flex !important;
      }
    }

    .message-inner {
      .message-head {
        .info {
          font-size: 0.9rem;
        }
      }

      .mail-content {
        padding: 40px 20px 20px !important;
      }

      .attachments-list {
        .attachment {
          width: 100%;

          .download-icon {
            margin-inline-start: auto !important;
          }
        }
      }
    }

    .reply-box-wrap {
      padding-inline-start: 10px !important;
      padding-inline-end: 10px !important;

      .reply-bubble {
        &::after,
        &::before {
          inset-inline-start: 5% !important;
        }
      }
    }
  }

  .compose-panel {
    width: calc(100% - 80px) !important;

    .panel-inner {
      padding: 60px !important;

      .field-wrap {
        margin-bottom: 8px !important;

        .field {
          display: block;

          label {
            text-align: inset-inline-start;
          }

          .textarea {
            max-height: 210px !important;
          }
        }
      }
    }
  }
}

// Tablet landscape
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  .inbox-hidden-mobile {
    display: none !important;
  }

  .inbox-sidebar {
    width: 32% !important;
    z-index: 1;
  }

  .inbox-messages {
    width: 68% !important;
    inset-inline-start: 32% !important;
  }

  .inbox-message-details,
  .inbox-message-overlay {
    inset-inline-end: 0 !important;
    inset-inline-start: unset !important;
    width: 68% !important;
    transform: translateX(calc(var(--transform-direction) * 100%));
    transition: all 0.3s; // transition-all test

    &.tablet-active {
      transform: translateX(calc(var(--transform-direction) * 0)) !important;
    }
  }

  .inbox-message-details {
    .header-area {
      .dropdown {
        margin-inline-start: auto !important;
      }

      .inbox-close-details-mobile {
        display: flex !important;
      }
    }
  }

  .compose-panel {
    width: 63% !important;
  }
}
</style>
