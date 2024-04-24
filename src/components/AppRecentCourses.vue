<script>
import Recents from './Recents.vue'

export default {
    name: 'AppRecentCourses',
    components: {
        Recents,
    },
    data () {
        return {
            links: [
           {
            link: 'All Categories',
            active: true
            },
           {
            link: 'Art',
            active: null
           },
           {
            link: 'Exercise',
            active: null
           },
           {
            link: 'Material Design',
            active: null
           },
           {
            link: 'Music',
            active: null
           },
           {
            link: 'Photography',
            active: null
           },
           {
            link: 'Software Development',
            active: null
            },
           ],
        }
    }
}

</script>

<template>
    <section>
        <div class="container">
            <div class="row pt-5">
                <h2 class="text-center fw-lighter">Recent Courses</h2>
            </div>

            <nav class="d-flex justify-content-center pt-4">
                <ul class="nav text-center">
                    <li v-for="link in links" class="nav-item">
                        <a class="nav-link ms-text-blue" :class="{'active': link.active}" href="#">{{ link.link }}</a>
                    </li>
                </ul>
            </nav>

            <Recents></Recents>

            <div class="row d-flex justify-content-center m-5">
                <div class="col-2 d-flex justify-content-center">
                    <button type="button" class="btn ms-btn-blue rounded-pill">SHOW ALL</button>
                </div>
            </div>

        </div>            
    </section>
</template>

<style scoped lang="scss">

@use '../style/generic';

nav {   
    .active {
        background-color: #F0F4FA;
        color: gray;
        border-radius: 50rem;
    }
}

.card {
    width: calc(100%/6);
}

.show-btn {
    margin: 0 auto;
}


</style>