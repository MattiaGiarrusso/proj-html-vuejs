<script>
export default {
    name: 'AppBecomeSetup',
    data () {
        return {
            cards: [
                {
                    img: 'image_box_1-221x231.png',
                    title: 'Become an Instructor',
                    text: 'Teach what you love, Masterstudy gives yoiu toois to create a course',
                    button: 'START TEACHING'
                },
                {
                    img: 'image_box_2-234x231.png',
                    title: 'Setup For Business',
                    text: 'Teach what you love, Masterstudy gives yoiu toois to create a course',
                    button: 'DOING BUSINESS'
                }
            ]
        }
    },
    methods: {
            getImageUrl(name) {
                return new URL(`../assets/img/${name}`, import.meta.url).href;
            }
    }
}
</script>

<template>
 <div class="container ms-container d-flex">

    <div class="col-6 d-flex align-items-center" v-for="card in cards">
        <div class="ms-30 pe-4">
            <img :src="getImageUrl(card.img)" alt="">
        </div>
        <div class="ms-70">
            <h5 class="fw-lighter">{{ card.title }}</h5>
            <p class="ms-fs-12">{{ card.text }}</p>
            <button class="btn ms-btn-blue rounded-pill ms-fs-12">{{ card.button }}</button>
        </div>
    </div>

 </div>

</template>

<style scoped lang="scss">

.ms-btn-blue:hover {
    background-color: #46C197;
    color: white;
}

.ms-container {
    gap: 20px
}

.col-6 {
    height: 250px;
}

.ms-30 {
    width: 30%;
}

.ms-70 {
    width: 70%;
}

</style>