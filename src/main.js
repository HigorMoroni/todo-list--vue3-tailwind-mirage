import { createApp } from "vue";
import App from "./App.vue";

import "@/assets/css/main.css";
import "./services/api";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import store from "./store";

library.add(faTrashCan, faCheck);

createApp(App).use(store).component("fa-icon", FontAwesomeIcon).mount("#app");
