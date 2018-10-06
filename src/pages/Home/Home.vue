<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
      <router-link class="header_search" tag="span" :to="{name:'Search'}" slot="search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_login" tag="span" :to="{name:'Login'}" slot="login">
        <span class="header_login_text">登录|注册</span>
      </router-link>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav border-1px">
      <div class="swiper-container" v-if="categorys.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(item,index) in categorys" :key="index">
              <div class="food_container">
                <img :src="imgBaseUrl+item.image_url">
              </div>
              <span v-cloak>{{item.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <img src="./images/msite_back.svg" v-else>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list border-1px">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>
    </div>
  </section>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import { mapState, mapActions } from 'vuex'
  import  HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  import  ShopList from '../../components/ShopList/ShopList.vue'
	import './Home.styl'
	export default {
	  name: 'Home',
    components:{
      HeaderTop,
      ShopList
    },
    data(){
	    return {
        imgBaseUrl:'https://fuss10.elemecdn.com'
      };
    },
    computed:{
      ...mapState(['address','categorys']),
      categorysArr(){
        const { categorys } = this;
        const arr = [];
        let smallArr = [];
        const max = 8;
        categorys.forEach(item => {
          if(smallArr.length === 0 ){
            arr.push(smallArr);
          }
          smallArr.push(item);
          if(smallArr.length === max){
            smallArr = [];
          }
        });
        return arr;
      }
    },
    methods:{
      ...mapActions(['reqFoodList','reqShopList'])
    },
    mounted(){
	    this.reqFoodList();
	    this.reqShopList();
    },
    watch:{
      categorys(){
	      this.$nextTick(() => {
	        console.log('$nextTick');
          new Swiper('.swiper-container',{
            loop:true,
            pagination:{
              el:'.swiper-pagination'
            }
          });
        });
      }
    },
    beforeUpdate(){
	    console.log('beforeUpdate');
    },
    updated(){
	    console.log('updated');
    }
	}
</script>
