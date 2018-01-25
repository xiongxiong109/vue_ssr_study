<!-- 列表页 -->
<template>
	<div class="layer">
		<h4>list page {{$store.state.title}}</h4>
    <button @click="evtChangeTitle('Bear Cambridge')">change title</button>
	</div>
</template>
<script type="text/javascript">
  export default {
    methods: {
      evtChangeTitle(str) {
        this.$store.commit('COM/CHANGE_TITLE', str);
      }
    }
  }
</script>