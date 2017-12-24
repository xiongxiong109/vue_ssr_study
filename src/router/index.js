/*
	前后端共享的路由
	对SSR而言, store、 router和app都是需要封装成一个工厂函数,
	以避免单例，每次都生成新的实例
*/
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('./pages/home/Home')

export const createRouter = () => new VueRouter({
	mode: 'history',
	fallback: false,
	routes: [
		{
			name: 'home',
			path: '/home',
			component: Home
		}
	]
})