<template>
  <div class="shop_container">
    <ul class="shop_list" v-if="shopsArr.length">
      <li class="shop_li border-1px" v-for="(shop,index) in shopsArr" :key="index">
        <a>
          <div class="shop_left">
            <img class="shop_img" :src="imgBaseUrl+shop.image_path">
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis" v-cloak>{{shop.name}}</h4>
              <ul class="shop_detail_ul">
                <li class="supports" v-for="(support,index) in shop.supports" :key="index">{{support.icon_name}}</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <section class="shop_rating_order_left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item half"></span>
                  <span class="star-item off"></span>
                </div>
                <div class="rating_section">
                  {{shop.rating}}
                </div>
                <div class="order_section">
                  月售{{shop.recent_order_num}}单
                </div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">麓谷专送</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥{{shop.float_minimum_order_amount}}起送</span>
                <span class="segmentation">/</span>
                <span>{{shop.piecewise_agent_fee.description}}</span>
              </p>
            </section>
          </div>
        </a>
      </li>
    </ul>
    <ul v-else>
      <li v-for="(item,index) in 10" :key="index">
        <img src="./images/shop_back.svg" />
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
	import './ShopList.styl'
	export default {
	  name: 'ShopList',
    data(){
	    return {
	      imgBaseUrl: 'http://fuss10.elemecdn.com/'
      };
    },
    computed:{
      ...mapGetters(['shopsArr'])
    }
	}
</script>
