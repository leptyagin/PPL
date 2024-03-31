<template>
    <v-card
        cols="2"
        class="mx-auto rounded-xxl"
        color="#122"
    >
        <v-card-text>
            <img class="card__img" :src="movie.url" :alt="movie.title">
        </v-card-text>
        <v-card-title>
            <h4 class="text-h4 text--primary">
                {{ movie.title }}
            </h4>
        </v-card-title>
        <v-card-actions>
            <v-btn color="#222" class="rounded-xl ml-2 mb-2">
                <router-link tag="div" :to="{ name : 'MoviePage', params: {id: movie.id}}" style="color: #1ed593;" class="v-btn">
                    More
                </router-link>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.card__img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 16px;
}
</style>