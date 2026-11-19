<!-- 
  [SECTION] SFC - Single File Component
  An SFC consists of three parts:
  1. Template
  2. Script
  3. Style
 -->
<script>
    import NavbarComponent from './components/NavbarComponent.vue';
    import HomePage from './pages/HomePage.vue';
    import CoursesPage from './pages/CoursesPage.vue'

    export default {
      components: {
        NavbarComponent,
        HomePage,
        CoursesPage
      }
    }
</script>

<template>
  <NavbarComponent />
  <HomePage />
  <CoursesPage />
</template>

<style scoped>
    
</style>