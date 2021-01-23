import type { App } from 'vue'
import hasChildren from './has-children'
import background from './background'

export default function installDirectives(app: App) {
  hasChildren(app)
  background(app)
}
