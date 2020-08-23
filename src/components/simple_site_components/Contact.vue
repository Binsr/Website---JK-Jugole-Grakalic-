<template>
  <div class='contact-container'>
      <img style="width: 60px;margin: auto" src="@/assets/contactIcon.png">
      <img style="width: 60px;margin: auto;background-color: red" src="@/assets/doc.png">      
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
    background-color: blue;
    display: flex;
    height: 60px;
    margin: auto;
}

</style>