import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('rumon',val=>{
  if(!val || typeof(val) != 'string') return ''
  val = val.slice(0,10)
  return val
})

new Vue({
  render: h => h(App),
}).$mount('#app')
