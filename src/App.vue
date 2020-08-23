<template>
  <div  id="app">
    <div class="app-container">
      <div class='main-menu-component'><MainMenu> </MainMenu></div>
      <div class='page-component'><router-view/></div>
      <div class='footer-component'> <Footer> </Footer> </div>
    </div>
  </div>
</template>
<script>
import MainMenu from './components/simple_site_components/MainMenu.vue'
import Footer from './components/simple_site_components/Footer.vue'
export default {
  name: 'App',
  components: {
    MainMenu, Footer
  }
}
</script>

<style>

html{
  padding: 0;
  margin: 0;
}
body{
  margin: 0;
  padding: 0;
}

.app-container{
  overflow: scroll;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr 100px;
  grid-template-areas:
      'header'
      'mainContent'
      'footer';
}
.main-menu-component{grid-area: header;}
.page-component{grid-area: mainContent;}
.footer-component{grid-area: footer;}

@media only screen and (max-width: 1280px) {
  .app-container{
    grid-template-columns: 200px auto auto;
    grid-template-rows: auto auto 100px;
    grid-template-areas: 
                    'header mainContent mainContent'
                    'header mainContent mainContent'      
                    'footer footer footer';
  }
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
