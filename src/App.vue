<template>
	<div class="ssr-app" id="app">
		<button @click="evtChange">click me to see the answer</button>
		<p>{{meeting}}</p>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				meeting: ''
			}
		},
		created() {
			console.log('I will print on the server side');
		},
		methods: {
			evtChange() {
				this.meeting = 'Hello SSR';
			}
		}
	}
</script>