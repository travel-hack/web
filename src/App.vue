<template>
<v-app>
	<v-toolbar app color="primary">
		<v-toolbar-title>
			<router-link :to="{path: '/'}"><span class="white--text">TripChat</span></router-link>
		</v-toolbar-title>
		<v-spacer></v-spacer>
	</v-toolbar>

	<v-content>
		<router-view :class="{'px-5':$vuetify.breakpoint.lgAndUp,'px-4':$vuetify.breakpoint.md,'px-2':$vuetify.breakpoint.smAndDown, 'pt-3':true ,'content-app': true, 'index-div' :true}" />
	</v-content>
	<v-footer height="auto" color="primary">
		<v-layout row wrap justify-space-between fill-height align-center>
			<div class="white--text px-2">
				2018 — <strong>TripChat.fun</strong>
			</div>
			<v-flex justify-end style="display:flex">
				<v-btn flat dark :to="{path: '/privacy-policy'}">Privacy and Policy</v-btn>
				<v-btn flat dark :to="{path: '/terms-and-conditions'}">Terms And Conditions</v-btn>
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
