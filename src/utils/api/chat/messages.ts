import type { AxiosInstance } from 'axios'

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
  api: AxiosInstance,
  conversationId: number,
  start = 0,
  limit = 20
): Promise<{ messages: Message[]; count: number }> {
  let count = 0

  const { data: messages, headers } = await api.get<Message[]>(
    `/api/conversations/${conversationId}/messages?_start=${start}&_limit=${limit}`
  )

  if ('X-Total-Count' in headers) {
    count = parseInt(headers['X-Total-Count'] ?? '0')
  }

  return { messages, count }
}
