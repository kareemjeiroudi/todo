<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Welcome to Matata your all favorite todo application. Halt dich fest.
    </h3>
    <h3>What's next?</h3>
      <iframe id="hakuna-matata-tv" width="400" height="250" src="https://www.youtube.com/embed/kaOIxll4LCA?si=wIgMRdg__xoVwGsZ"
              title="Hakuna Matata"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
      ></iframe>
  </div>
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

#hakuna-matata-tv {
  margin: 2em;
  box-shadow: 0 0 1em .1em var(--color-text-accent);
  border: none;
  border-radius: .4em;
}

</style>
