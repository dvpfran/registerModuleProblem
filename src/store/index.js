import { createStore } from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

import book from './modules/books'
import rule from './modules/rules'

export const store = createStore({
  mutations,
  actions,
  getters,
  state: {},
  modules: { book },
})