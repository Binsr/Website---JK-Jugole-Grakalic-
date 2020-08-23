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
  padding-top: 20px;
  background-color: green;
  justify-content: center;
}

.main-menu__tabs-container{
  display: flex;
  margin-top: auto;
}
.main-menu__tab{
  width: max-content;
  padding: 10px;
  height: 30px;
  background-color: black;
}

.main-menu__tab a{
  width: 100%;
  height: 100%;
  display: block;
  text-align: center;
  line-height: 30px;
}

.main-menu__tab:hover{
  background-color: aqua;
}

</style>