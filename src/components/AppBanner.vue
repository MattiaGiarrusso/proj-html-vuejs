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
                        <h1>Learning limitless, more possibilities</h1>
                        <p>Online courses open the opportunity for learning to almost anyone, regardless of their scheduling commitments.</p>
                    </div>
                    <div class="section-button">
                        <button class="btn ms-btn-blue rounded-pill">READ MORE</button>
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

    h1 {
        font-weight: 300;
    }
}

</style>