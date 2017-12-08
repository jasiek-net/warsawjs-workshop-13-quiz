import Vue from 'Vue';

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
