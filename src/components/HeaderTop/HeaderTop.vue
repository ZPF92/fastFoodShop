<template>
  <header class="header">
    <slot name="search"></slot>
    <span class="header_title">
      <span class="header_title_text ellipsis" v-cloak>{{title}}</span>
    </span>
    <slot name="login"></slot>
  </header>
</template>

<script>
  import './HeaderTop.styl'
	export default {
    name: 'HeaderTop',
    props:{
      title:String
    },
    inheritAttrs:false
	}
</script>
