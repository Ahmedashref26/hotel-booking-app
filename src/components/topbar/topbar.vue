<template>
  <div class="pb-2 border-b">
    <div class="mx-auto my-0 md:px-6 px-3">
      <div class="flex relative pt-1 lg:pt-0 gap-6 justify-center">
        <div class=" mx-auto tab:flex flex-1 lg:flex-row gap-4 lg:gap-x-3 relative items-center hidden">
          <Dropdown :fields="countries" icon="ph:map-pin" class="!w-auto" menuBtnClass="bg-stone-200 !h-12 w-64" />
          <Dropdown :fields="types" icon="carbon:hotel" class="!w-auto" menuBtnClass="bg-stone-200 !h-12 w-64" />
          <Dropdown :fields="prices" icon="solar:tag-price-linear" class="!w-auto"
            menuBtnClass="bg-stone-200 !h-12 w-64" />
          <button
            class="bg-secondary hover:bg-red-400 transition w-fit px-4 rounded-lg flex justify-center items-center text-white text-lg h-12"
            @click="$router.push('/hotels')">
            <Icon icon="material-symbols:search" class="text-2xl" />
          </button>
        </div>
        <div class="map-btn">
          <button>
            <div class="btn">
              <div class="text-sm px-1" @click="emit('toggleMap')">{{ showMap ? 'Hide Map' : 'Show Map' }}</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Dropdown from '@/components/dropdown/dropdown.vue'

const emit = defineEmits(['toggleMap'])

defineProps(['showMap'])

const countries = ['Location (any)', 'United States', "Canada", "Italy"]
const types = ['Hotel Type (any)', "Resorts", "Economy Hotels", "Luxury"]
const prices = ['Price range (any)', "100 - 500", "1000 - 10000", "15000 - 21000"]
</script>
<style lang="scss">
.map-btn {
  background-image: url(../../assets/images/mapbg.png);
  background-repeat: no-repeat;
  background-size: 146px;
  width: 146px;
  padding: 8px 0px;
  justify-content: center;
  align-self: center;
  display: flex;

  button {
    border: 0px;
    margin: 0px;
    padding: 0px;
    user-select: none;
    outline: none;
    position: relative;
    text-decoration: none;
    background: none;
    color: inherit;
    appearance: none;
    align-items: center;
    justify-content: center;
    min-height: 34px;
    min-width: 34px;
    cursor: pointer;
    display: inline-block;

    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 34px;
      min-width: 34px;
      padding: 6px;
      font-size: 1.4rem;
      line-height: 2rem;
      font-weight: 500;
      letter-spacing: normal;
      border-radius: 6px;
      box-shadow: rgba(39, 36, 41, 0.12) 0px 6px 24px, rgba(39, 36, 41, 0.14) 0px 4px 8px;
      color: var(--color-primary);
      background-color: #ffffff;
      border: 1px solid #cac8cc;
    }
  }
}
</style>