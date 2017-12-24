// 客户端入口配置
import Vue from 'vue'
import { createApp } from './app'

const { app, router } = createApp(); // 工厂模式，创建每一个app

// 客户端渲染
router.onReady(() => {
	app.$mount('#app');
});