<script>

export default {
    name: 'AppStats',
}
</script>

<template>
    <section>
        <div class="ms-bg-title d-flex justify-content-center align-items-center">
            <div class="text-area text-center">
                <h2 class="fw-lighter">We are Proud</h2>
                <p>Certificate courses are instructed by highly educated and qualified instructors who bold doctoral and master's level degrees</p>
            </div>            
        </div>

        <div class="ms-bg-stats ms-stats-container d-flex align-items-start">
            <div class="col-3 text-center border border-secondary-subtle border-start-0 border-top-0 border-bottom-0">
                <h1 class="fw-lighter">2000</h1>
                <span>STUDENTS</span>
            </div>
            <div class="col-3 text-center border border-secondary-subtle border-start-0 border-top-0 border-bottom-0">
                <h1 class="fw-lighter">950</h1>
                <span>COURSES</span>
            </div>
            <div class="col-3 text-center border border-secondary-subtle border-start-0 border-top-0 border-bottom-0">
                <h1 class="fw-lighter">1600</h1>
                <span>HOURS VIDEO</span>
            </div>
            <div class="col-3 text-center">
                <h1 class="fw-lighter">150</h1>
                <span>COUNTRIES REACHED</span>
            </div>
        </div>

        <div class="ms-bg-search d-flex justify-content-center align-items-center">
            <div class="col-6 pe-4 text-light gy-2">
                <h5>Subscribe our newsletter</h5>
                <p class="ms-fs-12">There are many variation of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected, or randomised words</p>
            </div>

            <div class="col-6 ps-4 text-light gy-2">
                <h6>YOUR E-MAIL ADDRESS</h6>
                <div class="input-group mb-3 ">
                    <input type="search" class="form-control ms-radius-none ms-fs-12 text-secondary-emphasis" placeholder="Enter your E-mail">
                    <button class="btn ms-radius-none ms-btn-blue ms-fs-12" type="button">SUBSCRIBE</button>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped lang="scss">

section {
    background-color: #F0F4FA;
    
.ms-stats-container {
    padding: 0px 180px;
}

.ms-btn-blue:hover {
    background-color: #1654b4;
    color: white;
}

    .ms-bg-title {
        height: 200px;
    }

    .ms-bg-stats {
        height: 280px;
        background-image: url('../assets/img/we_proud.png');
        background-repeat: no-repeat;
        background-size: contain;
        
    }

    .ms-bg-search {
        height: 150px;
        background-color: #4ed7a8;
        padding: 20px 180px;
    }


}

</style>