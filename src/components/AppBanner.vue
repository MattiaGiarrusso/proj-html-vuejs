<script>

export default {
    name: 'AppBanner',
}

</script>

<template>
    <section class="ms-banner ms-container">
            <div class="row">
                <div class="col-6">
                    <div class="section-text">
                        <h2 class="fw-lighter">Learning limitless, more possibilities</h2>
                        <p>Online courses open the opportunity for learning to almost anyone, regardless of their scheduling commitments.</p>
                    </div>
                    <div class="section-button">
                        <button class="btn ms-btn-blue ms-fs-10 rounded-pill">READ MORE</button>
                    </div>
                </div>
            </div>
    </section>
</template>

<style scoped lang="scss">

@use '../style/generic';

.ms-banner {
    height: 400px;
    background-image: url('../assets/img/Untitled-1-1-1-1-1.png');
    background-repeat: no-repeat;
    background-size: contain;
}

.row {
    padding: 50px 60px;

    h2 {
        padding-right: 100px;
    }
}

</style>