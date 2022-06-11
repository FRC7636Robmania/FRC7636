import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import Carousel3d from 'vue-carousel-3d'
import vuePositionSticky from 'vue-position-sticky'
import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css'

let app = createApp({
  router,
  vuetify,
  render: function (h) { return h(App) },
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
})

app
  .use(Carousel3d)
  .use(vuePositionSticky)
  .mount('#app')


