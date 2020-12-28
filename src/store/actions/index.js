export default {
  addTodo({ commit }, text) {
    commit("addTodo", {
      id: Date.now(),
      text,
      done: false
    });
  },

  removeTodo({ commit }, todo) {
    commit("removeTodo", todo);
  },

  toggleTodo({ commit }, todo) {
    commit("editTodo", { todo, done: !todo.done });
  },

  editTodo({ commit }, { todo, value }) {
    commit("editTodo", { todo, text: value });
  },

  clearCompleted({ commit, state }) {
    state.todos
      .filter(todo => todo.done)
      .map(todo => commit("removeTodo", todo));
  }
};
