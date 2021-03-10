import { defineConfig } from 'vite'
import path from 'path'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import ViteComponents from 'vite-plugin-components'
import ViteFonts from 'vite-plugin-fonts'
import ViteRadar from 'vite-plugin-radar'
import PurgeIcons from 'vite-plugin-purge-icons'
import ImageTools from 'vite-imagetools'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import VueroDocumentation from './vite-plugin-vuero-doc/index'
import { VitePWA } from 'vite-plugin-pwa'

const projectRootDir = path.resolve(__dirname)

export default defineConfig({
  logLevel: 'info',
  resolve: {
    alias: [
      {
        find: '/@src/',
        replacement: `${path.resolve(projectRootDir, 'src')}/`,
      },
    ],
  },
  plugins: [
    Vue({
      include: [/\.vue$/],
    }),

    // https://github.com/intlify/vite-plugin-vue-i18n
    VueI18n({
      include: path.resolve(__dirname, './src/locales/**'),
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),

    /**
     * This is an internal vite plugin that load markdown files as vue components.
     *
     * @see /documentation
     * @see /vite-plugin-vuero-doc
     * @see /src/components/partials/documentation/DocumentationItem.vue
     * @see /src/composable/useMarkdownToc.ts
     * */
    VueroDocumentation(),

    // https://github.com/antfu/vite-plugin-components
    ViteComponents({
      extensions: ['vue', 'md'],
      dirs: ['documentation', 'src/components', 'src/layouts'],
      customLoaderMatcher: (path) => path.endsWith('.md'),
    }),

    // https://github.com/JonasKruckenberg/vite-imagetools
    ImageTools(),

    // https://github.com/stafyniaksacha/vite-plugin-fonts
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

    // https://github.com/stafyniaksacha/vite-plugin-radar
    ViteRadar({
      analytics: {
        id: 'G-8PH6FM2JEL',
      },
    }),

    // https://github.com/antfu/purge-icons/tree/main/packages/vite-plugin-purge-icons
    PurgeIcons(),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      manifest: {
        display: 'standalone',
        theme_color: '#fff',
        background_color: '#fff',
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
  ],
})
