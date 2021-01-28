import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import installPlugins from './plugins'
import App from './App.vue'

const app = createApp(App)
const head = createHead()
installPlugins(app)

app.use(head)
app.mount('#app')
