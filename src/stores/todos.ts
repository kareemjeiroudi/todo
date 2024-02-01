import { ref } from 'vue'
import { defineStore } from 'pinia'

export type Todo = {
  id: number;
  title: string;
  selected: boolean;
  done: boolean;
}

export const todoStore = defineStore('todos', () => {
  const todos = ref<Todo[]>([]);

  function create(todo: Todo): void {
    todos.value.push(todo);
  }

  function remove(todoIds: number[]): void {
    todos.value = todos.value.filter(t => !todoIds.includes(t.id));
  }

  return { todos: todos, create: create, delete: remove}
})
