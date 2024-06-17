// son las importaciones de afuera de mi proyecto, como: viutify, bootstraoVue... etc

// rutas
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// mis archivos principales de rutas
import App from './App.vue'
import router from './router'



const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
