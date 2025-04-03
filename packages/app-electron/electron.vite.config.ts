import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import Vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'
import Imports from 'unplugin-auto-import/vite'
import PurgeCSS from 'rollup-plugin-purgecss'
import Unhead from '@unhead/addons/vite'
import { unheadVueComposablesImports } from '@unhead/vue'
// import DevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '/@src': '/src/',
        '/@server': '/server/',
      }
    },
    plugins: [
      /**
       * unplugin-vue-router plugin generate routes based on file system
       * allow to use typed routes and usage of defineLoader
       *
       * @see https://uvr.esm.is/rfcs/data-loaders/
       */
      VueRouter({
        routesFolder: 'src/renderer/src/pages',
        dts: './src/renderer/types/router.d.ts',
        beforeWriteFiles(root) {
          root.insert('/', resolve('src/renderer/src/pages/[...all].vue'))
        },
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
        dirs: ['src/components'],
        extensions: ['vue'],
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
    ]
  }
})
