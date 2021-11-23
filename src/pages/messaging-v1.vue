<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watchPostEffect } from 'vue'

import { useChat } from '/@src/stores/chat'
import { useSidebar } from '/@src/stores/sidebar'
import { useLayoutSwitcher } from '/@src/stores/layoutSwitcher'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import useNotyf from '/@src/composable/useNotyf'

const chat = useChat()
const layoutSwitcher = useLayoutSwitcher()
const viewWrapper = useViewWrapper()
const sidebar = useSidebar()
const notyf = useNotyf()

onMounted(async () => {
  sidebar.setActive('messages')

  try {
    await chat.loadConversations()

    const lastReadConversation = chat.conversations.find(
      (conversation) => !conversation.unreadMessages
    )
    if (lastReadConversation) {
      chat.selectConversastion(lastReadConversation.id)
    } else {
      chat.selectConversastion(chat.conversations[0].id)
    }
  } catch (e: any) {
    notyf.error(e.message)
    console.error(e)
  }
})

function addConversation() {
  chat.unselectConversation()
  chat.setAddConversationOpen(!chat.addConversationOpen)
}

function selectConversation(id: number) {
  chat.setAddConversationOpen(false)
  chat.selectConversastion(id)
}

useHead({
  title: 'Messaging chat - Sidebar - Vuero',
})

watchPostEffect(() => {
  viewWrapper.setPushed(sidebar.active === 'messages')
})
</script>

<template>
  <MessagingLayout :theme="layoutSwitcher.sidebarTheme">
    <template #default="{ isMobileSidebarOpen }">
      <transition name="slide-x">
        <MessagesSubsidebar
          v-if="sidebar.active === 'messages'"
          :conversations="chat.conversations"
          :selected-conversation-id="chat.selectedConversationId"
          @add-conversation="addConversation"
          @select-conversation="selectConversation"
        />
      </transition>
      <transition name="slide-x">
        <MessagesMobileSubsidebar
          v-if="isMobileSidebarOpen"
          :conversations="chat.conversations"
          :selected-conversation-id="chat.selectedConversationId"
          @select-conversation="selectConversation"
        />
      </transition>

      <CollapsedMessaging
        :conversations="chat.conversations"
        :selected-conversation-id="chat.selectedConversationId"
        @add-conversation="addConversation"
        @select-conversation="
          (id) => {
            chat.setAddConversationOpen(false)
            chat.selectConversastion(id)
          }
        "
      />

      <VViewWrapper
        id="vuero-messaging"
        :class="[sidebar.active === 'none' && 'is-pushed-messages']"
      >
        <VPageContentWrapper>
          <VPageContent class="chat-content">
            <div class="page-title has-text-centered is-hidden">
              <div
                class="vuero-hamburger nav-trigger push-resize"
                tabindex="0"
                @keydown.space.prevent="sidebar.toggle('messages')"
                @click="sidebar.toggle('messages')"
              >
                <span class="menu-toggle has-chevron">
                  <span
                    :class="[sidebar.active !== 'none' && 'active']"
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
            <ChatCard>
              <template #header>
                <div
                  :class="[!chat.addConversationOpen && 'is-hidden']"
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
                    <div
                      class="hide"
                      tabindex="0"
                      @keydown.space.prevent="chat.setAddConversationOpen(false)"
                      @click="chat.setAddConversationOpen(false)"
                    >
                      <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
                    </div>
                  </div>
                </div>
              </template>

              <template #body>
                <li v-if="chat.messages.length === 0" class="no-messages">
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

                <ChatMsg
                  v-for="message in chat.messages"
                  :key="message.id"
                  :message="message"
                />

                <li class="chat-loader" :class="[chat.loading && 'is-active']">
                  <div class="loader is-loading"></div>
                </li>
              </template>

              <template #side>
                <ChatSide />
              </template>
            </ChatCard>

            <ChatPlaceholder />
          </VPageContent>
        </VPageContentWrapper>
      </VViewWrapper>

      <ChatSideFab />
    </template>
  </MessagingLayout>
</template>

<style lang="scss">
/* ==========================================================================
7. Chat Dark mode
========================================================================== */

.is-dark {
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
  .chat-content {
    padding: 0 5px !important;
  }

  .collapsed-messaging {
    display: none;
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  .chat-content {
    padding: 0 5px !important;
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
