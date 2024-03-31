<template>
    <v-app>
        <NavbarComponent/>

        <v-main>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-main>

    </v-app>
</template>

<script>

import NavbarComponent from "@/components/NavbarComponent.vue";

export default {
    name: 'App',

    components: {NavbarComponent},

    data: () => ({
        //
    }),
};
</script>
