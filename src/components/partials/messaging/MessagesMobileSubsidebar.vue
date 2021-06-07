<script setup lang="ts">
import { activeSidebar } from '/@src/state/activeSidebarState'
import { defineEmit, defineProps } from 'vue'

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

const emit = defineEmit(['selectConversation'])
</script>

<template>
  <div class="mobile-subsidebar is-messaging">
    <div class="inner">
      <div class="sidebar-title">
        <h3>Messages</h3>
      </div>

      <ul id="mobile-conversations-list" class="animated preFadeInUp fadeInUp">
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
@import '../../../scss/abstracts/_variables.scss';
@import '../../../scss/layout/_sidebar-mobile.scss';
</style>
