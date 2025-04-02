# Vite


Vuero uses [`Vite`](https://github.com/vitejs/vite), which is a web development and build tool that supports:

- a fast development environment with hot reload _(using [`native javascript modules`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules))_
- building an optimized version for production _(using [`rollup`](https://github.com/rollup/rollup))_
- native support for Typescript and SCSS

```ts
import { defineConfig } from 'vite'

export default defineConfig({
  // vite options
})
```
> Useful links:  
> - https://vitejs.dev/config/

## Base plugins

| Plugin   | Usage      |
| ---------- | -------------|
| [@vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue) | Inject vue library and allow SFC files to work (*.vue) |
| [vite-plugin-vue-devtools](https://devtools-next.vuejs.org/) | Inspect your app's DOM tree and enhance the Vue developer experience <NinjaBadge>since v3.0.0</NinjaBadge> |
| [devtools-next](https://devtools-next.vuejs.org/) | Next generation Vue Devtools <NinjaBadge>since v3.1.0</NinjaBadge> |
| [unplugin-vue-router](https://uvr.esm.is/) | Generate routes based on file system, with typed routes <NinjaBadge>since v3.0.0</NinjaBadge> |
| [@unhead/addons/vite](https://unhead.unjs.io/docs/vue/head/guides/advanced/vite-plugin) | Optimize Unhead usage |
| [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import) | Auto loading modules on-demand <NinjaBadge>since v3.0.0</NinjaBadge> |
| [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) | Auto loading vue components on-demand |
| [rollup-plugin-purgecss](https://github.com/FullHuman/purgecss/tree/main/packages/rollup-plugin-purgecss) | Purge CSS rules that are not used in the bundle |

## Electron specific plugins

| Plugin   | Usage      |
| ---------- | -------------|
| [electron-vite](https://electron-vite.org/) | Next Generation Electron Build Tooling <NinjaBadge>since v3.1.0</NinjaBadge> |

## Demo specific plugins

| Plugin   | Usage      |
| ---------- | -------------|
| [@intlify/unplugin-vue-i18n](https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n) | Does i18n resources pre-compilation / optimizations |
| [vite-plugin-pwa](https://vite-pwa-org.netlify.app/) | Zero-config PWA for Vite |
| *vite-plugin-vuero-doc* | Internal Vite plugin that load markdown files as vue components |
| *vite-plugin-purge-comments* | Internal Vite plugin that remove html comments from vue components |


