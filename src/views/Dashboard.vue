<template>
<div class="">
	<v-layout row wrap>
		<v-flex xs12 md4 class="px-1">
			<v-card tile class="my-2 py-2">
				<v-layout row wrap>
					<v-flex xs5 class="px-2">
						Guets
					</v-flex>
					<v-flex xs3 class="text-xs-right px-2">
						Rating
					</v-flex>
					<v-flex xs1 class="text-xs-right px-2">
						Trips
					</v-flex>
					<v-flex xs3 class="text-xs-right px-2">
						Total value
					</v-flex>
				</v-layout>
			</v-card>
			<v-card>
				<v-layout row wrap>
					<v-data-iterator :items="users" :pagination.sync="pagination_user" :total-items="total_user" :rows-per-page-items="rppi_user" style="width: 100%">
						<template slot="item" slot-scope="props">
							<v-layout row wrap @click="seeItem(props.item)" style="cursor: pointer;">
								<v-flex xs5 class="py-2 px-2">
									<v-layout row>
										<v-avatar size="50" class="mx-2">
											<img :src="props.item.avatar_url">
										</v-avatar>
										<v-layout column justify-center class="px-1">
											<div class="">
												{{props.item.firstname}}
											</div>
											<div class="">
												{{props.item.lastname}}
											</div>
										</v-layout>
									</v-layout>
								</v-flex>
								<v-flex xs3 class="text-xs-right py-2 px-1">
									<v-layout column justify-center fill-height>
										<div>
											<v-icon v-if="getRatingInfo(props.item.rating) === 'red--text'" color="red" class="px-2">warning</v-icon>
											<v-icon v-if="getRatingInfo(props.item.rating) === 'green--text'" color="green" class="px-2">star</v-icon>
											<span :class="getRatingInfo(props.item.rating)">{{props.item.rating}}</span>
										</div>
									</v-layout>
								</v-flex>
								<v-flex xs1 class="text-xs-right py-2 px-1">
									<v-layout column justify-center fill-height>
										<div class="">
											{{props.item.bookings_count}}
										</div>
									</v-layout>
								</v-flex>
								<v-flex xs3 class="text-xs-right py-2 px-1">
									<v-layout column justify-center fill-height>
										<div class="">
											${{props.item.bookings_total}}
										</div>
									</v-layout>
								</v-flex>
							</v-layout>
							<v-divider></v-divider>
						</template>
					</v-data-iterator>
				</v-layout>
			</v-card>
		</v-flex>
		<v-flex xs12 md8 class="px-1">
			<v-card tile class="my-2 py-2">
				<v-layout row wrap>
					<v-flex xs3 class="px-4">
						User
					</v-flex>
					<v-flex xs2 class="px-2">
						Booking
					</v-flex>
					<v-flex xs3 class="px-2">
						Hotel
					</v-flex>
					<v-flex xs2 class="text-xs-right">
						Expected refund
					</v-flex>
					<v-flex xs2 class="text-xs-center">
						Status
					</v-flex>
				</v-layout>
			</v-card>
			<v-card>
				<v-layout row wrap>
					<v-data-iterator :items="contracts" :pagination.sync="pagination_contract" :total-items="total_contract" :rows-per-page-items="rppi_contract" style="width: 100%">
						<template slot="item" slot-scope="props">
							<v-layout row wrap @click="seeContract(props.item)" style="cursor: pointer;">
								<v-flex xs3 class="py-2 px-2">
									<v-layout row>
										<v-avatar size="50" class="mx-2">
											<img :src="props.item.player.avatar_url">
										</v-avatar>
										<v-layout column justify-center class="px-2">
											<div class="">
												{{props.item.player.firstname}}
											</div>
											<div class="">
												{{props.item.player.lastname}}
											</div>
										</v-layout>
									</v-layout>
								</v-flex>
								<v-flex xs2 class="pa-2">
									{{props.item.booking_id}}
								</v-flex>
								<v-flex xs3 class="py-2 px-2">
									<v-layout row>
										<v-avatar size="50" class="mx-2" tile>
											<img :src="props.item.booking.hotel_image" style="border-radius: 5px">
										</v-avatar>
										<v-layout column justify-center class="px-2">
											<div class="">
												{{props.item.booking.hotel_name}}
											</div>
										</v-layout>
									</v-layout>
								</v-flex>
								<v-flex xs2 class="pa-2 text-xs-right">
									<v-layout column justify-center fill-height>
										<div class="">
											${{props.item.refund}}
										</div>
									</v-layout>
								</v-flex>
								<v-flex xs2 class="pa-2 text-xs-center">
									<v-layout column justify-center fill-height>
										<div :class="getStatusInfo(props.item.status)">
											{{props.item.status}}
										</div>
									</v-layout>
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
					<v-layout row class="py-1">
						<v-avatar size="50" class="mx-2">
							<img :src="user.avatar_url">
						</v-avatar>
						<v-layout column justify-center class="px-2">
							<div>
								{{user.firstname}}
							</div>
							<div>
								{{user.lastname}}
							</div>
						</v-layout>
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
						<v-flex xs6>
							<v-layout row class="px-2 pb-1">
								<span class="px-2 pb-2">Trips:</span> {{ user.bookings_count }}

							</v-layout>
						</v-flex>
						<v-flex xs9>
							<v-layout row>
								<span class="pt-2 px-2">Total value:</span>
								<v-text-field class="pa-0 ma-0" v-model="user.bookings_total" style="max-width:100px" />
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

	<v-dialog v-model="dialog_contract" max-width="640">
		<v-card>
			<v-card-title primary-title class="title">
				Contract details
			</v-card-title>
			<v-container fluid pa>
				<v-layout row wrap>
					<v-flex xs6>
						<div class="py-1 font-weight-bold">
							Guest
						</div>
						<v-layout row class="py-1">
							<v-avatar size="50" class="mx-2">
								<img :src="contract.player.avatar_url">
							</v-avatar>
							<v-layout column justify-center class="px-2">
								<div>
									{{contract.player.firstname}}
								</div>
								<div>
									{{contract.player.lastname}}
								</div>
							</v-layout>
						</v-layout>
					</v-flex>
					<v-flex xs6>
						<div class="py-1 font-weight-bold">
							Hotel
						</div>
						<v-layout row wrap class="py-1">
							<v-avatar size="50" class="mx-2" tile>
								<img :src="contract.booking.hotel_image" style="order-radius: 5px">
							</v-avatar>
							<v-layout column justify-center class="px-2">
								<div>
									{{contract.booking.hotel_name}}
								</div>
							</v-layout>
						</v-layout>
					</v-flex>
					<v-flex xs6 class="py-1">
						<span class="font-weight-bold">Rating:</span> {{contract.player.rating}}
					</v-flex>
					<v-flex xs6 class="py-1">
						<span class="font-weight-bold">Price:</span> {{contract.booking.price}}
					</v-flex>
					<v-flex xs6 class="py-1">
						<span class="font-weight-bold">Status: </span><span :class="getStatusInfo(contract.status)">{{contract.status}}</span>
					</v-flex>
					<v-flex xs6 class="py-1">
						<span class="font-weight-bold">Refound:</span> {{contract.refund}}
					</v-flex>
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
			contract: {
				booking: {
					hotel_image: null,
					hotel_name: null
				},
				player: {
					avatar_url: null,
					firstname: null,
					lastname: null,
				},
			},
			contracts: [],
			total_user: 0,
			pagination_user: null,
			rppi_user: [50, 100],
			total_contract: 0,
			pagination_contract: null,
			rppi_contract: [50, 100],

		}
	},
	created() {
		setInterval(this.getUsers, 5000);
		setInterval(this.getContracts, 5000);
		// this.getUsers();
		// this.getContracts();
	},
	methods: {

		saveUser(item) {
			// setup query endpoint
			let endpoint = 'https://bot.tripchat.fun/api/player/' + item.id;
			this.$axios.put(endpoint, item) // eslint-disable-next-line
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

		getRatingInfo(value) {
			if(value < 40) {
				return "red--text"
			}
			if(value > 70) {
				return "green--text"
			}
		},

		getStatusInfo(value) {
			if(value === "refunded") {
				return "red--text"
			}
			if(value === "closed") {
				return "blue--text"
			}
		},

		seeContract(current_contract) {
			this.contract = current_contract;
			this.dialog_contract = true;
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
