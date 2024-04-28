<script>
import Popular from './Popular.vue';

export default {
    name: 'AppPopularCourses',
    components: {
        Popular,
    },
}

</script>

<template>
    <section>
        <div class="container">
           
            <div class="row pt-5 text-center">
                <h2 class="fw-lighter">Popular Courses</h2>
                <span>Discover our most popular courses for self learning</span>
            </div>

            <Popular></Popular>

            
            <div class="row d-flex justify-content-center m-5">
                <div class="col-2 d-flex justify-content-center ms-radius-none">
                    <nav>
                        <ul class="pagination ms-pagination">
                            <li class="page-item border">
                                <a class="ms-page-link page-link text-body-tertiary" href="#" aria-label="Previous">
                                    <span aria-hidden="true"><i class="fa-solid fa-angle-left"></i></span>
                                </a>
                            </li>
                            <li class="page-item border">
                                <a class="page-link ms-page-link text-body-tertiary" href="#" aria-label="Next">
                                    <span aria-hidden="true"><i class="fa-solid fa-angle-right"></i></span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </div>            
    </section>

</template>

<style scoped lang="scss">

.ms-pagination {
    border: 0px;
}

.ms-page-link {
    border: 0px;
}


</style>