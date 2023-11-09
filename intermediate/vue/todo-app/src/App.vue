<template>
  <div class="flex justify-center bg-contain bg-no-repeat bg-gray-900"
    style="background-image: url('./src/assets/bg-mobile-dark.jpg');">
    <div class=" flex flex-col w-[26em]">
      <header class="text-3xl py-8 font-bold text-white">TODO</header>
      <div>
        <div id="input-box" class="box-color p-6 rounded-lg flex items-center gap-4">
          <div class="w-6 h-6 border-solid border-2 box-circle rounded-full  flex  items-center justify-center">
            <!-- <img src="./assets/icon-check.svg" alt=""> -->
          </div>
          <input type="text" v-model="inputNewTask" placeholder="Create a new todo..." @keyup.enter="addTask"
            class="box-color text-white outline-none">
        </div>
        <div class="mt-4 rounded-lg box-color">

          <div v-if="tasks.length">

            <draggable v-model="tasks" tag="div" :itemKey="task => task.id">
              <template #item="{ element: task }">
                <div class="p-6 flex items-center text-white cursor-pointer task justify-between" v-if="filterItem(task)">
                  <div class="flex gap-4 " @click="toggleComplete(task.id)">
                    <div class="w-6 h-6 border-solid border-2 box-circle rounded-full flex items-center justify-center"
                      :class="{ 'check-bg': task.completed }">
                      <img v-if="task.completed" src="./assets/icon-check.svg" alt="">
                    </div>
                    <div :class="{ 'completed secondary-font-color ': task.completed }">
                      {{ task.text }}
                    </div>
                  </div>
                  <div @click="clearTask(task.id)">
                    <img src="./assets/icon-cross.svg" alt="">
                  </div>
                </div>
              </template>
            </draggable>

            <div class="flex p-6 justify-between task secondary-font-color">
              <div>
                {{ tasks.length }} items left
              </div>
              <div class="cursor-pointer" @click="clearCompeted()">
                Clear Completed
              </div>
            </div>
          </div>
          <div v-else class="secondary-font-color p-6">
            You currently have no tasks pending.
          </div>
        </div>
        <div class="mt-4 box-color secondary-font-color p-6 rounded-lg flex justify-center gap-6  font-bold">
          <button @click="setFilter('all')" :class="{ 'active-filter': filterCriteria === 'all' }">All</button>
          <button @click="setFilter('active')" :disabled="!checkForActive"
            :class="[{ 'active-filter': filterCriteria === 'active' }, { 'cursor-not-allowed': !checkForActive }]">
            Active</button>
          <button @click="setFilter('completed')" :disabled="checkForCompleted"
            :class="[{ 'active-filter': filterCriteria === 'completed' }, { 'cursor-not-allowed': checkForCompleted }]">Completed</button>
        </div>
      </div>
      <div class="py-8 text-center secondary-font-color font-bold">
        Drag and drop to reorder list
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import draggable from 'vuedraggable'
const setFilter = (filter) => {
  filterCriteria.value = filter
}
const inputNewTask = ref('')
const checkForCompleted = computed(() => {
  return !tasks.value.some(task => task.completed === true)
})

const checkForActive = computed(() => {
  return tasks.value.some(task => task.completed === false)
})

const addTask = () => {
  if (inputNewTask.value.trim() !== '') {
    let newTask = {
      id: tasks.value.length + 1,
      text: inputNewTask.value,
      completed: false
    }
    tasks.value.push({ ...newTask })
    inputNewTask.value = ''
  }
}

const clearTask = (id) => {
  tasks.value = tasks.value.filter(task => task.id !== id);
}

const clearCompeted = () => {
  tasks.value = tasks.value.filter(task => task.completed === false)
}

const toggleComplete = (id) => {
  tasks.value.forEach((task) => {
    if (task.id === id) {
      task.completed = !task.completed;
    }
  })
}

const tasks = ref([
  {
    id: 1,
    text: 'Complete online JavaScript course',
    completed: true
  },
  {
    id: 2,
    text: 'Jog around the park x',
    completed: false
  },
  {
    id: 3,
    text: '10 minutes meditation',
    completed: false
  },
  {
    id: 4,
    text: 'Read for 1 hour',
    completed: false
  },
  {
    id: 5,
    text: 'Pick up groceries',
    completed: false
  },
  {
    id: 6,
    text: 'Complete Todo App on Frontend Mentor',
    completed: false
  }
])

// filter
// handle returning of view
const filterItem = (task) => {
  if (filterCriteria.value === 'completed') {
    if (task.completed) {
      return true
    }
  } else if (filterCriteria.value === 'active') {
    if (!task.completed) {
      return true
    }
  } else {
    return true
  }
}

const filterCriteria = ref('all')

</script>

<style>
.completed {
  text-decoration: line-through;
}

.task:not(:last-child) {
  cursor: pointer
}

.border-top {
  border-top: 1px solid #5D5F7E;
}

.box-color {

  background-color: #25263D;
}

.box-circle {
  border-color: #36384D;
}

.task:not(:first-child) {
  border-top: 1px solid #5D5F7E;
}

.check-bg {
  background: linear-gradient(192deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
}

.active-filter {
  color: hsl(220, 98%, 61%)
}

.secondary-font-color {
  color: #5D5F7E;
}
</style>
