import Vue from 'vue'
import App from './App.vue'
// import VueThreeBox from '../packages/index'

Vue.config.productionTip = false
// Vue.use(VueThreeBox)

new Vue({
  render: h => h(App)
}).$mount('#app')
