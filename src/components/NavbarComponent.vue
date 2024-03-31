<template>
    <v-container>
        <v-app-bar class="rounded-xxl" color="#122">
            <v-btn color="#222" class="rounded-xl">
                <router-link to="/" style="color: #1ed593;" class="v-btn">
                    Home
                </router-link>
            </v-btn>
            <v-spacer/>
            <v-btn color="#222" class="rounded-xl">
                <router-link to="/movies" style="color: #1ed593;" class="v-btn">
                    movies
                </router-link>
            </v-btn>
            <v-btn color="#222" class="ml-4 rounded-xl">
                <router-link to="/reviews" style="color: #1ed593;" class="v-btn">
                    reviews
                </router-link>
            </v-btn>
        </v-app-bar>
    </v-container>
</template>

<script>
export default {
}
</script>
