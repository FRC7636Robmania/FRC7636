import Vue from 'vue';
import Vuetify from 'vuetify';
import '@mdi/js';


Vue.use(Vuetify);


export default new Vuetify({
    theme:{
        dark: true,
    },
    breakpoint: {
        thresholds: {
          sm: 600,
          md: 984,
          lg: 1904,
        },
        scrollBarWidth: 24,
      },
      icons: {
        iconfont: 'mdiSvg'
      }
});
