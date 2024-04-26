/* eslint-disable @typescript-eslint/consistent-type-imports */

declare interface Window {
  // initial state for the client when hydrating
  __vuero__: import('/@server/types').VueroInitialState
}
