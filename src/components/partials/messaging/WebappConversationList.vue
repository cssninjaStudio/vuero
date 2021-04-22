<script setup lang="ts">
import { defineEmit, defineProps } from 'vue'

const props = defineProps({
  conversationId: {
    type: Number,
    default: 0,
  },
  mobileConversationListOpen: {
    type: Boolean,
    default: false,
  },
  conversations: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmit(['update:conversationId', 'toggleMobileConversation'])
</script>

<template>
  <div
    :class="[mobileConversationListOpen && 'is-active']"
    class="conversation-area"
    data-simplebar
  >
    <!--Conversation-->
    <div
      v-for="conversation in conversations"
      :key="conversation.id"
      class="conversation"
      :class="[conversationId === conversation.id && 'active']"
      @click="
        () => {
          emit('update:conversationId', conversation.id)
          emit('toggleMobileConversation')
        }
      "
    >
      <V-Avatar
        :picture="conversation.avatar.picture"
        :color="conversation.avatar.color"
        :initials="conversation.avatar.initials"
      />
      <div class="conversation-detail">
        <div class="conversation-username">{{ conversation.name }}</div>
        <div class="conversation-content">
          <span class="conversation-message">{{
            conversation.lastMessagePreview
          }}</span>
          <span class="conversation-date">{{ conversation.lastMessage }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
