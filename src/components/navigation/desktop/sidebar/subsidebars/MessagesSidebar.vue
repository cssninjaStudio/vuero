<script setup lang="ts">
import { defineEmit, defineProps } from 'vue'
import { activeSidebar, toggleSidebar } from '/@src/state/activeSidebarState'

const props = defineProps({
  conversations: {
    type: Array,
    default: () => [],
  },
  selectedConversationId: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmit(['addConversation', 'selectConversation'])
</script>

<template>
  <div
    id="messages-sidebar"
    :class="[activeSidebar === 'messages' && 'is-active']"
    class="sidebar-panel is-messages"
  >
    <div class="messages-header">
      <h3 class="no-mb">Chat</h3>

      <div
        class="huro-hamburger nav-trigger push-resize messages-push"
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
    </div>
    <div class="inner">
      <div class="is-new-conversation">
        <button
          id="start-conversation"
          class="button v-button is-primary is-raised is-rounded is-fullwidth"
          @click="() => emit('addConversation')"
        >
          <i class="iconify" data-icon="feather:plus"></i>
          <span>New Conversation</span>
        </button>
      </div>
      <ul id="conversations-list" class="animated preFadeInUp fadeInUp">
        <li
          v-for="conversation in conversations"
          :key="conversation.id"
          :class="[selectedConversationId === conversation.id && 'is-active']"
          @click="() => emit('selectConversation', conversation.id)"
        >
          <div class="recent-user">
            <div class="user-container">
              <img
                class="is-user"
                :src="conversation.avatar"
                alt=""
                @error.once="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
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
@import '../../../../../assets/scss/abstracts/_variables.scss';
@import '../../../../../assets/scss/layout/_sidebar-panel.scss';
</style>
