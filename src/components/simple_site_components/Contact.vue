<template>
  <div class='contact-container'>
      <img class="info-icons" src="@/assets/contactIcon.png">
      <img class="info-icons" src="@/assets/doc.png"> 
      <img class="menu-button" src="@/assets/doc.png">     
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Contact',
  components: {}
}
</script>

<style scoped>

.contact-container{
    display: flex;
    height: 60px;
    margin: auto;
    width: 120px;
}

.menu-button{
    width: 0;
}

.info-icons{
    width: 40px;
    margin: auto auto;
     background-blend-mode: multiply;

}
.info-icons:hover{
    filter: invert(68%) sepia(132%) saturate(3207%) hue-rotate(160deg) brightness(95%) contrast(20%);
}

@media only screen and (max-width: 1200px) {
    .contact-container{
        width: 130px;
    }
}

@media only screen and (max-width: 900px) {
    .contact-container{
        width: 170px;
    }
    .info-icons{
        margin-top: 10px;
        margin-left: 20px;
    }
    .menu-button{
        width: 40px;
        height: 40px;
        margin: auto;
        margin-left: 10px;
        filter: invert(48%) sepia(13%) saturate(3207%) hue-rotate(130deg) brightness(95%) contrast(80%);
        color: white;
    }
}


</style>