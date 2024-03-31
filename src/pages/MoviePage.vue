<template>
    <div>
        <div class="header mb-10">
            <v-btn class="rounded-xxl">
                <router-link to="/movies" style="color: #1ed593;" class="v-btn">
                    go back
                </router-link>
            </v-btn>
        </div>
        <div class="page__inner">
            <img class="movie__img rounded-xxl" :src="photosData.url" alt="">

            <div class="info__block">
                <h2 class="text-h2">
                    {{ movieData.title }}
                </h2>

                <p class="description">
                    {{ movieData.body }}
                </p>
            </div>
        </div>
        <div class="comments__block">
            <h4 class="text-h3">Reviews</h4>
            <ReviewComponent
                v-for="comment in commentsData"
                :comment="comment"
                v-bind:key="comment.id"
            />
        </div>
    </div>
</template>

<script>
import ReviewComponent from "@/components/ReviewComponent.vue";

export default {
    components: {ReviewComponent},
    data: () => ({
        movieData: [],
        photosData: {},
        commentsData: []
    }),

    mounted() {
        this.getValues()
        this.getImage()
        this.getReviews()
    },

    methods: {
        getValues() {
            this.axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
                .then(response => this.movieData = response.data)
        },
        getImage() {
            this.axios.get(`https://jsonplaceholder.typicode.com/photos/${this.$route.params.id}`)
                .then(response => this.photosData = response.data)
        },
        getReviews() {
            this.axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}/comments`)
                .then(response => this.commentsData = response.data)
        }
    }
}
</script>

<style lang="scss" scoped>
.movie__img {
    width: 500px;
    height: 500px;

    @media (max-width: 1300px) {
        width: 250px;
        height: 250px;
    }
    @media (max-width: 700px) {
        width: 100%;
        height: auto;
    }
}

.page__inner {
    display: flex;
    align-items: flex-start;
    gap: 25px;

    @media (max-width: 700px) {
        flex-direction: column;
    }
}

.description {
    margin-top: 30px;
    max-width: 80%;
    font-size: 20px;
    @media (max-width: 700px) {
       max-width: 100%;
    }
}

.comments__block {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>