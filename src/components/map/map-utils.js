import { ref } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const getTile = (tile) => {
  switch (tile) {
    case "light":
      // Positron layer
      return L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      );
    case "dark":
      // Dark layer
      return L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      );
    default:
      // default layer
      return L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
  }
};

// init map
export const useMap = (elemId, { center, zoom, tile } = {}) => {
  const map = ref(null);
  map.value = L.map(elemId, {
    center: center || [41.8719, 12.5674],
    zoom: zoom || 13,
    layers: [getTile(tile)]
  });
  // map.value.locate({ setView: true, maxZoom: zoom || 13 });
  // map.value.on("locationfound", (e) => {
  //   map.value.setView(e.latlng, zoom || 13);
  // });
  // map.value.on("locationerror", (e) => {
  //   console.error("Error retrieving user location:", e.message);
  // });
  return { map, L };
};

// Marker
export const useMarker = (map) => {
  const markers = ref([]);

  const addMarker = (latLng, hotel) => {
    try {
      const markerIcon = L.icon({
        iconUrl: "/pulse.svg",
        iconSize: [32, 32]
      });
      const marker = L.marker([latLng.lat, latLng.lng], {
        icon: markerIcon
      }).addTo(map.value);

      // Add label with price to the marker
      marker
        .bindTooltip(
          `<div class='text-secondary flex flex-col items-center justify-center'><span>${hotel.name}</span><span>$${hotel.price}</span> </div>`,
          {
            permanent: true,
            direction: "top"
          }
        )
        .openTooltip();

      // const popupContent = popup;

      // console.log(popupContent);

      // // Bind the popup to the marker
      // marker.bindPopup(popupContent);
      // // Open the popup when the marker is clicked
      // marker.on("click", () => {
      //   marker.openPopup();
      // });
      markers.value.push(marker);
    } catch (error) {
      console.error("Error 🔥🔥🔥==>", error);
    }
  };

  return {
    addMarker,
    markers
  };
};
