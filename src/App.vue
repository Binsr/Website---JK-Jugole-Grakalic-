<template>
  <div  id="app">
    <div class="app-container">
      <div class='header-component'> <Header> </Header> </div>
      <div class='contact-component'> <Contact> </Contact> </div>
      <div class='main-menu-component'><MainMenu> </MainMenu></div>
      <div class='page-component'><router-view/></div>
      <div class='footer-component'> <Footer> </Footer> </div>
      <img src="@/assets/hamburgerMenu.png" class='hamburgerButton'>
    </div>
  </div>
</template>
<script>
import MainMenu from './components/simple_site_components/MainMenu.vue'
import Footer from './components/simple_site_components/Footer.vue'
import Header from './components/simple_site_components/Header.vue'
import Contact from './components/simple_site_components/Contact.vue'
export default {
  name: 'App',
  components: {
    MainMenu, Footer, Header, Contact
  }
}
</script>

<style>

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
  width: 100%;
}

.hamburgerButton{
  display: none;
  width: 50px;
  right: 0;
  top: 0;
  margin: 10px 10px 0 0;
  position: fixed;
}

.app-container{
  background-image: url('./assets/background.jpg');
  background-size: cover;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(auto,max-content) auto auto 30px;
  grid-template-areas:
      'header contact'
      'mainMenu mainMenu'
      'mainContent mainContent'
      'footer footer';
}

.header-component{grid-area: header;}
.main-menu-component{grid-area: mainMenu;}
.page-component{grid-area: mainContent;}
.footer-component{grid-area: footer;}
.contact-component{grid-area: contact;}


.page-component{
  overflow: scroll;
  overflow-x: hidden;
}
@media only screen and (max-width: 1200px) {
  .app-container{
    grid-template-columns: max-content auto auto;
    grid-template-rows: max-content auto auto 30px;
    grid-template-areas:
                    'header header contact' 
                    'mainMenu mainContent mainContent'
                    'mainMenu mainContent mainContent'
                    'footer footer footer'
  }

}

@media only screen and (max-width: 900px) {
  .app-container{
    grid-template-columns: max-content auto auto;
    grid-template-rows: max-content auto 30px;
    grid-template-areas:
                    'header header header' 
                    'mainContent mainContent mainContent'
                    'footer footer footer'
  }
  .contact-component{
    position: fixed;
    bottom: 0;
    left: 0;
    margin-left: 10px;
    width: max-content;
    
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
  .hamburgerButton{
    display: unset;
  }
  
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
