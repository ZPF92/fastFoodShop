<template>
  <div>
    <router-view></router-view>
    <Footer v-show="showFooter"/>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import Footer from '@/components/Footer/Footer.vue'
  export default {
    name: 'App',
    components:{
      Footer
    },
    data(){
      return {
        showFooter:this.$route.meta.showFooter
      };
    },
    methods:{
      ...mapActions(['reqAddress'])
    },
    mounted(){
      this.reqAddress();
    },
    updated(){
      this.showFooter = this.$route.meta.showFooter;
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  [v-cloak]{
    display:none;
  }
</style>
