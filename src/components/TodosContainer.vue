<template>
  <div id="actions">
    <button class="action-button">+</button>
    <button class="action-button">-</button>
  </div>
  <div id="todos-container">
    <TodoItem v-for="todo in todos" :key="todo.title" class="todo-item" :title="todo.title" />
  </div>
</template>

<script setup lang="ts">

import TodoItem from "@/components/TodoItem.vue";
import { ref } from "vue";

const todos =  ref([
  { title: "Todo item 01"},
  { title: "Todo item 02"},
  { title: "Todo item 03"},
])
</script>

<style scoped>

.action-button {
  margin-left: 1em;
  background: antiquewhite;
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
}

</style>
