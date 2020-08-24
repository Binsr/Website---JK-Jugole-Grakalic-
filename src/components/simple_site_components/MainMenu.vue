<template>
  <div class="main-menu-container">
    <div class="main-menu__tabs-container">
        <div class="main-menu__tab">
            <router-link to="/"><span class="main-menu-text">POCETNA</span></router-link>
        </div>
        <div class="main-menu__tab"> 
            <router-link to="/news"><span class="main-menu-text">NOVOSTI</span></router-link>
        </div>
        <div class="main-menu__tab"> 
            <router-link to="/skola-jedrenja"><span class="main-menu-text">SKOLA JEDRENJA</span></router-link>
        </div>
        <div class="main-menu__tab"> 
            <router-link to="/klase"><span class="main-menu-text" >KLASE</span></router-link>
        </div>
        <!-- <div class="main-menu__tab"> 
            <router-link to="/foto-arhiv"><span class="main-menu-text" >FOTO ARHIV</span></router-link>
        </div> -->
        <div class="main-menu__tab"> 
            <router-link to="/fotografije"><span class="main-menu-text">GALERIJA</span></router-link>
        </div>
        <div class="main-menu__tab"> 
            <router-link to="/plan-uredjenja-skvera"><span class="main-menu-text">PLAN UREDJENJA SKVERA</span></router-link>
        </div>
        <div class="main-menu__tab"> 
            <router-link to="/brodarsko-drustvo-jg"><span class="main-menu-text">BRODARSKO DRUSTVO JG</span></router-link>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Header',
  components: {},
  data: function(){
    return{}
  }

}
</script>

<style scoped>
.activeTab{
  border-color: black;
}

.main-menu-container{
  width: 100%;
  display: flex;
  justify-content: center;
}

.main-menu__tabs-container{
  display: flex;
  margin: auto;
  
}
.main-menu__tab{
  width: max-content;
  box-sizing: border-box;
  color: white !important;
}

.main-menu__tab a{
  font-weight: 600;
  justify-content: center;
  display: flex;
  margin: auto;
  text-align: center;
  padding: 10px;
  text-decoration: none;
  border-width: 0 0 2px 0;
  border-style: solid;
  border-color: white;
}
.main-menu-text{
  color: white;
}

.router-link-active{
  border-color: #2e60d5  !important;
  border-width: 0 0 2px 0 !important;
  border-style: solid;
}
.router-link-active span{
  color: white important;
}

.main-menu__tab:hover{
  opacity: 0.9;
}



@media only screen and (max-width: 1200px) {

  .main-menu-container{
    flex-direction: column;
    display: flex;
    height: 100%;
    width: min-content;
  }
  .main-menu__tabs-container{
    flex-direction: column;
    margin-top: 50px;
  }
  .main-menu__tab{
    width: 100%;
  }
  .main-menu__tabs-container{
    
  }
  .main-menu__tab a{
    border-color: transparent;
  }
  .main-menu__tabs-container{
    display: flex;
    border-width: 0 0 0 0;
  }

}


</style>