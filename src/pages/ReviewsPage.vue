<template>
    <div>
        <div class="header">
            <h3 class="text-h3">
                latest reviews
            </h3>
        </div>
        <div class="comments__block">
            <ReviewItemComponent
                v-for="review in reviewsData"
                :review="review"
                v-bind:key="review.id"
            />
        </div>
    </div>
</template>

<script>
import ReviewItemComponent from "@/components/ReviewItemComponent.vue";

export default {
    components: {ReviewItemComponent},
    data: () => ({
        reviewsData: []
    }),

    mounted() {
        this.getReviews()
    },

    methods: {
        getReviews() {
            this.axios.get(`https://jsonplaceholder.typicode.com/comments?_limit=10`)
                .then(response => this.reviewsData = response.data)
        }
    }
}
</script>

<style lang="scss" scoped>
.comments__block {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>