/**
 * This is your client vue app entrypoint
 * Its loaded because it is referenced in the vite
 * entrypoint file (index.html located at the root of this project)
 *
 * External css/js files will be loaded as dependencies.
 * You may want to check the vite configuration.
 * Some plugins will register virtual components or lazyload other for us.
 *
 * @see /index.html
 * @see /vite.config.ts
 * @see /app.ts
 * @see /plugins/*.ts
 */
import { createApp } from './app'

/**
 * We create our app and mount it when it is ready
 *
 * @see /@src/app.ts for more detailed informations
 */
createApp().then(async (vuero) => {
  // @ts-ignore
  const initialState = window.__vuero__
  // restore pinia state from SSR if any
  if (typeof initialState?.pinia === 'object') {
    vuero.pinia.state.value = initialState.pinia
  }

  // wait for the app to be ready
  await vuero.router.isReady()

  // finaly mount the app to the DOM
  vuero.app.mount('#app')
})
