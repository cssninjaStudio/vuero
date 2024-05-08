# Vuero - The demo application

[![cssninja-discord](https://img.shields.io/discord/785473098069311510?label=join%20us%20on%20discord&color=6944EC)](https://go.cssninja.io/discord)

This repository contains the source code for the Vuero live demo at https://vuero.cssninja.io.


## 💡 Prerequisites

Read the [online documentation](https://docs.cssninja.io/vuero?utm_source=readme) for more information on how to use the packages.

1. [Nodejs LTS](https://nodejs.org/en/) _(LTS or Current version)_ installed
2. (recommended) [VSCode](https://code.visualstudio.com/) with [Vue Extension](https://marketplace.visualstudio.com/items?itemName=vue.volar)

> You can also give a try to [Bun](https://bun.sh) as an alternative to Node.js.

### Quickstart

```bash
# Check dependencies
node -v # v20.x.x
corepack enable
corepack prepare pnpm@latest --activate
pnpm -v # v9.x.x

# Start project
pnpm install
pnpm dev # or any other command below
```
> Read more about installation on [https://docs.cssninja.io/vuero/getting-started/installation.html](https://docs.cssninja.io/vuero/getting-started/installation.html?utm_source=readme)


## 🤖 Available commands

| Command              | Description                                |
|----------------------|--------------------------------------------|
| `dev`                | Start the development server in SPA mode   |
| `build`              | Build SPA mode for production              |
| `start`              | Run `start:vite` and `start:json-server`   |
| `start:vite`         | Serve static `./dist` folder (for SPA/SSG) |
| `start:json-server`  | Start fake static API                      |
| `ssr:dev`            | Start the development server in SSR mode   |
| `ssr:build`          | Build SSR mode for production              |
| `ssr:start`          | Start the SSR server in production mode    |
| `ssg:build`          | Build SSG mode for production              |
| `ssg:start`          | Start the SSG server in production mode    |
| `lint`               | Run eslint and stylelint in fix mode       |
| `test`               | Run lint and typescript checker            |


---

You can also have access to the [private github repo](https://github.com/cssninjaStudio/vuero), so you can view the source code history and submit issues. To do so, create an account and verify your envato purchase on [https://cssninja.io/faq/github-access](https://cssninja.io/faq/github-access).

