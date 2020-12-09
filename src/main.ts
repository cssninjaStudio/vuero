import { createApp } from 'vue'
import Toast from 'vue-toastification'
import WebFont from 'webfontloader'

import router from '@src/router'
import App from '@src/App.vue'

import '@fortawesome/fontawesome-free/scss/fontawesome.scss'
import '@fortawesome/fontawesome-free/scss/regular.scss'
import '@fortawesome/fontawesome-free/scss/solid.scss'
import '@fortawesome/fontawesome-free/scss/brands.scss'
import '@src/assets/scss/index.scss'

WebFont.load({
  google: {
    families: ['Montserrat:400,500,600,700', 'Material+Icons'],
  },
})

const app = createApp(App)

app.use(router)
app.use(Toast)
app.mount('#app')
