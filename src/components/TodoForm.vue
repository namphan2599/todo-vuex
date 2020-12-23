<template>
  <div class="todo-form">
    <input
      type="text"
      v-model="formValue"
      @keyup.enter="addTodo"
      placeholder="What need to be done"
    />
  </div>
</template>
<script>
export default {
  name: "TodoForm",
  data: function () {
    return {
      formValue: "",
    };
  },
  methods: {
    // this must be a better way
    addTodo(e) {
      const text = e.target.value;
      if (text.trim()) {
        this.$store.dispatch("addTodo", text);
      }
      this.formValue = "";
    },
  },
};
</script>
<style scoped>
input {
  width: 100%;
  background: #ddd;
  border: none;
  outline: none;
  padding: 15px;
  border-radius: 30px;
}
</style>