<script>
  import { store } from './store.js';
  import AppHeader from './components/AppHeader.vue';
  import AppHero from './components/AppHero.vue';
  import AppBanner from './components/AppBanner.vue';
  import AppRecentCourses from './components/AppRecentCourses.vue';
  import AppStats from './components/AppStats.vue';
  import AppPopularCourses from './components/AppPopularCourses.vue';
  import AppFooter from './components/AppFooter.vue';

  

  export default {
    components: {
      AppHeader,
      AppHero,
      AppBanner,
      AppRecentCourses,
      AppStats,
      AppPopularCourses,
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
    <AppStats></AppStats>
    <AppPopularCourses></AppPopularCourses>
  </main>

  <footer>
    <AppFooter></AppFooter>
  </footer>
</template>

<style lang="scss">

  @use './style/generic';

</style>
