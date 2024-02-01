<template>
  <div id="actions">
    <button class="action-button">+</button>
    <button class="action-button">-</button>
  </div>
  <div id="todos-container">
    <div v-for="todo in todos" :key="todo.title" class="todo-item" :class="{ selected: todo.selected }">
      <input type="checkbox" :value="todo.selected" @change="todo.selected = !todo.selected">
      <TodoItem :title="todo.title" :done="todo.done"/>
    </div>
  </div>
</template>

<script setup lang="ts">

import TodoItem from "@/components/TodoItem.vue";
import { ref } from "vue";

const todos =  ref([
  { id: 1, title: "Todo item 01", selected: false, done: false},
  { id: 2, title: "Todo item 02", selected: false, done: false},
  { id: 3, title: "Todo item 03", selected: false, done: false},
])
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
}

.todo-item.selected {
  background-color: var(--color-text-accent);
}
</style>
