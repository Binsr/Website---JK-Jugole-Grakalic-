<template>
  <div id="app">
    <MainMenu> </MainMenu>
    <router-view/>
  </div>
</template>
<script>
import MainMenu from './components/simple_site_components/MainMenu.vue'
export default {
  name: 'App',
  components: {
    MainMenu
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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
