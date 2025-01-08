import '@/assets/main.css'

import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import config from '../formkit.config'
import { createPinia } from 'pinia'
import globalComponents from './utilities/global-components-init'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(autoAnimatePlugin)
app.use(plugin, defaultConfig(config))

globalComponents.forEach((c) => {
  app.component(c.name, c.component)
})

app.mount('#app')
