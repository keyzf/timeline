import Vue from 'vue'
import App from './App.vue'
import routes from './routes/routes'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import store from './store/store'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueQuillEditor)
Vue.use(Vuex)

// vue-router
const router = new VueRouter({
  routes
})
router.push('index')

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
