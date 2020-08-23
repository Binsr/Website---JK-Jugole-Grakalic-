<template>
  <div class='footer-container'>
      <div class="footer-copyright">Copyright: VIZI.COM</div> 
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Footer',
  components: {}
}
</script>

<style scoped>


.footer-copyright{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: max-content;
    line-height: 30px;
    color:#dddddd;
}

@media only screen and (max-width: 1280px) {
    .footer-copyright{
        width: 100%;
    }

}


</style>