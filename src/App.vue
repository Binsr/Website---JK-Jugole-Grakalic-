<template>
  <div  id="app">
    <div class="app-container">
      <div class='header-component'> <Header> </Header> </div>
      <div class='contact-component'> <Contact> </Contact> </div>
      <div class='main-menu-component'><MainMenu> </MainMenu></div>
      <!-- <div class='footer-component'> <Footer> </Footer> </div> -->
    </div>
    <div class='page-component'><div class="page-container"><router-view/></div> </div>
  </div>
</template>
<script>
import MainMenu from './components/simple_site_components/MainMenu.vue'
// import Footer from './components/simple_site_components/Footer.vue'
import Header from './components/simple_site_components/Header.vue'
import Contact from './components/simple_site_components/Contact.vue'
export default {
  name: 'App',
  components: {
    MainMenu, Header, Contact
  }
}
</script>

<style>
#app{
    /* background-image: url('./assets/background.jpg'); */
    background-size: cover;
    background-color: black
}
html{
  padding: 0;
  margin: 0;
  overflow: hidden;
}
body{
  margin: 0;
  padding: 0;
}

.contact-component{
  display: flex;
}

.page-container{
  width: 100vw;
  margin:0 auto;
  background-color: transparent;
  color: white;
}

.page-component{

  width:100vw;
  z-index: -1;
}

.app-container{
  background-color: #c1b189c4;
  position: absolute;
  width: 100%;
  height: auto;
  z-index: 9999;
  background-size: cover;
  display: grid;
  grid-template-columns: auto auto min-content;
  grid-template-rows: minmax(auto,max-content) min-content;
  grid-template-areas:
      'header header contact'
      'mainMenu mainMenu mainMenu';
}

.header-component{grid-area: header;}
.main-menu-component{grid-area: mainMenu;margin-left: auto;padding-right: 20px;}
.page-component{height: 100vh;}
/* .footer-component{grid-area: footer;} */
.contact-component{grid-area: contact;}


.page-component{
  overflow: scroll;
  overflow-x: hidden;
}
@media only screen and (max-width: 1200px) {
  .page-container{
    margin-right: unset;
  }
  .main-menu-component{margin-left: unset;}
  .app-container{
    background-color: unset;
    width: auto;
    grid-template-columns: max-content auto auto;
    grid-template-rows: max-content;
    grid-template-areas:
                    'header header header'
                    'mainMenu space space'
                    'contact space space';
  }

}

@media only screen and (max-width: 900px) {
  .app-container{
    width: 100%;
    grid-template-columns: max-content auto auto;
    grid-template-areas:
                    'header header header' 
  }
  .main-menu-component{
    position: fixed;
    margin-top: 20vh;
    left: -330px;
    margin-left: 10px;
    width: max-content;
  }
  .page-component{
    overflow: scroll;
    overflow-x: hidden;
  }
  .page-container{
    margin:0;
    width: 100vw;
  }
  .contact-component{
    grid-area: unset;
    position: fixed;
    top: 0;
    right: 20px;
    margin-left: auto;
  }
  
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
