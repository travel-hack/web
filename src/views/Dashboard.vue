<template>
<div class="">
	<v-layout row wrap>
		<v-data-iterator :items="items" :pagination.sync="pagination" :total-items="total" :rows-per-page-items="rppi">

			<template slot="item" slot-scope="props">
				<v-layout row wrap justify-space-around>
					<div class="">
						{{item.name}}
					</div>
					<div class="">
						{{user.surname}}
					</div>
					<div class="">
						{{user.gender}}
					</div>
					<div class="">
						{{user.region}}
					</div>
				</v-layout>
			</template>


		</v-data-iterator>
	</v-layout>
</div>
</template>
<script>
export default {
	data() {
		return {
			items: [],
			total: 0,
			pagination: null,
			rppi: [10, 25, 50, 100],

		}
	},
	created() {
		this.getUsers();
	},
	methods: {
		getUsers() {
			// setup query endpoint
			let endpoint = 'http://uinames.com/api/?amount=25';
			console.log("endpoint", endpoint);
			this.$axios.get(endpoint)
				.then(response => {
					this.items = response;
					console.log("user", response);
				})
				.catch(error => {
					console.log(error);
				})
				.finally(() => {
					this.loading = false;
				});
		}
	}
}
</script>
