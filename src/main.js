import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Quasar } from "quasar";
import "quasar/src/css/index.sass";
import "normalize.css/normalize.css";

createApp(App).use(Quasar, { plugins: {} }).use(router).mount("#app");
