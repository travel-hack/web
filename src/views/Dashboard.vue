<template>
<div class="">
	<v-card tile class="my-2 py-2">
		<v-layout row wrap>
			<v-flex xs3 class="px-2">
				Name
			</v-flex>
			<v-flex xs3 class="px-2">
				Surname
			</v-flex>
			<v-flex xs3>
				Gender
			</v-flex>
			<v-flex xs3>
				Region
			</v-flex>
		</v-layout>
	</v-card>
	<v-card>
		<v-layout row wrap>
			<v-data-iterator :items="items" :pagination.sync="pagination" :total-items="total" :rows-per-page-items="rppi" style="width: 100%">
				<template slot="item" slot-scope="props">
					<v-layout row wrap>
						<v-flex xs3>
							{{props.item.name}}
						</v-flex>
						<v-flex xs3>
							{{props.item.surname}}
						</v-flex>
						<v-flex xs3>
							{{props.item.gender}}
						</v-flex>
						<v-flex xs3>
							{{props.item.region}}
						</v-flex>
					</v-layout>
				</template>
			</v-data-iterator>
		</v-layout>
	</v-card>
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

			this.$axios.get(endpoint)
				.then(response => {
					this.items = response.data;
				})
				.catch(error => {
					console.log(error);
				})
				.finally(() => {
					this.loading = false;
					this.getUsers();
				});
		}
	}
}
</script>
