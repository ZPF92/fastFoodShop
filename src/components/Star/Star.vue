<template>
  <div class="star" :class="'star-'+size">
    <span class="star-item" v-for="(sc,index) in starClassArr" :key="index" :class="sc"></span>
  </div>
</template>

<script>
  import './Star.styl'
  export default {
    name: 'Star',
    inheritAttrs:false,
    props:{
      score:Number,
      size:Number
    },
    computed:{
      starClassArr(){
        const { score } = this;
        const starClassArr = [];
        const scoreInteger = Math.floor(score);
        for(let i = 0; i < scoreInteger; i++){
          starClassArr.push('on');
        }
        if(score - scoreInteger > 0.5){
          starClassArr.push('half');
        }
        while(starClassArr.length < 5){
          starClassArr.push('off');
        }
        return starClassArr;
      }
    }
  }
</script>
