import Vue from 'vue'
import { createApp } from './app'

const isDev = process.env.NODE_ENV !== 'production'

export default context => {

	return new Promise((resolve, reject) => {
		const s = isDev && Date.now()

		const { app, router, store } = createApp();
		const { url, request } = context
		const { fullPath } = router.resolve(url).route


		if (fullPath !== url) {
        return reject({ url: fullPath })
    }

		// set router's location
    router.push(url)

    router.onReady(() => {
    	// 获取匹配路由的页面
    	const matchedComponents = router.getMatchedComponents();

    	// no matched routes
    	if (!matchedComponents.length) {
    	  return reject({ code: 404 })
    	}
        // 找到组件中存在的asyncData方法, 如果组件有这个方法, 那么就在服务端调用该方法渲染
    	Promise
    	.all(matchedComponents.map(({asyncData}) => asyncData && asyncData({
            store,
    		route: router.currentRoute
    	})))
    	.then(() => {
    		isDev && console.log(`data pre-fetch: ${Date.now() - s}ms`)
            context.state = store.state; // 获取服务端同步渲染的store state, 这句话会在页面上打印出window.__INITIAL_STATE__
    		resolve(app)
    	})
    	.catch(reject)

    }, reject);
		
	});
}