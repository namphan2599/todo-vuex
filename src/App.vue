<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-form></todo-form>
    <todo-filter></todo-filter>
    <todo-list></todo-list>
    <todo-bottom></todo-bottom>
    <!-- <p>{{ activeTodosCount }} task(s) left</p> -->
  </div>
</template>
<script>
import TodoFilter from "./components/TodoFilter.vue";
import TodoForm from "./components/TodoForm.vue";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoBottom from "./components/TodoBottom";

export default {
  name: "app",
  components: {
    TodoHeader,
    TodoFilter,
    TodoForm,
    TodoList,
    TodoBottom,
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    doneTodosCount() {
      return this.$store.getters.doneTodos.length;
    },
    activeTodosCount() {
      return this.$store.getters.activeTodos.length;
    },
  },
  methods: {},
};
</script>
<style>
* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 300px;
  margin: 0 auto;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
