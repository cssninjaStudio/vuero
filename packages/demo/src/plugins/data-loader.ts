import { DataLoaderPlugin } from 'unplugin-vue-router/data-loaders'
import { definePlugin } from '/@src/utils/plugins'

/**
 * Enable Vue Data Loader plugin from unplugin-vue-router
 *
 * @see https://uvr.esm.is/rfcs/data-loaders/
 */
export default definePlugin(({ app, router }) => {
  app.use(DataLoaderPlugin, { router })
})
