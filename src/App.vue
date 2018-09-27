<template>
  <div>
    <router-view></router-view>
    <Footer v-show="showFooter"/>
  </div>
</template>

<script>
  import {reqAddress} from './api'
  import Footer from '@/components/Footer/Footer.vue'
  export default {
    name: 'App',
    data(){
      return {
        showFooter:this.$route.meta.showFooter
      };
    },
    components:{
      Footer
    },
    async mounted(){
      // const result = await reqAddress('40.10038,116.36867');
      // console.log(result);
    },
    updated(){
      this.showFooter = this.$route.meta.showFooter;
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
