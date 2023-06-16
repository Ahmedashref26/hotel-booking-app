<template>
  <div class="flex p-2 gap-2 flex-col shadow-lg  items-center w-80 rounded-xl">
    <img src="@/assets/images/hotel1.jpg" alt="hotel img" class=" rounded-xl h-48 w-64">
    <div class="flex flex-col gap-3 w-full max-w-[700px] p-3">
      <div class="flex gap-1 items-center">
        <Icon icon="ic:round-star" class="text-secondary text-base" />
        <span>{{ hotel.ratings }}</span> <span class="text-slate-300">({{ hotel.ratingCount }})</span>
      </div>
      <div class="flex justify-between items-center">
        <h2 class="text-primary text-xl font-medium">{{ hotel.name }}</h2>
        <span class="text-secondary text-3xl font-semibold">${{ hotel.price }}</span>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-1">
          <Icon icon="ph:map-pin" class="text-secondary text-sm" />
          <p class="text-slate-500 text-base">{{ hotel.location }}</p>
        </div>
        <span class="text-slate-300 hidden">per night</span>
      </div>
      <div class="flex justify-between items-center flex-col gap-4 mt-4">
        <div class="flex items-center gap-4">
          <span class="text-slate-300 flex gap-3 items-center text-left">
            <Icon icon="material-symbols:bed-outline" class="text-secondary text-2xl " />{{ hotel.beds }}
          </span>
          <span class="text-slate-300 flex gap-3 items-center text-left">
            <Icon icon="carbon:area" class="text-secondary text-2xl" />{{ hotel.area }}
          </span>
          <span class="text-slate-300 flex gap-3 items-center text-left">
            <Icon icon="fluent-mdl2:people" class="text-secondary text-2xl" />{{ hotel.guests }}
          </span>
        </div>
        <button class="bg-red-400 text-white px-4 py-3 rounded-lg transition w-full" @click="doAction">{{
          unBooked ? 'Book now' : "Cancel" }}</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from "pinia"
import { useBookingStore } from '@/store'
import { computed } from "vue"

const emit = defineEmits(['book'])

const { userHotels } = storeToRefs(useBookingStore())

const props = defineProps({
  hotel: {
    type: Object,
    default: () => ({})
  }
})
const unBooked = computed(() => (userHotels.value.findIndex(hotel => hotel.id === props.hotel.id) === -1))

const doAction = () => {
  const action = unBooked.value ? 'add' : 'remove'
  emit('book', props.hotel.id, action)
}
</script>