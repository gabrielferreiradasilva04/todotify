<template>
    <v-list lines="three" select-strategy="classic">
        <v-list-subheader>Tasks</v-list-subheader>

        <v-list-item v-for="(task, index) in taskStore.tasks" :key="index" :value="index">
            <template v-slot:prepend="{ isActive }">
                <v-list-item-action start>
                    <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                </v-list-item-action>
            </template>

            <v-list-item-title>{{ task.title }}</v-list-item-title>

            <v-list-item-subtitle>
                {{ task.description }}
            </v-list-item-subtitle>

            <template v-slot:append>
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn color="grey-lighten" icon="mdi-dots-vertical" variant="text" v-bind="props">
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item value="1" @click="toggleEdit(index)">
                            <v-list-item-title>Editar</v-list-item-title>
                        </v-list-item>
                        <v-list-item value="2" @click="toggleDelete(index)">
                            <v-list-item-title>Deletar</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </template>
        </v-list-item>
    </v-list>

    <DialogTaskFields :dialog="showDialogTaskFields" @toggle="toggleEdit" :task="taskStore.tasks[indexTaskSelected]" />
    <DialogDelete :dialog="showDialogDelete" @toggle="toggleDelete" @deleteTask="deleteTask" />
</template>

<script setup>
import { ref } from 'vue';
import DialogTaskFields from './DialogTaskFields.vue';
import DialogDelete from './DialogDelete.vue';
import { useTaskStore } from '@/stores/task';

const taskStore = useTaskStore();

const indexTaskSelected = ref(0);
const showDialogTaskFields = ref(false);
const showDialogDelete = ref(false);

const toggleEdit = (index) => {
    showDialogTaskFields.value = !showDialogTaskFields.value;
    if (index != null) {
        indexTaskSelected.value = index;
    }
}
const toggleDelete = (index) => {
    showDialogDelete.value = !showDialogDelete.value;
    if (index != null) {
        indexTaskSelected.value = index;
    }
}

const deleteTask = () => {
    taskStore.tasks.splice(indexTaskSelected.value, 1);
    toggleDelete();
}
</script>
