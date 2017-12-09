<template>
  <div class="ui text container grid">
    <progress-bar :percent="percent" />
    <div class="row">
      <steps-component
      :steps="results"
      :current="current"
      />
      <Cards
      v-if="question"
      v-on:answer="answer"
      :question="question"
      />
      <div v-else class="ui active inverted dimmer">
        <div class="ui large text loader">Loading</div>
      </div>
    </div>
  </div>
</template>

<script>
import Steps from '../components/Steps';
import Cards from '../components/Cards';
import axios from 'axios';

export default {
  created() {
    const url = 'https://opentdb.com/api.php?amount=5&type=boolean';
    axios.get(url)
      .then(res => this.results = res.data.results)
      .catch(err => console.error(err));
  },
  computed: {
    question() {
      return this.results[this.current]
    },
    percent() {
      return this.length && (this.current / this.length) * 100;
    },
    length() {
      return this.results.length
    },
  },
  methods: {
    answer(answer) {
      if (this.question.correct_answer === answer) {
        this.current += 1;
        if (this.current === this.length) {
          this.$router.push('/won');
        }
      } else {
        alert('Wrong Answer!')
      }
    },
  },
  components: {
    Cards,
    'steps-component': Steps,
  },
  data() {
    return {
      current: 0,
      results: [],
    }
  }
}
</script>
