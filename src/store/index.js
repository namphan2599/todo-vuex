/* eslint-disable prettier/prettier */
import Vue from "vue";
import Vuex from "vuex";

import actions from './actions'
import { mutations, STORAGE_KEY } from './mutations'
import getters from './getters'

import storePlugin from './plugin'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: 'all',
    todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },
  getters,
  mutations,
  actions,
  plugins: [storePlugin]
});
