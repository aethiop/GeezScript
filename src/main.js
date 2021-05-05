import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'splitpanes/dist/splitpanes.css'
import './index.css'

createApp(App).use(router).mount('#app')
