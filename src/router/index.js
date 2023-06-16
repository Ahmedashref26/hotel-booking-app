import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/home-page.vue";
import Header from "@/components/header/Header.vue";
const HotelsPage = () => import("@/views/hotels-page.vue");
const userBookingPage = () => import("@/views/userBookings.vue");
const ErrorPage = () => import("@/views/error-404-page.vue");

const routes = [
  {
    path: "",
    component: Header,
    children: [
      { path: "", name: "home-page", component: HomePage },
      {
        path: "hotels",
        name: "hotels-page",
        component: HotelsPage
      },
      {
        path: "mybookings",
        name: "userBooking",
        component: userBookingPage
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    component: ErrorPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
