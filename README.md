# Vuero Vue3 - Multipurpose Admin and Webapp Template

[![cssninja-discord](https://img.shields.io/discord/785473098069311510?label=join%20us%20on%20discord&color=6944EC)](https://go.cssninja.io/discord)

## ▶️ Getting started

First of all, Thank you so much for purchasing this template and for being our loyal customer. You are awesome! You are entitled to get free lifetime updates to this product and support from the cssninjaStudio team directly. **Vuero** is a product built by [cssninjaStudio](https://cssninja.io/) and [Digisquad](https://digisquad.io/).

### Prerequisites

1. A recent web browser (Chrome, Edge, Firefox, ...)
2. [Nodejs LTS](https://nodejs.org/en/) _(> 16.x with npm >8)_ installed
3. Knowledge with [Typescript](https://github.com/microsoft/typescript) _(> 4.x)_ (should not be installed globally)
4. (recommended) [VSCode](https://code.visualstudio.com/) with [Volar](https://marketplace.visualstudio.com/items?itemName=vue.volar)

#### Install nodejs

1. Check if you already have Node.js installed. Run this command in your terminal:

```bash
node -v
```

If node is not installed on your machine, you can go to the official nodejs.org website, and choose the version depending on your operating system:

- <a href="https://nodejs.org/en/download/" target="_blank">Install node.js and npm on Windows, Linux or Mac OSX</a>

2. Enable pnpm with corepack

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

> _corepack is installed with node from **v16.13.x**, if your version is below, install it with: `npm install -g corepack`_

To setup the template and start installing project dependencies, run one of the following commands:

```bash
# using pnpm (recommended)
pnpm install
```

Note that you can also use other package manager (npm or yarn) but we recommend using pnpm:

```bash
# using npm
npm install

# using yarn
yarn install
```

## 🔃 Run a development server

To start the development server, run one of the following commands:

```bash
# using pnpm (recommended)
pnpm dev
```

Using npm or yarn

```bash
# using npm
npm run dev

# using yarn
yarn dev
```

This will run the `dev` script from the `package.json` file.
You will notice that two servers are started: one for the frontend (vite) and one for the backend (json-server).

Vite is the build tool that we use to compile the frontend code.
It replace webpack and vue-cli, used in vue 2 ecosystem.
You can only start vite with `dev:vite`  
Read more about it [on vitejs.dev](https://vitejs.dev/)

Json-server is a fake REST-API server that we use to simulate the backend.
The configuration and the database are in the `/json-server` directory.
You can find how we use it in the `/src/pages/messaging-v1.vue` file and the `/src/composable/useChatApi.ts`  
You can only start vite with `dev:json-server`  
Read more about it [on github.com/typicode/json-server](https://github.com/typicode/json-server)

> - Access the Vuero frontend in your browser at [http://localhost:3000/](http://localhost:3000/)
> - Access the Json-server backend in your browser at [http://localhost:8080/](http://localhost:8080/)

## 💡 What to do next ?

Our online documentation is a great place to learn how to use Vuero.
We try to keep it mostly up to date, so you can always find the latest information.

> We also have a great [discord community](https://go.cssninja.io/discord) where you can ask questions and show your work.

### [Vuero on docs.cssninja.io](https://docs.cssninja.io/vuero?utm_source=readme)

- [Setup your project](https://docs.cssninja.io/vuero/guide/setup-your-project.html?utm_source=readme)
- [Customizing Vuero](https://docs.cssninja.io/vuero/guide/customizing-vuero.html?utm_source=readme)
- [Common Issues](https://docs.cssninja.io/vuero/help/common-issues.html?utm_source=readme)
- [Customer support](https://docs.cssninja.io/vuero/help/customer-support.html?utm_source=readme)
- [Changelog](https://docs.cssninja.io/vuero/guide/changelog?utm_source=readme)

We try to keep Vuero dependencies and best practices up to dates. We also take care of user requests, either by implementing requested features, fixing bugs or improving the documentation.

You can also have [access to the private github access](https://cssninja.io/faq/github-access), so you can view the source code history and submit issues. To do so, create an account and verify your envato purchase on [https://cssninja.io/](https://cssninja.io/faq/github-access).

### Useful links

- http://vuejs.org/
  - https://vuejs.org/guide/extras/composition-api-faq.html
  - https://vuejs.org/api/#composition-api
  - https://vuejs.org/api/sfc-script-setup.html
  - https://vuejs.org/guide/typescript/overview.html
- https://vitejs.dev/
- https://pinia.esm.dev/
- https://vueuse.org/
