<template>
  <div
    class="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-10 lg:shadow-lg bg-white lg:bg-transparent lg:backdrop-blur rounded-lg">
    <Dropdown :fields="countries" icon="ph:map-pin" label="Select your Destination" />
    <Dropdown :fields="types" icon="carbon:hotel" label="Select your Place" />
    <Dropdown :fields="prices" icon="solar:tag-price-linear" label="Choose Price Range" />
    <button
      class="bg-secondary hover:bg-red-400 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg"
      @click="$router.push('/hotels')">
      <Icon icon="material-symbols:search" class="text-2xl" />
    </button>
  </div>
</template>
<script setup>
import Dropdown from '@/components/dropdown/dropdown.vue'

const countries = ['Location (any)', 'United States', "Canada", "Italy"]
const types = ['Hotel Type (any)', "Resorts", "Economy Hotels", "Luxury"]
const prices = ['Price range (any)', "100 - 500", "1000 - 10000", "15000 - 21000"]
</script>