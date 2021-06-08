import { defineConfig } from 'vite'
import path from 'path'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import ViteComponents from 'vite-plugin-components'
import ViteFonts from 'vite-plugin-fonts'
import ViteRadar from 'vite-plugin-radar'
import PurgeIcons from 'vite-plugin-purge-icons'
import { imagetools } from 'vite-imagetools'
import ImageMin from 'vite-plugin-imagemin'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import VueroDocumentation from './vite-plugin-vuero-doc/index'
import { VitePWA } from 'vite-plugin-pwa'

/**
 * This is the main configuration file for vitejs
 *
 * @see https://vitejs.dev/config
 */
export default defineConfig({
  // Project root directory (where index.html is located).
  root: process.cwd(),
  // Base public path when served in development or production.
  base: '/',
  // Directory to serve as plain static assets.
  publicDir: 'public',
  // Adjust console output verbosity.
  logLevel: 'info',
  // Will be passed to @rollup/plugin-alias as its entries option.
  resolve: {
    alias: [
      {
        find: '/~/',
        replacement: `/src/assets/`,
      },
      {
        find: '/@src/',
        replacement: `/src/`,
      },
    ],
  },

  build: {
    sourcemap: process.env.SOURCE_MAP === 'true',
    /**
     * Uncomment this section to build the demo with missing images
     * Don't forget to remove this section when you replaced assets with yours
     */
    // rollupOptions: {
    //   external: [
    //     /\/demo\/.*/,
    //   ]
    // }
  },
  plugins: [
    /**
     * plugin-vue plugin inject vue library and allow sfc files to work (*.vue)
     *
     * @see https://github.com/vitejs/vite/tree/main/packages/plugin-vue
     */
    Vue({
      include: [/\.vue$/],
    }),

    /**
     * vite-plugin-vue-i18n plugin does i18n resources pre-compilation / optimizations
     *
     * @see https://github.com/intlify/vite-plugin-vue-i18n
     */
    VueI18n({
      include: path.resolve(__dirname, './src/locales/**'),
    }),

    /**
     * vite-plugin-pages plugin generate routes based on file system
     *
     * @see https://github.com/hannoeru/vite-plugin-pages
     */
    Pages({
      pagesDir: [
        {
          dir: 'src/pages',
          baseRoute: '',
        },
      ],
    }),

    /**
     * This is an internal vite plugin that load markdown files as vue components.
     *
     * @see /documentation
     * @see /vite-plugin-vuero-doc
     * @see /src/components/partials/documentation/DocumentationItem.vue
     * @see /src/composable/useMarkdownToc.ts
     * */
    VueroDocumentation(),

    /**
     * vite-plugin-components plugin is responsible of autoloading components
     * documentation and md file are loaded for elements and components sections
     *
     * @see https://github.com/antfu/vite-plugin-components
     */
    ViteComponents({
      extensions: ['vue', 'md'],
      dirs: ['documentation', 'src/components', 'src/layouts'],
      customLoaderMatcher: (path) => path.endsWith('.md'),
    }),

    /**
     * vite-imagetools plugin allow to perform optimization/transformation
     * on images at build time
     *
     * @see https://github.com/JonasKruckenberg/vite-imagetools
     */
    imagetools(),

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
    ViteFonts({
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
    ViteRadar({
      analytics: {
        id: 'G-8PH6FM2JEL',
      },
    }),

    /**
     * vite-plugin-pwa generate manifest.json and register services worker to enable PWA
     *
     * @see https://github.com/antfu/vite-plugin-pwa
     */
    VitePWA({
      registerType: 'autoUpdate',
      base: '/',
      manifest: {
        name: 'Vuero - A complete Vue 3 design system',
        short_name: 'Vuero',
        start_url: '/?utm_source=pwa',
        display: 'standalone',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        icons: [
          {
            src: '/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),

    /**
     * vite-plugin-imagemin optimize all images sizes from public or asset folder
     *
     * @see https://github.com/anncwb/vite-plugin-imagemin
     */
    ImageMin({
      gifsicle: {
        optimizationLevel: 3,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 3,
      },
      mozjpeg: {
        quality: 90,
      },
      pngquant: {
        quality: [0.8, 1],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            removeViewBox: false,
          },
          {
            removeEmptyAttrs: false,
          },
        ],
      },
    }),
  ],
})
