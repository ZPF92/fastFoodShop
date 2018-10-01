import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = resolve => require.ensure([],() => resolve(require('@/pages/Home/Home.vue')))
const Order = resolve => require.ensure([],() => resolve(require('@/pages/Order/Order.vue')))
const Profile = resolve => require.ensure([],() => resolve(require('@/pages/Profile/Profile.vue')))
const Search = resolve => require.ensure([],() => resolve(require('@/pages/Search/Search.vue')))
const Login = () => import('@/pages/Login/Login.vue')


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
