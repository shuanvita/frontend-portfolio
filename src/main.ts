import './app/styles/main.css'
import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import App from './app/entrypoint/App.vue'
import { router } from '@/app/routes/routes.ts'

const app = createApp(App)

app.use(router)
app.use(plugin, defaultConfig)
app.mount('#app')
