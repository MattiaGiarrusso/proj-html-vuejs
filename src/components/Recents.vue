<script>
import { store } from '../store.js';

export default {
    name: 'Recents',
    data() {
        return {
            store
        };
    },
    methods: {
            getImageUrl(name) {
                return new URL(`../assets/img/${name}`, import.meta.url).href;
            }
    }
}

</script>

<template>

    <div class="container d-flex flex-wrap">

        <div v-for="course in store.recentCourses" class="card rounded-0 mt-5">
            <img :src="getImageUrl(course.image)" class="card-img-top rounded-0" :alt="course.title">
            <div class="card-body pb-0">
                <h6 class="card-subtitle mb-2 text-body-secondary ms-fs-10">{{ course.subtitle }}</h6>
                <h5 class="card-title ms-fs-12">{{ course.title }}</h5>
                <div class="d-flex justify-content-between align-items-center ms-border-top mx-1 py-2 mt-4">
                    <span v-if="course.hours" class="ms-fs-12">{{ course.hours }}</span>
                    <span v-else class="ms-stars">{{ course.stars }}</span>

                    <span class="ms-fs-12"><strong>{{ course.price }}</strong></span>
                </div>
                <span v-if="course.new" class="badge text-bg-success ms-fs-10">NEW</span> 
                <span v-if="course.hot" class="badge text-bg-danger ms-fs-10">HOT</span>
                <span v-if="course.special" class="badge text-bg-warning ms-fs-9">SPECIAL</span>          
            </div>
        </div>

    </div>

</template>

<style scoped lang="scss">


.card {
    width: calc(100%/6);
    position: relative;
}

.ms-border-top {
    border-top: 1px solid #d1d1d1;
}

.ms-stars {
    color: #f09b23;
}

.badge {
    width: 45px;
    position: absolute;
    top: 5%;
    left: 70%;
}

</style>