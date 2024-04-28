<script>
import { store } from '../store.js';

export default {
    name: 'Popular',
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
        
        <template v-for="course, index in store.recentCourses">
        <div v-if="index < 6" class="card rounded-0 mt-5">
            <img :src="getImageUrl(course.image)" class="card-img-top rounded-0" :alt="course.title">
            <div class="card-body pb-0">
                <h6 class="card-subtitle mb-2 text-body-secondary ms-fs-10">{{ course.subtitle }}</h6>
                <h5 class="card-title ms-fs-12">{{ course.title }}</h5>
                <div class="d-flex justify-content-between align-items-center ms-border-top mx-1 py-2 mt-4">
                    <span v-if="course.hours" class="ms-fs-12">{{ course.hours }}</span>
                    <span v-else class="ms-stars">{{ course.stars }}</span>

                    <span class="ms-fs-12"><strong>{{ course.price }}</strong></span>
                </div>                
            </div>
        </div>
        </template>

    </div>

</template>

<style scoped lang="scss">


.card {
    width: calc(100%/6);
}

.ms-border-top {
    border-top: 1px solid #d1d1d1;
}

.ms-stars {
    color: #f09b23;
}

</style>