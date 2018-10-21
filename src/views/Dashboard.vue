<template>
<div class="">
	<v-layout row wrap>
		<v-flex xs12 md6 class="px-1">
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
		</v-flex>
		<v-flex xs12 md6 class="px-1">
			<v-card tile class="my-2 py-2">
				<v-layout row wrap>
					<v-flex xs3 class="px-2">
						User
					</v-flex>
					<v-flex xs3 class="px-2">
						Booking
					</v-flex>
					<v-flex xs3>
						Expected refund
					</v-flex>
					<v-flex xs3>
						Status
					</v-flex>
				</v-layout>
			</v-card>
			<v-card>
				<v-layout row wrap>
					<v-data-iterator :items="contracts" :pagination.sync="pagination" :total-items="total" :rows-per-page-items="rppi" style="width: 100%">
						<template slot="item" slot-scope="props">
							<v-layout row wrap>
								<v-flex xs3 class=" pa-2">
									{{props.item.user_id}}
								</v-flex>
								<v-flex xs3 class="pa-2">
									{{props.item.booking_id}}
								</v-flex>
								<v-flex xs3 class="pa-2">
									{{props.item.expected_refund}}
								</v-flex>
								<v-flex xs3 class="pa-2">
									{{props.item.status}}
								</v-flex>
							</v-layout>
							<v-divider></v-divider>
						</template>
					</v-data-iterator>
				</v-layout>
			</v-card>
		</v-flex>
	</v-layout>

	<v-dialog v-model="dialog_user" max-width="420">
		<v-card>
			<v-card-title primary-title class="title">
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
						<v-flex xs6>
							<v-layout row>
								<span class="px-2 pt-2">Rating:</span>
								<v-text-field class="pa-0 ma-0" v-model="user.rating" />
							</v-layout>
						</v-flex>
						<v-flex xs6 class="px-2">
							<v-layout row>
								<span class="px-2 pt-2">Rating:</span>
								<v-text-field class="pa-0 ma-0" v-model="user.bookings_total" />
							</v-layout>
						</v-flex>
					</v-layout>
				</v-layout>
			</v-container>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn dark color="primary" @click="saveUser(user)">Save</v-btn>
				<v-btn flat @click="dialog_user = false">Cancel</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
	<v-dialog v-model="dialog_contract" max-width="420">
		<v-card>
			<v-card-title primary-title class="title">
				Contract details
			</v-card-title>
			<v-container fluid pa>
				<v-layout column>
					<v-layout row wrap class="my-1">
						<v-flex xs4>
							Status:
						</v-flex>
						<v-flex xs8>
							{{ contract.status }}
						</v-flex>
					</v-layout>
					<v-layout row wrap class="my-1">
						<v-flex xs4>
							User details:
						</v-flex>
						<v-flex xs8>
							{{ contract.user_id }}
						</v-flex>
					</v-layout>
					<v-layout row wrap class="my-1">
						<v-flex xs4>
							Booking details:
						</v-flex>
						<v-flex xs8>
							{{ contract.booking_id }}
						</v-flex>
					</v-layout>
					<v-layout row wrap class="my-1">
						<v-flex xs4>
							Minimum rating:
						</v-flex>
						<v-flex xs8>
							{{ contract.minimum_rating  }}
						</v-flex>
					</v-layout>
					<v-layout row wrap class="my-1">
						<v-flex xs4>
							Expected refund:
						</v-flex>
						<v-flex xs8>
							{{ contract.expected_refund  }}
						</v-flex>
					</v-layout>
					<v-layout row wrap class="my-1">
						<v-flex xs4>
							Created at:
						</v-flex>
						<v-flex xs8>
							{{ formatDate(contract.created_at)  }}
						</v-flex>
					</v-layout>
				</v-layout>
			</v-container>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn flat @click="dialog_contract = false">Cancel</v-btn>
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
			dialog_contract: false,

			user: {},
			users: [],
			contract: {},
			contracts: [],
			total: 0,
			pagination: null,
			rppi: [10, 25, 50, 100],

		}
	},
	created() {
		// setInterval(this.getUsers, 2000);
		this.getUsers();
		this.getContracts();
	},
	methods: {

		saveUser(item) {
			// setup query endpoint
			let endpoint = 'https://bot.tripchat.fun/api/player/' + item.id;
			this.$axios.put(endpoint, item)
				.then(response => {
					this.getUsers();
				})
				.catch(error => {
					console.log(error);
				})
				.finally(() => {
					this.dialog_user = false;
				});
		},

		getUsers() {
			// setup query endpoint
			let endpoint = 'https://bot.tripchat.fun/api/players';
			this.$axios.get(endpoint)
				.then(response => {
					this.users = response.data;
				})
				.catch(error => {
					console.log(error);
				})
				.finally(() => {
					// this.getUsers();
					// setInterval(this.getUsers, 3000);
				});
		},

		getContracts() {
			// setup query endpoint
			let endpoint = 'https://bot.tripchat.fun/api/contracts';
			this.$axios.get(endpoint)
				.then(response => {
					this.contracts = response.data;
				})
				.catch(error => {
					console.log(error);
				})
				.finally(() => {
					// this.getContracts();
					// setInterval(this.getContracts, 3000);
				});
		},

		seeItem(current_user) {
			this.user = current_user;
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
