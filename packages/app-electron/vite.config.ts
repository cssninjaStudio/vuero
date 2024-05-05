import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'
import Imports from 'unplugin-auto-import/vite'
import PurgeCSS from 'rollup-plugin-purgecss'
import Unhead from '@unhead/addons/vite'
import DevTools from 'vite-plugin-vue-devtools'
import Electron from 'vite-plugin-electron/simple'
import { unheadVueComposablesImports } from '@unhead/vue'
import pkg from './package.json'

/**
 * This is the main configuration file for vitejs
 *
 * @see https://vitejs.dev/config
 */
export default defineConfig({
  publicDir: 'public',
  logLevel: 'info',
  resolve: {
    alias: [
      {
        find: '/@src/',
        replacement: `/src/`,
      },
      {
        find: '/@server/',
        replacement: `/server/`,
      },
    ],
  },
  // development server configuration
  server: process.env.VSCODE_DEBUG && (() => {
    const url = new URL(pkg.debug.env.VITE_DEV_SERVER_URL)
    return {
      host: url.hostname,
      port: +url.port,
    }
  })(),
  clearScreen: false,
  // Predefine dependencies in order to prevent reloading them in the browser during development.
  optimizeDeps: {
    include: [
      'ufo',
      'vee-validate',
      'defu',
    ],
  },
  build: {
    assetsDir: '',
    target: 'esnext',
    minify: 'terser',
    rollupOptions: {
      output: {
        // Using only hash to prevent adblockers from blocking assets that match their patterns.
        // Replace with [name] to use the original name for debug purposes.
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/_/[name].js',
        assetFileNames: 'assets/[hash][extname]',
      },
    },
  },
  plugins: [
    /**
     * Shows a quick overview of your app, including the Vue version, pages and components.
     *
     * @see https://devtools-next.vuejs.org/
     */
    DevTools(),

    /**
     * unplugin-vue-router plugin generate routes based on file system
     * allow to use typed routes and usage of defineLoader
     *
     * @see https://uvr.esm.is/rfcs/data-loaders/
     */
    VueRouter({
      routesFolder: 'src/pages',
      dts: './types/router.d.ts',
    }),

    /**
     * plugin-vue plugin inject vue library and allow sfc files to work (*.vue)
     *
     * @see https://github.com/vitejs/vite-plugin-vue/blob/main/packages/plugin-vue/README.md
     */
    Vue({
      include: [/\.vue$/],
      template: {
        compilerOptions: {
          isCustomElement: tag => ['iconify-icon'].includes(tag),
        },
      },
    }),

    /**
     * Unhead provides a Vite plugin to optimise your builds, by removing composables that aren't needed and simplifying your code.
     *
     * @see https://unhead.harlanzw.com/guide/getting-started/vite-plugin
     */
    Unhead(),

    /**
     * unplugin-auto-import allow to automaticaly import modules/components
     *
     * @see https://github.com/antfu/unplugin-auto-import
     */
    Imports({
      dts: './types/imports.d.ts',
      imports: [
        'vue',
        '@vueuse/core',
        VueRouterAutoImports,
        unheadVueComposablesImports,
      ],
      dirs: ['src/composables', 'src/stores', 'src/utils'],
    }),

    /**
     * unplugin-vue-components plugin is responsible of autoloading components
     * documentation and md file are loaded for elements and components sections
     *
     * @see https://github.com/antfu/unplugin-vue-components
     */
    Components({
      dirs: ['documentation', 'src/components'],
      extensions: ['vue', 'md'],
      dts: './types/components.d.ts',
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),

    /**
     * rollup-plugin-purgecss plugin is responsible of purging css rules
     * that are not used in the bundle
     *
     * @see https://github.com/FullHuman/purgecss/tree/main/packages/rollup-plugin-purgecss
     */
    PurgeCSS({
      output: false,
      content: [`./src/**/*.vue`],
      variables: false,
      safelist: {
        standard: [
          /(autv|lnil|lnir|fas?)/,
          /-(leave|enter|appear)(|-(to|from|active))$/,
          /^(?!(|.*?:)cursor-move).+-move$/,
          /^router-link(|-exact)-active$/,
          /data-v-.*/,
        ],
      },
      defaultExtractor(content) {
        const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
        return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
      },
    }),

    /**
     * vite-plugin-electron allows you to build your Electron app with Vite.
     * 
     * @see https://github.com/electron-vite/vite-plugin-electron
     */
    Electron({
      main: {
        // Shortcut of `build.lib.entry`
        entry: 'electron/main/index.ts',
        onstart({ startup }) {
          if (process.env.VSCODE_DEBUG) {
            console.log(/* For `.vscode/.debug.script.mjs` */'[startup] Electron App')
          } else {
            startup()
          }
        },
        vite: {
          build: {
            sourcemap: true,
            minify: false,
            outDir: 'dist-electron/main',
            rollupOptions: {
              // Some third-party Node.js libraries may not be built correctly by Vite, especially `C/C++` addons, 
              // we can use `external` to exclude them to ensure they work correctly.
              // Others need to put them in `dependencies` to ensure they are collected into `app.asar` after the app is built.
              // Of course, this is not absolute, just this way is relatively simple. :)
              external: Object.keys('dependencies' in pkg ? pkg.dependencies : {}),
            },
          },
        },
      },
      preload: {
        // Shortcut of `build.rollupOptions.input`.
        // Preload scripts may contain Web assets, so use the `build.rollupOptions.input` instead `build.lib.entry`.
        input: 'electron/preload/index.ts',
        vite: {
          build: {
            sourcemap: true ? 'inline' : undefined, // #332
            minify: false,
            outDir: 'dist-electron/preload',
            rollupOptions: {
              external: Object.keys('dependencies' in pkg ? pkg.dependencies : {}),
            },
          },
        },
      },
      // Ployfill the Electron and Node.js API for Renderer process.
      // If you want use Node.js in Renderer process, the `nodeIntegration` needs to be enabled in the Main process.
      // See 👉 https://github.com/electron-vite/vite-plugin-electron-renderer
      renderer: {},
    }),
  ],
})
