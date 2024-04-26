import { definePlugin } from '/@src/utils/plugins'
import { DataLoaderPlugin } from 'vue-router/auto'

/**
 * Enable Vue Data Loader plugin from unplugin-vue-router
 *
 * @see https://uvr.esm.is/rfcs/data-loaders/
 */
export default definePlugin(({ app, router }) => {
  app.use(DataLoaderPlugin, { router })
})
