<template>
<div class="homeSkola-container">
<div class="left-div">
    <span class="title">ŠKOLA JEDRENJAs</span>
    <p>
        Školu jedrenja u ovoj godini završilo je 96 djece. Obuku su vodili treneri Stevo Obradović, 
        Ilija Vučković i Mirko Vučković. Klub ima 40 takmičara u svim klasama. U ovom godini smo 
        učestvovali na 65 regata u zemlji i inostranstvu.
    </p>
    <img src="@/assets/skola.jpg" class="">
</div>
</div>
</template>

<script>
export default {
    name: 'HomeSkola',
    components: {}
}
</script>

<style scoped>

.homeSkola-container{
    width: 100%;
    height: 500px;
    background-color: rgb(20, 33, 66);
}
img{
    border-radius: 50%;
    margin: 50px 70px 50px 70px;
    height: 350px;
    width: 350px;
    float: right;
}
.left-div{
    width: 40%;
    color: whitesmoke;
    text-align: center;
    font-size: 16px;
    float: left;
    margin: 150px 70px 70px 70px;
}

.title{
    font-size: 24px;
}
a{
    color: gray;
    text-decoration: none;
}
a:hover{
    color: rgb(21, 21, 70);
}


</style>