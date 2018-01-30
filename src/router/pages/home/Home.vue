<template>
	<div class="app-layer">
    <loading-indicator :value="state.title">
      <h4 class="home-title">home page {{state.title}}</h4>
    </loading-indicator>
		<router-link to="list">to list page</router-link>
	</div>
</template>
<script type="text/javascript">
  import BaseView from '@/router/pages/base.view';
  import LoadingIndicator from '@/components/loading.indicator';

  export default {
    mixins: [BaseView],
    title: 'Home Page',
    isPreload: true,
    async asyncData({ store }) { // 执行异步方法, 异步获取服务数据, 这个异步方法配置在entry-server中, 执行的时候上下文是获取不到this对象的, 所以只能拿到store
      let rst = await setTimeout(() => {
      store.dispatch('COM/CHANGE_TITLE', 'Hello I am rendered from server side')
      }, 1e3);
    },
    computed: {
      state() {
        return this.$store.state
      }
    },
    components: {
      [LoadingIndicator.name]: LoadingIndicator
    }
  }
</script>
<style type="text/css">
  .home-title {
    font-size: 14px;
    color: #333;
  }
</style>