import { UPDATE_RULES } from "./mutations"

const actions = {
  fetchRules: ({ commit }) => {
    commit(UPDATE_RULES, [{ id: 1, name: 'rule1'}, { id: 2, name: 'rule1'}])
  },
}

export default actions
