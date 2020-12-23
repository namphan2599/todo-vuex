<template>
  <div class="todo-item">
    <!-- 
            use "this.$vnode.key" to get the key of component 
            that passed by parent component 
        -->
    <input type="checkbox" :checked="todo.done" @change="toggleTodo(todo)" />
    <label
      v-if="isEdit === false"
      @dblclick="isEdit = true"
      :class="{ strikeout: todo.done }"
    >
      {{ todo.text }}
    </label>
    <input
      v-else
      v-focus="isEdit"
      type="text"
      class="edit-box"
      :value="todo.text"
      @keyup.enter="doneEdit"
      @keyup.esc="cancelEdit"
      @blur="cancelEdit"
    />
    <span @click="() => this.removeTodo(todo)">x</span>
  </div>
</template>
<script>
import { mapActions } from "vuex";

/*
    got some bug when check the checkbox on active and done tab

    currently researching on this website below
    https://vuejs.org/v2/guide/list.html#Maintaining-State

    well the reason for this bug is using index as key for components
    better use an unique id of item as key
*/
export default {
  name: "TodoItem",
  created() {
    console.log("item created");
  },
  data: function () {
    return {
      isEdit: false,
    };
  },
  // Custom Directives that make input focus when appear to DOM
  directives: {
    focus: function (el, { value }, { context }) {
      if (value) {
        context.$nextTick(() => el.focus());
      }
    },
  },
  methods: {
    ...mapActions(["toggleTodo", "editTodo", "removeTodo"]),
    doneEdit(e) {
      const value = e.target.value.trim();
      const { todo } = this;

      if (!value) {
        this.removeTodo(todo);
      } else if (this.isEdit) {
        this.editTodo({
          todo,
          value,
        });
      }
      this.isEdit = false;
    },
    cancelEdit() {
      this.isEdit = false;
    },
  },
  props: {
    todo: {
      type: Object,
    },
  },
};
</script>
<style scoped>
.todo-item {
  position: relative;
  margin: 10px 0;
  transition: 0.5s;
}

.todo-item:hover span {
  display: inline;
}

.edit-box {
  position: absolute;
  top: 0;
  left: 20px;
}

.strikeout {
  text-decoration: line-through;
  color: gray;
}

span {
  cursor: pointer;
  float: right;
  display: none;
}
</style>