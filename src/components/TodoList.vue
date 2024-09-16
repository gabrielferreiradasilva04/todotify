<template>
    <v-text-field clearable label="Add Text" @keyup.enter="taskStore.addTask()"
        v-model="taskStore.titleTaskCreating"></v-text-field>

    <ListTasks/>
</template>

<script setup>
import ListTasks from './ListTasks.vue';
import { useTaskStore } from '@/stores/task';

const taskStore = useTaskStore();

</script>