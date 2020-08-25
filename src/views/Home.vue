<template>
  <div> 
    <SlideShow> </SlideShow>
    <HomeOKlubu> </HomeOKlubu>
    <HomeSkola> </HomeSkola>
  </div>
</template>

<script>
// @ is an alias to /src
import SlideShow from '@/components/simple_site_components/SlideShow.vue'
import HomeOKlubu from '@/components/simple_site_components/HomeOKlubu.vue'
import HomeSkola from '@/components/simple_site_components/HomeSkola.vue'
export default {
  name: 'Home',
  components: {
    SlideShow,
    HomeOKlubu,
    HomeSkola
  }
}
</script>

<style scoped>


</style>
