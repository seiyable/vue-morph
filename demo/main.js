import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import _store    from './store'
import VueMorph from '../dist/plugin'

Vue.use(Vuex)
const store = new Vuex.Store(_store)
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
  store: store,
  template: '<App/>',
  components: { App }
})
