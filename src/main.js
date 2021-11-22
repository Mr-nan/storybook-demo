import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import contextmenu from 'v-directive-contextmenu'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueRouter)
Vue.use(ElementUI)

Vue.use(contextmenu)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
