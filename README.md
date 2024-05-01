# Vuero - Monorepo

[![cssninja-discord](https://img.shields.io/discord/785473098069311510?label=join%20us%20on%20discord&color=6944EC)](https://go.cssninja.io/discord)

This repository contains the source code for the Vuero project. It is a pnpm workspace that contains the following packages:

- `demo`: The demo application
- `app`: Vuero client quickstarter
- `app-ssr`: Vuero SSR quickstarter
- `app-electron`: Vuero electron quickstarter

> [!NOTE]
> Read the [online documentation](https://docs.cssninja.io/vuero) for more information on how to use the packages.


## Installation

To install the dependencies for all the packages in the workspace, you can use the following command:

```bash
pnpm install
```

## Run commands in dedicated package

To run commands in a specific package, you can use the following command:

```bash
# pnpm --filter=<package-name> <command>
pnpm --filter=demo dev
```