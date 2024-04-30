import type { VueroInitialState } from '/@server/types'

declare module 'h3' {
  interface H3EventContext {
    initialState: VueroInitialState
  }
}
export {}
