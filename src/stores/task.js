import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [
            {
                title: "Estudar Vue",
                description: "Estudar Vue com Vuetify"
            },
            {
                title: "Ler a Documentação",
                description: "Ler a documentação do vuetify"
            }
        ],
        titleTaskCreating: "",
         indexTaskSelected: false,
         showDialogTaskFields:false,
         showDialogDelete: false
    }),
    actions: {
        addTask() {
            this.tasks.push({
                title: this.titleTaskCreating,
            })
            this.titleTaskCreating = "";
        },
        toggleDelete (index) {
            showDialogDelete.value = !showDialogDelete.value;
            if (index != null) {
                indexTaskSelected.value = index;
            }
        }

    }
})
