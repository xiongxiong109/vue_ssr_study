import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'

export function createApp() {

	const router = createRouter()

	const app = new Vue({
		router, // 挂载路由
		render: r => r(App)
	});

	return { app }
}