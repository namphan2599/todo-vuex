<template>
  <div class="todo-bottom">
    <p>{{ tasksRemain }} task(s) left</p>
    <a href="#" @click="clearCompleted">Clear completed</a>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "TodoBottom",
  computed: {
    tasksRemain() {
      return this.$store.getters.activeTodos.length;
    },
  },
  methods: {
    ...mapActions(["clearCompleted"]),
  },
};
</script>
<style scoped>
.todo-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

a {
  color: gray;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>