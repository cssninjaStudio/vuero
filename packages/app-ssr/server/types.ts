import type { H3Event } from 'h3'

export interface VueroSSRContext extends Record<string, any> {
  event: H3Event
}

export interface VueroInitialState extends Record<string, any> {
  pinia?: Record<string, any>
}

export type VueroServerRender = (ctx: {
  event: H3Event
  manifest: Record<string, any>
  template: string
}) => Promise<string | ReadableStream>

type PageParam = Record<string, string | string[]>
export type StaticParams = Record<
  string,
  () => PageParam[] | Promise<PageParam[]>
>
