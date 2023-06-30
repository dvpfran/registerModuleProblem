import { UPDATE_BOOKS } from "./mutations"
import { ADD } from './mutations'

const actions = {
  fetchBooks: ({ commit }) => {
    commit(UPDATE_BOOKS, [{ id: 1, name: 'Book1'}, { id: 2, name: 'Book2'}])
  },

  addBook: ({ commit }, payload) => {
    commit(ADD, payload)
  }
}

export default actions
