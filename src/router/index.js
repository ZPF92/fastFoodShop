import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = resolve => require.ensure([],() => resolve(require('@/pages/Home/Home.vue')))
const Order = resolve => require.ensure([],() => resolve(require('@/pages/Order/Order.vue')))
const Profile = resolve => require.ensure([],() => resolve(require('@/pages/Profile/Profile.vue')))
const Search = resolve => require.ensure([],() => resolve(require('@/pages/Search/Search.vue')))
const Login = resolve => require.ensure([],() => resolve(require('@/pages/Login/Login.vue')))
const Shop = resolve => require.ensure([],() => resolve(require('@/pages/Shop/Shop.vue')))
const ShopRatings = resolve => require.ensure([],() => resolve(require('@/pages/Shop/ShopRatings/ShopRatings.vue')))
const ShopGoods = resolve => require.ensure([],() => resolve(require('@/pages/Shop/ShopGoods/ShopGoods.vue')))
const ShopInfo = resolve => require.ensure([],() => resolve(require('@/pages/Shop/ShopInfo/ShopInfo.vue')))
// const Login = () => import('@/pages/Login/Login.vue')


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
      path:'/shop',
      component:Shop,
      children:[
        {
          path:'/shop/goods',
          name:'ShopGoods',
          component:ShopGoods
        },
        {
          path:'/shop/ratings',
          name:'ShopRatings',
          component:ShopRatings
        },
        {
          path:'/shop/info',
          name:'ShopInfo',
          component:ShopInfo
        },
        {
          path:'',
          redirect:'/shop/goods'
        }
      ]
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
