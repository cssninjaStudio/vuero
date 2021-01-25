<script setup lang="ts">
import { defineEmit, defineProps } from 'vue'

const props = defineProps({
  conversationId: {
    type: Number,
    default: 0,
  },
  conversations: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmit(['update:conversationId'])
</script>

<template>
  <!--Conversations list-->
  <div class="conversation-area" data-simplebar>
    <!--Conversation-->
    <div
      v-for="conversation in conversations"
      :key="conversation.id"
      class="conversation"
      :class="[conversationId === conversation.id && 'active']"
      @click="() => emit('update:conversationId', conversation.id)"
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

    <!--Conversation-->
    <div
      class="conversation active"
      data-conversation-id="3"
      data-detail-name="Work Group"
      data-detail-text="7 people are chatting"
    >
      <div class="v-avatar">
        <span class="avatar is-fake is-h-purple">
          <span>WG</span>
        </span>
      </div>
      <div class="conversation-detail">
        <div class="conversation-username">Work Group</div>
        <div class="conversation-content">
          <span class="conversation-message"
            >This is getting funnier and funnier. You gotta love dat team
            🥰</span
          >
          <span class="conversation-date">31m</span>
        </div>
      </div>
    </div>
  </div>
</template>
