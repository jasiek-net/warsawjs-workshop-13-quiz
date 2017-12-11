// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './components/Progress'
import SuiVue from 'semantic-ui-vue'
import 'semantic-ui-css/semantic.min.css'

Vue.config.productionTip = false

Vue.use(SuiVue)

new Vue({
  store,
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
