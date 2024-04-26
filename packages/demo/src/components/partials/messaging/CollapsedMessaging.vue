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

const {
  messageSubsidebarOpen,
} = inject<{
  messageSubsidebarOpen: Ref<boolean>
}>('chat-page', {
  messageSubsidebarOpen: ref(false),
})
</script>

<template>
  <div
    :class="[!messageSubsidebarOpen && 'is-active']"
    class="collapsed-messaging"
  >
    <div class="inner">
      <div class="collapsed-menu">
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
      <div class="collapsed-add">
        <a
          class="button collapse-add-button is-primary"
          tabindex="0"
          role="button"
          @keydown.enter.prevent="emit('addConversation')"
          @click="() => emit('addConversation')"
        >
          <VIcon
            icon="lucide:plus"
          />
        </a>
      </div>
      <ul class="collapsed-conversations">
        <li
          v-for="conversation in props.conversations"
          :key="conversation.id"
          :class="[props.selectedConversationId === conversation.id && 'is-active']"
          tabindex="0"
          role="button"
          @keydown.enter.prevent="() => emit('selectConversation', conversation.id)"
          @click="() => emit('selectConversation', conversation.id)"
        >
          <div class="user-container">
            <img
              class="is-user"
              :src="conversation.avatar"
              alt=""
              @error.once="onceError($event, 150)"
            >
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/layout/sidebar-panel';
</style>
