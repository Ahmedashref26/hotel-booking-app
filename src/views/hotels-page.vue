<template>
  <Topbar @toggleMap="toggle" :showMap="showMap" />
  <div class="flex items-center justify-center relative">
    <div
      class="flex flex-col md:flex-row md:flex-wrap tab:min-w-[850px] tab:max-w-[920px] p-4 items-center gap-4 justify-center"
      :class="!showMap ? '' : 'scrollable-content'">
      <HotelCard :hotel="hotel" v-for="hotel in hotels" :key="hotel.id" @book="doBook" />
    </div>
    <Map v-if="showMap" />
  </div>
  <FormModal :id="selectedId" :show="showModal" @close="showModal = false" />
</template>
<script setup>
import Topbar from "@/components/topbar/topbar.vue"
import HotelCard from "@/components/cards/hotel-card.vue"
import { useBookingStore } from '@/store'
import { storeToRefs } from "pinia"
import Map from "@/components/map/map.vue"
import FormModal from '@/components/modals/form-modal.vue'
import { onMounted, onUnmounted, ref } from "vue"
import { useNotification } from "@kyvg/vue3-notification";

const { notify } = useNotification()
const { hotels } = storeToRefs(useBookingStore())
const { cancelBooking } = useBookingStore()
const showModal = ref(false)
const selectedId = ref(false)

const handleResize = () => {
  if (window.innerWidth < 1280 && window.innerWidth > 1200) {
    showMap.value = false
  }
  if (window.innerWidth > 1280) {
    showMap.value = true
  }
}
onMounted(() => {
  //1280px
  handleResize();
  window.addEventListener('resize', handleResize);
})
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
})

const doBook = (id, action) => {
  if (action === 'add') {
    selectedId.value = id
    showModal.value = true
  }
  else {
    cancelBooking(id)
    notify({ type: "success", text: "Your Booking cancelled Successfully" });
  }
}

const showMap = ref(window.innerWidth > 1280)

const toggle = () => {
  showMap.value = !showMap.value
}
</script>
<style lang="scss" scoped>
.scrollable-content {
  height: calc(100vh - 168px);
  overflow-y: auto;

  // @media (max-width: '1280px') {
  //   height: 100%
  // }

  &::-webkit-scrollbar {
    width: 0.5rem;
    /* Adjust the width as needed */
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
}
</style>