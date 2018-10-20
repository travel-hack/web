<template>
<v-app>
	<v-toolbar app color="primary">
		<v-toolbar-title>
			<router-link :to="{path: '/'}"><span class="white--text">TripChat</span></router-link>
		</v-toolbar-title>
		<v-spacer></v-spacer>
	</v-toolbar>

	<v-content>
		<router-view class="container" />
	</v-content>
	<v-footer height="auto" color="primary">
		<v-layout row wrap justify-space-between>

			<v-flex white--text fill-height align-center>
				2018 — <strong>TripChat.fun</strong>
			</v-flex>
			<v-flex justify-end>
				<v-btn :to="{path: '/privacy-policy'}">Privacy and Policy</v-btn>
				<v-btn :to="{path: '/terms-and-conditions'}">Terms And Conditions</v-btn>
			</v-flex>
		</v-layout>
	</v-footer>
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
