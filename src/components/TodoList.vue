<template>
  <div class="todo-list">
    <todo-item
      v-for="todo in itemsByStatus"
      :key="todo.id"
      :todo="todo"
    ></todo-item>
  </div>
</template>
<script>
import TodoItem from "./TodoItem";

export default {
  name: "TodoList",
  created() {
    console.log("created" + this.name);
  },
  components: {
    TodoItem,
  },
  computed: {
    statusFromStore() {
      return this.$store.getters.itemStatus;
    },
    itemsByStatus() {
      switch (this.statusFromStore) {
        case "active":
          return this.$store.getters.activeTodos;
        case "done":
          return this.$store.getters.doneTodos;
        default:
          return this.$store.getters.todos;
      }
    },
  },
};
</script>

<style scoped>
.todo-list {
  margin-top: 20px;
}
</style>