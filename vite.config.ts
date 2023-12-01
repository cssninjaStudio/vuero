import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unfonts from 'unplugin-fonts/vite'
import { VitePluginRadar } from 'vite-plugin-radar'
import PurgeIcons from 'vite-plugin-purge-icons'
import ImageMin from 'vite-plugin-imagemin'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { VitePWA } from 'vite-plugin-pwa'
import purgecss from 'rollup-plugin-purgecss'
import UnheadVite from '@unhead/addons/vite'
import { unheadVueComposablesImports } from '@unhead/vue'

// local vite plugin
import { VitePluginVueroDoc } from './vite-plugin/vuero-doc'
import { VitePluginPurgeComments } from './vite-plugin/purge-comments'

// options via env variables
const MINIFY_IMAGES = process.env.MINIFY ? process.env.MINIFY === 'true' : false

const isProd = process.env.NODE_ENV === 'production'

/**
 * This is the main configuration file for vitejs
 *
 * @see https://vitejs.dev/config
 */
export default defineConfig({
  // Project root directory (where index.html is located).
  root: process.cwd(),
  // Base public path when served in development or production.
  // You also need to add this base like `history: createWebHistory('my-subdirectory')`
  // in ./src/router.ts
  // base: '/my-subdirectory/',
  base: '/',
  // Directory to serve as plain static assets.
  publicDir: 'public',
  // Adjust console output verbosity.
  logLevel: 'info',
  // development server configuration
  server: {
    // Vite 4 defaults to 5173, but you can override it with the port option.
    port: 3000,
  },
  /**
   * By default, Vite will crawl your index.html to detect dependencies that
   * need to be pre-bundled. If build.rollupOptions.input is specified,
   * Vite will crawl those entry points instead.
   *
   * @see https://vitejs.dev/config/#optimizedeps-entries
   */
  optimizeDeps: {
    include: [
      '@ckeditor/ckeditor5-vue',
      '@ckeditor/ckeditor5-build-classic',
      '@iconify/iconify',
      '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min.js',
      '@vee-validate/zod',
      '@vueuse/core',
      '@vueform/multiselect',
      '@vueform/slider',
      'billboard.js',
      'dayjs',
      'dropzone',
      'dragula',
      'defu',
      'filepond',
      'filepond-plugin-file-validate-size',
      'filepond-plugin-file-validate-type',
      'filepond-plugin-image-exif-orientation',
      'filepond-plugin-image-crop',
      'filepond-plugin-image-edit',
      'filepond-plugin-image-preview',
      'filepond-plugin-image-resize',
      'filepond-plugin-image-transform',
      'focus-trap-vue',
      'imask',
      'nprogress',
      'notyf',
      'mapbox-gl',
      'photoswipe/lightbox',
      'photoswipe',
      'plyr',
      'v-calendar',
      'vee-validate',
      'vue',
      'vue-scrollto',
      'vue3-apexcharts',
      'vue-tippy',
      'vue-i18n',
      'vue-router',
      'unplugin-vue-router/runtime',
      'scule',
      'simplebar',
      'tiny-slider/src/tiny-slider',
      'vue-accessible-color-picker',
      'zod',
      'rehype-external-links',
      'rehype-shikiji',
      'rehype-raw',
      'rehype-sanitize',
      'rehype-stringify',
      'rehype-slug',
      'rehype-autolink-headings',
      'remark-gfm',
      'remark-parse',
      'remark-rehype',
      'unified',
      'workbox-window',
      'textarea-markdown-editor/dist/esm/bootstrap',
    ],
    // disabled: false,
  },
  // Will be passed to @rollup/plugin-alias as its entries option.
  resolve: {
    alias: [
      {
        find: '/@src/',
        replacement: `/src/`,
      },
    ],
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    // Do not warn about large chunks
    // chunkSizeWarningLimit: Infinity,
    // Double the default size threshold for inlined assets
    // https://vitejs.dev/config/build-options.html#build-assetsinlinelimit
    assetsInlineLimit: 4096 * 2,
    // commonjsOptions: { include: [] },
  },
  plugins: [
    /**
     * plugin-vue plugin inject vue library and allow sfc files to work (*.vue)
     *
     * @see https://github.com/vitejs/vite/tree/main/packages/plugin-vue
     */
    Vue({
      include: [/\.vue$/],
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    }),

    /**
     * unplugin-vue-i18n plugin does i18n resources pre-compilation / optimizations
     *
     * @see https://github.com/intlify/bundle-tools/blob/main/packages/unplugin-vue-i18n/README.md
     */
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(import.meta.url)), './src/locales/**'),
      fullInstall: false,
      compositionOnly: true,
    }),

    /**
     * unplugin-vue-router plugin generate routes based on file system
     * allow to use typed routes and usage of defineLoader
     *
     * @see https://github.com/posva/unplugin-vue-router
     * @see https://github.com/vuejs/rfcs/blob/ad69da2aee9242ef88f036713db68f3ef274bb1b/active-rfcs/0000-router-use-loader.md
     */
    VueRouter({
      routesFolder: 'src/pages',
      dts: './types/router.d.ts',

      /**
       * Data Fetching is an experimental feature from vue & vue-router
       *
       * @see https://github.com/vuejs/rfcs/discussions/460
       * @see https://github.com/posva/unplugin-vue-router/tree/main/src/data-fetching
       */
      dataFetching: true,
    }),

    /**
     * Unhead provides a Vite plugin to optimise your builds, by removing composables that aren't needed and simplifying your code.
     *
     * @see https://unhead.harlanzw.com/guide/getting-started/vite-plugin
     */
    UnheadVite(),

    /**
     * unplugin-auto-import allow to automaticaly import modules/components
     *
     * @see https://github.com/antfu/unplugin-auto-import
     */
    AutoImport({
      dts: './types/imports.d.ts',
      imports: ['vue', '@vueuse/core', VueRouterAutoImports, unheadVueComposablesImports],
    }),

    /**
     * This is an internal vite plugin that load markdown files as vue components.
     *
     * @see /documentation
     * @see /vite-plugin-vuero-doc
     * @see /src/components/partials/documentation/DocumentationItem.vue
     * @see /src/composable/useMarkdownToc.ts
     */
    VitePluginVueroDoc({
      pathPrefix: 'documentation',
      wrapperComponent: 'DocumentationItem',
      shiki: {
        themes: {
          light: 'min-light',
          dark: 'github-dark',
        },
      },
      sourceMeta: {
        enabled: true,
        editProtocol: 'vscode://vscode-remote/wsl+Ubuntu', // or 'vscode://file'
      },
    }),

    /**
     * This is an internal vite plugin that remove html comments from code.
     *
     * @see /vite-plugin-purge-comments
     */
    VitePluginPurgeComments(),

    /**
     * unplugin-vue-components plugin is responsible of autoloading components
     * documentation and md file are loaded for elements and components sections
     *
     * @see https://github.com/antfu/unplugin-vue-components
     */
    Components({
      dirs: ['documentation', 'src/components', 'src/layouts'],
      extensions: ['vue', 'md'],
      dts: './types/components.d.ts',
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),

    /**
     * vite-plugin-purge-icons plugin is responsible of autoloading icones from multiples providers
     *
     * @see https://icones.netlify.app/
     * @see https://github.com/antfu/purge-icons/tree/main/packages/vite-plugin-purge-icons
     */
    PurgeIcons(),

    /**
     * vite-plugin-fonts plugin inject webfonts from differents providers
     *
     * @see https://github.com/stafyniaksacha/vite-plugin-fonts
     */
    Unfonts({
      google: {
        families: [
          {
            name: 'Fira Code',
            styles: 'wght@400;600',
          },
          {
            name: 'Montserrat',
            styles: 'wght@500;600;700;800;900',
          },
          {
            name: 'Roboto',
            styles: 'wght@300;400;500;600;700',
          },
        ],
      },
    }),

    /**
     * vite-plugin-radar plugin inject snippets from analytics providers
     *
     * @see https://github.com/stafyniaksacha/vite-plugin-radar
     */
    !process.env.GTM_ID
      ? undefined
      : VitePluginRadar({
        gtm: {
          id: process.env.GTM_ID,
        },
      }),

    /**
     * vite-plugin-pwa generate manifest.json and register services worker to enable PWA
     *
     * @see https://github.com/antfu/vite-plugin-pwa
     */
    VitePWA({
      base: '/',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Vuero - A complete Vue 3 design system',
        short_name: 'Vuero',
        start_url: '/?utm_source=pwa',
        display: 'standalone',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      mode: isProd ? 'production' : 'development',
      // registerType: 'autoUpdate',
      workbox: {
        /**
         * precache files that match the glob pattern
         *
         * @see https://vite-pwa-org.netlify.app/guide/service-worker-precache.html
         */
        globPatterns: ['**/*.{js,css,ico,png,svg,webp,jpg,jpeg}'],

        /**
         * add external cache of google fonts
         *
         * @see https://vite-pwa-org.netlify.app/workbox/generate-sw.html
         */
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),

    /**
     * rollup-plugin-purgecss plugin is responsible of purging css rules
     * that are not used in the bundle
     *
     * @see https://github.com/FullHuman/purgecss/tree/main/packages/rollup-plugin-purgecss
     */
    purgecss({
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
     * vite-plugin-imagemin optimize all images sizes from public or asset folder
     *
     * @see https://github.com/anncwb/vite-plugin-imagemin
     */
    !MINIFY_IMAGES
      ? undefined
      : ImageMin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 7,
        },
        mozjpeg: {
          quality: 60,
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
              active: false,
            },
            {
              name: 'removeEmptyAttrs',
              active: false,
            },
          ],
        },
      }),
  ],
})
