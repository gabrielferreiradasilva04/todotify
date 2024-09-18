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
        indexTaskSelected: 0,
        showDialogDelete: false
    }),
    actions: {
        addTask() {
            this.tasks.push({
                title: this.titleTaskCreating,
            })
            this.titleTaskCreating = "";
        },
        toggleDelete(index) {
            this.showDialogDelete = !this.showDialogDelete;
            if (index != null) {
                this.indexTaskSelected = index;
            }
        },
        deleteTask() {
            this.taskStore.tasks.splice(this.indexTaskSelected, 1);
            this.taskStore.toggleDelete();
        }

    }
})
