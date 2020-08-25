<template>
<div class="HomeOKlubu-container">
    <img src="@/assets/oKlubu.jpg">
    <div class="right-div">
        <span class="title">O KLUBU</span>
        <p>
            Jedriličarski klub „Jugole Grakalić“ je dobio ime poslije Drugog svijetskog rata po omiljenom
             mladiću sa Škvera, svestranom sportisti, plivaču, jedriličaru, veslaču, fudbaleru, koji je 
             izgubio život u ratu u 23-oj godini. <a href="Oklubu.com">   Više... </a>
        </p>
    </div>
</div>
</template>

<script>
export default {
    name: 'HomeOKlubu',
    components: {}
    
}
</script>

<style scoped>

.HomeOKlubu-container{
    width: 100%;

    
}

img{
    border-radius: 50%;
    margin: 70px 70px 70px 70px;
    height: 350px;
    width: 350px;
}

.right-div{
    width: 50%;
    color: gray;
    text-align: center;
    font-size: 16px;
    float: right;
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