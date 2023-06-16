import { defineStore } from "pinia";
import { hotels } from "@/utils";

export const useBookingStore = defineStore("booking", {
  state: () => ({
    hotels: hotels,
    user: {
      name: "",
      email: "",
      phoneNumber: ""
    },
    userHotels: []
  }),
  getters: {},
  actions: {
    findUser() {
      const user = localStorage.getItem("user");
      const userHotels = localStorage.getItem("userHotels");
      if (user) this.user = JSON.parse(user);
      if (userHotels) this.userHotels = JSON.parse(userHotels);
    },
    bookAHotel(id, data) {
      const hotel = this.hotels.find((hotel) => hotel.id === id);
      this.user = data;
      this.userHotels.push(hotel);
      localStorage.setItem("user", JSON.stringify(this.user));
      localStorage.setItem("userHotels", JSON.stringify(this.userHotels));
    },
    cancelBooking(id) {
      this.userHotels = this.userHotels.filter((hotel) => hotel.id !== id);
      localStorage.setItem("userHotels", JSON.stringify(this.userHotels));
    }
  }
});
