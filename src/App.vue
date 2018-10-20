<template>
<v-app>
	<v-toolbar app color="primary">
		<v-toolbar-title>
			<span class="white--text">TripChat</span>
		</v-toolbar-title>
		<v-spacer></v-spacer>
	</v-toolbar>

	<v-content>
		<router-view class="container" />
	</v-content>
</v-app>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			//
		}
	}
}
</script>
