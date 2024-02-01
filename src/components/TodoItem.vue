<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  title: string,
  done: boolean
}>();

const isDone = ref(props.done);

</script>

<template>
  <h3 class="green">{{ title }}</h3>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

</style>
