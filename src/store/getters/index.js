export default {
    
    todos: state => {
      return state.todos
    },

    itemStatus: state => {
      return state.status
    },

    doneTodos: (state, getters) => {
      return getters.todos.filter(todo => todo.done)
    },

    activeTodos: (state, getters) => {
      return getters.todos.filter(todo => !todo.done)
    }
    
}