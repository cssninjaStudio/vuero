<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useChat } from '/@src/stores/chat'
import { useSidebar } from '/@src/stores/sidebar'
import { useLayoutSwitcher } from '/@src/stores/layoutSwitcher'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { useNotyf } from '/@src/composable/useNotyf'

/**
 * The chat store keep the chat data across the app
 * It internaly uses the useApi composable to fetch the data (to the json-server)
 */
const chat = useChat()

// Those utilities are used to manage the layout
const layoutSwitcher = useLayoutSwitcher()
const viewWrapper = useViewWrapper()
const sidebar = useSidebar()
const notyf = useNotyf()

// onMounted is a composition hook that is called when the component is mounted
onMounted(async () => {
  sidebar.setActive('messages')

  try {
    // Ask to the store to load conversations,
    // - chat.loading will be set to true while loading
    // - chat.conversations will be populated with the loaded conversations
    await chat.loadConversations()

    // When conversations are loaded, select last unread conversation to load its messages
    const lastReadConversation = chat.conversations.find(
      (conversation) => !conversation.unreadMessages
    )

    // Note that we do not await the messages to be loaded,
    // we have nothing to do with them here but it will continue to run in background
    if (lastReadConversation) {
      chat.selectConversastion(lastReadConversation.id)
    } else {
      chat.selectConversastion(chat.conversations[0].id)
    }
  } catch (e: any) {
    // We always catch errors in the components, so we can display messages to the user
    // Here we just display the error with notyf popins
    notyf.error(e.message)
    console.error(e)
  }
})

// Click handler to display the addConversation inputs
function addConversation() {
  chat.unselectConversation()
  chat.setAddConversationOpen(!chat.addConversationOpen)
}

// Click handler to toggle the conversations
function selectConversation(id: number) {
  chat.setAddConversationOpen(false)
  chat.selectConversastion(id)
}

// We set the page headers
useHead({
  title: 'Messaging chat - Sidebar - Vuero',
})

// Here we set the viewWrapper push state to match the active sidebar
watchPostEffect(() => {
  viewWrapper.setPushed(sidebar.active === 'messages')
})
</script>

<template>
  <MessagingLayout :theme="layoutSwitcher.sidebarLayoutTheme">
    <template #default="{ isMobileSidebarOpen }">
      <Transition name="slide-x">
        <MessagesSubsidebar
          v-if="sidebar.active === 'messages'"
          :conversations="chat.conversations"
          :selected-conversation-id="chat.selectedConversationId"
          @add-conversation="addConversation"
          @select-conversation="selectConversation"
        />
      </Transition>
      <Transition name="slide-x">
        <MessagesMobileSubsidebar
          v-if="isMobileSidebarOpen"
          :conversations="chat.conversations"
          :selected-conversation-id="chat.selectedConversationId"
          @select-conversation="selectConversation"
        />
      </Transition>

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
                role="button"
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
                      role="button"
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

@media (width <= 767px) {
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
      inset-inline-start: 60px !important;
      border-inline-start: 1px var(--fade-grey-dark-3);
    }
  }
}
</style>
