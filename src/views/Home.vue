<template>
  <div> 
    <SlideShow> </SlideShow>
    <HomeOKlubu :order="secData[0]"> </HomeOKlubu> 
    <HomeOKlubu :order="secData[1]"> </HomeOKlubu>
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
  },
  data(){
    return { 
      secData: [{
                direction : 'img-text',
                imageLink : 'TREBA DODATI LINK SLIKE',
                title : "TITLE KOJI HOCES DA SE POJAVI",
                text : "TEKST KOJI HOCES DA SE POJAVI"
                
               },{direction : 'text-img',   //definise da li ide slika levo ili desno u odnosu na tekst
                  imageLink : "ISTO NEKA DRUGA",
                  title : "ISTO NEKI",
                  text : "ISTO NEKI"
               }] 
    }
  }
}
</script>

<style scoped>


</style>
