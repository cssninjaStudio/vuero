# Vuero - Workspace

[![cssninja-discord](https://img.shields.io/discord/785473098069311510?label=join%20us%20on%20discord&color=6944EC)](https://go.cssninja.io/discord)

This repository contains the source code for the Vuero project. It is a pnpm workspace that contains the following packages:

- `demo`: The demo application
- `app`: Vuero SPA (client only) quickstarter
- `app-ssr`: Vuero SSR quickstarter
- `app-electron`: Vuero Electron quickstarter
- `app-nuxt`: Vuero Nuxt quickstarter

> [!NOTE]
> Read the [online documentation](https://docs.cssninja.io/vuero) for more information on how to use the packages.


## Installation

To install the dependencies for all the packages in the workspace, use the following command:

```bash
pnpm install
```

## Run commands in packages

To run commands in a specific package, use the following command:

```bash
# pnpm --filter=<package-name> <command>
pnpm --filter=demo dev
```

You can also use `pnpm` directly in the package directory:

```bash
cd packages/demo
pnpm dev
```

Linters and formatters are disabled when opening the workspace in VSCode. To enable them, open the workspace in the root directory of the package you want to work on.

```bash
# Open a project in VSCode
code packages/demo
```