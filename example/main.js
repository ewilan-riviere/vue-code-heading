import Vue from 'vue'
import App from './App.vue'
import VueCodeInfo from '../index'
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/night-owl.css'

import './css/tailwind.css'

// for markdown style
import './css/air.css'

Vue.config.productionTip = false

Vue.use(VueHighlightJS)
Vue.use(VueCodeInfo, {
  option: 'option',
})

new Vue({
  render: (h) => h(App),
}).$mount('#app')
