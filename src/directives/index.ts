import type { ViteSSGContext } from 'vite-ssg'
import hasChildren from './has-children'

export default function installDirectives({ app }: ViteSSGContext) {
  hasChildren(app)
}
