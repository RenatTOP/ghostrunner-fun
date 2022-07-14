import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import { Quasar, AddressbarColor, AppFullscreen, Loading, Meta } from "quasar"
import "quasar/src/css/index.sass"
import "@quasar/extras/fontawesome-v6/fontawesome-v6.css"

createApp(App)
    .use(Quasar, { plugins: { AddressbarColor, AppFullscreen, Loading, Meta } })
    .use(router)
    .mount("#app")
