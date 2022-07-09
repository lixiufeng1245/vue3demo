/*
 * @Author: leo
 * @FilePath: \yxj\src\store\index.js
 */
import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      number: 90909,
    },
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false },
    ],
  },
  getters: {
    getUsers: (state) => {
      return state.user.number;
    },
    doneTodos(state) {
      return state.todos.filter((todo) => todo.done);
    },
  },
  mutations: {
    getUser: (state, info) => {
      state.user = info;
    },
    getNumS: (state, n) => {
      state.user.number = n;
    },
  },
  actions: {
    getHttpUser: ({ commit }, info) => {
      commit("getUser", info);
    },
    getNum: ({ commit }, NUM) => {
      commit("getNumS", NUM);
    },
  },
  modules: {},
});
