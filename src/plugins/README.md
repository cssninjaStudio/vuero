# Vuero Plugins

You can create plugins for Vuero simply by creating `*.ts` files in this directory.

All plugins will be registered automatically before the app runs.

Here is a plugin boilerplate:

```ts
import { definePlugin } from '/@src/app'

export default definePlugin(async ({ app, router, head, pinia }) => {
  // run your plugin code here

  // If you need to perform conditional logic based on SSR vs. client, you can use
  if (import.meta.env.SSR) {
    // ... server only logic
  }

  // You can do the same for client side logic
  if (!import.meta.env.SSR) {
    // ... client only logic

    // you can load libraries that won't work on server side asynchronously
    import('client-only-library').then((module) => {
      // ... do stuff with the module
    })
  }
})
```
