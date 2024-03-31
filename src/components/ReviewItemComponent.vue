<template>
    <div class="comment__block rounded-xxl">
        <div class="comment__head">
            <p class="author-name">{{ review.name }}</p>
            <div class="author-email">{{ review.email }}</div>
        </div>
        <div class="comment__body">
            {{ review.body }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        review: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .comment__block{
        background-color: #122;
        padding: 10px 25px;
        .comment__head{
            display: flex;
            align-items: flex-end;
            gap: 20px;
            .author-name{
                padding: 0;
                margin: 0;
                font-size: 18px;
            }
            .author-email{
                padding: 0;
                margin: 0;
                font-size: 16px;
                color: #444;
                margin-bottom: 2px;
            }
            @media (max-width: 700px) {
                flex-direction: column-reverse;
                align-items: flex-start;
                gap: 13px;
            }
        }
        .comment__body {
            margin-top: 15px;
            font-size: 22px;
        }
    }
</style>