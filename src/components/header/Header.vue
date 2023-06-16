<template>
  <header class="py-6 mb-4 border-b">
    <div class="container px-2 mx-auto flex justify-between items-center">
      <router-link to="/">
        <img src="@/assets/images/hotalLogo.png" alt="Logo" class="h-9">
      </router-link>
      <div class="flex items-center gap-6">
        <router-link to="/mybookings" v-if="userBookings"
          class="text-secondary hover:bg-secondary hover:text-white px-4 py-3 rounded-lg transition">My
          Bookings</router-link>
        <router-link to="/hotels" class="bg-secondary hover:bg-red-400 text-white px-4 py-3 rounded-lg transition">Book
          now</router-link>
      </div>
    </div>
  </header>
  <router-view />
</template>
<script setup>
import { storeToRefs } from "pinia"
import { useBookingStore } from '@/store'
import { computed } from "vue"

const { userHotels } = storeToRefs(useBookingStore())

const userBookings = computed(() => userHotels.value.length > 0)
</script>