const STORAGE_KEY = "todo-vuejs";

const mutations = {
  changeStatus(state, newStatus) {
    state.status = newStatus;
  },

  addTodo(state, newTodo) {
    state.todos.push(newTodo);
  },

  removeTodo(state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1);
  },

  // for both toggle and edit
  editTodo(state, { todo, text = todo.text, done = todo.done }) {
    const index = state.todos.indexOf(todo);
    state.todos.splice(index, 1, {
      ...todo,
      text,
      done
    });
  }
};

export { mutations, STORAGE_KEY };
