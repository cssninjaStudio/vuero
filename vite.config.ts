import path from 'path'
import Vue from '@vitejs/plugin-vue'
import Voie from 'vite-plugin-voie'
import ViteComponents from 'vite-plugin-components'
import ViteFonts from 'vite-plugin-fonts'
import PurgeIcons from 'vite-plugin-purge-icons'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import type { UserConfig } from 'vite'

// const alias = [
//   { find: '@src/', replacement: path.resolve(__dirname, 'src') },
//   {
//     find: '@images/',
//     replacement: path.resolve(__dirname, 'src/assets/images'),
//   },
// ]

const projectRootDir = path.resolve(__dirname)

const config: UserConfig = {
  alias: [
    {
      find: '/@src/',
      replacement: `${path.resolve(projectRootDir, 'src')}/`,
    },
    {
      find: '/@images/',
      replacement: `${path.resolve(projectRootDir, 'src/assets/images')}/`,
    },
  ],
  optimizeDeps: {
    include: [
      'highlight.js/lib/core',
      'highlight.js/lib/languages/typescript',
      'highlight.js/lib/languages/javascript',
      'highlight.js/lib/languages/css',
      'highlight.js/lib/languages/scss',
      'highlight.js/lib/languages/json',
      'highlight.js/lib/languages/bash',
      'highlight.js/lib/languages/markdown',
      'highlight.js/lib/languages/xml',
    ],
  },
  plugins: [
    Vue({
      ssr: !!process.env.VITE_SSG,
    }),

    // https://github.com/vamplate/vite-plugin-voie
    Voie({
      importMode(path: string) {
        return path === '/src/pages/index.vue' ? 'sync' : 'async'
      },
    }),

    // https://github.com/antfu/vite-plugin-components
    ViteComponents({
      // alias,
      dirs: ['src/components', 'src/layouts'],
    }),

    // https://github.com/stafyniaksacha/vite-plugin-fonts
    ViteFonts({
      google: {
        families: [
          {
            name: 'Inconsolata',
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

    // https://github.com/antfu/purge-icons/tree/main/packages/vite-plugin-purge-icons
    PurgeIcons(),

    // https://github.com/intlify/vite-plugin-vue-i18n
    VueI18n({
      include: [path.resolve(__dirname, 'locales/**')],
    }),
  ],
}

export default config
