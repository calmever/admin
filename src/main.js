import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import less from "less"
import 'element-ui/lib/theme-chalk/index.css'
import MyHttpServer from "./network/request"



Vue.use(MyHttpServer)
Vue.use(ElementUI);
Vue.use(less)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
