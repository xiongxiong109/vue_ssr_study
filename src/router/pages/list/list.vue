<!-- 列表页 -->
<template>
	<div class="layer">
		<h4>list page {{$store.state.title}}</h4>
    <vue-markdown :source="source"></vue-markdown>
    <button @click="evtChangeTitle('Bear Cambridge')">change title</button>
	</div>
</template>
<script type="text/javascript">
  import VueMarkdown from 'vue-markdown';
  import BaseView from '@/router/pages/base.view';
  import mdSource from './source.md';
  export default {
    mixins: [BaseView],
    title: 'list page',
    data() {
      return {
        source: mdSource
      }
    },
    methods: {
      evtChangeTitle(str) {
        this.$store.commit('COM/CHANGE_TITLE', str);
      }
    },
    components: {
      'vue-markdown': VueMarkdown
    }
  }
</script>