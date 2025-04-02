---
outline: deep
---

# Server Side Rendering

Using Server Side Rendering (SSR) allow to have better time to content and SEO, as the content is already available when the user lands on the page. It addition, as you are on the server, you can access the database, file system, and other dynamic data sources to render up-to-date content.

It comes with some trade-offs, as it requires more resources and is more complex to setup than SPA or SSG. It also requires to take care of reactivity and other Vue features that are not available on the server: by default, reactivity is disabled during SSR for better performance. This means that `ref`, `reactive`, `watch`, `computed`, etc. will not be updated during server rendering.

Vuero comes with a SSR quickstarter that is ready to use and `<ClientOnly>` component that render only on the client side.

::: info
SSR is required for Server Side Generation (SSG) to work.
:::

> Useful links:  
> - https://vuejs.org/guide/scaling-up/ssr.html#writing-ssr-friendly-code
> - https://vitepress.dev/guide/ssr-compat

## Server customization

Vuero SSR server is made with [h3](https://h3.unjs.io) which is a HTTP server framework for any JavaScript runtime. In development, `vite` is used as middleware to serve the frontend with hot module replacement.

### Overview

```text
├─ server/
│  ├─ handlers/           # custom h3 event handlers
│  │   └─ hello-world.ts
│  ├─ serve/
│  ├─ generate/
│  ├─ config.ts           # server configuration
│  ├─ generate.ts         # SSG cli command
│  ├─ serve.ts            # SSR cli command
│  ├─ types.ts
│  └─ utils.ts
└─ src/
   └─ entry-server.ts
```

> Useful links:  
> - https://h3.unjs.io/
> - https://vuejs.org/guide/scaling-up/ssr.html#basic-tutorial
> - https://vitejs.dev/guide/ssr.html

### Custom h3 events handlers

You can create custom server routes by registering h3 event handlers in the `server/config.ts` file, and then create the handler in the `server/handlers` folder.

The routes created will be accessible via same domain as the app, for example `http://localhost:3000/api/hello-world`.

:::code-group
```ts [server/config.ts]
import type { App } from 'h3'
import { defineLazyEventHandler } from 'h3'

export function extendH3App(app: App) {
  app.use('/api/hello-world', defineLazyEventHandler(
    () => import('./handlers/hello-world').then(m => m.default)
  ))
}
```
```ts [server/handlers/hello-world.ts]
import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return 'Hello World!'
})
```
:::

> Useful links:  
> - https://h3.unjs.io/guide/event-handler

## Server Side Generation

The SSG build will generate SSR version of your app and pre-render every routes to static HTML files, making each page to be an entry point of your app.

This is useful for SEO and performance, as the content is already available when the user lands on the page. It also has the benefit of being simple to deploy, as it can be served as static files.

Note that SSG is not suitable for dynamic content, as it will be generated at build time and will not be updated until the next build.

:::code-group
```bash [app-ssr]
pnpm generate # or bun generate, npm run generate, yarn generate

# or in workspace
# pnpm --filter=app-ssr generate
```
```bash [demo]
pnpm ssg:build # or bun ssg:build, npm run ssg:build, yarn ssg:build

# or in workspace
# pnpm --filter=demo ssg:build
```
:::

### Pre-render dynamic routes

If you have route with dynamic parameters, you need to edit the `server/config.ts` file to tell Vuero how to generate them, otherwise they will not be pre-rendered.

```ts
export function generateStaticParams(): StaticParams {
  return {
    // keys are the route path
    '/subpages/jobs/[slug]': async () => {
      // here you can fetch data from an API
      // await fetch('...
      return [
        { slug: 'job-1' }, // pre-render /subpages/jobs/job-1
        { slug: 'job-2' }, // pre-render /subpages/jobs/job-1
        { slug: 'job-3' }, // pre-render /subpages/jobs/job-1
      ]
    },
    
    // Rest parameters requires to return an array
    '/pages/[...path]': () => [
      { path: ['a', 'b', 'c'] }, // pre-render /pages/a/b/c
      { slug: ['a', 'b', 'd'] }, // pre-render /pages/a/b/d
    ],
  }
}
```
