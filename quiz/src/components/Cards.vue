<template>
  <div class="ten wide column">
    <div class="ui card one centered">
      <div class="content">
        <div v-html="question.question"></div>
      </div>
      <div class="extra content">
        <div class="ui two buttons">
          <div v-on:click="answer" v-bind:class="question.correct_answer === 'True' ? 'green' : 'primary'" class="ui basic button">True</div>
          <div v-on:click="answer" v-bind:class="question.correct_answer === 'False' ? 'green' : 'primary'" class="ui basic button">False</div>
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
      this.$emit('answer', ev.target.innerText)
    }
  }
}
</script>
