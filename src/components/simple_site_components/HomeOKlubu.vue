<template>
<div :class="setOrder()">
    <img class="image-component" src="@/assets/oKlubu.jpg">
    <span class="title">O KLUBU</span>
    <p class="description-text">
            Jedriličarski klub „Jugole Grakalić“ je dobio ime poslije Drugog svijetskog rata po omiljenom
             mladiću sa Škvera, svestranom sportisti, plivaču, jedriličaru, veslaču, fudbaleru, koji je 
             izgubio život u ratu u 23-oj godini. <a href="Oklubu.com">   Više... </a>
    </p>
</div>
</template>

<script>
export default {
    props: ['order'],
    name: 'HomeOKlubu',
    components: {},
    methods: {
        setOrder: function() {
            if(this.order.direction == 'img-text'){
                return 'image-text-container';
            }else{
                return 'text-image-container';
            }
        }
    }  
}
</script>

<style scoped>

.HomeOKlubu-container{
    display: grid;

}

.image-text-container{
    padding: 50px 0;
    border-width: 1px;
    border-style: solid;
    border-color: black;
    display: grid;
    grid-template-areas:
        '. image   .   .    .'
        '. image   . title  .'
        '. image   .  text  .'
        '. image   .   .    .';
    grid-template-columns: auto min-content auto min-content auto;
    grid-template-rows: auto min-content min-content auto;
}

.text-image-container{
    padding: 50px 0;
    border-width: 1px;
    border-style: solid;
    border-color: black;
    display: grid;
    grid-template-areas:
        '.   .     .   image    .'
        '. title   .   image    .'
        '. text    .   image    .'
        '.  .      .   image    .';
    grid-template-columns: auto min-content auto min-content auto;
    grid-template-rows: auto min-content min-content auto;
}

.description-text{
    color: gray;
    grid-area: text;
    text-align: center;
    font-size: 16px;
    min-width: 500px;
}

.image-component{
    border-radius: 50%;
    height: 350px;
    width: 350px;
    grid-area: image;
}

.title{
    text-align: center;
    color: gray;
    font-size: 24px;
    grid-area: title;  
}
a{
    color: gray;
    text-decoration: none;
}
a:hover{
    color: rgb(21, 21, 70);
}

@media only screen and (max-width: 900px) {
    .image-text-container, .text-image-container{  
        grid-template-areas:
            'title title title title title'
            '  .   image image image   .'
            '  .   image image image   .'
            '  .   text  text  text    .';    
    }
    .image-component{
        margin: 0 auto;
    }
    .description-text{
        text-align: center;
        width: 80%;
        margin: 20px auto;
        min-width: 300px;
        
    }
    .title{
        margin-bottom: 20px;
    }
}

</style>