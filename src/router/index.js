import { createRouter, createWebHistory } from "vue-router";
import Page_1 from "../pages/Page_1.vue";
import Page_2 from "../pages/Page_2.vue";
import Page_3 from "../pages/Page_3.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/1",
    },
    {
      path: "/1",
      component: Page_1,
    },
    {
      path: "/2",
      component: Page_2,
    },
    {
      path: "/3",
      component: Page_3,
    },
    {
      path: "/:anything(.*)",
      redirect: "/1",
    },
  ],
});

export default router;
