<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'

const emit = defineEmits<{
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
  }
)
</script>

<template>
  <div class="mobile-subsidebar is-messaging">
    <div class="inner">
      <div class="sidebar-title">
        <h3>Messages</h3>
      </div>

      <ul id="mobile-conversations-list" class="animated preFadeInUp fadeInUp">
        <li
          v-for="conversation in props.conversations"
          :key="conversation.id"
          role="button"
          :class="[props.selectedConversationId === conversation.id && 'is-active']"
          tabindex="0"
          @keydown.space.prevent="() => emit('selectConversation', conversation.id)"
          @click="() => emit('selectConversation', conversation.id)"
        >
          <div class="recent-user">
            <div class="user-container">
              <img
                class="is-user"
                :src="conversation.avatar"
                alt=""
                @error.once="onceImageErrored(150)"
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
