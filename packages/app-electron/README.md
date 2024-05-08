# Vuero - Vuero Electron quickstarter

[![cssninja-discord](https://img.shields.io/discord/785473098069311510?label=join%20us%20on%20discord&color=6944EC)](https://go.cssninja.io/discord)

This repository contains the quickstarter for the Vuero with Electron integration. It is a simple Vue 3 project with the necessary configuration to run as an Electron app.

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


### Useful links

- https://github.com/electron-vite/vite-plugin-electron
- https://github.com/electron-vite/electron-vite-vue
- https://vueuse.org/electron/README.html
- https://www.electron.build/


## 🤖 Available commands

| Command      | Description                                |
|--------------|--------------------------------------------|
| `dev`        | Start the development server with electron |
| `build`      | Build SPA mode and electron release        |
| `start`      | Serve static `./dist` folder               |
| `test`       | Run typescript checker                     |


---


You can also have access to the [private github repo](https://github.com/cssninjaStudio/vuero), so you can view the source code history and submit issues. To do so, create an account and verify your envato purchase on [https://cssninja.io/faq/github-access](https://cssninja.io/faq/github-access).

