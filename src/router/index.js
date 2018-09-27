import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/pages/Home/Home.vue'
import Order from '@/pages/Order/Order.vue'
import Profile from '@/pages/Profile/Profile.vue'
import Search from '@/pages/Search/Search.vue'
import Login from '@/pages/Login/Login.vue'

export default new VueRouter({
	mode:'history',
	routes:[
		{
			path:'/',
			name:'Home',
			component:Home,
			// alias:['/index'],
      meta:{
			  showFooter:true
      }
		},
		{
			path:'/order',
			name:'Order',
			component:Order,
      meta:{
        showFooter:true
      }
		},
		{
			path:'/search',
			name:'Search',
			component:Search,
      meta:{
        showFooter:true
      }
		},
		{
			path:'/profile',
			name:'Profile',
			component:Profile,
      meta:{
        showFooter:true
      }
		},
		{
			path:'/login',
			name:'Login',
			component:Login
		},
		{
			path:'*',
			//redirect:'/home'
			//redirect:{path:'/home'}
			//redirect:{name:'Home'}
			redirect:() => {
				return {
					name:'Home'
				}
			}
		}
	]
})
