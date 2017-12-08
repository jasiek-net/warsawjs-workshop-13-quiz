<template>
  <div class="six wide column">
    <div class="ui vertical steps">
      <div
        class="step"
        v-for="_, index in steps"
        v-bind:class="{ active: index === current, completed: index < current }"
      >
        <i class="question icon"></i>
        <div class="content">
          <div class="title">Question {{ index + 1 }}</div>
          <div class="description">Question for {{ (index + 1) * 100 }} $</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      steps: {
        required: true,
        type: Array
      },
      current: {
        required: true,
        type: Number,
      }
    },
    // or simpler...
    // props: [
    //   'steps',
    //   'current',
    // ],
  }
</script>

<style>

</style>