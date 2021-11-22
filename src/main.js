import Vue from 'vue'
// import App from './App.vue'

import contextmenu from 'v-directive-contextmenu'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import route from './router'

Vue.use(ElementUI)

Vue.use(contextmenu)
Vue.config.productionTip = false


new Vue({
    route,
}).$mount('#app')
