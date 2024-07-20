import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'tw-elements';
import "./assets/scss/tailwind_config.scss";

import axios from 'axios';
window.axios = axios;

createApp(App).use(store).use(router).mount("#app");
