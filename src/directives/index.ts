import type { App } from 'vue'
import hasChildren from './has-children'

export default function installDirectives(app: App) {
  hasChildren(app)
}
