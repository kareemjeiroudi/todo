<script setup lang="ts">
import TodosContainer from "@/components/TodosContainer.vue";
</script>

<template>
  <div id="todos-container">

  <TodosContainer />
  </div>
</template>

<style scoped>

#todos-container {
  box-shadow: 0 0 2em .1em var(--color-text-accent);
  padding: 2em;
  border-radius: .4em;
  min-height: 90%;
}

</style>