import Vue from "vue";
import Vuex from "vuex";

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: 'all',
    todos: [
      { id: 1, text: 'No thing', done: true },
      { id: 2, text: 'No thing 2', done: false }
    ],
  },
  getters,
  mutations,
  actions,
});
