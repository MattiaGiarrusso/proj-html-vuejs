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

            
            <div class="row d-flex justify-content-center py-5">
                <div class="col-2 d-flex justify-content-center">
                    <div class="ms-pagination">
                        <a class="ms-page-link text-body-tertiary" href="#" aria-label="Previous">
                            <span aria-hidden="true"><i class="fa-solid fa-angle-left"></i></span>
                        </a>
                    </div>
                            
                    <div class="ms-pagination">
                        <a class="ms-page-link text-body-tertiary" href="#" aria-label="Next">
                            <span aria-hidden="true"><i class="fa-solid fa-angle-right"></i></span>
                        </a>
                    </div>

                </div>
            </div>

        </div>            
    </section>

</template>

<style scoped lang="scss">

section {
    background-color: #F0F4FA;
}

.ms-pagination {
    border: 1px solid lightgray;
    padding: 8px 16px;
    cursor: pointer;

    &:hover {
    background-color: #457992;
    border-color: #457992;
        i {
        color: white;
    }
}


}


</style>