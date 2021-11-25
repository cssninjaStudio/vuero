/**
 * This is a composable function (reusable component) that handle chat api calls.
 *
 * It can be used as standalone to force api call, but it is also used
 * as a part of the useChat pinia store.
 * Note that errors are not catched here, so you need to handle them in your components.
 *
 * The api used is run with the local json-server (yarn dev:json-server)
 *
 * @see /src/stores/chat.ts
 */

import { ref } from 'vue'
import { createSharedComposable } from '@vueuse/core'

import { useApi } from './useApi'

export interface Conversation {
  id: number
  name: string
  lastMessage: string
  unreadMessages: boolean
  avatar: string
}

export interface Message {
  id: number
  conversationId: number
  messageId: number
  type: 'msg' | 'image' | 'imagelink' | 'system'
  sender: string | null
  avatar: string | null
  content: {
    time: string | null
    text?: string
    subtext?: string
    image_url?: string
    link_image?: string
    link_badge?: string
  }
}

export const useChatApi = createSharedComposable(() => {
  const api = useApi()
  const loading = ref(false)

  async function fetchConversations(start = 0, limit = 10) {
    loading.value = true

    try {
      let count = 0
      const { data: conversations, headers } = await api.get<Conversation[]>(
        `/api/conversations?_start=${start}&_limit=${limit}`
      )

      if ('X-Total-Count' in headers) {
        count = parseInt(headers['X-Total-Count'])
      }

      return { conversations, count }
    } finally {
      loading.value = false
    }
  }

  async function fetchMessages(conversationId: number, start = 0, limit = 20) {
    loading.value = true

    try {
      let count = 0
      const { data: messages, headers } = await api.get<Message[]>(
        `/api/conversations/${conversationId}/messages?_start=${start}&_limit=${limit}`
      )

      if ('X-Total-Count' in headers) {
        count = parseInt(headers['X-Total-Count'])
      }

      return { messages, count }
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    fetchConversations,
    fetchMessages,
  } as const
})
