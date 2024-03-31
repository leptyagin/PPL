<template>
    <div class="movies__catalog">
        <MovieCardComponent
            v-for="movie in movies"
            :movie="movie"
            v-bind:key="movie.id"
        />
    </div>
</template>

<script>
import MovieCardComponent from "@/components/MovieCardComponent.vue";
export default {
    components: {MovieCardComponent},

    data:() => ({
        movies: []
    }),

    mounted() {
        this.fetchToDo()
    },

    methods: {
         fetchToDo() {
             this.axios.get("https://jsonplaceholder.typicode.com/photos?_limit=10")
                 .then(response => this.movies = response.data)
         }
    }
}
</script>

<style lang="scss" scoped>
    .movies__catalog{
        max-width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 20px;

        @media (max-width:1600px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width:1000px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width:600px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>