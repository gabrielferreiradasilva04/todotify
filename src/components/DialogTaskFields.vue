<template>
    <div class="text-center pa-4">
        <v-dialog v-model="props.dialog" max-width="600" min-width="400" persistent>
            <!-- <template v-slot:activator="{ props: activatorProps }">
                <v-btn v-bind="activatorProps">
                    Open Dialog
                </v-btn>
            </template> -->

            <v-card title="Editar Tarefa">
                <v-card-text>
                    <v-text-field v-model="props.task.title" label="Title" variant="outlined"></v-text-field>
                    <v-text-field v-model="props.task.description" label="Description"
                        variant="outlined"></v-text-field>
                </v-card-text>
                <template v-slot:actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="$emit('toggle')">
                        Ok
                    </v-btn>
                </template>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    dialog: Boolean,
    task: Object
});
</script>