<script setup lang="ts">
import type { VAvatarProps } from '/@src/components/base/VAvatar.vue'

export interface conversationData {
  id: number
  name: string
  role: string
  avatar: VAvatarProps
  lastMessage: string
  lastMessagePreview: string
}

// we are using static data here, but you might need to load those from your API
// to do so, this should be a ref<any[]>([]) and be populated when request is done
const conversations: conversationData[] = [
  {
    id: 1,
    name: 'Kelly Marston',
    role: 'Product Manager',
    avatar: {
      picture: 'https://media.cssninja.io/content/avatars/11.jpg',
    },
    lastMessage: '20m',
    lastMessagePreview: 'What time was our meeting scheduled for?',
  },
  {
    id: 2,
    name: 'Alejandro Badajoz',
    role: 'Business Analyst',
    avatar: {
      picture: 'https://media.cssninja.io/content/avatars/39.jpg',
    },
    lastMessage: '24m',
    lastMessagePreview: 'Nah, I have a meeting that starts in 5.',
  },
  {
    id: 3,
    name: 'Work Group',
    role: '7 people are chatting',
    avatar: {
      color: 'h-purple',
      initials: 'WG',
    },
    lastMessage: '31m',
    lastMessagePreview: 'This is getting funnier and funnier. You gotta love dat team 🥰',
  },
  {
    id: 4,
    name: 'Alice Carasca',
    role: 'Software Engineer',
    avatar: {
      picture: 'https://media.cssninja.io/content/avatars/7.jpg',
    },
    lastMessage: '47m',
    lastMessagePreview: 'I like the curves in this one.',
  },
  {
    id: 5,
    name: 'Irina Vierbovsky',
    role: 'Project Manager',
    avatar: {
      picture: 'https://media.cssninja.io/content/avatars/23.jpg',
    },
    lastMessage: '56m',
    lastMessagePreview: 'I need some help on something Iam working on.',
  },
  {
    id: 6,
    name: 'Mary Lebowski',
    role: 'Project Manager',
    avatar: {
      picture: 'https://media.cssninja.io/content/avatars/5.jpg',
    },
    lastMessage: '1h',
    lastMessagePreview: 'Still down for that movie?',
  },
  {
    id: 7,
    name: 'Esteban Castellanos',
    role: 'UI/UX Designer',
    avatar: {
      picture: 'https://media.cssninja.io/content/avatars/18.jpg',
    },
    lastMessage: '1h',
    lastMessagePreview: 'I can send you the files.',
  },
  {
    id: 8,
    name: 'Melany Wallace',
    role: 'Web Developer',
    avatar: {
      picture: 'https://media.cssninja.io/content/avatars/25.jpg',
    },
    lastMessage: '2h',
    lastMessagePreview: 'I has some issues with the headers tough.',
  },
  {
    id: 9,
    name: 'Jimmy Hector',
    role: 'Project Manager',
    avatar: {
      picture: 'https://media.cssninja.io/content/avatars/22.jpg',
    },
    lastMessage: '3h',
    lastMessagePreview: 'When are you available?',
  },
  {
    id: 10,
    name: 'Greta Kroppfer',
    role: 'Sales Manager',
    avatar: {
      picture: 'https://media.cssninja.io/content/avatars/19.jpg',
    },
    lastMessage: '3h',
    lastMessagePreview: 'Thank you for you clean presentation, it was stunning.',
  },
  {
    id: 11,
    name: 'Tara Svenson',
    role: 'UI/UX Designer',
    avatar: {
      picture: 'https://media.cssninja.io/content/avatars/13.jpg',
    },
    lastMessage: '9h',
    lastMessagePreview: 'Hope you like them.',
  },
]

const { onceError } = useImageError()
const selectedConversationId = ref(3)
const mobileConversationListOpen = ref(false)
const selectedConversation = computed(() => {
  const conversation = conversations.find(
    item => item.id === selectedConversationId.value,
  )
  if (conversation) {
    return conversation
  }

  return conversations[0]
})

const dropdownElement2 = ref<HTMLElement>()
const dropdown2 = useDropdownContext(dropdownElement2)

useHead({
  title: 'Messaging chat - Navbar - Vuero',
})
</script>

<template>
  <MinimalLayout>
    <div class="chat-app-wrapper">
      <!--Header-->
      <div class="chat-app-header">
        <!--Logo-->
        <div class="logo">
          <VLink to="/">
            <AnimatedLogo
              width="38px"
              height="38px"
            />
          </VLink>
        </div>

        <!--Search-->
        <div class="search-bar">
          <div class="field">
            <div class="control has-icon">
              <input
                type="text"
                class="input search-input"
                placeholder="Search..."
                aria-label="Search"
              >
              <div class="form-icon">
                <VIcon
                  icon="lucide:search"
                />
              </div>
              <div class="search-results has-slimscroll" />
            </div>
          </div>
        </div>

        <!--User Settings-->
        <div class="user-settings">
          <!--Toolbar-->
          <div class="toolbar desktop-toolbar">
            <ToolbarThemeToggle />
            <ToolbarNotification />
            <ToolbarActivity />
            <ToolbarUserProfile class="ml-4" right />
          </div>
        </div>
      </div>

      <!--Chat app wrapper-->
      <div class="wrapper">
        <!--Conversation List-->
        <WebappConversationList
          v-model:conversationId="selectedConversationId"
          :mobile-conversation-list-open="mobileConversationListOpen"
          :conversations="conversations"
          @toggle-mobile-conversation="
            mobileConversationListOpen = !mobileConversationListOpen
          "
        />

        <!--Conversation messages-->
        <div
          class="chat-area is-active has-slimscroll"
        >
          <!--Conversation 1-->
          <WebappConversation1
            :class="[selectedConversationId === 1 && 'is-active']"
            @toggle-mobile-conversation="
              mobileConversationListOpen = !mobileConversationListOpen
            "
          />

          <!--Conversation 2-->
          <WebappConversation2
            :class="[selectedConversationId === 2 && 'is-active']"
            @toggle-mobile-conversation="
              mobileConversationListOpen = !mobileConversationListOpen
            "
          />

          <!--Conversation 3-->
          <WebappConversation3
            :class="[selectedConversationId === 3 && 'is-active']"
            @toggle-mobile-conversation="
              mobileConversationListOpen = !mobileConversationListOpen
            "
          />

          <!--Conversation 4-->
          <WebappConversation4
            :class="[selectedConversationId === 4 && 'is-active']"
            @toggle-mobile-conversation="
              mobileConversationListOpen = !mobileConversationListOpen
            "
          />

          <!--Conversation 5-->
          <WebappConversation5
            :class="[selectedConversationId === 5 && 'is-active']"
            @toggle-mobile-conversation="
              mobileConversationListOpen = !mobileConversationListOpen
            "
          />

          <!--Conversation 6-->
          <WebappConversation6
            :class="[selectedConversationId === 6 && 'is-active']"
            @toggle-mobile-conversation="
              mobileConversationListOpen = !mobileConversationListOpen
            "
          />

          <!--Conversation 7-->
          <WebappConversation7
            :class="[selectedConversationId === 7 && 'is-active']"
            @toggle-mobile-conversation="
              mobileConversationListOpen = !mobileConversationListOpen
            "
          />

          <!--Conversation 8-->
          <WebappConversation8
            :class="[selectedConversationId === 8 && 'is-active']"
            @toggle-mobile-conversation="
              mobileConversationListOpen = !mobileConversationListOpen
            "
          />

          <!--Conversation 9-->
          <WebappConversation9
            :class="[selectedConversationId === 9 && 'is-active']"
            @toggle-mobile-conversation="
              mobileConversationListOpen = !mobileConversationListOpen
            "
          />

          <!--Conversation 10-->
          <WebappConversation10
            :class="[selectedConversationId === 10 && 'is-active']"
            @toggle-mobile-conversation="
              mobileConversationListOpen = !mobileConversationListOpen
            "
          />

          <!--Conversation 11-->
          <WebappConversation11
            :class="[selectedConversationId === 11 && 'is-active']"
            @toggle-mobile-conversation="
              mobileConversationListOpen = !mobileConversationListOpen
            "
          />

          <div class="chat-area-footer">
            <div class="add-content">
              <div
                ref="dropdownElement2"
                class="dropdown dropdown-trigger is-up"
                :class="[dropdown2.isOpen && 'is-active']"
              >
                <div>
                  <div
                    class="button"
                    aria-haspopup="true"
                    @click="dropdown2.toggle"
                  >
                    <VIcon
                      icon="lucide:plus"
                    />
                  </div>
                </div>
                <div
                  class="dropdown-menu"
                  role="menu"
                >
                  <div class="dropdown-content">
                    <a class="dropdown-item">
                      <VIcon
                        icon="lucide:video"
                      />
                      <div class="meta">
                        <span>Video</span>
                        <span>Embed a video</span>
                      </div>
                    </a>
                    <a
                      href="#"
                      class="dropdown-item kill-drop v-modal-trigger"
                    >
                      <VIcon
                        icon="lucide:image"
                      />
                      <div class="meta">
                        <span>Images</span>
                        <span>Upload pictures</span>
                      </div>
                    </a>
                    <a
                      href="#"
                      class="dropdown-item kill-drop v-modal-trigger"
                    >
                      <VIcon
                        icon="lucide:link"
                      />
                      <div class="meta">
                        <span>Link</span>
                        <span>Post a link</span>
                      </div>
                    </a>
                    <hr class="dropdown-divider">
                    <a
                      href="#"
                      class="dropdown-item kill-drop v-modal-trigger"
                    >
                      <VIcon
                        icon="lucide:file"
                      />
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
                <VIcon
                  icon="lucide:smile"
                />
              </div>
            </div>
            <input
              type="text"
              placeholder="Type something here..."
              aria-label="Add new message"
            >
          </div>
        </div>

        <!--Conversation Details-->
        <div
          class="detail-area has-slimscroll"
        >
          <div class="chat-side-content is-single">
            <VAvatar
              :picture="selectedConversation.avatar.picture"
              :color="selectedConversation.avatar.color"
              :initials="selectedConversation.avatar.initials"
            />
            <h4
              id="user-details-name"
              class="user-name"
            >
              {{ selectedConversation.name }}
            </h4>
            <p
              id="user-details-title"
              class="user-job-title"
            >
              {{ selectedConversation.role }}
            </p>

            <div class="side-actions">
              <a class="button v-button is-rounded">
                <span class="icon is-small">
                  <i
                    aria-hidden="true"
                    class="fas fa-phone"
                  />
                </span>
                <span>Audio Call</span>
              </a>
              <a class="button v-button is-rounded">
                <span class="icon is-small">
                  <i
                    aria-hidden="true"
                    class="fas fa-video"
                  />
                </span>
                <span>Video Call</span>
              </a>
            </div>

            <div class="detail-photos">
              <div class="detail-photo-title">
                <VIcon icon="lucide:images" />
                Shared photos
              </div>
              <div class="detail-photo-grid">
                <img
                  src="https://media.cssninja.io/content/photos/demo-apps/1.jpg"
                  alt=""
                  @error.once="onceError($event, 1600, 900)"
                >
                <img
                  src="https://media.cssninja.io/content/photos/demo-apps/2.jpg"
                  alt=""
                  @error.once="onceError($event, 1600, 900)"
                >
                <img
                  src="https://media.cssninja.io/content/photos/demo-apps/3.jpg"
                  alt=""
                  @error.once="onceError($event, 1600, 900)"
                >
                <img
                  src="https://media.cssninja.io/content/photos/demo-apps/4.jpg"
                  alt=""
                  @error.once="onceError($event, 1600, 900)"
                >
                <img
                  src="https://media.cssninja.io/content/photos/demo-apps/5.jpg"
                  alt=""
                  @error.once="onceError($event, 1600, 900)"
                >
                <img
                  src="https://media.cssninja.io/content/photos/demo-apps/6.jpg"
                  alt=""
                  @error.once="onceError($event, 1600, 900)"
                >
                <img
                  src="https://media.cssninja.io/content/photos/demo-apps/7.jpg"
                  alt=""
                  @error.once="onceError($event, 1600, 900)"
                >
                <img
                  src="https://media.cssninja.io/content/photos/demo-apps/8.jpg"
                  alt=""
                  @error.once="onceError($event, 1600, 900)"
                >
                <img
                  src="https://media.cssninja.io/content/photos/demo-apps/9.jpg"
                  alt=""
                  @error.once="onceError($event, 1600, 900)"
                >
                <img
                  src="https://media.cssninja.io/content/photos/demo-apps/10.jpg"
                  alt=""
                  @error.once="onceError($event, 1600, 900)"
                >
                <img
                  src="https://media.cssninja.io/content/photos/demo-apps/11.jpg"
                  alt=""
                  @error.once="onceError($event, 1600, 900)"
                >
                <img
                  src="https://media.cssninja.io/content/photos/demo-apps/12.jpg"
                  alt=""
                  @error.once="onceError($event, 1600, 900)"
                >
              </div>
              <a class="view-more">View More</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <PanelLanguages />
    <PanelActivity />
    <PanelSearch />
    <PanelTask />
  </MinimalLayout>
</template>

<style lang="scss">
$theme-bg-color: var(--white);
$input-bg: #f8f8fa;
$input-chat-color: #a2a2a2;
$border-color: #eef2f4;
$body-color: #273346;
$chat-text-bg: #f1f2f6;
$msg-date: #c0c7d2;
$msg-hover-bg: rgb(238 242 244 / 40%);
$active-conversation-bg: linear-gradient(
  to right,
  rgb(238 242 244 / 40%) 0%,
  rgb(238 242 244 / 0%) 100%
);
$overlay-bg: linear-gradient(
  to bottom,
  rgb(255 255 255 / 0%) 0%,
  rgb(255 255 255 / 100%) 65%,
  rgb(255 255 255 / 100%) 100%
);
$overlay-bg-dark: linear-gradient(
  to bottom,
  rgb(255 255 255 / 0%) 0%,
  var(--dark-sidebar) 65%,
  var(--dark-sidebar) 100%
);

.chat-app-wrapper {
  display: flex;
  flex-direction: column;
  background-color: $theme-bg-color;
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;

  .chat-app-header {
    height: 64px;
    min-height: 64px;
    width: 100%;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    padding: 0 20px;

    .logo {
      width: 38px;
      flex-shrink: 0;
    }

    .search-bar {
      height: 64px;
      flex-grow: 2;
      z-index: 3;
      position: relative;
      margin-inline-start: 280px;

      .field {
        height: 100%;
        width: 100%;

        .control {
          height: 100%;
          width: 100%;

          .form-icon {
            height: 64px;
            width: 64px;

            .iconify {
              height: 20px;
              width: 20px;
              font-size: 20px;
              color: color-mix(in oklab, var(--light-text), black 5%);
            }
          }

          .input {
            height: 100%;
            width: 100%;
            display: block;
            background-color: transparent;
            border: none;
            font-family: var(--font);
            font-weight: 500;
            font-size: 15px;
            padding-inline-start: 64px;
            padding-inline-end: 64px;

            &:focus {
              box-shadow: none;
            }
          }
        }
      }
    }

    .user-settings {
      display: flex;
      align-items: center;
      cursor: pointer;
      margin-inline-start: auto;
      flex-shrink: 0;

      & > * + * {
        margin-inline-start: 14px;
      }
    }
  }
}

/* ==========================================================================
2. Wrapper / Header Dark mode
========================================================================== */

.is-dark {
  .chat-app-wrapper {
    .chat-app-header {
      background: color-mix(in oklab, var(--dark-sidebar), black 2%);
      border-color: color-mix(in oklab, var(--dark-sidebar), white 2%);

      .search-bar {
        .field {
          .control {
            .input {
              color: var(--dark-dark-text);
            }
          }
        }
      }
    }
  }
}

/* ==========================================================================
3. Chat Conversations
========================================================================== */

.chat-app-wrapper {
  .wrapper {
    width: 100%;
    display: flex;
    flex-grow: 1;
    overflow: hidden;

    .conversation-area {
      border-inline-end: 1px solid $border-color;
      overflow-y: auto;
      overflow-x: hidden;
      display: flex;
      flex-direction: column;
      position: relative;
      width: 340px;
      flex-shrink: 0;
      padding-bottom: 80px;

      .overlay {
        position: fixed;
        bottom: -2px;
        inset-inline-start: 0;
        width: 340px;
        flex-shrink: 0;
        background: $overlay-bg;
        height: 80px;
        pointer-events: none;
      }

      .conversation {
        display: flex;
        align-items: center;
        max-width: 100%;
        padding: 20px;
        cursor: pointer;
        transition: 0.2s;
        position: relative;

        &:hover,
        &:focus {
          background-color: $msg-hover-bg;
        }

        &.active {
          background: $active-conversation-bg;
          border-inline-start: 4px solid var(--primary);

          .conversation-detail {
            .conversation-username {
              font-weight: 600;
            }
          }
        }

        .v-avatar {
          margin-inline-end: 12px;
        }

        .conversation-detail {
          overflow: hidden;
          font-family: var(--font);

          .conversation-username {
            font-family: var(--font-alt);
            color: var(--dark-text);
            font-weight: 500;
            font-size: 0.95rem;
          }

          .conversation-content {
            font-weight: 500;
            font-size: 0.9rem;
            display: flex;

            .conversation-message {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              color: var(--light-text);
              max-width: 170px;
            }

            .conversation-date {
              font-size: 0.9rem;
              color: var(--light-text);
              margin-inline-start: 4px;

              &::before {
                content: '•';
                margin-inline-end: 2px;
              }
            }
          }
        }
      }
    }
  }
}

/* ==========================================================================
4. Chat Conversations Dark mode
========================================================================== */

.is-dark {
  .chat-app-wrapper {
    .wrapper {
      .conversation-area {
        background: color-mix(in oklab, var(--dark-sidebar), white 4%);
        border-color: color-mix(in oklab, var(--dark-sidebar), white 12%);

        .overlay {
          background: $overlay-bg-dark;
        }

        .conversation {
          &:hover {
            background: color-mix(in oklab, var(--dark-sidebar), white 6%);
          }

          &.active {
            background: color-mix(in oklab, var(--dark-sidebar), white 1%);
            border-color: var(--primary);
          }

          .conversation-detail {
            .conversation-username {
              color: var(--dark-dark-text);
            }
          }
        }
      }
    }
  }
}

/* ==========================================================================
5. Chat messages
========================================================================== */

.chat-app-wrapper {
  .wrapper {
    .chat-area {
      position: relative;
      display: flex;
      flex-direction: column;
      min-height: calc(100vh - 80px);
      overflow-y: auto;
      overflow-x: hidden !important;
      flex-grow: 1;
      z-index: 1;

      .overlay {
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        flex-shrink: 0;
        background: $overlay-bg;
        height: 80px;
        z-index: 10000;
      }

      .chat-area-content {
        display: none;
        padding-bottom: 80px;
        animation: fadeInLeft 0.5s;

        &.is-active {
          display: block;
        }
      }

      .chat-area-header {
        display: flex;
        position: sticky;
        top: 0;
        inset-inline-start: 0;
        z-index: 2;
        width: 100%;
        align-items: center;
        padding: 20px;
        background: var(--white);

        .trigger {
          padding: 8px;
          margin-inline-end: 6px;
          border: none;
          background: none;

          .iconify {
            height: 20px;
            width: 20px;
            font-size: 20px;
          }
        }

        .chat-area-group {
          flex-shrink: 0;
          display: flex;
          margin-inline-start: auto;

          * {
            border: 2px solid var(--white);
          }

          * + * {
            margin-inline-start: -5px;
          }

          > span {
            width: 32px;
            height: 32px;
            background-color: color-mix(in oklab, var(--primary), white 48%);
            color: var(--primary);
            border-radius: var(--radius-rounded);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0.9rem;
            font-weight: 500;

            span {
              position: relative;
              top: -1px;
              inset-inline-start: -1px;
              line-height: 1;
              display: block;
              text-align: center;
              margin: 0;
              border: none;
            }
          }
        }

        .chat-area-profile {
          width: 32px;
          border-radius: var(--radius-rounded);
          object-fit: cover;
        }

        .chat-area-title {
          font-size: 1.1rem;
          font-family: var(--font-alt);
          color: var(--dark-text);
          font-weight: 700;
        }
      }

      .chat-area-main {
        flex-grow: 1;

        .chat-msg-img {
          height: 40px;
          width: 40px;
          border-radius: var(--radius-rounded);
          object-fit: cover;
        }

        .chat-msg-profile {
          flex-shrink: 0;
          margin-top: auto;
          margin-bottom: -20px;
          position: relative;
        }

        .chat-msg-date {
          position: absolute;
          inset-inline-start: calc(100% + 12px);
          bottom: 0;
          font-size: 12px;
          font-family: var(--font);
          font-weight: 500;
          color: $msg-date;
          white-space: nowrap;
        }

        .chat-msg {
          display: flex;
          padding: 0 20px 45px;

          .chat-msg-content {
            margin-inline-start: 12px;
            max-width: 50%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          .chat-msg-text {
            background-color: $chat-text-bg;
            padding: 15px;
            border-radius: 20px;
            border-end-start-radius: 0;
            line-height: 1.5;
            font-family: var(--font);
            font-size: 0.95rem;
            font-weight: 500;

            + .chat-msg-text {
              margin-top: 10px;
            }
          }
        }

        .chat-msg-text {
          color: var(--chat-text-color);
        }

        .owner {
          flex-direction: row-reverse;

          .chat-msg-content {
            margin-inline-start: 0;
            margin-inline-end: 12px;
            align-items: flex-end;
          }

          .chat-msg-text {
            background-color: var(--primary);
            color: var(--white);
            border-radius: 20px;
            border-end-end-radius: 0;
          }

          .chat-msg-date {
            inset-inline-start: auto;
            inset-inline-end: calc(100% + 12px);
          }
        }

        .chat-msg-text img {
          max-width: 300px;
          border-radius: 10px;
          width: 100%;
        }
      }

      .chat-area-footer {
        display: flex;
        border-top: 1px solid $border-color;
        padding: 10px 20px;
        align-items: center;
        background-color: $theme-bg-color;
        position: fixed;
        inset-inline-end: 0;
        margin: 0 auto;
        width: calc(100% - 680px);
        // overflow-x: hidden;
        bottom: 0;
        inset-inline-start: 0;

        input {
          border: 1px solid transparent;
          background-color: $input-bg;
          padding: 12px;
          border-radius: var(--radius-large);
          font-size: 15px;
          margin: 0 12px;
          width: 100%;
          transition: all 0.3s; // transition-all test

          &::placeholder {
            color: $input-chat-color;
          }

          &:focus {
            background: var(--white);
            border-color: color-mix(in oklab, var(--fade-grey), black 3%);
            box-shadow: var(--light-box-shadow);
          }
        }

        .add-content {
          &:hover {
            > div {
              .button {
                background: var(--fade-grey);

                .iconify {
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
            transition: all 0.3s; // transition-all test

            .iconify {
              color: var(--placeholder);
              font-size: 18px;
              height: 18px;
              width: 18px;
              transition:
                color 0.3s,
                background-color 0.3s,
                border-color 0.3s,
                height 0.3s,
                width 0.3s;
            }
          }

          .dropdown-content {
            a {
              display: flex;
              align-items: center;

              .iconify {
                height: 18px;
                width: 18px;
                font-size: 18px;
                color: var(--muted-grey);
              }

              .meta {
                margin-inline-start: 12px;

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
          display: flex;
          justify-content: center;
          align-items: center;
          width: 28px;
          height: 42px;

          &:hover,
          &:focus {
            .button {
              background: var(--fade-grey);

              .iconify {
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
            transition: all 0.3s; // transition-all test

            .iconify {
              color: var(--placeholder);
              font-size: 18px;
              height: 18px;
              width: 18px;
              transition:
                color 0.3s,
                background-color 0.3s,
                border-color 0.3s,
                height 0.3s,
                width 0.3s;
            }
          }
        }
      }
    }
  }
}

/* ==========================================================================
6. Chat Messages Dark mode
========================================================================== */

.is-dark {
  .chat-app-wrapper {
    .wrapper {
      .chat-area {
        background: color-mix(in oklab, var(--dark-sidebar), white 10%);
        border-color: color-mix(in oklab, var(--dark-sidebar), white 12%);

        .chat-area-header {
          background: color-mix(in oklab, var(--dark-sidebar), white 10%);

          .trigger {
            .iconify {
              color: var(--dark-dark-text);
            }
          }

          .chat-area-title {
            color: var(--dark-dark-text);
          }

          .chat-area-group {
            img {
              border-color: color-mix(in oklab, var(--dark-sidebar), white 10%);
            }

            > span {
              border-color: color-mix(in oklab, var(--dark-sidebar), white 10%);
              color: color-mix(in oklab, var(--primary), black 5%);
              background: color-mix(in oklab, var(--primary), white 20%);
            }
          }
        }

        .chat-area-main {
          .chat-msg {
            &.owner {
              .chat-msg-content {
                .chat-msg-text {
                  background: color-mix(in oklab, var(--primary), black 4%);
                  color: var(--smoke-white);
                }
              }
            }

            .chat-msg-content {
              .chat-msg-text {
                background: color-mix(in oklab, var(--dark-sidebar), white 6%);
                color: var(--dark-dark-text);
              }
            }
          }
        }

        .chat-area-footer {
          background: color-mix(in oklab, var(--dark-sidebar), white 10%);
          border-color: color-mix(in oklab, var(--dark-sidebar), white 12%);

          .add-content .dropdown {
            &:hover {
              > div > .button {
                background: color-mix(in oklab, var(--dark-sidebar), white 6%) !important;

                .iconify {
                  color: var(--primary);
                }
              }
            }

            .dropdown-menu {
              .dropdown-content {
                .dropdown-item {
                  .meta span {
                    &:first-child {
                      color: var(--dark-dark-text);
                    }
                  }
                }
              }
            }
          }

          .add-emoji {
            &:hover {
              .button {
                background: color-mix(in oklab, var(--dark-sidebar), white 6%) !important;

                .iconify {
                  color: var(--primary);
                }
              }
            }
          }

          input {
            background: color-mix(in oklab, var(--dark-sidebar), white 6%);
            color: var(--dark-dark-text);

            &:focus {
              border-color: color-mix(in oklab, var(--dark-sidebar), white 12%);
              background: color-mix(in oklab, var(--dark-sidebar), white 4%);
            }
          }
        }
      }
    }
  }
}

/* ==========================================================================
7. Chat Details
========================================================================== */

.chat-app-wrapper {
  .wrapper {
    width: 100%;
    display: flex;
    flex-grow: 1;
    overflow: hidden;

    .detail-area {
      width: 340px;
      flex-shrink: 0;
      border-inline-start: 1px solid $border-color;
      margin-inline-start: auto;
      padding: 30px 30px 0;
      display: flex;
      flex-direction: column;
      overflow: auto;
      overflow-x: hidden;

      .chat-side-content {
        text-align: center;
        transition: all 0.3s; // transition-all test
        padding: 20px 10px;

        .user-pic {
          position: relative;
          max-width: 68px;
          margin: 0 auto;
        }

        .user-name {
          margin-top: 10px;
          font-family: var(--font-alt);
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--dark-text);
        }

        .user-job-title {
          font-family: var(--font);
          color: var(--light-text);
        }

        .side-actions {
          padding: 12px 0;
          display: flex;
          justify-content: center;
          gap: 0.5rem;

          .button {
            color: var(--light-text);

            &:hover,
            &:focus {
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

            .iconify {
              width: 16px;
              font-size: 16px;
              margin-inline-end: 8px;
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
  }
}

/* ==========================================================================
8. Chat Details Dark mode
========================================================================== */

.is-dark {
  .chat-app-wrapper {
    .wrapper {
      .detail-area {
        background: color-mix(in oklab, var(--dark-sidebar), white 4%);
        border-color: color-mix(in oklab, var(--dark-sidebar), white 12%);

        .chat-side-content {
          .user-name {
            color: var(--dark-dark-text);
          }

          .detail-photos {
            .view-more {
              color: var(--primary);
            }
          }
        }
      }
    }
  }
}

/* ==========================================================================
9. Media Queries
========================================================================== */

@media (width <= 767px) {
  .chat-app-wrapper {
    .chat-app-header {
      .search-bar {
        display: none;
      }
    }

    .wrapper {
      .conversation-area {
        position: fixed;
        top: 0;
        inset-inline-start: 0;
        height: 100%;
        background: var(--white);
        z-index: 10;
        transform: translateX(calc(var(--transform-direction) * -100%));
        transition: all 0.3s; // transition-all test

        &.is-active {
          transform: translateX(calc(var(--transform-direction) * 0));
        }
      }

      .chat-area {
        .chat-area-main {
          .chat-msg {
            .chat-msg-content {
              max-width: 100%;
            }
          }
        }

        .chat-area-footer {
          width: 100%;
          padding: 10px;
        }
      }

      .detail-area {
        display: none !important;
      }
    }
  }
}

@media only screen and (device-width >= 768px) and (device-width <= 1024px) and (orientation: portrait) {
  .chat-app-wrapper {
    .chat-app-header {
      .search-bar {
        display: none;
      }
    }

    .wrapper {
      .conversation-area {
        position: fixed;
        top: 0;
        inset-inline-start: 0;
        height: 100%;
        background: var(--white);
        z-index: 10;
        transform: translateX(calc(var(--transform-direction) * -100%));
        transition: all 0.3s; // transition-all test

        &.is-active {
          transform: translateX(calc(var(--transform-direction) * 0));
        }
      }

      .chat-area {
        .chat-area-footer {
          position: fixed;
          width: 100%;
        }
      }

      .detail-area {
        display: none !important;
      }
    }
  }
}

@media only screen and (device-width >= 768px) and (device-width <= 1024px) and (orientation: landscape) {
  .chat-app-wrapper {
    .wrapper {
      .detail-area {
        display: none !important;
      }

      .chat-area {
        .chat-area-footer {
          width: calc(100% - 340px);
          margin-inline-start: 340px;
        }
      }
    }
  }
}
</style>
