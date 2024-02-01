<template>
  <form @submit="deleteSelected" @submit.prevent>
    <div id="actions">
      <button class="action-button" type="button" @click="showAddForm = true">+</button>
      <button class="action-button" type="submit">-</button>
    </div>

    <div id="todos-container">
      <form v-if="showAddForm" class="todo-item" @submit="addNewTodo" @submit.prevent>
        <input id="new-todo-input" type="text" v-model="newTodoTitle" placeholder="Finish task RKU-314" class="green">
        <input type="submit" hidden />
      </form>

      <div v-for="todo in todos" :key="todo.title" class="todo-item" :class="{ selected: todo.selected }">
        <input type="checkbox" v-model="todo.selected" class="checkbox">
        <TodoItem :title="todo.title" :done="todo.done"/>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">

import TodoItem from "@/components/TodoItem.vue";
import { ref } from "vue";

type Todo = {
  id: number,
  title: string,
  selected: boolean,
  done: boolean
}

const todos =  ref([
  { id: 1, title: "Todo item 01", selected: false, done: false},
  { id: 2, title: "Todo item 02", selected: false, done: false},
  { id: 3, title: "Todo item 03", selected: false, done: false},
  { id: 4, title: "Todo item 04", selected: true, done: false},
  { id: 5, title: "Todo item 05", selected: false, done: false},
])

let newTodoTitle = '';
const showAddForm = ref(false);

function deleteSelected(): void {
  todos.value = todos.value.filter(todo => !todo.selected);
}

function addNewTodo(): void {
  if (!newTodoTitle.length) {
    return;
  }

  const newTodo: Todo = {id: todos.value.length, title: newTodoTitle, selected: false, done: false };
  todos.value = [newTodo, ...todos.value];
  resetForm();
}

function resetForm(): void {
  showAddForm.value = false;
  newTodoTitle = '';
}
</script>

<style scoped>

.action-button {
  margin-left: 1em;
  background-color: var(--color-text-accent);
  border: none;
  padding: .4em .8em;
  font-size: 18pt;
  border-radius: 10%;
}

#actions {
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 2em;
}

#todos-container {
  width: 100%;
}

.todo-item {
  border-top: grey solid 0.02em;
  display: flex;
  align-items: center;
  column-gap: 1em;
  padding: 0 .2em;
}

form.todo-item {
  border: none;
}

.todo-item.selected {
  background-color: var(--color-text-accent);
}

#new-todo-input {
  padding: .4em .8em;
  font-size: 1.2rem;
  width: 100%;
  background-color: var(--color-background-soft);
}

input.checkbox {
  transform: scale(1.4);
}
</style>
