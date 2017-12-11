<template>
  <div class="ui text container grid" style="margin: 50px 0">
    <div class="row">
      <progress-bar :percent="percent"></progress-bar>
    </div>
    <div class="row">
      <div class="ui mobile vertically reversed grid">
        <Steps
          :length="length"
          :current="current"
        ></Steps>
        <Cards
          v-if="question"
          v-on:cardAnswer="answer"
          :question="question"
        ></Cards>
        <div v-else class="ui active inverted dimmer">
          <div class="ui large text loader">Loading</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cards from '@/components/Cards'
import Steps from '@/components/Steps'
import { mapGetters, mapActions, } from 'vuex';

export default {
  created() {
    // dispatch invoke action from store (async)
    this.$store.dispatch('results')
  },
  // current is only used in this components
  // so we won't keep it in store
  data() {
    return {
      current: 0,
    }
  },
  computed: {
    question() {
      return this.$store.getters.question(this.current)
    },
    ...mapGetters([
      'length',
      'results',
      'percent',
    ]),
  },
  watch: {
    current(currentQuestion) {
      if (currentQuestion === this.length) {
        this.$router.push('/won')
      }
    }
  },
  methods: {
    answer(answ) {
      if (answ === this.question.correct_answer) {
        this.current++
      } else {
        this.$router.push('/wrong')
      }
    },
  },
  components: {
    Cards,
    Steps,
  },
}
</script>
