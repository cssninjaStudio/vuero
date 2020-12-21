import path from 'path'
import { UserConfig } from 'vite'
import Voie from 'vite-plugin-voie'
import PurgeIcons from 'vite-plugin-purge-icons'
import ViteComponents from 'vite-plugin-components'

const alias = {
  '/@src/': path.resolve(__dirname, 'src'),
  '/@images/': path.resolve(__dirname, 'assets/images'),
}

const config: UserConfig = {
  // base: '/',
  // optimizeDeps: {
  //   include: ['dayjs/plugin/relativeTime', 'dayjs/locale/en-gb'],
  // },
  alias,
  resolvers: [
    {
      alias(id: string) {
        return id.replace(/^@(src|images)\//, '/@$1/') // add slash to particular id, then vite won't resolve it as a module
      },
    },
  ],
  plugins: [
    // https://github.com/vamplate/vite-plugin-voie
    Voie({
      // load index page sync and bundled with the landing page to improve first loading time.
      // feel free to remove if you don't need it
      // importMode(path: string) {
      //   return path === '/src/pages/index.vue' ? 'sync' : 'async'
      // },
      // extensions: ['vue'],
    }),

    // https://github.com/antfu/vite-plugin-components
    ViteComponents({
      // currently, vite does not provide an API for plugins to get the config https://github.com/vitejs/vite/issues/738
      // as the `alias` changes the behavior of middlewares, you have to pass it to ViteComponents to do the resolving
      alias,

      // relative paths to the directory to search for components.
      dirs: ['src/components', 'src/layouts'],

      // // allow auto load markdown components under `./src/components/`
      // extensions: ['vue'],

      // // allow auto import and register components used in markdown
      // customLoaderMatcher({ path }) {
      //   return path.endsWith('.md')
      // },
    }),

    // https://github.com/antfu/purge-icons
    PurgeIcons(),
  ],
}

export default config
