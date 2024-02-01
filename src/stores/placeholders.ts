import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const placeholderStore = defineStore('placeholders', () => {
  const placeholders = ref<string[]>([
    "Look up Vue's official documentation 📚",
    "Check out different tools for Vue development 🧪",
    "Pay Vue's ecosystem a visit 🌎",
    "Subscribe to our mailing list and follow Vue on Twitter 📨",
    "Help the community grow 👨‍👩‍👧‍👦"
  ]);
  const placeholder = computed<string>(() => {
    const index = randomInt(placeholders.value.length);
    console.log('executed');
    return placeholders.value[index];
  })

  return { placeholders: placeholders, placeholder: placeholder };
})

export function randomInt(max: number): number {
  return Math.floor(Math.random() * max);
}
