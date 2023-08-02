import type { $Fetch } from 'ofetch'

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

export async function fetchMessages(
  $fetch: $Fetch,
  conversationId: number,
  start = 0,
  limit = 20
): Promise<{ messages: Message[]; count: number }> {
  let count = 0

  const { _data: messages = [], headers } = await $fetch.raw<Message[]>(
    `/api/conversations/${conversationId}/messages?_start=${start}&_limit=${limit}`
  )

  if (headers.has('X-Total-Count')) {
    count = parseInt(headers.get('X-Total-Count') ?? '0')
  }

  return { messages, count }
}
