// 客户端入口配置
// 客户端配置会在服务端渲染完成后混淆代码, 这个时候的环境里是可以拿到document和window等BOM的

import Vue from 'vue'
import FastClick from 'fastclick'
import { createApp } from './app'
import BaseView from './mixins/base.view'

const { app, router, store } = createApp(); // 工厂模式，创建每一个app
// fastclick
FastClick.attach(document.body);

Vue.mixin(BaseView)

// 同步混淆服务端渲染数据
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

// 客户端渲染
router.onReady(() => {
  // 添加路由钩子函数，用于处理 asyncData.
  // 在初始路由 resolve 后执行，
  // 以便我们不会二次预取(double-fetch)已有的数据。
  // 使用 `router.beforeResolve()`，以便确保所有异步组件都 resolve。
  router.beforeResolve((to, from, next) => {
    const matched = router.getMatchedComponents(to)
    const prevMatched = router.getMatchedComponents(from)
    // 我们只关心之前没有渲染的组件
    // 所以我们对比它们，找出两个匹配列表的差异组件
    let diffed = false
    const activated = matched.filter((c, i) => {
      return diffed || (diffed = (prevMatched[i] !== c))
    })
    if (!activated.length) {
      return next()
    }
    // 这里如果有加载指示器(loading indicator)，就触发
    Promise.all(activated.map(c => {
      if (c.asyncData) {
        return c.asyncData({ store, route: to })
      }
    })).then(() => {
      // 停止加载指示器(loading indicator)
      next()
    }).catch(next)
  })

	app.$mount('#app');
});