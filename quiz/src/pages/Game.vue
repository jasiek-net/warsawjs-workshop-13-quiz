<template>
  <div class="ui text container grid">
    <progress-bar :percent="percent" />
    <div class="row">
      <steps-component
        :steps="results"
        :current="current"
      />
      <Cards
        v-on:answer="answer"
        :question="question"
      />
    </div>
  </div>
</template>

<script>
import Steps from '../components/Steps';
import Cards from '../components/Cards';

export default {
  computed: {
    question() {
      return this.results[this.current]
    },
    percent() {
      return (this.current / this.length) * 100;
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
      results: [
      {
        "category": "Entertainment: Music",
        "type": "boolean",
        "difficulty": "easy",
        "question": "Eurobeat is primarily an Italian genre of music.",
        "correct_answer": "True",
        "incorrect_answers": [
        "False"
        ]
      },
      {
        "category": "History",
        "type": "boolean",
        "difficulty": "easy",
        "question": "The Spitfire originated from a racing plane.",
        "correct_answer": "True",
        "incorrect_answers": [
        "False"
        ]
      },
      {
        "category": "Entertainment: Video Games",
        "type": "boolean",
        "difficulty": "easy",
        "question": "The game &quot;Battlefield 1&quot; takes place during World War I.",
        "correct_answer": "True",
        "incorrect_answers": [
        "False"
        ]
      },
      {
        "category": "Mythology",
        "type": "boolean",
        "difficulty": "medium",
        "question": "The Japanese god Izanagi successfully returned his wife Izanami from the Underworld.",
        "correct_answer": "False",
        "incorrect_answers": [
        "True"
        ]
      },
      {
        "category": "Politics",
        "type": "boolean",
        "difficulty": "medium",
        "question": "George W. Bush lost the popular vote in the 2004 United States presidential election.",
        "correct_answer": "False",
        "incorrect_answers": [
        "True"
        ]
      }
      ]
    }
  }
}
</script>
