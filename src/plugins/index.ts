import { App } from 'vue'
import installRouter from './router'
import installToast from './toast'
import './icons'
import './webfonts'
import './scss'

export default (app: App) => {
  installRouter(app)
  installToast(app)
}
