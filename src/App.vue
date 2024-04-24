<script>
  import { store } from './store.js';
  import AppHeader from './components/AppHeader.vue';
  import AppHero from './components/AppHero.vue';
  import AppBanner from './components/AppBanner.vue';

  

  export default {
    components: {
      AppHeader,
      AppHero,
      AppBanner      
    },
  }
</script>

<template>
  <AppHeader></AppHeader>

  <main>
    <AppHero></AppHero>
    <AppBanner></AppBanner>   
  </main>

  <footer>

  </footer>
</template>

<style lang="scss">

  @use './style/generic';

</style>
