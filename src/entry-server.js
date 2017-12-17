import Vue from 'vue'
import { createApp } from './app'

const isDev = process.env.NODE_ENV !== 'production'

export default context => {

	return new Promise((resolve, reject) => {
		const s = isDev && Date.now()

		const { app } = createApp();
		const { url, request } = context
		console.log(url); // 暂时未引入路由, 任意的url匹配都返回成功的app实例
		resolve(app);
		
	});
}