<template>
  <div class="todo-filter">
    <a
      href="#"
      name="all"
      @click="changeItemsStatus"
      :class="{ selected: status === 'all' }"
    >
      All
    </a>
    <a
      href="#"
      name="active"
      @click="changeItemsStatus"
      :class="{ selected: status === 'active' }"
    >
      Active
    </a>
    <a
      href="#"
      name="done"
      @click="changeItemsStatus"
      :class="{ selected: status === 'done' }"
    >
      Done
    </a>
  </div>
</template>
<script>
export default {
  name: "TodoFilter",
  methods: {
    changeItemsStatus(event) {
      event.preventDefault();
      console.log(event.target.name);
      this.$store.commit("changeStatus", event.target.name);
    },
  },
  computed: {
    status() {
      return this.$store.getters.itemStatus;
    },
  },
};
</script>
<style scoped>
.todo-filter {
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
}

a {
  color: #41b883;
  text-decoration: none;
}

.selected {
  text-decoration: underline;
}
</style>