// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import SuiVue from 'semantic-ui-vue'
import 'semantic-ui-css/semantic.min.css'

Vue.config.productionTip = false

Vue.use(SuiVue)

Vue.component('progress-bar', {
  template: `
      <div class="row">
        <div class="column">
          <sui-progress :percent="percent" indicating></sui-progress>
        </div>
      </div>
  `,
  props: ['percent'],
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
