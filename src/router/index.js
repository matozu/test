import { createRouter, createWebHistory } from "vue-router";
import Component_1 from "../components/Component_1.vue";
import Component_2 from "../components/Component_2.vue";
import Component_3 from "../components/Component_3.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/1",
    },
    {
      path: "/1",
      component: Component_1,
    },
    {
      path: "/2",
      component: Component_2,
    },
    {
      path: "/3",
      component: Component_3,
    },
    {
      path: "/:anything(.*)",
      redirect: "/1",
    },
  ],
});

export default router;
