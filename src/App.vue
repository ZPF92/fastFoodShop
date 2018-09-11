<template>
  <div>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
  import {reqAddress} from './api'
  import Footer from '@/components/Footer/Footer.vue'
  export default {
    name: 'App',
    components:{
      Footer
    },
    async mounted(){
      const result = await reqAddress('40.10038,116.36867');
      console.log(result);
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  
</style>
