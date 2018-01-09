<template>
	<div class="ssr-app" id="app">
		<button @click="evtChange">click me to see the answer</button>
		<p>{{meeting}}</p>
		<router-view />
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				meeting: ''
			}
		},
		methods: {
			evtChange() {
				this.meeting = 'Hello SSR';
			}
		}
	}
</script>