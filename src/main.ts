import './app/styles/main.css'
import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import App from './app/entrypoint/App.vue'
import { router } from '@/app/routes/routes.ts'
import hljs from 'highlight.js/lib/core'
import 'highlight.js/styles/atom-one-dark.min.css'
import './app/styles/hljs-theme.css'
import javascript from 'highlight.js/lib/languages/javascript'
import hljsVuePlugin from '@highlightjs/vue-plugin'

hljs.registerLanguage('javascript', javascript)

const app = createApp(App)

app.use(router)
app.use(plugin, defaultConfig)
app.use(hljsVuePlugin)
app.mount('#app')
