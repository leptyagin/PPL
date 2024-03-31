import Vue from 'vue';
import VueRouter from "vue-router";
import MoviesCatalog from "@/pages/MoviesCatalog.vue";
import ReviewsList from "@/pages/ReviewsPage.vue";
import HomePage from "@/pages/HomePage.vue";
import MoviePage from "@/pages/MoviePage.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component:  HomePage,
    },
    {
        path: '/reviews',
        component: ReviewsList
    },
    {
        path: '/movies',
        component: MoviesCatalog
    },
    {
        path: "/movie/:id",
        name: "MoviePage",
        component: MoviePage,
        props: true,
    }
];


export default new VueRouter({
    mode: 'history',
    routes
})