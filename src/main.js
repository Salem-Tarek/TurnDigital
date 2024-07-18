import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/scss/tailwind_config.scss";

createApp(App).use(store).use(router).mount("#app");
