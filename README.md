# Vuero Vue3 - Multipurpose Admin and Webapp Template

## Getting started

First of all, Thank you so much for purchasing this template and for being our loyal customer. You are awesome! You are entitled to get free lifetime updates to this product and support from the css ninja team directly. **Vuero** is a product built by [Css Ninja](https://cssninja.io/) and [Digisquad](https://digisquad.io/).

This documentation has been written to help you regarding each step of setup and customization. Please go through the documentation carefully to understand how this template is made and how to edit this properly. HTML CSS, and Vue JS framework knowledge is required to customize this template.

You are currently reading the **Vuero Vue 3 1.3.0** documentation.

---

**💡 You will find more up to date documentation content at [https://docs.cssninja.io/vuero](https://docs.cssninja.io/vuero).**

---

The product uses:

- [`vue3`](https://github.com/vuejs/vue-next) Composition API
- Lightning-fast [`vitejs`](https://github.com/vitejs/vite) build & development tool
- [`Typescript`](https://github.com/microsoft/typescript) out of the box, for large-scale JavaScript applications for any browser
- Latest [`bulma`](https://bulma.io/) integration with `sass`
- Mocked HTTP [Rest API](./public/api) responses to help you to create your own backend
- Production ready `docker` images based on [bitnami](https://bitnami.com/)
- `yarn`, `npm` and `pnpm` support
- `eslint`, `stylelint` and `prettier` pre-configured

### Support

If you have any trouble while editing this template or if you simply want to ask a question about something, feel free to contact us at [help@cssndinja.io](mailto:help@cssndinja.io) or to post your request on our support at [support.cssninja.io](https://support.cssninja.io/)

### Prerequisites

1. A good code editor  
   _[VSCode](https://code.visualstudio.com/) settings are preconfigured_
1. A supported web browser (Chrome, Edge, Firefox, ...)
1. [Nodejs LTS](https://nodejs.org/en/) _(14.x)_ installed
1. [Typescript](https://github.com/microsoft/typescript) _(4.x)_ installed

### Dependencies installation

To setup the template and start installing project dependencies, run one of the following commands:

```bash
# using npm
npm install

# using pnpm
pnpm install

# using yarn
yarn install
```

### Run a development server

To start the development server, run one of the following commands:

```bash
# using npm
npm run dev

# using pnpm
pnpm dev

# using yarn
yarn dev
```

> Access the Vuero frontend in your browser at [http://localhost:3000/](http://localhost:3000/)

## Vuero and Vue 3

Vue 3 introduces the Composition API wich is a set of additive, function-based APIs that allow flexible composition of component logic.

You may want to take a look of what changed since Vue 2 here:  
https://v3.vuejs.org/guide/migration/introduction.html#overview

You still can still write components using old Option API (`data` / `computed` / `method` components fields).  
Therefore, all Vue2 plugins/components should be compatible with Vue3.

Here is a great cheat sheet provided by the vue core team to help you get started with the Composition API:  
https://www.vuemastery.com/pdf/Vue-3-Cheat-Sheet.pdf

### Global structure

```
Vuero
|-- .vscode/
|-- nginx/
|-- public/
|     |-- api/
|     |-- img/
|
|-- src/
|     |-- assets/
|     |-- components/
|     |-- composition/
|     |-- data/
|     |-- directives/
|     |-- layouts/
|     |-- locales/
|     |-- models/
|     |-- pages/
|     |-- scss/
|     |-- utils/
|     |-- App.vue
|     |-- i18n.ts
|     |-- main.ts
|     |-- router.ts
|     |-- shims-vue.d.ts
|     |-- window.d.ts
|
|-- .dockerignore
|-- .editorconfig
|-- .eslintrc.js
|-- .gitignore
|-- .prettierignore
|-- .prettierrc.js
|-- Dockerfile
|-- index.html
|-- package-lock.json
|-- package.json
|-- stylelint.config.js
|-- tsconfig.json
|-- vite.config.js
|-- yarn.lock
```

The directory structure can seem unusual for someone who is not familiar with build tools and javascript bundlers. We will break each part of it, so you understand how everything works.

### Router, layouts and pages structure

```
Vuero
|-- src/
|     |-- layouts/
|          |-- AuthLayout.vue
|          |-- DefaultLayout.vue
|          |-- MinimalLayout.vue
|          |-- etc...
|
|     |-- pages/
|          |-- admin/
|          |-- auth/
|          |-- components/
|          |-- elements/
|          |-- error/
|          |-- webapp/
|          |-- admin.vue
|          |-- auth.vue
|          |-- index.vue
|          |-- etc...
|
|     |-- router.ts
|
```

Vuero uses `vue-router` for Vue 3, you can find more information by visiting the corresponding documentation: https://next.router.vuejs.org/

Vue router allows to dynamically render a component as a page based on a provided url.  
In order to do so, we have to bind each route to a component.

Page components are regular components, they live under the `pages/` folder.
_Note: You can create your page files anywhere but we recommend that you do it inside the `pages/` folder as it helps keeping the project structured_

The routes are autogenerated by the vite-plugin-page _(see [./vite.config.ts](./vite.config.ts))_
and loaded in the [./src/router.ts](./src/router.ts) file.  
Here is an example of registering a new page with a new layout manualy

```typescript
// file ./src/router.ts
import { RouteRecordRaw } from 'vue-router'

// lazyload component using "const Component = () => import()" syntax
const MyLayout = () => import('@src/layouts/MyLayout.vue')

const routes: RouteRecordRaw[] = [
  {
    // all routes declared as children will use MyLayout
    path: '/my-path',
    component: MyLayout,
    children: [
      {
        // match exact url: /my-path
        path: '',
        component: () => import('@src/pages/index.vue'),
      },
      {
        // match exact url: /my-path/my-page
        path: 'my-page',
        name: 'my-path-my-page', // you can set a name for your route here
        component: () => import('@src/pages/my-page.vue'),
      },
    ],
  },
]
```

To create a new layout, your component's template needs to have a `<RouterView />`, which gets replaced by your page component.  
_Note: You can create your layout files anywhere but we recommend that you do it inside the `layouts/` folder as it helps keeping the project structured_

### Components structure

```
Vuero
|-- src/
|     |-- components/
|          |-- base/
|          |-- navigation/
|          |-- pages/
|          |-- partials/
|
```

The `components` folder holds all reusable elements. They consist in chunks of code that you can reuse accross your application: it can be a button, a navbar, a content section or whatever you want. You can create as many subfolders as you want to organize your components. `/base` components are all basic reusable blocks like `<v-button>` and `<v-tag>` for example. `/navigation` components are main layout sidebars, navbars and panels. `/pages` represent the inner content of each Vuero page. It is abstracted this way so it can be reused in any kind of layout. `/partials` components are small and miscellaneous components / chunks of pages that are reused accross the entire template.

**Here is an example of a component:**

```vue
<script lang="ts">
// file: ./src/components/MyComponent.vue
import { defineComponent } from 'vue'

// You can load any other components ('@src/' is an alias to '<base>/src' folder)
import OtherComponent from '@src/components/OtherComponent.vue'

const MyComponent = defineComponent({
  name: 'MyComponent',
  components: {
    OtherComponent,
  },
  setup() {
    // MyComponent Composition API

    return {}
  },
})

export default MyComponent
</script>

<template>
  <!-- MyComponent Template -->

  <OtherComponent />
</template>
```

> Tip for VSCode users:  
> start typing `<script` in an empty `.vue` file to trigger a snippet suggestion.

### The Composition API

```
Vuero
|-- src/
|     |-- composition/
|          |-- state/
|               |-- ui/
|               |-- user/
|               |-- workspace/
|          |-- use/
|
```

Since we now have the powerful Composition API, we do not need to use `vuex` anymore to share state between components.  
_[Here is an example using vuex composition api](https://github.com/vuejs/vuex/tree/4.0/examples/composition/chat)_  
Instead we register variables in separate files using the `ref` or `reactive` methods from the new `vue` package.
Those variables will be reactive across all your project.
You can see examples of it in `./src/composition/state`

Also, to reduce component size and allow easy code reusability, code logic is split into **Composable** functions.
Those functions create a scoped state (usefull for a reusable dropdown, for instance).
You can see examples of it in `./src/composition/use`

> Tip: keep the cheat sheet open!  
> https://www.vuemastery.com/pdf/Vue-3-Cheat-Sheet.pdf
>
> Advanced: Why the Composition API was introduced in Vue
> https://v3.vuejs.org/guide/composition-api-introduction.html

### Data API fixtures

```
Vuero
|-- public/
|     |-- api/
|          |-- auth/
|               |-- login.json
|               |-- register.json
|          |-- conversations/
|               |-- conversation-x.json
|               |-- users.json
|          |-- users.json
```

You probably already noticed that there are `json` files located in the `public/api` folder.  
Those files are requested by our state Composition API to simulate calls to a real world API.

The structure is arbitrary and probably won't reflect what you will need to implement for your backend. This fake API is simply here to give you examples of on how to request remote data using the Composition API (we are using the `axios` package, which is one of the most common for HTTP REST requests).

### Vite, Rollup and Typescript

```
Vuero
|-- tsconfig.json
|-- vite.config.js
```

Vuero uses [`Vite`](https://github.com/vitejs/vite), which is a web development build tool that supports:

- a fast development environment with hot reload _(using [`native javascript modules`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules))_
- building an optimized version for production _(using [`rollup`](https://github.com/rollup/rollup) and [`tree-shaking`](https://webpack.js.org/guides/tree-shaking/))_
- native support of typescript

Under the hood, when runing `npm run dev`, it runs `vite`.

To learn more about this awesome tool made by the vuejs core team, check the [Vite documentation](https://github.com/vitejs/vite). You will learn how to:

- Add postcss pre-processors
- Integrate JSX
- Implement fancy Web Assembly code
- Add new asset path aliases
- And much more

Typescript is just an extention of Javascript, If you are new to it, don't be afraid because all valid JavaScript code is also TypeScript code. _([TypeScript documentation](https://www.typescriptlang.org/))_  
The main advatages of using Typescript are:

- Validates your code ahead of time
- Provides auto-completion
- Supports complex Type checking

### Keep it clean with linters

```
Vuero
|-- .vscode/
|     |-- extensions.json
|     |-- settings.json
|
|-- .editorconfig
|-- .eslintrc.js
|-- .prettierignore
|-- .prettierrc.js
|-- stylelint.config.js
```

Because we love clean code, we have configured 3 linters which have their own purpose:

- `eslint`: prevent code quality concerns (no unused vars, ...)
- `stylelint`: prevent css quality concerns (no invalid colors, ...)
- `prettier`: handles formatting rules (max line lenght, ...)

You can check the quality of your code by running

```bash
# using npm
npm run test

# using yarn
yarn test
```

Linters can fix a lot of issues all by themselves. To do so, try runing

```bash
# using npm
npm run lint

# using yarn
yarn lint
```

> Tip for VSCode users:  
> Install recommended extensions, linting will then occur each time files are saved!

## Customizing Vuero

### Philosophy

Vuero si built to be an extremely modular and flexible product. Layouts have been destructured so you can switch the entire layout live, without reloading the page. Therefore, page inner content is considered as a component that gets injected in the currently active layout.

### Scss structure

```
Vuero
|-- src/
|     |-- scss
|          |-- abstracts
|          |-- components
|          |-- elements
|          |-- extensions
|          |-- layout
|          |-- pages
|          |-- vendors
|          |-- main.scss
|     |-- main.ts
|-- index.html
```

Vuero relies on the powerful Sass features and a modular structure, letting you handle complex styles in a breeze. You need to import all the SCSS partials into your core file. This is how scss files are organized. Partial SCSS file names always start with an underscore like this: `_button.scss` . They act as chunks of code that you can import only if you need them. Of course some of them are mandatory for the project to work. Vuero is a UI kit in wich each SCSS file serves a different purpose:

- **abstracts**: holds all files related to SCSS variables, mixins, default global styles and other typography settings.
- **components**: holds all files related to Vuero Components. Each component type has its own file.
- **Elements**: holds all files related to Vuero Elements. Each element type has its own file.
- **layout**: holds all basic and mandatory layout files. The project will break if you ommit one of those files.
- **pages**: holds all the specific styles for each demo or group of demos.
- **vendors**: holds all vendor CSS styles.

### Import Scss in Vue3

In order to load stylesheets into our application, we simply need to import `css`, `sass` or `scss` files in the `main.ts` file

```typescript
// file: ./src/main.ts

// ...
import 'some-plugin/dist/css/some-plugin.css'

import '@src/scss/main.scss'

// ...
```

> all imported files here are to be converted in `css`, optimized using `postcss`, and injected automatically in `index.html` at build and run time.

### Bulma Integration

Bulma is fully integrated with Vuero. This means that when you change the `$primary` Vuero color variable and any Bulma related variable to take precedence over it. The variable changes you make will be applied to all native Bulma elements.

### Native Dark Mode

Vuero comes with a native Dark mode. This means that all components are prestyled for dark mode. You don't have to worry about it, when you turn it on, the colors change seamlessly. Dark mode styling is made through a global `.is-dark` class added to the page `<body>` element. Dark mode is toggled on the body with javascript. In another type of implementation, the body would have to be rendered by the server with the proper class before being served to the client, based on the user selection.

### Lazyloading Scss

```
Vuero
|-- src/
|     |-- components/
|                 |-- pages/
|
```

The pages folder holds the template pages as chanks of reusable UI that can be inserted in all available layout types. Each page is a Vue 3 component with a `<style>` element that holds required SCSS for that page. This way, you don't load unecessary CSS when browsing.

They are not added by default to `main.scss`, instead we lazyload them in layouts:

```html
<!-- file ./src/layouts/WizardLayout.vue -->
<script lang="ts">
  // ...
</script>

<template>
  <!-- ... -->
</template>

<style lang="scss">
  /* files imported in components will be loaded only once they are needed */
  @import '../scss/abstracts/_variables.scss';
</style>
```

## Going further

### Build for production

```bash
# using npm
npm run build

# using yarn
yarn build
```

> Built files are located in [./dist](./dist) folder  
> You can deploy your website on any http server like Apache, Nginx or [`http-server`](https://www.npmjs.com/package/http-server) package from npm  
> You can also use a CDN like Github pages, Netlify, AWS Cloudfront, ...  
> **Vuero can not be opened from the local file system (using `file://` protocol)**

You can preview quickly your production version with [`http-server`](https://www.npmjs.com/package/http-server)

```bash
npx http-server ./dist
```

> Now you can visit [http://localhost:8080](http://localhost:8080) to view your server

### Using docker

This project includes a [Dockerfile](./Dockerfile) which first builds Vuero for production, and then creates a tiny image with only built files, served by Nginx

To build your image, run the following command:

```bash
docker build --tag Vuero:1.0 .
```

To preview your image, run the following command:

```bash
docker run --publish 8080:8080 --rm Vuero:1.0
```

> Access the Vuero frontend at [http://localhost:8080](http://localhost:8080)

To run your image, run the following command:

```bash
docker run --publish 80:8080 --detach --restart always --name my-Vuero-app Vuero:1.0
```

> _note: you might need root/sudo access to bind port 80 to the container_

### Build your own backend

To bring your chat alive you will need to create a backend for user authentification, message and room persistance, etc ...  
We have implemented samples with a fake REST HTTP API to keep the project as simple and understainable as possible.

You can take a look at projects such [strapi](https://strapi.io/) or [kuzzle](https://kuzzle.io/), wich are open-source backend, that can be nicely used with Vuero _([firebase](https://firebase.google.com/) can be a good choice too)_ !

## Customer support

Please remember you have purchased a very affordable theme and you did not pay for a full-time web design agency. We will help with your issues, but these requests will be put on a relevant priority, regarding their nature. Support is provided for your comfort and for a best possible experience, so please be patient, polite and respectful, as we are towards you.

### Support includes

- Responding to questions or problems regarding the item and its features
- Fixing bugs and reported issues
- Providing updates

### Support does not include

- Customization and installation services
- Support for third party software and plug-ins

### Before Support

- Make sure your question is a valid Theme Issue and not a customization request
- Make sure you have read through the documentation and any ressources before asking support on how to accomplish a task
- Make sure to double check the theme FAQs.
- If you have customized your theme and now have an issue, back-track to make sure you didn't make a mistake. If you have made changes and can't find the issue, please provide us with your changelog.
- Almost 80% of the time we find that the solution to people's issues can be solved with a simple "Google Search". You might want to try that before seeking support. You might be able to fix the issue yourself much quicker than we can respond to your request.
- Make sure to state the name of the theme you are having issues with when requesting support.

## Changelog

You can find the version history [CHANGELOG.md](./CHANGELOG.md) file inside the Vuero-theme.zip folder or you can check the changelog on the theme's sale page.

Once again, thank you so much for purchasing this theme. As I said at the beginning, we'd be glad to help you if you have any questions related to this theme. No guarantees, but we'll do our best to assist and support you. If you have a more general question relating to Vuero Vue3, you might consider opening a ticket and ask your question in the [Css Ninja support portal](https://support.cssninja.io/).
