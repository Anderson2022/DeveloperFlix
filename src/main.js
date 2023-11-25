import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueLazyload from "@jambonn/vue-lazyload";
import App from './App.vue'
import router from './router'
import './index.css'
// import VueYoutubeEmbed from 'vue-youtube-embed';
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)
import error from "./assets/error.png";
// app.use(VueYoutubeEmbed);
app.use(createPinia())
app.use(router)
app.use(vue3GoogleLogin, {
  clientId: 'YOUR_GOOGLE_CLIENT_ID'
})
  .use(VueLazyload, {
    observer: true,
    preLoad: 1.3,
    error,
    attempt: 1,
  })
app.mount('#app')
