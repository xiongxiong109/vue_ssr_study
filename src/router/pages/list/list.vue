<!-- 列表页 -->
<template>
	<div class="layer">
		<h4>list page {{$store.state.title}}</h4>
    <button @click="evtChangeTitle('Bear Cambridge')">change title</button>
	</div>
</template>
<script type="text/javascript">
  import BaseView from '@/router/pages/base.view';

  export default {
    mixins: [BaseView],
    title: 'list page',
    methods: {
      evtChangeTitle(str) {
        this.$store.commit('COM/CHANGE_TITLE', str);
      }
    }
  }
</script>