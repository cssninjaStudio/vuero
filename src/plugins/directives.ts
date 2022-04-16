import { definePlugin } from '/@src/app'
import { vPreloadLink } from '/@src/directives/preload-link'
import { vTooltip } from '/@src/directives/tooltip'
import { vBackground } from '/@src/directives/background'

export default definePlugin(({ app }) => {
  // register global v-preload-link directive
  app.directive('preload-link', vPreloadLink)

  // register global v-tootltip directive
  app.directive('tooltip', vTooltip)

  // register global v-background directive
  app.directive('background', vBackground)
})
