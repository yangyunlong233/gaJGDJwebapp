import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'

const app = createApp(App)
app.config.globalProperties.$axios = axios

app.use(store).use(router).mount('#app')
