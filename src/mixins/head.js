/*
  head mixin
  客户端渲染时 在domready阶段(mounted)对document.title等进行修改
  服务端渲染时, 直接在created的阶段, 修改this.$ssrContext的上下文
*/
// console.log(process.env.VUE_ENV);

const getTitle = (vm) => {
  let { title } = vm.$options;
  if (title) {
    return typeof title === 'function' // computed、挖watch等
      ? title.call(vm)
      : title // data、props等
  }
}

const serverHeadMixin = {
  created() {
    const title = getTitle(this);
    if (title) {
      this.$ssrContext.title = title;
    }
  }
}

const clientHeadMixin = {
  mounted() {
    const title = getTitle(this);
    if (title) {
      document.title = title;
    }
  }
}

export default process.env.VUE_ENV === 'server'
  ? serverHeadMixin
  : clientHeadMixin