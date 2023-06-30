export const UPDATE_RULES = 'update_rules'

const mutations = {
  [UPDATE_RULES](state, payload) {
    state.rules = payload
  }
}

export default mutations
