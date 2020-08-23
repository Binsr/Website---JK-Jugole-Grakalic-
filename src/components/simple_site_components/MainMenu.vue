<template>
  <div class="main-menu-container">
    <div class="main-menu__tabs-container">
        <div class="main-menu__tab">
            <router-link to="/">Početna</router-link>
        </div>
        <div class="main-menu__tab"> 
            <router-link to="/news">NOVOSTI</router-link>
        </div>
        <div class="main-menu__tab"> 
            <router-link to="/skola-jedrenja">SKOLA JEDRENJA</router-link>
        </div>
        <div class="main-menu__tab"> 
            <router-link to="/klase">KLASE</router-link>
        </div>
        <div class="main-menu__tab"> 
            <router-link to="/foto-arhiv">FOTO ARHIV</router-link>
        </div>
        <div class="main-menu__tab"> 
            <router-link to="/fotografije">FOTOGRAFIJE</router-link>
        </div>
        <div class="main-menu__tab"> 
            <router-link to="/plan-uredjenja-skvera">PLAN UREDJENJA SKVERA</router-link>
        </div>
        <div class="main-menu__tab"> 
            <router-link to="/brodarsko-drustvo-jg">BRODARSKO DRUSTVO JG</router-link>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Header',
  components: {}
}
</script>

<style scoped>

.main-menu-container{
  width: 100%;
  display: flex;
  background-color: black;
  justify-content: center;
}

.main-menu__tabs-container{
  display: flex;
  margin: auto;
  
}
.main-menu__tab{
  width: max-content;
  box-sizing: border-box;
  background-color: black;
}

.main-menu__tab a{
  justify-content: center;
  display: flex;
  margin: auto;
  text-align: center;
  padding: 10px;
  text-decoration: none;
}

.main-menu__tab:hover{
  background-color: aqua;
}

@media only screen and (max-width: 1280px) {
  .main-menu-container{
    flex-direction: column;
    display: flex;
    height: 100%;
  }
  .main-menu__tabs-container{
    flex-direction: column;
  }
  .main-menu__tab{
    width: 100%;
  }
  .main-menu__tabs-container{
    
  }
}


</style>