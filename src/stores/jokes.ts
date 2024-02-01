import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { randomInt } from "@/stores/placeholders";

export const jokesStore = defineStore('jokes', () => {
  const jokes = ref<string[]>([
    "You have no todos left. Fantastic! 🏀",
    "Jokes aside. You're fantastic! 🪭",
    "It's like magic 🪄",
    "Go get a massage 💆‍💆‍",
    "What a boring day 🥱. Nothing todo..."
  ]);
  const joke = computed<string>(() => {
    const index = randomInt(jokes.value.length);
    console.log('executed');
    return jokes.value[index];
  })


  return { jokes: jokes, joke: joke };
})
