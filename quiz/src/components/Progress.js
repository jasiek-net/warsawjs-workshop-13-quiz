import Vue from 'vue'

Vue.component('progress-bar', {
  template: `
  <div class="column">
    <sui-progress v-bind:percent="percent" indicating></sui-progress>
  </div>
  `,
  props: ['percent'],
})
