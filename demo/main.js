import Vue from 'vue'
import App from './App'
import VueMorph from '../dist/plugin'
import VueRouter from 'vue-router'
import router    from './router'

Vue.use(VueMorph, {
  defaultEventType: 'morph',
  morphingLayerName: 'morphing-layer',
  defaultEasing: 'easeInOutElastic',
  defaultDuration: 700,
  defaultClassName: 'morphing-div'
})
Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
})
