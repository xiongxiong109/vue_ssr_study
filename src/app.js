import Vue from 'vue'
import App from './App.vue'
import { createStore } from './store'
import { createRouter } from './router'

export function createApp() {

	const router = createRouter()
  const store = createStore()

	const app = new Vue({
		router, // 挂载路由
    store,
		render: r => r(App)
	});

	return { app, router }
}