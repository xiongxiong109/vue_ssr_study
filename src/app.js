import Vue from 'vue'
import App from './App.vue'
import { createStore } from './store'
import { createRouter } from './router'
import { sync } from 'vuex-router-sync' // 同步路由与store

export function createApp() {

	const router = createRouter()
  const store = createStore()
  // 同步路由状态(route state)到 store
  sync(store, router)

	const app = new Vue({
		router, // 挂载路由
    store,
		render: r => r(App)
	});

	return { app, router, store }
}