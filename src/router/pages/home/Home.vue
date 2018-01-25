<template>
	<div class="app-layer">
		<h4>home page {{state.title}}</h4>
		<router-link to="list">to list page</router-link>
	</div>
</template>
<script type="text/javascript">
  export default {
    computed: {
      state() {
        return this.$store.state
      }
    },
    created() {
      console.log('I will print on server side');
    }
  }
</script>