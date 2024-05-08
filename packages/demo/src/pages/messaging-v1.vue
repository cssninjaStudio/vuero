<script setup lang="ts">
import Layout from '/@src/layouts/sidebar.vue'

/**
 * The chat store keep the chat data across the app
 * It internaly uses the useFetch composable to fetch the data (to the json-server)
 */
const chat = useChat()

const messageSubsidebarOpen = ref(false)

provide('chat-page', {
  messageSubsidebarOpen,
})

// Those utilities are used to manage the layout
const notyf = useNotyf()

// onMounted is a composition hook that is called when the component is mounted
onMounted(async () => {
  try {
    // Ask to the store to load conversations,
    // - chat.loading will be set to true while loading
    // - chat.conversations will be populated with the loaded conversations
    await chat.loadConversations()

    // When conversations are loaded, select last unread conversation to load its messages
    const lastReadConversation = chat.conversations.find(
      conversation => !conversation.unreadMessages,
    )

    // Note that we do not await the messages to be loaded,
    // we have nothing to do with them here but it will continue to run in background
    if (lastReadConversation) {
      chat.selectConversastion(lastReadConversation.id)
    }
    else {
      chat.selectConversastion(chat.conversations[0].id)
    }
  }
  catch (e: any) {
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

useHead({
  title: 'Messaging chat - Sidebar - Vuero',
})
</script>

<template>
  <Layout
    :class="[messageSubsidebarOpen && 'is-pushed-messages']"
    size="full"
  >
    <template #page-heading>
      <span />
    </template>

    <template #default="{ isMobileSidebarOpen }">
      <Transition name="slide-x">
        <MessagesSubsidebar
          v-if="messageSubsidebarOpen"
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
      <ViewWrapper
        id="vuero-messaging"
      >
        <PageContentWrapper>
          <PageContent class="chat-content">
            <div class="page-title has-text-centered is-hidden">
              <div
                class="vuero-hamburger nav-trigger push-resize"
                tabindex="0"
                role="button"
                @keydown.enter.prevent="messageSubsidebarOpen = !messageSubsidebarOpen"
                @click="messageSubsidebarOpen = !messageSubsidebarOpen"
              >
                <span class="menu-toggle has-chevron">
                  <span
                    :class="[messageSubsidebarOpen && 'active']"
                    class="icon-box-toggle"
                  >
                    <span class="rotate">
                      <i
                        aria-hidden="true"
                        class="icon-line-top"
                      />
                      <i
                        aria-hidden="true"
                        class="icon-line-center"
                      />
                      <i
                        aria-hidden="true"
                        class="icon-line-bottom"
                      />
                    </span>
                  </span>
                </span>
              </div>

              <h1 class="title is-5">
                Messages
              </h1>
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
                      >
                    </div>
                    <div class="icon">
                      <span>To:</span>
                    </div>
                    <div
                      class="hide"
                      tabindex="0"
                      role="button"
                      @keydown.enter.prevent="chat.setAddConversationOpen(false)"
                      @click="chat.setAddConversationOpen(false)"
                    >
                      <VIcon
                        icon="lucide:x"
                      />
                    </div>
                  </div>
                </div>
              </template>

              <template #body>
                <li
                  v-if="chat.messages.length === 0"
                  class="no-messages"
                >
                  <img
                    class="light-image"
                    src="/images/illustrations/placeholders/search-4.svg"
                    alt=""
                  >
                  <img
                    class="dark-image"
                    src="/images/illustrations/placeholders/search-4-dark.svg"
                    alt=""
                  >
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

                <li
                  class="chat-loader"
                  :class="[chat.loading && 'is-active']"
                >
                  <div class="loader is-loading" />
                </li>
              </template>

              <template #side>
                <ChatSide />
              </template>
            </ChatCard>

            <ChatPlaceholder />
          </PageContent>
        </PageContentWrapper>
      </ViewWrapper>

      <ChatSideFab />
    </template>
  </Layout>
</template>

<style lang="scss">
.is-dark {
  .collapsed-messaging {
    background: color-mix(in oklab, var(--dark-sidebar), white 5%);
    border-color: color-mix(in oklab, var(--dark-sidebar), white 5%) !important;

    .collapsed-conversations {
      li {
        &.is-active {
          background: color-mix(in oklab, var(--dark-sidebar), white 2%);
          border-color: var(--primary) !important;
        }

        .user-container {
          .is-badge,
          .is-count {
            border-color: color-mix(in oklab, var(--dark-sidebar), white 5%) !important;
          }
        }
      }
    }
  }
}

.is-pushed-messages {
  .view-wrapper {
    margin-inline-start: 160px !important;
    width: calc(100% - 160px) !important;
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

  .is-pushed-messages {
    .view-wrapper {
      margin-inline-start: 0 !important;
      width: 100% !important;
    }
  }
}

@media only screen and (device-width >= 768px) and (device-width <= 1024px) and (orientation: portrait) {
  .chat-content {
    padding: 0 5px !important;
  }

  .collapsed-messaging {
    display: none;
  }

  .is-pushed-messages {
    .view-wrapper {
      margin-inline-start: 0 !important;
      width: 100% !important;
    }
  }
}

@media only screen and (device-width >= 768px) and (device-width <= 1024px) and (orientation: landscape) {
  .collapsed-messaging {
    &.is-active {
      inset-inline-start: 60px !important;
      border-inline-start: 1px color-mix(in oklab, var(--fade-grey), black 3%);
    }
  }

  .is-pushed-messages {
    .view-wrapper {
      margin-inline-start: 140px !important;
      width: calc(100% - 140px) !important;
    }
  }
}
</style>
