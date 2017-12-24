import Vue from 'vue'
import { createApp } from './app'

const isDev = process.env.NODE_ENV !== 'production'

export default context => {

	return new Promise((resolve, reject) => {
		const s = isDev && Date.now()

		const { app, router } = createApp();
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

    	Promise
    	.all(matchedComponents.map(({asyncData}) => asyncData && asyncData({
    		route: router.currentRoute
    	})))
    	.then(() => {
    		isDev && console.log(`data pre-fetch: ${Date.now() - s}ms`)
    		resolve(app)
    	})
    	.catch(reject)

    }, reject);
		
	});
}