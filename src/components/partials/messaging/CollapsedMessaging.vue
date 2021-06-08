<script setup lang="ts">
import { defineProps, defineEmit } from 'vue'
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
    :class="[activeSidebar !== 'messages' && 'is-active']"
    class="collapsed-messaging"
  >
    <div class="inner">
      <div class="collapsed-menu">
        <div
          class="vuero-hamburger nav-trigger push-resize messages-push"
          @click="toggleSidebar('messages')"
        >
          <span class="menu-toggle has-chevron">
            <span
              :class="[activeSidebar !== 'none' && 'active']"
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
      </div>
      <div class="collapsed-add">
        <a
          class="button collapse-add-button is-primary"
          @click="() => emit('addConversation')"
        >
          <i aria-hidden="true" class="iconify" data-icon="feather:plus"></i>
        </a>
      </div>
      <ul class="collapsed-conversations">
        <li
          v-for="conversation in conversations"
          :key="conversation.id"
          :class="[selectedConversationId === conversation.id && 'is-active']"
          @click="() => emit('selectConversation', conversation.id)"
        >
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
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../scss/abstracts/_variables.scss';
@import '../../../scss/layout/_sidebar-panel.scss';
</style>
