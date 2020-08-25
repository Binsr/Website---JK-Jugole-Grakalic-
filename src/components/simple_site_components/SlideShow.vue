<template>
  <div class='slideshow-container'>
    <div class="wrap-slide-components">
      <!-- <a class="prev" @click="prev" href="#"> &#10094; Previous </a> -->
      <div class="image-container" v-for="i in [currentIndex]" :key="i">
        <img class="slider-image" :src="currentImg"/>
      </div>
      <!-- <a class="next" @click="next" href="#">Next &#10095; </a> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'SlideShow',
  data(){
    return{
      images: [
        "http://virtualmontenegro.com/jugolegrakalic/public_images/homeSlide01.jpg",
        "http://virtualmontenegro.com/jugolegrakalic/public_images/homeSlide02.jpeg"
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 5000);
    },

    next: function() {
      this.currentIndex += 1;
      this.timer = setInterval(this.next, 5000);
    },

    prev: function() {
      this.currentIndex -= 1;
      if(this.currentIndex < 0)
        this.currentIndex = this.images.length()-1; 

      this.timer = setInterval(this.next, 5000);
    }
  },
  computed: {
    currentImg: function(){
      return this.images[(this.currentIndex) % this.images.length];
    }
  }

};
</script>

<style scoped>


.slideshow-container{
  width: min-content;
  display: flex;
  min-width: 100vw;
  min-height: 700px;
}

.wrap-slide-components{
  display: flex;
}

.image-container{
  width: 100vw;
  height: 50vh;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}


.slider-image{
  width: 100%;
  height: 70vh;
  object-fit: cover;
}
.arrows-container{
  display: flex;
  margin: 0 auto;
  margin-top: auto;
}

.prev, .next {
  width: max-content;
  padding: 16px;
  margin:auto;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}

.paragraph{
    font-size: 12 px;
    text-decoration-color: gray;
}
.paragraph-title{
    font-size: 16px;
}

</style>