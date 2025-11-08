import './app/styles/main.css'
import { createApp } from 'vue'
import App from './app/entrypoint/App.vue'
import { router } from '@/app/routes/routes.ts'

const app = createApp(App)

app.use(router)
app.mount('#app')
