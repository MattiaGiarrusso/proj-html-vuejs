<script>
import { store } from '../store.js'

export default {
    name: 'AppHero',
    data() {
        return {
            store,
            boxs: [
            {
                title: 'Worldwide Recognize',
                paragraph: "With over 1200 courses in 18 subject, you are guaranteed to find something that's right for you.",
                icon: 'fa-earth-americas'               
            },
            {
                title: 'Mostly Online Learning (sd)',
                paragraph: 'Masterfully online certificates can be obtained in a range of specialized areas and typically take about a year to complete.',
                icon: 'fa-display'               
            },
            {
                title: 'Graduate in as little as 1 Year',
                paragraph: 'Online post graduated certicates are a popular way to develop your professional qualifications of MasterStudy.',
                icon: 'fa-calendar-check'               
            },    
            ],
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
    <section class="hero container ms-container">

        <div class="row">
            <div class="col-7">
                <div>
                    <h1 class="fw-lighter">Start investing in you</h1>
                    <span>With over 1200 courses in 18 subject, you're guaranteed to find something that's right for you.</span>
                </div>
                <div class="pt-3">
                    <button type="button" class="btn ms-btn-blue ms-fs-10 rounded-pill">JOIN FOR FREE</button>
                </div>
            </div>

            <div class="col-5 hero-image">
                <img src="../assets/img/base.png" class="ms-base-hero" alt="">
                <img src="../assets/img/book1.png" class="ms-book-one" alt="">
                <img src="../assets/img/book2.png" class="ms-book-two" alt="">
            </div>
        </div>

        <div class="row ms-row-hero mt-5 px-2">
            <div v-for="box in boxs" class="col ms-rettangular px-3 d-flex flex-column justify-content-between">
                <div class="pt-3">
                    <i class="fa-solid ms-text-blue fs-1" :class="box.icon"></i>
                </div>
                <div>
                    <strong class="ms-fs-12">{{ box.title }}</strong>
                    <p class="text-start ms-fs-12">{{ box.paragraph }}</p>                    
                </div>
            </div>            
        </div>

        <div class="container mt-5 px-0">
            <div class="row">

                <div class="col-8">
                    <div>
                        <img src="../assets/img/cat_1-770x375.jpg" alt="">
                    </div>
                    <figcaption class="d-flex justify-content-between ms-fs-12">
                        <strong>Software Development</strong>
                        <span>5 Courses</span>
                    </figcaption>
                </div>

                <div class="col-4 d-flex flex-column justify-content-between">
                    <div class="ms-box">
                        <div>
                            <img src="../assets/img/cat_2-370x155.jpg" alt="">
                        </div>
                        <figcaption class="d-flex justify-content-between ms-fs-12">
                            <strong>Art</strong>
                            <span>8 Courses</span>
                        </figcaption>
                    </div>
                    <div class="ms-box">
                        <div>
                            <img src="../assets/img/cat_3-370x155.jpg" alt="">
                        </div>
                        <figcaption class="d-flex justify-content-between ms-fs-12">
                            <strong>Material Design</strong>
                            <span>5 Courses</span>
                        </figcaption>
                    </div>
                </div>

            </div>

            <div class="row mt-3">
                <div v-for="pic in store.picBoxs" class="col">
                    <div>
                        <img :src="getImageUrl(pic.image)" alt="">
                    </div>
                    <figcaption class="d-flex justify-content-between ms-fs-12">
                        <strong>{{ pic.title }}</strong>
                        <span>{{ pic.course }}</span>
                    </figcaption>
                </div>
            </div>
        </div>
        
    </section>

</template>

<style scoped lang="scss">

@use '../style/generic';

.hero {
    padding-bottom: 100px;
}

.col-7 {
    padding-top: 100px;
}

.ms-btn-blue:hover {
    background-color: #1654b4;
    color: white;
}

.hero-image {
    
    .ms-base-hero {
        width: 120%;
        position: relative;
    }
    
    .ms-book-one {
        width: 10%;
        position: absolute;
        top: 35%;
        left: 75%
    }
    
    .ms-book-two {
        width: 10%;
        position: absolute;
        top: 55%;
        left: 68%;
    }
}

.ms-row-hero {
    gap: 10px;    
}

.ms-rettangular {    
    height: 200px;
    background-color: #F2F6FB;
}





</style>