<script>
  import { store } from './store.js';
  import AppHeader from './components/AppHeader.vue';
  import AppHero from './components/AppHero.vue';
  import AppBanner from './components/AppBanner.vue';
  import AppRecentCourses from './components/AppRecentCourses.vue';
  import AppFooter from './components/AppFooter.vue';

  

  export default {
    components: {
      AppHeader,
      AppHero,
      AppBanner,
      AppRecentCourses,
      AppFooter    
    },
  }
</script>

<template>
  <AppHeader></AppHeader>

  <main>
    <AppHero></AppHero>
    <AppBanner></AppBanner>
    <AppRecentCourses></AppRecentCourses> 
  </main>

  <footer>

  </footer>
</template>

<style lang="scss">

  @use './style/generic';

</style>
