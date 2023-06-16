import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "@/assets/scss/app.scss";
import { Icon } from "@iconify/vue";
import VueTelInput from "vue-tel-input";
import "vue-tel-input/dist/vue-tel-input.css";
import Notifications from "@kyvg/vue3-notification";

const app = createApp(App).use(createPinia()).use(router);

// Register global components
app.component("Icon", Icon);
app.use(VueTelInput);
app.use(Notifications);

app.mount("#app");
