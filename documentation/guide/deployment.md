---
outline: deep
---

# Deployment

## Build your app

Once you are done with your app, you can build it for production with the following command:

```bash
pnpm build # or bun build, npm run build, yarn build

# or in workspace
# pnpm --filter=app build
```

This will create a `dist/` folder with all the files needed to deploy your app. 

The build process is done by vite and rollup, which will split your code into chunks and optimize it for production. You can use the `vite.config.ts` file to customize the build process.

```ts
// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    // ...
  }
})
```

> Useful links:  
> - https://vitejs.dev/guide/build.html
> - https://vitejs.dev/config/build-options.html
> - https://rollupjs.org/configuration-options/


## Preview before deployment

Once the build is done, preview the result before deploying to ensure everything is working as expected.

```bash
pnpm start # or bun start, npm run start, yarn start

# or in workspace
# pnpm --filter=app start
```

::: info
To ensure that the preview is as close as possible to the production build, install only production dependencies before previewing the app.

```bash
# build the app

rm -rf node_modules/
pnpm install --prod # or bun install -p, npm install --omit=dev, yarn install --prod

# preview the app
```
:::

Depending on the quickstart you used, this command will run either:
- a static server if you used the SPA quickstarter or generated SSG version _(using [`serve`](https://github.com/vercel/serve) package)_
- or a Node.js server when using SSR quickstarter _(see [`SSR Guide`](/guide/ssr) for more details)_

The preview is available at `http://localhost:3000/` by default, be sure to clean your browser cache before previewing the app as it can conflict with the development build, prefer using an incognito window for better results.


## Using docker

All quickstarters (except electron) contains `Dockerfile` and `docker-compose.yml` files so you can easily use docker to deploy.

The containers are based on [Bitnami images](https://github.com/bitnami/containers) which has security updates and ensure runing as non-root user. It also use multi-stage build process so it only contains what is needed to run production builds.  

### Set your package manager

By default, images are setup to install packages with `pnpm` and `--no-lockfile` because quickstarters does not ship lockfiles (to allow you to choose package manager you want). You need to update the `Dockerfile` to use same package manager you use in developmement. In addition, we recommend you to set the `packageManager` field in package.json so corepack will ensure to use fixed version of npm, pnpm or yarn. Here is an example to use npm:

:::code-group
```Dockerfile [Dockerfile]
FROM bitnami/node:20 AS build
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate // [!code --]
RUN corepack enable && corepack prepare npm@latest --activate // [!code ++]

COPY package.json ./
COPY package-lock.json ./ // [!code ++]
# /!\ note: use your own package manager, // [!code --]
# and remove the `--no-lockfile` flag (don't forget to create lockfile) // [!code --]
RUN pnpm install --no-lockfile // [!code --]
RUN npm ci // [!code ++]
```
```jsonc [package.json]
{
  // ...
  "packageManager": "npm@10.5.0", // [!code ++]
  // ...
}
```
:::

### Build and start your containers

First, build your app image:

:::code-group
```bash [docker compose]
docker compose --pull --project-name my-vuero-app build
```
```bash [docker]
docker build --pull --tag my-vuero-app:1.0.0 .
```
:::
> Notice that we used `--pull` argument, this will update our base images before building

Then you can run your images with docker:

:::code-group
```bash [docker compose]
docker compose --project-name my-vuero-app up --detach
```
```bash [docker]
docker run --detach --restart unless-stopped -p 3000:3000 my-frontend-app:1.0.0
```
:::
> The `--detach` argument will create background process, and `--restart unless-stopped` will restart the container if it stops unexpectedly.

The app will be available at `http://localhost:3000/` by default.

When using SPA quickstarter, docker will run a static server using nginx (you can customize the `nginx/spa.conf` file). When using SSR quickstarter, docker will run a Node.js server (see [`SSR Guide`](/guide/ssr) for more details).

> Useful links:  
> - https://hub.docker.com/r/bitnami/node/
> - https://hub.docker.com/r/bitnami/nginx/
> - https://github.com/bitnami/containers
> - https://docs.docker.com/compose/
> - https://docs.docker.com/build/building/multi-stage/

## Debug build

When you build your app, it is optimized for production, which means that the code is minified and the source maps are removed. This can make debugging difficult.

You can change this behavior by updating vite config to make it easier to debug your app:

```ts
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    minify: false,
    sourcemap: true,
    rollupOptions: {
      output: {
        entryFileNames: '[name]-[hash].js',
        chunkFileNames: 'assets/_/[name].js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
})
```

> Take a look at the demo app vite config file, it uses `DEBUG` environment variable to enable/disable debug build.

### Compile time flags

In addition to build options, you can use compile time flags to enable/disable debug features in your app. Using compile time flags allows minification tools to remove dead code, which is not possible with runtime flags.


```ts
import { defineConfig } from 'vite'

export default defineConfig({
  ssr: {
    // libraries that uses compile time flags should be marked as no external
    noExternal: ['vue'],
  },
  define: {
    // enable vue devtools in production
    __VUE_PROD_DEVTOOLS__: 'true',
    // enable hydration mismatch details in production
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ : 'true',
  },
})
```
> In the demo app, we created `__VUERO_SSR_BUILD__` to be able to detect if the app is running in SSR mode or not, and use it in `useUserToken` composable example.

> Useful links:  
> - https://vitejs.dev/config/shared-options.html#define
> - https://vuejs.org/api/compile-time-flags.html
> - https://vue-i18n.intlify.dev/guide/advanced/optimization.html#feature-build-flags

