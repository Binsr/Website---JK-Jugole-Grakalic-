<template>
  <div class='header-container'>
      <img class="logo-class" src="@/assets/logo.png">    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Header',
  components: {}
}
</script>

<style scoped>

.header-container{

    height: max-content;
}
.logo-class{
    max-height: min-content;
    margin: 20px 0 0 20px;
}

</style>