<template>
  <div id="map" class="absolute xl:relative w-full h-full">
  </div>
</template>
    
<script setup>
import { onMounted } from "vue";
import { useMap, useMarker } from "./map-utils";
import { useBookingStore } from '@/store'
import { storeToRefs } from "pinia"
// import HotelCard from "@/components/cards/map-card.vue"

const { hotels } = storeToRefs(useBookingStore())

onMounted(() => {
  const { map } = useMap("map", { zoom: 15, tile: "light" });

  const { addMarker, markers } = useMarker(map);
  console.log(hotels.value)
  hotels.value.forEach(hotel => addMarker(hotel.destination, hotel))
  console.log(markers.value.map(marker => marker.getLatLng()))
  // Create a LatLngBounds object with all the marker locations
  const bounds = L.latLngBounds(markers.value.map(marker => [marker.getLatLng().lat, marker.getLatLng().lng]))
  // Fit the map to the bounds
  map.value.fitBounds(bounds);
});
</script>
    
<style lang="scss">
#map {
  height: calc(100vh - 168px);
  z-index: 20;
}

.leaflet-control-attribution {
  display: none;
}
</style>
    