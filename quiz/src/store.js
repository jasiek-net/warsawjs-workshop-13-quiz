import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  count: 5,
  results: [],
}

const getters = {
  count: state => state.count,
  results: state => state.results,
  question: state => index => state.results[index],
  length: state => state.results.length,
  percent(state, getters) {
    return getters.length ? (state.current / getters.length) * 100 : 0;
  },
}

const mutations = {
  increment(state) {
    state.count++
  },
  decrement(state) {
    if (state.count > 1) {
      state.count--
    }
  },
  results(state, payload) {
    state.results = payload
  },
}

const actions = {
  results({ commit, getters }) {
    commit('results', [])
    const { count } = getters
    const url = `https://opentdb.com/api.php?amount=${count}&type=boolean`;
    axios.get(url)
      .then(res => commit('results', res.data.results))
      .catch(err => console.error(err));
  },
}

const store = new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
})

export default store;

