<template>
<div>
	<div class="img-bg">
		<v-layout column fill-height justify-center align-center>
			<div class="home-title pt-5" style="text-shadow: 2px 2px grey;">
				TripChat
			</div>
			<div class="display-2 white--text text-xs-center my-1" style="text-shadow: 2px 2px grey;">
				Always in contact with you <br>for your trip
			</div>
			<div class="" style="width: 350px">
				<v-btn color="orange" block dark large class="my-3" @click="gotoTripChat()">
					<img src="../assets/messenger.svg" alt="" height="20px" class="mr-2">
					Get your trip
				</v-btn>
			</div>
		</v-layout>
	</div>
	<v-container style="max-width: 1640px; margin: 0 auto">
		<v-layout row wrap>
			<v-layout row wrap>
				<v-flex md4 xs12 class="pa-3">
					<v-card height="450px">
						<v-card-title class="trip-card-title">
							<div class="div-icon">
								<v-icon>directions_walk</v-icon>
							</div>
							<div class="pt-3 title">
								Are you a traveler?
							</div>
						</v-card-title>
						<v-card-text class="px-5">
							Then planning your next trip has never been easier. Whether it’s for business or pleasure, TripChat will cater traveling to your needs. We’ve all been there - booking seemingly great hotels that do not match expectations on site. Our solution
							is simple - we will guarantee your satisfaction. Depending on your satisfaction level, you could be eligible for part of your money back. Happy with your stay? Build up your reputation as a fair reviewer and receive discounts on future
							reservations.

						</v-card-text>
					</v-card>
				</v-flex>
				<v-flex md4 xs12 class="pa-3">
					<v-card height="450px">
						<v-card-title class="trip-card-title">
							<div class="div-icon">
								<v-icon>hotel</v-icon>
							</div>
							<div class="pt-3 title">
								Are you a hotel?
							</div>
						</v-card-title>
						<v-card-text class="px-5">
							Managing a hotel on online platforms can be a tedious process. Listing your hotels on popular sites could be very expensive, and deciding on what tools to use could be confusing. That’s where we come in - TripChat naturally connects to all of
							our systems to offer you the exposure you need while also keeping costs in mind. Just set-up your hotel with the help of our specialised support team and let TripChat handle the rest. It has never been easier to integrate your property in the
							online environment.
						</v-card-text>
					</v-card>
				</v-flex>
				<v-flex md4 xs12 class="pa-3">
					<v-card height="450px">
						<v-card-title class="trip-card-title">
							<div class="div-icon">
								<v-icon>chat</v-icon>
							</div>
							<div class="pt-3 title">
								TripChat
							</div>
						</v-card-title>
						<v-card-text class="px-5">
							TripChat is the only friendly neighbourhood travel assistant that can guarantee your traveling satisfaction. It has never been easier to book your next trip. All you need is to strike up your conversation with TripChat and tell him where you
							would want to go, he will handle the rest. No more searching for the best deals on multiple websites, no more scrolling through endless “offers” that change depending on your location, no more complicated payment process - TripChat is here to
							streamline your experience and make booking a hotel easier than ever.
						</v-card-text>
					</v-card>
				</v-flex>
			</v-layout>
		</v-layout>

	</v-container>
</div>
</template>
<script>
export default {
	methods: {
		gotoTripChat() {
			window.open("http://m.me/tripchat.fun");
		}

	}
}
</script>
<style scoped>
.content-app.index-div {
	margin: 0 !important;
	padding: 0 !important;
}

.home-title {
	font-size: 100px;
	color: #2196F3;
}

.container {
	margin: 0;
	max-width: 100%;
	width: 100%;
	padding: 0;
}

.img-bg {
	background-image: url("../assets/index.jpg");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 650px;
}

.trip-card-title {
	display: flex;
	flex-direction: column;
}

.trip-card-title .div-icon {
	border: 2px solid #2196F3;
	border-radius: 60px;
	padding: 15px;
}

.trip-card-title .div-icon .v-icon {
	font-size: 80px;
	color: #2196F3;
}
</style>
