<template>
  <div> 
    <SlideShow> </SlideShow>
    <div style="width: 100%; height: 600px;background-color: #777;"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import SlideShow from '@/components/simple_site_components/SlideShow.vue'
export default {
  name: 'Home',
  components: {
    SlideShow
  }
}
</script>

<style scoped>


</style>
