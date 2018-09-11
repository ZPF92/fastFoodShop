<template>
  <section class="search">
    <HeaderTop title="搜索">
    </HeaderTop>
    <form class="search_form" action="#">
      <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input">
      <input type="submit" name="submit" class="search_submit">
    </form>
  </section>
</template>

<script>
  import  HeaderTop from '@/components/HeaderTop/HeaderTop.vue'
	import './Search.styl'
	export default {
	  name: 'Search',
    components:{
      HeaderTop
    }
	}
</script>
