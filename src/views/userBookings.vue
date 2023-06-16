<template>
  <div class="flex items-center justify-center">
    <div
      class="flex flex-col md:flex-row md:flex-wrap tab:min-w-[850px] tab:max-w-[920px] p-4 items-center gap-4 justify-center scrollable-content"
      v-if="userHotels.length > 0">
      <HotelCard :hotel="hotel" v-for="hotel in userHotels" :key="hotel.id" @book="doBook" class="shadow-xl" />
    </div>
    <div class="" v-else>
      <div class="w-full max-w-lg p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
        <div>
          <div class="text-center p-3 flex-auto justify-center leading-6 items-center flex flex-col">
            <Icon icon="ph:question" class="text-6xl" />
            <h2 class="text-2xl font-bold py-4">You don't have Bookings</h2>
          </div>
          <div class="p-3 mt-2 text-center space-x-4 md:block">
            <router-link to="/hotels"
              class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100">
              Go To Booking
            </router-link>
            <router-link to="/"
              class="mb-2 md:mb-0 bg-secondary border border-secondary px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-red-400">
              Go To Home
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import HotelCard from "@/components/cards/hotel-card.vue"
import { useBookingStore } from '@/store'
import { storeToRefs } from "pinia"
import { useNotification } from "@kyvg/vue3-notification";

const { notify } = useNotification()
const { userHotels } = storeToRefs(useBookingStore())
const { cancelBooking } = useBookingStore()

const doBook = (id) => {
  cancelBooking(id)
  notify({ type: "success", text: "Your Booking cancelled Successfully" });
}
</script>
<style lang="scss" scoped></style>