<template>
  <div class="footer_guide border-1px">
  	<router-link tag="a" :to="{name:'Home'}" active-class="on" class="guide_item" exact replace>
  		<span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
  	</router-link>
		<router-link tag="a" :to="{name:'Search'}" active-class="on" class="guide_item" replace>
  		<span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
  	</router-link>
    <router-link tag="a" :to="{name:'Order'}" active-class="on" class="guide_item" replace>
  		<span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
  	</router-link>
    <router-link tag="a" :to="{name:'Profile'}" active-class="on" class="guide_item" replace>
  		<span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
  	</router-link>
  </div>
</template>

<script>
	import './Footer.styl'
	export default {
		name: 'Footer'
	}
</script>
