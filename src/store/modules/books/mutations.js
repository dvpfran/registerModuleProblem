export const ADD = 'add_book'
export const UPDATE_BOOKS = 'update_books'

const mutations = {
  [ADD](state, payload) {
    state.books = [...state.books, payload]
  },

  [UPDATE_BOOKS](state, payload) {
    state.books = payload
  }
}

export default mutations
