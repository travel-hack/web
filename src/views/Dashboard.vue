<template>
<div class="">
	<v-card tile class="my-2 py-2">
		<v-layout row wrap>
			<v-flex xs3 class="px-2">
				First Name
			</v-flex>
			<v-flex xs3 class="px-2">
				Last Name
			</v-flex>
			<v-flex xs3>
				Rating
			</v-flex>
			<v-flex xs3>
				Total bookings
			</v-flex>
		</v-layout>
	</v-card>
	<v-card>
		<v-layout row wrap>
			<v-data-iterator :items="users" :pagination.sync="pagination" :total-items="total" :rows-per-page-items="rppi" style="width: 100%">
				<template slot="item" slot-scope="props">
					<v-layout row wrap @click="seeItem(props.item)" style="cursor: pointer;">
						<v-flex xs3 class=" pa-2">
							{{props.item.firstname}}
						</v-flex>
						<v-flex xs3 class="pa-2">
							{{props.item.lastname}}
						</v-flex>
						<v-flex xs3 class="pa-2">
							{{props.item.rating}}
						</v-flex>
						<v-flex xs3 class="pa-2">
							{{props.item.bookings_total}}
						</v-flex>
					</v-layout>
					<v-divider></v-divider>
				</template>
			</v-data-iterator>
		</v-layout>
	</v-card>
	<v-dialog v-model="dialog_user" max-width="420">
		<v-card>
			<v-card-title primary-title>
				User details
			</v-card-title>
			<v-container fluid pa>
				<v-layout column>
					<div class="py-1 font-weight-bold">
						Personal details
					</div>
					<v-layout row wrap fill-height align-center class="py-1">
						<v-avatar size="40" class="px-2">
							<img :src="user.avatar_url" alt="alt">
						</v-avatar>
						<div class="px-2">
							{{ user.firstname }}
						</div>
						<div class="px-2">
							{{ user.lastname }}
						</div>
					</v-layout>
					<div class="py-1 font-weight-bold">
						Profile details
					</div>
					<v-layout row wrap fill-height align-center class="py-1">
						<div class="px-2">
							<span class="font-italic"> Facebook: </span>{{ user.facebook_id }}
						</div>
						<div class="px-2">
							<span class="font-italic"> Created: </span>{{ formatDate(user.created_at) }}
						</div>
					</v-layout>
					<div class="py-1 font-weight-bold">
						Booking rating
					</div>
					<v-layout row wrap fill-height align-center class="py-1">
						<div class="px-2">
							<span class="font-italic"> Rating: </span>{{ user.rating }}
						</div>
						<div class="px-2">
							<span class="font-italic"> Total: </span>{{ user.bookings_total }}
						</div>
					</v-layout>

				</v-layout>

			</v-container>
			<v-card-actions>
				<v-spacer></v-spacer>

				<v-btn flat @click="dialog_user = false">Cancel</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</div>
</template>
<script>
export default {
	data() {
		return {
			// dialog users
			dialog_user: false,

			user: {},
			users: [],
			total: 0,
			pagination: null,
			rppi: [10, 25, 50, 100],

		}
	},
	created() {
		// setInterval(this.getUsers, 2000);
		this.getUsers();
	},
	methods: {
		getUsers() {
			// setup query endpoint
			let endpoint = 'https://bot.tripchat.fun/api/players';
			this.$axios.get(endpoint)
				.then(response => {
					this.users = response.data;
					console.log("data", this.users);
				})
				.catch(error => {
					console.log(error);
				})
				.finally(() => {
					// this.getUsers();
					// setInterval(this.getUsers, 3000);
				});
		},
		seeItem(current_item) {
			this.user = current_item;
			this.dialog_user = true;
		},
		formatDate(value) {
			if(!value) return value;
			return this.$moment(String(value))
				.format("D MMM YY");

		}
	}
}
</script>
