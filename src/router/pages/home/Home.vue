<template>
	<div class="app-layer">
		<h4>home page {{$store.state.title}}</h4>
		<router-link to="list">to list page</router-link>
	</div>
</template>
<script type="text/javascript">
  export default {
    created() {
      console.log('I will print on server side');
    }
  }
</script>