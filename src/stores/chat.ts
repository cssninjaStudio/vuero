/**
 * This is a store that hold the messaging-v1 state
 * It uses the useApi composition component to make the api calls
 *
 * @see /src/pages/messaging-v1.vue
 * @see /src/composable/useApi.ts
 * @see /src/components/partials/chat/*.vue
 * @see /src/utils/api/chat
 */

import { ref, computed } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'

import type { Conversation, Message } from '/@src/utils/api/chat'
import { fetchConversations, fetchMessages } from '/@src/utils/api/chat'
import { useApi } from '/@src/composable/useApi'

const defaultConversation: Conversation = {
  id: 0,
  name: '',
  lastMessage: '',
  unreadMessages: false,
  avatar: '/images/avatars/placeholder.jpg',
}

export const useChat = defineStore('chat', () => {
  const api = useApi()
  const conversations = ref<Conversation[]>([])
  const messages = ref<Message[]>([])
  const selectedConversationId = ref(0)
  const addConversationOpen = ref(false)
  const mobileConversationDetailsOpen = ref(false)
  const loading = ref(false)

  const selectedConversation = computed(() => {
    const conversation = conversations.value?.find(
      (item) => item.id === selectedConversationId.value
    )

    if (!conversation) {
      return defaultConversation
    } else {
      return conversation
    }
  })

  async function loadConversations(start = 0, limit = 10) {
    if (loading.value) return

    loading.value = true

    try {
      const response = await fetchConversations(api, start, limit)
      conversations.value = response.conversations ?? []
    } finally {
      loading.value = false
    }
  }

  async function selectConversastion(conversationId: number) {
    if (loading.value) return

    loading.value = true

    try {
      const response = await fetchMessages(api, conversationId)
      selectedConversationId.value = conversationId
      messages.value = response.messages
    } finally {
      loading.value = false
    }
  }

  function unselectConversation() {
    selectedConversationId.value = 0
    messages.value = []
  }

  function setAddConversationOpen(value: boolean) {
    addConversationOpen.value = value
  }

  function setMobileConversationDetailsOpen(value: boolean) {
    mobileConversationDetailsOpen.value = value
  }

  return {
    conversations,
    messages,
    selectedConversation,
    selectedConversationId,
    addConversationOpen,
    mobileConversationDetailsOpen,
    loading,
    loadConversations,
    setAddConversationOpen,
    setMobileConversationDetailsOpen,
    selectConversastion,
    unselectConversation,
  } as const
})

/**
 * Pinia supports Hot Module replacement so you can edit your stores and
 * interact with them directly in your app without reloading the page.
 *
 * @see https://pinia.esm.dev/cookbook/hot-module-replacement.html
 * @see https://vitejs.dev/guide/api-hmr.html
 */
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useChat, import.meta.hot))
}
