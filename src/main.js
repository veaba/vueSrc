// import Vue from '../vueTest'
import Vue from '../vueMy'
// import Vue from '../vueMy/dist/vue.runtime.esm.js'
// 应用的是 vue.runtime.esm这个文件
// vueTest\dist\vue.runtime.esm.js
// import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
