<template>
<div class="ten wide column">
  <div v-if="question" class="ui card one centered">
    <div class="content">
      <div class="header" v-html="question.question"></div>
    </div>
    <div class="extra content">
      <div class="ui two buttons">
        <div
          v-on:click="answer"
          class="ui basic red button"
        >
          False
        </div>
        <div
          v-on:click="answer"
          class="ui basic green button"
        >
          True
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['question'],
  methods: {
    answer(ev) {
      const { innerText } = ev.target
      this.$emit('cardAnswer', innerText)
    }
  }
}
</script>

<style scoped>
.card {
  width: 100% !important;
}
</style>