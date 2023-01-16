import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "amfe-flexible";

import "@/assets/style/app.scss";

createApp(App).use(router).mount("#app");
