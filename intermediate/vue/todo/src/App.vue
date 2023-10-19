<template>
  <div>
    <h1>Favorite Foods</h1>
    <draggable v-model="favoriteFoods" tag="ul">
      <template #item="{ element: food }">
        <li style="cursor: move">{{ food.text }}</li>
      </template>
    </draggable>


  </div>
</template>

<script setup>
import { ref } from 'vue'
import draggable from 'vuedraggable'

const favoriteFoods = ref([
  {
    id: 1,
    text: 'Hamburger'
  },
  {
    id: 2,
    text: 'Pizza'
  },
  {
    id: 3,
    text: 'Spaghetti'
  },
  {
    id: 4,
    text: 'Tacos'
  },
  {
    id: 5,
    text: 'Teriyaki Chicken'
  }
])
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
