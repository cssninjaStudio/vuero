import type { $Fetch } from 'ofetch'

export interface Conversation {
  id: number
  name: string
  lastMessage: string
  unreadMessages: boolean
  avatar: string
}

export async function fetchConversations(
  $fetch: $Fetch,
  start = 0,
  limit = 20
): Promise<{ conversations: Conversation[]; count: number }> {
  let count = 0

  const { _data: conversations = [], headers } = await $fetch.raw<Conversation[]>(
    `/api/conversations`,
    {
      query: {
        _start: start,
        _limit: limit,
      },
    }
  )

  if (headers.has('X-Total-Count')) {
    count = parseInt(headers.get('X-Total-Count') ?? '0')
  }

  return { conversations, count }
}
