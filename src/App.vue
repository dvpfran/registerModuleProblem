<script setup>
import { store } from './store'
import { computed } from 'vue';

store.dispatch('book/fetchBooks')

const books = computed(() => store.getters['book/books']);

const addBook = () => {
  const newId = books.value.length + 1;

  store.dispatch('book/addBook', {
    id: newId,
    name: `book number: ${newId}`,
  })
}

const addRules = async () => {
  const ruleModule = await import('./store/modules/rules')

  if (!store.hasModule('rule')) {
    store.registerModule('rule', ruleModule.default)
    console.log('added rule module')
  }

  store.dispatch('rule/fetchRules')
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div>
      <div v-for="book in books">
        <span style="font-weight: bold">id: {{ book.id }}</span>
        <p>name: {{ book.name }}</p>
      </div>
    </div>

    <div class="wrapper">
      <button @click="addBook">Fetch Books</button>
    </div>

    <div class="wrapper">
      <button @click="addRules">Add Rules Store</button>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
