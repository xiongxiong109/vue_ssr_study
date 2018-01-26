// 一个基类baseView, 通过Vue.mixin来继承
const BaseView = {
  beforeMount () {
    const { asyncData, isPreload } = this.$options
    if (isPreload) { // 如果是预渲染,首屏异步数据将在渲染完成后再加载
      if (asyncData) {
        // 将获取数据操作分配给 promise
        // 以便在组件中，我们可以在数据准备就绪后
        // 通过运行 `this.dataPromise.then(...)` 来执行其他任务
        this.dataPromise = asyncData({
          store: this.$store,
          route: this.$route
        })
      }
    }
  },
  beforeRouteUpdate(to, from ,next) {
    const { asyncData, isPreload } = this.$options
    if (!isPreload) {
      if (asyncData) {
        console.log('x');
      }
    }
  }
}

export default BaseView