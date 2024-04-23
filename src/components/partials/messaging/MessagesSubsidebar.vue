<script setup lang="ts">
const emit = defineEmits<{
  (e: 'addConversation'): void
  (e: 'selectConversation', id: number): void
}>()

const props = withDefaults(
  defineProps<{
    conversations?: any[]
    selectedConversationId?: number
  }>(),
  {
    conversations: () => [],
    selectedConversationId: 0,
  },
)

const { onceError } = useImageError()
// const sidebar = useSidebar()

const {
  messageSubsidebarOpen,
} = inject<{
  messageSubsidebarOpen: Ref<boolean>
}>('chat-page', {
  messageSubsidebarOpen: ref(false),
})
</script>

<template>
  <div class="sidebar-panel is-messages">
    <div class="messages-header">
      <h3 class="no-mb">
        Chat
      </h3>

      <div
        class="vuero-hamburger nav-trigger push-resize messages-push"
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
    </div>
    <div class="inner">
      <div class="is-new-conversation">
        <button
          id="start-conversation"
          class="button v-button is-primary is-raised is-rounded is-fullwidth"
          @click="() => emit('addConversation')"
        >
          <VIcon
            icon="lucide:plus"
          />
          <span>New Conversation</span>
        </button>
      </div>
      <ul
        id="conversations-list"
        class="animated preFadeInUp fadeInUp"
      >
        <li
          v-for="conversation in props.conversations"
          :key="conversation.id"
          :class="[props.selectedConversationId === conversation.id && 'is-active']"
          tabindex="0"
          role="button"
          @keydown.enter.prevent="() => emit('selectConversation', conversation.id)"
          @click="() => emit('selectConversation', conversation.id)"
        >
          <div class="recent-user">
            <div class="user-container">
              <img
                class="is-user"
                :src="conversation.avatar"
                alt=""
                @error.once="onceError($event, 150)"
              >
            </div>
            <div class="recipient-meta">
              <span>{{ conversation.name }}</span>
              <span>{{ conversation.lastMessage }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/layout/sidebar-panel';
</style>
