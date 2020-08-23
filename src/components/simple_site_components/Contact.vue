<template>
  <div class='contact-container'>
      <img class="info-icons" src="@/assets/contactIcon.png">
      <img class="info-icons" src="@/assets/doc.png">      
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
    width: 150px;
}

.info-icons{
    width: 40px;
    margin: auto auto;
    filter: invert(48%) sepia(13%) saturate(3207%) hue-rotate(130deg) brightness(95%) contrast(80%);
    color: blue;
}
.info-icons:hover{
    filter: invert(68%) sepia(132%) saturate(3207%) hue-rotate(160deg) brightness(95%) contrast(20%);

}

</style>