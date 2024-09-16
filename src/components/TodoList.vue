<template>
    <v-text-field clearable label="Add Text" @keyup.enter="addTask()" v-model="task.title"></v-text-field>

    <ListTasks :tasks="tasks" />
</template>

<script setup>
import ListTasks from './ListTasks.vue';

import { ref } from 'vue'
const tasks = ref([
    {
        title: "Estudar Vue",
        description: "Estudar Vue com Vuetify"
    },
    {
        title: "Ler a Documentação",
        description: "Ler a documentação do vuetify"
    }
]);
const task = ref({
    title: "",
    description: "",
});
const addTask = () => {
    tasks.value.push({
        title: task.value.title,
        description: task.value.description
    })
    task.value = {
        title: "",
        description: "",
    }
} 
</script>