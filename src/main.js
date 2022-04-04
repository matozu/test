import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import VueEasyLightbox from "vue-easy-lightbox";
import somePlugin from "./plugins/somePlugin";

createApp(App)
  .use(router)
  .use(somePlugin, {
    greetings: {
      hello: "Bonjour!",
    },
  })
  .component("vue-easy-lightbox", VueEasyLightbox)
  .mount("#app");
