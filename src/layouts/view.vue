<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer">
            <v-list>
                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/john.png" subtitle="To do List"
                    title="Gabriel Silva">

                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list :lines="false" density="compact" nav>
                <RouterLink v-for="(item, i) in items" :key="i" :to="item.to">

                    <v-list-item :value="item" color="primary">
                        <template v-slot:prepend>
                            <v-icon :icon="item.icon"></v-icon>
                        </template>

                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item>
                </RouterLink>

            </v-list>
        </v-navigation-drawer>

        <v-app-bar>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-app-bar-title>To Do List</v-app-bar-title>
        </v-app-bar>

        <v-main>
            <RouterView />
        </v-main>
    </v-app>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(null)

const items = [
    { text: 'Home', icon: 'mdi-folder', to: "/home" },
    { text: 'About', icon: 'mdi-account-multiple', to: "/about" }
]
</script>

<style scoped>
a {
    text-decoration: none;
}
</style>
