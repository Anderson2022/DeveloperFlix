import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './index.css'
// import VueYoutubeEmbed from 'vue-youtube-embed';


const app = createApp(App)

// app.use(VueYoutubeEmbed);
app.use(createPinia())
app.use(router)

app.mount('#app')
