<script setup lang="ts">
import { useSidebar } from '/@src/stores/sidebar'
import { onceImageErrored } from '/@src/utils/via-placeholder'

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
  }
)
const sidebar = useSidebar()
</script>

<template>
  <div
    :class="[sidebar.active !== 'messages' && 'is-active']"
    class="collapsed-messaging"
  >
    <div class="inner">
      <div class="collapsed-menu">
        <div
          class="vuero-hamburger nav-trigger push-resize messages-push"
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
      </div>
      <div class="collapsed-add">
        <a
          class="button collapse-add-button is-primary"
          tabindex="0"
          role="button"
          @keydown.space.prevent="emit('addConversation')"
          @click="() => emit('addConversation')"
        >
          <i aria-hidden="true" class="iconify" data-icon="feather:plus"></i>
        </a>
      </div>
      <ul class="collapsed-conversations">
        <li
          v-for="conversation in props.conversations"
          :key="conversation.id"
          :class="[props.selectedConversationId === conversation.id && 'is-active']"
          tabindex="0"
          role="button"
          @keydown.space.prevent="() => emit('selectConversation', conversation.id)"
          @click="() => emit('selectConversation', conversation.id)"
        >
          <div class="user-container">
            <img
              class="is-user"
              :src="conversation.avatar"
              alt=""
              @error.once="onceImageErrored(150)"
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/layout/sidebar-panel';
</style>
