<template>
  <form @submit="deleteSelected" @submit.prevent>
    <div id="actions">
      <button class="action-button" type="button" @click="showAddForm = true">+</button>
      <button class="action-button" type="submit">-</button>
    </div>

    <div id="todos-container">
      <form v-if="showAddForm" class="todo-item" @submit="addNewTodo" @submit.prevent>
        <input id="new-todo-input" type="text" v-model="newTodoTitle" :placeholder="placeholderStore.placeholder" class="green">
        <input type="submit" hidden />
      </form>

      <div v-for="todo in todoStore.todos" :key="todo.title" class="todo-item" :class="{ selected: todo.selected }">
        <input type="checkbox" v-model="todo.selected" class="checkbox">
        <TodoItem :title="todo.title" :done="todo.done"/>
      </div>

      <div v-if="!todoStore.todos.length" class="green">
        <h2>{{ jokesStore.joke }}</h2>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">

import TodoItem from "@/components/TodoItem.vue";
import { ref } from "vue";
import type { Todo } from "@/stores/todos";
import { todoStore as tStore } from "@/stores/todos";
import { placeholderStore as pStore } from "@/stores/placeholders";
import { jokesStore as jStore } from "@/stores/jokes";

const todoStore = tStore();
const placeholderStore = pStore();
const jokesStore = jStore();
const newTodoTitle = ref('');
const showAddForm = ref(false);

function deleteSelected(): void {
  const todoIds = todoStore.todos.filter(todo => todo.selected).map(todo => todo.id);
  todoStore.delete(todoIds);
}

function addNewTodo(): void {
  if (!newTodoTitle.value.length) {
    return;
  }
  const newTodo: Todo = { id: todoStore.todos.length, title: newTodoTitle.value, selected: false, done: false };
  todoStore.create(newTodo);
  resetForm();
}

function resetForm(): void {
  showAddForm.value = false;
  newTodoTitle.value = '';
}
</script>

<style scoped>

.action-button {
  margin-left: 1em;
  background-color: var(--color-text-accent);
  border: none;
  padding: .4em .8em;
  font-size: 18pt;
  border-radius: .4em;
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
