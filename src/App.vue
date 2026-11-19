<!-- 
  [SECTION] SFC - Single File Component
  An SFC consists of three parts:
  1. Template
  2. Script
  3. Style
 -->
<script>
    import BannerComponent from './components/BannerComponent.vue';
    import NavbarComponent from './components/NavbarComponent.vue';

    export default {
      components: {
        BannerComponent,
        NavbarComponent
      }
    }
</script>

<template>
  
  <NavbarComponent />
  <BannerComponent />
</template>

<style scoped>
    
</style>