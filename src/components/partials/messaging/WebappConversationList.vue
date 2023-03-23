<script setup lang="ts">
const emit = defineEmits<{
  (e: 'toggleMobileConversation'): void
  (e: 'update:conversationId', value: number): void
}>()

const props = withDefaults(
  defineProps<{
    conversations?: any[]
    conversationId?: number
    mobileConversationListOpen?: boolean
  }>(),
  {
    conversations: () => [],
    conversationId: 0,
  }
)
</script>

<template>
  <div
    :class="[props.mobileConversationListOpen && 'is-active']"
    class="conversation-area"
    data-simplebar
  >
    <!--Conversation-->
    <div
      v-for="conversation in props.conversations"
      :key="conversation.id"
      class="conversation"
      role="button"
      :class="[props.conversationId === conversation.id && 'active']"
      tabindex="0"
      @keydown.space.prevent="
        () => {
          emit('update:conversationId', conversation.id)
          emit('toggleMobileConversation')
        }
      "
      @click="
        () => {
          emit('update:conversationId', conversation.id)
          emit('toggleMobileConversation')
        }
      "
    >
      <VAvatar
        :picture="conversation.avatar.picture"
        :color="conversation.avatar.color"
        :initials="conversation.avatar.initials"
      />
      <div class="conversation-detail">
        <div class="conversation-username">{{ conversation.name }}</div>
        <div class="conversation-content">
          <span class="conversation-message">{{ conversation.lastMessagePreview }}</span>
          <span class="conversation-date">{{ conversation.lastMessage }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
