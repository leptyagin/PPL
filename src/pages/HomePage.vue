<template>
    <div class="home-page">
        <div class="home-inner">
            <h1>Welcome to my <strong>vue.js</strong> project</h1>
            <p class="mt-5">
                This is my pet project<br>
                Made with vue.js 2, vuetify2, axios and vue-router<br>
            </p>
            <p>
                This project about movies and reviews to them<br>
                So here you can check reviews to films
            </p>
            <p class="mt-5">
                All data from <a href="https://jsonplaceholder.typicode.com/">JSONPlaceholder</a>
            </p>
            <div class="mt-5 link">
                <a class="social-link v-toolbar" href="https://t.me/leptyagin" target="_blank">
                    <svg fill="#ddd" width="30px" height="30px" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.26465,2.42773a2.04837,2.04837,0,0,0-2.07813-.32421L2.26562,9.33887a2.043,2.043,0,0,0,.1045,3.81836l3.625,1.26074,2.0205,6.68164A.998.998,0,0,0,8.134,21.352c.00775.012.01868.02093.02692.03259a.98844.98844,0,0,0,.21143.21576c.02307.01758.04516.03406.06982.04968a.98592.98592,0,0,0,.31073.13611l.01184.001.00671.00287a1.02183,1.02183,0,0,0,.20215.02051c.00653,0,.01233-.00312.0188-.00324a.99255.99255,0,0,0,.30109-.05231c.02258-.00769.04193-.02056.06384-.02984a.9931.9931,0,0,0,.20429-.11456,250.75993,250.75993,0,0,1,.15222-.12818L12.416,18.499l4.03027,3.12207a2.02322,2.02322,0,0,0,1.24121.42676A2.05413,2.05413,0,0,0,19.69531,20.415L22.958,4.39844A2.02966,2.02966,0,0,0,22.26465,2.42773ZM9.37012,14.73633a.99357.99357,0,0,0-.27246.50586l-.30951,1.504-.78406-2.59307,4.06525-2.11695ZM17.67188,20.04l-4.7627-3.68945a1.00134,1.00134,0,0,0-1.35352.11914l-.86541.9552.30584-1.48645,7.083-7.083a.99975.99975,0,0,0-1.16894-1.59375L6.74487,12.55432,3.02051,11.19141,20.999,3.999Z"/>
                    </svg>
                    telegram
                </a>

            </div>
            <div class="mt-5 link">
                <a href="https://github.com/leptyagin" class="social-link v-toolbar" target="_blank">
                    <svg width="30px" height="30px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                        <path fill="#ddd" fill-rule="evenodd"
                              d="M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.711 6.711 0 018 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A6.996 6.996 0 0015 7.993 6.997 6.997 0 008 1z"
                              clip-rule="evenodd"/>
                    </svg>

                    github
                </a>
            </div>

        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.home-page {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.home-inner {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 25px;
    border-radius: 16px;

    h1 {
        font-size: 72px;
        strong{
            color: #1ed593;
        }
        
        @media (max-width:1000px) {
            font-size: 40px;
            text-align: center;
        }
    }
    p{
        text-align: center;
        font-size: 22px;
        a{
            color: #1ed593;
        }

        @media (max-width:1000px) {
            font-size: 16px;
            text-align: center;
        }
    }
    .link{
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .social-link{
        background-color: #112222;
        display: inline-flex;

        padding: 7px 25px;
        border-radius: 16px;
        color: #ddd;
        text-transform: uppercase;
        text-decoration: none;
        align-items: center;
        gap: 9px;
        font-size: 22px;

        transition: all 0.3s ease;

        &:hover{
            padding: 7px 30px;
            background-color: #132;
        }

        @media (max-width:1000px) {
            font-size: 16px;
        }
    }
}
</style>