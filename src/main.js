import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import Navi from './components/Navi/Navi.vue'
import router from './router'
import axios from 'axios'
Vue.prototype.$ajax = axios

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
   render: h => h(Navi)//可替代
  // components: { Navi },
  // template: '<Navi/>'
})